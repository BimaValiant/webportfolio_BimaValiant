"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-12 py-6 flex justify-between items-start pointer-events-none">
      {/* Top Left Logo (Stacked) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto"
      >
        <Link href="/" className="font-racing text-2xl sm:text-3xl leading-none tracking-tighter text-black block">
          BIMA<br />VALIANT
        </Link>
      </motion.div>

      {/* Center Monogram Emblem */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="hidden md:block pointer-events-auto"
      >
        <div className="font-racing text-2xl tracking-widest text-black border-2 border-black px-2 py-0.5 rounded">
          BV
        </div>
      </motion.div>

      {/* Top Right Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 pointer-events-auto"
      >
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-xl bg-[#d2ff00] text-black font-racing text-xs tracking-wider border border-black/20 hover:bg-black hover:text-white transition-all shadow-sm flex items-center gap-2"
        >
          <span>⚡</span> CONTACT
        </a>
        <button 
          aria-label="Toggle navigation menu"
          className="w-10 h-10 rounded-xl bg-white border border-black/10 flex flex-col justify-center items-center gap-1 hover:bg-black hover:text-white transition-colors"
        >
          <span className="w-5 h-0.5 bg-current"></span>
          <span className="w-5 h-0.5 bg-current"></span>
        </button>
      </motion.div>
    </header>
  );
}