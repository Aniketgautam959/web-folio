import portfolioData from "@/data/portfolio-data.json"

// Export the portfolio data
export const data = portfolioData

// Projects data and functions
export const projects = portfolioData.projects || []

export function getAllProjects() {
  return projects
}

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug)
}

export function getRelatedProjects(currentSlug, limit = 3) {
  return projects
    .filter(project => project.slug !== currentSlug)
    .slice(0, limit)
}

// Helper function to get navigation items
export function getNavItems() {
  return data.navigation
}

// Helper function to get personal information
export function getPersonalInfo() {
  return data.personal
}

// Helper function to get about information
export function getAboutInfo() {
  return data.about
}

// Helper function to get experience information
export function getExperienceInfo() {
  return data.experience
}

// Helper function to get credentials information
export function getCredentialsInfo() {
  return data.credentials
}

// Helper function to get technical skills information
export function getTechnicalSkillsInfo() {
  return data.technicalSkills
}

// Helper function to get meta information
export function getMetaInfo() {
  return data.meta
}
