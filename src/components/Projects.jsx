import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Projects() {
  const [refHeader, isVisibleHeader] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  const [refGrid, isVisibleGrid] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });

  const projects = [
    {
      img: "/images/web1.jpeg",
      title: "Project DOMS",
      desc: "My first website project showcasing my journey, skills, and projects as a Software Engineering student.",
      tags: ["HTML", "CSS", "PHP"]
    },
    {
      img: "/images/web2.png",
      title: "Portfolio",
      desc: "My personal portfolio website built to showcase who I am, my skills, and my projects as a Software Engineering student.",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-[100px] md:py-[70px] sm:py-[56px]">
      <div className="container-custom">
        <div
          ref={refHeader}
          className={`section-header transition-all duration-700 ease-in-out ${
            isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <span className="section-label">My Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">Small projects that helped me grow. Each one taught me something new.</p>
        </div>

        <div
          ref={refGrid}
          className={`grid grid-cols-2 gap-7 md:grid-cols-1 md:gap-5 transition-all duration-700 ease-in-out ${
            isVisibleGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {projects.map((project, idx) => (
            <div key={idx} className="bg-surface border border-border rounded-[18px] overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong group">
              <div className="w-full h-[340px] md:h-[220px] overflow-hidden bg-bg-secondary flex items-start justify-center">
                <img 
                  src={project.img} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="font-poppins text-[1.05rem] font-semibold mb-2">{project.title}</h4>
                <p className="text-[0.88rem] text-text-subtle mb-4 leading-[1.6]">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-2xl text-[0.75rem] font-medium bg-tag-bg text-tag-text">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
