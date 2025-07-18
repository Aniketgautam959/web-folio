"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { getPersonalInfo } from "@/lib/data";

export function ProfileContact() {
  const personalInfo = getPersonalInfo();

  return (
    <Card className="bg-zinc-900/70 dark:bg-zinc-900/70 border-zinc-800 dark:border-zinc-800 backdrop-blur-sm rounded-xl">
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 flex items-center mb-4">
          <Mail className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
          Contact Information
        </h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-zinc-800 dark:text-white">
                Email
              </h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-zinc-800 dark:text-white">
                Phone
              </h4>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-zinc-800 dark:text-white">
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
