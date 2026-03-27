"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart3, Rocket, Lightbulb, Zap, TrendingUp, Target } from "lucide-react"

const reasons = [
  {
    icon: BarChart3,
    title: "Data-Driven Strategies",
    description: "Every decision backed by analytics and insights to ensure maximum impact and measurable results.",
    gradient: "from-blue-500 to-blue-500",
    glowColor: "violet",
  },
  {
    icon: Rocket,
    title: "ROI-Focused Campaigns",
    description: "We optimize every rupee spent to deliver the highest possible return on your marketing investment.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "blue",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "Award-winning creative team that produces stunning visuals and compelling content that converts.",
    gradient: "from-blue-500 to-blue-500",
    glowColor: "purple",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Agile processes that move at the speed of your business, delivering results without delays.",
    gradient: "from-blue-500 to-blue-500",
    glowColor: "indigo",
  },
]

const metrics = [
  { value: "150+", label: "Campaigns Delivered", icon: Target },
  { value: "5x", label: "Average ROI", icon: TrendingUp },
  { value: "\u20B92Cr+", label: "Ad Spend Managed", icon: BarChart3 },
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

export function WhyChooseUs() {
  const { ref: sectionRef, inView } = useInView(0.1)

  return (
    <section className="py-28 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Soft ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/3 rounded-full blur-[200px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/3 rounded-full blur-[150px]" />

      <div ref={sectionRef} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Why Brands Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              The AdMasons
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional results that actually move the needle for your business.
          </p>
        </div>

        {/* Reasons grid - interactive cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group relative bg-card/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 text-center transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 cursor-default ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${index * 120}ms` : "0ms" }}
            >
              {/* Hover glow background */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 via-blue-500/5 to-transparent transition-all duration-500" />

              {/* Gradient icon container */}
              <div className={`relative w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <reason.icon className="w-10 h-10 text-white" />
                {/* Pulse ring on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold mb-3 text-foreground group-hover:text-white transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics bar */}
        <div className={`mt-20 grid md:grid-cols-3 gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "500ms" }}>
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group relative bg-card/30 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 text-center hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/3 to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <metric.icon className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
                  {metric.value}
                </p>
                <p className="text-muted-foreground font-medium">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
