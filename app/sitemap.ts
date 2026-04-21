import type { MetadataRoute } from "next";
import { listProjectSlugs } from "@/lib/projects";

const siteUrl = process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://nikko.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await listProjectSlugs();
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...slugs.map((slug) => ({
      url: `${siteUrl}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
