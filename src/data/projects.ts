export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Another project description",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

