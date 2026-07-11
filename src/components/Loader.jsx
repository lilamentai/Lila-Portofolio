import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    // Fallback: hide loader after 3 seconds max
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-bg-primary flex items-center justify-center z-[10000] transition-all duration-500 ease-in-out ${
        loading ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-border rounded-full mx-auto mb-5 loader-spinner" />
        <h2 className="text-2xl text-text-heading font-playfair mb-1">Kalila.</h2>
        <p className="text-sm text-text-subtle">Loading something beautiful like u...</p>
      </div>
    </div>
  );
}
