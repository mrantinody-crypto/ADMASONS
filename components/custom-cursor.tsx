'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(max-width: 768px)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    setIsVisible(true)

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0, overwrite: true })
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      gsap.set(ring, { x: ringX, y: ringY })
    }

    gsap.ticker.add(tick)
    window.addEventListener('mousemove', onMove)

    const expand = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      const text = target.dataset.cursorText || target.dataset.cursor || ''
      setCursorText(text)
      ring.classList.add('expanded')
    }
    const shrink = () => {
      setCursorText('')
      ring.classList.remove('expanded')
    }

    const interactives = document.querySelectorAll<HTMLElement>(
      'a, button, [data-cursor], .service-card, .case-card'
    )
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      gsap.ticker.remove(tick)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ opacity: isVisible ? 1 : 0, left: 0, top: 0 }}
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{ opacity: isVisible ? 1 : 0, left: 0, top: 0 }}
      >
        <span className="cursor-text">{cursorText}</span>
      </div>
    </>
  )
}
