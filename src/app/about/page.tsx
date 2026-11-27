import type { Metadata } from "next";
import { Cloud, CodeXml, GraduationCap, LibraryBig, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Tarun Kumar’s professional journey from software engineering to undergraduate computing education, academic interests, and qualifications.",
};

const milestones = [
  {
    year: "2005",
    title: "Enterprise Software Engineering",
    description: "Software development and system architecture for enterprise applications.",
  },
  {
    year: "2017",
    title: "Graduate Engineer Development",
    description: "Began training and mentoring graduate engineers as part of my role in industry.",
  },
  {
    year: "2026",
    title: "Undergraduate Computing Education",
    description: "Began teaching undergraduate computing as Visiting Faculty.",
  },
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
            My background spans enterprise software development, systems architecture, and
            technology leadership. Training and mentoring graduate engineers in industry has
            shaped how I teach undergraduate computing as Visiting Faculty.
          </p>
          <p className="about-intro">
            My teaching focuses on developing independent engineering judgment. Students learn
            to define a real-world problem, gather the information they need, and evaluate
            possible solutions. They use AI to explore alternatives and challenge assumptions,
            then test their chosen solution against the original requirements and explain what
            the results show.
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
