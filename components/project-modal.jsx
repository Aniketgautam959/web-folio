"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillTag } from "@/components/skill-tag";
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
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl border-border bg-background">
        <DialogHeader>
          <p className="portfolio-section-label">{project.category}</p>
          <DialogTitle className="text-xl font-semibold tracking-tight">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>

          <div className="space-y-3">
            <h3 className="portfolio-section-label">About</h3>
            <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="portfolio-section-label">Features</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="before:mr-2 before:content-['—']">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="portfolio-section-label">Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, index) => (
                <SkillTag key={index}>{tech}</SkillTag>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-muted/30 p-4 sm:grid-cols-3">
            <div>
              <p className="portfolio-section-label mb-1">Timeline</p>
              <p className="text-sm text-foreground">{project.timeline}</p>
            </div>
            <div>
              <p className="portfolio-section-label mb-1">Role</p>
              <p className="text-sm text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="portfolio-section-label mb-1">Type</p>
              <p className="text-sm text-foreground">
                {project.client || "Personal Project"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border pt-4">
            {project.liveUrl && (
              <Button asChild size="sm" className="rounded-full">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
