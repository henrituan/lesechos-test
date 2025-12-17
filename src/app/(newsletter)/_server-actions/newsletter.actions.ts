import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import {
  APINewsletterItemType,
  NewslettersGroupType,
} from "../_types/newsletter";

export async function getNewslettersGroups(): Promise<NewslettersGroupType[]> {
  const apiNewsletters: APINewsletterItemType[] = NEWSLETTER_ITEMS;
  const newslettersBySite: Record<string, NewslettersGroupType> = {};

  // Group newsletters by site
  for (const apiNewsletter of apiNewsletters) {
    if (newslettersBySite[apiNewsletter.site]) {
      newslettersBySite[apiNewsletter.site].items.push(apiNewsletter);
    } else {
      newslettersBySite[apiNewsletter.site] = {
        id: apiNewsletter.site,
        site: apiNewsletter.site,
        items: [apiNewsletter],
      };
    }
  }

  // Convert to Array before sending to client
  const newslettersGroups = Object.values(newslettersBySite);
  return Promise.resolve(newslettersGroups);
}
