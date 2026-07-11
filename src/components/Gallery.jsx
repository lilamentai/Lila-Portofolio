import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Gallery() {
  const [refHeader, isVisibleHeader] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  const [refGrid, isVisibleGrid] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });

  const photos = [
    { img: "/images/sekolah2.jpeg", alt: "Gallery photo 1", text: "School Moment" },
    { img: "/images/sekolah3.jpeg", alt: "Gallery photo 2", text: "School Moment" },
    { img: "/images/ft1.jpeg", alt: "Gallery photo 3", text: "PKL Moment" },
    { img: "/images/ft2.jpeg", alt: "Gallery photo 4", text: "Dolan Moment" },
    { img: "/images/ft4.jpeg", alt: "Gallery photo 5", text: "OTW Moment" },
    { img: "/images/ft3.jpeg", alt: "Gallery photo 6", text: "Mirror Moment" }
  ];

  return (
    <section id="gallery" className="py-[100px] md:py-[70px] sm:py-[56px]">
      <div className="container-custom">
        <div
          ref={refHeader}
          className={`section-header transition-all duration-700 ease-in-out ${
            isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Captured Moments</h2>
          <p className="section-subtitle">A few photos from my life — to be filled with my own memories.</p>
        </div>

        <div
          ref={refGrid}
          className={`grid grid-cols-3 gap-4 md:grid-cols-2 md:gap-3 sm:grid-cols-2 max-[360px]:grid-cols-1 transition-all duration-700 ease-in-out ${
            isVisibleGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {photos.map((photo, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden aspect-square shadow-soft relative cursor-pointer border border-border group">
              <img src={photo.img} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent opacity-0 transition-opacity duration-300 flex items-end p-4 group-hover:opacity-100">
                <span className="text-white text-[0.85rem] font-medium">{photo.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
