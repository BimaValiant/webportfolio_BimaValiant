'use client'

import { ArrowUpRight } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/BimaValiant' }, 
  { label: 'LinkedIn', href: 'www.linkedin.com/in/bima-valiant-85536834b' }, 
  { label: 'Instagram', href: 'https://www.instagram.com/bimavaliant?igsh=b2g5cGg5ZDQzeDFt' },
]

export function Contact() {
  return (
    <footer
      id="contact"
      className="grain border-t border-foreground bg-foreground text-background"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/60">
          Contact
        </p>

        <h2 className="mt-6 text-balance font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-8xl">
          Let&apos;s build
          <br />
          something <span className="text-accent">great.</span>
        </h2>

      
        <a
          href="mailto:bimavaliant@gmail.com"
          data-cursor="hover"
          className="group mt-10 inline-flex items-center gap-3 text-2xl font-medium text-background underline decoration-background/30 decoration-1 underline-offset-8 transition-colors hover:decoration-accent md:text-4xl"
        >
          bimavaliant@gmail.com
          <ArrowUpRight className="h-7 w-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>

        <div className="mt-20 flex flex-col gap-8 border-t border-background/20 pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="text-sm text-background/70 transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Bima Valiant. Built with Next.js in Purwokerto.
          </p>
        </div>
      </div>
    </footer>
  )
}