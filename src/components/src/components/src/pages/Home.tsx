import React from "react";
import Header from "components/Header";
import ProjectCard from "components/src/components/ProjectCard";
import { projects, Project } from "data/projects";

const Home: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      <section id="projects" className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-retro text-neonPink mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;