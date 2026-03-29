'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    name: 'Starter',
    price: '₹25K',
    sub: '/month',
    description: 'For brands launching their first digital campaigns.',
    features: [
      'Social Media (2 platforms)',
      'Basic Content Creation',
      'Monthly Performance Report',
      'Email Support',
      'Basic SEO Optimisation',
    ],
    highlighted: false,
    dark: false,
  },
  {
    name: 'Growth',
    price: '₹50K',
    sub: '/month',
    description: 'For scaling brands that need multi-platform momentum.',
    features: [
      'Social Media (4 platforms)',
      'Performance Ads (Meta + Google)',
      'Advanced Content Creation',
      'Weekly Strategy Sessions',
      'Lead Generation Funnel',
      'Priority Support',
      'Conversion Optimisation',
    ],
    highlighted: true,
    dark: false,
  },
  {
    name: 'Premium',
    price: '₹1L',
    sub: '/month',
    description: 'For established brands building complete growth systems.',
    features: [
      'Everything in Growth',
      'Full Branding & Identity',
      'Custom Website Development',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Influencer Marketing',
      'Video Content Production',
    ],
    highlighted: false,
    dark: true,
  },
]

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef    = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true } }
      )

      const cards = cardsRef.current?.querySelectorAll('.price-card')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true } }
        )

        // Growth card scale bounce
        const growthCard = cardsRef.current?.querySelector('.price-card-growth')
        if (growthCard) {
          gsap.fromTo(growthCard,
            { scale: 0.95 },
            { scale: 1, duration: 0.5, ease: 'back.out(1.5)',
              scrollTrigger: { trigger: cardsRef.current, start: 'top 78%', once: true }, delay: 0.35 }
          )
        }

        // Checkmarks stagger
        const checks = cardsRef.current?.querySelectorAll('.check-item')
        if (checks) {
          gsap.fromTo(checks,
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.3, stagger: 0.04, ease: 'power2.out',
              scrollTrigger: { trigger: cardsRef.current, start: 'top 75%', once: true }, delay: 0.4 }
          )
        }
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="bg-[#F7F8FA] py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div ref={headRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <p className="label mb-4">Pricing</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-display font-bold text-[#1B2A4A]">
            Simple, Transparent Pricing.
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`price-card price-card-${tier.name.toLowerCase()} relative rounded-2xl p-8 flex flex-col h-full border transition-all duration-300 ${
                tier.highlighted
                  ? 'border-[#F5C518] shadow-[0_8px_40px_rgba(245,197,24,0.15)] scale-[1.02] bg-white'
                  : tier.dark
                  ? 'border-transparent bg-[#1B2A4A] text-white'
                  : 'border-[#E2E5EB] bg-white'
              }`}
              style={{ opacity: 0 }}
            >
              {tier.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5C518] text-[#1B2A4A] text-[10px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full shadow-sm">
                  MOST POPULAR
                </span>
              )}

              <div className="mb-6">
                <h3 className={`font-display font-bold text-[20px] mb-1 ${tier.dark ? 'text-white' : 'text-[#1B2A4A]'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`font-display font-bold text-[40px] leading-none ${tier.highlighted ? 'text-[#1B2A4A]' : tier.dark ? 'text-[#F5C518]' : 'text-[#1B2A4A]'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-[14px] ${tier.dark ? 'text-white/40' : 'text-[#9CA3AF]'}`}>{tier.sub}</span>
                </div>
                <p className={`text-[13.5px] leading-relaxed ${tier.dark ? 'text-white/50' : 'text-[#6B7280]'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="check-item flex items-start gap-2.5" style={{ opacity: 0 }}>
                    <Check size={15} strokeWidth={2.5} className="flex-shrink-0 mt-0.5 text-[#F5C518]" />
                    <span className={`text-[13.5px] leading-relaxed ${tier.dark ? 'text-white/70' : 'text-[#6B7280]'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-[14px] transition-all duration-200 group ${
                  tier.highlighted
                    ? 'bg-[#F5C518] text-[#1B2A4A] hover:bg-[#FFD84D]'
                    : tier.dark
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    : 'bg-[#1B2A4A] text-white hover:bg-[#243656]'
                }`}
              >
                Get Started
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[14px] text-[#9CA3AF]">
          Need a custom solution?{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#F5C518] font-semibold hover:underline"
          >
            Contact us for a custom quote →
          </button>
        </p>
      </div>
    </section>
  )
}
