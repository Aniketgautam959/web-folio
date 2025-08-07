"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/social-links";
import {
  User,
  MapPin,
  Mail,
  Phone,
  Languages,
  Clock,
  Briefcase,
} from "lucide-react";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";

export function EnhancedProfile() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm col-span-1 flex flex-col">
      <CardContent className="p-0">
        {/* Profile Header - Improved mobile layout */}
        <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-4 sm:p-6 flex flex-col items-center border-b border-zinc-800">
          <div className="flex flex-col sm:flex-col items-center w-full">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-purple-400/20 ring-4 ring-zinc-800/50">
              <Image
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold">
                {personalInfo.name}
              </h2>
              <p className="text-sm text-purple-400 mb-1">
                {personalInfo.title}
              </p>
              <div className="flex items-center justify-center text-xs text-zinc-400 mb-3">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {personalInfo.badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-zinc-800/50 hover:bg-zinc-700">
                {badge}
              </Badge>
            ))}
          </div>

          <SocialLinks socialLinks={personalInfo.social} />
        </div>

        {/* Combined Content - Single scrollable section */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800/50">
          {/* About Me Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-zinc-400 flex items-center">
              <User className="w-4 h-4 mr-2 text-purple-400" />
              About Me
            </h3>
            <p className="text-sm">{aboutInfo.bio}</p>
          </div>

          {/* Professional Focus */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-zinc-400 flex items-center">
              <Briefcase className="w-4 h-4 mr-2 text-purple-400" />
              Professional Focus
            </h3>
            <div className="space-y-2">
              {aboutInfo.focus.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages - Convert to badges */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-zinc-400 flex items-center">
              <Languages className="w-4 h-4 mr-2 text-purple-400" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {aboutInfo.languages.map((language, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-zinc-800/50 hover:bg-zinc-700">
                  {language.flag} {language.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 border-t border-zinc-800 pt-4">
            <h3 className="text-sm font-medium text-zinc-400 flex items-center">
              <Mail className="w-4 h-4 mr-2 text-purple-400" />
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-zinc-400 hover:text-purple-400 transition-colors break-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm text-zinc-400 hover:text-purple-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-zinc-400">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-sm text-zinc-400">
                    {personalInfo.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
