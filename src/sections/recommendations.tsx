import { portfolioData } from '../data/portfolioData';
import type { Recommendation } from '../types/portfolio';

const Recommendations = () => {
  return (
    <section id="recommendations" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
        {portfolioData.recommendations.title}
      </h2>
      {portfolioData.recommendations.content.map((rec: Recommendation, index: number) => (
        <div key={index} className="mb-4">
          <p className="italic text-[var(--color-text-secondary)]">"{rec.quote}"</p>
          <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
            - {rec.name}, {rec.title} at {rec.company}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Recommendations;
