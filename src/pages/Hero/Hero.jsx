// import React from 'react'

// const Hero = () => {
//   return (
//     <>
//       <section className="relative w-full h-screen overflow-hidden z-50">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src="https://video.wixstatic.com/video/427abb_44a56b652e6847de85c61db79b91d72f/1080p/mp4/file.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-black to-transparent z-10" />
//         <div className="absolute top-0 left-0 w-full h-full bg-[#121212]/10 flex montserrat-thin items-center justify-center">
//           <div className="md:max-w-[70vw] w-full text-center text-white px-4">
//             <h1 className="text-4xl md:text-6xl font-normal leading-relaxed tracking-wide">ADVANCED IRRIGATION SYSTEMS</h1>
//             <p className="mt-4 text-xl md:text-2xl">PREMIUM INLINE FLAT DRIP SOLUTIONS FOR ALL FARMING AND IRRIGATION REQUIREMENTS</p>
//           </div>
//         </div>
//       </section>
//       <div className='bg-[#121212] h-40 w-full relative z-50 '></div>
//     </>
//   )
// }

// export default Hero

import React from 'react';
// import {herovid} from './herovid.mp4'

const Hero = () => {
  return (
    <section className="montserrat-med z-50 relative min-h-screen w-full bg-[#0f0f0f] text-white overflow-hidden flex items-center justify-center px-6 md:px-12">

      {/* Background Water Droplet Animation or Image */}
      {/* REPLACE below div with a <video> or background image of water flow or irrigation animation */}
      {/* <div className="absolute inset-0 z-0 bg-[url('your-background-image-url')] bg-cover bg-center opacity-10 blur-sm" /> */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-45"
        src="/herovid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Decorative Water Drop Element */}
      {/* <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-sky-400 to-cyan-600 rounded-full opacity-20 animate-pulse"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16 md:py-24">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-wide montserrat-med">
            Smarter Irrigation, <span className="text-green-400">Greener</span> Tomorrow
            {/* <span className="text-sky-400">One Drop</span> at a Time */}
          </h1>
          {/* <p className="mt-6 text-lg text-white/80 ">
            Precision-Engineered Drip Solutions for Every Farm, Field, and Garden Need
          </p> */}
          <p className="mt-6 text-base text-white/80 max-w-2xl">
            Harnessing smart engineering and efficient design, Dripking transforms how water flows through farms, one drop at a time.
          </p>

          {/* CTA Buttons */}
          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-full shadow-lg transition duration-300">
              Explore Products
            </button>
            <button className="px-6 py-3 border border-white hover:border-sky-400 hover:text-sky-400 rounded-full transition duration-300">
              Learn More
            </button>
          </div> */}
        </div>

        {/* Right Visual / Image Placeholder */}
        <div className="flex-1 flex items-center justify-center">
          {/* Replace this div with irrigation-themed image or animated graphic */}
          <img src="/heroimg.png" className="drop-shadow-[0_10px_10px_rgba(5,223,114,0.4)]" alt="" />
          {/* <div className="w-[300px] h-[300px] bg-gradient-to-br from-sky-400 to-green-600 rounded-full shadow-xl ring-4 ring-white/20">
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
