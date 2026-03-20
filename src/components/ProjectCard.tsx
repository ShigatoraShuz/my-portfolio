import React from "react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-black border-2 border-neonCyan shadow-glowCyan p-4 rounded-lg hover:scale-105 transform transition">
      <h3 className="text-neonPink font-retro text-lg mb-2">{project.title}</h3>
      <p className="text-neonYellow font-mono mb-2">{project.description}</p>
      <p className="text-cyan-300 font-mono text-sm mb-2">Tech: {project.technologies.join(", ")}</p>
      {project.link && (
        <a
          href={project.link}
          className="text-neonCyan font-retro underline hover:text-neonPink"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
