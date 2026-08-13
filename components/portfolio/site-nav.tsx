'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Playbook', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          Bima<span className="text-primary">.</span>Valiant
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 scale-90 rounded-full bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available
        </a>
      </nav>
    </header>
  )
}
