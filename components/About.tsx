import { SectionHead } from "./SectionHead";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-line py-14">
      <SectionHead num="02" title="About" count="[ bio ]" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h4 className="mb-3.5 text-[11px] font-medium tracking-[0.12em] text-ink-low uppercase">
            Background
          </h4>
          <p className="mb-3.5 text-sm leading-[1.75] text-ink-dim">
            Eight years in the <strong className="font-medium text-ink">U.S. Army</strong>{" "}
            (logistics) taught me how to build systems that don&apos;t fall over when conditions
            change. I&apos;m a{" "}
            <strong className="font-medium text-ink">self-taught engineer</strong> now, working a
            day job as a merchandiser while I build the portfolio that gets me into baseball.
          </p>
          <p className="mb-3.5 text-sm leading-[1.75] text-ink-dim">
            I like correctness over flash, modular systems over clever ones, and documentation you
            can actually hand to the next person. My projects get architectural reviews because
            I&apos;d rather find the wrong thing early.
          </p>
          <p className="text-sm leading-[1.75] text-ink-dim">
            Outside of code: baseball, ARPG theorycrafting, and getting ready for my first kid.
          </p>
        </div>

        <div>
          <h4 className="mb-3.5 text-[11px] font-medium tracking-[0.12em] text-ink-low uppercase">
            Stack
          </h4>
          <dl className="flex flex-col gap-2">
            {[
              ["languages", "Python · TypeScript · SQL"],
              ["backend", "Flask · FastAPI · PostgreSQL"],
              ["frontend", "React · Tailwind"],
              ["tooling", "Alembic · pytest · git"],
              ["interests", "data eng · simulation · analytics"],
              ["learning", "performance profiling · ML"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between border-b border-dashed border-line py-1.5 text-[13px]"
              >
                <dt className="text-ink-low">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="relative mt-5 rounded border border-line-hi bg-bg-2 px-5 py-5 text-[13px]">
            <span
              aria-hidden="true"
              className="absolute top-2.5 right-3 block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]"
            />
            <span className="mb-1 block">
              <span className="text-accent">$</span> <span className="text-ink">whoami</span>
            </span>
            <span className="mb-1 block text-ink-dim">→ builder. veteran. dad-to-be.</span>
            <span className="mb-1 block">
              <span className="text-accent">$</span> <span className="text-ink">cat goals.md</span>
            </span>
            <span className="mb-1 block text-ink-dim">→ ship software for an MLB club</span>
            <span className="block text-ink-dim">→ raise a kid who likes baseball</span>
          </div>
        </div>
      </div>
    </section>
  );
}
