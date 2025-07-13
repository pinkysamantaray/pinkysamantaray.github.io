import { portfolioData } from '../data/portfolioData';
import type { Experience } from '../types/portfolio';

const Experiences = () => {
  return (
    <section id="experiences" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
        {portfolioData.experiences.title}
      </h2>
      {portfolioData.experiences.content.map((experience: Experience, index: number) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">
            {experience.title} at {experience.company}
          </h3>
          <p className="text-[var(--color-text-secondary)]">{experience.years}</p>
          <p className="text-[var(--color-text-secondary)]">{experience.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
