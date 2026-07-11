import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useEffect, useRef } from 'react';

function SkillBar({ icon, name, level, levelText, index }) {
  const [ref, isIntersecting] = useIntersectionObserver({ triggerOnce: true, threshold: 0.3 });
  
  return (
    <div className="bg-surface border border-border rounded-2xl p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong sm:p-5">
      <div className="w-[50px] h-[50px] rounded-xl bg-tag-bg flex items-center justify-center mx-auto mb-4 text-[1.3rem] text-icon">
        <i className={icon}></i>
      </div>
      <h4 className="font-poppins text-[0.95rem] font-semibold mb-3">{name}</h4>
      <div className="w-full h-2 bg-progress-bg rounded-md overflow-hidden mb-1.5" ref={ref}>
        <div 
          className="h-full bg-gradient-primary rounded-md transition-all duration-1000 ease-out"
          style={{ width: isIntersecting ? `${level}%` : '0%' }}
        ></div>
      </div>
      <span className="text-[0.75rem] text-text-subtle font-medium">{levelText}</span>
    </div>
  );
}

export default function Skills() {
  const [refHeader, isVisibleHeader] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  const [refGrid, isVisibleGrid] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });

  const skills = [
    { icon: "fa-brands fa-html5", name: "HTML", level: 80, text: "Comfortable" },
    { icon: "fa-brands fa-css3-alt", name: "CSS", level: 75, text: "Comfortable" },
    { icon: "fa-brands fa-js", name: "JavaScript", level: 55, text: "Learning" },
    { icon: "fa-brands fa-node-js", name: "Node.js", level: 35, text: "Beginner" },
    { icon: "fa-brands fa-git-alt", name: "Git", level: 50, text: "Learning" },
    { icon: "fa-brands fa-github", name: "GitHub", level: 50, text: "Learning" },
    { icon: "fa-solid fa-mobile-screen-button", name: "Responsive Design", level: 65, text: "Growing" },
    { icon: "fa-solid fa-palette", name: "UI Design", level: 60, text: "Growing" },
    { icon: "fa-solid fa-lightbulb", name: "Problem Solving", level: 55, text: "Developing" }
  ];

  return (
    <section id="skills" className="bg-bg-secondary py-[100px] md:py-[70px] sm:py-[56px]">
      <div className="container-custom">
        <div
          ref={refHeader}
          className={`section-header transition-all duration-700 ease-in-out ${
            isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <span className="section-label">My Skills</span>
          <h2 className="section-title">What I'm Learning</h2>
          <p className="section-subtitle">Honest progress — I'm still growing, and that's perfectly okay.</p>
        </div>

        <div
          ref={refGrid}
          className={`grid grid-cols-3 gap-6 lg:grid-cols-3 lg:gap-5 md:grid-cols-2 sm:grid-cols-2 sm:gap-3 min-[360px]:grid-cols-2 max-[360px]:grid-cols-1 transition-all duration-700 ease-in-out ${
            isVisibleGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {skills.map((skill, idx) => (
            <SkillBar key={idx} {...skill} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
