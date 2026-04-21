import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const siteUrl = process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://nikko.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "nikko / portfolio",
    template: "%s / nikko",
  },
  description:
    "Full-stack engineer building simulation tools and baseball analytics. Python, TypeScript, PostgreSQL.",
  keywords: [
    "full-stack developer",
    "software engineer",
    "baseball analytics",
    "python",
    "typescript",
    "postgresql",
    "veteran engineer",
  ],
  authors: [{ name: "Nikko" }],
  creator: "Nikko",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "nikko / portfolio",
    title: "nikko / portfolio",
    description: "Full-stack engineer building simulation tools and baseball analytics.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "nikko / portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nikko / portfolio",
    description: "Full-stack engineer building simulation tools and baseball analytics.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
