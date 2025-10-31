import ProjectsPageFeature from "../../features/projects/presentation/views";

interface ProjectsPageProps {
  initialProjectTitle?: string;
}

export default function ProjectsPage({ initialProjectTitle }: ProjectsPageProps) {
  return (
    <div>
      <ProjectsPageFeature initialProjectTitle={initialProjectTitle} />
    </div>
  );
}
