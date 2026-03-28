"use client"

import Link from "next/link"
import { ArrowRight, Play, TrendingUp, BarChart3, Bell, LineChart, Palette } from "lucide-react"

// Floating animations styles
const scrollStyle = `
  @keyframes float-1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
  @keyframes float-2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
  @keyframes float-3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-25px); } }
  @keyframes float-4 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(1deg); } }
  @keyframes float-5 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
  .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
  .animate-float-2 { animation: float-2 5s ease-in-out infinite 0.5s; }
  .animate-float-3 { animation: float-3 7s ease-in-out infinite 1s; }
  .animate-float-4 { animation: float-4 8s ease-in-out infinite 0.7s; }
  .animate-float-5 { animation: float-5 4s ease-in-out infinite 0.3s; }
  .animate-glow { animation: glow 3s ease-in-out infinite; }
  @keyframes glow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
`

function FloatingDashboard() {
  return (
    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[500px] h-[600px]">
      {/* Main dashboard card with glassmorphism */}
      <div className="relative w-full h-full">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
        
        {/* Main card */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937]/80 to-[#111827]/80 backdrop-blur-xl rounded-3xl border border-blue-300 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-600/5" />
          
          {/* Content */}
          <div className="relative p-8 h-full flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800">Performance</h3>
              <Bell className="w-4 h-4 text-blue-900/60" />
            </div>

            {/* Floating Cards with animated bounce */}
            <style>{`
              @keyframes float-1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
              @keyframes float-2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
              @keyframes float-3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-25px); } }
              .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
              .animate-float-2 { animation: float-2 5s ease-in-out infinite 0.5s; }
              .animate-float-3 { animation: float-3 7s ease-in-out infinite 1s; }
            `}</style>

            {/* ROAS Card */}
            <div className="animate-float-1 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur border border-emerald-500/20 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-emerald-400/70">ROAS</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-bold text-emerald-400">5.2x</p>
              <p className="text-xs text-emerald-400/50 mt-1">+23% from last week</p>
            </div>

            {/* Revenue Card */}
            <div className="animate-float-2 bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur border border-blue-500/20 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-blue-900/70">Revenue</span>
                <BarChart3 className="w-4 h-4 text-blue-900" />
              </div>
              <p className="text-2xl font-bold text-blue-900">?12.5L</p>
              <p className="text-xs text-blue-900/50 mt-1">Last 30 days</p>
            </div>

            {/* Growth Chart */}
            <div className="animate-float-3 bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur border border-blue-500/20 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-blue-900/70">Growth</span>
                <LineChart className="w-4 h-4 text-blue-900" />
              </div>
              <svg viewBox="0 0 100 40" className="w-full h-20">
                <polyline
                  points="0,30 20,15 40,25 60,10 80,20 100,5"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Styles for floating animations */}
      <style dangerouslySetInnerHTML={{ __html: scrollStyle }} />
      
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white" />

      {/* Premium ambient glows */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-100/30 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2 text-sm text-blue-900 backdrop-blur-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Trusted by 100+ Growing Brands
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance text-blue-950">
              We Build Brands That{" "}
              <span className="text-blue-900 relative">
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
                      <stop stopColor="#1E3A8A" />
                      <stop offset="0.5" stopColor="#1D4ED8" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              the Digital World
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 text-pretty">
              The AdMasons helps businesses scale with performance marketing, branding,
              and high-converting digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/917770969267"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white hover:from-blue-500 hover:to-blue-600 font-semibold px-8 py-4 text-lg group rounded-xl flex items-center justify-center shadow-lg shadow-blue-200/60 transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="border border-blue-300 text-foreground hover:bg-white/5 font-semibold px-8 py-4 text-lg group rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5"
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
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-300 mt-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800">150+</p>
                <p className="text-sm text-gray-700 mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800">50+</p>
                <p className="text-sm text-gray-700 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800">5x</p>
                <p className="text-sm text-gray-700 mt-1">Average ROI</p>
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
                  backgroundImage: `linear-gradient(rgba(30,58,138,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.08) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }}
              />

              {/* Central glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px]" />

              {/* Floating Card 1 - ROAS */}
              <div className="absolute top-6 left-2">
                <div className="animate-float-1 bg-blue-506] backdrop-blur-xl border border-blue-200/[0.1] rounded-2xl p-5 shadow-2xl shadow-blue-500/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium">Campaign ROAS</span>
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
                <div className="animate-float-2 bg-blue-506] backdrop-blur-xl border border-blue-200/[0.1] rounded-2xl p-5 shadow-2xl shadow-blue-500/10">
                  <span className="text-xs text-gray-700 font-medium">Revenue Generated</span>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800 mt-1">?2.4Cr</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-blue-506] rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-blue-500 rounded-full" />
                    </div>
                    <span className="text-[11px] text-gray-700">85%</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 - ROI */}
              <div className="absolute bottom-28 left-6">
                <div className="animate-float-3 bg-blue-506] backdrop-blur-xl border border-blue-200/[0.1] rounded-2xl p-5 shadow-2xl shadow-blue-500/10">
                  <span className="text-xs text-gray-700 font-medium">ROI Multiple</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-4xl font-bold text-white">5x</p>
                    <span className="text-sm text-emerald-400 font-semibold">? 240%</span>
                  </div>
                </div>
              </div>

              {/* Mini Chart Element */}
              <div className="absolute bottom-4 right-6">
                <div className="animate-float-4 bg-blue-506] backdrop-blur-xl border border-blue-200/[0.1] rounded-2xl p-4 shadow-2xl">
                  <span className="text-[11px] text-gray-700 font-medium block mb-2">Monthly Growth</span>
                  <div className="flex items-end gap-[3px] h-14 px-1">
                    {[30, 45, 35, 60, 50, 75, 65, 85, 78, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500/80 to-blue-400/80 rounded-sm min-w-[4px]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Notification Mini Card */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2">
                <div className="animate-float-5 bg-blue-508] backdrop-blur-xl border border-blue-200/[0.12] rounded-xl px-4 py-3 shadow-2xl flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-200/60 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Campaign Optimized</p>
                    <p className="text-[10px] text-gray-700">ROAS increased by 47%</p>
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
            className="group relative overflow-hidden rounded-2xl border border-blue-200/[0.12] bg-white p-8 md:p-10 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/15 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px] group-hover:bg-blue-500/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-500/40 transition-all">
                <BarChart3 className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Scale Your Brand
              </h3>
              <p className="text-gray-700 mb-6">
                For D2C &amp; Performance Brands
              </p>
              <span className="inline-flex items-center gap-2 border border-blue-300 bg-white/5 text-foreground font-semibold px-6 py-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-blue-200/60 transition-all duration-300">
                Get Performance Strategy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* CTA 2 - Creative / Premium */}
          <Link
            href="/creative-marketing"
            className="group relative overflow-hidden rounded-2xl border border-blue-200/[0.12] bg-white p-8 md:p-10 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/15 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-blue-500/5 to-blue-500/3" />
            <div className="absolute inset-0 bg-white/40" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/5 rounded-full blur-[60px] group-hover:bg-blue-400/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-500/40 transition-all">
                <Palette className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Build a Viral Brand
              </h3>
              <p className="text-gray-700 mb-6">
                For Content &amp; Social Brands
              </p>
              <span className="inline-flex items-center gap-2 border border-blue-300 bg-white/5 text-foreground font-semibold px-6 py-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-blue-200/60 transition-all duration-300">
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
          <div className="w-1.5 h-3 bg-gradient-to-b from-blue-900 to-blue-800 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}





