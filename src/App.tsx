import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Sidebar from './components/sidebar';
import AboutMe from './sections/about-me';
import Skills from './sections/skills';
import Experiences from './sections/experiences';
import TechStacks from './sections/tech-stacks';
import Projects from './sections/projects';
import Education from './sections/education';
import LicensesCertificates from './sections/licenses-certificates';
import Recommendations from './sections/recommendations';
import Links from './sections/links';
import ContactMe from './sections/contact-me';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main
        id="cv-content"
        className="flex-1 ml-64 p-8 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <h1 className="text-4xl font-bold mb-8 text-[var(--color-text-primary)]">My Portfolio</h1>
        <AboutMe />
        <Skills />
        <Experiences />
        <TechStacks />
        <Projects />
        <Education />
        <LicensesCertificates />
        <Recommendations />
        <Links />
        <ContactMe />
        <footer className="text-right py-4 text-sm text-[var(--color-text-secondary)]">
          &copy; {new Date().getFullYear()} All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
