import { useEffect, useState } from 'react';

type FadingBackgroundProps = {
  image: string;
};

export default function FadingBackground({ image }: Readonly<FadingBackgroundProps>) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight - 170; // Adjust based on how quickly you want the fade
      const newOpacity = Math.max(1 - scrollY / maxScroll, 0.1); // Fade out as you scroll
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <img
      className="fixed left-0 h-screen w-full object-cover top-0"
      src={image}
      alt="nature"
      style={{ opacity: opacity }}
    />
  );
}
