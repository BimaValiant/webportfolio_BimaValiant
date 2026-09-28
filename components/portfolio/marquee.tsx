"use client";

export default function Marquee() {
  const items = [
    "NEXT.JS 15",
    "TAILWIND CSS",
    "LARAVEL",
    "SUPABASE",
    "SIM RACING",
    "VALIANT EXOTICS",
    "PYTHON FLASK",
    "REACT",
  ];

  return (
    <div className="w-full bg-neon py-3 overflow-hidden transform -rotate-1 my-12 border-y border-black">
      <div className="flex whitespace-nowrap animate-marquee gap-8 font-racing text-black text-xl tracking-wider">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-xs">⚡</span>
          </span>
        ))}
      </div>
    </div>
  );
}