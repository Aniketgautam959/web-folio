"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/social-links";
import { MapPin } from "lucide-react";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";

export function ProfileNameBio() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();

  return (
    <Card className="bg-zinc-900/70 dark:bg-zinc-900/70 border-zinc-800 dark:border-zinc-800 backdrop-blur-sm rounded-xl">
      <CardContent className="p-4 sm:p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-blue-400/20 dark:border-blue-400/20 ring-4 ring-zinc-800/50 dark:ring-zinc-800/50">
            <Image
              src={personalInfo.avatar || "/placeholder.svg"}
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
            {personalInfo.name}
          </h2>
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
            {personalInfo.title}
          </p>
          <div className="flex items-center justify-center text-xs text-zinc-600 dark:text-zinc-400 mb-3">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {personalInfo.badges.map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Bio */}
        <div className="space-y-3 mb-4">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            {aboutInfo.bio}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center">
          <SocialLinks socialLinks={personalInfo.social} />
        </div>
        <div className="flex w-full justify-center items-center">
          <a
            href="https://drive.google.com/file/d/1RiaGRecDUQ-3Lw1capVH7MUjJtHfpuiv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-500/10 hover:bg-blue-500 hover:text-white transition-all duration-300 text-blue-400 font-medium py-2 px-6 w-fit border border-blue-400/50 hover:border-blue-500 shadow-sm hover:shadow-blue-500/20">
            View Resume
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
