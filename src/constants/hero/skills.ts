import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma, SiGit, SiPostgresql, SiNestjs, SiVuedotjs, SiSpringboot, SiDocker } from "react-icons/si";
import type { Skill } from "../../features/hero/types/skills.interface";

export const SKILLS_DATA: Skill[] = [
    {
        icon: SiNextdotjs,
        title: "Next.js",
        description: "React framework",
    },
    {
        icon: SiReact,
        title: "React",
        description: "UI Library",
    },
    {
        icon: SiVuedotjs,
        title: "Vue 3",
        description: "Progressive Framework",
    },
    {
        icon: SiTypescript,
        title: "TypeScript",
        description: "Typed JavaScript",
    },
    {
        icon: SiTailwindcss,
        title: "Tailwind CSS",
        description: "Utility-first CSS",
    },
    {
        icon: SiNestjs,
        title: "NestJS",
        description: "Node.js Framework",
    },
    {
        icon: SiSpringboot,
        title: "Spring Boot",
        description: "Java Framework",
    },
    {
        icon: SiNodedotjs,
        title: "Node.js",
        description: "JS Runtime",
    },
    {
        icon: SiPostgresql,
        title: "PostgreSQL",
        description: "Relational DB",
    },
    {
        icon: SiDocker,
        title: "Docker",
        description: "Containerization",
    },
    {
        icon: SiGit,
        title: "Git",
        description: "Version Control",
    },
    {
        icon: SiFigma,
        title: "Figma",
        description: "UI Design",
    },
];
