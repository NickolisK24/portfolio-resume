"use client";

import { useEffect, useRef, useState } from "react";

const COMMANDS = [
  "cat about.md",
  "ls ./projects",
  "run portfolio --prod",
  "git log --oneline",
] as const;

const FALLBACK = COMMANDS[0];

export function CommandBar() {
  const [text, setText] = useState<string>(FALLBACK);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setText(FALLBACK);
      return;
    }

    let ci = 0;
    let chi = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const cur = COMMANDS[ci] ?? FALLBACK;
      if (!deleting) {
        setText(cur.slice(0, chi));
        chi += 1;
        if (chi > cur.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
      } else {
        setText(cur.slice(0, chi));
        chi -= 1;
        if (chi < 0) {
          deleting = false;
          ci = (ci + 1) % COMMANDS.length;
          chi = 0;
        }
      }
      timer = setTimeout(tick, deleting ? 35 : 65);
    };

    tick();

    return () => {
      clearTimeout(timer);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <span className="text-ink-dim">
      nikko@portfolio <span className="text-accent">~</span> ${" "}
      <span aria-hidden="true" className="text-ink">
        {text}
      </span>
    </span>
  );
}
