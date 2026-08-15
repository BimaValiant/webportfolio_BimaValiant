'use client'

import { ArrowUpRight } from 'lucide-react'
import { useRef, useState } from 'react'

type Project = {
  id: string
  title: string
  category: string
  year: string
  image: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: '01',
    title: 'OmniStock AI',
    category: 'Fullstack · Laravel · Gemini AI Integration · MySQL',
    year: '2026',
    image: 'omnistock.png',
    githubUrl: 'https://github.com/BimaValiant/OmniStock-AI.git', 
  },
  {
    id: '02',
    title: 'Laravel Web Application',
    category: 'Full-Stack · Laravel · MySQL',
    year: '2026',
    image: '/work/project-02.png',
    githubUrl: 'https://github.com/',
  },
  {
    id: '03',
    title: 'MongoDB RESTful API',
    category: 'Backend · REST API · MongoDB',
    year: '2025',
    image: '/work/project-03.png',
    githubUrl: 'https://github.com/',
  },
  {
    id: '04',
    title: 'Mobile App UI/UX Design',
    category: 'UI/UX · Figma · Prototyping',
    year: '2025',
    image: '/work/project-04.png',
    githubUrl: 'https://figma.com/',
  },
]

export function Work() {
  const [active, setActive] = useState<number | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    if (!previewRef.current) return
    previewRef.current.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 120}px)`
  }

  return (
    <section id="work" className="relative px-5 py-24 md:px-8 md:py-32" onMouseMove={onMove}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Selected Work
          </h2>
          <span className="text-sm font-medium text-muted-foreground">(04)</span>
        </div>

        <ul>
          {projects.map((project, i) => (
            <li key={project.id}>
              <a
                href={project.githubUrl || '#contact'}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group grid grid-cols-12 items-center gap-4 border-b border-border py-6 transition-colors hover:border-foreground md:py-8"
              >
                <span className="col-span-2 font-display text-sm text-muted-foreground md:col-span-1 md:text-base">
                  {project.id}
                </span>
                <span className="col-span-10 font-display text-3xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 md:col-span-6 md:text-5xl">
                  {project.title}
                </span>
                <span className="col-span-8 col-start-3 text-sm text-muted-foreground md:col-span-3 md:col-start-auto md:text-base">
                  {project.category}
                </span>
                <span className="col-span-2 flex items-center justify-end gap-2 text-sm text-foreground md:text-base">
                  {project.year}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Preview gambar melayang saat hover (Desktop) */}
      <div
        ref={previewRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-64 w-80 overflow-hidden rounded-lg border border-foreground/10 shadow-2xl transition-opacity duration-300 md:block"
        style={{ opacity: active !== null ? 1 : 0 }}
      >
        {projects.map((project, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={project.id}
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200"
            style={{ opacity: active === i ? 1 : 0 }}
          />
        ))}
      </div>
    </section>
  )
}