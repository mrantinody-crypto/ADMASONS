'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)
  const rightRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use gsap.from() - elements visible by default
      gsap.from(leftRef.current, {
        opacity: 0, x: -30, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 85%', once: true }
      })
      gsap.from(rightRef.current, {
        opacity: 0, x: 30, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: rightRef.current, start: 'top 85%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="bg-[#F7F8FA] py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div ref={leftRef}>
            <p className="label mb-4">About Us</p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-display font-bold text-[#1B2A4A] mb-8 leading-tight">
              We Don&apos;t Run Ads.<br />We Engineer Growth Systems.
            </h2>

            {/* Philosophy quote */}
            <div className="relative pl-6 mb-8 bg-[rgba(245,197,24,0.06)] rounded-r-xl py-6 pr-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5C518] rounded-l-xl" />
              <p className="font-display font-medium text-[20px] text-[#1B2A4A] leading-[1.5] tracking-tight mb-3">
                &ldquo;Most brands don&apos;t fail because of bad products. They fail because of weak positioning and broken marketing systems.&rdquo;
              </p>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#F5C518]">
                — THE ADMASONS PHILOSOPHY
              </span>
            </div>

            <p className="text-[16px] text-[#6B7280] leading-[1.8]">
              The AdMasons operates at the intersection of performance, creativity,
              and technology to build scalable, high-converting brands that don&apos;t just
              compete — they dominate. Based in Indore, we serve clients across India,
              UAE, UK, and the USA — from ambitious D2C startups to established
              enterprise brands.
            </p>
          </div>

          {/* Right: Stats/pillars */}
          <div ref={rightRef} className="grid grid-cols-2 gap-5">
            {[
              { val: '150+', label: 'Campaigns Delivered', sub: 'Across 4 global markets' },
              { val: '5×',   label: 'Average ROI',         sub: 'Across all campaigns' },
              { val: '9+',   label: 'Years Experience',    sub: 'In performance marketing' },
              { val: '30+',  label: 'Team Members',        sub: 'Specialists in-house' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl p-6 border border-[#E2E5EB] hover:border-[#F5C518] transition-colors duration-300"
              >
                <span className="block font-display font-bold text-[36px] text-[#F5C518] leading-none mb-1">
                  {s.val}
                </span>
                <span className="block font-semibold text-[14px] text-[#1B2A4A] mb-1">{s.label}</span>
                <span className="block text-[12px] text-[#9CA3AF]">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

