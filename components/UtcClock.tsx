"use client";

import { useEffect, useState } from "react";

function format(d: Date): string {
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mm = String(d.getUTCMinutes()).padStart(2, "0");
  const ss = String(d.getUTCSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss} UTC`;
}

export function UtcClock() {
  const [now, setNow] = useState<string>("--:--:-- UTC");

  useEffect(() => {
    setNow(format(new Date()));
    const id = setInterval(() => setNow(format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning className="tabular-nums">
      {now}
    </span>
  );
}
