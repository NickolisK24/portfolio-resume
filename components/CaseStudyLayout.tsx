import Link from "next/link";
import type { ReactNode } from "react";
import type { ProjectFrontmatter } from "@/lib/projects";
import { StatusTag } from "./StatusTag";

export function CaseStudyLayout({
  frontmatter,
  children,
}: {
  frontmatter: ProjectFrontmatter;
  children: ReactNode;
}) {
  const { title, tagline, status, stack, role, period, links, slug } = frontmatter;

  return (
    <article className="py-14 md:py-20">
      <div className="mb-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-xs text-ink-dim transition-colors hover:text-accent"
        >
          <span aria-hidden="true">←</span>
          back to work
        </Link>
      </div>

      <header className="mb-10 border-b border-line pb-10">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-sm border border-line-hi bg-bg-2 px-2 py-[3px] font-mono text-xs text-ink-dim">
            {slug}
          </span>
          <StatusTag status={status} />
        </div>

        <h1 className="mb-4 font-serif text-[clamp(40px,6vw,64px)] leading-[1.05] font-normal tracking-tight text-ink">
          {title}
        </h1>
        <p className="max-w-[680px] text-base leading-relaxed text-ink-dim">{tagline}</p>

        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 text-xs sm:grid-cols-2 md:grid-cols-4">
          <div>
            <dt className="text-ink-low">role</dt>
            <dd className="mt-1 text-ink">{role}</dd>
          </div>
          <div>
            <dt className="text-ink-low">period</dt>
            <dd className="mt-1 text-ink">{period}</dd>
          </div>
          <div className="md:col-span-2">
            <dt className="text-ink-low">stack</dt>
            <dd className="mt-1 text-ink">{stack.join(" · ")}</dd>
          </div>
        </dl>

        {(links.repo ?? links.live ?? links.writeup) ? (
          <div className="mt-6 flex flex-wrap gap-4 text-xs">
            {links.repo ? (
              <a
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
              >
                repo <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {links.live ? (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
              >
                live <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {links.writeup ? (
              <a
                href={links.writeup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
              >
                writeup <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </header>

      <div className="max-w-[720px]">{children}</div>
    </article>
  );
}
