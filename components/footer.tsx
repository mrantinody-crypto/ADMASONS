import Image from "next/image"

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#1B2A4A] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/admasons-logo.jpeg"
                alt="The AdMasons"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-base font-bold text-white">
                The AdMasons
              </span>
            </div>
            <p className="mt-3 text-sm text-white/40 max-w-xs">
              Performance marketing and growth consulting for brands that
              sell online. Serving India, UAE, UK & USA.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/30 mb-3">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/30 mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-white/50">
              <li>hello@admasons.com</li>
              <li>+91 7000-799-396</li>
              <li>Indore, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} The AdMasons. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Serving brands across India, UAE, UK & USA
          </p>
        </div>
      </div>
    </footer>
  )
}
