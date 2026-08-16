'use client'

import { ArrowUpRight } from 'lucide-react'
import { useRef, useState } from 'react'

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  description?: string;
  techStack?: string[];
}
const projects: Project[] = [
  {
    id: '01',
    title: 'OmniStock AI',
    category: 'Fullstack Enterprise Inventory & Analytics',
    year: '2026',
    image: '/omnistock.png', // Tambahkan garis miring '/' di awal jika file ada di folder public/
    githubUrl: 'https://github.com/BimaValiant/OmniStock-AI.git',
    description: 'Sistem manajemen inventoris berbasis AI dengan kalkulasi Profit Margin presisi berdasarkan transaksi nyata, visualisasi tren omset mingguan dinamis via Chart.js, serta pengaturan organisasi interaktif.',
    techStack: ['Laravel 11', 'Gemini AI API', 'MySQL', 'Tailwind CSS', 'Chart.js', 'AJAX']
  },
  {
    id: '02',
    title: 'Health Prediction System',
    category: 'Machine Learning & Predictive Analytics',
    year: '2026',
    image: '/project-02.png',
    githubUrl: 'https://github.com/BimaValiant/health-prediction-knn.git',
    description: 'Aplikasi analisis medis berbasis Machine Learning menggunakan algoritma K-Nearest Neighbors (KNN) untuk mengklasifikasi dan memprediksi risiko kesehatan secara akurat.',
    techStack: ['Python', 'Flask', 'Scikit-Learn', 'KNN Algorithm', 'Pandas']
  },
  {
    id: '03',
    title: 'Skin Market',
    category: 'E-Commerce & Digital Asset Marketplace',
    year: '2025',
    image: '/project-03.png',
    githubUrl: 'https://github.com/BimaValiant/skin-market.git',
    description: 'Platform e-commerce tempat jual beli item digital dan in-game skin dengan sistem manajemen produk, keranjang belanja, dan pemrosesan transaksi yang terintegrasi.',
    techStack: ['Laravel', 'PHP', 'Blade Templating', 'MySQL', 'Tailwind CSS']
  },
  {
    id: '04',
    title: 'Resto App Android',
    category: 'Mobile Application & Restaurant Management',
    year: '2026',
    image: '/resto-app.png',
    githubUrl: 'https://github.com/BimaValiant/resto-app-android.git',
    description: 'Aplikasi Android native untuk pemesanan menu restoran secara real-time, dilengkapi dengan integrasi RESTful API, penanganan antarmuka responsif, dan pemuatan gambar berkinerja tinggi.',
    techStack: ['Android Studio', 'Kotlin', 'Retrofit API', 'Glide', 'Material Design']
  },
];

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
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-[280px] w-[460px] overflow-hidden rounded-xl border border-foreground/15 bg-background shadow-2xl transition-opacity duration-300 md:block"
        style={{ opacity: active !== null ? 1 : 0 }}
      >
        {projects.map((project, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={project.id}
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-200"
            style={{ opacity: active === i ? 1 : 0 }}
          />
        ))}
      </div>
    </section>
  )
}