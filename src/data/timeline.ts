export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  date?: string;
  location?: string;
  description: string;
  link?: string;
  linkText?: string;
}

export const experienceData: TimelineItem[] = [
  {
    id: "webstack",
    title: "Web Development Internship",
    organization: "Webstack Academy",
    description: "Completed internship training at Webstack Academy gaining hands-on experience in web development and practical project building.",
    link: "https://drive.google.com/file/d/1iqQ2D960h8wi1AGRx43GhsH243JZqM4y/view?usp=sharing",
    linkText: "View Certificate"
  },
  {
    id: "graphcamp",
    title: "Graph Camp",
    organization: "AlgoUniversity",
    description: "Completed Graph Camp by AlgoUniversity focused on graph algorithms, problem-solving strategies, and competitive programming concepts.",
    link: "https://drive.google.com/file/d/1IMslF617kmlwuxdiW6IwetLhQ3qGBtun/view?usp=sharing",
    linkText: "View Certificate"
  }
];

export const educationData: TimelineItem[] = [
  {
    id: "lpu",
    title: "B.Tech — Computer Science",
    organization: "Lovely Professional University",
    location: "Punjab",
    description: "Specialized in Computer Science.",
  },
  {
    id: "rgukt",
    title: "Intermediate / Pre University Course (PUC)",
    organization: "RGUKT (IIIT)",
    location: "Ongole",
    description: "Higher secondary education focusing on foundational sciences and mathematics.",
  },
  {
    id: "littlebuds",
    title: "Secondary School Certificate (SSC)",
    organization: "Little Buds High School",
    location: "Eluru",
    description: "Primary and secondary education up to 10th grade.",
  }
];

export const researchData = {
  title: "File Management in Real-Time Operating Systems",
  summary: "Worked on a research paper exploring file management techniques and optimizations specific to Real-Time Operating Systems (RTOS).",
  area: "Operating Systems",
  link: "https://drive.google.com/file/d/1DWDINf94WjP29Auis9iivNe608uZnfiO/view?usp=drive_link"
};
