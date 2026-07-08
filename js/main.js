/* ============================================
   HAMIDA NOOR KALILA — PORTFOLIO JAVASCRIPT
   All features using Vanilla JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========== Loading Screen ==========
  const loader = document.getElementById('loader');
  
  window.addEventListener('load', () => {
    // Give a brief moment for everything to render
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 800);
  });

  // Fallback: hide loader after 3 seconds max
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 3000);


  // ========== Navbar Scroll Effect ==========
  const navbar = document.querySelector('.navbar');
  const topBtn = document.getElementById('topBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Add 'scrolled' class to navbar
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Show/hide scroll-to-top button
    if (scrollY > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  });

  // Scroll to top
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  // ========== Smooth Scrolling for Nav Links ==========
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section[id]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Close mobile menu if open
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // ========== Active Nav Link on Scroll ==========
  function highlightActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveLink);
  highlightActiveLink(); // Run on load

  // ========== Hamburger Menu (Mobile) ==========
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });

  // ========== Dark Mode Toggle ==========
  const darkToggle = document.getElementById('darkToggle');
  const darkIcon = darkToggle.querySelector('i');

  // Check for saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkIcon.classList.replace('fa-moon', 'fa-sun');
  }

  darkToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      darkIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    }
  });

  // ========== Typing Effect ==========
  const typingElement = document.getElementById('typing');
  const phrases = [
    'Software Engineering Student',
    'Backend Developer Beginner',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      // Remove characters
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      // Add characters
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    // Finished typing the phrase
    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    }

    // Finished deleting the phrase
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Small pause before next phrase
    }

    setTimeout(typeEffect, typingSpeed);
  }

  // Start typing effect
  typeEffect();

  // ========== Fade-In Animation (Intersection Observer) ==========
  const fadeElements = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ========== Skill Bar Animation ==========
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const level = fill.getAttribute('data-level');
        fill.style.width = level + '%';
        skillObserver.unobserve(fill);
      }
    });
  }, {
    threshold: 0.3
  });

  skillBars.forEach(bar => skillObserver.observe(bar));

});
