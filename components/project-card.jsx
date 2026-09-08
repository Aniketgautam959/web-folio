"use client";

import Link from "next/link";
import { ArrowUpRight, FileDown, Github } from "lucide-react";
import { SitePreview } from "@/components/site-preview";
import { ZineStar } from "@/components/zine";

export function ProjectCard({ project, index, onClick }) {
  if (!project) return null;

  const liveUrl = project.liveUrl;
  const githubUrl = project.githubUrl || project.github;
  const [projectName, projectSubtitle] = project.title.split(" - ");

  return (
    <article className="group border-t-2 border-foreground py-8 last:border-b-2 sm:py-9">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="flex-1">
          <button type="button" onClick={onClick} className="w-full text-left">
            <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <ZineStar className="h-3.5 w-3.5 text-foreground" />
              {String(index + 1).padStart(2, "0")}
              <span>/</span>
              {project.category}
            </p>

            <h3 className="text-[1.45rem] font-bold uppercase leading-snug tracking-tight transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 sm:text-[1.75rem]">
              {projectName}
              {projectSubtitle && (
                <span className="block text-base font-normal normal-case tracking-normal text-muted-foreground sm:inline sm:text-[1.1rem]">
                  {" "}
                  — {projectSubtitle}
                </span>
              )}
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-relaxed">
              {project.shortDescription}
            </p>

            {project.technologies?.length > 0 && (
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                {project.technologies.slice(0, 5).join("  ·  ")}
              </p>
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
            <button
              type="button"
              onClick={onClick}
              className="soft-link hidden sm:inline-flex">
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
            className="lift-card relative w-full shrink-0 md:w-[280px] lg:w-[320px]">
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
