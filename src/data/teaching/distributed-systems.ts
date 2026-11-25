import type { TeachingCaseStudy } from "@/types/teaching";

export const distributedSystemsCases: TeachingCaseStudy[] = [
  {
    id: "11",
    title: "Keeping online orders reliable when a service fails",
    category: "distributed-systems",
    categoryLabel: "Distributed Systems",
    status: "planned",
    problem:
      "A customer completes a payment just as the inventory or order-processing service becomes unavailable. The system must keep reliable records and avoid processing the same transaction twice.",
    classroomActivity:
      "Students will model an order workflow, simulate a service failure, and compare direct requests with event-driven communication.",
    approach:
      "Use a service outage to examine message queues, retries, and ways to ensure that repeating a request does not repeat its effect.",
    learningOutcomes: [
      "Trace what happens to an order when a dependent service is unavailable.",
      "Compare synchronous requests with asynchronous messages.",
      "Explain how a system can handle retries without duplicating transactions.",
      "Justify a design by explaining its reliability and consistency trade-offs.",
    ],
    technologies: [
      "Distributed Systems",
      "Microservices",
      "Event-Driven Architecture",
      "Message Queues",
      "Idempotency",
      "Fault Tolerance",
    ],
    featured: true,
    resources: [
      {
        title:
          "From Microservices to Event-Driven Architecture: The Next Evolution in System Design",
        type: "article",
        url: "https://medium.com/@tarun515/from-microservices-to-event-driven-architecture-the-next-evolution-in-system-design-0d3442a2e32b",
      },
    ],
  },
];
