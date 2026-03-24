"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "\u20b925,000",
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
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "\u20b950,000",
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
    cta: "Most Popular",
  },
  {
    name: "Premium",
    price: "\u20b91,00,000",
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
    cta: "Contact Sales",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-card via-card to-background relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose the plan that fits your business needs. All plans include 
            our commitment to deliver exceptional results.
          </p>
        </div>
        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={plan.name} className={`relative bg-background border rounded-2xl p-8 flex flex-col ${plan.highlighted ? 'shadow-xl shadow-primary/10 border-primary/40 ring-1 ring-primary/20' : 'border-white/[0.06]'}`}>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full inline-block" />
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.name === 'Premium' ? (
                <a
                  href="https://wa.me/919203793966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 rounded-xl text-center transition-colors mt-auto"
                >
                  Contact Sales
                </a>
              ) : (
                <a
                  href="#contact"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 rounded-xl text-center transition-colors mt-auto"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </a>
              )}
            </div>
          ))}
        </div>
        
        {/* Custom quote */}
        <p className="text-center text-muted-foreground mt-12">
          Need a custom solution?{" "}
          <a href="#contact" className="text-primary font-semibold hover:underline">
            Contact us for a custom quote
          </a>
        </p>
      </div>
    </section>
  )
}
