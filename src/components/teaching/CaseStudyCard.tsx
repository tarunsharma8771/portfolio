import { ArrowUpRight } from "lucide-react";
import type { TeachingCaseStudy } from "@/types/teaching";

const statusLabels = {
  delivered: "Delivered",
  planned: "Planned",
  proposed: "Proposed",
};

export function CaseStudyCard({ study }: { study: TeachingCaseStudy }) {
  return (
    <details className="teaching-case" id={`case-${study.id}`}>
      <summary>
        <span className="teaching-case-number">{study.id}</span>
        <span className="teaching-case-summary">
          <span className="teaching-case-kicker">
            <span>Problem-first case study</span>
            <span className={`status status-${study.status}`}>{statusLabels[study.status]}</span>
            {study.featured && <span className="status status-featured">Featured</span>}
          </span>
          <span className="teaching-case-category">{study.categoryLabel}</span>
          <strong>{study.title}</strong>
        </span>
        <span className="teaching-case-toggle" aria-hidden="true">
          <span className="toggle-open">View case</span>
          <span className="toggle-close">Show less</span>
        </span>
      </summary>
      <div className="teaching-case-content">
        <div className="teaching-case-grid">
          <section><h3>01 / The problem</h3><p>{study.problem}</p></section>
          <section><h3>02 / Classroom activity</h3><p>{study.classroomActivity}</p></section>
          <section><h3>03 / Approach</h3><p>{study.approach}</p></section>
          <section>
            <h3>04 / Intended learning outcomes</h3>
            <ul>{study.learningOutcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
          </section>
        </div>
        <div className="teaching-case-bottom">
          <div className="tags" aria-label="Technology topics">
            {study.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          {study.resources?.map((resource) => (
            <a className="text-link" key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title} <ArrowUpRight size={15} />
            </a>
          ))}
        </div>
        {study.id === "12" && (
          <div className="callout teaching-research-alignment">
            <strong>Research alignment:</strong> This case study connects to proposed PhD research on
            an AI-assisted, industry-aligned project-based learning framework for undergraduate programming education.
          </div>
        )}
      </div>
    </details>
  );
}
