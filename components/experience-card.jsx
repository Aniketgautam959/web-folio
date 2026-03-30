import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export function ExperienceCard({ title, company, period, description, achievements, technologies }) {
  return (
    <div className="space-y-4 pb-6 border-b border-zinc-200 dark:border-zinc-800 last:border-0 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
        <div>
          <h4 className="font-medium text-base sm:text-lg text-zinc-900 dark:text-zinc-100">{title}</h4>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">{company}</div>
        </div>
        <div className="text-xs text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/70 px-3 py-1 rounded-full self-start mt-1 sm:mt-0 sm:self-auto">
          {period}
        </div>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>

      <div className="space-y-3">
        <h5 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Key Achievements</h5>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex text-sm text-zinc-600 dark:text-zinc-400">
              <CheckCircle2 className="w-4 h-4 mr-2 text-zinc-600 dark:text-zinc-500 flex-shrink-0 mt-0.5" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">Technologies & Skills</h5>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
