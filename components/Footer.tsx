import { UtcClock } from "./UtcClock";

export function Footer() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-5 text-[11px] text-ink-low md:px-7">
        <span>&copy; {year} nikko. built from scratch.</span>
        <UtcClock/>
      </div>
    </footer>
  );
}
