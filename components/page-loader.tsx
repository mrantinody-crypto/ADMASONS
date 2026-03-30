'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = loaderRef.current
    const logo = logoRef.current
    if (!loader || !logo) {
      // If refs not ready, complete immediately
      onComplete()
      return
    }

    // Total animation: 1.2s max (0.4 + 0.3 + 0.5)
    const tl = gsap.timeline({
      onComplete: () => {
        if (loader) loader.style.display = 'none'
        onComplete()
      },
    })

    tl.fromTo(
      logo,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }
    )
      .to(logo, { duration: 0.3 }) // Brief hold
      .to(loader, {
        yPercent: -100,
        duration: 0.5,
        ease: 'power3.inOut',
      })

    return () => { tl.kill() }
  }, [onComplete])

  return (
    <div ref={loaderRef} className="page-loader">
      <div ref={logoRef} style={{ opacity: 0 }}>
        <Image
          src="/admasons-logo.jpeg"
          alt="The AdMasons"
          width={160}
          height={70}
          priority
          className="rounded-md"
        />
      </div>
    </div>
  )
}
