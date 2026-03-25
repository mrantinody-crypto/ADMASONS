"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle, ArrowRight, Shield, Zap, BarChart3 } from "lucide-react"

const differentiators = [
  {
    icon: BarChart3,
    text: "We track every rupee to real revenue - not vanity metrics",
  },
  {
    icon: Shield,
    text: "Transparent reporting with no hidden costs or agency fluff",
  },
  {
    icon: Zap,
    text: "Rapid execution - your campaigns go live in days not weeks",
  },
  {
    icon: CheckCircle,
    text: "Dedicated strategist for every account, not a junior on rotation",
  },
]

const steps = [
  {
    number: "01",
    title: "Deep-Dive Audit",
    description: "We analyze your current marketing, competitors, and audience to find the biggest opportunities hiding in plain sight.",
  },
  {
    number: "02",
    title: "Strategic Execution",
    description: "We build and launch campaigns with precision - testing, iterating, and optimizing every element for maximum performance.",
  },
  {
    number: "03",
    title: "Scale & Compound",
    description: "Once we find what works, we pour fuel on it. More budget to winners, cut the losers, and compound your growth month over month.",
  },
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
  const { ref: sectionRef, inView } = useInView(0.08)
  const { ref: stepsRef, inView: stepsInView } = useInView(0.1)

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/[0.02] via-transparent to-blue-500/[0.02]" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-violet-500/3 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-white/[0.06] shadow-2xl shadow-violet-500/5">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Marketing team working together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Gradient accent element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-violet-500/15 rounded-2xl -z-10" />

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-white/[0.08] rounded-2xl p-6 shadow-xl shadow-violet-500/5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Years</p>
                  <p className="text-sm text-muted-foreground">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
            <div>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
                Most Brands Don''t Need More Traffic.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                  They Need Better Strategy.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                We started Ad Masons because we saw too many brands throwing money at ads 
                without a plan. Agencies were selling impressions and followers while businesses 
                needed leads and revenue. We decided to build the agency we''d hire ourselves - 
                one that treats your budget like our own and measures success in rupees, not likes.
              </p>
            </div>

            {/* Differentiators */}
            <div className="space-y-4">
              {differentiators.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-violet-500/40 transition-all duration-300">
                    <point.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed pt-1.5">{point.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl group shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
              onClick={e => {
                e.preventDefault()
                const el = document.getElementById("contact")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Let''s Talk Strategy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Our Approach */}
        <div ref={stepsRef} className="mt-28">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              How We Turn Ad Spend Into Revenue
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative group transition-all duration-500 ${stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: stepsInView ? `${index * 150}ms` : "0ms" }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-violet-500/30 to-violet-500/5" />
                )}

                <div className="bg-card/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 text-center hover:border-violet-500/30 transition-all duration-300 group-hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/5">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-blue-500 group-hover:border-transparent group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/25 transition-all duration-300">
                    <span className="text-2xl font-bold text-violet-400 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
