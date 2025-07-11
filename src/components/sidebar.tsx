import { portfolioData } from '../data/portfolioData';

const Sidebar = () => {
  const handleDownloadCV = () => {
    console.log('Downloading CV...');
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[var(--color-background-primary)] dark:bg-[var(--color-background-secondary)] p-4 shadow-lg">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <img
            alt='Profile'
            src={portfolioData.aboutMe.profilePicture}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">{portfolioData.aboutMe.name}</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">{portfolioData.contactMe.email}</p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">{portfolioData.contactMe.phone}</p>
        <button
          onClick={handleDownloadCV}
          className="bg-black dark:bg-white hover:bg-blue-700 text-white dark:text-black font-bold py-2 px-4 rounded"
        >
          Download CV
        </button>
      </div>
      
      {/* Navigation will go here */}
    </aside>
  );
};

export default Sidebar;