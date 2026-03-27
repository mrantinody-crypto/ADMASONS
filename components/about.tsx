"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Users, Target, TrendingUp, Palette, Film, PenTool, Layers, Cog, Sparkles } from "lucide-react"

const founders = [
  {
    name: "Saba",
    role: "Co-Founder & CEO",
    description: "Leads performance strategy and scalable growth systems.",
    image: "/Team/saba.jpeg",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    name: "Anti",
    role: "Brand & Creative Head",
    description: "Drives creative direction, brand identity, and product systems.",
    image: "/Team/anti.jpeg",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Amir",
    role: "Co-Founder",
    description: "Focuses on operations, execution, and growth architecture.",
    image: "/Team/amir.jpeg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Saud",
    role: "Head of Performance Marketing",
    description: "Leads paid media, optimization, and campaign scaling.",
    image: "/Team/saud.jpeg",
    gradient: "from-indigo-500 to-violet-500",
  },
]

const extendedTeamRoles = [
  { title: "Performance Strategists", icon: Target },
  { title: "Media Buyers", icon: TrendingUp },
  { title: "Creative Designers", icon: Palette },
  { title: "Video Editors", icon: Film },
  { title: "Copywriters", icon: PenTool },
  { title: "Funnel Builders", icon: Layers },
  { title: "Automation Experts", icon: Cog },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export function About() {
  const { ref: sectionRef, inView } = useInView(0.05)
  const { ref: teamRef, inView: teamInView } = useInView(0.08)
  const { ref: extendedRef, inView: extendedInView } = useInView(0.08)
  const { ref: philRef, inView: philInView } = useInView(0.1)

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/[0.02] via-transparent to-blue-500/[0.02]" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-violet-500/3 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* 1. HEADLINE */}
        <div ref={sectionRef} className={`text-center max-w-4xl mx-auto mb-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance leading-tight">
            We Don&apos;T Run Ads.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400">
              We Engineer Growth Systems.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8">
            The AdMasons operates at the intersection of performance, creativity, and technology to build scalable, high-converting brands.
          </p>
          
          {/* Core philosophy statement */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm mt-8">
            <p className="text-lg md:text-xl text-white/90 font-medium text-balance leading-relaxed">
              Most brands don&apos;t fail because of bad products.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300">
                They fail because of weak positioning and broken marketing systems.
              </span>
            </p>
          </div>
        </div>

        {/* 2. FOUNDERS & TEAM */}
        <div ref={teamRef} className="mb-24">
          <div className={`text-center mb-16 transition-all duration-700 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Leadership
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              The Minds Behind The AdMasons
            </h3>
            <p className="text-lg text-muted-foreground">
              Strategy. Creative. Execution. One unified system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className={`group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 text-center transition-all duration-500 hover:border-violet-500/30 hover:-translate-y-3 hover:shadow-2xl hover:shadow-violet-500/15 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: teamInView ? `${index * 150}ms` : "0ms" }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 via-blue-500/5 to-transparent transition-all duration-500" />
                {/* Gradient border glow on hover */}
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500`} />

                {/* Real team image */}
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="96px"
                  />
                  {/* Gradient overlay on bottom */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  {/* Gradient ring */}
                  <div className={`absolute inset-0 rounded-2xl ring-2 ring-white/10 group-hover:ring-violet-500/40 transition-all duration-500`} />
                </div>

                <h4 className="relative text-xl font-bold text-foreground mb-1">{founder.name}</h4>
                <p className="relative text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 mb-3">{founder.role}</p>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. EXTENDED TEAM */}
        <div ref={extendedRef} className="mb-24">
          <div className={`text-center mb-12 transition-all duration-700 ${extendedInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-3 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-violet-400" />
              <span className="text-foreground font-semibold">+ 15+ Specialists across Performance, Creative &amp; Technology</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {extendedTeamRoles.map((role, index) => (
              <div
                key={role.title}
                className={`group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-xl p-5 text-center hover:border-violet-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 ${extendedInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: extendedInView ? `${index * 80}ms` : "0ms" }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500/15 to-blue-500/15 border border-violet-500/15 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-violet-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <role.icon className="w-5 h-5 text-violet-400" />
                </div>
                <p className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{role.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. PHILOSOPHY BLOCK */}
        <div ref={philRef} className={`mb-24 transition-all duration-700 ${philInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 md:p-16 text-center overflow-hidden">
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />

            <Sparkles className="w-8 h-8 text-violet-400 mx-auto mb-6 relative" />
            <blockquote className="relative text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-relaxed mb-4 text-balance">
              &ldquo;Most brands don&apos;t fail because of bad products.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                They fail because of weak positioning and broken marketing systems.
              </span>&rdquo;
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl group shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
            onClick={e => {
              e.preventDefault()
              const el = document.getElementById("contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Let&apos;s Talk Strategy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
