import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getAllProjects, getProjectBySlug, getPersonalInfo } from "@/lib/data";
import { SitePreview } from "@/components/site-preview";
import { PortfolioHeader } from "@/components/portfolio-header";
import { PrintButton } from "./print-button";

async function resolveParams(params) {
  return typeof params?.then === "function" ? await params : params;
}

export function generateStaticParams() {
  return getAllProjects()
    .filter((project) => project.caseStudy && project.slug)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await resolveParams(params);
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case study | Aniket Gautam`,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await resolveParams(params);
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) notFound();

  const personalInfo = getPersonalInfo();
  const study = project.caseStudy;
  const [name, subtitle] = project.title.split(" - ");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PortfolioHeader />
      <div className="site-shell pb-20 pt-24 sm:pt-28">
        <div className="no-print mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link href="/#projects" className="soft-link">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
          <PrintButton />
        </div>

        <p className="section-kicker">Case study</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
          {name}
          {subtitle && (
            <span className="italic text-muted-foreground"> {subtitle}</span>
          )}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>{project.role}</span>
          <span>{project.timeline}</span>
          <span>{project.technologies.slice(0, 5).join(" · ")}</span>
        </div>

        {project.liveUrl && (
          <div className="no-print mx-auto mt-10 max-w-xl">
            <SitePreview
              url={project.liveUrl}
              title={name}
              image={project.previewImage}
            />
          </div>
        )}

        <div className="mt-14 grid gap-12 sm:grid-cols-2">
          <section>
            <h2 className="section-kicker mb-3">Problem</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {study.problem}
            </p>
          </section>
          <section>
            <h2 className="section-kicker mb-3">Approach</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {study.approach}
            </p>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="section-kicker mb-4">Architecture</h2>
          <ul className="space-y-2">
            {(study.architecture || []).map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed text-muted-foreground before:mr-2 before:text-highlight before:content-['—']">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="section-kicker mb-4">Trade-offs</h2>
          <ul className="space-y-2">
            {(study.tradeoffs || []).map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed text-muted-foreground before:mr-2 before:text-highlight before:content-['—']">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="no-print mt-12 flex flex-wrap gap-5 border-t border-border pt-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-link text-foreground">
              Live site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {(project.githubUrl || project.github) && (
            <a
              href={project.githubUrl || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-link">
              <Github className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          <a href={`mailto:${personalInfo.email}`} className="soft-link">
            {personalInfo.email}
          </a>
        </div>
      </div>
    </main>
  );
}
