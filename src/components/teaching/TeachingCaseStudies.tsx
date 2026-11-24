"use client";

import { useMemo, useState } from "react";
import { teachingCases, teachingCategories } from "@/data/teaching";
import type { TeachingCategory } from "@/types/teaching";
import { CaseStudyCard } from "./CaseStudyCard";

type Filter = "all" | TeachingCategory;

export function TeachingCaseStudies() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const visibleCases = useMemo(
    () => activeFilter === "all" ? teachingCases : teachingCases.filter((study) => study.category === activeFilter),
    [activeFilter],
  );
  const deliveredCount = teachingCases.filter((study) => study.status === "delivered").length;

  return (
    <section className="section" id="teaching-case-studies">
      <div className="container">
        <p className="eyebrow">Problem-first case studies</p>
        <h2>Problem-first case studies</h2>
        <div className="teaching-stats" aria-label="Teaching case study statistics">
          <div><strong>{teachingCases.length}</strong><span>Case studies</span></div>
          <div><strong>{teachingCategories.length - 1}</strong><span>Categories</span></div>
          <div><strong>{deliveredCount}</strong><span>Delivered</span></div>
        </div>
        <div className="teaching-filters" role="group" aria-label="Filter case studies by category">
          {teachingCategories.map((category) => {
            const count = category.id === "all"
              ? teachingCases.length
              : teachingCases.filter((study) => study.category === category.id).length;
            const isActive = activeFilter === category.id;
            return (
              <button key={category.id} type="button"
                className={isActive ? "teaching-filter is-active" : "teaching-filter"}
                aria-pressed={isActive} onClick={() => setActiveFilter(category.id)}>
                {category.label} <span>({count})</span>
              </button>
            );
          })}
        </div>
        <p className="teaching-results" aria-live="polite">Showing {visibleCases.length} of {teachingCases.length} case studies</p>
        <div className="teaching-case-list">
          {visibleCases.map((study) => <CaseStudyCard key={study.id} study={study} />)}
        </div>
      </div>
    </section>
  );
}
