import type { TeachingCaseStudy } from "@/types/teaching";

export const softwareDevelopmentCases: TeachingCaseStudy[] = [
  {
    id: "09",
    title: "How can we make a college canteen smarter?",
    category: "software-development",
    categoryLabel: "Software Development",
    status: "delivered",
    problem: "Traditional college canteens face challenges in managing food orders, customer interactions, and student feedback. How can software improve the overall experience?",
    classroomActivity: "Students develop a Python-based application incorporating web interfaces, APIs, speech-based interaction, and sentiment analysis.",
    approach: "Introduce application development through incremental real-world requirements, allowing students to integrate programming fundamentals, web technologies, and intelligent services.",
    learningOutcomes: [
      "Translate real-world requirements into software features.",
      "Develop web-based applications.",
      "Integrate external APIs and intelligent services.",
      "Understand end-to-end application workflows.",
    ],
    technologies: ["Python", "Flask", "REST APIs", "VADER", "Sentiment Analysis", "Speech Recognition"],
    featured: true,
  },
  {
    id: "10",
    title: "How do we turn a real-world problem into a working software product?",
    category: "software-development",
    categoryLabel: "Software Development",
    status: "delivered",
    problem: "Students often learn programming, databases, and software design independently but struggle to combine these concepts into a complete working application.",
    classroomActivity: "Student teams identify a problem, gather requirements, prepare architecture and design diagrams, develop a proof of concept, and implement and demonstrate a working application.",
    approach: "Follow an incremental software development lifecycle integrating user interfaces, Java, MySQL, system design, prototyping, testing, and integration.",
    learningOutcomes: [
      "Translate requirements into software designs.",
      "Develop high-level application architectures.",
      "Integrate application and database layers.",
      "Develop, test, and demonstrate a working product.",
    ],
    technologies: ["Java", "MySQL", "System Design", "ER Diagrams", "Class Diagrams", "Prototyping", "SDLC"],
    featured: false,
  },
];
