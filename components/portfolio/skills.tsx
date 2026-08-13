const services = [
  {
    no: '01',
    title: 'Backend Web Development',
    desc: 'Architecting secure, scalable web applications and robust server-side logic powered by Laravel.',
    tags: ['Laravel', 'PHP', 'MVC', 'Authentication'],
  },
  {
    no: '02',
    title: 'Native Android Development',
    desc: 'Developing responsive mobile applications with smooth UI, offline caching, and clean architecture.',
    tags: ['Android Studio', 'Kotlin', 'Retrofit', 'REST API'],
  },
  {
    no: '03',
    title: 'Database & API Architecture',
    desc: 'Designing efficient relational & document databases, writing optimized queries, and crafting clean API endpoints.',
    tags: ['MySQL', 'MongoDB', 'HeidiSQL', 'Postman'],
  },
  {
    no: '04',
    title: 'UI/UX & Prototyping',
    desc: 'Translating concepts into clean, accessible user interfaces and interactive prototypes before development.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Tech Stack & Capabilities
          </h2>
          <span className="text-sm font-medium text-muted-foreground">What I do</span>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.no}
              data-cursor="hover"
              className="group relative bg-background p-8 transition-colors hover:bg-secondary md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm text-muted-foreground">{s.no}</span>
                <span className="h-3 w-3 rounded-full bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}