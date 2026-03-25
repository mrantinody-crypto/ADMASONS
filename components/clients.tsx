"use client"

import { useState, useCallback } from "react"

interface Brand {
  name: string
  icon?: string
  color?: string
}

const row1Brands: Brand[] = [
  { name: "Amazon", icon: "https://cdn.simpleicons.org/amazon/FF9900", color: "#FF9900" },
  { name: "Flipkart", icon: "https://cdn.simpleicons.org/flipkart/2874F0", color: "#2874F0" },
  { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/95BF47", color: "#95BF47" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4", color: "#4285F4" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900", color: "#FF9900" },
  { name: "Meta", icon: "https://cdn.simpleicons.org/meta/0081FB", color: "#0081FB" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/FFD43B", color: "#FFD43B" },
  { name: "Microsoft", icon: "https://cdn.simpleicons.org/microsoft/00A4EF", color: "#00A4EF" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack/E01E5A", color: "#E01E5A" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/FFFFFF", color: "#FFFFFF" },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF", color: "#635BFF" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF", color: "#FFFFFF" },
  { name: "Netflix", icon: "https://cdn.simpleicons.org/netflix/E50914", color: "#E50914" },
]

const row2Brands: Brand[] = [
  { name: "HCL", color: "#0073E6" },
  { name: "BMW", icon: "https://cdn.simpleicons.org/bmw/0066B1", color: "#0066B1" },
  { name: "JSW", color: "#2E5090" },
  { name: "Riot Games", icon: "https://cdn.simpleicons.org/riotgames/D32936", color: "#D32936" },
  { name: "Van Heusen", color: "#C8A96E" },
  { name: "Adobe", icon: "https://cdn.simpleicons.org/adobe/FF0000", color: "#FF0000" },
  { name: "Spotify", icon: "https://cdn.simpleicons.org/spotify/1DB954", color: "#1DB954" },
  { name: "Tesla", icon: "https://cdn.simpleicons.org/tesla/CC0000", color: "#CC0000" },
  { name: "Nike", icon: "https://cdn.simpleicons.org/nike/FFFFFF", color: "#FFFFFF" },
  { name: "Samsung", icon: "https://cdn.simpleicons.org/samsung/1428A0", color: "#1428A0" },
  { name: "Uber", icon: "https://cdn.simpleicons.org/uber/FFFFFF", color: "#FFFFFF" },
  { name: "Airbnb", icon: "https://cdn.simpleicons.org/airbnb/FF5A5F", color: "#FF5A5F" },
  { name: "Mini", icon: "https://cdn.simpleicons.org/mini/FFFFFF", color: "#FFFFFF" },
  { name: "Discord", icon: "https://cdn.simpleicons.org/discord/5865F2", color: "#5865F2" },
]

function BrandLogo({ brand }: { brand: Brand }) {
  const [imgError, setImgError] = useState(false)
  const handleError = useCallback(() => setImgError(true), [])

  if (brand.icon && !imgError) {
    return (
      <div className="flex items-center justify-center h-[70px] md:h-[90px] px-10 md:px-14 shrink-0 transition-transform duration-300 hover:scale-[1.1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brand.icon}
          alt={brand.name}
          className="h-[60px] md:h-[85px] w-auto max-w-[140px] md:max-w-[200px] object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
          loading="lazy"
          onError={handleError}
          draggable={false}
        />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center h-[70px] md:h-[90px] px-10 md:px-14 shrink-0 transition-transform duration-300 hover:scale-[1.1]">
      <span
        className="font-extrabold text-xl md:text-3xl tracking-wider whitespace-nowrap uppercase select-none drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
        style={{ color: brand.color || "#A78BFA" }}
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
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div className={`flex w-max ${animationClass}`}>
        {brands.map((brand, i) => (
          <BrandLogo key={`a-${brand.name}-${i}`} brand={brand} />
        ))}
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
      {/* Background accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-violet-500/4 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Our Clients
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Partnering with industry leaders and innovative startups to deliver
            exceptional digital results.
          </p>
        </div>

        {/* Scrolling logo rows */}
        <div className="space-y-12">
          <LogoTrack brands={row1Brands} direction="left" />
          <LogoTrack brands={row2Brands} direction="right" />
        </div>
      </div>
    </section>
  )
}
