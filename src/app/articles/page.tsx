import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { loadArticles } from "@/lib/content";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Articles" };
export const revalidate = 1800;

function getArticleCategory(title: string) {
  const normalizedTitle = title.toLowerCase();
  if (normalizedTitle.includes("event-driven")) return "System Design · Microservices";
  if (normalizedTitle.includes("api gateway")) return "Software Architecture";
  if (normalizedTitle.includes("observability")) return "Distributed Systems · Observability";
  return "Technology & Computing";
}

function ArticleVisual({ category }: { category: string }) {
  if (category === "System Design · Microservices") {
    return (
      <div className="article-visual article-visual-events" aria-hidden="true">
        <div><i /><i /><i /></div>
        <strong>Event Broker</strong>
        <div><i /><i /><i /></div>
      </div>
    );
  }
  if (category === "Software Architecture") {
    return (
      <div className="article-visual article-visual-gateway" aria-hidden="true">
        <span>Client</span><strong>API Gateway</strong>
        <div><i /><i /><i /></div>
      </div>
    );
  }
  if (category === "Distributed Systems · Observability") {
    return (
      <div className="article-visual article-visual-observability" aria-hidden="true">
        <svg viewBox="0 0 120 70">
          <path d="M8 59V10M8 59h105" />
          <polyline points="14,51 32,30 45,42 62,17 78,31 94,12" />
          <rect x="76" y="45" width="32" height="7" />
          <rect x="76" y="56" width="22" height="5" />
        </svg>
      </div>
    );
  }
  return <div className="article-visual article-visual-generic" aria-hidden="true">Aa</div>;
}

export default async function Articles() {
  const articles = await loadArticles();
  return (
    <>
      <section className="articles-hero">
        <div className="container">
          <p className="eyebrow">Articles &amp; insights</p>
          <h1>Sharing Knowledge.<br />Simplifying Complexity.</h1>
          <p>
            Perspectives on software architecture, emerging technologies, and computing education,
            connecting technical concepts with real-world applications.
          </p>
        </div>
      </section>

      <section className="articles-section">
        <div className="container">
          <h2>Published Articles</h2>
          <div className="article-list">
            {articles.map((article) => {
              const category = getArticleCategory(article.title);
              return (
                <article className="article-row" key={article.href}>
                  <ArticleVisual category={category} />
                  <div className="article-details">
                    <p className="article-category">{category}</p>
                    <h3>{article.title}</h3>
                    {article.summary && <p className="article-summary">{article.summary}</p>}
                    <a className="article-link" href={article.href} target="_blank" rel="noopener noreferrer">
                      {article.source === "Medium" ? "Read on Medium" : "Read article"} <ArrowUpRight size={13} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <section className="articles-follow">
            <div>
              <h2>Ideas Worth Sharing.</h2>
              <p>Follow my writing on technology, engineering, and education.</p>
              <a className="article-link" href={site.medium} target="_blank" rel="noopener noreferrer">
                Follow on Medium <ArrowUpRight size={13} />
              </a>
            </div>
            <span className="medium-mark" aria-hidden="true"><i /><i /><i /></span>
          </section>
        </div>
      </section>
    </>
  );
}
