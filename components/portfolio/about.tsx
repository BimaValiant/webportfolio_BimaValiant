"use client";

export default function About() {
  return (
    <section id="off-track" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-[#222228] pb-6">
        <div>
          <span className="text-neon font-mono text-xs tracking-widest uppercase">// SECTOR 02</span>
          <h2 className="font-racing text-4xl sm:text-6xl text-white mt-1">OFF TRACK LIFESTYLE</h2>
        </div>
        <p className="text-gray-400 font-mono text-xs max-w-xs mt-4 md:mt-0">
          WHAT DRIVES ME BEYOND THE CODE EDITOR AND MONITORS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Sim Racing */}
        <div className="bg-[#121215] border border-[#222228] rounded-2xl p-6 relative overflow-hidden group hover:border-neon transition-all">
          <div className="text-neon font-mono text-xs mb-2">// MOTORSPORT & GAMING</div>
          <h3 className="font-racing text-2xl text-white mb-3">SIM RACING & SPEED</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Menghabiskan waktu senggang mengejar *apex* dan *lap time* presisi di F1, Assetto Corsa, dan simulator balap lainnya.
          </p>
        </div>

        {/* Card 2: Exotics */}
        <div className="bg-[#121215] border border-[#222228] rounded-2xl p-6 relative overflow-hidden group hover:border-neon transition-all">
          <div className="text-neon font-mono text-xs mb-2">// BREEDING & PROJECT</div>
          <h3 className="font-racing text-2xl text-white mb-3">VALIANT EXOTICS</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Menyelami dunia genetika dan *breeding* Leopard Gecko. Ketelitian dalam perawatan hewan sama eksaknya dengan menulis kode.
          </p>
        </div>

        {/* Card 3: Audio & Lifestyle */}
        <div className="bg-[#121215] border border-[#222228] rounded-2xl p-6 relative overflow-hidden group hover:border-neon transition-all">
          <div className="text-neon font-mono text-xs mb-2">// AUDIO & GEAR</div>
          <h3 className="font-racing text-2xl text-white mb-3">HIP-HOP, ELECTRONIC & WATCHES</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Didorong oleh *beats* dari The Weeknd, Kanye, hingga Synthwave saat *coding session*, serta apresiasi pada estetika jam tangan.
          </p>
        </div>
      </div>
    </section>
  );
}