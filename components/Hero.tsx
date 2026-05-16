'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video representation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1600&auto=format&fit=crop&q=80"
          alt="Coffee Pouring"
          fill
          className="object-cover opacity-60 scale-105 animate-slow-pan"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/50 via-[#0c0a09]/30 to-[#0c0a09]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="badge mb-4 mx-auto inline-block text-[#d4af37]">Ultra Premium Experience</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight text-[#f5f2ed] mb-6 drop-shadow-2xl">
            Experience Premium<br/>
            <span className="text-[#d4af37] italic">Coffee in Nepal</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-[#f5f2ed]/80 font-light mb-12 drop-shadow-md"
        >
          Fresh brews, cozy vibes, unforgettable moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link 
            href="#menu" 
            className="w-full sm:w-auto bg-white text-black px-8 py-3 font-semibold text-sm hover:bg-[#d4af37] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-widest text-center"
          >
            Order Online
          </Link>
          <Link 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3 border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase tracking-widest text-center"
          >
            Reserve Table
          </Link>
          <Link 
            href="#menu" 
            className="w-full sm:w-auto px-8 py-3 text-[#f5f2ed] hover:text-[#d4af37] font-semibold text-sm underline underline-offset-8 transition-colors uppercase tracking-widest text-center"
          >
            View Menu
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#f5f2ed]/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent animate-pulse-slow" />
      </motion.div>
    </section>
  );
}
