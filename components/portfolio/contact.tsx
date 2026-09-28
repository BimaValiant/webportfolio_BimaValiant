"use client";

export default function Contact() {
  return (
    <footer id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-[#222228]">
      <div className="bg-gradient-to-br from-[#121215] to-[#1a1a22] border border-[#222228] rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
        <span className="text-neon font-mono text-xs tracking-widest uppercase">// START A PROJECT TOGETHER</span>
        <h2 className="font-racing text-4xl sm:text-7xl text-white mt-2 mb-6">
          READY TO RACE?
        </h2>
        <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base mb-8">
          Punya ide proyek web, kolaborasi aplikasi, atau mau ngobrol seputar software engineering & sim racing?
        </p>

        <a
          href="mailto:contact@bimavaliant.com"
          className="inline-block px-10 py-4 rounded-xl bg-neon text-black font-racing text-xl tracking-wider hover:bg-white transition-all shadow-xl glow-neon"
        >
          GET IN TOUCH
        </a>

        <div className="mt-12 pt-8 border-t border-[#222228] flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-gray-500">
          <div>© {new Date().getFullYear()} BIMA VALIANT. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" className="hover:text-neon">GITHUB</a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-neon">LINKEDIN</a>
            <a href="https://instagram.com" target="_blank" className="hover:text-neon">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </footer>
  );
}