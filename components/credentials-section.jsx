import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Code, Lightbulb } from "lucide-react";
import { SkillTag } from "@/components/skill-tag";
import { AnimatedSection } from "@/components/animated-section";
import { getCredentialsInfo } from "@/lib/data";

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {/* Professional Certifications */}
      <AnimatedSection animation="fade-up" delay={100}>
        <Card className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm h-full rounded-xl shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <Award className="w-5 h-5 mr-2 text-zinc-700 dark:text-zinc-500" />
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {credentialsInfo.certifications.map((cert, index) => {
                const Wrapper = cert.url ? 'a' : 'div';
                const wrapperProps = cert.url 
                  ? { href: cert.url, target: "_blank", rel: "noopener noreferrer", className: "block group" } 
                  : { className: "block group" };

                return (
                  <Wrapper key={index} {...wrapperProps}>
                    <div
                      className={`flex items-start bg-zinc-50 dark:bg-zinc-800/30 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 ${
                        cert.url ? "group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors" : ""
                      }`}>
                      {cert.logo && (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-zinc-100 dark:bg-zinc-800">
                          <Image
                            src={cert.logo || "/placeholder.svg"}
                            alt={cert.issuer}
                            fill
                            className="object-contain p-1 rounded-full"
                          />
                        </div>
                      )}
                      <div>
                        <h5 className={`text-sm font-medium text-zinc-900 dark:text-zinc-100 ${cert.url ? "group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" : ""}`}>
                          {cert.name}
                        </h5>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection animation="fade-up" delay={200}>
        <Card className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm h-full rounded-xl shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-5 h-5 mr-2 text-zinc-700 dark:text-zinc-500" />
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {credentialsInfo.education.map((edu, index) => (
                <div
                  key={index}
                  className="flex items-start bg-zinc-50 dark:bg-zinc-800/30 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  {edu.logo && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={edu.institution}
                        fill
                        className="object-contain p-1 rounded-full"
                      />
                    </div>
                  )}
                  <div>
                    <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
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
        <Card className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm h-full rounded-xl shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <Code className="w-5 h-5 mr-2 text-zinc-700 dark:text-zinc-500" />
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
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
      {/* Patents & Publications */}
      {credentialsInfo.patents && credentialsInfo.patents.length > 0 && (
        <AnimatedSection animation="fade-up" delay={400}>
          <Card className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm h-full rounded-xl shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-5 h-5 mr-2 text-zinc-700 dark:text-zinc-500" />
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  Patents & Publications
                </h3>
              </div>

              <div className="space-y-4">
                {credentialsInfo.patents.map((patent, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-zinc-50 dark:bg-zinc-800/30 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1 leading-tight">
                        {patent.name}
                      </h5>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-2">
                        {patent.issuer} • {patent.date}
                      </p>
                      {patent.description && (
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {patent.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      )}
    </div>
  );
}
