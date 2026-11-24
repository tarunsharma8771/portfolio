import type { Metadata } from "next";
import {
  AcademicVision,
  AIHero,
  AssessmentInnovation,
  ClassroomPractices,
  ConnectedLearning,
} from "@/components/ai-education/AIEducationSections";

export const metadata: Metadata = { title: "AI in Education" };

export default function AIEducation() {
  return (
    <>
      <AIHero />
      <ClassroomPractices />
      <ConnectedLearning />
      <AssessmentInnovation />
      <AcademicVision />
    </>
  );
}
