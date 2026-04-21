import Link from "next/link";
import type { ProjectFrontmatter } from "@/lib/projects";
import { StatusTag } from "./StatusTag";

export function ProjectRow({ project, index }: { project: ProjectFrontmatter; index: number }) {
  const idx = String(index + 1).padStart(3, "0");
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`${project.title} case study`}
      className="group relative grid grid-cols-[40px_1fr] items-start gap-6 border-t border-line py-7 transition-[background] duration-300 first:border-t-0 last:border-b last:border-line hover:bg-gradient-to-r hover:from-[rgba(127,255,106,0.02)] hover:to-transparent hover:to-70% md:grid-cols-[80px_1fr_auto] md:gap-6"
    >
      <div className="pt-1 text-[11px] tracking-wider text-ink-low">
        {"// "}
        {idx}
      </div>

      <div className="flex flex-col gap-3.5">
        <div className="flex flex-wrap items-center gap-3.5">
          <h3 className="font-serif text-2xl font-medium tracking-tight text-ink">
            {project.title}
          </h3>
          <span className="rounded-sm border border-line-hi bg-bg-2 px-2 py-[3px] font-mono text-xs text-ink-dim">
            {project.slug}
          </span>
          <StatusTag status={project.status} />
        </div>

        <p className="max-w-[680px] text-sm leading-relaxed text-ink-dim">{project.tagline}</p>

        <div className="flex flex-wrap gap-[10px] pt-1 text-[11px] text-ink-low">
          {project.stack.map((tech, i) => (
            <span key={tech}>
              {tech}
              {i < project.stack.length - 1 ? (
                <span aria-hidden="true" className="ml-[10px] text-ink-low">
                  ·
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hidden pt-1.5 text-base text-ink-low transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-accent md:block"
      >
        →
      </div>
    </Link>
  );
}
