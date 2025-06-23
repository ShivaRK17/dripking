// import React from 'react'

// const Numbers = () => {
//   return (
//     <div className='flex relative min-h-screen h-screen w-full z-5 montserrat-med'>
//       <div className='w-1/2 bg-white'>
//         <img className='w-full h-full object-cover' src="https://static.wixstatic.com/media/427abb_6a77882b600b45ae9b0edee517f1ec93~mv2.jpg/v1/fill/w_948,h_912,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/427abb_6a77882b600b45ae9b0edee517f1ec93~mv2.jpg" alt="" />
//       </div>
//       <div className='bg-white w-1/2 flex items-center justify-center'>
//         <div className="text-black p-8 md:p-12 rounded-2xl max-w-lg relative flex">
//           <div>
//             <h2 className="text-md md:text-xl font-normal mt-2 leading-relaxed mb-10">
//               DRIPWISE In Numbers
//             </h2>
//             <div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Numbers

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const stats = [
  { number: 200, suffix: '+', label: 'Dealer Network' },
  { number: 2, label: 'Core Teams' },
  { number: 100, suffix: 'M₹', label: 'Monetary Power' },
  { number: 50, suffix: '+', label: 'Employee Force' },
];

const StatCard = ({ number, suffix = '', label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
      let start = 0;
      const step = number / 50;
      const interval = setInterval(() => {
        start += step;
        if (start >= number) {
          setCount(number);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 group cursor-default"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-3xl md:text-4xl font-medium tracking-tight">
        {count}
        <span>{suffix}</span>
      </div>
      <div className='flex-1'>

        <div className="relative mt-1">
          <div className="h-[2px] w-10 bg-black group-hover:w-16 transition-all duration-300 origin-left" />
          <p className="text-xs uppercase text-gray-500 tracking-widest mt-1">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Numbers = () => {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white z-50 relative montserrat-med">
      <div className="h-full w-full">
        <img
          src="https://static.wixstatic.com/media/427abb_6a77882b600b45ae9b0edee517f1ec93~mv2.jpg/v1/fill/w_948,h_912,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/427abb_6a77882b600b45ae9b0edee517f1ec93~mv2.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white flex flex-col justify-center px-6 md:px-16 py-12">
        <motion.h2
          className="text-xl md:text-2xl mb-10 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          DRIPKING In Numbers
        </motion.h2>

        <div className="grid grid-cols-2 gap-10 md:gap-14">
          {stats.map((s, idx) => (
            <StatCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
