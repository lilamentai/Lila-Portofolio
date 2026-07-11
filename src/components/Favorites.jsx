import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Favorites() {
  const [refHeader, isVisibleHeader] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });
  const [refGrid, isVisibleGrid] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 });

  const favorites = [
    {
      type: 'image',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBW_eDi6yEMkXfsh8yLEvbAERCzeoQWsj_7UUcUUu5iA&s=10",
      category: "My TOP TIER Favorite Food",
      title: "Dimsum Mentai",
      desc: "Dimsum mentai with chili oil — EXACTLY PERFECT FOOD EVER!!."
    },
    {
      type: 'image',
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      category: "My Second Favorite Food",
      title: "Brownies",
      desc: "Rich, fudgy brownies — PERFECT DESSERT IN MY LIFE!."
    },
    {
      type: 'color',
      color: "#F9B2D7",
      category: "Favorite Color",
      title: "Soft Pink",
      desc: "Gentle, warm, and calming — just like the aesthetic I love."
    }
  ];

  return (
    <section id="favorites" className="bg-bg-secondary py-[100px] md:py-[70px] sm:py-[56px]">
      <div className="container-custom">
        <div
          ref={refHeader}
          className={`section-header transition-all duration-700 ease-in-out ${
            isVisibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <span className="section-label">Fun Facts</span>
          <h2 className="section-title">Favorite Things</h2>
          <p className="section-subtitle">A little peek into the things that make me happy outside of coding.</p>
        </div>

        <div
          ref={refGrid}
          className={`grid grid-cols-3 gap-6 sm:grid-cols-1 transition-all duration-700 ease-in-out ${
            isVisibleGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {favorites.map((fav, idx) => (
            <div key={idx} className="bg-surface border border-border rounded-[18px] overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong group">
              <div className="w-full h-[180px] overflow-hidden bg-gradient-card">
                {fav.type === 'image' ? (
                  <img src={fav.img} alt={`${fav.title} — favorite`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105" style={{ backgroundColor: fav.color }} title={`${fav.title} — favorite color`}></div>
                )}
              </div>
              <div className="p-5 px-6">
                <span className="block text-[0.72rem] font-semibold uppercase tracking-[1.5px] text-primary-deep mb-1.5 font-poppins">
                  {fav.category}
                </span>
                <h4 className="font-poppins text-base font-semibold mb-1">{fav.title}</h4>
                <p className="text-[0.85rem] text-text-subtle leading-[1.6]">{fav.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
