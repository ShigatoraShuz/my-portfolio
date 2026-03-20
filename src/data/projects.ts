export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;    // Live demo link
  github?: string;  // GitHub repo link
  image?: string;   // Image path or URL
}

// Example projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React, TypeScript, and Tailwind CSS",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com/yourusername/portfolio",
    image: "/images/project1.png", // Replace with your actual image path
  },
  {
    id: 2,
    title: "Project Two",
    description: "Another project description",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://example2.com",
    github: "https://github.com/yourusername/project-two",
    image: "/images/project2.png", // Replace with your actual image path
  },
  {
    id: 3,
    title: "Design Mockup",
    description: "A UI/UX design project example",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    github: "https://github.com/yourusername/design-mockup",
    image: "/images/project3.png",
  },
];