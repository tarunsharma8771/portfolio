import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { ContentItem } from "@/types/content";
export function PageHero({eyebrow,title,description}: {eyebrow:string;title:string;description:string}) {
  return <section className="page-hero"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{description}</p></div></section>;
}
export function Section({title,eyebrow,children}: {title?:string;eyebrow?:string;children:ReactNode}) {
  return <section className="section"><div className="container">{eyebrow && <p className="eyebrow">{eyebrow}</p>}{title && <h2>{title}</h2>}{children}</div></section>;
}
export function Card({item}: {item:ContentItem}) {
  const body = <><div className="card-top">{item.category && <span className="chip">{item.category}</span>}{item.status && <span className="chip">{item.status}</span>}</div><h3>{item.title}</h3><p>{item.description}</p>{item.href && <span className="card-link">Explore <ArrowRight size={16}/></span>}</>;
  return item.href ? item.href.startsWith("/") ? <Link href={item.href} className="card card-click">{body}</Link> : <a href={item.href} className="card card-click" target="_blank" rel="noopener noreferrer">{body}</a> : <article className="card">{body}</article>;
}
export function Cards({items}: {items:ContentItem[]}) {return <div className="cards">{items.map((item,i) => <Card key={`${item.title}-${i}`} item={item}/>)}</div>}
