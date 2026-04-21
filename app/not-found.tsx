import Link from "next/link";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Topbar";

export default function NotFound() {
  return (
    <>
      <Topbar />
      <Container>
        <section className="py-24 md:py-32">
          <div className="mb-6 text-xs text-ink-low">{"// 404"}</div>
          <h1 className="mb-6 font-serif text-[clamp(44px,7vw,72px)] leading-none font-normal tracking-tight">
            command <em className="text-accent not-italic italic">not found</em>
          </h1>
          <p className="max-w-[560px] text-sm leading-relaxed text-ink-dim">
            That route doesn&apos;t exist. Try the top nav, or head back to the entry point.
          </p>

          <div className="mt-8 rounded border border-line-hi bg-bg-2 p-5 font-mono text-[13px]">
            <div>
              <span className="text-accent">$</span>{" "}
              <span className="text-ink">run route --resolve</span>
            </div>
            <div className="text-ink-dim">→ error: no matching handler</div>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-accent"
            >
              <span aria-hidden="true">←</span>
              home
            </Link>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
