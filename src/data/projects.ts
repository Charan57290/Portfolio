export interface Project {
  title: string;
  slug: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  architecture?: string;
  challenges?: string;
  results?: string;
  category: string[];
  github?: string;
  live?: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    title: "Second Brain / BrainKit",
    slug: "second-brain",
    description: "An AI-powered knowledge management system and personal assistant.",
    overview: "Second Brain (BrainKit) is a comprehensive productivity and knowledge management application that leverages AI to help users organize, understand, and retain information efficiently.",
    problem: "Information overload makes it difficult to organize notes, retain knowledge, and retrieve specific information when needed.",
    solution: "A centralized platform integrating advanced AI features to automate organization, enhance learning through flashcards, and provide conversational access to personal notes.",
    features: [
      "AI Assistant",
      "Notes & Knowledge management",
      "AI-powered Q&A",
      "Humanizer & Paraphraser",
      "Flashcard generator",
      "Focus Timer",
      "Citation Automator",
      "Markdown editor",
      "Knowledge Graph",
      "Projects & File Manager"
    ],
    technologies: [
      "Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "Express.js",
      "PostgreSQL", "Prisma", "JWT", "bcrypt", "Cloudinary", "OpenAI API",
      "Zustand", "React Context"
    ],
    category: ["Full Stack", "AI", "Web"],
    github: "https://github.com/Charan57290", // Placeholder
    live: "https://sb-lyart.vercel.app/",
    image: "/assets/second_brain_ai.jpg",
  },
  {
    title: "Alpha Lens",
    slug: "alpha-lens",
    description: "An Investment Research tool utilizing six specialized AI agents to deliver a clear investment thesis.",
    overview: "Alpha Lens is an advanced investment research tool where six specialized AI agents work together to analyze financials, news, risks, and economic moats, ultimately delivering a clear and actionable investment thesis.",
    problem: "Analyzing comprehensive investment data—financials, risks, and market news—manually is extremely time-consuming and prone to human oversight.",
    solution: "Engineered a multi-agent AI system that autonomously researches and synthesizes complex market data into a cohesive investment thesis.",
    features: ["Multi-Agent AI System", "Financial Analysis", "News & Risk Assessment", "Economic Moat Evaluation"],
    technologies: ["AI Agents", "LLMs", "Python", "React", "Next.js"],
    category: ["AI", "Full Stack", "Research"],
    github: "https://github.com/Charan57290",
    live: "https://alpha-lens-upm1.vercel.app/",
    image: "/assets/alpha_lens_ai.jpg",
  },
  {
    title: "Synthesia",
    slug: "synthesia",
    description: "A full-stack music streaming platform designed for seamless audio playback and user playlists.",
    overview: "Synthesia is a full-stack music streaming application where users can listen to tracks, create playlists, and explore new music in a seamless, interactive UI.",
    problem: "Many music apps have cluttered interfaces and lack lightweight streaming capabilities.",
    solution: "Developed a focused, performant streaming platform with an intuitive user interface.",
    features: ["Seamless audio playback", "User playlists", "Music library exploration"],
    technologies: ["React", "Node.js", "MongoDB"],
    category: ["Full Stack", "Web"],
    github: "https://github.com/Charan57290/SYNTHESIA.git",
    live: "http://synthesia1.vercel.app/",
    image: "/assets/synthesia.png",
  },
  {
    title: "IRCTC Home Page Modification",
    slug: "irctc-modification",
    description: "A modern, user-friendly redesign and implementation of the IRCTC booking portal.",
    overview: "This project involves redesigning the user interface of the official IRCTC home page to improve user experience, accessibility, and booking efficiency.",
    problem: "The existing IRCTC website has a cluttered interface that can confuse users during the booking process.",
    solution: "Developed a clean, modernized UI clone that streamlines the search and booking workflow while maintaining brand identity.",
    features: ["Streamlined search interface", "Modernized UI elements", "Improved navigation structure", "Responsive design"],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    category: ["Web", "Frontend"],
    github: "https://github.com/Charan57290",
    live: "https://acdyon-irctc.vercel.app/",
    image: "/assets/irctc_ai.jpg",
  },
  {
    title: "Custom Browser",
    slug: "custom-browser",
    description: "A lightweight, customizable desktop browser built with security and speed in mind.",
    overview: "A custom desktop web browser designed to be extremely lightweight, stripping away unnecessary bloatware found in modern mainstream browsers.",
    problem: "Mainstream browsers consume excessive system resources and memory.",
    solution: "Created a minimalist browser optimized for speed and low resource usage.",
    features: ["Fast rendering", "Low memory footprint", "Customizable UI", "Basic security features"],
    technologies: ["C++", "Qt", "Python"],
    category: ["All"],
    github: "https://github.com/Charan57290/Custom-browser.git",
    image: "/assets/browser.png",
  },
  {
    title: "Road Surveillance & Emergency Alerts",
    slug: "road-surveillance",
    description: "Smart traffic monitoring system with real-time emergency alerts.",
    overview: "An AI-driven computer vision system that monitors traffic cameras to detect accidents and anomalies on the road.",
    problem: "Delayed response to road accidents can lead to fatal consequences.",
    solution: "A surveillance system that automatically detects incidents in real-time and alerts emergency services.",
    features: ["Real-time video processing", "Accident detection", "Automated emergency alerts", "Traffic flow analysis"],
    technologies: ["Python", "OpenCV", "Machine Learning"],
    category: ["AI", "Research"],
    github: "https://github.com/YIZHUSTC/InsightDE.git",
    image: "/assets/surveillance.png",
  },
  {
    title: "Portfolio Website V2",
    slug: "portfolio-website",
    description: "My personal developer portfolio built with modern web technologies.",
    overview: "A complete rebuild of my developer portfolio to showcase my skills in modern full-stack development, UI/UX design, and animations.",
    problem: "The previous portfolio was built with static HTML/CSS and lacked modern interactive capabilities.",
    solution: "Developed a dynamic, fully responsive Single Page Application with Next.js App Router and Framer Motion.",
    features: ["Dynamic project routing", "Interactive skill filtering", "Animated timelines", "Dark-mode focused design", "Command Palette"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: ["Web", "Full Stack"],
    github: "https://github.com/Charan57290/Portfolio",
    image: "/assets/portfolio_ai.jpg",
  }
];
