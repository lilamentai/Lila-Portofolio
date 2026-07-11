import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-[30px] right-[30px] w-[46px] h-[46px] md:bottom-5 md:right-5 md:w-10 md:h-10 rounded-2xl md:rounded-xl bg-gradient-primary text-white text-lg flex items-center justify-center shadow-[0_6px_20px_rgba(212,134,156,0.35)] z-[999] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(212,134,156,0.5)] ${
        isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2.5'
      }`}
    >
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
}
