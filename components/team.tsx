'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Linkedin, User } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const members = [
  {
    role: 'CO-FOUNDER & CEO',
    initials: 'AS',
    desc: 'Leads performance strategy, client growth architecture, and scalable systems that drive measurable ROI across global markets.',
  },
  {
    role: 'CO-FOUNDER & CMO',
    initials: 'CM',
    desc: 'Drives marketplace growth, Amazon PPC strategy, and full-funnel performance marketing with 9+ years of hands-on experience scaling brands across 4 countries.',
  },
  {
    role: 'BRAND & CREATIVE HEAD · FULL-STACK DEVELOPER',
    initials: 'BH',
    desc: 'Bridges the gap between creative vision and technical execution — from brand identity systems and UI/UX design to custom web development and product builds.',
  },
  {
    role: 'HEAD OF MARKETING',
    initials: 'HM',
    desc: 'Spearheads go-to-market strategy, content marketing, and lead generation systems — turning brand presence into pipeline and pipeline into revenue.',
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
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true } }
      )

      const cards = cardsRef.current?.querySelectorAll('.team-card')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true } }
        )

        const avatars = cardsRef.current?.querySelectorAll('.avatar-circle')
        if (avatars) {
          gsap.fromTo(avatars,
            { scale: 0.7, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)',
              scrollTrigger: { trigger: cardsRef.current, start: 'top 78%', once: true }, delay: 0.2 }
          )
        }
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="bg-[#1B2A4A] py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <p className="label mb-4">Leadership</p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-display font-bold text-white">
            The Minds Behind The AdMasons
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {members.map((m) => (
            <div
              key={m.role}
              className="team-card bg-[#243656] border border-white/8 rounded-2xl p-6 flex flex-col hover:border-[rgba(245,197,24,0.35)] transition-all duration-300 hover:-translate-y-1"
              style={{ opacity: 0 }}
            >
              {/* Avatar */}
              <div className="avatar-circle w-16 h-16 rounded-full border-2 border-[#F5C518] bg-[#1B2A4A] flex items-center justify-center mb-4 flex-shrink-0" style={{ opacity: 0 }}>
                <User size={28} strokeWidth={1.5} className="text-[#F5C518]" />
              </div>

              {/* Role */}
              <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#F5C518] mb-3 leading-relaxed">
                {m.role}
              </span>

              {/* Description */}
              <p className="text-[13.5px] text-white/60 leading-[1.7] flex-1">
                {m.desc}
              </p>

              {/* LinkedIn */}
              <div className="mt-5 pt-4 border-t border-white/10">
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
