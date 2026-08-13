import { About } from '@/components/portfolio/about'
import { Contact } from '@/components/portfolio/contact'
import { Hero } from '@/components/portfolio/hero'
import { Marquee } from '@/components/portfolio/marquee'
import { SiteNav } from '@/components/portfolio/site-nav'
import { Skills } from '@/components/portfolio/skills'
import { Work } from '@/components/portfolio/work'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}