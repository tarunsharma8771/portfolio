import type { Metadata } from "next";
import Link from "next/link";
import {
  Armchair,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CircleCheck,
  CodeXml,
  Lightbulb,
  MessageSquare,
  Search,
  UserRound,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI in Education",
  description:
    "An illustrative classroom example showing how students use AI to plan a test and explain what the evidence shows.",
};

export default function AIEducation() {
  return (
    <>
      <header className="ai-hero">
        <div className="container ai-hero-layout">
          <div className="ai-hero-copy">
            <p className="eyebrow">AI in education</p>
            <h1>
              AI-Assisted Learning.
              <br />
              Human-Led Thinking.
            </h1>
            <p>
              AI helps students plan a test. Students run it and explain the
              result.
            </p>
          </div>
          <ol className="ai-hero-stages" aria-label="Learning approach">
            <li>
              <BrainCircuit size={27} aria-hidden="true" />
              <strong>Understand</strong>
            </li>
            <li>
              <Lightbulb size={27} aria-hidden="true" />
              <strong>Apply</strong>
            </li>
            <li>
              <CodeXml size={27} aria-hidden="true" />
              <strong>Create</strong>
            </li>
          </ol>
        </div>
      </header>

      <section
        className="ai-section"
        aria-labelledby="ai-classroom-title"
        id="ai-classroom-example"
      >
        <div className="container">
          <p className="eyebrow">Illustrative classroom example</p>
          <h2 id="ai-classroom-title">
            Two students book the last seat. Who gets it?
          </h2>
          <p className="ai-explainer">
            One seat remains in a campus workshop. Two students click Book at
            nearly the same time.
          </p>
          <ol className="ai-workflow">
            <li>
              <span className="interior-icon">
                <Search size={21} aria-hidden="true" />
              </span>
              <h3>Spot the risk</h3>
              <p>Both students see one seat available.</p>
              <div className="ai-booking-diagram" aria-hidden="true">
                <UsersRound size={32} />
                <ArrowRight size={18} />
                <Armchair size={32} />
              </div>
              <ArrowRight
                className="ai-workflow-next"
                size={18}
                aria-hidden="true"
              />
              <ArrowDown
                className="ai-workflow-next-mobile"
                size={18}
                aria-hidden="true"
              />
            </li>
            <li className="ai-workflow-hint">
              <span className="interior-icon">
                <MessageSquare size={21} aria-hidden="true" />
              </span>
              <h3>Ask AI what to test</h3>
              <blockquote>
                “What should I check if both requests arrive together?”
              </blockquote>
              <p className="ai-workflow-result">
                <strong>Suggested test:</strong> Try two bookings at the same
                time.
              </p>
              <ArrowRight
                className="ai-workflow-next"
                size={18}
                aria-hidden="true"
              />
              <ArrowDown
                className="ai-workflow-next-mobile"
                size={18}
                aria-hidden="true"
              />
            </li>
            <li>
              <span className="interior-icon">
                <CodeXml size={21} aria-hidden="true" />
              </span>
              <h3>Run the test</h3>
              <p>
                Send both requests and check whether the system confirms more
                than one booking.
              </p>
              <div className="ai-test-diagram">
                <ul className="ai-workflow-tests">
                  <li>
                    <UserRound size={15} aria-hidden="true" /> Student A
                    requests a seat
                  </li>
                  <li>
                    <UserRound size={15} aria-hidden="true" /> Student B
                    requests a seat
                  </li>
                </ul>
                <span className="ai-test-target" aria-hidden="true">
                  <ArrowRight size={17} />
                  <Armchair size={27} />
                </span>
              </div>
              <ArrowRight
                className="ai-workflow-next"
                size={18}
                aria-hidden="true"
              />
              <ArrowDown
                className="ai-workflow-next-mobile"
                size={18}
                aria-hidden="true"
              />
            </li>
            <li>
              <span className="interior-icon">
                <CircleCheck size={21} aria-hidden="true" />
              </span>
              <h3>Explain the rule</h3>
              <p>
                Only one booking should succeed. What should the other student
                see?
              </p>
              <p className="ai-workflow-result">
                <strong>Design goal</strong>
              </p>
              <ul className="ai-booking-outcomes">
                <li>Booking confirmed</li>
                <li>Workshop full</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <section
        className="ai-section learning-band"
        aria-labelledby="ai-assessment"
      >
        <div className="container ai-assessment-band">
          <h2 id="ai-assessment">How I assess understanding</h2>
          <p className="ai-explainer">
            I ask students to adjust the scenario to two available seats,
            predict what should happen, and explain how they would verify it.
          </p>
          <Link className="text-link" href="/teaching#case-12">
            View the guided AI classroom case{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
