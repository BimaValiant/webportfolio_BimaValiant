"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "SINAR PADI DIGITAL",
    category: "MANAGEMENT SYSTEM",
    desc: "Platform manajemen penggilingan padi digital berbasis Next.js untuk pengolahan data produksi, kalkulasi stok, dan efisiensi operasional secara real-time.",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    highlight: "HIGH THROUGHPUT",
  },
  {
    id: "02",
    title: "CUSTOM EYELASH E-COMMERCE",
    category: "E-COMMERCE PLATFORM",
    desc: "Platform e-commerce kustom untuk lini produk bulu mata dengan antarmuka belanja cepat, katalog interaktif, dan alur transaksi intuitif.",
    tags: ["Laravel", "Blade", "Tailwind CSS"],
    highlight: "SEAMLESS FLOW",
  },
  {
    id: "03",
    title: "BANK SAMPAH REPOSITORY",
    category: "CIVIC TECH APP",
    desc: "Sistem repositori digital pengelolaan sampah lingkungan untuk pencatatan dan transparansi tabungan sampah warga secara terintegrasi.",
    tags: ["Web/Mobile", "Database"],
    highlight: "CIVIC REPOSITORY",
  },
];

export default function Work() {
  return (
    <section id="on-track" className="py-28 px-6 sm:px-12 max-w-[1400px] mx-auto border-t border-black/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-black/10">
        <div>
          <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">// SECTOR 01</span>
          <h2 className="font-racing text-5xl sm:text-7xl text-black mt-1">ON TRACK PROJECTS</h2>
        </div>
        <p className="font-mono text-xs text-gray-500 max-w-xs mt-4 md:mt-0 uppercase">
          PERFORMANCE-DRIVEN CODE, MODERN ARCHITECTURES & DIGITAL PRODUCTS.
        </p>
      </div>

      {/* Projects Cards Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="bg-white border border-black/10 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-black transition-all duration-500 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-center font-mono text-xs text-gray-400 mb-6">
                <span>[{item.id}]</span>
                <span className="px-2.5 py-1 rounded bg-black/5 text-black font-bold uppercase text-[10px]">
                  {item.highlight}
                </span>
              </div>

              <span className="font-mono text-[11px] text-gray-400 uppercase tracking-widest">{item.category}</span>
              <h3 className="font-racing text-3xl text-black group-hover:text-emerald-600 transition-colors mt-1 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 font-normal">
                {item.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 font-mono text-xs">
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-[11px] border border-gray-200">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="flex items-center justify-between font-bold text-black group-hover:translate-x-1 transition-transform"
              >
                <span>VIEW CASE STUDY</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}