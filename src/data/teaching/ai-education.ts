import type { TeachingCaseStudy } from "@/types/teaching";

export const aiEducationCases: TeachingCaseStudy[] = [
  {
    id: "12",
    title: "Can AI help students learn without doing the work for them?",
    category: "ai-education",
    categoryLabel: "AI in Education",
    status: "delivered",
    problem: "Generative AI can provide instant programming solutions, but unrestricted dependence on AI-generated answers may reduce students' independent thinking and problem-solving abilities.",
    classroomActivity: "Students compare direct AI-generated solutions with guided AI interactions involving hints, questions, explanations, debugging, and reflection.",
    approach: "Design a structured AI-assisted learning process incorporating guided prompts, incremental problem-solving, learning checkpoints, and independent assessment.",
    learningOutcomes: [
      "Critically evaluate AI-generated solutions.",
      "Demonstrate conceptual understanding independently.",
      "Develop computational thinking and problem-solving skills.",
      "Practice responsible use of generative AI.",
    ],
    technologies: ["Generative AI", "Prompt Design", "Formative Assessment", "Responsible AI", "Computational Thinking"],
    featured: true,
  },
];
