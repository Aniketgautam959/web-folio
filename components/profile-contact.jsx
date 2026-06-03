"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { getPersonalInfo } from "@/lib/data";

export function ProfileContact() {
  const personalInfo = getPersonalInfo();

  const items = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      value: personalInfo.email,
    },
    {
      icon: Phone,
      label: "Phone",
      href: `tel:${personalInfo.phone}`,
      value: personalInfo.phone,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
    },
  ];

  return (
    <Card className="portfolio-section shadow-none">
      <CardContent className="p-6">
        <h3 className="portfolio-section-label mb-5">Contact</h3>

        <div className="space-y-4">
          {items.map(({ icon: Icon, label, href, value }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="break-all text-sm text-foreground transition-colors hover:text-muted-foreground">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
