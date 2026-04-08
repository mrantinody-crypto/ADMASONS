'use client'

import { useEffect, useRef } from 'react'
import { Linkedin } from 'lucide-react'

const members = [
  {
    name: 'Saba',
    role: 'Founder',
    initials: 'S',
    desc: 'Visionary behind AdMasons — leads overall growth strategy, client partnerships, and the systems that turn marketing spend into compounding, measurable ROI.',
    linkedin: 'https://www.linkedin.com/in/saba-ansari-6224951b1',
  },
  {
    name: 'Abdullah',
    role: 'Creative Head',
    initials: 'Ab',
    desc: 'Shapes brand identity, visual storytelling, and creative strategy — bridging design thinking with performance to craft campaigns that convert and resonate.',
    linkedin: 'https://www.linkedin.com/in/antinodyy',
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
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Lightweight IntersectionObserver — no GSAP, no scroll blocking
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
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="bg-[#1B2A4A] py-[80px]">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="fade-target text-center mb-14" data-delay="0">
          <p className="label mb-4">Leadership</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-display font-bold text-white">
            The Minds Behind The AdMasons
          </h2>
        </div>

        {/* Cards — 2-col desktop, stacked mobile */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] mx-auto mb-14"
        >
          {members.map((m, idx) => (
            <div
              key={m.name}
              data-delay={idx * 120}
              className="fade-target team-card bg-[#243656] border border-white/8 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[rgba(245,197,24,0.35)] transition-colors duration-300 hover:-translate-y-1"
            >
              {/* Initials avatar */}
              <div className="w-20 h-20 rounded-full border-2 border-[#F5C518] bg-[#1B2A4A] flex items-center justify-center mb-5 flex-shrink-0">
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

              {/* LinkedIn — premium yellow button */}
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-[#F5C518] text-[#1B2A4A] font-semibold text-[12px] tracking-wide px-5 py-2.5 rounded-lg hover:bg-[#FFD84D] hover:shadow-[0_4px_16px_rgba(245,197,24,0.3)] transition-all duration-200"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Team capabilities strip */}
        <div className="fade-target text-center mb-8" data-delay="200">
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
