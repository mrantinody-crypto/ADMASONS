'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PageLoader } from '@/components/page-loader'
import { CustomCursor } from '@/components/custom-cursor'
import { Navbar } from '@/components/navbar'
import { SmoothScroll } from '@/components/smooth-scroll'

gsap.registerPlugin(ScrollTrigger)

if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(20)
}

function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const st = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0,
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress, transformOrigin: 'left' })
      },
    })

    return () => st.kill()
  }, [])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#F5C518] z-[9999] origin-left"
      style={{ transform: 'scaleX(0)' }}
    />
  )
}

function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/917770969267"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[200] group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform duration-200">
          {/* WhatsApp SVG */}
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </div>
    </a>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)

  function handleLoaded() {
    setLoaded(true)
    // Ensure ScrollTrigger recalculates all positions after content becomes visible
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[#F5C518] focus:text-[#1B2A4A] focus:font-semibold focus:text-[13px] focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <SmoothScroll />
      <CustomCursor />
      <PageLoader onComplete={handleLoaded} />
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          visibility: loaded ? 'visible' : 'hidden',
        }}
      >
        <Navbar />
        {children}
      </div>
      {loaded && <ScrollProgressBar />}
      {loaded && <WhatsAppFAB />}
    </>
  )
}
