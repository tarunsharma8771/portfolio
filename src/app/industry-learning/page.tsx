import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero, Section } from "@/components/ui";
import { distributedSystemsCases } from "@/data/teaching/distributed-systems";

export const metadata: Metadata = { title: "Industry-Connected Learning" };

const practices = [
  {
    title: "Design trade-offs",
    description:
      "Compare reliability, cost, and maintainability before choosing an architecture.",
  },
  {
    title: "Team engineering",
    description:
      "Clarify requirements, review changes, and test before integration.",
  },
  {
    title: "Technical communication",
    description: "Document a decision and explain it to a reviewer.",
  },
];

const caseStudy = distributedSystemsCases[0];
const relatedArticle = caseStudy.resources?.find(
  (resource) => resource.type === "article",
);

export default function IndustryLearning() {
  return (
    <div className="learning-page">
      <PageHero
        eyebrow="Industry-connected learning"
        title="Bring engineering decisions into the classroom"
        description="Students compare designs under realistic constraints and explain why a choice fits the problem."
      />
      <Section title="How industry practice informs teaching">
        <ul className="learning-grid">
          {practices.map(({ title, description }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
        <section
          className="learning-panel learning-panel-tinted"
          aria-labelledby="failure-example"
        >
          <p className="eyebrow">Planned classroom case</p>
          <h2 id="failure-example">What happens when a service fails?</h2>
          <p>
            Compare synchronous requests with queued events. Explain how each
            approach affects recovery, complexity, and the user experience.
          </p>
          <div className="learning-links">
            <Link className="text-link" href={`/teaching#case-${caseStudy.id}`}>
              Explore the planned distributed systems case{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            {relatedArticle && (
              <a
                className="text-link"
                href={relatedArticle.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read about event-driven architecture{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </section>
      </Section>
    </div>
  );
}
