import {
  BookOpen,
  BriefcaseBusiness,
  FlaskConical,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  UsersRound,
} from "lucide-react";
import { site } from "@/data/site";

export const opportunities = [
  {
    title: "Academic Collaboration",
    description: "Teaching, curriculum development, guest lectures, and academic initiatives.",
    icon: GraduationCap,
  },
  {
    title: "Research Collaboration",
    description: "Computing education, applied AI, and industry-aligned learning.",
    icon: FlaskConical,
  },
  {
    title: "Student Mentoring",
    description: "Project guidance, technical development, and industry readiness.",
    icon: UsersRound,
  },
  {
    title: "Technology Consulting",
    description: "Software architecture, distributed systems, and cloud technologies.",
    icon: BriefcaseBusiness,
  },
];

export const contactChannels = [
  { name: "Email", description: "Direct enquiries", href: site.email ? `mailto:${site.email}` : undefined, icon: Mail },
  { name: "LinkedIn", description: "Professional network", href: site.linkedin || undefined, icon: Linkedin },
  { name: "GitHub", description: "Technical contributions", href: site.github || undefined, icon: Github },
  { name: "Medium", description: "Articles & insights", href: site.medium, icon: BookOpen },
];
