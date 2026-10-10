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
          <SectionHeading index="03" title="Skills I work with" />
          <div className="marquee relative left-1/2 mb-8 w-screen -translate-x-1/2 overflow-hidden border-y border-border py-4">
            <div className="marquee-track gap-3 pr-3">
              {[...skillGroups.flatMap((group) => group.items), ...skillGroups.flatMap((group) => group.items)].map(
                (skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-foreground">
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = skillIcons[group.label] || Code2;
              return (
                <div
                  key={group.label}
                  className="glass p-6 transition-colors duration-300 hover:border-primary/40">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </span>
                    <h3 className="font-serif text-2xl tracking-tight">
                      {group.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-foreground/80">
                        {item}
                      </span>
                    ))}
                  </div>
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
          <p className="font-serif text-lg">
            Aniket Gautam<span className="text-primary">.</span>
          </p>
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
