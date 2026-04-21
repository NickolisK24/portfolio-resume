import Link from "next/link";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Topbar";

export default function CaseStudyNotFound() {
  return (
    <>
      <Topbar />
      <Container>
        <section className="py-24 md:py-32">
          <div className="mb-6 text-xs text-ink-low">{"// 404"}</div>
          <h1 className="mb-6 font-serif text-[clamp(44px,7vw,72px)] leading-none font-normal tracking-tight">
            case study <em className="text-accent not-italic italic">not found</em>
          </h1>
          <p className="max-w-[560px] text-sm leading-relaxed text-ink-dim">
            No project lives at this slug. It may have been renamed or never existed.
          </p>

          <div className="mt-8 rounded border border-line-hi bg-bg-2 p-5 font-mono text-[13px]">
            <div>
              <span className="text-accent">$</span>{" "}
              <span className="text-ink">cat ./project.mdx</span>
            </div>
            <div className="text-ink-dim">→ error: file not found</div>
          </div>

          <div className="mt-10">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-accent"
            >
              <span aria-hidden="true">←</span>
              back to work
            </Link>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
