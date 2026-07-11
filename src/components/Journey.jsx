import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Journey() {
  const [refHeader, isVisibleHeader] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  const [refTimeline, isVisibleTimeline] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });

  const timelineEvents = [
    {
      date: 'Early 2024',
      title: 'Started Software Engineering',
      desc: 'Taking my first step into the world of programming by learning the fundamentals of coding.',
      trans: 'Mengambil langkah pertama ke dunia programming dengan belajar dasar-dasar coding.'
    },
    {
      date: 'Mid 2024',
      title: 'Began to Understand and Enjoy Programming',
      desc: 'Starting to understand programming and enjoying the process of coding.',
      trans: 'Mulai paham programming dan makin suka sama proses ngoding.'
    },
    {
      date: 'Late 2024',
      title: 'Building Websites',
      desc: 'Building responsive and user-friendly websites while improving my development skills.',
      trans: 'Membangun website yang responsif dan mudah dipakai sambil terus mengasah skill development.'
    },
    {
      date: 'Early 2025',
      title: 'Working as a Frontend & Backend Developer',
      desc: 'Contributing as both a frontend and backend developer in a final project, turning ideas into functional web applications.',
      trans: 'Berkontribusi sebagai frontend dan backend developer di proyek akhir, mengubah ide jadi aplikasi web yang bisa berjalan.'
    },
    {
      date: 'Mid 2025',
      title: 'Testing and Improving Web Applications',
      desc: 'Testing web applications to ensure functionality, usability, and a consistent user experience.',
      trans: 'Menguji aplikasi web untuk memastikan fungsinya berjalan baik, mudah digunakan, dan pengalaman pengguna yang konsisten.'
    },
    {
      date: 'Late 2025',
      title: 'Exploring Backend with JavaScript & Node.js',
      desc: 'Expanding my backend knowledge by learning JavaScript and Node.js to build modern server-side applications.',
      trans: 'Memperluas pengetahuan backend dengan belajar JavaScript dan Node.js untuk membangun aplikasi server-side yang modern.'
    },
    {
      date: '2026 — Present',
      title: 'Still Growing',
      desc: 'Continuously expanding my knowledge of backend development while exploring the broader world of software engineering.',
      trans: 'Terus memperluas pengetahuan backend development sambil menjelajahi dunia software engineering yang lebih luas.'
    }
  ];

  return (
    <section id="journey" className="py-[100px] md:py-[70px] sm:py-[56px]">
      <div className="container-custom">
        <div
          ref={refHeader}
          className={`section-header transition-all duration-700 ease-in-out ${
            isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Learning Timeline</h2>
          <p className="section-subtitle">Every step of my learning journey has shaped who I am today.</p>
        </div>

        <div
          ref={refTimeline}
          className={`relative max-w-[700px] mx-auto pl-10 timeline-line transition-all duration-700 ease-in-out sm:pl-[30px] ${
            isVisibleTimeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {timelineEvents.map((item, index) => (
            <div key={index} className="relative mb-10 pl-[30px] last:mb-0 sm:pl-[18px]">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-[3px] border-bg-primary shadow-[0_0_0_3px_var(--primary-soft)] z-10 sm:-left-[26px]"></div>
              <span className="block font-poppins text-[0.78rem] font-semibold text-primary-deep uppercase tracking-[1px] mb-1.5">
                {item.date}
              </span>
              <div className="bg-surface border border-border rounded-[14px] p-5 shadow-[0_4px_16px_var(--shadow-color)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_var(--shadow-strong)] sm:p-4">
                <h4 className="font-playfair text-text-heading text-[1.05rem] mb-1.5 font-semibold">{item.title}</h4>
                <p className="text-[0.88rem] text-text-subtle leading-[1.6]">{item.desc}</p>
                <span className="block text-[0.76rem] text-text-subtle opacity-70 italic mt-1 leading-[1.5]">
                  {item.trans}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
