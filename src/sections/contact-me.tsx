import { portfolioData } from '../data/portfolioData';

const ContactMe = () => {
  return (
    <section id="contact-me" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
        {portfolioData.contactMe.title}
      </h2>
      <p className="text-[var(--color-text-secondary)]">{portfolioData.contactMe.content}</p>
      <p>
        Email:{' '}
        <a
          href={`mailto:${portfolioData.contactMe.email}`}
          className="text-blue-500 hover:underline"
        >
          {portfolioData.contactMe.email}
        </a>
      </p>
      <p>Phone: {portfolioData.contactMe.phone}</p>
    </section>
  );
};

export default ContactMe;
