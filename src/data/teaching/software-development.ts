import type { TeachingCaseStudy } from "@/types/teaching";

export const softwareDevelopmentCases: TeachingCaseStudy[] = [
  {
    id: "09",
    title: "Developing Smart Canteen for campus dining",
    category: "software-development",
    categoryLabel: "Software Development",
    status: "delivered",
    problem:
      "A campus canteen needs to manage orders, make it easier for students to interact with the service, and make sense of their feedback.",
    classroomActivity:
      "Students develop a Python application with web interfaces, APIs, speech interaction, and sentiment analysis.",
    approach:
      "Introduce requirements in stages so students can connect programming, web development, and API integration within one application.",
    learningOutcomes: [
      "Translate a service need into an application feature.",
      "Build a web interface and integrate it with APIs.",
      "Integrate speech interaction and sentiment analysis into a Python application.",
      "Explain how information moves through the application.",
    ],
    technologies: [
      "Python",
      "Flask",
      "REST APIs",
      "VADER",
      "Sentiment Analysis",
      "Speech Recognition",
    ],
    featured: true,
  },
  {
    id: "10",
    title: "From requirements to a working software application",
    category: "software-development",
    categoryLabel: "Software Development",
    status: "delivered",
    problem:
      "Building a complete application requires students to connect requirements, software design, implementation, and data storage.",
    classroomActivity:
      "Student teams define a problem, gather requirements, prepare architecture and design diagrams, develop a proof of concept, and demonstrate a working application.",
    approach:
      "Develop the application in stages, bringing together user interfaces, Java application logic, MySQL storage, testing, and integration.",
    learningOutcomes: [
      "Translate requirements into a software design.",
      "Use diagrams to communicate architecture and data relationships.",
      "Integrate application logic with a database.",
      "Test and demonstrate a working application against its requirements.",
    ],
    technologies: [
      "Java",
      "MySQL",
      "System Design",
      "ER Diagrams",
      "Class Diagrams",
      "Prototyping",
      "SDLC",
    ],
    featured: false,
  },
];
