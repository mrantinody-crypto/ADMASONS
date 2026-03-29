'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'AdMasons restructured our entire funnel and within 60 days our ROAS went from 1.2× to 4.5×. They don\'t just run ads — they build systems.',
    name: 'Rahul Sharma',
    title: 'CEO, LuxeCart',
  },
  {
    quote: 'They got us 50K+ reach in the first week through influencer seeding and smart Meta ads. The brand finally felt real.',
    name: 'Priya Patel',
    title: 'Founder, GlowUp Naturals',
  },
  {
    quote: 'Before AdMasons, 70% of our leads were junk. Now our sales team closes more in a week than they used to in a month.',
    name: 'Amit Kumar',
    title: 'Marketing Head, Skyline Realty',
  },
  {
    quote: 'Our footfall tripled in 45 days. AdMasons handled everything — listings, photography, local ads. Worth every rupee.',
    name: 'Sneha Reddy',
    title: 'Owner, Spice Kitchen',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="text-[#F5C518] fill-[#F5C518]"
          style={{ animation: `star-twinkle ${1.5 + i * 0.15}s ease-in-out ${i * 0.1}s infinite` }}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
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

      const cards = cardsRef.current?.querySelectorAll('.testi-card')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true } }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div ref={headRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <p className="label mb-4">What Our Clients Say</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-display font-bold text-[#1B2A4A]">
            Don&apos;t Take Our Word For It
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testi-card bg-[#F7F8FA] border border-[#E2E5EB] rounded-2xl p-8 hover:border-[#F5C518] transition-colors duration-300"
              style={{ opacity: 0 }}
            >
              <Stars />

              <div className="h-px w-8 bg-[#F5C518] mb-5" />

              <blockquote className="text-[15.5px] text-[#1B2A4A] leading-[1.8] mb-6 font-medium">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#F5C518] text-[11px] font-bold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[14px] text-[#1B2A4A]">{t.name}</p>
                  <p className="text-[12px] text-[#9CA3AF]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
