import type { Metadata } from "next";
import { ArrowRight, CodeXml, Layers3, Lightbulb, Rocket, Target } from "lucide-react";
import { TeachingCaseStudies } from "@/components/teaching/TeachingCaseStudies";
export const metadata: Metadata = { title: "Teaching Innovation" };
export default function Teaching() {
  return (
    <>
      <section className="teaching-hero">
        <div className="container teaching-hero-inner">
          <div className="teaching-hero-copy">
            <p className="eyebrow">Teaching innovation</p>
            <h1>Real Problems.<br />Practical Learning.<br />Lasting Impact.</h1>
            <p>
              A problem-first approach that connects academic concepts with real-world engineering,
              hands-on practice, and independent thinking.
            </p>
          </div>
          <div className="teaching-journey" aria-hidden="true">
            <svg className="journey-landscape" viewBox="0 0 600 320" preserveAspectRatio="none">
              <path className="journey-mountain-back" d="M0 300 130 225l72 35 128-115 81 72 109-120 80 73v130Z" />
              <path className="journey-mountain-front" d="m0 300 110-45 78 25 103-52 86 31 105-54 118 63v52H0Z" />
              <path className="journey-path" d="M24 252c85 3 81-75 172-75s93-62 180-62 89-66 200-66" />
            </svg>
            <div className="journey-node journey-node-problem">
              <span><Target size={23} /></span><strong>Problem</strong><small>(Real-World)</small>
            </div>
            <div className="journey-node journey-node-learn">
              <span><CodeXml size={23} /></span><strong>Learn</strong><small>(Core Concepts)</small>
            </div>
            <div className="journey-node journey-node-build">
              <span><Layers3 size={23} /></span><strong>Build</strong><small>(Hands-On)</small>
            </div>
            <div className="journey-node journey-node-think">
              <span><Rocket size={23} /></span><strong>Think</strong><small>(Independently)</small>
            </div>
          </div>
        </div>
      </section>

      <section className="teaching-framework-section">
        <div className="container">
          <p className="eyebrow">My teaching approach</p>
          <h2>The What · Why · How Framework</h2>
          <div className="teaching-framework">
            <article className="framework-card framework-what">
              <Target size={28} />
              <div><h3>What</h3><p>Identify a meaningful real-world problem.</p></div>
            </article>
            <ArrowRight className="framework-arrow" size={20} aria-hidden="true" />
            <article className="framework-card framework-why">
              <Lightbulb size={28} />
              <div><h3>Why</h3><p>Understand the need for the concept.</p></div>
            </article>
            <ArrowRight className="framework-arrow" size={20} aria-hidden="true" />
            <article className="framework-card framework-how">
              <CodeXml size={28} />
              <div><h3>How</h3><p>Apply, build, and validate a solution.</p></div>
            </article>
          </div>
          <div className="teaching-motto">
            <Target size={24} aria-hidden="true" />
            <span>Beyond Learning Concepts — Learning to Think.</span>
          </div>
        </div>
      </section>

      <TeachingCaseStudies />
    </>
  );
}
