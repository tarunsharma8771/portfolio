import type { Metadata } from "next";
import { ArrowUpRight, Github } from "lucide-react";
import { site } from "@/data/site";
import { loadProjects } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

function ProjectVisual({ type }: { type?: "event-driven" | "canteen" | "observability" }) {
  if (type === "event-driven") {
    return (
      <div className="project-visual project-visual-event" aria-hidden="true">
        <span className="flow-box">Order</span>
        <span className="flow-box flow-box-main">Event Broker</span>
        <div><span className="flow-box">Payment</span><span className="flow-box">Inventory</span><span className="flow-box">Notify</span></div>
      </div>
    );
  }
  if (type === "canteen") {
    return (
      <div className="project-visual project-visual-canteen" aria-hidden="true">
        <div className="canteen-window">
          <strong>Smart Canteen</strong>
          <i /><i /><i />
        </div>
        <span className="canteen-chat">☺</span>
      </div>
    );
  }
  if (type === "observability") {
    return (
      <div className="project-visual project-visual-observability" aria-hidden="true">
        <svg viewBox="0 0 120 70">
          <path d="M8 59V10M8 59h105" />
          <polyline points="14,51 32,30 45,42 62,17 78,31 94,12" />
          <rect x="76" y="45" width="32" height="7" />
          <rect x="76" y="56" width="22" height="5" />
        </svg>
      </div>
    );
  }
  return <div className="project-visual project-visual-generic" aria-hidden="true"><Github size={27} /></div>;
}

export default async function Projects() {
  const items = await loadProjects();
  return (
    <>
      <section className="project-hero">
        <div className="container">
          <p className="eyebrow">Projects</p>
          <h1>Applied Computing &amp; Engineering</h1>
          <p>Translating engineering experience into practical solutions, technical experimentation, and meaningful learning experiences.</p>
        </div>
      </section>

      <section className="project-section">
        <div className="container">
          <h2>Selected Projects</h2>
          <div className="project-list">
            {items.map((item, index) => (
              <article className="project-row" key={`${item.title}-${index}`}>
                <ProjectVisual type={item.visual} />
                <div className="project-details">
                  {item.category && <p className="project-category">{item.category}</p>}
                  <h3>{item.title}</h3>
                  <p className="project-description">{item.description}</p>
                  {item.technologies && (
                    <p className="project-technologies">{item.technologies.join(" · ")}</p>
                  )}
                  {item.relatedArticle && (
                    <a className="project-related-link" href={item.relatedArticle.href} target="_blank" rel="noopener noreferrer">
                      {item.relatedArticle.label} <ArrowUpRight size={13} />
                    </a>
                  )}
                  {item.href && (
                    <a className="project-related-link" href={item.href} target="_blank" rel="noopener noreferrer">
                      View project <ArrowUpRight size={13} />
                    </a>
                  )}
                  {item.status && <span className="project-status">{item.status}</span>}
                </div>
              </article>
            ))}
          </div>

          <section className="github-callout">
            <div>
              {site.github
                ? <a href={site.github} target="_blank" rel="noopener noreferrer"><h2>Explore My GitHub <ArrowUpRight size={16} /></h2></a>
                : <h2>Explore My GitHub</h2>}
              <p>Source code, technical experiments, and learning resources.</p>
            </div>
            {site.github && <a className="github-icon-link" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile"><Github size={24} /></a>}
          </section>
        </div>
      </section>
    </>
  );
}
