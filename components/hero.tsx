'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 150, suffix: '+', label: 'Campaigns Delivered' },
  { value: 50,  suffix: '+', label: 'Happy Clients' },
  { value: 5,   suffix: '×', label: 'Average ROI' },
  { value: 2,   prefix: '₹', suffix: 'Cr+', label: 'Ad Spend Managed' },
]

function AnimatedGeo() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center select-none">
      <svg
        viewBox="0 0 500 500"
        className="w-full max-w-[480px] opacity-90"
        aria-hidden="true"
      >
        {/* Background grid lines */}
        {[100,200,300,400].map(x => (
          <line key={`vg${x}`} x1={x} y1="0" x2={x} y2="500" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        ))}
        {[100,200,300,400].map(y => (
          <line key={`hg${y}`} x1="0" y1={y} x2="500" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        ))}

        {/* Main large rect */}
        <rect x="80" y="100" width="200" height="140" rx="4"
          fill="#243656" stroke="#F5C518" strokeWidth="1.5" className="geo-rect-1"/>

        {/* Gold accent rect */}
        <rect x="110" y="130" width="60" height="50" rx="3"
          fill="#F5C518" opacity="0.9" className="geo-rect-gold"/>

        {/* Text inside gold rect */}
        <text x="140" y="162" textAnchor="middle" fontSize="18" fontWeight="700"
          fill="#1B2A4A" fontFamily="Space Grotesk, sans-serif">Ad</text>

        {/* Right white block */}
        <rect x="180" y="130" width="80" height="50" rx="3"
          fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" className="geo-rect-2"/>
        <text x="220" y="162" textAnchor="middle" fontSize="13" fontWeight="600"
          fill="rgba(255,255,255,0.7)" fontFamily="Space Grotesk, sans-serif">Masons</text>

        {/* Circle accent */}
        <circle cx="360" cy="180" r="60" fill="none" stroke="#F5C518" strokeWidth="1.5"
          strokeDasharray="8 4" opacity="0.6" className="geo-circle"/>
        <circle cx="360" cy="180" r="12" fill="#F5C518" opacity="0.85" className="geo-dot"/>

        {/* Decorative lines */}
        <line x1="280" y1="155" x2="340" y2="155" stroke="#F5C518" strokeWidth="1" opacity="0.5"/>
        <line x1="280" y1="168" x2="330" y2="168" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <line x1="280" y1="181" x2="320" y2="181" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

        {/* Small blocks bottom */}
        <rect x="80" y="270" width="55" height="55" rx="3" fill="#243656" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="geo-block-1"/>
        <rect x="80" y="294" width="55" height="6" rx="2" fill="#F5C518" opacity="0.7"/>

        <rect x="150" y="280" width="40" height="40" rx="3" fill="rgba(245,197,24,0.12)" stroke="#F5C518" strokeWidth="1" className="geo-block-2"/>

        <rect x="205" y="270" width="75" height="55" rx="3" fill="#243656" stroke="rgba(255,255,255,0.06)" strokeWidth="1" className="geo-block-3"/>
        <text x="242" y="302" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.3)"
          fontFamily="Inter, sans-serif">SCALE</text>
        <rect x="215" y="308" width="55" height="3" rx="1" fill="#F5C518" opacity="0.5"/>

        {/* Floating dots */}
        <circle cx="380" cy="300" r="4" fill="#F5C518" opacity="0.8" className="geo-float-dot-1"/>
        <circle cx="420" cy="340" r="6" fill="rgba(245,197,24,0.25)" className="geo-float-dot-2"/>
        <circle cx="340" cy="370" r="3" fill="#F5C518" opacity="0.5" className="geo-float-dot-3"/>

        {/* Large outer ring */}
        <circle cx="250" cy="250" r="210" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(245,197,24,0.05)" strokeWidth="1"/>

        {/* Connection lines */}
        <line x1="155" y1="295" x2="155" y2="240" stroke="rgba(245,197,24,0.3)" strokeWidth="1"/>
        <line x1="360" y1="240" x2="360" y2="280" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <line x1="108" y1="240" x2="280" y2="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 4"/>
      </svg>
    </div>
  )
}

