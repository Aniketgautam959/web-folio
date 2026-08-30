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
    <article className="group border-t border-border/80 py-8 last:border-b sm:py-9">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="flex-1">
          <button type="button" onClick={onClick} className="w-full text-left">
            <p className="section-kicker mb-3">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-2 text-border">/</span>
              {project.category}
            </p>

            <h3 className="font-serif text-[1.55rem] font-normal leading-snug text-foreground transition-colors duration-300 group-hover:text-highlight sm:text-[1.85rem]">
              {projectName}
              {projectSubtitle && (
                <span className="italic text-muted-foreground">
                  {" "}
                  {projectSubtitle}
                </span>
              )}
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>

            {project.technologies?.length > 0 && (
              <p className="mt-4 text-[12px] text-muted-foreground/80">
                {project.technologies.slice(0, 5).join("  ·  ")}
              </p>
            )}
          </button>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
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
