import type { Experience } from "../../features/experience/types/experience.interface";

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "proconty",
    position: "Full Stack Developer",
    employment_type: "Full-time",
    company: "ProcontySoluciones",
    location: "Ecuador",
    start_date: "2025-07-01",
    end_date: null,
    description: "Full Stack development using .NET Framework and Vue.js for enterprise solutions.",
    skills: [".NET Framework", "Vue.js"],
    details: {
      overview: "ProcontySoluciones is a company dedicated to software development and technological solutions.",
      role: "As a Full Stack Developer, I participate in the complete web application development cycle, implementing both business logic on the backend with .NET and interactive interfaces on the frontend with Vue.js.",
      skills_acquired: [".NET", "Vue.js", "Full Stack Development", "Database Management"],
      impact: "Active contribution to the development and maintenance of critical systems for the company."
    }
  },
  {
    id: "eeasa",
    position: "Software Developer",
    employment_type: "Full-time",
    company: "EEASA",
    location: "Ambato, Tungurahua, Ecuador",
    start_date: "2024-07-01",
    end_date: "2025-02-01",
    description: "Web development for industrial relationships at EEASA.",
    skills: ["Web Engineering", "Angular", "Web Development"],
    details: {
      overview: "Empresa Eléctrica Ambato Regional Centro Norte S.A. (EEASA).",
      role: "Software Developer focused on web development for industrial relations management.",
      skills_acquired: ["Web Engineering", "Angular", "Industrial Relationships Systems"],
      impact: "Maintenance and improvement of systems for the industrial relations area."
    }
  },
  {
    id: "uta",
    position: "Software Engineering",
    employment_type: "Education",
    company: "Universidad Técnica de Ambato",
    location: "Ambato, Ecuador",
    start_date: "2021-10-01",
    end_date: "2026-07-01", // Estimating graduation
    description: "Software Engineering Student.",
    skills: ["Java", "React.js", "Software Engineering"],
    details: {
      overview: "Academic training in Software Engineering at the Technical University of Ambato.",
      role: "Undergraduate student focused on learning software engineering fundamentals, programming, and systems development.",
      skills_acquired: ["Java", "React.js", "Algorithms", "Software Architecture"],
      impact: "Development of academic projects and participation in research activities."
    }
  }
];