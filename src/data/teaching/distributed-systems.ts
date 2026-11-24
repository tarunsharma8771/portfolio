import type { TeachingCaseStudy } from "@/types/teaching";

export const distributedSystemsCases: TeachingCaseStudy[] = [
  {
    id: "11",
    title: "How do we keep online shopping orders reliable when a service fails?",
    category: "distributed-systems",
    categoryLabel: "Distributed Systems",
    status: "planned",
    problem: "A customer successfully completes an online payment, but the inventory or order-processing service becomes unavailable. How can the system prevent lost orders, duplicate transactions, and inconsistent information?",
    classroomActivity: "Students model an e-commerce order workflow, simulate service failures, and compare synchronous and event-driven communication approaches.",
    approach: "Introduce distributed systems through practical reliability challenges involving asynchronous messaging, retries, idempotency, and fault tolerance.",
    learningOutcomes: [
      "Understand distributed system challenges.",
      "Compare synchronous and asynchronous communication.",
      "Design resilient service interactions.",
      "Evaluate reliability and consistency trade-offs.",
    ],
    technologies: ["Distributed Systems", "Microservices", "Event-Driven Architecture", "Message Queues", "Idempotency", "Fault Tolerance"],
    featured: true,
    resources: [
      {
        title: "From Microservices to Event-Driven Architecture: The Next Evolution in System Design",
        type: "article",
        url: "https://medium.com/@tarun515/from-microservices-to-event-driven-architecture-the-next-evolution-in-system-design-0d3442a2e32b",
      },
    ],
  },
];