export function Hero() {
  const sectionRef   = useRef<HTMLElement>(null)
  const eyebrowRef   = useRef<HTMLParagraphElement>(null)
  const headlineRef  = useRef<HTMLHeadingElement>(null)
  const subheadRef   = useRef<HTMLParagraphElement>(null)
  const ctasRef      = useRef<HTMLDivElement>(null)
  const statsRef     = useRef<HTMLDivElement>(null)
  const geoRef       = useRef<HTMLDivElement>(null)
  const scrollIndRef = useRef<HTMLDivElement>(null)
  const counterRefs  = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.5 })

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
      .fromTo(headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(subheadRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(ctasRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo(geoRef.current,
        { opacity: 0, scale: 0.92, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(statsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )

      // Geo animations — desktop only (SVG is CSS-hidden on mobile but still in DOM)
      if (!window.matchMedia('(max-width: 1023px)').matches) {
        gsap.to('.geo-circle', { rotation: 360, duration: 18, repeat: -1, ease: 'none', transformOrigin: '360px 180px' })
        gsap.to('.geo-float-dot-1', { y: -8, duration: 2.2, yoyo: true, repeat: -1, ease: 'sine.inOut' })
        gsap.to('.geo-float-dot-2', { y: 10, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.4 })
        gsap.to('.geo-float-dot-3', { y: -6, duration: 2.6, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.8 })
        gsap.to('.geo-dot', { scale: 1.15, duration: 1.4, yoyo: true, repeat: -1, ease: 'sine.inOut', transformOrigin: 'center' })
        gsap.to('.geo-block-1', { y: -4, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut' })
        gsap.to('.geo-block-2', { y: 5, duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.3 })
        gsap.to('.geo-block-3', { y: -3, duration: 2.1, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.6 })
      }

      // Stats counters
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          stats.forEach((stat, i) => {
            const el = counterRefs.current[i]
            if (!el) return
            const proxy = { val: 0 }
            gsap.to(proxy, {
              val: stat.value,
              duration: 1.4,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = `${stat.prefix || ''}${Math.round(proxy.val)}${stat.suffix}`
              },
            })
          })
        },
      })

      // Scroll indicator fade
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '30% top',
        scrub: true,
        onUpdate: (self) => {
          if (scrollIndRef.current) {
            scrollIndRef.current.style.opacity = String(1 - self.progress * 2)
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative bg-[#1B2A4A] min-h-screen flex flex-col overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #F5C518 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2D4365 0%, transparent 50%)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 pt-36 pb-0 flex-1 flex flex-col">
        <div className="flex-1 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT: Content */}
          <div>
            <p
              ref={eyebrowRef}
              className="label mb-6"
              style={{ opacity: 0 }}
            >
              PERFORMANCE · CREATIVITY · TECHNOLOGY
            </p>

            <h1
              ref={headlineRef}
              className="text-[clamp(38px,6vw,76px)] font-display font-bold text-white leading-[1.05] tracking-[-0.03em] mb-6"
              style={{ opacity: 0 }}
            >
              We Build Brands<br />
              That{' '}
              <span
                className="text-[#F5C518]"
                style={{ textShadow: '0 0 40px rgba(245,197,24,0.3)' }}
              >
                Dominate.
              </span>
            </h1>

            <p
              ref={subheadRef}
              className="text-[17px] leading-[1.75] max-w-[520px] mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', opacity: 0 }}
            >
              The AdMasons operates at the intersection of performance marketing,
              branding, and technology to help ambitious businesses scale faster
              and own their market.
            </p>

            <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4" style={{ opacity: 0 }}>
              <a
                href="https://wa.me/917770969267"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[#F5C518] text-[#1B2A4A] font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-[#FFD84D] hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-[rgba(245,197,24,0.25)]"
              >
                Book a Free Strategy Call
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button
                onClick={() => {
                  const el = document.querySelector('#results')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 border border-[rgba(245,197,24,0.5)] text-[#F5C518] font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-[rgba(245,197,24,0.1)] transition-all duration-200"
              >
                Explore Our Work
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT: Animated geometric */}
          <div ref={geoRef} className="hidden lg:block" style={{ opacity: 0 }}>
            <AnimatedGeo />
          </div>
        </div>

        {/* Stats Bar */}
        <div
          ref={statsRef}
          className="border-t border-white/10 mt-12 py-10"
          style={{ opacity: 0 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`relative ${i < 3 ? 'md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-px md:after:h-10 md:after:bg-white/15' : ''}`}>
                <span
                  ref={el => { counterRefs.current[i] = el }}
                  className="block text-[clamp(32px,4vw,48px)] font-display font-bold text-white leading-none mb-1.5"
                >
                  {stat.prefix || ''}0{stat.suffix}
                </span>
                <span className="text-[13px] text-white/50 font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/30">Scroll</span>
        <div className="relative w-[1.5px] h-10 bg-white/10 overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full bg-[#F5C518] rounded-full"
            style={{ height: '40%', animation: 'scroll-dot 1.6s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  )
}
