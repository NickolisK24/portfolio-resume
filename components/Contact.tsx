import { SectionHead } from "./SectionHead";

type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
};

const LINKS: ContactLink[] = [
  { label: "email", href: "nickoliskacludis@gmail.com" },
  { label: "github", href: "https://github.com/NickolisK24", external: true },
  { label: "linkedin", href: "https://www.linkedin.com/in/nickolis-kacludis/", external: true },
  { label: "resume.pdf", href: "/resume.pdf", external: true },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24">
      <SectionHead num="03" title="Contact" as="h3" />

      <h2 className="mb-7 font-serif text-[clamp(36px,5vw,56px)] leading-[1.1] font-normal tracking-[-0.02em]">
        Let&apos;s <em className="text-accent not-italic italic">build</em> something.
      </h2>
      <p className="max-w-[560px] text-sm leading-relaxed text-ink-dim">
        Open to full-stack and data engineering roles. If you&apos;ve got a problem worth solving,
        I&apos;d like to hear about it.
      </p>

      <ul className="mt-8 flex flex-wrap border-t border-line">
        {LINKS.map((link, i) => (
          <li key={link.label} className="flex-1 basis-[200px]">
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between border-b border-line py-5 pl-1 text-sm text-ink transition-[color,padding] duration-200 hover:pl-3.5 hover:text-accent focus-visible:pl-3.5 focus-visible:text-accent"
            >
              <span>
                <span className="text-[11px] tracking-[0.1em] text-ink-low uppercase">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                &nbsp;&nbsp;{link.label}
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
