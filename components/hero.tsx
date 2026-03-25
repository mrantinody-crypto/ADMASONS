"use client"

import Link from "next/link"
import { ArrowRight, Play, BarChart3, Palette, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08080C] via-[#0d0d1a] to-[#08080C]" />

      {/* Soft ambient glows - purple-blue palette */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/6 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/4 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full animate-pulse" />
              Trusted by 100+ Growing Brands
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              We Build Brands That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 relative">
                Dominate
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="url(#hero-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="hero-underline" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8B5CF6" />
                      <stop offset="0.5" stopColor="#7C3AED" />
                      <stop offset="1" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              the Digital World
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              The AdMasons helps businesses scale with performance marketing, branding,
              and high-converting digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/919203793966"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 font-semibold px-8 py-4 text-lg group rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="border border-white/15 text-foreground hover:bg-white/5 font-semibold px-8 py-4 text-lg group rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5"
                onClick={e => {
                  e.preventDefault()
                  const el = document.getElementById("portfolio")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 mt-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">150+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">5x</p>
                <p className="text-sm text-muted-foreground mt-1">Average ROI</p>
              </div>
            </div>
          </div>

          {/* Right content - Animated Floating Dashboard */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  backgroundImage: `linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }}
              />

              {/* Central glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]" />
              <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px]" />

              {/* Floating Card 1 - ROAS */}
              <div className="absolute top-6 left-2">
                <div className="animate-float-1 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-5 shadow-2xl shadow-violet-500/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">Campaign ROAS</span>
                  </div>
                  <p className="text-3xl font-bold text-emerald-400">+327%</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] text-emerald-400/80 font-medium">Live Campaign</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Revenue */}
              <div className="absolute top-16 right-0">
                <div className="animate-float-2 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-5 shadow-2xl shadow-blue-500/10">
                  <span className="text-xs text-muted-foreground font-medium">Revenue Generated</span>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 mt-1">₹2.4Cr</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
                    </div>
                    <span className="text-[11px] text-muted-foreground">85%</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 - ROI */}
              <div className="absolute bottom-28 left-6">
                <div className="animate-float-3 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-5 shadow-2xl shadow-purple-500/10">
                  <span className="text-xs text-muted-foreground font-medium">ROI Multiple</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-4xl font-bold text-white">5x</p>
                    <span className="text-sm text-emerald-400 font-semibold">↑ 240%</span>
                  </div>
                </div>
              </div>

              {/* Mini Chart Element */}
              <div className="absolute bottom-4 right-6">
                <div className="animate-float-4 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 shadow-2xl">
                  <span className="text-[11px] text-muted-foreground font-medium block mb-2">Monthly Growth</span>
                  <div className="flex items-end gap-[3px] h-14 px-1">
                    {[30, 45, 35, 60, 50, 75, 65, 85, 78, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-violet-500/80 to-blue-400/80 rounded-sm min-w-[4px]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Notification Mini Card */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2">
                <div className="animate-float-5 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-xl px-4 py-3 shadow-2xl flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/25 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Campaign Optimized</p>
                    <p className="text-[10px] text-muted-foreground">ROAS increased by 47%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -- DUAL CTA PANELS -- */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 lg:mt-20">
          {/* CTA 1 - Performance / Professional - IMPROVED VISIBILITY */}
          <Link
            href="/performance-marketing"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0e0e1a] p-8 md:p-10 transition-all duration-300 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/15 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/5 rounded-full blur-[80px] group-hover:bg-violet-500/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px] group-hover:bg-blue-500/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:border-violet-500/40 transition-all">
                <BarChart3 className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Scale Your Brand
              </h3>
              <p className="text-muted-foreground mb-6">
                For D2C &amp; Performance Brands
              </p>
              <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 text-foreground font-semibold px-6 py-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-violet-500/25 transition-all duration-300">
                Get Performance Strategy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* CTA 2 - Creative / Premium */}
          <Link
            href="/creative-marketing"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0e0e1a] p-8 md:p-10 transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/15 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-violet-500/5 to-pink-500/3" />
            <div className="absolute inset-0 bg-[#0e0e1a]/40" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-[60px] group-hover:bg-pink-500/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:border-purple-500/40 transition-all">
                <Palette className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Build a Viral Brand
              </h3>
              <p className="text-muted-foreground mb-6">
                For Social &amp; Content-First Brands
              </p>
              <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 text-foreground font-semibold px-6 py-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                Explore Creative Strategy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-violet-400 to-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
