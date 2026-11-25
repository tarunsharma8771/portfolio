import type { Metadata } from "next";
import { ArrowUpRight, BookOpenText, Database } from "lucide-react";
import { loadArticles } from "@/lib/content";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Articles" };

const articleDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function getArticleCategory(title: string) {
  const normalizedTitle = title.toLowerCase();
  if (normalizedTitle.includes("dbms") || normalizedTitle.includes("database"))
    return "Database Systems";
  if (normalizedTitle.includes("event-driven"))
    return "System Design · Microservices";
  if (normalizedTitle.includes("api gateway")) return "Software Architecture";
  if (normalizedTitle.includes("observability"))
    return "Distributed Systems · Observability";
  if (
    /three[\s-]?tier/.test(normalizedTitle) ||
    normalizedTitle.includes("system design")
  )
    return "Software Architecture";
  return "Technology & Computing";
}

function ArticleVisual({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  const normalizedTitle = title.toLowerCase();
  if (category === "Database Systems") {
    return (
      <div
        className="article-visual article-visual-database"
        aria-hidden="true"
      >
        <Database size={28} strokeWidth={1.6} />
        <div>
          <i />
          <i />
          <i />
        </div>
        <span>TABLES · QUERIES</span>
      </div>
    );
  }
  if (category === "System Design · Microservices") {
    return (
      <div className="article-visual article-visual-events" aria-hidden="true">
        <div>
          <i />
          <i />
          <i />
        </div>
        <strong>Event Broker</strong>
        <div>
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }
  if (
    category === "Software Architecture" &&
    normalizedTitle.includes("api gateway")
  ) {
    return (
      <div className="article-visual article-visual-gateway" aria-hidden="true">
        <span>Client</span>
        <strong>API Gateway</strong>
        <div>
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }
  if (category === "Distributed Systems · Observability") {
    return (
      <div
        className="article-visual article-visual-observability"
        aria-hidden="true"
      >
        <svg viewBox="0 0 120 70">
          <path d="M8 59V10M8 59h105" />
          <polyline points="14,51 32,30 45,42 62,17 78,31 94,12" />
          <rect x="76" y="45" width="32" height="7" />
          <rect x="76" y="56" width="22" height="5" />
        </svg>
      </div>
    );
  }
  if (category === "Software Architecture") {
    return (
      <div
        className="article-visual article-visual-architecture"
        aria-hidden="true"
      >
        <span>USER INTERFACE</span>
        <i />
        <span>APPLICATION</span>
        <i />
        <span>DATA LAYER</span>
      </div>
    );
  }
  return (
    <div className="article-visual article-visual-generic" aria-hidden="true">
      <BookOpenText size={28} strokeWidth={1.6} />
      <span>TECH INSIGHT</span>
    </div>
  );
}

export default async function Articles() {
  const articles = await loadArticles();
  return (
    <>
      <header className="articles-hero">
        <div className="container">
          <p className="eyebrow">Articles &amp; insights</p>
          <h1>
            Sharing Knowledge.
            <br />
            Simplifying Complexity.
          </h1>
          <p>
            I write about software architecture, emerging technologies, and
            computing education through practical examples.
          </p>
        </div>
      </header>

      <section className="articles-section">
        <div className="container">
          <h2>Published Articles</h2>
          <div className="article-list">
            {articles.map((article) => {
              const category = getArticleCategory(article.title);
              const timestamp = Date.parse(article.date ?? "");
              return (
                <article className="article-row" key={article.href}>
                  <ArticleVisual title={article.title} category={category} />
                  <div className="article-details">
                    <p className="article-category">{category}</p>
                    <h3>{article.title}</h3>
                    {Number.isFinite(timestamp) && (
                      <time
                        className="article-date"
                        dateTime={new Date(timestamp).toISOString()}
                      >
                        {articleDate.format(timestamp)}
                      </time>
                    )}
                    {article.summary && (
                      <p className="article-summary">{article.summary}</p>
                    )}
                    <a
                      className="article-link"
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${article.title}`}
                    >
                      {article.source === "Medium"
                        ? "Read on Medium"
                        : "Read article"}{" "}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <section className="articles-follow">
            <div>
              <h2>Ideas Worth Sharing.</h2>
              <p>
                Follow my writing on technology, engineering, and education.
              </p>
              <a
                className="article-link"
                href={site.medium}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Medium <ArrowUpRight size={13} />
              </a>
            </div>
            <span className="medium-mark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </section>
        </div>
      </section>
    </>
  );
}
