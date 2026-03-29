'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = loaderRef.current
    const logo = logoRef.current
    if (!loader || !logo) return

    const tl = gsap.timeline({
      onComplete: () => {
        if (loader) loader.style.display = 'none'
        onComplete()
      },
    })

    tl.fromTo(
      logo,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
      .to(logo, { scale: 1, opacity: 1, duration: 0.4 })
      .to(loader, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
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
