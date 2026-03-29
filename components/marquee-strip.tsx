'use client'

const row1 = [
  'Amazon Ads', 'Google Partner', 'Meta Business Partner', 'Flipkart Ads',
  'Shopify', 'Quick Commerce', 'Amazon Ads', 'Google Partner',
  'Meta Business Partner', 'Flipkart Ads', 'Shopify', 'Quick Commerce',
]

const row2 = [
  'Performance Marketing', 'Brand Strategy', 'Marketplace Growth',
  'Conversion Optimisation', 'Paid Media', 'Growth Architecture',
  'Performance Marketing', 'Brand Strategy', 'Marketplace Growth',
  'Conversion Optimisation', 'Paid Media', 'Growth Architecture',
]

export function MarqueeStrip() {
  return (
    <section className="bg-[#F7F8FA] py-8 overflow-hidden marquee-wrapper border-y border-[#E2E5EB]">
      {/* Row 1 — scrolls left */}
      <div className="flex overflow-hidden mb-3">
        <div className="marquee-left flex items-center whitespace-nowrap will-change-transform">
          {[...row1, ...row1].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="text-[15px] font-semibold text-[#1B2A4A]/40 tracking-wide font-display px-4">
                {item}
              </span>
              <span className="text-[#F5C518] text-xs">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex overflow-hidden">
        <div className="marquee-right flex items-center whitespace-nowrap will-change-transform">
          {[...row2, ...row2].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="text-[13px] font-medium text-[#1B2A4A]/30 tracking-wide px-4">
                {item}
              </span>
              <span className="text-[#F5C518] text-xs opacity-50">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
