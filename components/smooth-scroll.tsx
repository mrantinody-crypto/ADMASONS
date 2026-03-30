'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export function SmoothScroll() {
  useEffect(() => {
    // Defer Lenis initialization to not block initial paint
    const initTimeout = setTimeout(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      })

      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.lagSmoothing(0)

      const tickerFn = (time: number) => lenis.raf(time * 1000)
      gsap.ticker.add(tickerFn)

      // Store cleanup function
      ;(window as Window & { __lenisCleanup?: () => void }).__lenisCleanup = () => {
        gsap.ticker.remove(tickerFn)
        lenis.destroy()
      }
    }, 100) // 100ms delay to let page render first

    return () => {
      clearTimeout(initTimeout)
      const cleanup = (window as Window & { __lenisCleanup?: () => void }).__lenisCleanup
      if (cleanup) cleanup()
    }
  }, [])

  return null
}
