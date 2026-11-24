import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { contributions, expertise } from "@/data/about";
import { site } from "@/data/site";

export function AboutHero() {
  return (
    <section className="about-compact-hero">
      <div className="container">
        <p className="eyebrow">About me</p>
        <h1>Bridging Industry &amp; Academia</h1>
        <p className="about-role">{site.title}</p>
        <p className="about-summary">
          With over two decades of experience in enterprise software development, system
          architecture, and technology leadership, I bring an industry-informed perspective
          to computing education.
        </p>
        <p className="about-subsummary">
          As a Visiting Faculty member at Symbiosis Institute of Technology, I focus on
          transforming academic knowledge into practical engineering capabilities through
          problem-first learning, experimentation, and student mentoring.
        </p>
      </div>
    </section>
  );
}

export function CareerOverview() {
  return (
    <div className="about-journey">
      <div className="about-metrics">
        <div><strong>20+</strong><span>Years of industry experience</span></div>
        <div><strong>100+</strong><span>Graduate engineers mentored</span></div>
        <div><strong>4.59/5</strong><span>Semester teaching feedback</span></div>
      </div>

      <div className="compact-timeline" aria-label="Professional journey timeline">
        <article><strong>2005</strong><i /><h3>Industry &amp; Technology</h3></article>
        <article><strong>2017</strong><i /><h3>Training &amp; Mentoring</h3></article>
        <article><strong>2026</strong><i /><h3>Teaching &amp; Academia</h3></article>
      </div>
    </div>
  );
}

export function AboutContributions() {
  return (
    <div className="about-contributions">
      {contributions.map(({ title, description, icon: Icon }) => (
        <article key={title}>
          <Icon size={21} />
          <div><h3>{title}</h3><p>{description}</p></div>
        </article>
      ))}
    </div>
  );
}

export function ExpertiseAndVision() {
  return (
    <div className="about-two-column">
      <section>
        <p className="eyebrow">Expertise</p>
        <h2>Areas of Academic Interest</h2>
        <div className="compact-expertise">
          {expertise.map(({ title, icon: Icon, items }) => (
            <article key={title}>
              <Icon size={19} />
              <div><h3>{title}</h3><p>{items}</p></div>
            </article>
          ))}
        </div>
      </section>

      <aside>
        <p className="eyebrow">Academic vision</p>
        <h2>Teaching for Independence</h2>
        <p>
          Advance computing education through innovation, industry-aligned curriculum,
          project-based learning, and responsible use of artificial intelligence.
        </p>
        <Link className="text-link" href="/research">
          Explore research interests <ArrowRight size={16} />
        </Link>

        <h2 className="qualification-heading">Qualifications</h2>
        <div className="compact-qualifications">
          <article><GraduationCap size={21} /><div><h3>MCA</h3><p>Nagpur University · 2005</p></div></article>
          <article><GraduationCap size={21} /><div><h3>B.Sc.</h3><p>Jammu University · 2002</p></div></article>
        </div>
      </aside>
    </div>
  );
}
