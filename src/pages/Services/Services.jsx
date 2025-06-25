import React from 'react';
import {motion} from 'motion/react'
import { Droplets, Zap, ShieldCheck } from 'lucide-react'; // Icons from lucide-react (you can customize)

const services = [
  {
    icon: <Droplets size={40} className="text-sky-500" />,
    title: 'Precision Drip',
    description: 'Delivers water exactly where it’s needed, reducing waste and promoting healthy root growth.',
  },
  {
    icon: <Zap size={40} className="text-green-500" />,
    title: 'Smart Automation',
    description: 'Advanced sensors and timers automate irrigation cycles for consistent results and energy savings.',
  },
  {
    icon: <ShieldCheck size={40} className="text-teal-500" />,
    title: 'Clog-Free Tech',
    description: 'Anti-clog emitters ensure continuous flow even in dusty or hard-water conditions.',
  },
];

const Services = () => {
  return (
    <section id='services' className="bg-[url('/servicesbg.jpg')] bg-contain z-50 relative text-white montserrat-med py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center flex items-center justify-center">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
        <p className="text-md  max-w-xl mx-auto mb-12">
          Our services are engineered to simplify irrigation and maximize agricultural impact—from backyards to acres.
        </p> */}

        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            // <div
            //   key={index}
            //   className="bg-white  shadow-xl p-8 hover:scale-105 transition-transform duration-300"
            // >
            //   <div className="flex justify-center mb-4">
            //     {service.icon}
            //   </div>
            //   <h3 className="text-xl font-semibold text-[#0f0f0f] mb-2">{service.title}</h3>
            //   <p className="text-sm text-[#4a4a4a]">{service.description}</p>
            // </div>
            <div key={index} className="bg-[#121212]/90 h-full items-center justify-center text-white p-8 md:p-12 rounded-2xl max-w-lg w-full relative flex">
              {/* Animated Vertical Line */}
              {/* <motion.div
                className="w-[2px] bg-white mr-6"
                initial={{ height: 0 }}
                whileInView={{ height: '60%' }}
                transition={{ duration: 1 }}
              /> */}
              {/* Text */}
              <div className='flex flex-col items-center justify-center'>
                <p className="text-xs uppercase tracking-widest mb-3 text-gray-400">{service.icon}</p>
                <h2 className="text-md md:text-xl font-normal  leading-relaxed ">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
