"use client";

import { useState } from "react";
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
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,hsl(var(--highlight)/0.08),transparent_50%)]" />

      <PortfolioHeader />

      <div className="site-shell relative z-10 pb-16 pt-24 sm:pb-24 sm:pt-28">
        <ProfileNameBio />
        <ProfileAbout />

        <AnimatedSection animation="fade-up" id="projects" className="py-10 sm:py-14">
          <SectionHeading index="01" title="Personal projects" />
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

        <AnimatedSection animation="fade-up" id="experience" className="py-10 sm:py-14">
          <SectionHeading index="02" title="Experience" />
          <div className="ml-1 space-y-12 border-l border-border">
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

        <AnimatedSection animation="fade-up" id="skills" className="py-10 sm:py-14">
          <SectionHeading index="03" title="Technical skills" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="section-kicker mb-4">{group.label}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border px-2.5 py-1 text-[12px] text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" id="credentials" className="py-10 sm:py-14">
          <SectionHeading index="04" title="Credentials" />
          <CredentialsSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" id="contact">
          <ProfileContact />
        </AnimatedSection>

        <footer className="border-t border-border/80 py-8 text-center text-[11px] tracking-wide text-muted-foreground">
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
