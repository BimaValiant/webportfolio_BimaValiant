'use client'

const stats = [
  { value: '2+', label: 'Years coding experience' },
  { value: '10+', label: 'Projects completed' },
  { value: '100%', label: 'Commitment to clean code' },
  { value: '∞', label: 'Cups of coffee' },
]

export function About() {
  return (
    <section id="about" className="bg-primary px-5 py-24 text-primary-foreground md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* SISI KIRI: Foto Profil + Label */}
          <div className="space-y-6 lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              About Me
            </span>
            
            {/* Foto Profil */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-primary-foreground/20 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bimavaliant.jpg" // Ganti sesuai nama file foto kamu di folder public
                alt="Bima Valiant"
                className="h-full w-full object-cover transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>

          {/* SISI KANAN: Teks Deskripsi + Stats */}
          <div className="space-y-8 lg:col-span-7">
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              I&apos;m Bima — a developer focused on building high-performance backends and seamless Android applications.
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              I specialize in Laravel for web API development and Kotlin for native mobile applications.
              Passionate about clean architecture, database optimization with MySQL and MongoDB, and delivering smooth user experiences from concept to code.
            </p>

            {/* Bagian Angka / Stats */}
            <div className="grid grid-cols-2 gap-8 border-t border-primary-foreground/20 pt-8 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-3xl font-bold md:text-5xl">{stat.value}</div>
                  <div className="mt-2 text-xs text-primary-foreground/70 md:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}