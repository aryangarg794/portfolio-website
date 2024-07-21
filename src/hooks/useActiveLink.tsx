import { useState, useEffect } from 'react';

const useActiveLink = (sectionIds: string[]): string => {
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const activeSection = sectionIds.find(id => {
        const section = document.getElementById(id);
        if (section) {
          return section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition;
        }
        return false;
      });

      if (activeSection) {
        setActiveLink(`#${activeSection}`);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeLink;
};

export default useActiveLink;
