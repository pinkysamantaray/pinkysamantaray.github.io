import { portfolioData } from '../data/portfolioData';
import type { LicenseCertificate } from '../types/portfolio';

const LicensesCertificates = () => {
  return (
    <section id="licenses-certificates" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">{portfolioData.licensesCertificates.title}</h2>
      {portfolioData.licensesCertificates.content.map((license: LicenseCertificate, index: number) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{license.name}</h3>
          <p className="text-[var(--color-text-secondary)]">{license.issuer}, {license.date}</p>
        </div>
      ))}
    </section>
  );
};

export default LicensesCertificates;
