import type { Metadata } from "next";
import {
  ArrowUpRight,
  ChartNoAxesColumn,
  CodeXml,
  Layers3,
  Utensils,
} from "lucide-react";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui";
import { loadProjects } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

const projectIcons = {
  "event-driven": Layers3,
  canteen: Utensils,
  observability: ChartNoAxesColumn,
};

export default async function Projects() {
  const items = await loadProjects();
  return (
    <>
      <PageHero
        title="Projects"
        description="Selected work in software architecture, distributed systems, and computing education."
      />

      <section className="project-section">
        <div className="container">
          <h2>Selected Technical Work</h2>
          <div className="project-list">
            {items.map((item, index) => {
              const Icon = item.visual ? projectIcons[item.visual] : CodeXml;
              return (
                <article className="project-row" key={`${item.title}-${index}`}>
                  <span className="interior-icon">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <div className="project-details">
                    {item.category && (
                      <p className="project-category">{item.category}</p>
                    )}
                    <h3>{item.title}</h3>
                    <p className="project-description">{item.description}</p>
                    {item.technologies && (
                      <p className="project-technologies">
                        {item.technologies.join(" · ")}
                      </p>
                    )}
                    {item.relatedArticle && (
                      <a
                        className="project-related-link"
                        href={item.relatedArticle.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.relatedArticle.label} <ArrowUpRight size={13} />
                      </a>
                    )}
                    {item.href && (
                      <a
                        className="project-related-link"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View project <ArrowUpRight size={13} />
                      </a>
                    )}
                    {item.status && (
                      <span className="project-status">{item.status}</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {site.github && (
            <section className="github-callout">
              <div>
                <h2>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore My GitHub{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </h2>
                <p>
                  Source code, engineering explorations, and educational
                  applications.
                </p>
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
