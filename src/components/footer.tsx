import Link from "next/link";
import { site } from "@/data/site";
export function Footer() { return <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {site.name}. {site.tagline}</span><div><Link href="/contact">Contact</Link><a href={site.medium} target="_blank" rel="noopener noreferrer">Medium</a></div></div></footer>; }
