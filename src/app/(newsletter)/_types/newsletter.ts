export interface APINewsletterItemType {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

export type UserPermission = "can_register" | "need_subscribe";

export interface NewsletterItemType {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  userPermission: UserPermission;
}

export interface NewslettersGroupType {
  id: string;
  site: string;
  items: NewsletterItemType[];
}
