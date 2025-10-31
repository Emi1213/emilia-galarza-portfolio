import type { DetailedProject } from "../../features/projects/types/project-detail.interface";

export const PROJECTS_DETAIL_DATA: DetailedProject[] = [
  {
    id: "revo",
    title: "Revo",
    shortDescription: "A modern SaaS template focused on clean UI and fast performance, featuring responsive sections and smooth animations.",
    technicalStack: {
      frontend: [
        { name: "React", description: "Component-driven UI" },
        { name: "Astro", description: "Islands architecture for performance" },
        { name: "Tailwind CSS", description: "Utility-first styling" },
        { name: "Framer Motion", description: "Scroll and reveal animations" },
      ],
      backend: [
        { name: "Node.js", description: "Basic API mocks for demo" },
      ],
      devOps: [
        { name: "Vercel", description: "Preview deployments" },
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
  },
  {
    id: "najmai",
    title: "NajmAI",
    shortDescription: "AI landing template with accent animations and a strong visual identity, optimized for conversions.",
    technicalStack: {
      frontend: [
        { name: "React", description: "SPA-like interactions" },
        { name: "Astro", description: "SSG with islands" },
        { name: "Tailwind CSS", description: "Rapid design system" },
        { name: "Framer Motion", description: "Micro-interactions" },
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
  },
  {
    id: "stabraq",
    title: "Stabraq",
    shortDescription: "Elegant portfolio template with grid gallery and smooth transitions.",
    technicalStack: {
      frontend: [
        { name: "React", description: "UI components" },
        { name: "Astro", description: "Content-focused structure" },
        { name: "Tailwind CSS", description: "Design system" },
        { name: "Framer Motion", description: "Animations" },
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
  },
  {
    id: "taskai",
    title: "TaskAI",
    shortDescription: "Task management concept with AI assistance and minimal UX.",
    technicalStack: {
      frontend: [
        { name: "React", description: "Components" },
        { name: "Astro", description: "Pages" },
        { name: "Tailwind CSS", description: "Styles" },
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
  },
];
