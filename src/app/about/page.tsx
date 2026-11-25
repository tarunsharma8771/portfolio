import type { Metadata } from "next";
import { Cloud, CodeXml, GraduationCap, LibraryBig, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Tarun Kumar’s professional journey from software engineering to undergraduate computing education, academic interests, and qualifications.",
};

const milestones = [
  { year: "2005", title: "Industry & Technology", description: "Enterprise software and architecture" },
  { year: "2017", title: "Training & Mentoring", description: "Technical training for graduate engineers" },
  { year: "2026", title: "Teaching & Academia", description: "Undergraduate computing education" },
];

const interests = [
  {
    title: "Core Computing & Software Engineering",
    topics: "Programming · Databases · Software design · APIs",
    icon: CodeXml,
  },
  {
    title: "Advanced Computing",
    topics: "Cloud-native systems · Microservices · Cybersecurity · Observability",
    icon: Cloud,
  },
  {
    title: "AI & Emerging Technologies",
    topics: "Machine learning foundations · Generative AI · AI-assisted development",
    icon: Sparkles,
  },
  {
    title: "Computing Education",
    topics: "Project-based learning · Student mentoring · Industry-aligned curriculum",
    icon: LibraryBig,
  },
];

const qualifications = [
  { degree: "Master of Computer Applications", institution: "Nagpur University, India", year: "2005" },
  { degree: "Bachelor of Science", institution: "Jammu University, India", year: "2002" },
];

export default function About() {
  return (
    <>
      <header className="about-hero">
        <div className="container">
          <p className="eyebrow">About me</p>
          <h1>Bridging Industry &amp; Academia</h1>
          <p className="about-intro">
            My work in enterprise software and architecture led to mentoring graduate engineers and
            teaching undergraduate computing.
          </p>
        </div>
      </header>

      <div className="container about-content">
        <section className="about-journey" aria-labelledby="professional-journey">
          <h2 className="about-heading" id="professional-journey">Professional Journey</h2>
          <ol className="about-timeline">
            {milestones.map(({ year, title, description }) => (
              <li key={year}>
                <time dateTime={year}>{year}</time>
                <span className="about-timeline-dot" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="about-columns">
          <section aria-labelledby="academic-interests">
            <h2 className="about-heading" id="academic-interests">Areas of Academic Interest</h2>
            <ul className="about-interests">
              {interests.map(({ title, topics, icon: Icon }) => (
                <li key={title}>
                  <Icon size={24} aria-hidden="true" />
                  <div><h3>{title}</h3><p>{topics}</p></div>
                </li>
              ))}
            </ul>
          </section>

          <div className="about-sidebar">
            <section aria-labelledby="academic-vision">
              <p className="eyebrow">Academic vision</p>
              <h2 id="academic-vision">Teaching for Independence</h2>
              <p>
                I want students to explain their decisions, test their solutions, and apply what
                they learn to unfamiliar problems.
              </p>
            </section>
            <section aria-labelledby="qualifications">
              <h2 className="about-heading" id="qualifications">Qualifications</h2>
              <dl className="about-qualifications">
                {qualifications.map(({ degree, institution, year }) => (
                  <div key={degree}>
                    <dt><GraduationCap size={24} aria-hidden="true" />{degree}</dt>
                    <dd>{institution} · <time dateTime={year}>{year}</time></dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
