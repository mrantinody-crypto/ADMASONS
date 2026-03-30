'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { BarChart3, TrendingUp, Sparkles, Zap, Users, Globe } from 'lucide-react'

const items = [
  { num: '01', icon: BarChart3, title: 'Data-Driven Strategies', desc: 'Every decision backed by analytics and insights to ensure maximum impact and measurable results.' },
  { num: '02', icon: TrendingUp, title: 'ROI-Focused Campaigns', desc: 'We optimise every rupee spent to deliver the highest possible return on your marketing investment.' },
  { num: '03', icon: Sparkles, title: 'Creative Excellence', desc: 'A creative team that produces stunning visuals and compelling content that actually converts.' },
  { num: '04', icon: Zap, title: 'Fast Execution', desc: 'Agile processes that move at the speed of your business, delivering results without delays.' },
  { num: '05', icon: Users, title: '15+ Specialists', desc: 'A full team of media buyers, designers, copywriters, funnel builders, and automation experts.' },
  { num: '06', icon: Globe, title: '4 Global Markets', desc: 'Proven results across India, UAE, UK, and USA — we understand what works in each market.' },
]

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef    = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use gsap.from() - elements visible by default
      gsap.from(headRef.current, {
        opacity: 0, y: 30, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true }
      })

      const cards = gridRef.current?.querySelectorAll('.why-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0, y: 40, duration: 0.5, stagger: 0.06, ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true }
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="why-us" className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div ref={headRef} className="text-center mb-16">
          <p className="label mb-4">Why Choose Us</p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-display font-bold text-[#1B2A4A]">
            Why Brands Choose The AdMasons
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.num} className="why-card relative group">
              {/* Watermark number */}
              <span className="watermark-num absolute -top-3 -left-1 font-display font-bold text-[80px] leading-none text-[#1B2A4A]/[0.04] select-none pointer-events-none z-0">
                {item.num}
              </span>

              <div className="relative z-10">
                {/* Gold line accent */}
                <div
                  className="gold-line-item h-[2px] bg-[#F5C518] mb-5 rounded-full w-12"
                />

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(245,197,24,0.1)]">
                    <item.icon size={20} strokeWidth={1.5} className="text-[#F5C518]" />
                  </div>
                </div>

                <h3 className="font-display font-semibold text-[18px] text-[#1B2A4A] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-[#6B7280] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
