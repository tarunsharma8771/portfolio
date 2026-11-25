import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Project-Based Learning" };

const steps = [
  {
    title: "Define",
    description: "Identify users, constraints, and success criteria.",
    deliverable: "Requirements brief",
  },
  {
    title: "Build",
    description: "Prototype in stages and test the features.",
    deliverable: "Working prototype and tests",
  },
  {
    title: "Reflect",
    description:
      "Demonstrate the solution, explain trade-offs, and identify improvements.",
    deliverable: "Demo and reflection",
  },
];

export default function ProjectBasedLearning() {
  return (
    <div className="learning-page">
      <PageHero
        eyebrow="Project-based learning"
        title="Learn by building, testing, and explaining"
        description="Students turn an open-ended problem into a working solution and demonstrate how it meets their requirements."
      />
      <Section>
        <section className="learning-panel" aria-labelledby="canteen">
          <h2 id="canteen">Smart Canteen</h2>
          <p>
            A Python application project combining web interfaces, APIs, and
            analysis of student feedback.
          </p>
          <Link className="text-link" href="/teaching#case-09">
            View classroom case <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>
        <section className="learning-followup" aria-labelledby="project-cycle">
          <h2 id="project-cycle">A repeatable project cycle</h2>
          <ol className="learning-grid">
            {steps.map(({ title, description, deliverable }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="learning-deliverable">
                  <strong>Suggested deliverable</strong> · {deliverable}
                </p>
              </li>
            ))}
          </ol>
        </section>
        <section
          className="learning-proposal"
          aria-labelledby="curriculum-idea"
        >
          <p className="eyebrow">Proposed</p>
          <div>
            <h2 id="curriculum-idea">Curriculum idea</h2>
            <p>
              Revisit a project across semesters as students develop stronger
              design and testing skills.
            </p>
          </div>
        </section>
      </Section>
    </div>
  );
}
