import {
  ArrowRight,
  BrainCircuit,
  CodeXml,
  Lightbulb,
} from "lucide-react";
import { assessmentSteps, learningStages, practices } from "@/data/ai-education";

export function AIHero() {
  return (
    <section className="ai-hero">
      <div className="container ai-hero-inner">
        <div className="ai-hero-copy">
          <p className="eyebrow">AI in education</p>
          <h1>AI-Assisted Learning.<br />Human-Led Thinking.</h1>
          <p>
            Integrating AI into computing education to strengthen understanding,
            creativity, and independent problem-solving.
          </p>
          <strong>Use AI to strengthen thinking, not outsource it.</strong>
        </div>
        <div className="ai-learning-process" aria-label="Understand, apply, and create with AI">
          <div><span><BrainCircuit size={21} /></span><strong>Understand</strong><small>Learn about AI</small></div>
          <ArrowRight aria-hidden="true" />
          <div><span><Lightbulb size={21} /></span><strong>Apply</strong><small>Learn with AI</small></div>
          <ArrowRight aria-hidden="true" />
          <div><span><CodeXml size={21} /></span><strong>Create</strong><small>Build with AI</small></div>
        </div>
      </div>
    </section>
  );
}

export function ClassroomPractices() {
  return (
    <section className="ai-section ai-practices">
      <div className="container">
        <p className="eyebrow">Classroom practice</p>
        <h2>AI Beyond the Textbook</h2>
        <div className="ai-practice-grid">
          {practices.map(({ title, description, icon: Icon }) => (
            <article key={title}>
              <Icon size={20} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConnectedLearning() {
  return (
    <section className="ai-section ai-connected">
      <div className="container">
        <p className="eyebrow">Interconnected learning</p>
        <h2>One Problem. Evolving Possibilities.</h2>
        <p className="ai-section-intro">
          The Smart Canteen — a familiar real-world problem connecting computing fundamentals
          with intelligent applications.
        </p>
        <div className="ai-learning-stages" aria-label="Learning progression from programming to web and API integration">
          {learningStages.map((stage) => (
            <article className={stage.featured ? "is-featured" : ""} key={stage.number}>
              <span>{stage.number}</span>
              <strong>{stage.title}</strong>
              <small>{stage.detail}</small>
            </article>
          ))}
        </div>
        <p className="ai-connection-summary">New Concepts · Same Problem · Growing Capabilities</p>
      </div>
    </section>
  );
}

export function AssessmentInnovation() {
  return (
    <section className="ai-section ai-assessment">
      <div className="container">
        <p className="eyebrow">Assessment innovation</p>
        <h2>Assessing Thinking, Not Just Output.</h2>
        <p className="ai-section-intro">
          Students evaluate, refine, and justify AI-generated work rather than simply accept it.
        </p>
        <ol className="ai-assessment-steps">
          {assessmentSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <details className="ai-classroom-example">
          <summary>Classroom example: AI-generated promotional image</summary>
          <p>
            Students plan a prompt, generate a draft visual, evaluate how well it meets the brief,
            refine their instructions, and reflect on the choices and limitations of the result.
            The focus is on the reasoning process, not simply the generated image.
          </p>
        </details>
      </div>
    </section>
  );
}

export function AcademicVision() {
  return (
    <section className="ai-section ai-vision">
      <div className="container ai-vision-inner">
        <div>
          <p className="eyebrow">Academic vision</p>
          <h2>The Future of AI-Assisted Learning</h2>
          <p>
            Exploring structured AI integration, industry-aligned projects, and independent
            problem-solving in undergraduate computing education.
          </p>
        </div>
        <ul aria-label="Academic interests">
          <li>AI-Assisted Programming</li>
          <li>Project-Based Learning</li>
          <li>Competency Assessment</li>
          <li>Independent Thinking</li>
        </ul>
      </div>
      <p className="ai-page-signoff">AI empowers. Humans think. Education transforms.</p>
    </section>
  );
}
