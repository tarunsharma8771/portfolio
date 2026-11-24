import type { TeachingCaseStudy } from "@/types/teaching";

export const programmingCases: TeachingCaseStudy[] = [
  {
    id: "01",
    title: "How can we make hardware sense, think and act automatically?",
    category: "programming",
    categoryLabel: "Programming Fundamentals",
    status: "delivered",
    problem: "A temperature sensor can measure heat, but how does a machine decide when to switch on a cooling fan? Hardware alone cannot make intelligent decisions without programmed instructions.",
    classroomActivity: "Students explore a temperature-controlled system involving sensors, microcontrollers, mechanical components, and software. They translate temperature readings into logical decisions.",
    approach: "Introduce programming through a physical engineering problem. Progress from understanding the system to designing an algorithm and implementing decision-making logic using C.",
    learningOutcomes: [
      "Understand the relationship between hardware and software.",
      "Translate engineering requirements into algorithms.",
      "Apply variables, conditions, and loops.",
      "Recognize programming applications in embedded systems.",
    ],
    technologies: ["C Programming", "Algorithms", "Control Structures", "Microcontrollers", "Embedded Systems"],
    featured: true,
  },
  {
    id: "02",
    title: "How can we prevent a simple program from becoming difficult to maintain?",
    category: "programming",
    categoryLabel: "Programming Fundamentals",
    status: "delivered",
    problem: "As a temperature-control program grows, repeated instructions and interconnected logic make it difficult to understand, modify, and maintain.",
    classroomActivity: "Students decompose a temperature-monitoring program into independent responsibilities such as reading input, processing temperature, making decisions, and controlling output.",
    approach: "Introduce functions as a solution to increasing software complexity rather than simply as a programming language feature.",
    learningOutcomes: [
      "Decompose complex problems into smaller tasks.",
      "Understand function inputs and outputs.",
      "Develop reusable programming logic.",
      "Improve code readability and maintainability.",
    ],
    technologies: ["C Programming", "Functions", "Modular Programming", "Code Reusability", "Problem Decomposition"],
    featured: false,
  },
];
