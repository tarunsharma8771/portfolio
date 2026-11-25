import { articlesFallback, projects } from "@/data/site";
import { getMediumArticles, getYouTubeVideos, dedupeByHref } from "@/lib/feeds";
import { getCmsArticles, getCmsVideos, getCmsProjects } from "@/lib/sanity";
import type { ProjectItem } from "@/types/content";

function newestFirst<T extends { date?: string }>(items: T[]): T[] {
  return items.sort((first, second) => {
    const firstDate = Date.parse(first.date ?? "");
    const secondDate = Date.parse(second.date ?? "");
    if (!Number.isFinite(firstDate)) return Number.isFinite(secondDate) ? 1 : 0;
    if (!Number.isFinite(secondDate)) return -1;
    return secondDate - firstDate;
  });
}

export async function loadArticles() {
  const [cms, feed] = await Promise.all([getCmsArticles(), getMediumArticles()]);
  return newestFirst(dedupeByHref([...cms, ...feed, ...articlesFallback]));
}
export async function loadVideos() {
  const [cms, feed] = await Promise.all([getCmsVideos(), getYouTubeVideos()]);
  return newestFirst(dedupeByHref([...cms, ...feed]));
}
export async function loadProjects(): Promise<ProjectItem[]> {
  const cms = await getCmsProjects();
  return [...projects, ...cms];
}
