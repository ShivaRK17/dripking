import React from 'react';
import { motion } from 'framer-motion';
import arrowUrl from '../../assets/arrow.svg';
import JobCarousel from '../../components/JobCarousel';

const Careers = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full z-5 montserrat-med relative">
      {/* Left Side - Content */}
      <motion.div
        className="bg-[#121212] md:w-1/2 w-full flex items-center justify-center p-6"
        
      >
        <div className="bg-[#121212]/90 text-white p-8 md:p-12 rounded-2xl max-w-lg w-full relative flex">
          {/* Animated Line */}
          <motion.div
            className="w-[2px] bg-white mr-6"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1 }}
          />

          {/* Text Content */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">Careers</p>
            <h2 className="text-md md:text-xl font-normal mt-2 leading-relaxed mb-10">
              We’re on the lookout for forward-thinking minds ready to make an impact. Explore open roles and share your CV to be part of the Dripking journey.
            </h2>

            {/* CTA Button */}
            <motion.button
              className="text-sm border border-white rounded-lg flex overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                Openings
              </div>
              <div className="flex items-center justify-center px-3 bg-[#121212] text-black">
                <img className="h-4" src={arrowUrl} alt="arrow icon" />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Job Carousel */}
      <motion.div
        className="md:w-1/2 w-full bg-[#121212] text-white py-6 px-4"
        
      >
        <JobCarousel />
      </motion.div>
    </div>
  );
};

export default Careers;
