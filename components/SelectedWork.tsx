import { listFeaturedProjects } from "@/lib/projects";
import { ProjectRow } from "./ProjectRow";
import { SectionHead } from "./SectionHead";

export async function SelectedWork() {
  const projects = await listFeaturedProjects();
  const count = String(projects.length).padStart(2, "0");

  return (
    <section id="work" className="scroll-mt-20 border-b border-line py-14">
      <SectionHead num="01" title="Selected Work" count={`[ ${count} projects ]`} />

      <div className="flex flex-col">
        {projects.map((p, i) => (
          <ProjectRow key={p.frontmatter.slug} project={p.frontmatter} index={i} />
        ))}
      </div>
    </section>
  );
}
