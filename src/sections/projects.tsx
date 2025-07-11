import { portfolioData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">{portfolioData.projects.title}</h2>
      {portfolioData.projects.content.map((project: Project, index: number) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-[var(--color-text-secondary)]">{project.description}</p>
          <p className="text-sm text-[var(--color-text-secondary)]">Technologies: {project.technologies.join(", ")}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
