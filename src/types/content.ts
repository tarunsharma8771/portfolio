export type ProjectItem = {
  title: string;
  description: string;
  href?: string;
  category?: string;
  status?: string;
  technologies?: string[];
  relatedArticle?: { label: string; href: string };
  visual?: "event-driven" | "canteen" | "observability";
};
export type Article = { title: string; href: string; summary?: string; date?: string; source: "Medium" | "CMS" };
export type Video = { title: string; href: string; date?: string; source: "YouTube" | "CMS" };
