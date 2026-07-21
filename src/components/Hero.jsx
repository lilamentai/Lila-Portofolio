import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import heroBg from '/images/ft3.jpeg';

export default function Hero() {
  const [refContent, isVisibleContent] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  const [refImage, isVisibleImage] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  
  const [text, setText] = useState('');
  const phrases = [
    'Software Engineering Student',
    'Backend Developer Beginner',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const typeEffect = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }

      let typingSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
      }

      timeout = setTimeout(typeEffect, typingSpeed);
    };

    timeout = setTimeout(typeEffect, 80);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg-photo sm:pt-[100px] sm:pb-[60px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Overlay transparan pink-cream */}
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Konten */}
      <div className="container-custom relative z-10 flex flex-col items-center text-center pt-[120px] pb-20">
        <div
          ref={refContent}
          className={`max-w-[680px] transition-all duration-700 ease-in-out ${
            isVisibleContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <p className="font-poppins text-base mb-2 hero-text-subtle">Hi There, Beautiful. 🌸</p>
          <h1 className="text-[3.2rem] mb-2 lg:text-[2.6rem] md:text-[2.4rem] sm:text-[2rem] sm:mb-1 font-playfair hero-text-heading">
            I'm <span className="hero-text-primary">Hamida Noor Kalila</span>
          </h1>
          <p className="font-poppins text-[1.15rem] font-normal hero-text-accent min-h-[32px] mb-5 sm:text-base">
            <span>{text}</span>
            <span className="inline-block w-[2px] h-[1.1em] hero-cursor ml-[2px] align-text-bottom cursor-blink"></span>
          </p>
          <p className="text-[0.95rem] hero-text-body mb-8 leading-[1.8] md:max-w-[480px] sm:text-[0.88rem] mx-auto">
            A Software Engineering student with a growing passion for Backend Development.
            I love building things, solving problems, and continuously learning new technologies.
          </p>

          <div className="flex gap-3.5 flex-wrap mb-8 justify-center sm:flex-col sm:items-center sm:gap-2.5 sm:w-full">
            <a href="#about" className="btn-primary sm:w-full sm:justify-center">
              <i className="fa-solid fa-user"></i> About Me
            </a>
            <a href="#projects" className="btn-secondary sm:w-full sm:justify-center">
              <i className="fa-solid fa-code"></i> Projects
            </a>
            <a href="#contact" className="btn-outline sm:w-full sm:justify-center">
              <i className="fa-solid fa-share-nodes"></i> Socials
            </a>
          </div>

          <div className="flex gap-3 justify-center">
            {[
              { icon: 'fa-github', url: 'https://github.com/lilamentai', label: 'GitHub' },
              { icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/in/hamida-noor-kalila-2269b6387', label: 'LinkedIn' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hero-social-btn w-[42px] h-[42px] rounded-xl flex items-center justify-center text-base transition-all duration-300 hover:-translate-y-[3px]"
              >
                <i className={`fa-brands ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
