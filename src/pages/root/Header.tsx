import { useEffect, useRef, useState } from 'react';

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
      <a href="/">
        <h1 className="bg-secondary rounded-full px-5 py-2 text-center font-headline text-3xl text-white">
          Kerava Cup
        </h1>
      </a>
    </div>
  );
}