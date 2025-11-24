import type { DetailedProject } from "../../features/projects/types/project-detail.interface";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiAstro, SiTailwindcss, SiFramer, SiVercel, SiTypescript, SiNextdotjs, SiSupabase, SiPostgresql, SiDocker, SiKubernetes, SiAmazon } from "react-icons/si";

export const PROJECTS_DETAIL_DATA: DetailedProject[] = [
  {
    id: "revo",
    title: "Revo",
    shortDescription: "A modern SaaS template focused on clean UI and fast performance, featuring responsive sections and smooth animations.",
    technicalStack: {
      frontend: [
        { name: "React", description: "Component-driven UI", icon: FaReact },
        { name: "Astro", description: "Islands architecture for performance", icon: SiAstro },
        { name: "Tailwind CSS", description: "Utility-first styling", icon: SiTailwindcss },
        { name: "Framer Motion", description: "Scroll and reveal animations", icon: SiFramer },
      ],
      backend: [
        { name: "Node.js", description: "Basic API mocks for demo", icon: FaNodeJs },
      ],
      devOps: [
        { name: "Vercel", description: "Preview deployments", icon: SiVercel },
      ],
    },
    visualContent: {
      mainImage: "/images/projects/revo-project.jpg",
      screenshots: [
        "/images/projects/revo-project.jpg",
        "/images/projects/taskai-project.jpg",
      ],
    },
    links: {
      demo: "https://example.com/revo",
      github: "https://github.com/example/revo",
    },
    collaborators: [
      { name: "Alex Johnson", role: "Frontend Developer", github: "https://github.com/alexj" },
      { name: "Maria Garcia", role: "UI/UX Designer", linkedin: "https://linkedin.com/in/mariag" },
    ],
  },
  {
    id: "najmai",
    title: "NajmAI",
    shortDescription: "AI landing template with accent animations and a strong visual identity, optimized for conversions.",
    technicalStack: {
      frontend: [
        { name: "React", description: "SPA-like interactions", icon: FaReact },
        { name: "Astro", description: "SSG with islands", icon: SiAstro },
        { name: "Tailwind CSS", description: "Rapid design system", icon: SiTailwindcss },
        { name: "Framer Motion", description: "Micro-interactions", icon: SiFramer },
      ],
    },
    visualContent: {
      mainImage: "/images/projects/najmai-project.jpg",
      screenshots: [
        "/images/projects/najmai-project.jpg",
        "/images/projects/stabraq-project.jpg",
      ],
    },
    links: {
      demo: "https://example.com/najmai",
      github: "https://github.com/example/najmai",
    },
    collaborators: [
      { name: "Sam Smith", role: "Full Stack Developer", github: "https://github.com/sams" },
    ],
  },
  {
    id: "stabraq",
    title: "Stabraq",
    shortDescription: "Elegant portfolio template with grid gallery and smooth transitions.",
    technicalStack: {
      frontend: [
        { name: "React", description: "UI components", icon: FaReact },
        { name: "Astro", description: "Content-focused structure", icon: SiAstro },
        { name: "Tailwind CSS", description: "Design system", icon: SiTailwindcss },
        { name: "Framer Motion", description: "Animations", icon: SiFramer },
      ],
    },
    visualContent: {
      mainImage: "/images/projects/stabraq-project.jpg",
      screenshots: [
        "/images/projects/stabraq-project.jpg",
        "/images/projects/revo-project.jpg",
      ],
    },
    links: {
      demo: "https://example.com/stabraq",
      github: "https://github.com/example/stabraq",
    },
    collaborators: [
      { name: "Chris Lee", role: "Backend Developer", github: "https://github.com/chrisl" },
      { name: "Pat Taylor", role: "DevOps Engineer" },
    ],
  },
  {
    id: "taskai",
    title: "TaskAI",
    shortDescription: "Task management concept with AI assistance and minimal UX.",
    technicalStack: {
      frontend: [
        { name: "React", description: "Components", icon: FaReact },
        { name: "Astro", description: "Pages", icon: SiAstro },
        { name: "Tailwind CSS", description: "Styles", icon: SiTailwindcss },
      ],
    },
    visualContent: {
      mainImage: "/images/projects/taskai-project.jpg",
      screenshots: [
        "/images/projects/taskai-project.jpg",
        "/images/projects/najmai-project.jpg",
      ],
    },
    links: {
      demo: "https://example.com/taskai",
      github: "https://github.com/example/taskai",
    },
    collaborators: [
      { name: "Jordan Brown", role: "Product Manager" },
      { name: "Casey White", role: "Frontend Developer", github: "https://github.com/caseyw" },
    ],
  },
];
