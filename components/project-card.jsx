"use client";

import Link from "next/link";
import { ArrowUpRight, FileDown, Github } from "lucide-react";
import { SitePreview } from "@/components/site-preview";

export function ProjectCard({ project, index, onClick }) {
  if (!project) return null;

  const liveUrl = project.liveUrl;
  const githubUrl = project.githubUrl || project.github;
  const [projectName, projectSubtitle] = project.title.split(" - ");

  return (
    <article className="group mb-8 border-b border-foreground/15 pb-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex-1">
          <button type="button" onClick={onClick} className="w-full text-left">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-muted-foreground">{project.category}</span>
            </p>

            <h3 className="font-sans text-3xl font-bold uppercase leading-none tracking-[0.04em] transition-colors duration-300 group-hover:text-foreground/70 sm:text-4xl">
              {projectName}
            </h3>
            {projectSubtitle && (
              <p className="mt-1 text-sm text-muted-foreground">
                {projectSubtitle}
              </p>
            )}

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>

            {project.technologies?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </button>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-link">
                Live
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-link">
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            )}
            {project.caseStudy && (
              <Link href={`/work/${project.slug}`} className="soft-link">
                <FileDown className="h-3.5 w-3.5" />
                One-pager
              </Link>
            )}
            <button type="button" onClick={onClick} className="soft-link">
              Details
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lift-card relative w-full shrink-0 overflow-hidden rounded-2xl md:w-[300px] lg:w-[340px]">
            <SitePreview
              url={liveUrl}
              title={projectName}
              image={project.previewImage}
            />
          </a>
        )}
      </div>
    </article>
  );
}
