"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "SINAR PADI DIGITAL",
    category: "MANAGEMENT SYSTEM",
    desc: "Platform manajemen penggilingan padi digital berbasis Next.js untuk pencatatan produksi real-time.",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    title: "EYELASH E-COMMERCE",
    category: "E-COMMERCE PLATFORM",
    desc: "Aplikasi e-commerce kustom produk bulu mata dengan alur checkout cepat & intuitif.",
    tags: ["Laravel", "Blade", "Tailwind"],
  },
  {
    title: "BANK SAMPAH APP",
    category: "COMMUNITY TECH",
    desc: "Repositori pengelolaan sampah digital untuk rekapitulasi tabungan lingkungan warga.",
    tags: ["Web/Mobile", "Database"],
  },
];

export default function Work() {
  return (
    <section id="on-track" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto bg-[#f6f6f4]">
      <div className="flex justify-between items-end border-b border-black/10 pb-6 mb-12">
        <div>
          <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">// SECTOR 01</span>
          <h2 className="font-racing text-4xl sm:text-6xl text-black">ON TRACK PROJECTS</h2>
        </div>
        <div className="hidden sm:block font-mono text-xs text-gray-400">
          FEATURED WORK 2026
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-black/10 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-gray-400 mb-2">[PROJ_0{index + 1}] — {item.category}</div>
              <h3 className="font-racing text-2xl text-black group-hover:text-amber-600 transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-between items-center font-mono text-xs">
              <span className="text-gray-400">{item.tags.join(" • ")}</span>
              <span className="font-bold text-black group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}