"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { getPersonalInfo } from "@/lib/data";

export function ProfileContact() {
  const personalInfo = getPersonalInfo();

  return (
    <Card className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm rounded-xl shadow-sm">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex items-center mb-6 uppercase tracking-wide">
          <Mail className="w-4 h-4 mr-2 text-zinc-700 dark:text-zinc-500" />
          Contact Information
        </h3>

        <div className="space-y-5">
          <div className="flex items-start">
            <Mail className="w-5 h-5 mr-3 text-zinc-600 dark:text-zinc-500 mt-0.5" />
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
                Email
              </h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors break-all">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="w-5 h-5 mr-3 text-zinc-600 dark:text-zinc-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-zinc-800 dark:text-white text-sm mb-1">
                Phone
              </h4>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-3 text-zinc-600 dark:text-zinc-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-zinc-800 dark:text-white text-sm mb-1">
                Location
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
