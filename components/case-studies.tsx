"use client"

import { ScrollFade } from "@/components/scroll-fade"
import { TrendingUp, TrendingDown, Award } from "lucide-react"

interface Metric {
  label: string
  value: string
  direction: "up" | "down" | "award"
}

interface CaseStudy {
  category: string
  platform: string
  title: string
  metrics: Metric[]
  summary: string
}

const caseStudies: CaseStudy[] = [
  {
    category: "E-COMMERCE",
    platform: "AMAZON UAE",
    title: "Premium Bedding Brand",
    metrics: [
      { label: "ACOS", value: "42% → 18%", direction: "down" },
      { label: "Revenue", value: "+214%", direction: "up" },
      { label: "Best Seller", value: "#1 in Category", direction: "award" },
    ],
    summary:
      "Rebuilt campaign structure with negative keyword optimization and bid strategy overhaul.",
  },
  {
    category: "BABY & KIDS",
    platform: "AMAZON INDIA",
    title: "Baby Products Portfolio",
    metrics: [
      { label: "Revenue Growth", value: "+340%", direction: "up" },
      { label: "ACOS", value: "38% → 15%", direction: "down" },
      { label: "SKUs Scaled", value: "12 → 45", direction: "up" },
    ],
    summary:
      "Full catalog optimization with dayparting, placement modifiers, and seasonal campaigns.",
  },
  {
    category: "STATIONERY",
    platform: "AMAZON UK",
    title: "Stationery Brand",
    metrics: [
      { label: "ROAS", value: "2.1x → 5.8x", direction: "up" },
      { label: "Impressions", value: "+420%", direction: "up" },
      { label: "Ranking", value: "Page 1 for 18 keywords", direction: "award" },
    ],
    summary:
      "Launch strategy with Sponsored Products, Brands, and Display across UK marketplace.",
  },
  {
    category: "D2C BRAND",
    platform: "META + GOOGLE",
    title: "Fashion D2C Brand",
    metrics: [
      { label: "ROAS", value: "1.2x → 4.7x", direction: "up" },
      { label: "CAC", value: "-62%", direction: "down" },
      { label: "Revenue", value: "+327%", direction: "up" },
    ],
    summary:
      "Full-funnel Meta + Google strategy with lookalike audiences, retargeting, and creative testing.",
  },
  {
    category: "LOCAL BUSINESS",
    platform: "GOOGLE ADS + GMB",
    title: "Multi-Location Clinic",
    metrics: [
      { label: "Leads/Month", value: "15 → 120+", direction: "up" },
      { label: "Cost per Lead", value: "-71%", direction: "down" },
      { label: "GMB Views", value: "+580%", direction: "up" },
    ],
    summary:
      "Google Search + Maps campaigns with call tracking, GMB optimization, and review management.",
  },
  {
    category: "HEALTHCARE",
    platform: "GOOGLE + META",
    title: "Healthcare SaaS",
    metrics: [
      { label: "Demo Bookings", value: "+245%", direction: "up" },
      { label: "CPL", value: "₹1,200 → ₹380", direction: "down" },
      { label: "Pipeline Value", value: "+₹1.2Cr", direction: "up" },
    ],
    summary:
      "B2B lead gen with LinkedIn + Google Search, landing page optimization, and lead scoring.",
  },
]

function MetricIcon({ direction }: { direction: string }) {
  if (direction === "up")
    return <TrendingUp size={14} className="text-emerald-400" />
  if (direction === "down")
    return <TrendingDown size={14} className="text-emerald-400" />
  return <Award size={14} className="text-[#F5C518]" />
}

export function CaseStudies() {
  return (
    <section className="bg-[#1B2A4A] py-20 lg:py-28" id="results">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollFade>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5C518] mb-3">
              Case Studies
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
              Results That Compound
            </h2>
          </div>
        </ScrollFade>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <ScrollFade key={study.title} delay={i * 0.06}>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 lg:p-8">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#F5C518]">
                  <span>{study.category}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-white/50">{study.platform}</span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">
                  {study.title}
                </h3>

                <div className="mt-5 space-y-3">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-xs text-white/50">
                        {metric.label}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <MetricIcon direction={metric.direction} />
                        <span className="text-sm font-semibold text-white">
                          {metric.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-xs leading-relaxed text-white/40 italic">
                    &ldquo;{study.summary}&rdquo;
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
