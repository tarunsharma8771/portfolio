import type { TeachingCaseStudy } from "@/types/teaching";

export const programmingCases: TeachingCaseStudy[] = [
  {
    id: "01",
    title: "Designing temperature control with C",
    category: "programming",
    categoryLabel: "Programming Fundamentals",
    status: "delivered",
    problem:
      "A temperature sensor provides a reading. The control program must decide when to switch a cooling fan on or off.",
    classroomActivity:
      "Students examine how a sensor, a microcontroller, and a fan work together. They translate temperature readings into control decisions.",
    approach:
      "Start with the behaviour the system needs, express it as an algorithm, and implement the decision logic in C.",
    learningOutcomes: [
      "Explain how the sensor, software, and fan interact.",
      "Translate a temperature-control requirement into an algorithm.",
      "Use variables, conditions, and loops to implement control logic.",
    ],
    technologies: [
      "C Programming",
      "Algorithms",
      "Control Structures",
      "Microcontrollers",
      "Embedded Systems",
    ],
    featured: true,
  },
  {
    id: "02",
    title: "Making a temperature-monitoring program easier to maintain",
    category: "programming",
    categoryLabel: "Programming Fundamentals",
    status: "delivered",
    problem:
      "As a temperature-monitoring program grows, repeated instructions and tightly coupled logic make changes harder to understand and verify.",
    classroomActivity:
      "Students separate input, temperature processing, decision-making, and output into functions.",
    approach:
      "Use the growing program to introduce functional decomposition and clarify what each function receives and returns.",
    learningOutcomes: [
      "Break a program into functions with clear responsibilities.",
      "Specify the inputs and outputs of a function.",
      "Explain how a revised structure reduces repeated logic and supports maintenance.",
    ],
    technologies: [
      "C Programming",
      "Functions",
      "Modular Programming",
      "Code Reusability",
      "Problem Decomposition",
    ],
    featured: false,
  },
];
