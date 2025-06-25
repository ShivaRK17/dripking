import React from 'react';
import { motion } from 'motion/react';

const Vision = () => {
  return (
    <div id='vision' className="flex flex-col md:flex-row min-h-screen w-full relative z-5 montserrat-med">

      {/* Left Side - Text Section */}
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

          {/* Text Content */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">VISION</p>
            <h2 className="text-md md:text-xl font-normal mt-2 leading-relaxed mb-10">
              Redefining How the World Approaches Irrigation
            </h2>
            <p className="text-gray-300 mt-4 text-xs md:text-sm leading-relaxed">
              At Dripking, we combine breakthrough techniques with smart innovation to simplify irrigation, boost accuracy, and minimize waste. Our state-of-the-art manufacturing delivers unmatched efficiency, reliability, and lasting performance across every application.
            </p>
          </div>
        </div>
      </motion.div>
      {/* Right Side - Image */}
      <motion.div
        className="md:w-1/2 w-full h-[400px] md:h-auto bg-white"

      >
        <img
          className="w-full h-full object-cover"
          src="https://www.hometechsolutions.in/assets/images/carousel/Drip%20Irrigation.webp"
          // src="https://static.wixstatic.com/media/427abb_6912589b858e4f53a993cea312f3c804~mv2.png/v1/fill/w_1139,h_1301,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/427abb_6912589b858e4f53a993cea312f3c804~mv2.png"
          alt="vision"
        />
      </motion.div>

    </div>
  );
};

export default Vision;
