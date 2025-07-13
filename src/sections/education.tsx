import { portfolioData } from '../data/portfolioData';
import type { Education as EducationType } from '../types/portfolio';

const Education = () => {
  return (
    <section id="education" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
        {portfolioData.education.title}
      </h2>
      {portfolioData.education.content.map((edu: EducationType, index: number) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-[var(--color-text-secondary)]">
            {edu.university}, {edu.years}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Education;
