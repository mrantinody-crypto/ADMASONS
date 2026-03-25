"use client"

import { useEffect, useRef, useState } from "react"
import {
  Megaphone,
  Target,
  Globe,
  Palette,
  Camera,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Build a powerful social presence that engages your audience and drives conversions across all platforms.",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    icon: Target,
    title: "Performance Ads",
    description: "Data-driven Meta & Google advertising campaigns that maximize ROI and scale your business profitably.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "High-converting, beautifully designed websites that establish credibility and capture leads 24/7.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Palette,
    title: "Branding & Identity Design",
    description: "Create a memorable brand identity that stands out from competitors and resonates with your audience.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Compelling visual and written content that tells your brand story and keeps audiences engaged.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation Funnels",
    description: "Automated marketing funnels that capture, nurture, and convert leads into paying customers.",
    gradient: "from-violet-500 to-indigo-500",
  },
]

function useInView(threshold = 0.1) {
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

export function Services() {
  const { ref: sectionRef, inView } = useInView(0.05)

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-card/50 via-card/50 to-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/3 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/3 rounded-full blur-[120px]" />

      <div ref={sectionRef} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Comprehensive digital marketing solutions tailored to help your business
            grow faster and dominate your market.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-background/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
            >
              {/* Soft glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 via-blue-500/3 to-transparent transition-all duration-500" />

              <div className="relative z-10">
                {/* Gradient Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-violet-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
                {/* Learn More link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-violet-400 font-medium text-sm border border-white/[0.08] px-5 py-2.5 rounded-lg hover:bg-violet-500/10 hover:border-violet-500/20 transition-all duration-300 group/link"
                  onClick={e => {
                    e.preventDefault()
                    const el = document.getElementById("contact")
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
