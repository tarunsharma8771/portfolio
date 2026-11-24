import type { Metadata } from "next";
import { BrainCircuit, Building2, ClipboardCheck, Network } from "lucide-react";

export const metadata: Metadata = { title: "Research" };

const interests = [
  {
    title: "AI in Computing Education",
    description: "AI-assisted learning and independent problem-solving.",
    icon: BrainCircuit,
  },
  {
    title: "Project-Based Learning",
    description: "Interconnected projects and experiential learning.",
    icon: Network,
  },
  {
    title: "Industry-Academia Alignment",
    description: "Bridging academic learning and industry expectations.",
    icon: Building2,
  },
  {
    title: "Competency-Based Assessment",
    description: "Evaluating practical skills and conceptual understanding.",
    icon: ClipboardCheck,
  },
];

export default function Research() {
  return (
    <>
      <section className="research-hero">
        <div className="container research-hero-inner">
          <div className="research-hero-copy">
            <p className="eyebrow">Research</p>
            <h1>Exploring the Future of Computing Education.</h1>
            <p>
              Research interests at the intersection of artificial intelligence,
              computing education, and industry-aligned learning.
            </p>
          </div>
          <div className="research-venn" role="img" aria-label="Research focus at the intersection of artificial intelligence, computing education, and industry-aligned learning">
            <div className="venn-circle venn-ai"><span>Artificial<br />Intelligence</span></div>
            <div className="venn-circle venn-education"><span>Computing<br />Education</span></div>
            <div className="venn-circle venn-industry"><span>Industry-Aligned<br />Learning</span></div>
            <strong>Research<br />Focus</strong>
          </div>
        </div>
      </section>

      <section className="research-section">
        <div className="container">
          <p className="eyebrow">Areas of exploration</p>
          <h2>Research Interests</h2>
          <div className="research-interest-grid">
            {interests.map(({ title, description, icon: Icon }) => (
              <article key={title}>
                <Icon size={19} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="research-stage">
        <div className="container">
          <p className="research-stage-label"><span />Early-stage exploration</p>
          <h2>A Research Journey Taking Shape.</h2>
          <p>
            Currently exploring research questions and developing a focused academic research
            direction. Research initiatives, publications, and findings will be shared as they evolve.
          </p>
        </div>
      </section>
    </>
  );
}
