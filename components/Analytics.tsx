/**
 * Analytics scaffold — inert until enabled.
 *
 * Flip NEXT_PUBLIC_ANALYTICS to "plausible" or "vercel" in env to turn on.
 * Plausible also needs NEXT_PUBLIC_PLAUSIBLE_DOMAIN.
 */

import Script from "next/script";

type Provider = "plausible" | "vercel" | undefined;

export function Analytics() {
  const provider = process.env["NEXT_PUBLIC_ANALYTICS"] as Provider;
  if (!provider) return null;

  if (provider === "plausible") {
    const domain = process.env["NEXT_PUBLIC_PLAUSIBLE_DOMAIN"];
    if (!domain) return null;
    return (
      <Script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  // For Vercel Analytics, install `@vercel/analytics` and render its
  // <Analytics /> here. Left as a one-line swap when ready.
  return null;
}
