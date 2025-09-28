import type { Experience } from "../../features/experience/types/experience.interface";

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "pixelforge",
    position: "Senior Frontend Developer",
    employment_type: "Full-time",
    company: "PixelForge Studios",
    location: "New York, NY",
    start_date: "2020-01-01",
    end_date: null,
    description: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"]
  },
  {
    id: "bluewave",
    position: "UI/UX Designer & Frontend Developer",
    employment_type: "Full-time", 
    company: "BlueWave Innovators",
    location: "San Francisco, CA",
    start_date: "2017-06-01",
    end_date: "2019-12-01",
    description: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    skills: ["JavaScript", "Vue.js", "Adobe Creative Suite", "Sketch", "CSS3"]
  },
  {
    id: "techstart",
    position: "Junior Web Developer",
    employment_type: "Part-time",
    company: "TechStart Solutions",
    location: "Austin, TX", 
    start_date: "2015-03-01",
    end_date: "2017-05-01",
    description: "Built responsive web applications and landing pages, worked with cross-functional teams to deliver high-quality digital solutions.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
  }
];