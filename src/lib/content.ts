import { articlesFallback, projects } from "@/data/site";
import { getMediumArticles, getYouTubeVideos, dedupeByHref } from "@/lib/feeds";
import { getCmsArticles, getCmsVideos, getCmsProjects } from "@/lib/sanity";
import type { ProjectItem } from "@/types/content";
export async function loadArticles() {
  const [cms, feed] = await Promise.all([getCmsArticles(), getMediumArticles()]);
  return dedupeByHref([...cms, ...feed, ...articlesFallback]);
}
export async function loadVideos() {
  const [cms, feed] = await Promise.all([getCmsVideos(), getYouTubeVideos()]);
  return dedupeByHref([...cms, ...feed]);
}
export async function loadProjects(): Promise<ProjectItem[]> {
  const cms = await getCmsProjects();
  return [...projects, ...cms];
}
