import { useState } from "react";
import RecentProjects from "../../../hero/presentation/components/RecentProjects";
import Skills from "../../../hero/presentation/components/Skills";
import ProfileCard from "../../../../components/profile_card";
import Hero from "../../../../components/hero";

const Contact = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
    <p className="text-gray-400">Contact component coming soon...</p>
  </div>
);

const About = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
    <p className="text-gray-400">About component coming soon...</p>
  </div>
);

const Projects = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
    <p className="text-gray-400">Projects component coming soon...</p>
  </div>
);

const Services = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
    <p className="text-gray-400">Services component coming soon...</p>
  </div>
);

export interface NavItem {
  id: string;
  label: string;
  component: React.ComponentType;
}

export const navigationItems: NavItem[] = [
  {
    id: "hero",
    label: "Hero",
    component: () => (
      <Hero />
    ),
  },
  { id: "about", label: "About", component: About },
  { id: "projects", label: "Projects", component: Projects },
  { id: "services", label: "Services", component: Services },
  { id: "contact", label: "Contact", component: Contact },
];

interface DynamicContentProps {
  activeSection: string;
}

export default function DynamicContent({ activeSection }: DynamicContentProps) {
  const currentItem = navigationItems.find((item) => item.id === activeSection);

  if (!currentItem) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-4xl font-bold text-red-500">Section not found</h2>
      </div>
    );
  }

  const Component = currentItem.component;

  return (
    <div className="min-h-screen">
      <Component />
    </div>
  );
}
