"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
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
    price: "₹50,000",
    period: "/month",
    description: "Ideal for growing businesses looking to scale their digital presence.",
    features: [
      "Social Media Management (4 platforms)",
      "Performance Ads (Meta + Google)",
      "Advanced Content Creation",
      "Weekly Strategy Calls",
      "Lead Generation Funnel",
      "Priority Support",
      "Conversion Optimization",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Premium",
    price: "₹1,00,000",
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
    <section id="pricing" className="py-24 bg-card relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px]" />
      
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-2 border-primary shadow-xl shadow-primary/30 scale-105 lg:scale-105 z-10"
                  : "bg-background border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              {/* Plan name */}
              <h3 className={cn(
                "text-xl font-bold mb-2",
                plan.highlighted ? "text-primary-foreground" : "text-foreground"
              )}>
                {plan.name}
              </h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className={cn(
                  "text-4xl lg:text-5xl font-bold",
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                )}>
                  {plan.price}
                </span>
                <span className={cn(
                  "text-sm",
                  plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  {plan.period}
                </span>
              </div>
              
              {/* Description */}
              <p className={cn(
                "text-sm mb-6",
                plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                {plan.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={cn(
                      "w-5 h-5 flex-shrink-0 mt-0.5",
                      plan.highlighted ? "text-primary-foreground" : "text-primary"
                    )} />
                    <span className={cn(
                      "text-sm",
                      plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button
                className={cn(
                  "w-full font-semibold py-6",
                  plan.highlighted
                    ? "bg-background text-primary hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {plan.cta}
              </Button>
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
