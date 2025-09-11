export const projects = [
  {
    id: 1,
    slug: "expensifyai",
    title: "ExpensifyAI - AI Expense Tracker",
    category: "AI-Powered Finance",
    shortDescription:
      "An AI-driven expense tracker with automated categorization, secure authentication, and multi-user access.",
    description: [
      "ExpensifyAI is a full-stack AI-powered expense tracker built with Next.js, Prisma, and PostgreSQL. It leverages AI algorithms for automated expense categorization with 50% higher accuracy.",
      "The platform integrates Clerk for secure authentication and supports OAuth and social logins for multi-user access with role-based sessions.",
      "Optimized backend queries and REST APIs reduced latency by 35%, ensuring a seamless user experience for financial tracking.",
    ],
    features: [
      "AI-driven expense categorization with 50% improved accuracy",
      "Secure authentication with Clerk, OAuth, and social logins",
      "Role-based access and multi-user sessions",
      "Optimized queries and APIs with 35% faster response times",
      "Responsive UI with scalable architecture",
    ],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "OAuth", "AI Algorithms"],
    coverImage: "/expensifyai/home.png",
    thumbnailImage: "/expensifyai/home.png",
    gallery: [
      { url: "/expensifyai/home.png", caption: "Home Page - AI-Powered Financial Management" },
      { url: "/expensifyai/tech-stack.png", caption: "Modern Tech Stack - Built with Cutting-Edge Technologies" },
      { url: "/expensifyai/dashboard.png", caption: "Dashboard - Expense Management Interface" },
      { url: "/expensifyai/about.png", caption: "About Page - Features and Capabilities" },
    ],
    timeline: "September 2025",
    role: "Full-Stack Developer",
    liveUrl: "",
    githubUrl: "https://github.com/Aniketgautam959/ExpensifyAI",
    relatedProjects: [
      {
        slug: "scholarsync",
        title: "ScholarSync",
        category: "Student Advisory Platform",
        image: "/scholarsync/dashboard.png",
      },
    ],
  },
  {
    id: 2,
    slug: "scholarsync",
    title: "ScholarSync - Student Advisory",
    category: "Education & Career Guidance",
    shortDescription:
      "A real-time advisory platform integrating APIs for student career resources and collaboration.",
    description: [
      "ScholarSync is a web platform built with Next.js, JavaScript, and Tailwind CSS, designed to provide career and education guidance.",
      "It integrates NPTEL and government APIs for verified resources, implements push notifications, and uses MongoDB for database management.",
      "The scalable architecture enabled 40% more efficient career guidance and improved real-time collaboration for students.",
    ],
    features: [
      "Integration with NPTEL and government APIs",
      "Secure authentication and real-time collaboration",
      "Push notifications for updates and reminders",
      "MongoDB database management for scalable architecture",
      "40% improvement in guidance efficiency",
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "MongoDB", "APIs"],
    coverImage: "/scholarsync/dashboard.png",
    thumbnailImage: "/scholarsync/dashboard.png",
    gallery: [
      { url: "/scholarsync/dashboard.png", caption: "Main Dashboard" },
      { url: "/scholarsync/resources.png", caption: "Resource Integration" },
      { url: "/scholarsync/chat.png", caption: "Collaboration" },
    ],
    timeline: "July 2024 – Present",
    role: "Full-Stack Developer",
    liveUrl: "",
    githubUrl: "https://github.com/Aniketgautam959/ScholarSync",
    relatedProjects: [
      {
        slug: "expensifyai",
        title: "ExpensifyAI",
        category: "AI-Powered Finance",
        image: "/expensifyai/dashboard.png",
      },
    ],
  },
  {
    id: 3,
    slug: "ai-chat-app",
    title: "AI Chat Application",
    category: "AI & Communication",
    shortDescription:
      "A real-time AI-powered chat app with Gemini API integration, dark UI, and secure authentication.",
    description: [
      "AI Chat Application is a React.js-based chat platform integrated with the Google Gemini API for real-time AI responses.",
      "It features a modern dark-themed UI with glassmorphism, responsive design, and intuitive user experience.",
      "The app supports secure authentication and session management, handling 100+ concurrent users with optimized API calls that reduced response time by 25%.",
    ],
    features: [
      "Real-time AI responses using Google Gemini API",
      "Dark UI with glassmorphism and responsive design",
      "Authentication and session management for 100+ users",
      "Optimized API calls with 25% reduced response time",
    ],
    technologies: ["React.js", "Google Gemini API", "Tailwind CSS"],
    coverImage: "/aichat/dashboard.png",
    thumbnailImage: "/aichat/dashboard.png",
    gallery: [
      { url: "/aichat/dashboard.png", caption: "Chat Dashboard" },
      { url: "/aichat/auth.png", caption: "Secure Authentication" },
      { url: "/aichat/airesponse.png", caption: "AI Response" },
    ],
    timeline: "August 2025",
    role: "Frontend Developer",
    liveUrl: "",
    githubUrl: "https://github.com/Aniketgautam959/ai-chat-app",
    relatedProjects: [
      {
        slug: "scholarsync",
        title: "ScholarSync",
        category: "Student Advisory Platform",
        image: "/scholarsync/dashboard.png",
      },
    ],
  },
]

export function getAllProjects() {
  return projects
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug, limit = 2) {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
