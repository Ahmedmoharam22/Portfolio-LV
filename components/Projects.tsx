import { projects } from "@/src/data/projects";
import ProjectsClient from "@/components/ProjectsClient";

export default function Projects() {
  const visibleProjects = projects
    .filter((project) => project.isVisible)
    .sort((first, second) => first.order - second.order);

  return <ProjectsClient projects={visibleProjects} />;
}
