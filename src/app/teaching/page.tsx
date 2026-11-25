import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, BrainCircuit, CodeXml, Lightbulb, Target } from "lucide-react";
import { TeachingCaseStudies } from "@/components/teaching/TeachingCaseStudies";
import { teachingCases } from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching and Assessment",
  description: "Undergraduate computing topics, teaching philosophy, and documented classroom case studies.",
};

const classroomTopics = [...new Set(
  teachingCases.filter((study) => study.status === "delivered").map((study) => study.categoryLabel),
)];

export default function Teaching() {
  return (
    <>
      <header className="teaching-hero">
        <div className="container teaching-hero-inner">
          <div className="teaching-hero-copy">
            <p className="eyebrow">Undergraduate computing education</p>
            <h1>Real Problems. Practical Learning.<br />Lasting Impact.</h1>
            <p className="teaching-hero-description">
              I use real engineering problems to help students understand computing principles,
              build solutions, and explain their decisions.
            </p>
            <Link className="text-link" href="#teaching-case-studies">
              Browse classroom case studies <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="teaching-journey" aria-hidden="true">
            <svg className="journey-landscape" viewBox="0 0 600 320" preserveAspectRatio="none">
              <path className="journey-mountain-back" d="M0 320 90 252l58 30 104-76 66 30 108-89 65 40 60-88 49 51v170Z" />
              <path className="journey-mountain-front" d="M0 320 123 275l48 18 109-60 57 28 112-60 65 22 86-74v171Z" />
              <path className="journey-path" d="M72 246c61 0 97-65 156-65s96-61 156-61 96-61 150-61" />
            </svg>
            <div className="journey-node journey-node-problem"><span><Target size={22} /></span><strong>Problem</strong></div>
            <div className="journey-node journey-node-learn"><span><BookOpen size={22} /></span><strong>Learn</strong></div>
            <div className="journey-node journey-node-build"><span><CodeXml size={22} /></span><strong>Build</strong></div>
            <div className="journey-node journey-node-think"><span><BrainCircuit size={22} /></span><strong>Think</strong></div>
          </div>
        </div>
      </header>

      <section className="teaching-framework-section">
        <div className="container">
          <p className="eyebrow">Teaching philosophy</p>
          <h2>The What · Why · How Framework</h2>
          <div className="teaching-framework">
            <article className="framework-card framework-what">
              <Target size={28} aria-hidden="true" />
              <div><h3>What</h3><p>Define the problem.</p></div>
            </article>
            <ArrowRight className="framework-arrow" size={20} aria-hidden="true" />
            <article className="framework-card framework-why">
              <Lightbulb size={28} aria-hidden="true" />
              <div><h3>Why</h3><p>Understand the principle.</p></div>
            </article>
            <ArrowRight className="framework-arrow" size={20} aria-hidden="true" />
            <article className="framework-card framework-how">
              <CodeXml size={28} aria-hidden="true" />
              <div><h3>How</h3><p>Apply and test.</p></div>
            </article>
          </div>
          <p className="teaching-philosophy">
            Students test their designs, justify their decisions, and apply the same principles to new problems.
          </p>
        </div>
      </section>

      <TeachingCaseStudies />

      <section className="section" id="teaching-areas">
        <div className="container">
          <h2>Undergraduate teaching areas</h2>
          <p>Topics covered in delivered classroom activities</p>
          <ul className="teaching-topic-list">
            {classroomTopics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
          <h3>Additional teaching area</h3>
          <p>Distributed systems, drawing on industry experience with microservices and observability.</p>
          <Link className="text-link" href="/ai-education">
            Explore AI in my classroom <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
