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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900/95 dark:bg-zinc-900/95 backdrop-blur-xl border-zinc-800 dark:border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-[2rem] font-bold text-white dark:text-white">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Header */}
          <div className="space-y-2">
            <div className="text-sm text-blue-400 dark:text-blue-400">
              {project.category}
            </div>
            <p className="text-zinc-300 dark:text-zinc-300">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white dark:text-white">
              About This Project
            </h3>
            <div className="space-y-3 text-sm text-zinc-300 dark:text-zinc-300">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white dark:text-white">
              Key Features
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-300 dark:text-zinc-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white dark:text-white">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-zinc-800/50 text-zinc-300 border-zinc-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-zinc-800/30 dark:bg-zinc-800/30 rounded-xl">
            <div>
              <h4 className="text-sm font-medium text-zinc-400 dark:text-zinc-400">
                Timeline
              </h4>
              <p className="text-sm text-white dark:text-white">
                {project.timeline}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-zinc-400 dark:text-zinc-400">
                Role
              </h4>
              <p className="text-sm text-white dark:text-white">
                {project.role}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-zinc-400 dark:text-zinc-400">
                Type
              </h4>
              <p className="text-sm text-white dark:text-white">
                {project.client || "Personal Project"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-800 dark:border-zinc-800">
            {project.liveUrl && (
              <Button
                asChild
                className="bg-blue-600 rounded-xl hover:bg-blue-400 text-white">
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
                className="border-zinc-700 text-zinc-300 hover:text-white bg-transparent rounded-xl">
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
