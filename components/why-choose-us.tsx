"use client"

import { ScrollFade } from "@/components/scroll-fade"
import {
  Clock,
  ShoppingCart,
  Globe,
  Users,
  BarChart3,
  Layers,
} from "lucide-react"

const differentiators = [
  {
    icon: Clock,
    title: "9+ Years of Performance Marketing Experience",
    description:
      "Deep expertise across paid media, marketplace growth, and full-funnel strategy.",
  },
  {
    icon: ShoppingCart,
    title: "Marketplace Specialists",
    description:
      "Amazon, Flipkart, and Quick Commerce — we know the platforms inside out.",
  },
  {
    icon: Globe,
    title: "4 Global Markets",
    description:
      "India, UAE, UK, and USA — localized strategies for each market.",
  },
  {
    icon: Users,
    title: "Full In-House Team — 15+ Specialists",
    description:
      "Paid media, creative, analytics, and automation — all under one roof.",
  },
  {
    icon: BarChart3,
    title: "Data-First, Always",
    description:
      "Every decision backed by numbers. No guesswork, no vanity metrics.",
  },
  {
    icon: Layers,
    title: "From Audit to Scale",
    description:
      "End-to-end growth systems — we don't just run ads, we build revenue engines.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28" id="why-us">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollFade>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5C518] mb-3">
              The Difference
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#1B2A4A] sm:text-4xl">
              Why Brands Choose The AdMasons
            </h2>
          </div>
        </ScrollFade>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => (
            <ScrollFade key={item.title} delay={i * 0.06}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F5C518]/10">
                    <item.icon
                      size={20}
                      className="text-[#F5C518]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1B2A4A]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#1B2A4A]/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}
