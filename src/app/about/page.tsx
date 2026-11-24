import type { Metadata } from "next";
import {
  AboutContributions,
  AboutHero,
  CareerOverview,
  ExpertiseAndVision,
} from "@/components/about/AboutSections";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <AboutHero />
      <section className="about-compact-section">
        <div className="container">
          <div className="about-section-heading">
            <p className="eyebrow">Career at a glance</p>
            <h2>Professional Journey</h2>
          </div>
          <CareerOverview />
          <AboutContributions />
          <ExpertiseAndVision />
        </div>
      </section>
    </>
  );
}
