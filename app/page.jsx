"use client";

import { useState } from "react";
import { Code2, Database, Layers, Wrench } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { getAllProjects, getProjectBySlug } from "@/lib/data";
import { ExperienceCard } from "@/components/experience-card";
import { AnimatedSection } from "@/components/animated-section";
import { ProfileNameBio } from "@/components/profile-name-bio";
import { ProfileAbout } from "@/components/profile-about";
import { ProfileContact } from "@/components/profile-contact";
import { CredentialsSection } from "@/components/credentials-section";
import { PortfolioHeader } from "@/components/portfolio-header";
import { SectionHeading } from "@/components/section-heading";
import { getExperienceInfo, getTechnicalSkillsInfo } from "@/lib/data";

const skillIcons = {
  Languages: Code2,
  Frameworks: Layers,
  Databases: Database,
  Tools: Wrench,
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = getAllProjects();
  const experienceInfo = getExperienceInfo();
  const technicalSkills = getTechnicalSkillsInfo();

  const handleProjectClick = (slug) => {
    const project = getProjectBySlug(slug);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const skillGroups = [
    { label: "Languages", items: technicalSkills.languages },
    { label: "Frameworks", items: technicalSkills.frameworks },
    { label: "Databases", items: technicalSkills.databases },
    { label: "Tools", items: technicalSkills.tools },
  ].filter((group) => group.items?.length);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <PortfolioHeader />

      <div className="site-shell relative z-10 pb-16 pt-24 sm:pb-24 sm:pt-28">
        <ProfileNameBio />
        <ProfileAbout />

        <AnimatedSection id="projects" className="py-12 sm:py-16">
          <SectionHeading index="01" title="My work" />
          <div>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project.slug)}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="experience" className="py-12 sm:py-16">
          <SectionHeading index="02" title="Experience" />
          <div className="space-y-4">
            {experienceInfo.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                achievements={experience.achievements}
                technologies={experience.technologies}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="py-12 sm:py-16">
          <SectionHeading index="03" title="What I work with" />
          <div className="grid gap-x-10 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = skillIcons[group.label] || Code2;
              return (
                <div
                  key={group.label}
                  className="border-b border-foreground/15 py-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Icon className="h-5 w-5 stroke-[1.25]" />
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {group.label}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {group.items.join(" · ")}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection id="credentials" className="py-12 sm:py-16">
          <SectionHeading index="04" title="Credentials" />
          <CredentialsSection />
        </AnimatedSection>

        <AnimatedSection id="contact">
          <ProfileContact />
        </AnimatedSection>

        <footer className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border py-8 sm:flex-row sm:items-center">
          <p className="font-script text-3xl leading-none">Aniket Gautam</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Ghaziabad, India
          </p>
        </footer>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}
