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
          className="h-9 w-9 shrink-0 border border-foreground bg-background object-contain p-1 grayscale"
        />
      )}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold uppercase tracking-tight">{title}</p>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
          {meta}
        </p>
        {extra && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {extra}
          </p>
        )}
      </div>
      {href && (
        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
      )}
    </>
  );

  const className =
    "flex items-start gap-3 border-b-2 border-foreground py-4 last:border-b-0 transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5";

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
    <div className="grid gap-8 md:grid-cols-2">
      <div className="zine-frame p-5">
        <p className="section-kicker mb-3">Certifications</p>
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

      <div className="zine-frame p-5">
        <p className="section-kicker mb-3">Education</p>
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
        <div className="zine-frame p-5">
          <p className="section-kicker mb-3">Expertise</p>
          <p className="font-mono text-[12px] uppercase leading-7 tracking-[0.06em] text-muted-foreground">
            {credentialsInfo.skills.join("  ·  ")}
          </p>
        </div>
      )}

      {credentialsInfo.patents?.length > 0 && (
        <div className="zine-frame p-5">
          <p className="section-kicker mb-3">Patents & Publications</p>
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
