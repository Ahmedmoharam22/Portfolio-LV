import Image from "next/image";
import type { ProjectInterface } from "@/src/data/projects";

function ProjectRow({ project }: { project: ProjectInterface }) {
  return (
    <div className="grid grid-cols-12 gap-4 items-center px-6 py-4 border-b border-white/[0.03] hover:bg-white/[0.01] transition-colors group">
      {/* Thumbnail */}
      <div className="col-span-1">
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-900 border border-white/[0.06] relative flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Title + Category */}
      <div className="col-span-4 flex flex-col gap-0.5 min-w-0">
        <span className="text-sm font-semibold text-luxury-white truncate">
          {project.title}
        </span>
        <span className="text-[10px] font-mono text-luxury-muted truncate uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      {/* Slug */}
      <div className="col-span-2 hidden lg:block">
        <span className="text-[10px] font-mono text-white/30 truncate">
          /{project.slug}
        </span>
      </div>

      {/* Order */}
      <div className="col-span-1 hidden lg:flex justify-center">
        <span className="text-xs font-mono text-luxury-muted">{project.order}</span>
      </div>

      {/* Tags count */}
      <div className="col-span-2 hidden md:flex gap-1 flex-wrap">
        {project.tags.slice(0, 2).map((t) => (
          <span
            key={t}
            className="text-[9px] font-mono bg-white/[0.03] border border-white/[0.06] text-white/40 px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
        {project.tags.length > 2 && (
          <span className="text-[9px] font-mono text-white/30">
            +{project.tags.length - 2}
          </span>
        )}
      </div>

      <div className="col-span-2 flex justify-end">
        <span className={project.isVisible ? "text-xs text-green-400" : "text-xs text-white/30"}>
          {project.isVisible ? "Published" : "Hidden"}
        </span>
      </div>
    </div>
  );
}

export default function ProjectsListClient({ projects }: { projects: ProjectInterface[] }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-luxury-white">
            Manage Works
          </h1>
          <p className="text-xs text-luxury-muted mt-1 font-light">
            {projects.length} project{projects.length !== 1 ? "s" : ""} in the system
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0F0F0F] border border-white/[0.04] rounded-2xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/[0.04] bg-white/[0.01]">
          <div className="col-span-1" />
          <div className="col-span-4 text-[10px] font-mono uppercase tracking-widest text-luxury-muted">
            Project
          </div>
          <div className="col-span-2 hidden lg:block text-[10px] font-mono uppercase tracking-widest text-luxury-muted">
            Slug
          </div>
          <div className="col-span-1 hidden lg:block text-[10px] font-mono uppercase tracking-widest text-luxury-muted text-center">
            Order
          </div>
          <div className="col-span-2 hidden md:block text-[10px] font-mono uppercase tracking-widest text-luxury-muted">
            Tags
          </div>
          <div className="col-span-2 text-[10px] font-mono uppercase tracking-widest text-luxury-muted text-right">
            Status
          </div>
        </div>

        {/* Rows */}
        {projects.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <p className="text-luxury-muted text-sm font-light">
              No projects yet.
            </p>
          </div>
        ) : (
          projects.map((project) => <ProjectRow key={project.slug} project={project} />)
        )}
      </div>
    </div>
  );
}
