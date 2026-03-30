"use client";

import { useState } from "react";
import { GlobeIcon, CodeIcon, BriefcaseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const SkillTagComponent = ({ children }) => {
  return (
    <div className="px-2 py-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
      {children}
    </div>
  );
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

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-20 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Left Column - Profile Sections */}
          <div className="space-y-4 sm:space-y-6 md:sticky md:top-24 self-start">
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

          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Experience Section */}
            <AnimatedSection animation="fade-up" id="experience">
              <Card className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm rounded-xl shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <BriefcaseIcon className="w-5 h-5 mr-3 text-zinc-700 dark:text-zinc-500" />
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      Experience
                    </h3>
                  </div>

                  <div className="space-y-8 sm:space-y-10">
                    {experienceInfo.map((experience, index) => (
                      <AnimatedSection
                        key={index}
                        animation="fade-up"
                        delay={100 * (index + 1)}>
                        <ExperienceCard
                          title={experience.title}
                          company={experience.company}
                          period={experience.period}
                          description={experience.description}
                          achievements={experience.achievements}
                          technologies={experience.technologies}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Credentials Section */}
            <AnimatedSection animation="fade-up" id="credentials">
              <CredentialsSection />
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection animation="fade-up" id="skills">
              <Card className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm rounded-xl shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <CodeIcon className="w-5 h-5 mr-3 text-zinc-700 dark:text-zinc-500" />
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      Technical Skills
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedSection animation="slide-right" delay={100}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                          Languages
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.languages.map((skill, index) => (
                            <SkillTagComponent key={index}>
                              {skill}
                            </SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={200}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                          Frameworks
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.frameworks.map((skill, index) => (
                            <SkillTagComponent key={index}>
                              {skill}
                            </SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={300}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                          Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.tools.map((skill, index) => (
                            <SkillTagComponent key={index}>
                              {skill}
                            </SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={400}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                          UI/UX
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.uiux.map((skill, index) => (
                            <SkillTagComponent key={index}>
                              {skill}
                            </SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection animation="fade-up" id="projects">
              <Card className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm rounded-xl shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center">
                      <GlobeIcon className="w-5 h-5 mr-3 text-zinc-700 dark:text-zinc-500" />
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                        Recent Projects
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                      <AnimatedSection
                        key={project.id}
                        animation="zoom-in"
                        delay={100 * (index + 1)}>
                        <ProjectCard
                          title={project.title}
                          category={project.category}
                          image={project.thumbnailImage}
                          slug={project.slug}
                          onClick={() => handleProjectClick(project.slug)}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-12 sm:mt-16 py-6 sm:py-8 text-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
          <p>
            © {new Date().getFullYear()} Aniket Gautam. All rights reserved.
          </p>
        </AnimatedSection>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}
