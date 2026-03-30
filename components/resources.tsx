'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Download } from 'lucide-react'
import Image from 'next/image'

export function Resources() {
  const sectionRef  = useRef<HTMLElement>(null)
  const leftRef     = useRef<HTMLDivElement>(null)
  const mockupRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use gsap.from() - elements visible by default
      gsap.from(leftRef.current, {
        opacity: 0, x: -30, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 85%', once: true }
      })
      gsap.from(mockupRef.current, {
        opacity: 0, x: 30, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: mockupRef.current, start: 'top 85%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="resources" className="bg-[#1B2A4A] py-[120px] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div ref={leftRef}>
            <p className="label mb-4">Resources</p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-display font-bold text-white mb-5 leading-tight">
              Download Our<br />Brochure
            </h2>
            <p className="text-[16px] text-white/60 leading-[1.8] mb-8 max-w-[460px]">
              Get a comprehensive overview of our services, pricing, and case studies.
              Everything you need to understand how The AdMasons can scale your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/admasons-brochure.pdf" 
                download="AdMasons-Company-Brochure-2026.pdf"
                className="group inline-flex items-center gap-2.5 bg-[#F5C518] text-[#1B2A4A] font-semibold text-[15px] px-8 py-4 rounded-lg hover:bg-[#FFD84D] hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-[rgba(245,197,24,0.2)]"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Download Brochure (PDF)
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {['Company Overview', 'Service Details', 'Case Studies', 'Pricing Guide'].map((tag) => (
                <span key={tag} className="text-[12px] font-medium text-white/40 border border-white/10 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Brochure mockup with CSS floating animation */}
          <div className="flex justify-center lg:justify-end [perspective:800px]">
            <div
              ref={mockupRef}
              className="brochure-float relative w-[260px] h-[340px] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] border-2 border-[#F5C518]/30"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Cover design */}
              <div className="absolute inset-0 bg-[#243656] flex flex-col">
                {/* Top band */}
                <div className="bg-[#F5C518] h-2 w-full" />

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-7">
                  <div>
                    <Image
                      src="/admasons-logo.jpeg"
                      alt="The AdMasons"
                      width={110}
                      height={40}
                      className="rounded mb-6"
                    />
                    <h3 className="font-display font-bold text-white text-[22px] leading-tight mb-2">
                      Company<br />Brochure
                    </h3>
                    <span className="text-[#F5C518] text-[13px] font-semibold tracking-wider">2026</span>
                  </div>

                  <div>
                    <div className="h-px bg-[rgba(245,197,24,0.3)] mb-4" />
                    <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-wider">
                      Performance · Creativity · Technology
                    </p>
                  </div>
                </div>

                {/* Bottom band */}
                <div className="bg-[rgba(245,197,24,0.15)] h-8 flex items-center px-7">
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#F5C518]">
                    www.admasons.com
                  </span>
                </div>
              </div>

              {/* Gloss overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
