import {
  BookOpen,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  UsersRound,
} from "lucide-react";
import { site } from "@/data/site";

export const collaborationAreas = [
  {
    title: "Academic collaboration",
    description:
      "Undergraduate teaching, curriculum development, and guest lectures.",
    icon: GraduationCap,
  },
  {
    title: "Student mentoring",
    description:
      "Project guidance, technical development, and engineering practice.",
    icon: UsersRound,
  },
  {
    title: "Technology consulting",
    description:
      "Software architecture, distributed systems, and cloud technologies.",
    icon: BriefcaseBusiness,
  },
];

export const contactChannels = [
  {
    name: "Email",
    href: site.email ? `mailto:${site.email}` : "",
    description: "Academic enquiries and student questions",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: site.linkedin,
    description: "Professional profile",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: site.github,
    description: "Technical work and source code",
    icon: Github,
  },
  {
    name: "Medium",
    href: site.medium,
    description: "Published articles and insights",
    icon: BookOpen,
  },
];
