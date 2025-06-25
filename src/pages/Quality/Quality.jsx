import React from 'react';
import { motion } from 'motion/react';

const Quality = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full z-5 montserrat-med relative">
      {/* Left Side - Text Content */}
      <motion.div
        className="bg-black md:w-1/2 w-full flex items-center justify-center p-6"
        
      >
        <div className="bg-black/90 h-full items-center text-white p-8 md:p-12 rounded-2xl max-w-lg w-full relative flex">
          {/* Animated Vertical Line */}
          <motion.div
            className="w-[2px] bg-[#fff] mr-6"
            initial={{ height: 0 }}
            whileInView={{ height: '60%' }}
            transition={{ duration: 1 }}
          />

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white">
              Quality Commitment
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-normal mt-2 leading-relaxed mb-10">
              Steady Flow. Clog-Free Confidence.
            </h2>
            <p className="text-white mt-4 text-xs md:text-sm leading-relaxed montserrat-thin font-normal">
              Built with precision engineering, Dripking delivers a consistent discharge system designed to prevent clogs and interruptions. Whether you're watering crops, landscapes, or home gardens, our technology ensures smooth operation, dependable performance, and long-lasting durability—giving you confidence in every drop.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="md:w-1/2 w-full h-[400px] md:h-auto"
        
      >
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/proxy/mQg2S1ubO1MJKqQ455mjs4Mmmwp5L6r-NniQOBbXh4LVKo9auX5URJLuzWwQF92dCjnIAxZrv5SjQt2R0j4vJxIO_EboHDJXBN-v9XLqj6avTsGbvuPrA1Eauxx8wtS889c"
          alt="Quality"
        />
      </motion.div>
    </div>
  );
};

export default Quality;
