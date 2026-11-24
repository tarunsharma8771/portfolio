import {
  Bot,
  CodeXml,
  Cpu,
  Image,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

export const practices = [
  { title: "AI Literacy", description: "AI fundamentals, generative AI, and intelligent systems.", icon: Cpu },
  { title: "Prompt Engineering", description: "Structured prompts, context, and iterative refinement.", icon: MessageSquareText },
  { title: "AI-Assisted Development", description: "Website creation, customization, and deployment.", icon: CodeXml },
  { title: "Generative AI & Creativity", description: "Image generation, experimentation, and evaluation.", icon: Image },
  { title: "Intelligent Applications", description: "Chatbots and practical AI applications.", icon: Bot },
  { title: "Responsible AI", description: "Critical evaluation, privacy, and human accountability.", icon: ShieldCheck },
];

export const learningStages = [
  { number: "01", title: "Programming", detail: "Python" },
  { number: "02", title: "Data Analysis", detail: "Pandas" },
  { number: "03", title: "Collaboration", detail: "Git & GitHub" },
  { number: "04", title: "Integration", detail: "Chatbots" },
  { number: "05", title: "Intelligence", detail: "Generative AI", featured: true },
  { number: "06", title: "Integration", detail: "Web & APIs" },
];

export const assessmentSteps = ["Plan", "Generate", "Evaluate", "Refine", "Reflect"];
