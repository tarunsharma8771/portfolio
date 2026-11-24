import { aiEducationCases } from "./ai-education";
import { cybersecurityCases } from "./cybersecurity";
import { databaseCases } from "./database";
import { distributedSystemsCases } from "./distributed-systems";
import { programmingCases } from "./programming";
import { softwareDevelopmentCases } from "./software-development";

export const teachingCategories = [
  { id: "all", label: "All" },
  { id: "programming", label: "Programming Fundamentals" },
  { id: "database", label: "Database Management Systems" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "software-development", label: "Software Development" },
  { id: "distributed-systems", label: "Distributed Systems" },
  { id: "ai-education", label: "AI in Education" },
] as const;

export const teachingCases = [
  ...programmingCases,
  ...databaseCases,
  ...cybersecurityCases,
  ...softwareDevelopmentCases,
  ...distributedSystemsCases,
  ...aiEducationCases,
];
