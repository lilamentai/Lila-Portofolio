import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const [refHeader, isVisibleHeader] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  const [refGrid, isVisibleGrid] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });

  const socials = [
    {
      name: 'LinkedIn',
      handle: 'Hamida Noor Kalila',
      icon: 'fa-linkedin-in',
      url: 'https://www.linkedin.com/in/hamida-noor-kalila-2269b6387'
    },
    {
      name: 'GitHub',
      handle: 'lilamentai',
      icon: 'fa-github',
      url: 'https://github.com/lilamentai'
    }
  ];

  return (
    <section id="contact" className="bg-bg-secondary py-[100px] md:py-[70px] sm:py-[56px]">
      <div className="container-custom">
        <div
          ref={refHeader}
          className={`section-header transition-all duration-700 ease-in-out ${
            isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <span className="section-label">My Socials</span>
          <h2 className="section-title">Find Me Here</h2>
          <p className="section-subtitle">Let's connect — follow me on my social media!</p>
        </div>

        <div
          ref={refGrid}
          className={`grid grid-cols-2 gap-6 max-w-[700px] mx-auto md:grid-cols-1 md:gap-4 transition-all duration-700 ease-in-out ${
            isVisibleGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-surface border border-border rounded-2xl p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong group"
            >
              <div className="w-12 h-12 rounded-xl bg-tag-bg flex items-center justify-center text-[1.2rem] text-icon shrink-0">
                <i className={`fa-brands ${social.icon}`}></i>
              </div>
              <div>
                <h4 className="font-poppins text-[0.9rem] font-semibold mb-0.5 text-text-heading">{social.name}</h4>
                <p className="text-[0.82rem] text-text-subtle font-medium transition-colors duration-300 group-hover:text-primary">
                  {social.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
