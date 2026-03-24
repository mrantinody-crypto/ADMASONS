"use client"

import { useState, useCallback } from "react"

interface Brand {
  name: string
  icon?: string
}

const row1Brands: Brand[] = [
  { name: "Amazon", icon: "https://cdn.simpleicons.org/amazon/white" },
  { name: "Flipkart", icon: "https://cdn.simpleicons.org/flipkart/white" },
  { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/white" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/white" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/white" },
  { name: "Meta", icon: "https://cdn.simpleicons.org/meta/white" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/white" },
  { name: "Make" },
  { name: "Voiceflow" },
  { name: "Retell AI" },
  { name: "n8n" },
  { name: "HighLevel" },
  { name: "VAPI" },
  { name: "ThisThat" },
  { name: "Later" },
]

const row2Brands: Brand[] = [
  { name: "HCL" },
  { name: "BMW", icon: "https://cdn.simpleicons.org/bmw/white" },
  { name: "JSW" },
  { name: "Schindler" },
  { name: "Riot Games", icon: "https://cdn.simpleicons.org/riotgames/white" },
  { name: "Van Heusen" },
  { name: "Dalmia Cement" },
  { name: "Tobias" },
  { name: "Order'n Go" },
  { name: "ViaPhoton" },
  { name: "MyCubes" },
  { name: "AS Watson" },
  { name: "LogiCmines" },
  { name: "BioQube" },
  { name: "Mini", icon: "https://cdn.simpleicons.org/mini/white" },
  { name: "ET" },
]

function BrandLogo({ brand }: { brand: Brand }) {
  const [imgError, setImgError] = useState(false)
  const handleError = useCallback(() => setImgError(true), [])

  if (brand.icon && !imgError) {
    return (
      <div className="flex items-center justify-center h-[30px] md:h-[50px] px-6 md:px-10 shrink-0 group/logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brand.icon}
          alt={brand.name}
          className="h-6 md:h-9 w-auto max-w-[100px] md:max-w-[140px] object-contain opacity-40 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 group-hover/logo:scale-110 group-hover/logo:drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]"
          loading="lazy"
          onError={handleError}
          draggable={false}
        />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center h-[30px] md:h-[50px] px-6 md:px-10 shrink-0 group/logo">
      <span
        className="text-white/30 font-bold text-xs md:text-base tracking-widest whitespace-nowrap uppercase transition-all duration-300 select-none group-hover/logo:text-primary group-hover/logo:scale-110 group-hover/logo:drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]"
        role="img"
        aria-label={brand.name}
      >
        {brand.name}
      </span>
    </div>
  )
}

function LogoTrack({
  brands,
  direction,
}: {
  brands: Brand[]
  direction: "left" | "right"
}) {
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right"

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className={`flex w-max ${animationClass}`}>
        {/* First set */}
        {brands.map((brand, i) => (
          <BrandLogo key={`a-${brand.name}-${i}`} brand={brand} />
        ))}
        {/* Duplicate set for seamless loop */}
        {brands.map((brand, i) => (
          <BrandLogo key={`b-${brand.name}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  )
}

export function Clients() {
  return (
    <section
      id="clients"
      className="py-24 bg-background relative overflow-hidden"
      aria-label="Our Clients"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Partnering with industry leaders and innovative startups to deliver
            exceptional digital results.
          </p>
        </div>

        {/* Scrolling logo rows */}
        <div className="space-y-10">
          <LogoTrack brands={row1Brands} direction="left" />
          <LogoTrack brands={row2Brands} direction="right" />
        </div>
      </div>
    </section>
  )
}
