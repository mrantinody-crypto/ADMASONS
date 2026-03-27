"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, TrendingUp } from "lucide-react"

const caseStudies = [
  {
    brand: "LuxeCart",
    industry: "E-Commerce / D2C",
    problem: "High CAC and low repeat purchases despite heavy ad spend on Meta and Google.",
    solution: "Rebuilt funnel with retargeting sequences, UGC-led creatives, and automated email flows.",
    result: "+327% ROAS",
    resultDetail: "in 60 days",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    brand: "Skyline Realty",
    industry: "Real Estate",
    problem: "Low quality leads from generic campaigns, sales team wasting time on unqualified prospects.",
    solution: "Hyper-local targeting with lead scoring, WhatsApp automation, and CRM integration.",
    result: "4.2x ROI",
    resultDetail: "on ad spend",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    brand: "MedPlus Clinic",
    industry: "Healthcare",
    problem: "Zero digital presence, all appointments were walk-ins or referral based only.",
    solution: "Built conversion-optimized landing page, ran Google Ads for local intent, set up appointment booking.",
    result: "180+ Leads",
    resultDetail: "per month",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    gradient: "from-blue-600 to-blue-600",
  },
  {
    brand: "BrightMinds Academy",
    industry: "EdTech",
    problem: "Instagram page was stagnant at 2K followers, no enquiries coming from social media.",
    solution: "Content calendar with reels strategy, paid promotions, and lead-gen ads with instant forms.",
    result: "25K Followers",
    resultDetail: "in 90 days",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    gradient: "from-blue-600 to-blue-600",
  },
  {
    brand: "Spice Kitchen",
    industry: "Hospitality / F&B",
    problem: "New restaurant with no online visibility, low footfall despite great food and location.",
    solution: "Google My Business optimization, Zomato/Swiggy listing, influencer seeding, and local ads.",
    result: "3x Footfall",
    resultDetail: "in 45 days",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    brand: "GlowUp Naturals",
    industry: "FMCG / Beauty",
    problem: "Product launch with zero brand awareness, needed fast market entry with limited budget.",
    solution: "Influencer marketing campaign, UGC content production, and targeted Meta ads with lookalike audiences.",
    result: "50K+ Reach",
    resultDetail: "first week",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    gradient: "from-violet-600 to-blue-600",
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

export function Portfolio() {
  const { ref: sectionRef, inView } = useInView(0.05)

  return (
    <section id="portfolio" className="py-28 bg-card/50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/3 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/3 rounded-full blur-[100px]" />

      <div ref={sectionRef} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Results That Speak{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              For Themselves
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Real campaigns. Real numbers. Here is how we have helped brands turn their
            marketing spend into measurable growth.
          </p>
        </div>

        {/* Case study cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.brand}
              className={`group relative overflow-hidden rounded-2xl bg-background border border-white/[0.06] hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
            >
              {/* Project image */}
              <div className="aspect-[16/10] bg-secondary relative overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.brand}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay with result */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold text-lg">{study.result}</span>
                    </div>
                  </div>
                </div>

                {/* Industry badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-background/80 backdrop-blur-sm text-xs font-semibold text-muted-foreground px-3 py-1.5 rounded-full border border-white/10">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Brand + Result */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-400 transition-colors duration-300">
                    {study.brand}
                  </h3>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${study.gradient}`}>
                      {study.result}
                    </p>
                    <p className="text-xs text-muted-foreground">{study.resultDetail}</p>
                  </div>
                </div>

                {/* Problem */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Our Solution</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "700ms" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 group"
            onClick={e => {
              e.preventDefault()
              const el = document.getElementById("contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Want Results Like These?
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
