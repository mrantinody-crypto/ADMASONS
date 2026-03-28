"use client"

import { useEffect, useRef, useState } from "react"
import {
  TrendingUp,
  Palette,
  BarChart3,
  Zap,
} from "lucide-react"

const corePillars = [
  {
    icon: TrendingUp,
    title: "Performance Leadership",
    description: "We lead with data, not assumptions. Every campaign, funnel, and decision is aligned to revenue outcomes and measurable growth.",
  },
  {
    icon: Palette,
    title: "Creative Intelligence",
    description: "Creative is not just design — it's conversion strategy. We build brand systems that attract, engage, and convert consistently.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Core",
    description: "Every move is backed by real-time insights, attribution clarity, and performance tracking. No guesswork. No vanity metrics.",
  },
  {
    icon: Zap,
    title: "Automation & Scale Systems",
    description: "From CRM integrations to automated funnels, we build infrastructure that scales operations without increasing complexity.",
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

export function OperatorsCore() {
  const { ref: sectionRef, inView } = useInView(0.05)

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div ref={sectionRef} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary text-balance">
            Built by Operators. Driven by Results.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            We're not a personality-led agency. We're a performance system engineered for scale.
          </p>
        </div>

        {/* Core pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {corePillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative bg-white border border-border rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
            >
              {/* Top yellow accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line statement */}
        <div className={`text-center max-w-2xl mx-auto border-t border-border pt-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: inView ? "400ms" : "0ms" }}>
          <p className="text-lg md:text-xl text-primary font-semibold mb-3">
            Bottom Line
          </p>
          <p className="text-lg text-muted-foreground text-pretty">
            We act as your embedded growth team — not a vendor. Strategy, execution, and accountability under one roof.
          </p>
        </div>
      </div>
    </section>
  )
}
