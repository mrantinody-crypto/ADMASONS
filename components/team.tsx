'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Linkedin } from 'lucide-react'

const members = [
  {
    name: 'Saba',
    role: 'Founder',
    initials: 'S',
    desc: 'Visionary behind AdMasons — leads overall growth strategy, client partnerships, and the systems that turn marketing spend into compounding, measurable ROI.',
  },
  {
    name: 'Aamir',
    role: 'Marketing Director',
    initials: 'A',
    desc: 'Drives full-funnel performance marketing across Meta, Google, and emerging platforms — from media buying to conversion optimisation and scalable growth funnels.',
  },
  {
    name: 'Abdullah',
    role: 'Creative Head',
    initials: 'Ab',
    desc: 'Shapes brand identity, visual storytelling, and creative strategy — bridging design thinking with performance to craft campaigns that convert and resonate.',
  },
]

const tags = [
  'Performance Strategists', 'Media Buyers', 'Creative Designers', 'Video Editors',
  'Copywriters', 'Funnel Builders', 'Automation Experts', 'Data Analysts',
  'Web Developers', 'SEO Specialists', 'Account Managers', 'Performance Strategists',
  'Media Buyers', 'Creative Designers', 'Video Editors', 'Copywriters',
]

export function Team() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef    = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use gsap.from() - elements visible by default
      gsap.from(headRef.current, {
        opacity: 0, y: 30, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true }
      })

      const cards = cardsRef.current?.querySelectorAll('.team-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0, y: 40, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true }
        })

        const avatars = cardsRef.current?.querySelectorAll('.avatar-circle')
        if (avatars) {
          gsap.from(avatars, {
            scale: 0.8, duration: 0.4, stagger: 0.08, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true }
          })
        }
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="bg-[#1B2A4A] py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <p className="label mb-4">Leadership</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-display font-bold text-white">
            The Minds Behind The AdMasons
          </h2>
        </div>

        {/* Cards — 3-col desktop, stacked mobile */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {members.map((m) => (
            <div
              key={m.name}
              className="team-card bg-[#243656] border border-white/8 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[rgba(245,197,24,0.35)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Initials avatar */}
              <div className="avatar-circle w-20 h-20 rounded-full border-2 border-[#F5C518] bg-[#1B2A4A] flex items-center justify-center mb-5 flex-shrink-0">
                <span className="font-display font-bold text-[22px] text-[#F5C518] select-none">
                  {m.initials}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-display font-bold text-[22px] text-white mb-1 tracking-tight">
                {m.name}
              </h3>

              {/* Role */}
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#F5C518] mb-4">
                {m.role}
              </span>

              {/* Gold rule */}
              <div className="w-8 h-px bg-[rgba(245,197,24,0.4)] mb-4" />

              {/* Description */}
              <p className="text-[13.5px] text-white/60 leading-[1.75] flex-1">
                {m.desc}
              </p>

              {/* LinkedIn */}
              <div className="mt-6 pt-5 border-t border-white/10 w-full flex justify-center">
                <a
                  href="https://www.linkedin.com/company/admasons/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/40 hover:text-[#F5C518] transition-colors duration-200 text-[12px] font-medium"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team capabilities strip */}
        <div className="text-center mb-8">
          <p className="text-white/50 text-[15px]">
            <span className="font-semibold text-white">30+ Professionals</span> across Performance, Creative &amp; Technology
          </p>
        </div>

        {/* Marquee tags */}
        <div className="overflow-hidden marquee-wrapper">
          <div className="marquee-left flex items-center whitespace-nowrap">
            {[...tags, ...tags].map((tag, i) => (
              <span key={i} className="flex items-center">
                <span className="text-[13px] font-medium text-[#F5C518] px-4 tracking-wide">{tag}</span>
                <span className="text-[#F5C518]/30 text-xs">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
