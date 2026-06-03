import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Code, Lightbulb } from "lucide-react";
import { SkillTag } from "@/components/skill-tag";
import { AnimatedSection } from "@/components/animated-section";
import { getCredentialsInfo } from "@/lib/data";

function CredentialItem({ children, href }) {
  const className =
    "flex items-start rounded-xl border border-border bg-muted/30 p-3 transition-colors";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:border-foreground/15 hover:bg-muted/50`}>
        {children}
      </a>
    );
  }

  return <div className={className}>{children}</div>;
}

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo();

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <AnimatedSection animation="fade-up" delay={100}>
        <Card className="portfolio-section h-full shadow-none">
          <CardContent className="p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2">
              <Award className="h-4 w-4 text-muted-foreground" />
              <h3 className="portfolio-section-title">Certifications</h3>
            </div>

            <div className="space-y-3">
              {credentialsInfo.certifications.map((cert, index) => (
                <CredentialItem key={index} href={cert.url}>
                  {cert.logo && (
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.issuer}
                      width={40}
                      height={40}
                      className="mr-3 h-10 w-10 shrink-0 rounded-full border border-border bg-background object-contain p-1"
                    />
                  )}
                  <div>
                    <h5 className="text-sm font-medium text-foreground">
                      {cert.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </CredentialItem>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <Card className="portfolio-section h-full shadow-none">
          <CardContent className="p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              <h3 className="portfolio-section-title">Education</h3>
            </div>

            <div className="space-y-3">
              {credentialsInfo.education.map((edu, index) => (
                <CredentialItem key={index}>
                  {edu.logo && (
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={edu.institution}
                      width={40}
                      height={40}
                      className="mr-3 h-10 w-10 shrink-0 rounded-full border border-border bg-background object-contain p-1"
                    />
                  )}
                  <div>
                    <h5 className="text-sm font-medium text-foreground">
                      {edu.degree}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {edu.institution} · {edu.year}
                    </p>
                  </div>
                </CredentialItem>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={300}>
        <Card className="portfolio-section h-full shadow-none">
          <CardContent className="p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2">
              <Code className="h-4 w-4 text-muted-foreground" />
              <h3 className="portfolio-section-title">Skills & Expertise</h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {credentialsInfo.skills.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {credentialsInfo.patents && credentialsInfo.patents.length > 0 && (
        <AnimatedSection animation="fade-up" delay={400}>
          <Card className="portfolio-section h-full shadow-none">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-muted-foreground" />
                <h3 className="portfolio-section-title">
                  Patents & Publications
                </h3>
              </div>

              <div className="space-y-3">
                {credentialsInfo.patents.map((patent, index) => (
                  <CredentialItem key={index}>
                    <div className="flex-1">
                      <h5 className="mb-1 text-sm font-medium leading-snug text-foreground">
                        {patent.name}
                      </h5>
                      <p className="mb-2 text-xs text-muted-foreground">
                        {patent.issuer} · {patent.date}
                      </p>
                      {patent.description && (
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {patent.description}
                        </p>
                      )}
                    </div>
                  </CredentialItem>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      )}
    </div>
  );
}
