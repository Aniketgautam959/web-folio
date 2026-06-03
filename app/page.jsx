"use client";

import { useState } from "react";
import { CodeIcon, BriefcaseIcon, GlobeIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
import { getExperienceInfo, getTechnicalSkillsInfo } from "@/lib/data";
import { SkillTag } from "@/components/skill-tag";

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
    { label: "Tools", items: technicalSkills.tools },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <PortfolioHeader />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          <div className="space-y-5 md:sticky md:top-24 md:self-start">
            <AnimatedSection animation="slide-right">
              <ProfileNameBio />
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={100}>
              <ProfileAbout />
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={200}>
              <ProfileContact />
            </AnimatedSection>
          </div>

          <div className="col-span-1 space-y-5 md:col-span-2 lg:col-span-3 lg:space-y-6">
            <AnimatedSection animation="fade-up" id="experience">
              <Card className="portfolio-section shadow-none">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-8 flex items-center gap-2">
                    <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                    <h2 className="portfolio-section-title">Experience</h2>
                  </div>

                  <div className="space-y-0">
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
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" id="credentials">
              <CredentialsSection />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" id="skills">
              <Card className="portfolio-section shadow-none">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-8 flex items-center gap-2">
                    <CodeIcon className="h-4 w-4 text-muted-foreground" />
                    <h2 className="portfolio-section-title">Technical Skills</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {skillGroups.map((group) => (
                      <div key={group.label} className="space-y-3">
                        <h3 className="portfolio-section-label">
                          {group.label}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((skill, index) => (
                            <SkillTag key={index}>{skill}</SkillTag>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" id="projects">
              <Card className="portfolio-section shadow-none">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-8 flex items-center gap-2">
                    <GlobeIcon className="h-4 w-4 text-muted-foreground" />
                    <h2 className="portfolio-section-title">
                      Recent Projects
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        title={project.title}
                        category={project.category}
                        slug={project.slug}
                        onClick={() => handleProjectClick(project.slug)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-14 border-t border-border py-8 text-center text-xs text-muted-foreground sm:text-sm">
          <p>© {new Date().getFullYear()} Aniket Gautam. All rights reserved.</p>
        </AnimatedSection>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}
