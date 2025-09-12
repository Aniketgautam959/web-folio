import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Code } from "lucide-react";
import { SkillTag } from "@/components/skill-tag";
import { AnimatedSection } from "@/components/animated-section";
import { getCredentialsInfo } from "@/lib/data";

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* Professional Certifications */}
      <AnimatedSection animation="fade-up" delay={100}>
        <Card className="bg-zinc-100/70 dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 backdrop-blur-sm h-full rounded-xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-4 sm:mb-6">
              <Award className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-medium text-black dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {credentialsInfo.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start bg-zinc-200/50 dark:bg-zinc-800/30 p-2 sm:p-3 rounded-xl">
                  {cert.logo && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-zinc-300 dark:bg-zinc-800">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.issuer}
                        fill
                        className="object-contain p-1 rounded-full"
                      />
                    </div>
                  )}
                  <div>
                    <h5 className="text-sm font-medium text-black dark:text-white">
                      {cert.name}
                    </h5>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection animation="fade-up" delay={200}>
        <Card className="bg-zinc-100/70 dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 backdrop-blur-sm h-full rounded-xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-4 sm:mb-6">
              <GraduationCap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-medium text-black dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {credentialsInfo.education.map((edu, index) => (
                <div
                  key={index}
                  className="flex items-start bg-zinc-200/50 dark:bg-zinc-800/30 p-2 sm:p-3 rounded-xl">
                  {edu.logo && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-zinc-300 dark:bg-zinc-800">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={edu.institution}
                        fill
                        className="object-contain p-1 rounded-full"
                      />
                    </div>
                  )}
                  <div>
                    <h5 className="text-sm font-medium text-black dark:text-white">
                      {edu.degree}
                    </h5>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {edu.institution} • {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Skills & Expertise */}
      <AnimatedSection animation="fade-up" delay={300}>
        <Card className="bg-zinc-100/70 dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 backdrop-blur-sm h-full rounded-xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-4 sm:mb-6">
              <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-medium text-black dark:text-white">
                Skills & Expertise
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {credentialsInfo.skills.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
