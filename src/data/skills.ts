export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    name: "Programming Languages",
    skills: ["Java", "Python", "C", "C++"],
  },
  {
    name: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    name: "AI / GenAI",
    skills: ["Prompt Engineering", "RAG", "LLM APIs", "AI Application Development"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];
