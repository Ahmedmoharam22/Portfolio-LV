import { notFound } from "next/navigation";
import { getProjectBySlug, getAllVisibleProjects } from "@/src/data/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

/** Pre-render a static page for every visible project at build time. */
export function generateStaticParams() {
  return getAllVisibleProjects().map((p) => ({ id: p.slug }));
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { id: slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}