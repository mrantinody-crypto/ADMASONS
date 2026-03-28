"use client"

import { ScrollFade } from "@/components/scroll-fade"
import {
  ShoppingCart,
  Search,
  Share2,
  Zap,
  Package,
  ShoppingBag,
} from "lucide-react"

const platforms = [
  { name: "Amazon Ads", icon: ShoppingCart },
  { name: "Flipkart", icon: Package },
  { name: "Google Ads", icon: Search },
  { name: "Meta Ads", icon: Share2 },
  { name: "Shopify", icon: ShoppingBag },
  { name: "Quick Commerce", icon: Zap },
]

export function Platforms() {
  return (
    <section className="bg-[#F7F8FA] py-20 lg:py-24" id="platforms">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollFade>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5C518] mb-3">
              Certified Partners
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#1B2A4A] sm:text-4xl">
              Where We Operate
            </h2>
          </div>
        </ScrollFade>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {platforms.map((platform, i) => (
            <ScrollFade key={platform.name} delay={i * 0.05}>
              <div className="flex flex-col items-center gap-3 rounded-lg border border-[#E2E5EB] bg-white p-6 transition-shadow hover:shadow-sm">
                <platform.icon
                  size={32}
                  className="text-[#1B2A4A]"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium text-[#1B2A4A]">
                  {platform.name}
                </span>
              </div>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade delay={0.3}>
          <p className="mt-10 text-center text-sm text-[#1B2A4A]/60">
            Google Partner · Meta Business Partner · Amazon Ads Verified
          </p>
        </ScrollFade>

        <ScrollFade delay={0.35}>
          <p className="mt-6 text-center text-base font-medium text-[#1B2A4A]/70">
            Trusted by 50+ brands across India, UAE, UK & USA
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}
