import { useEffect, useRef } from 'react';

const Why = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      line.animate(
        [
          { height: '0%' },
          { height: '100%' }
        ],
        {
          duration: 1000,
          easing: 'ease-out',
          fill: 'forwards'
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden montserrat-med">
      <video
        // src="https://video.wixstatic.com/video/427abb_78de1d49455a4080a8d0ba704e8edde4/720p/mp4/file.mp4"
        src="/manf.mp4"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Centered text content */}
      <div className="relative z-10 w-full h-full flex items-center justify-start px-6 md:px-20">
        <div className="bg-[#121212]/90 text-white p-8 md:p-12 rounded-2xl max-w-lg relative flex">
          {/* Animated left line */}
          <div className="w-[2px] bg-white mr-6">
            <div ref={lineRef} className="bg-white w-full h-0 origin-top" />
          </div>

          {/* Text content */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">Why Dripking</p>
            <h2 className="text-md md:text-xl font-normal mt-2 leading-relaxed mb-10">
              A Revolutionary Take on Manufacturing
            </h2>
            <p className="text-gray-300 mt-4 text-xs md:text-sm leading-relaxed">
              At Dripking, we’ve reimagined how irrigation systems are made. By embracing modern processes and precision-driven technology, we cut inefficiencies, minimize waste, and elevate performance. The result? A new era of durability, quality, and trust you can count on in every field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
