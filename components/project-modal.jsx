"use client";

import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-zinc-200 dark:border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Header */}
          <div className="space-y-2">
            <div className="text-sm text-zinc-500 dark:text-zinc-500">
              {project.category}
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              About This Project
            </h3>
            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Key Features
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-zinc-50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div>
              <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-1">
                Timeline
              </h4>
              <p className="text-sm text-zinc-900 dark:text-zinc-100">
                {project.timeline}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-1">
                Role
              </h4>
              <p className="text-sm text-zinc-900 dark:text-zinc-100">
                {project.role}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-1">
                Type
              </h4>
              <p className="text-sm text-zinc-900 dark:text-zinc-100">
                {project.client || "Personal Project"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            {project.liveUrl && (
              <Button
                asChild
                className="bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 text-white dark:text-zinc-900 rounded-lg">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Project
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                className="border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
