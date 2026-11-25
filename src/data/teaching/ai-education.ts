import type { TeachingCaseStudy } from "@/types/teaching";

export const aiEducationCases: TeachingCaseStudy[] = [
  {
    id: "12",
    title: "Using generative AI as a guide in programming",
    category: "ai-education",
    categoryLabel: "AI in Education",
    status: "delivered",
    problem:
      "When generative AI supplies a complete solution, it can be difficult to tell which concepts a student understands and can apply independently.",
    classroomActivity:
      "Students compare a complete AI-generated answer with a guided exchange that uses hints, questions, explanations, and debugging prompts.",
    approach:
      "Ask students to reason through intermediate steps, check AI suggestions against the task, and explain their decisions before completing a related task independently.",
    learningOutcomes: [
      "Formulate a prompt that asks for a hint or explanation.",
      "Evaluate an AI suggestion against the requirements and expected behaviour.",
      "Explain and test a solution using their own reasoning.",
      "Apply the same concept independently to a related problem.",
    ],
    technologies: [
      "Generative AI",
      "Prompt Design",
      "Formative Assessment",
      "Responsible AI",
      "Computational Thinking",
    ],
    featured: true,
  },
];
