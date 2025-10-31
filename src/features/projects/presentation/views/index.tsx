import { useEffect, useMemo, useState } from "react";
import RecentProjects from "../../../hero/presentation/components/RecentProjects";
import ProjectDetailFeature from "./detail";
import type { DetailedProject } from "../../types/project-detail.interface";
import { PROJECTS_DETAIL_DATA } from "../../../../constants/projects/projects-detail";
import ProfileCard from "../../../../components/profile_card";

interface ProjectsPageFeatureProps {
  initialProjectTitle?: string;
}

export default function ProjectsPageFeature({ initialProjectTitle }: ProjectsPageFeatureProps) {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  const handleProjectClick = (title: string) => {
    const project = PROJECTS_DETAIL_DATA.find(p => p.title.toLowerCase() === title.toLowerCase());
    if (project) setSelectedProject(project);
  };

  const handleBack = () => setSelectedProject(null);

  useEffect(() => {
    if (initialProjectTitle && !selectedProject) {
      handleProjectClick(initialProjectTitle);
    }
  }, [initialProjectTitle]);

  const content = useMemo(() => {
    if (selectedProject) {
      return <ProjectDetailFeature project={selectedProject} onBack={handleBack} />;
    }
    return <RecentProjects onProjectClick={handleProjectClick} />;
  }, [selectedProject]);

  return (
    <div>
      {/* Match Hero's mobile spacing and profile card */}
      <div className="p-5 md:hidden">
        <ProfileCard />
      </div>
      {content}
    </div>
  );
}
