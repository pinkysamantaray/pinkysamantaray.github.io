import { portfolioData } from '../data/portfolioData';

const AboutMe = () => {
  return (
    <section id="about-me" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">{portfolioData.about.title}</h2>
      <p className="text-[var(--color-text-secondary)]">{portfolioData.about.content}</p>
    </section>
  );
};

export default AboutMe;
