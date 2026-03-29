'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export function Resources() {
  const sectionRef  = useRef<HTMLElement>(null)
  const leftRef     = useRef<HTMLDivElement>(null)
  const mockupRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 82%', once: true } }
      )
      gsap.fromTo(mockupRef.current,
        { opacity: 0, x: 60, rotateY: 20 },
        { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: mockupRef.current, start: 'top 82%', once: true }, delay: 0.2 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="resources" className="bg-[#1B2A4A] py-[120px] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <p className="label mb-4">Resources</p>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-display font-bold text-white mb-5 leading-tight">
              Get Our<br />Brochure
            </h2>
            <p className="text-[16px] text-white/60 leading-[1.8] mb-8 max-w-[460px]">
              Get a comprehensive overview of our services, pricing, and case studies.
              Everything you need to understand how The AdMasons can scale your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2.5 bg-[#F5C518] text-[#1B2A4A] font-semibold text-[15px] px-7 py-3.5 rounded-lg hover:bg-[#FFD84D] hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-[rgba(245,197,24,0.2)]"
              >
                Request Brochure
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {['Company Overview', 'Service Details', 'Case Studies', 'Pricing Guide'].map((tag) => (
                <span key={tag} className="text-[12px] font-medium text-white/40 border border-white/10 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: 3D brochure mockup */}
          <div className="flex justify-center lg:justify-end [perspective:800px]">
            <div
              ref={mockupRef}
              className="float-animation relative w-[260px] h-[340px] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
              style={{ opacity: 0, transformStyle: 'preserve-3d' }}
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
                    <p className="text-[11px] text-white/40 leading-relaxed">
                      Performance Marketing<br />
                      Marketplace Growth<br />
                      Brand Strategy
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
