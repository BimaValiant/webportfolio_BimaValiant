'use client'

const items = [
  'Laravel Framework',
  'Android Studio (Kotlin)',
  'RESTful APIs',
  'Retrofit',
  'MongoDB & MySQL',
  'UI/UX Figma',
  'Postman Integration',
]

export function Marquee() {
  return (
    <section className="grain border-y border-foreground bg-foreground py-4 text-background select-none overflow-hidden">
      <div className="marquee-container flex overflow-hidden cursor-pointer">
        <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-2xl font-semibold md:text-4xl">{item}</span>
              <span className="text-accent" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8"
        >
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-2xl font-semibold md:text-4xl">{item}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}