'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const sectionRef    = useRef<HTMLElement>(null)
  const trackRef      = useRef<HTMLDivElement>(null)
  const innerRef      = useRef<HTMLDivElement>(null)
  const headRef       = useRef<HTMLDivElement>(null)
  const statsBarRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true } }
      )
      gsap.fromTo(statsBarRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: statsBarRef.current, start: 'top 88%', once: true } }
      )

      // Mobile: simple stagger, no pin
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      if (isMobile) {
        const cards = innerRef.current?.querySelectorAll('.case-card')
        if (cards) {
          gsap.fromTo(cards,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
              scrollTrigger: { trigger: innerRef.current, start: 'top 80%', once: true } }
          )
        }
        return
      }

      // Desktop: horizontal scroll
      const track = trackRef.current
      const inner = innerRef.current
      if (!track || !inner) return

      const cards = inner.querySelectorAll('.case-card')
      const totalWidth = inner.scrollWidth
      const viewportWidth = window.innerWidth
      const scrollDistance = Math.max(0, totalWidth - viewportWidth + 96)
      if (scrollDistance === 0) return

      const pin = ScrollTrigger.create({
        trigger: track,
        start: 'top top',
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.set(inner, { x: -self.progress * scrollDistance })
        },
      })

      // Card scale on entry
      cards.forEach((card) => {
        gsap.fromTo(card, { scale: 0.92, opacity: 0.4 }, {
          scale: 1, opacity: 1,
          scrollTrigger: {
            trigger: card,
            containerAnimation: pin as unknown as gsap.core.Animation,
            start: 'left 80%',
            end: 'left 40%',
            scrub: true,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="results" className="bg-[#1B2A4A]">
      {/* Header */}
      <div className="mx-auto max-w-[1280px] px-6 pt-[120px]">
        <div ref={headRef} className="text-center mb-10" style={{ opacity: 0 }}>
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
        <div ref={statsBarRef} className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-16 pb-10 border-b border-white/10" style={{ opacity: 0 }}>
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
      </div>

      {/* Horizontal scroll track */}
      <div ref={trackRef} className="overflow-hidden" data-cursor="SCROLL">
        <div
          ref={innerRef}
          className="flex gap-6 px-6 pb-[120px] md:pb-[80px]"
          style={{ width: 'max-content' }}
        >
          {caseStudies.map((cs) => (
            <div
              key={cs.brand}
              className="case-card flex-shrink-0 w-[min(440px,85vw)] bg-[#243656] border border-white/8 rounded-2xl p-8 flex flex-col hover:border-[rgba(245,197,24,0.4)] transition-colors duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span className="label text-[11px]">{cs.industry}</span>
                <div className="text-right">
                  <span
                    className="block font-display font-bold leading-none text-[#F5C518]"
                    style={{ fontSize: 'clamp(40px,5vw,60px)', textShadow: '0 0 30px rgba(245,197,24,0.3)' }}
                  >
                    {cs.metric}
                  </span>
                  <span className="text-[11px] text-white/40 tracking-wide">{cs.metricLabel}</span>
                </div>
              </div>

              {/* Gold divider */}
              <div className="h-px bg-[rgba(245,197,24,0.3)] mb-6" />

              {/* Brand */}
              <h3 className="font-display font-semibold text-[24px] text-white mb-4 tracking-tight">
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
