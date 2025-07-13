import { portfolioData } from '../data/portfolioData';
import type { TechStackCategory } from '../types/portfolio';

const TechStacks = () => {
  return (
    <section id="tech-stacks" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
        {portfolioData.techStacks.title}
      </h2>
      {portfolioData.techStacks.content.map((stack: TechStackCategory, index: number) => (
        <div key={index} className="mb-2">
          <h3 className="text-xl font-semibold">{stack.category}</h3>
          <p>{stack.technologies.join(', ')}</p>
        </div>
      ))}
    </section>
  );
};

export default TechStacks;
