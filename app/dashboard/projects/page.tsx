import { projects } from "@/src/data/projects";
import ProjectsListClient from "@/components/admin/ProjectsListClient";

export default function AdminProjectsPage() {
  return <ProjectsListClient projects={projects} />;
}
