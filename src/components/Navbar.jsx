import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active link highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'favorites', label: 'Favorites' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Socials' },
  ];

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4 z-[1000] transition-all duration-300 lg:px-6 md:px-4 ${
          scrolled
            ? 'bg-navbar-bg backdrop-blur-md shadow-soft !py-3'
            : ''
        }`}
      >
        <a href="#home" className="font-playfair text-[1.6rem] font-bold text-text-heading transition-colors duration-300 sm:text-[1.3rem]">
          lila<span className="text-primary">.</span>
        </a>

        <ul
          className={`flex gap-2 md:fixed md:top-0 md:right-[-100%] md:w-[280px] md:h-screen md:bg-bg-secondary md:flex-col md:pt-[80px] md:px-8 md:pb-8 md:gap-1 md:shadow-[-4px_0_20px_var(--shadow-color)] md:transition-[right] md:duration-300 md:z-[999] ${
            menuOpen ? 'md:!right-0' : ''
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-[0.85rem] font-medium px-4 py-2 rounded-lg transition-all duration-300 md:text-[0.95rem] md:px-4 md:py-3 md:block ${
                  activeSection === link.id
                    ? 'text-primary-deep bg-tag-bg'
                    : 'text-text-subtle hover:text-primary-deep hover:bg-tag-bg'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-xl bg-surface border border-border text-text-subtle text-base flex items-center justify-center transition-all duration-300 hover:text-primary hover:border-primary-soft"
          >
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <a
            href="https://www.linkedin.com/in/hamida-noor-kalila-2269b6387"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.85rem] font-medium px-6 py-2.5 rounded-xl bg-gradient-primary text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,134,156,0.35)] md:hidden"
          >
            Let's Connect
          </a>
          <button
            className="hidden md:flex flex-col gap-[5px] cursor-pointer z-[1001] bg-transparent border-none p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-[2px] bg-text-heading rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-text-heading rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-text-heading rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
