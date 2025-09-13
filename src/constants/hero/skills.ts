import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma } from "react-icons/si";
import type { Skill } from "../../features/hero/types/skills.interface";

export const SKILLS_DATA: Skill[] = [
    {
        icon: SiNextdotjs,
        title: "Next.js",
        description: "React framework",
    },
    {
        icon: SiReact,
        title: "React.js",
        description: "JavaScript library for UI",
    },
    {
        icon: SiTypescript,
        title: "TypeScript",
        description: "Typed JavaScript at scale",
    },
    {
        icon: SiTailwindcss,
        title: "Tailwind CSS",
        description: "Utility-first CSS framework",
    },
    {
        icon: SiNodedotjs,
        title: "Node.js",
        description: "JavaScript runtime for backend",
    },
    {
        icon: SiFigma,
        title: "Figma",
        description: "Design tool for prototyping",
    },
];
