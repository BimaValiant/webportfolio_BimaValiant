'use client'

import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad)
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }
      const target = e.target as HTMLElement
      setHovering(Boolean(target.closest('a, button, [data-cursor="hover"]')))
    }

    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.15
      ring.y += (pos.y - ring.y) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={dotRef}
        className="absolute left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-primary"
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 rounded-full border border-foreground/40 transition-[width,height,margin,border-color] duration-200"
        style={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          marginLeft: hovering ? -28 : -14,
          marginTop: hovering ? -28 : -14,
          borderColor: hovering
            ? 'var(--primary)'
            : 'color-mix(in oklch, var(--foreground) 40%, transparent)',
        }}
      />
    </div>
  )
}
