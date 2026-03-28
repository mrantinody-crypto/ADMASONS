"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Users, Target, TrendingUp, Palette, Film, PenTool, Layers, Cog, Sparkles, Zap, BarChart3, Settings } from "lucide-react"

const founders = [
  {
    name: "Saba",
    role: "Co-Founder & CEO",
    description: "Leads performance strategy and scalable growth systems.",
    image: "/Team/saba.jpeg",
    gradient: "from-primary to-primary/90",
  },
  {
    name: "Abdullah",
    role: "Brand & Creative Head",
    description: "Drives creative direction, brand identity, and product systems.",
    image: "/Team/anti.jpeg",
    gradient: "from-primary/90 to-primary/80",
  },
  {
    name: "Amir",
    role: "Co-Founder",
    description: "Focuses on operations, execution, and growth architecture.",
    image: "/Team/amir.jpeg",
    gradient: "from-primary to-primary/90",
  },
]

const specialistTeams = [
  {
    title: "Paid Media",
    description: "Strategic ad management across all platforms",
    services: ["Google Ads", "Meta Ads", "Marketplace Ads"],
    icon: TrendingUp,
    color: "from-primary to-primary/90",
  },
  {
    title: "Social & Creative",
    description: "Content and creative that converts",
    services: ["Content Strategy", "Creative Production", "Branding"],
    icon: Palette,
    color: "from-primary to-primary/90",
  },
  {
    title: "Analytics & CRO",
    description: "Data-driven optimization and testing",
    services: ["Funnel Optimization", "Conversion Tracking", "A/B Testing"],
    icon: BarChart3,
    color: "from-primary to-primary/80",
  },
  {
    title: "Tech & Automation",
    description: "Systems that scale your business",
    services: ["CRM Integration", "WhatsApp Automation", "Server-side Tracking"],
    icon: Cog,
    color: "from-primary to-primary/70",
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
  const { ref: specialistRef, inView: specialistInView } = useInView(0.08)
  const { ref: extendedRef, inView: extendedInView } = useInView(0.08)
  const { ref: philRef, inView: philInView } = useInView(0.1)

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary via-transparent to-secondary" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* 1. HEADLINE */}
        <div ref={sectionRef} className={`text-center max-w-4xl mx-auto mb-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance leading-tight text-primary">
            We Don&apos;t Run Ads.{" "}
            <span className="text-primary">
              We Engineer Growth Systems.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8">
            The AdMasons operates at the intersection of performance, creativity, and technology to build scalable, high-converting brands.
          </p>
          
          {/* Core philosophy statement */}
          <div className="bg-secondary border border-border rounded-2xl p-8 mt-8">
            <p className="text-lg md:text-xl text-primary font-medium text-balance leading-relaxed">
              Most brands don&apos;t fail because of bad products.{" "}
              <span className="text-primary font-bold">
                They fail because of weak positioning and broken marketing systems.
              </span>
            </p>
          </div>
        </div>

        {/* 2. FOUNDERS & TEAM */}
        <div ref={teamRef} className="mb-24">
          <div className={`text-center mb-16 transition-all duration-700 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Leadership
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary">
              The Minds Behind The AdMasons
            </h3>
            <p className="text-lg text-muted-foreground">
              Strategy. Creative. Execution. One unified system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className={`group relative bg-background border border-border rounded-2xl p-8 text-center transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:-translate-y-2 hover:shadow-primary/10 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: teamInView ? `${index * 150}ms` : "0ms" }}
              >

                {/* Real team image */}
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 border-4 border-secondary">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="96px"
                  />
                </div>

                <h4 className="relative text-xl font-bold text-primary mb-1">{founder.name}</h4>
                <p className="relative text-sm font-semibold text-primary mb-3">{founder.role}</p>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SPECIALIST TEAMS SECTION */}
        <div ref={specialistRef} className="mb-24">
          <div className={`text-center mb-16 transition-all duration-700 ${specialistInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="h-1 w-24 bg-accent mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary">
              Specialist Teams That Drive Growth
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured like a growth engine — not individuals, but systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialistTeams.map((team, index) => {
              const Icon = team.icon
              return (
                <div
                  key={team.title}
                  className={`group relative bg-background border border-border rounded-2xl p-8 transition-all duration-500 hover:border-accent hover:shadow-lg hover:-translate-y-2 hover:shadow-primary/10 ${specialistInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: specialistInView ? `${index * 120}ms` : "0ms" }}
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-2xl" />
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <h4 className="text-xl font-bold text-primary mb-2">{team.title}</h4>
                  <p className="text-sm text-muted-foreground mb-6 h-10">{team.description}</p>

                  {/* Services list */}
                  <ul className="space-y-2">
                    {team.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* 4. EXTENDED TEAM */}
        <div ref={extendedRef} className="mb-24">
          <div className={`text-center mb-12 transition-all duration-700 ${extendedInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-3 bg-secondary border border-border rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">+ 15+ Specialists across Performance, Creative &amp; Technology</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {extendedTeamRoles.map((role, index) => (
              <div
                key={role.title}
                className={`group bg-background border border-border rounded-xl p-5 text-center hover:border-accent hover:-translate-y-1 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 ${extendedInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: extendedInView ? `${index * 80}ms` : "0ms" }}
              >
                <div className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/10 group-hover:border-accent transition-all duration-300">
                  <role.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <p className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">{role.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. PHILOSOPHY BLOCK */}
        <div ref={philRef} className={`mb-24 transition-all duration-700 ${philInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative max-w-4xl mx-auto bg-secondary border border-border rounded-3xl p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent rounded-full" />

            <Sparkles className="w-8 h-8 text-primary mx-auto mb-6 relative" />
            <blockquote className="relative text-xl md:text-2xl lg:text-3xl font-bold text-primary leading-relaxed mb-4 text-balance">
              &ldquo;Most brands don&apos;t fail because of bad products.{" "}
              <span className="text-primary">
                They fail because of weak positioning and broken marketing systems.
              </span>&rdquo;
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold px-8 py-4 rounded-xl group shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
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





