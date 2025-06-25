import React from 'react';
import { motion } from 'framer-motion';

const brandImage =
  'https://bcassetcdn.com/public/blog/wp-content/uploads/2022/10/05203937/square-arrow-up-by-mds-brandcrowd.png';

const Industry = () => {
  return (
    <div id='brands' className="flex flex-col md:flex-row min-h-screen w-full z-5 montserrat-med relative">
      {/* Left Text Section */}
      <motion.div
        className="bg-[#121212] md:w-1/2 w-full flex items-center justify-center p-6"
        
      >
        <div className="bg-[#121212]/90 h-full items-center text-white p-8 md:p-12 rounded-2xl max-w-lg w-full relative flex">
          {/* Animated Vertical Line */}
          <motion.div
            className="w-[2px] bg-white mr-6"
            initial={{ height: 0 }}
            whileInView={{ height: '60%' }}
            transition={{ duration: 1 }}
          />
          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">Industry</p>
            <h2 className="text-md md:text-xl font-normal mt-2 leading-relaxed mb-10">
              Our Brands
            </h2>
            <p className="text-gray-300 mt-4 text-xs md:text-sm leading-relaxed">
              At Dripking, our family of brands stands for quality, innovation, and purpose. Each one is built to serve distinct needs while upholding our shared commitment to performance and reliability. From advanced irrigation to everyday essentials, our brands work together to bring lasting value and smarter solutions—one product at a time.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Image Grid Section */}
      <motion.div
        className="md:w-1/2 w-full bg-[#121212] text-white py-6 px-4"
        
      >
        <div className="grid grid-cols-2 gap-10 h-full w-full items-center justify-center">
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center p-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={brandImage}
                alt={`Brand ${i + 1}`}
                className="w-32 h-32 object-contain transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Industry;
