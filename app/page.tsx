import SiteNav from "@/components/portfolio/site-nav";
import Hero from "@/components/portfolio/hero";
import Marquee from "@/components/portfolio/marquee";
import Work from "@/components/portfolio/work";
import About from "@/components/portfolio/about";
import Contact from "@/components/portfolio/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white selection:bg-neon selection:text-black">
      <SiteNav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Contact />
    </main>
  );
}