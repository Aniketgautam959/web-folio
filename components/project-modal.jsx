"use client";

import Link from "next/link";
import { ExternalLink, FileDown, Github } from "lucide-react";
import { SkillTag } from "@/components/skill-tag";
import { SitePreview } from "@/components/site-preview";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl border-border bg-background p-6 sm:p-8">
        <DialogHeader className="space-y-2 text-left">
          <p className="section-kicker">{project.category}</p>
          <DialogTitle className="font-serif text-2xl font-normal tracking-tight sm:text-3xl">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block">
              <SitePreview
                url={project.liveUrl}
                title={project.title}
                image={project.previewImage}
              />
            </a>
          )}

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-highlight">
                <ExternalLink className="h-3.5 w-3.5" />
                Live site
              </a>
            )}
            {(project.githubUrl || project.github) && (
              <a
                href={project.githubUrl || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
                <Github className="h-3.5 w-3.5" />
                Source
              </a>
            )}
            {project.caseStudy && (
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
                <FileDown className="h-3.5 w-3.5" />
                One-pager
              </Link>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="section-kicker">About</h3>
            <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="section-kicker">Features</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {project.features.map((feature, index) => (
                <li key={index} className="before:mr-2 before:text-highlight before:content-['—']">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="section-kicker">Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, index) => (
                <SkillTag key={index}>{tech}</SkillTag>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-border pt-5 sm:grid-cols-3">
            <div>
              <p className="section-kicker mb-1">Timeline</p>
              <p className="text-sm text-foreground">{project.timeline}</p>
            </div>
            <div>
              <p className="section-kicker mb-1">Role</p>
              <p className="text-sm text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="section-kicker mb-1">Type</p>
              <p className="text-sm text-foreground">
                {project.client || "Personal Project"}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
