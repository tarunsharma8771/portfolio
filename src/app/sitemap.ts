import type { MetadataRoute } from "next";
const routes = ["", "/about", "/teaching", "/ai-education", "/industry-learning", "/project-based-learning", "/student-impact", "/projects", "/research", "/articles", "/videos", "/contact"];
export default function sitemap():MetadataRoute.Sitemap {const base=(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/,"");return routes.map(route=>({url:`${base}${route}`,changeFrequency:"monthly",priority:route ? .7 : 1}));}
