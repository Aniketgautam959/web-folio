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
import { ZineBox } from "@/components/zine";
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
          <div className="mb-8 flex justify-center sm:mb-10">
            <ZineBox as="h2" className="px-6 py-3 text-xl sm:text-2xl">
              Skills I work with
            </ZineBox>
          </div>
          <div className="grid gap-px border-2 border-foreground bg-foreground sm:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = skillIcons[group.label] || Code2;
              return (
                <div
                  key={group.label}
                  className="bg-background p-6 transition-colors duration-200 hover:bg-foreground hover:text-background">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-7 w-7 stroke-[1.4]" />
                    <h3 className="text-lg font-bold uppercase tracking-tight">
                      {group.label}
                    </h3>
                  </div>
                  <p className="font-mono text-[12px] uppercase leading-6 tracking-[0.06em]">
                    {group.items.join("  ·  ")}
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

        <footer className="border-t-2 border-foreground py-8 text-center font-mono text-[11px] uppercase tracking-[0.16em]">
          <p>© {new Date().getFullYear()} Aniket Gautam</p>
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
