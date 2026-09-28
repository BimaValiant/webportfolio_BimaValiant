import SmoothScroll from "@/components/portfolio/smooth-scroll";
import SiteNav from "@/components/portfolio/site-nav";
import Hero from "@/components/portfolio/hero";
import Marquee from "@/components/portfolio/marquee";
import Work from "@/components/portfolio/work";
import About from "@/components/portfolio/about";
import Contact from "@/components/portfolio/contact";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#f4f4f0] text-[#0a0a0c] selection:bg-[#d2ff00] selection:text-black">
        <SiteNav />
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Contact />
      </main>
    </SmoothScroll>
  );
}