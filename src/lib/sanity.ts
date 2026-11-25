import { createClient } from "@sanity/client";
import type { Article, Video, ProjectItem } from "@/types/content";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-01";
// Public, read-only queries only. Never expose write tokens in browser code.
const client = projectId ? createClient({ projectId, dataset, apiVersion, useCdn: true }) : null;
export async function getCmsArticles(): Promise<Article[]> {
  if (!client) return [];
  try {
    const data = await client.fetch<Array<{title:string;url:string;summary?:string;publishedAt?:string}>>(
      `*[_type == "article" && defined(url)] | order(publishedAt desc){title,"url":url,summary,publishedAt}`,
      {}, { next: { revalidate: 1800 } },
    );
    return data.filter(x => /^https:\/\//.test(x.url)).map(x => ({ title:x.title, href:x.url, summary:x.summary, date:x.publishedAt, source:"CMS" }));
  } catch { return []; }
}
export async function getCmsVideos(): Promise<Video[]> {
  if (!client) return [];
  try {
    const data = await client.fetch<Array<{title:string;url:string;publishedAt?:string}>>(
      `*[_type == "video" && defined(url)] | order(publishedAt desc){title,"url":url,publishedAt}`,
      {}, { next: { revalidate: 1800 } },
    );
    return data.filter(x => /^https:\/\//.test(x.url)).map(x => ({ title:x.title, href:x.url, date:x.publishedAt, source:"CMS" }));
  } catch { return []; }
}
export async function getCmsProjects(): Promise<ProjectItem[]> {
  if (!client) return [];
  try {
    const data = await client.fetch<Array<{title:string;description:string;url?:string;status?:string}>>(
      `*[_type == "project"] | order(_createdAt desc){title,description,"url":url,status}`,
      {}, { next: { revalidate: 1800 } },
    );
    return data.map(x => ({ title:x.title, description:x.description, href:x.url, status:x.status }));
  } catch { return []; }
}
