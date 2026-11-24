import type { Article, ProjectItem } from "@/types/content";
export const site = {
  name: "Tarun Kumar",
  title: "Computing Educator & Technology Leader",
  tagline: "Teach · Innovate · Build · Impact",
  summary: "Connecting 20+ years of technology leadership with practical, problem-first computing education.",
  location: "Pune, India",
  medium: "https://medium.com/@tarun515",
  // Add verified profile URLs before publishing; never insert guessed handles.
  github: "",
  linkedin: "",
  email: "",
};
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Teaching", href: "/teaching" },
  { label: "AI in Education", href: "/ai-education" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Articles", href: "/articles" },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact" },
];
export const articlesFallback: Article[] = [
  { title: "From Microservices to Event-Driven Architecture: The Next Evolution in System Design", href: "https://medium.com/@tarun515/from-microservices-to-event-driven-architecture-the-next-evolution-in-system-design-0d3442a2e32b", source: "Medium", summary: "A discussion of moving beyond tightly coupled service interactions." },
  { title: "Why Every Microservices Architecture Needs an API Gateway", href: "https://medium.com/@tarun515/why-every-microservices-architecture-needs-an-api-gateway-6527c0ca9beb", source: "Medium", summary: "The role of an API gateway in service-oriented systems." },
  { title: "From Microservices Chaos to Clarity: How Observability Saves the Day", href: "https://medium.com/@tarun515/from-microservices-chaos-to-clarity-how-observability-saves-the-day-ac4076edb99e", source: "Medium", summary: "Using observability to understand distributed applications." },
];
export const projects: ProjectItem[] = [
  {
    title: "Event-Driven Microservices",
    category: "Software Architecture",
    description: "Exploring loosely coupled services, asynchronous communication, and distributed system design.",
    technologies: ["Java", "Microservices", "Event-Driven Architecture"],
    visual: "event-driven",
    relatedArticle: {
      label: "Related technical article",
      href: "https://medium.com/@tarun515/from-microservices-to-event-driven-architecture-the-next-evolution-in-system-design-0d3442a2e32b",
    },
  },
  {
    title: "Smart Canteen",
    category: "Educational Applications",
    description: "A real-world learning project connecting programming, web technologies, and intelligent applications.",
    technologies: ["Python", "Flask", "REST APIs", "AI"],
    visual: "canteen",
  },
  {
    title: "Distributed Systems Observability",
    category: "Technical Exploration",
    description: "Exploring monitoring, tracing, and reliability in modern distributed applications.",
    technologies: ["Metrics", "Logs", "Distributed Tracing"],
    visual: "observability",
    relatedArticle: {
      label: "Related technical article",
      href: "https://medium.com/@tarun515/from-microservices-chaos-to-clarity-how-observability-saves-the-day-ac4076edb99e",
    },
  },
];
