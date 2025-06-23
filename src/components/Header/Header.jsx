import { useEffect, useState } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setIsTop(currentScrollY === 0);

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${isTop ? 'bg-transparent' : 'bg-[rgba(0,0,0,0.5)] shadow'} `}
    >
      <div className="max-w-6xl mx-10 px-3 py-4 flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold tracking-[7px]">DRIPKING</h1>
      </div>
    </header>
  );
};

export default Header;
