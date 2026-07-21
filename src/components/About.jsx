import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import profileImg from '/images/profile.jpeg';

export default function About() {
  const [refHeader, isVisibleHeader] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  const [refImage, isVisibleImage] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  const [refText, isVisibleText] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="about-section relative overflow-hidden py-[100px] md:py-[70px] sm:py-[56px]">
      <div className="container-custom relative z-10">
        <div
          ref={refHeader}
          className={`section-header transition-all duration-700 ease-in-out ${
            isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get to Know Me</h2>
          <p className="section-subtitle">A glimpse into who I am and what drives my passion for technology.</p>
        </div>

        <div className="grid grid-cols-2 gap-[60px] items-center lg:gap-10 md:grid-cols-1 md:gap-8 md:text-center">
          <div
            ref={refImage}
            className={`relative flex justify-center py-5 md:justify-center transition-all duration-700 ease-in-out ${
              isVisibleImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
            }`}
          >
            <div className="relative w-full max-w-[360px] bg-surface p-3 rounded-[24px] border-[3px] border-dashed border-primary shadow-[16px_16px_0_var(--primary-soft),0_16px_40px_var(--shadow-color)] -rotate-3 transition-all duration-[0.4s] hover:rotate-0 hover:scale-105 hover:shadow-[8px_8px_0_var(--primary-soft),0_20px_40px_var(--shadow-strong)] float-sparkle md:max-w-[300px]">
              <img
                src={profileImg}
                alt="Hamida Noor Kalila"
                className="w-full h-[400px] md:h-[330px] rounded-[14px] object-cover object-top"
              />
            </div>
          </div>

          <div
            ref={refText}
            className={`transition-all duration-700 ease-in-out ${
              isVisibleText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
            }`}
          >
            <h3 className="font-playfair text-text-heading text-2xl mb-4">Hamida Noor Kalila</h3>
            <p className="text-[0.95rem] text-text-body mb-4 leading-[1.8]">
              Sup! I'm Lila, Software Engineering yang lagi belajar dan proses jadi backend
              developer. Sekarang lagi fokus belajar JavaScript, Node.js, dan dunia coding yang sometimes
              bikin pusink, tapi kadang bikin penasaran buat nyoba lagi. For me, ngoding bukan cuma soal bikin
              program jalan, tapi juga soal terus belajar hal baru.
            </p>

            <p className="text-[0.95rem] text-text-body mb-4 leading-[1.8]">
              Di luar coding, aku tipe orang yang suka excited sama sesuatu. Pink is absolutely my favorite
              color, aku suka nonton Bang Windah, dengerin musik, and sometimes ngabisin waktu rebahan sambil
              scrolling TikTok. Aku percaya kalau hidup nggak harus serius terus, karena ide-ide bagus kadang
              muncul malah pas lagi santai.
            </p>

            <p className="text-[0.95rem] text-text-body mb-4 leading-[1.8]">
              Aku masih punya banyak hal yang pengen dipelajari, terutama di dunia backend & software
              development. Aku suka tantangan, dan always berusaha berkembang
              sedikit demi sedikit every single day. Semoga suatu hari nanti aku bisa bikin aplikasi yang
              nggak cuma berjalan dengan baik, tapi juga bermanfaat buat banyak orang. Until then, I'll keep
              learning, keep building, and of course... sambil makan dimsum. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
