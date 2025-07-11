export interface Experience {
  title: string;
  company: string;
  years: string;
  description: string;
}

export interface TechStackCategory {
  category: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Education {
  degree: string;
  university: string;
  years: string;
}

export interface LicenseCertificate {
  name: string;
  issuer: string;
  date: string;
}

export interface Recommendation {
  name: string;
  title: string;
  company: string;
  quote: string;
}

export interface Link {
  name: string;
  url: string;
}

export interface PortfolioData {
  aboutMe: {
    name: string;
    profilePicture: string;
    description: string;
  };
  about: {
    title: string;
    content: string[];
  };
  skills: {
    title: string;
    content: string[];
  };
  experiences: {
    title: string;
    content: Experience[];
  };
  techStacks: {
    title: string;
    content: TechStackCategory[];
  };
  projects: {
    title: string;
    content: Project[];
  };
  education: {
    title: string;
    content: Education[];
  };
  licensesCertificates: {
    title: string;
    content: LicenseCertificate[];
  };
  recommendations: {
    title: string;
    content: Recommendation[];
  };
  links: {
    title: string;
    content: Link[];
  };
  contactMe: {
    title: string;
    content: string;
    email: string;
    phone: string;
  };
}
