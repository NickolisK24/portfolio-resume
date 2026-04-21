import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Topbar";
import { mdxComponents } from "@/components/mdx";
import { getProject, listProjectSlugs } from "@/lib/projects";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await listProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "not found" };

  const { title, tagline, summary } = project.frontmatter;
  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: tagline,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: tagline,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Topbar />
      <Container>
        <CaseStudyLayout frontmatter={project.frontmatter}>
          <MDXRemote source={project.content} components={mdxComponents} />
        </CaseStudyLayout>
      </Container>
      <Footer />
    </>
  );
}
