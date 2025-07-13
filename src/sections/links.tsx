import { portfolioData } from '../data/portfolioData';
import type { Link as LinkType } from '../types/portfolio';

const Links = () => {
  return (
    <section id="links" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
        {portfolioData.links.title}
      </h2>
      <ul className="list-disc pl-5">
        {portfolioData.links.content.map((link: LinkType, index: number) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Links;
