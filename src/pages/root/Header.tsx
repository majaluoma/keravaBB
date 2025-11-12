import { useEffect, useRef, useState } from 'react';
import profileImage1 from '@/assets/KPL_logo_pallot.png';

/** Shown to user at the top of site */
export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
            // Scrolling down and past threshold
            setVisible(false);
          } else {
            // Scrolling up
            setVisible(true);
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`z-1 bg-primary shadow-secondary fixed top-0 z-40 flex w-screen justify-center overflow-hidden p-4 shadow-sm transition-all transition-normal duration-300 ease-linear ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ transitionProperty: 'transform' }}
    >
      <a href="/" className="flex items-center gap-3">
        <img
          src={profileImage1}
          alt="Kerava Cup Logo"
          className="h-10 w-10 rounded-full object-contain"
        />
        <h1 className="bg-secondary rounded-full px-5 py-2 text-center font-headline text-3xl text-white">
          Keravan Palloliiga
        </h1>
      </a>
    </div>
  );
}
