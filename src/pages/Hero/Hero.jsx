import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden z-50">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://video.wixstatic.com/video/427abb_44a56b652e6847de85c61db79b91d72f/1080p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex montserrat-thin items-center justify-center">
          <div className="md:max-w-[70vw] w-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-normal leading-relaxed tracking-wide">ADVANCED IRRIGATION SYSTEMS</h1>
            <p className="mt-4 text-xl md:text-2xl">PREMIUM INLINE FLAT DRIP SOLUTIONS FOR ALL FARMING AND IRRIGATION REQUIREMENTS</p>
          </div>
        </div>
      </section>
      <div className='bg-black h-40 w-full relative z-50 '></div>
    </>
  )
}

export default Hero