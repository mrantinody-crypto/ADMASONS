"use client"

import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const missionPoints = [
  "Drive measurable growth for every client",
  "Build lasting brand equity",
  "Deliver creative excellence",
  "Stay ahead of digital trends",
]

const steps = [
  {
    number: "01",
    title: "Strategy",
    description: "Deep research and planning to understand your market and create a winning approach.",
  },
  {
    number: "02",
    title: "Execution",
    description: "Flawless implementation of campaigns with constant optimization for best results.",
  },
  {
    number: "03",
    title: "Growth",
    description: "Scale what works and continuously improve to maximize your business growth.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-primary/20">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Marketing team working together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Golden accent element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
            
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">5+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Years</p>
                  <p className="text-sm text-muted-foreground">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                We Build Brands That Matter
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Ad Masons is a results-driven marketing agency helping brands grow faster 
                through strategy, creativity, and performance marketing. We combine data 
                with creative excellence to deliver campaigns that convert.
              </p>
            </div>
            
            {/* Mission points */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              <ul className="space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 group">
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Our Approach */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Our Approach to Success
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                )}
                
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
