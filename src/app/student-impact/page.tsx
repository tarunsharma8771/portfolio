import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartNoAxesColumn, Quote } from "lucide-react";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Student Learning & Assessment",
  description:
    "What students demonstrate through independent problem-solving, testing, and revision in undergraduate computing.",
};

const criteria = [
  {
    focus: "Independent problem-solving",
    evidence:
      "Adapt a feature to a changed requirement and explain why you made the change.",
  },
  {
    focus: "Testing and design decisions",
    evidence:
      "Show the expected and actual results for a normal case and an edge case. Explain the design decision those tests check.",
  },
  {
    focus: "Response to feedback",
    evidence:
      "Identify one issue raised in review, explain what you changed, and show how you checked the revision.",
  },
];

export default function StudentImpact() {
  return (
    <div className="learning-page">
      <PageHero
        eyebrow="Student learning & assessment"
        title="How I assess student learning"
        description="In computing projects, I look for evidence that students can explain a design choice, test their work, and adapt it independently."
      />
      <Section title="What students can demonstrate">
        <div className="assessment-evidence">
          <table aria-label="Examples of evidence for each assessment focus">
            <thead>
              <tr>
                <th scope="col">Assessment focus</th>
                <th scope="col">Evidence to show</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map(({ focus, evidence }) => (
                <tr key={focus}>
                  <th scope="row">{focus}</th>
                  <td>{evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="learning-note">
          <Link className="text-link" href="/teaching#case-10">
            See the software development classroom case{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </p>
        <section
          className="teaching-feedback"
          aria-labelledby="teaching-feedback"
        >
          <h2 id="teaching-feedback">Teaching Feedback</h2>
          <p>
            Mid-semester · Academic Year 2026–27 · Symbiosis Institute of
            Technology
          </p>
          <div className="teaching-feedback-grid">
            <figure className="teaching-feedback-card">
              <div className="teaching-feedback-feature">
                <div className="teaching-feedback-quotation">
                  <Quote size={28} aria-hidden="true" />
                  <blockquote>“Your performance is excellent.”</blockquote>
                </div>
                <div className="teaching-feedback-score">
                  <strong>4.56</strong>
                  <span>Reported score</span>
                </div>
              </div>
              <figcaption className="teaching-feedback-source">
                <strong>Head, Department of Applied Sciences</strong>
                <span>Software and Generative AI Tools</span>
              </figcaption>
            </figure>
            <article
              className="teaching-feedback-card"
              aria-label="Civil Engineering teaching feedback"
            >
              <div className="teaching-feedback-feature">
                <span className="teaching-feedback-icon" aria-hidden="true">
                  <ChartNoAxesColumn size={28} />
                </span>
                <div className="teaching-feedback-score">
                  <strong>4.38</strong>
                  <span>Reported score</span>
                </div>
              </div>
              <div className="teaching-feedback-source">
                <strong>Head, Department of Civil Engineering</strong>
                <span>Cyber Security Essentials</span>
              </div>
            </article>
          </div>
        </section>
        <section
          className="learning-panel learning-panel-tinted"
          aria-labelledby="feedback"
        >
          <h2 id="feedback">How feedback informs teaching</h2>
          <p>
            Student feedback and classroom observations help me decide what to
            revisit. For example, if students can demonstrate a feature but
            struggle to explain how it works, I can ask them to trace one
            request through the application and explain what each part does.
          </p>
        </section>
      </Section>
    </div>
  );
}
