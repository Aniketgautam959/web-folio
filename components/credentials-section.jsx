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
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 rounded-md border border-border bg-background object-contain p-1"
        />
      )}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{meta}</p>
        {extra && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {extra}
          </p>
        )}
      </div>
      {href && (
        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
      )}
    </>
  );

  const className =
    "flex items-start gap-3 py-4 transition-colors first:pt-0 last:pb-0";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:text-highlight`}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo();

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <p className="section-kicker mb-5">Certifications</p>
        <div className="divide-y divide-border">
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

      <div>
        <p className="section-kicker mb-5">Education</p>
        <div className="divide-y divide-border">
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
        <div>
          <p className="section-kicker mb-5">Expertise</p>
          <p className="text-sm leading-7 text-muted-foreground">
            {credentialsInfo.skills.join("  ·  ")}
          </p>
        </div>
      )}

      {credentialsInfo.patents?.length > 0 && (
        <div>
          <p className="section-kicker mb-5">Patents & Publications</p>
          <div className="divide-y divide-border">
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
