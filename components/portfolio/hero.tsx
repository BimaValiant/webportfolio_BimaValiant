'use client'

import { ArrowDownRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* meta row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span>Full-Stack & Mobile Developer</span>
          <span className="hidden sm:inline">Purwokerto, Indonesia</span>
        </div>

        {/* giant name */}
        <h1 className="mt-8 font-display text-[18vw] font-bold leading-[0.85] tracking-tight text-foreground md:text-[13vw]">
          <span className="block">Bima</span>
          <span className="block text-primary">
            Valiant
            <span className="align-top text-accent">®</span>
          </span>
        </h1>

        {/* statement + cta */}
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-pretty text-xl leading-relaxed text-foreground md:col-span-7 md:text-2xl">
            I build robust{' '}
            <span className="bg-primary px-1.5 text-primary-foreground">scalable backends</span>{' '}
            and native Android applications — connecting modern REST APIs with high-performance user experiences.
          </p>

          <div className="md:col-span-5 md:justify-self-end">
            <a
              href="#work"
              data-cursor="hover"
              className="group inline-flex items-center gap-3 rounded-full border border-foreground px-6 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              See selected work
              <ArrowDownRight className="h-5 w-5 transition-transform duration-200 group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}