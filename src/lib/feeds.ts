import Parser from "rss-parser";
import type { Article, Video } from "@/types/content";
const parser = new Parser({ timeout: 5000 });
// RSS data is untrusted. Render titles as text, and only allow HTTPS destinations.
function safeUrl(url?: string): string | null {
  if (!url) return null;
  try { const parsed = new URL(url); return parsed.protocol === "https:" ? parsed.href : null; }
  catch { return null; }
}
export async function getMediumArticles(): Promise<Article[]> {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@tarun515");
    return feed.items.flatMap(item => {
      const href = safeUrl(item.link);
      return href && item.title ? [{ title: item.title, href, date: item.isoDate, source: "Medium" as const }] : [];
    }).slice(0, 20);
  } catch { return []; } // External feeds can be unavailable; fallback content remains visible.
}
export async function getYouTubeVideos(): Promise<Video[]> {
  const id = process.env.YOUTUBE_CHANNEL_ID;
  if (!id || !/^UC[\w-]{22}$/.test(id)) return [];
  try {
    const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${id}`);
    return feed.items.flatMap(item => {
      const href = safeUrl(item.link);
      return href && item.title ? [{ title: item.title, href, date: item.isoDate, source: "YouTube" as const }] : [];
    }).slice(0, 20);
  } catch { return []; }
}
export function dedupeByHref<T extends {href:string}>(items:T[]):T[] {
  const unique = new Map<string, T>();
  for (const item of items) {
    const key = item.href.split(/[?#]/)[0].replace(/\/$/, "");
    if (!unique.has(key)) unique.set(key, item);
  }
  return Array.from(unique.values());
}
