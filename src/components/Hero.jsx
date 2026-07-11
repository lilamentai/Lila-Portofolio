import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-[120px] pb-20 relative overflow-hidden hero-circles sm:pt-[100px] sm:pb-[60px]">
      <div className="container-custom flex items-center justify-between gap-[60px] lg:gap-10 md:flex-col-reverse md:text-center">
        <div
          ref={refContent}
          className={`flex-1 max-w-[560px] md:max-w-full md:flex md:flex-col md:items-center transition-all duration-700 ease-in-out ${
            isVisibleContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <p className="font-poppins text-base text-text-subtle mb-2">Hi There, Beautiful.</p>
          <h1 className="text-[3.2rem] mb-2 lg:text-[2.6rem] md:text-[2.4rem] sm:text-[2rem] sm:mb-1 font-playfair text-text-heading">
            I'm <span className="text-primary">Hamida Noor Kalila</span>
          </h1>
          <p className="font-poppins text-[1.15rem] font-normal text-primary-deep min-h-[32px] mb-5 sm:text-base">
            <span>{text}</span>
            <span className="inline-block w-[2px] h-[1.1em] bg-primary-deep ml-[2px] align-text-bottom cursor-blink"></span>
          </p>
          <p className="text-[0.95rem] text-text-subtle mb-8 leading-[1.8] md:max-w-[480px] sm:text-[0.88rem]">
            A Software Engineering student with a growing passion for Backend Development.
            I love building things, solving problems, and continuously learning new technologies.
          </p>
          
          <div className="flex gap-3.5 flex-wrap mb-8 md:justify-center sm:flex-col sm:items-center sm:gap-2.5 sm:w-full">
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
          
          <div className="flex gap-3 md:justify-center">
            {[
              { icon: 'fa-github', url: 'https://github.com/lilamentai', label: 'GitHub' },
              { icon: 'fa-instagram', url: 'https://www.instagram.com/brownieshy_/', label: 'Instagram' },
              { icon: 'fa-tiktok', url: 'https://www.tiktok.com/@rorrwl?_r=1&_t=ZS-97rAgsXPzP8', label: 'TikTok' },
              { icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/in/hamida-noor-kalila-2269b6387', label: 'LinkedIn' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-[42px] h-[42px] rounded-xl bg-surface border border-border flex items-center justify-center text-base text-text-subtle transition-all duration-300 hover:text-primary hover:border-primary-soft hover:-translate-y-[3px] hover:shadow-[0_6px_16px_var(--shadow-color)]"
              >
                <i className={`fa-brands ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div
          ref={refImage}
          className={`shrink-0 transition-all duration-700 ease-in-out ${
            isVisibleImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <div className="relative w-[320px] h-[380px] rounded-[24px] overflow-hidden border-[3px] border-border shadow-photo bg-gradient-card lg:w-[270px] lg:h-[330px] md:w-[240px] md:h-[290px] sm:w-[200px] sm:h-[250px]">
            <img src="/images/sekolah1.jpeg" alt="Profile photo of Hamida Noor Kalila" className="w-full h-full object-cover" />
            <div className="absolute w-[60px] h-[60px] -bottom-5 -right-5 hero-deco-dots opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
