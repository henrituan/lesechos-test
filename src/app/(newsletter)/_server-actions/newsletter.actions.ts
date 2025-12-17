import { cookies } from "next/headers";

import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
} from "@/mocks/user";

import {
  APINewsletterItemType,
  NewslettersGroupType,
  NewsletterItemType,
  UserPermission,
} from "../_types/newsletter";

async function getUserSubscriptionsFromCookies() {
  const cookiesStore = await cookies();
  const userId = cookiesStore.get("userId")?.value;

  if (userId === "1") {
    return [];
  }

  if (userId === "2") {
    return USER_WITH_ONE_SUBSCRIPTION.subscriptions;
  }

  if (userId === "3") {
    return USER_WITH_MULTIPLE_SUBSCRIPTION.subscriptions;
  }

  return [];
}

function getUserPermission(
  articleSubscriptions: string[],
  userSubscriptions: string[]
): UserPermission {
  if (articleSubscriptions.length === 0) {
    return "can_register";
  }

  if (userSubscriptions.length === 0) {
    return "need_subscribe";
  }

  if (
    articleSubscriptions.some((subscription) =>
      userSubscriptions.includes(subscription)
    )
  ) {
    return "can_register";
  }

  return "need_subscribe";
}

export async function getNewslettersGroups(): Promise<NewslettersGroupType[]> {
  const apiNewsletters: APINewsletterItemType[] = NEWSLETTER_ITEMS;
  const newslettersBySite: Record<string, NewslettersGroupType> = {};
  const userSubscriptions = await getUserSubscriptionsFromCookies();

  // Group newsletters by site
  for (const apiNewsletter of apiNewsletters) {
    const newsletterItem: NewsletterItemType = {
      id: apiNewsletter.id,
      image: apiNewsletter.image,
      description: apiNewsletter.description,
      title: apiNewsletter.title,
      site: apiNewsletter.site,
      userPermission: getUserPermission(
        apiNewsletter.subscriptions,
        userSubscriptions
      ),
    };

    if (newslettersBySite[apiNewsletter.site]) {
      newslettersBySite[apiNewsletter.site].items.push(newsletterItem);
    } else {
      newslettersBySite[apiNewsletter.site] = {
        id: apiNewsletter.site,
        site: apiNewsletter.site,
        items: [newsletterItem],
      };
    }
  }

  // Convert to Array before sending to client
  const newslettersGroups = Object.values(newslettersBySite);
  return Promise.resolve(newslettersGroups);
}
