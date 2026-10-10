import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getCredentialsInfo } from "@/lib/data";

function CredentialRow({ title, meta, href, logo, alt, extra }) {
  const inner = (
    <>
      {logo && (
        <Image
          src={logo}
          alt={alt || title}
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-xl border border-border bg-background object-contain p-1"
        />
      )}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium leading-snug">{title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{meta}</p>
        {extra && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {extra}
          </p>
        )}
      </div>
      {href && (
        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      )}
    </>
  );

  const className =
    "flex items-start gap-3 border-b border-border py-4 last:border-b-0 transition-colors duration-300 hover:text-primary";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="glass p-6">
        <p className="section-kicker mb-2">Certifications</p>
        <div>
          {credentialsInfo.certifications.map((cert, index) => (
            <CredentialRow
              key={index}
              title={cert.name}
              meta={`${cert.issuer} · ${cert.date}`}
              href={cert.url}
              logo={cert.logo}
              alt={cert.issuer}
            />
          ))}
        </div>
      </div>

      <div className="glass p-6">
        <p className="section-kicker mb-2">Education</p>
        <div>
          {credentialsInfo.education.map((edu, index) => (
            <CredentialRow
              key={index}
              title={edu.degree}
              meta={`${edu.institution} · ${edu.year}`}
              logo={edu.logo}
              alt={edu.institution}
            />
          ))}
        </div>
      </div>

      {credentialsInfo.skills?.length > 0 && (
        <div className="glass p-6">
          <p className="section-kicker mb-4">Expertise</p>
          <div className="flex flex-wrap gap-2">
            {credentialsInfo.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {credentialsInfo.patents?.length > 0 && (
        <div className="glass p-6">
          <p className="section-kicker mb-2">Patents & publications</p>
          <div>
            {credentialsInfo.patents.map((patent, index) => (
              <CredentialRow
                key={index}
                title={patent.name}
                meta={`${patent.issuer} · ${patent.date}`}
                extra={patent.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
