"use client"

import { ScrollFade } from "@/components/scroll-fade"

const stats = [
  { value: "150+", label: "Campaigns" },
  { value: "50+", label: "Clients" },
  { value: "4", label: "Markets" },
  { value: "₹2Cr+", label: "Ad Spend Managed" },
]

export function Hero() {
  return (
    <section className="relative bg-[#1B2A4A] pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollFade>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5C518] mb-6">
            Performance Marketing & Growth Consulting
          </p>
        </ScrollFade>

        <ScrollFade delay={0.1}>
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
            We Engineer Growth Systems for Brands That Sell Online.
          </h1>
        </ScrollFade>

        <ScrollFade delay={0.2}>
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
            Performance marketing, marketplace growth, and full-funnel brand
            architecture — across Amazon, Quick Commerce, Google & Meta.
            Serving brands in India, UAE, UK & USA.
          </p>
        </ScrollFade>

        <ScrollFade delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#F5C518] px-7 py-3.5 text-sm font-semibold text-[#1B2A4A] transition-colors hover:bg-[#F5C518]/90"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#results"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              See Our Work
            </a>
          </div>
        </ScrollFade>

        {/* Stats Bar */}
        <ScrollFade delay={0.4}>
          <div className="mt-16 pt-10 border-t border-white/10">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
