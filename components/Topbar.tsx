import Link from "next/link";
import { CommandBar } from "./CommandBar";
import { StatusDot } from "./StatusDot";

export function Topbar() {
  return (
    <header
      className="topbar-bg sticky top-0 z-50 border-b border-line backdrop-blur-md"
      style={{ background: "rgba(10, 14, 10, 0.85)" }}
    >
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3 text-xs md:px-7">
        <div className="flex items-center gap-3 md:gap-5">
          <StatusDot />
          <span className="hidden sm:inline">
            <CommandBar />
          </span>
          <span className="text-ink-dim sm:hidden">nikko@portfolio ~ $</span>
        </div>
        <nav className="flex items-center gap-3 text-ink-dim md:gap-5">
          <Link href="/#work" className="transition-colors hover:text-accent">
            work
          </Link>
          <Link href="/#about" className="transition-colors hover:text-accent">
            about
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-accent">
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
