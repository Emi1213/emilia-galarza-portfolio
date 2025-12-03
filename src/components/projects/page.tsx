import ProjectsPageFeature from "../../features/projects/presentation/views";

interface ProjectsPageProps {
  initialProjectId?: string;
}

export default function ProjectsPage({ initialProjectId }: ProjectsPageProps) {
  return (
    <div>
      <ProjectsPageFeature initialProjectId={initialProjectId} />
    </div>
  );
}
