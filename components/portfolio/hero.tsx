"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-norris-grid flex flex-col justify-between pt-28 pb-8 px-6 sm:px-12 max-w-[1400px] mx-auto overflow-hidden">
      
      {/* Top Telemetry Bar */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between border-b border-black/10 pb-4 font-mono text-xs text-gray-600"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d2ff00] border border-black animate-pulse"></span>
          <span className="font-bold text-black uppercase tracking-wider">[SYS // XII PPLG]</span>
        </motion.div>
        
        <motion.div variants={itemVariants} className="hidden sm:flex items-center gap-6 text-[11px] uppercase tracking-widest">
          <span>LOCATION: PURWOKERTO (ID)</span>
          <span>•</span>
          <span>LATENCY: 12MS</span>
        </motion.div>
      </motion.div>

      {/* Main Split Hero Title & Center Media */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="my-auto py-10 relative z-10"
      >
        <div className="text-center relative">
          
          {/* Big Background Heading Part 1 */}
          <motion.h1 
            variants={itemVariants}
            className="font-racing text-[13vw] sm:text-[11vw] leading-[0.85] text-black tracking-tighter select-none"
          >
            BIMA VALIANT
          </motion.h1>

          {/* Center Overlapping Portrait Image */}
          <motion.div 
            variants={itemVariants}
            className="my-[-3vw] sm:my-[-4vw] relative z-20 flex justify-center"
          >
            <div className="relative w-[280px] sm:w-[380px] md:w-[440px] aspect-[4/5] rounded-3xl overflow-hidden border border-black/20 shadow-2xl bg-black group transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src="/work/bimavaliant.jpg"
                alt="Bima Valiant"
                fill
                priority
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              
              {/* Image Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white font-mono text-xs">
                <div>
                  <p className="font-bold tracking-wider text-sm">BIMA VALIANT</p>
                  <p className="text-gray-400 text-[10px]">SOFTWARE ENGINEER & CREATIVE</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#d2ff00] text-black font-bold text-[10px]">
                  DRIVEN
                </span>
              </div>
            </div>
          </motion.div>

          {/* Subtitle / Statement Below */}
          <motion.div variants={itemVariants} className="mt-8 max-w-xl mx-auto px-4">
            <p className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed">
              Membangun aplikasi web & sistem modern berkinerja tinggi. Memadukan arsitektur sistem yang presisi, kecepatan, dan estetika visual tingkat lanjut.
            </p>
            
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="#on-track"
                className="px-8 py-3.5 rounded-full bg-black text-white font-racing text-xs tracking-widest uppercase hover:bg-[#d2ff00] hover:text-black transition-all shadow-lg flex items-center gap-2 group"
              >
                <span>EXPLORE WORK</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Floating Bottom Live Telemetry Widgets */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-black/10 font-mono text-[11px] text-gray-600"
      >
        <div>
          <span className="text-gray-400 block text-[9px] uppercase tracking-widest">PRIMARY STACK</span>
          <span className="font-bold text-black">NEXT.JS 15 + TAILWIND</span>
        </div>
        <div>
          <span className="text-gray-400 block text-[9px] uppercase tracking-widest">BACKEND ENGINE</span>
          <span className="font-bold text-black">LARAVEL / SUPABASE</span>
        </div>
        <div>
          <span className="text-gray-400 block text-[9px] uppercase tracking-widest">CULTURE & PASSION</span>
          <span className="font-bold text-black">SIM RACING & EXOTICS</span>
        </div>
        <div>
          <span className="text-gray-400 block text-[9px] uppercase tracking-widest">AVAILABILITY</span>
          <span className="font-bold text-emerald-600">OPEN FOR PROJECTS</span>
        </div>
      </motion.div>

    </section>
  );
}