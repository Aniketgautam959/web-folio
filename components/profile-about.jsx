"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, Languages } from "lucide-react";
import { getAboutInfo } from "@/lib/data";

export function ProfileAbout() {
  const aboutInfo = getAboutInfo();

  return (
    <Card className="bg-zinc-900/70 dark:bg-zinc-900/70 border-zinc-800 dark:border-zinc-800 backdrop-blur-sm rounded-xl">
      <CardContent className="p-4 sm:p-6 space-y-4">
        {/* Professional Focus */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
            Professional Focus
          </h3>
          <div className="space-y-2">
            {aboutInfo.focus.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">
                  •
                </span>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 flex items-center">
            <Languages className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {aboutInfo.languages.map((language, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700">
                {language.flag} {language.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 flex items-center">
            <User className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
            Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {aboutInfo.interests.map((interest, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
