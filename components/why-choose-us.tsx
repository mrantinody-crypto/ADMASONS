"use client"

import { BarChart3, Rocket, Lightbulb, Zap } from "lucide-react"

const reasons = [
  {
    icon: BarChart3,
    title: "Data-Driven Strategies",
    description: "Every decision backed by analytics and insights to ensure maximum impact and measurable results.",
  },
  {
    icon: Rocket,
    title: "ROI-Focused Campaigns",
    description: "We optimize every rupee spent to deliver the highest possible return on your marketing investment.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "Award-winning creative team that produces stunning visuals and compelling content that converts.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Agile processes that move at the speed of your business, delivering results without delays.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFD700 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Why Choose Ad Masons
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We combine creativity, technology, and strategy to deliver exceptional results for our clients.
          </p>
        </div>
        
        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-card border border-border rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
