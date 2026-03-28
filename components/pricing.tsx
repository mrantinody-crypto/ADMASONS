"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "\u20B925,000",
    period: "/month",
    description: "Perfect for small businesses just getting started with digital marketing.",
    features: [
      "Social Media Management (2 platforms)",
      "Basic Content Creation",
      "Monthly Performance Report",
      "Email Support",
      "Basic SEO Optimization",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "\u20B950,000",
    period: "/month",
    description: "Ideal for growing businesses looking to scale their digital presence.",
    features: [
      "Social Media Management (4 platforms)",
      "Performance Ads (Meta + Google)",
      "Advanced Content Creation",
      "Weekly Strategy Sessions",
      "Lead Generation Funnel",
      "Priority Support",
      "Conversion Optimization",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "\u20B91,00,000",
    period: "/month",
    description: "Complete marketing solution for established brands seeking dominance.",
    features: [
      "Everything in Growth",
      "Full Branding & Identity",
      "Custom Website Development",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Advanced Analytics Dashboard",
      "Influencer Marketing",
      "Video Content Production",
    ],
    highlighted: false,
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

export function Pricing() {
  const { ref: sectionRef, inView } = useInView(0.05)

  return (
    <section id="pricing" className="py-28 bg-gradient-to-b from-card/50 via-card/50 to-background relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/3 rounded-full blur-[120px]" />

      <div ref={sectionRef} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-700 text-pretty">
            Choose the plan that fits your business needs. All plans include
            our commitment to deliver exceptional results.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative bg-white/50 backdrop-blur-sm border rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlighted
                  ? "border-blue-500/40 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/20"
                  : "border-blue-200/[0.06] hover:border-blue-500/30 hover:shadow-blue-500/10"
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${idx * 120}ms` : "0ms" }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-900 to-blue-800 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-200/40">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
              <p className="text-gray-700 text-sm mb-4">{plan.description}</p>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800">{plan.price}</span>
                <span className="text-gray-700 ml-2">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-900" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.name === "Premium" ? (
                <a
                  href="https://wa.me/917770969267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full font-semibold py-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg shadow-blue-200/40 hover:shadow-blue-300/50"
                      : "bg-white/5 border border-blue-300 text-foreground hover:bg-blue-500/10 hover:border-blue-500/30"
                  }`}
                >
                  Contact Sales
                </a>
              ) : (
                <a
                  href="#contact"
                  className={`w-full font-semibold py-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-0.5 block ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg shadow-blue-200/40 hover:shadow-blue-300/50"
                      : "bg-white/5 border border-blue-300 text-foreground hover:bg-blue-500/10 hover:border-blue-500/30"
                  }`}
                  onClick={e => {
                    e.preventDefault()
                    const el = document.getElementById("contact")
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Get Started
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Custom quote */}
        <p className="text-center text-gray-700 mt-12">
          Need a custom solution?{" "}
          <a
            href="#contact"
            className="text-blue-900 font-semibold hover:text-blue-300 transition-colors"
            onClick={e => {
              e.preventDefault()
              const el = document.getElementById("contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contact us for a custom quote
          </a>
        </p>
      </div>
    </section>
  )
}





