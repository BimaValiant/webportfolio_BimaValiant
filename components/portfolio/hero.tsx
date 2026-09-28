"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-topography flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      
      {/* Background SVG Contour Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 500 C 300 200, 700 800, 900 500" stroke="black" strokeWidth="2"/>
          <path d="M50 400 C 250 100, 750 900, 950 400" stroke="black" strokeWidth="1"/>
          <path d="M150 600 C 350 300, 650 700, 850 600" stroke="black" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Main Center Image (Portrait) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl h-[65vh] sm:h-[75vh] flex items-center justify-center mt-8"
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-black/10 shadow-2xl bg-gradient-to-b from-transparent to-black/10">
          <Image
            src="/work/bimavaliant.jpg"
            alt="Bima Valiant"
            fill
            priority
            className="object-cover object-center filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </motion.div>

      {/* Floating Bottom-Left Widget ("NEXT RACE" style) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-8 left-6 sm:left-12 z-20 hidden sm:block bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-4 shadow-xl max-w-xs"
      >
        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-1 mb-2">
          CURRENT STATUS
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#d2ff00] flex items-center justify-center font-racing text-xs border border-black/20">
            XII
          </div>
          <div>
            <div className="font-racing text-sm text-black">SOFTWARE ENGINEER</div>
            <div className="text-xs text-gray-500 font-mono">SMK TELKOM PURWOKERTO</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Bottom-Right Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-8 right-6 sm:right-12 z-20 font-mono text-xs text-gray-500 flex items-center gap-2"
      >
        <span>SCROLL TO EXPLORE</span>
        <span className="animate-bounce">↓</span>
      </motion.div>

    </section>
  );
}