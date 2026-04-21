import type { ProjectStatus } from "@/lib/projects";

const styles: Record<ProjectStatus, string> = {
  active: "text-accent bg-[rgba(127,255,106,0.08)] border-[rgba(127,255,106,0.3)]",
  deployed: "text-ink-dim bg-bg-2 border-line-hi",
  "in-progress": "text-warn bg-[rgba(255,184,108,0.08)] border-[rgba(255,184,108,0.3)]",
};

const labels: Record<ProjectStatus, string> = {
  active: "active",
  deployed: "deployed",
  "in-progress": "in progress",
};

export function StatusTag({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`rounded-[2px] border px-[7px] py-[3px] text-[10px] tracking-[0.1em] uppercase ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
