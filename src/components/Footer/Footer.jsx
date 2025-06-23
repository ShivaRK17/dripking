import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 bg-white text-black py-16 px-6 md:px-20 overflow-hidden"
    >
      {/* Background floating shape */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute w-80 h-80 bg-cyan-400 rounded-full blur-3xl top-20 left-[-100px]"></div>
        <div className="absolute w-60 h-60 bg-fuchsia-500 rounded-full blur-2xl bottom-20 right-[-80px]"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left section */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide mb-4">Dripking</h2>
          <div className="space-y-4 text-black/80 text-sm">
            <p className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-1" /> +91 8xxxx xxxxx
            </p>
            <p className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-1" /> info@dripking.in
            </p>
            <p className="flex items-start gap-3 leading-snug">
              <MapPin className="w-4 h-4 mt-1" />
              Address - Blank 123/23 - Plot - Street - 2354x1
            </p>
          </div>
        </div>

        {/* Right section - Subscribe */}
        <div className="flex flex-col gap-6">
          <h3 className="uppercase text-black/70 tracking-widest text-sm">Subscribe</h3>
          <p className="text-black/80 text-sm leading-relaxed">
            Sign up to receive Dripking news, innovation updates, and product drops.
          </p>

          <form className="mt-4 relative max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-black placeholder-black/50 border border-black/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-5 bg-black text-white rounded-md text-sm font-medium hover:bg-cyan-200 hover:text-black transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-16 text-center text-xs text-black/40 border-t border-white/10 pt-6">
        © 2025 Dripking. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
