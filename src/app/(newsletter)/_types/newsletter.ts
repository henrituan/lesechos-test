export interface APINewsletterItemType {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

export interface NewsletterItemType {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
}

export interface NewslettersGroupType {
  id: string;
  site: string;
  items: NewsletterItemType[];
}
