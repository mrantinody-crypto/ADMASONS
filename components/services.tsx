'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Target, ShoppingCart, Share2, Monitor, Palette, Filter, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Performance Ads',
    description: 'Data-driven Meta & Google advertising campaigns that maximise ROI and scale your business profitably.',
    badge: null,
  },
  {
    icon: ShoppingCart,
    title: 'Amazon & Marketplace Growth',
    description: 'End-to-end Amazon PPC management, listing optimisation, and growth strategy across Amazon India, UK, UAE + Flipkart & Quick Commerce.',
    badge: 'CORE EXPERTISE',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build a powerful social presence that engages your audience and drives conversions across all platforms.',
    badge: null,
  },
  {
    icon: Monitor,
    title: 'Website Design & Development',
    description: 'High-converting, beautifully designed websites that establish credibility and capture leads 24/7.',
    badge: null,
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Create a memorable brand identity that stands out and resonates deeply with your target audience.',
    badge: null,
  },
  {
    icon: Filter,
    title: 'Lead Generation Funnels',
    description: 'Automated marketing funnels that capture, nurture, and convert leads into paying customers at scale.',
    badge: null,
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef    = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use gsap.from() - elements are visible by default, animate FROM hidden state
      gsap.from(headRef.current, {
        opacity: 0, y: 30, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true }
      })

      const cards = cardsRef.current?.querySelectorAll('.service-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0, y: 40, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true }
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <p className="label mb-4">What We Do</p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-display font-bold text-[#1B2A4A] mb-4">
            Our Services
          </h2>
          <p className="text-[17px] text-[#6B7280] max-w-[560px] mx-auto leading-relaxed">
            Comprehensive digital marketing solutions tailored to help your business
            grow faster and dominate your market.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="service-card relative rounded-xl border border-[#E2E5EB] bg-white p-8 group cursor-pointer"
            >
              {/* Core Expertise badge */}
              {svc.badge && (
                <span className="pulse-glow absolute top-4 right-4 text-[10px] font-bold tracking-[0.12em] uppercase text-[#F5C518] bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.3)] px-2.5 py-1 rounded-full">
                  {svc.badge}
                </span>
              )}

              <svc.icon
                size={32}
                strokeWidth={1.5}
                className="text-[#F5C518] mb-5"
              />

              <h3 className="font-display font-semibold text-[20px] text-[#1B2A4A] mb-3 tracking-[-0.01em]">
                {svc.title}
              </h3>

              <p className="text-[14.5px] text-[#6B7280] leading-[1.7] mb-5">
                {svc.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#F5C518] group-hover:gap-2.5 transition-all duration-200">
                Learn More
                <ArrowRight size={13} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
