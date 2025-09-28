import Hero_Feature from "../../../hero/presentation/views";
import ContactView from "../../../contact/presentation/views";
import AboutMe from "../../../../components/about";

const Contact = () => <ContactView />;

const About = () => <AboutMe />;

const Projects = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
    <p className="text-gray-400">Projects component coming soon...</p>
  </div>
);

const Experience = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">My Experience</h2>
    <p className="text-gray-400">Experience component coming soon...</p>
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
      <Hero_Feature />
    ),
  },
  { id: "about", label: "About", component: About },
  { id: "projects", label: "Projects", component: Projects },
  { id: "experience", label: "Experience", component: Experience },
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
    <div className="min-h-screen pb-33">
      <Component />
    </div>
  );
}
