export const projects = [
  {
    id: 1,
    slug: "mailboard",
    title: "MailBoard",
    category: "Full-Stack Web App",
    shortDescription:
      "A comprehensive email productivity app with AI-powered categorization and multi-inbox management.",
    description: [
      "MailBoard is a full-stack email productivity application designed to streamline email management through AI-powered features and intuitive design. Built with modern web technologies, it offers seamless integration with Gmail API for multi-inbox support.",
      "The application features JWT authentication for secure user sessions and leverages the Gemini API for intelligent email categorization with 95% accuracy. The responsive UI is crafted using Tailwind CSS and Radix UI components.",
      "Deployed on Vercel with optimized performance, the application reduces API response time by 60% through careful optimization and efficient database queries.",
    ],
    features: [
      "JWT authentication for secure user sessions",
      "Gmail API integration for multi-inbox management",
      "AI-powered email categorization using Gemini API with 95% accuracy",
      "Automated resource extraction from emails",
      "100% responsive design with Tailwind CSS and Radix UI",
      "Optimized API performance with 60% faster response times",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Radix UI", "MongoDB", "JWT", "Gemini API", "Gmail API", "Vercel"],
    coverImage: "/job-finder-cover.png",
    thumbnailImage: "/modern-finance-app.png",
    gallery: [
      { url: "/job-finder-screen1.png", caption: "Dashboard Overview" },
      { url: "/job-finder-screen2.png", caption: "Email Categorization" },
      { url: "/job-finder-screen3.png", caption: "Multi-Inbox Management" },
      { url: "/job-finder-screen4.png", caption: "AI Analytics Dashboard" },
    ],
    timeline: "June 2025",
    role: "Full-Stack Developer",
    liveUrl: "https://mail-board.vercel.app/",
    githubUrl: "https://github.com/aditya-madwal/mailboard",
    relatedProjects: [
      {
        slug: "aristotle",
        title: "Aristotle",
        category: "AI Platform",
        image: "/modern-finance-overview.png",
      },
    ],
  },
  {
    id: 2,
    slug: "aristotle",
    title: "Aristotle",
    category: "AI Platform",
    shortDescription: "An AI-powered student productivity platform with PDF summarization and decentralized storage.",
    description: [
      "Aristotle is an innovative AI-powered platform designed to enhance student productivity through intelligent document processing and interactive learning features. The platform integrates cutting-edge AI technology with decentralized storage solutions.",
      "Built with React.js frontend and Django REST backend, the application provides seamless PDF summarization capabilities using the Gemini API. Students can upload documents and receive intelligent summaries and engage in chat interactions about the content.",
      "The platform utilizes IPFS and Pinata Cloud for decentralized document storage, ensuring data security and accessibility. Intuitive dashboards provide comprehensive user engagement analytics and learning insights.",
    ],
    features: [
      "AI-powered PDF summarization using Gemini API",
      "Interactive chat functionality for document discussions",
      "Decentralized document storage with IPFS and Pinata Cloud",
      "Intuitive user dashboards for engagement tracking",
      "Secure user authentication and data management",
      "Real-time document processing and analysis",
    ],
    technologies: ["React.js", "Django REST", "Gemini API", "IPFS", "PostgreSQL", "Pinata Cloud", "Render"],
    coverImage: "/finance-dashboard-cover.png",
    thumbnailImage: "/modern-finance-overview.png",
    gallery: [
      { url: "/finance-dashboard-screen1.png", caption: "Main Dashboard" },
      { url: "/finance-dashboard-screen2.png", caption: "PDF Summarization" },
      { url: "/finance-dashboard-screen3.png", caption: "Chat Interface" },
      { url: "/finance-dashboard-screen4.png", caption: "Document Management" },
    ],
    timeline: "January 2025",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/Aditya-madwal/Aristotle.ai",
    relatedProjects: [
      {
        slug: "mailboard",
        title: "MailBoard",
        category: "Full-Stack Web App",
        image: "/modern-finance-app.png",
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
