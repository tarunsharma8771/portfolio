"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { teachingCases, teachingCategories } from "@/data/teaching";
import type { TeachingCategory } from "@/types/teaching";
import { CaseStudyCard } from "./CaseStudyCard";

type Filter = "all" | TeachingCategory;

const openingCases = new Map(["01", "04", "09", "10"].map((id, index) => [id, index]));
const orderedCases = [
  ...teachingCases.filter((study) => study.status === "delivered" && study.featured),
  ...teachingCases.filter((study) => study.status === "delivered" && !study.featured),
  ...teachingCases.filter((study) => study.status !== "delivered"),
].sort((first, second) =>
  (openingCases.get(first.id) ?? openingCases.size) - (openingCases.get(second.id) ?? openingCases.size),
);

const filterLabels: Partial<Record<Filter, string>> = {
  programming: "Programming",
  database: "Databases",
};

export function TeachingCaseStudies() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const visibleCases = useMemo(
    () => activeFilter === "all" ? orderedCases : orderedCases.filter((study) => study.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="section" id="teaching-case-studies">
      <div className="container">
        <div className="teaching-library-heading">
          <h2>Problem-first case studies</h2>
          <p>Delivered and planned classroom activities</p>
          <Link className="text-link" href="/student-impact#teaching-feedback">
            View teaching feedback <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="teaching-filters" role="group" aria-label="Filter case studies by category">
          {teachingCategories.map((category) => {
            const isActive = activeFilter === category.id;
            return (
              <button key={category.id} type="button"
                className={isActive ? "teaching-filter is-active" : "teaching-filter"}
                aria-pressed={isActive} onClick={() => setActiveFilter(category.id)}>
                {filterLabels[category.id] ?? category.label}
              </button>
            );
          })}
        </div>
        <p className="visually-hidden" aria-live="polite">Showing {visibleCases.length} of {teachingCases.length} case studies</p>
        <div className="teaching-case-list">
          {visibleCases.map((study) => <CaseStudyCard key={study.id} study={study} />)}
        </div>
      </div>
    </section>
  );
}
