export type TeachingCategory =
  | "programming"
  | "database"
  | "cybersecurity"
  | "software-development"
  | "distributed-systems"
  | "ai-education";

export type CaseStudyStatus = "delivered" | "planned" | "proposed";

export interface TeachingResource {
  title: string;
  type: "pdf" | "github" | "article" | "video";
  url: string;
}

export interface TeachingCaseStudy {
  id: string;
  title: string;
  category: TeachingCategory;
  categoryLabel: string;
  status: CaseStudyStatus;
  problem: string;
  classroomActivity: string;
  approach: string;
  learningOutcomes: string[];
  technologies: string[];
  featured: boolean;
  resources?: TeachingResource[];
}
