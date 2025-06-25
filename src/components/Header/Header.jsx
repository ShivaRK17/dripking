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
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 montserrat-med ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${isTop ? 'bg-transparent' : 'bg-[#0f0f0f]/80 backdrop-blur-md shadow-lg'} `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-green-400 to-cyan-600 rounded-full shadow-inner animate-pulse" />
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-widest">
            DRIP<span className="text-green-400">KING</span>
          </h1>
        </div>

        {/* Navigation (can be extended) */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase text-white/80 font-medium tracking-wide">
          <a href="#services" className="hover:text-green-400 transition">Services</a>
          <a href="#vision" className="hover:text-green-400 transition">Vision</a>
          <a href="#calculator" className="hover:text-green-400 transition">Calculator</a>
          <a href="#brands" className="hover:text-green-400 transition">Brands</a>
        </nav>

        {/* Call to Action */}
        {/* <div className="hidden md:block">
          <button className="bg-sky-500 hover:bg-green-400 text-white px-5 py-2 rounded-xl shadow-md transition duration-300">
            Get a Quote
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
