'use client'

import { useEffect, useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'

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

  useEffect(() => {
    // IntersectionObserver fade-in — never hides elements on mount, no layout gaps
    const targets = sectionRef.current?.querySelectorAll<HTMLElement>('.fade-target')
    if (!targets) return

    targets.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = Number(el.dataset.delay ?? 0)
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="bg-[#F7F8FA] py-[80px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="fade-target text-center mb-10" data-delay="0">
          <p className="label mb-4">Pricing</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-display font-bold text-[#1B2A4A]">
            Simple, Transparent Pricing.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              data-delay={idx * 100}
              className={`fade-target price-card price-card-${tier.name.toLowerCase()} relative rounded-2xl p-8 flex flex-col h-full border transition-all duration-300 ${
                tier.highlighted
                  ? 'border-[#F5C518] shadow-[0_8px_40px_rgba(245,197,24,0.15)] scale-[1.02] bg-white'
                  : tier.dark
                  ? 'border-transparent bg-[#1B2A4A] text-white'
                  : 'border-[#E2E5EB] bg-white'
              }`}
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
                  <li key={f} className="check-item flex items-start gap-2.5">
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

        {/* Custom pricing CTA banner */}
        <div data-delay="0" className="fade-target mt-10 rounded-2xl bg-[#1B2A4A] border border-[rgba(245,197,24,0.2)] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_4px_40px_rgba(0,0,0,0.08)]">
          <div className="text-center sm:text-left">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F5C518] mb-2">
              Custom Plan
            </p>
            <h3 className="font-display font-bold text-[22px] text-white leading-snug mb-1">
              Need something tailored?
            </h3>
            <p className="text-[14px] text-white/55 max-w-[420px] leading-relaxed">
              Let&apos;s build a custom growth plan for your brand — strategy, spend, and scale, designed around your goals.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex-shrink-0 inline-flex items-center gap-2 bg-[#F5C518] text-[#1B2A4A] font-semibold text-[14px] px-7 py-3.5 rounded-lg transition-all duration-200 hover:bg-[#FFD84D] hover:shadow-[0_4px_20px_rgba(245,197,24,0.35)] active:scale-[0.98]"
          >
            Get Custom Pricing
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  )
}
