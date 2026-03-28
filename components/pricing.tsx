"use client"

import { ScrollFade } from "@/components/scroll-fade"
import { Check } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "/month",
    description: "For brands getting started with performance marketing.",
    features: [
      "1 platform (Google OR Meta OR Amazon)",
      "Campaign setup & management",
      "Monthly performance reports",
      "Keyword/audience research",
      "Bi-weekly strategy calls",
      "Up to ₹2L ad spend management",
    ],
  },
  {
    name: "Growth",
    price: "₹50,000",
    period: "/month",
    description: "For scaling brands that need multi-platform growth.",
    features: [
      "Up to 3 platforms",
      "Advanced campaign optimization",
      "Weekly performance reports",
      "A/B testing & creative strategy",
      "Landing page recommendations",
      "Weekly strategy calls",
      "Up to ₹5L ad spend management",
      "Dedicated account manager",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹1,00,000",
    period: "/month",
    description: "For established brands requiring full-stack growth systems.",
    features: [
      "All platforms included",
      "Full-funnel campaign architecture",
      "Real-time dashboards & reporting",
      "Creative production support",
      "CRO & landing page optimization",
      "WhatsApp/CRM automation",
      "Unlimited strategy calls",
      "Up to ₹15L ad spend management",
      "Dedicated team of 3+ specialists",
    ],
  },
]

export function Pricing() {
  return (
    <section className="bg-white py-20 lg:py-28" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollFade>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5C518] mb-3">
              Pricing
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#1B2A4A] sm:text-4xl">
              Transparent Plans That Scale With You
            </h2>
          </div>
        </ScrollFade>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <ScrollFade key={tier.name} delay={i * 0.08}>
              <div
                className={`relative rounded-lg border p-8 h-full flex flex-col ${
                  tier.highlighted
                    ? "border-[#F5C518] bg-[#F5C518]/[0.02] shadow-sm"
                    : "border-[#E2E5EB]"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1B2A4A] bg-[#F5C518] px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-[#1B2A4A]">
                    {tier.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#1B2A4A]">
                      {tier.price}
                    </span>
                    <span className="text-sm text-[#1B2A4A]/50">
                      {tier.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[#1B2A4A]/60">
                    {tier.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-[#1B2A4A]/70"
                    >
                      <Check
                        size={16}
                        className="flex-shrink-0 mt-0.5 text-[#F5C518]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block w-full text-center rounded-md py-3 text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-[#F5C518] text-[#1B2A4A] hover:bg-[#F5C518]/90"
                      : "bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade delay={0.3}>
          <p className="mt-10 text-center text-sm text-[#1B2A4A]/50">
            Need a custom plan?{" "}
            <a
              href="#contact"
              className="text-[#F5C518] font-medium hover:underline"
            >
              Let&apos;s talk.
            </a>
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}
