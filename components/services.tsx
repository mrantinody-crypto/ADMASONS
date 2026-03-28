"use client"

import { ScrollFade } from "@/components/scroll-fade"
import {
  ShoppingCart,
  Target,
  Globe,
  Palette,
  Funnel,
  BarChart3,
} from "lucide-react"

const services = [
  {
    icon: ShoppingCart,
    title: "Amazon & Marketplace Growth",
    description:
      "PPC management, listing optimization, and growth strategy across Amazon India, UK, UAE + Flipkart & Quick Commerce.",
    badge: "Core Expertise",
  },
  {
    icon: Target,
    title: "Performance Advertising",
    description:
      "ROI-focused campaigns on Google & Meta with full-funnel tracking, creative testing, and bid optimization.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "High-converting websites and landing pages built for lead generation and e-commerce.",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description:
      "Brand positioning, visual identity, and creative systems that make your brand impossible to ignore.",
  },
  {
    icon: Funnel,
    title: "Lead Generation & Funnels",
    description:
      "Automated funnels with lead scoring, WhatsApp automation, and CRM integration.",
  },
  {
    icon: BarChart3,
    title: "Analytics & CRO",
    description:
      "Conversion optimization, A/B testing, and data-driven insights that turn traffic into revenue.",
  },
]

export function Services() {
  return (
    <section className="bg-white py-20 lg:py-28" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollFade>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5C518] mb-3">
              Our Services
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#1B2A4A] sm:text-4xl">
              What We Do
            </h2>
          </div>
        </ScrollFade>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollFade key={service.title} delay={i * 0.06}>
              <div
                className={`group relative rounded-lg border p-8 transition-all hover:shadow-md ${
                  service.badge
                    ? "border-[#F5C518]/40 bg-[#F5C518]/[0.03]"
                    : "border-[#E2E5EB] bg-white"
                }`}
              >
                {service.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#F5C518] bg-[#F5C518]/10 px-2.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <service.icon
                  size={28}
                  className="text-[#F5C518]"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 text-lg font-bold text-[#1B2A4A]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1B2A4A]/70">
                  {service.description}
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}
