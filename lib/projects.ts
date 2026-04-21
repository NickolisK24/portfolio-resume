import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

export const projectStatusSchema = z.enum(["active", "deployed", "in-progress"]);

export type ProjectStatus = z.infer<typeof projectStatusSchema>;

export const projectFrontmatterSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, "slug must be kebab-case"),
  title: z.string().min(1),
  tagline: z.string().min(1),
  status: projectStatusSchema,
  stack: z.array(z.string().min(1)).min(1),
  role: z.string().min(1),
  period: z.string().min(1),
  links: z
    .object({
      repo: z.string().url().optional(),
      live: z.string().url().optional(),
      writeup: z.string().url().optional(),
    })
    .default({}),
  cover: z.string().optional(),
  order: z.number().int(),
  featured: z.boolean().default(false),
  summary: z.string().min(1),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;

export type Project = {
  frontmatter: ProjectFrontmatter;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

async function readProjectFile(fileName: string): Promise<Project> {
  const fullPath = path.join(CONTENT_DIR, fileName);
  const raw = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = projectFrontmatterSchema.parse(data);
  if (`${frontmatter.slug}.mdx` !== fileName) {
    throw new Error(`project slug "${frontmatter.slug}" does not match filename "${fileName}"`);
  }
  return { frontmatter, content };
}

export async function listProjects(): Promise<Project[]> {
  const files = await fs.readdir(CONTENT_DIR);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));
  const projects = await Promise.all(mdxFiles.map(readProjectFile));
  return projects.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export async function listFeaturedProjects(): Promise<Project[]> {
  const all = await listProjects();
  return all.filter((p) => p.frontmatter.featured);
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    return await readProjectFile(`${slug}.mdx`);
  } catch {
    return null;
  }
}

export async function listProjectSlugs(): Promise<string[]> {
  const all = await listProjects();
  return all.map((p) => p.frontmatter.slug);
}
