import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
        {portfolioData.skills.title}
      </h2>
      <ul className="list-disc pl-5">
        {portfolioData.skills.content.map((skill, index) => (
          <li key={index} className="text-[var(--color-text-secondary)]">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
