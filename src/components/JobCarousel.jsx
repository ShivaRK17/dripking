import { AnimatePresence,motion } from 'motion/react';
import { useEffect, useState } from 'react';

import ArrowRight from '../assets/arrow.svg'

const jobs = [
  {
    title: 'Product Developer',
    location: 'Nashik, MH',
    description:
      'Are you an innovative thinker with a passion for creating cutting-edge products? Join our dynamic team as a Product Developer and play a key role in bringing new products to life.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    description:
      'Love designing sleek, functional interfaces? Be part of our design team to create intuitive experiences for our global audience.',
  },
  {
    title: 'Full Stack Engineer',
    location: 'Bangalore, KA',
    description:
      'Looking to work across the stack? Build scalable systems and products with a passionate team of developers.',
  },
];

const JobCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % jobs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-[500px] flex items-center justify-center px-4">
      <div className="bg-black border border-white/20 text-white rounded-2xl max-w-md w-full p-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="uppercase text-sm tracking-widest text-white/70">
              {jobs[current].title}
            </h3>
            <p className="mt-1 text-xs text-white/40 tracking-wide">{jobs[current].location}</p>
            <p className="mt-6 text-sm text-white/90 leading-relaxed">{jobs[current].description}</p>

            <button className="mt-8 flex items-center border border-white/40 rounded-md overflow-hidden text-sm ">
              <span className="cursor-pointer px-4 py-2 hover:bg-white hover:text-black transition">Apply Now</span>
              <span className="border-l border-white/40 px-3 py-2">
                <img src={ArrowRight} className="w-4 h-4" />
              </span>
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2 absolute bottom-1 left-1/2 -translate-x-1/2">
          {jobs.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                index === current ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCarousel;
