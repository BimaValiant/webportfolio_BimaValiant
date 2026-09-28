"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="off-track" className="py-28 px-6 sm:px-12 max-w-[1400px] mx-auto border-t border-black/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-black/10">
        <div>
          <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">// SECTOR 02</span>
          <h2 className="font-racing text-5xl sm:text-7xl text-black mt-1">OFF TRACK CULTURE</h2>
        </div>
        <p className="font-mono text-xs text-gray-500 max-w-xs mt-4 md:mt-0 uppercase">
          DISCIPLINE, SPEED, AND PRECISION BEYOND THE CODE EDITOR.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Sim Racing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-black/10 rounded-3xl p-8 hover:border-black transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">// MOTORSPORT & GAMING</span>
            <h3 className="font-racing text-3xl text-black mt-2 mb-4">SIM RACING & SPEED</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Mengejar konsistensi *lap time* dan *apex* presisi di F1, Assetto Corsa, dan simulator balap. Ketelitian mengemudi mengasah fokus pengambilan keputusan saat memrogram.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 font-mono text-xs text-gray-500 flex justify-between">
            <span>FOCUS: TELEMETRY & APEX</span>
            <span className="font-bold text-black">SIMULATOR</span>
          </div>
        </motion.div>

        {/* Card 2: Valiant Exotics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white border border-black/10 rounded-3xl p-8 hover:border-black transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">// GENETICS & BREEDING</span>
            <h3 className="font-racing text-3xl text-black mt-2 mb-4">VALIANT EXOTICS</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Inisiatif *breeding* Leopard Gecko berfokus pada seleksi *morph* dan manajemen genetika. Mengombinasikan hobi eksotis dengan ketelitian pencatatan data.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 font-mono text-xs text-gray-500 flex justify-between">
            <span>PROJECT: REPTILE MORPHS</span>
            <span className="font-bold text-black">EXOTIC CARE</span>
          </div>
        </motion.div>

        {/* Card 3: Audio & Lifestyle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-black/10 rounded-3xl p-8 hover:border-black transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">// AUDIO & HOROLOGY</span>
            <h3 className="font-racing text-3xl text-black mt-2 mb-4">SOUNDS & TIMEPIECES</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Didorong oleh ritme Hip-Hop/Electronic (The Weeknd, Kanye) saat sesi *deep work coding*, serta apresiasi tinggi pada detail mekanikal jam tangan.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 font-mono text-xs text-gray-500 flex justify-between">
            <span>SOUND: SYNTH & BEATS</span>
            <span className="font-bold text-black">TIMING</span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}