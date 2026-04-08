'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

interface CaseStudy {
  industry: string
  metric: string
  metricLabel: string
  brand: string
  challenge: string
  solution: string
  result: string
}

const caseStudies: CaseStudy[] = [
  {
    industry: 'E-Commerce / D2C',
    metric: '+327%',
    metricLabel: 'Revenue Growth',
    brand: 'LuxeCart',
    challenge: 'ROAS stuck at 1.2× despite heavy ad spend.',
    solution: 'Full-funnel Meta + Google strategy with creative matrix testing.',
    result: '4.2× ROI in 90 days',
  },
  {
    industry: 'Real Estate',
    metric: '180+',
    metricLabel: 'Leads / Month',
    brand: 'Skyline Realty',
    challenge: '70% of incoming leads were unqualified.',
    solution: 'Precision Google Search + Facebook lead funnels with qualifying forms.',
    result: '4.2× ROI · Cost/lead ↓ 68%',
  },
  {
    industry: 'Healthcare',
    metric: '+245%',
    metricLabel: 'Demo Bookings',
    brand: 'MedPlus Clinic',
    challenge: 'Near-zero digital footprint in competitive local market.',
    solution: 'Google Maps optimisation + search ads + GMB overhaul.',
    result: '180+ qualified leads/month',
  },
  {
    industry: 'EdTech',
    metric: '25K',
    metricLabel: 'Followers in 90 days',
    brand: 'BrightMinds Academy',
    challenge: 'Launching a new brand with zero social proof.',
    solution: 'Influencer seeding + Meta reels strategy + community building.',
    result: '25K organic followers · 8% engagement',
  },
  {
    industry: 'Hospitality / F&B',
    metric: '3×',
    metricLabel: 'Footfall in 45 days',
    brand: 'Spice Kitchen',
    challenge: 'New restaurant struggling to fill seats after launch.',
    solution: 'Google local ads + food delivery listings + Instagram content.',
    result: '3× footfall · ₹4.5L incremental revenue',
  },
  {
    industry: 'FMCG / Beauty',
    metric: '50K+',
    metricLabel: 'Reach in First Week',
    brand: 'GlowUp Naturals',
    challenge: 'D2C beauty brand needing rapid awareness at launch.',
    solution: 'Micro-influencer seeding + Meta awareness + retargeting.',
    result: '50K+ reach · 3.8× ROAS Week 1',
  },
]

export function CaseStudies() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headRef     = useRef<HTMLDivElement>(null)
  const statsBarRef = useRef<HTMLDivElement>(null)
  const gridRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Header + stats bar — lightweight GSAP one-shot animations
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0, y: 30, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true },
      })
      gsap.from(statsBarRef.current, {
        opacity: 0, y: 20, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: statsBarRef.current, start: 'top 88%', once: true },
      })
    }, sectionRef)

    // Per-card IntersectionObserver — never blocks scroll
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.case-card')
    if (!cards) return () => ctx.revert()

    // Set initial invisible state via inline style
    cards.forEach((card) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(32px)'
      card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement
            // Stagger via dataset index
            const idx = Number(card.dataset.cardIndex ?? 0)
            setTimeout(() => {
              card.style.opacity = '1'
              card.style.transform = 'translateY(0)'
            }, idx * 120)
            observer.unobserve(card) // once: true
          }
        })
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 },
    )

    cards.forEach((card) => observer.observe(card))

    return () => {
      ctx.revert()
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} id="results" className="bg-[#1B2A4A] py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-10">
          <p className="label mb-4">Case Studies</p>
          <h2 className="text-[clamp(32px,4.5vw,52px)] font-display font-bold text-white mb-5">
            Results That Speak For Themselves.
          </h2>
          <p className="text-[16px] text-white/60 max-w-[600px] mx-auto leading-relaxed">
            Real campaigns. Real numbers. Here&apos;s how we&apos;ve helped brands across
            industries turn their marketing spend into measurable, compounding growth.
          </p>
        </div>

        {/* Stats row */}
        <div ref={statsBarRef} className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-16 pb-10 border-b border-white/10">
          {[
            { v: '150+', l: 'Campaigns' },
            { v: '5×',   l: 'Avg ROI' },
            { v: '₹2Cr+',l: 'Ad Spend' },
            { v: '+327%',l: 'Best ROAS' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-white/15" />}
              <div className="text-center">
                <span className="block font-display font-bold text-[28px] text-[#F5C518] leading-none">{s.v}</span>
                <span className="text-[12px] text-white/40 tracking-wide">{s.l}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cards grid — no pin, no horizontal scroll, fully natural scroll */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.brand}
              data-card-index={idx}
              className="case-card bg-[#243656] border border-white/8 rounded-2xl p-8 flex flex-col hover:border-[rgba(245,197,24,0.4)] transition-colors duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span className="label text-[11px]">{cs.industry}</span>
                <div className="text-right">
                  <span
                    className="block font-display font-bold leading-none text-[#F5C518]"
                    style={{ fontSize: 'clamp(36px,4vw,52px)', textShadow: '0 0 30px rgba(245,197,24,0.3)' }}
                  >
                    {cs.metric}
                  </span>
                  <span className="text-[11px] text-white/40 tracking-wide">{cs.metricLabel}</span>
                </div>
              </div>

              {/* Gold divider */}
              <div className="h-px bg-[rgba(245,197,24,0.3)] mb-6" />

              {/* Brand */}
              <h3 className="font-display font-semibold text-[22px] text-white mb-4 tracking-tight">
                {cs.brand}
              </h3>

              {/* Challenge / Solution */}
              <div className="space-y-3 flex-1 mb-6">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/30">Challenge</span>
                  <p className="text-[13.5px] text-white/65 mt-0.5 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/30">Solution</span>
                  <p className="text-[13.5px] text-white/65 mt-0.5 leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Result badge */}
              <div className="inline-flex items-center self-start border border-[rgba(245,197,24,0.5)] rounded-full px-4 py-2">
                <span className="font-semibold text-[13px] text-[#F5C518]">{cs.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
