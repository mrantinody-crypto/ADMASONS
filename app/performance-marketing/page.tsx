"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft, BarChart3, Target, TrendingUp, DollarSign, Users, Zap, CheckCircle2 } from "lucide-react"

const metrics = [
  { label: "Average ROAS", value: "5.2x", icon: TrendingUp, description: "Return on ad spend across client campaigns" },
  { label: "CAC Reduction", value: "38%", icon: DollarSign, description: "Average customer acquisition cost decrease" },
  { label: "Revenue Growth", value: "250%", icon: BarChart3, description: "Average client revenue growth in 6 months" },
]

const funnelSteps = [
  { step: "01", title: "Awareness", description: "Targeted campaigns across Google, Meta & LinkedIn to reach your ideal audience at scale.", color: "from-blue-500/20 to-blue-600/5" },
  { step: "02", title: "Consideration", description: "Retargeting and content strategies that nurture leads and build trust with your brand.", color: "from-purple-500/20 to-purple-600/5" },
  { step: "03", title: "Conversion", description: "Optimized landing pages, A/B testing, and CRO to maximize every click into revenue.", color: "from-primary/20 to-amber-500/5" },
  { step: "04", title: "Retention", description: "Email automation, loyalty campaigns, and LTV optimization to keep customers coming back.", color: "from-green-500/20 to-green-600/5" },
]

const caseStudies = [
  {
    brand: "D2C Fashion Brand",
    result: "3.8x ROAS in 90 days",
    description: "Scaled Meta & Google Ads from ₹2L/month to ₹15L/month while maintaining profitability.",
    tags: ["Meta Ads", "Google Ads", "CRO"],
  },
  {
    brand: "SaaS Platform",
    result: "62% lower CAC",
    description: "Rebuilt the paid acquisition funnel with precise targeting and landing page optimization.",
    tags: ["LinkedIn Ads", "Landing Pages", "A/B Testing"],
  },
  {
    brand: "E-commerce Store",
    result: "₹1.2 Cr revenue in 6 months",
    description: "Full-funnel strategy from awareness to retention, driving consistent monthly growth.",
    tags: ["Full Funnel", "Email Marketing", "Retargeting"],
  },
]

const services = [
  "Google Ads (Search, Display, Shopping, YouTube)",
  "Meta Ads (Facebook & Instagram)",
  "LinkedIn Advertising",
  "Conversion Rate Optimization",
  "Landing Page Design & A/B Testing",
  "Marketing Analytics & Attribution",
  "Email Marketing Automation",
  "SEO & Organic Growth Strategy",
]

export default function PerformanceMarketingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="https://wa.me/919203793966"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Book Consultation
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0d0d15] to-[#0A0A0A]" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-muted-foreground mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              Performance Marketing
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Scale Revenue with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">
                Data-Driven
              </span>{" "}
              Marketing
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mb-10">
              We don&apos;t guess — we measure, optimize, and scale. Our performance marketing 
              strategies are built on data, driven by results, and designed to maximize your ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919203793966"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all">
                  <metric.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400 mb-2">
                  {metric.value}
                </p>
                <p className="text-lg font-semibold text-white mb-1">{metric.label}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel Explanation */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Full-Funnel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                Framework
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A systematic approach to turning ad spend into predictable, scalable revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funnelSteps.map((step) => (
              <div
                key={step.step}
                className={`bg-gradient-to-b ${step.color} border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all`}
              >
                <span className="text-5xl font-bold text-white/10 block mb-4">{step.step}</span>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Real{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                Results
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how we&apos;ve helped brands achieve measurable growth through performance marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.brand}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-primary/20 transition-all group"
              >
                <p className="text-sm text-muted-foreground mb-2">{study.brand}</p>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400 mb-4">
                  {study.result}
                </p>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                  Deliver
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                End-to-end performance marketing services designed to scale your business profitably.
              </p>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-white/90">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-3xl p-10 text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Ready to Scale?</h3>
                <p className="text-muted-foreground mb-8">
                  Book a free strategy session and get a custom growth plan for your brand.
                </p>
                <a
                  href="https://wa.me/919203793966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
              Growth Engine
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Stop guessing. Start scaling. Get a data-backed strategy tailored to your business.
          </p>
          <a
            href="https://wa.me/919203793966"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-5 rounded-lg text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} The AdMasons. All rights reserved.</p>
          <Link href="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </main>
  )
}
