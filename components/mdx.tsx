import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 {...props} className="mt-12 mb-4 font-serif text-2xl font-medium tracking-tight text-ink" />
  ),
  h3: (props) => <h3 {...props} className="mt-8 mb-3 font-serif text-xl font-medium text-ink" />,
  p: (props) => <p {...props} className="my-4 text-[15px] leading-[1.75] text-ink-dim" />,
  ul: (props) => (
    <ul
      {...props}
      className="my-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.75] text-ink-dim marker:text-ink-low"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="my-4 list-decimal space-y-2 pl-5 text-[15px] leading-[1.75] text-ink-dim marker:text-ink-low"
    />
  ),
  li: (props) => <li {...props} className="pl-1" />,
  strong: (props) => <strong {...props} className="font-medium text-ink" />,
  code: (props) => (
    <code
      {...props}
      className="rounded-sm border border-line-hi bg-bg-2 px-1.5 py-0.5 font-mono text-[13px] text-ink"
    />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="my-5 overflow-x-auto rounded border border-line-hi bg-bg-2 p-4 font-mono text-[13px] leading-relaxed text-ink"
    />
  ),
  blockquote: (props) => (
    <blockquote {...props} className="my-5 border-l-2 border-line-hi pl-4 text-ink-dim italic" />
  ),
  hr: (props) => <hr {...props} className="my-8 border-line" />,
  a: ({ href = "", ...props }) => {
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a
          {...props}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
        />
      );
    }
    return (
      <Link
        {...props}
        href={href}
        className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
      />
    );
  },
};
