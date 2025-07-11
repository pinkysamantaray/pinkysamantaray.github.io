import { portfolioData } from '../data/portfolioData';
import { ChevronRight } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about-me" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">{portfolioData.about.title}</h2>
      <div className="text-[var(--color-text-secondary)]">
        {portfolioData.about.content.map((item, index) => (
          <div key={index} className="flex items-start mb-2">
            <ChevronRight className="w-7 h-7 mr-2 text-[var(--color-accent)]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
