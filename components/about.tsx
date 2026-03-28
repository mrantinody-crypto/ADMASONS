"use client"

import { ScrollFade } from "@/components/scroll-fade"
import Image from "next/image"

const team = [
  {
    name: "Saba Ansari",
    title: "Co-Founder & CEO",
    image: "/Team/saba.jpeg",
  },
  {
    name: "Aamir",
    title: "Co-Founder & CMO",
    image: "/Team/amir.jpeg",
  },
]

export function About() {
  return (
    <section className="bg-[#F7F8FA] py-20 lg:py-28" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollFade>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5C518] mb-3">
              Our Team
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#1B2A4A] sm:text-4xl">
              The People Behind the Performance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#1B2A4A]/60">
              The AdMasons was founded on a simple belief: brands deserve
              marketing partners who care about results as much as they do.
              We combine deep platform expertise with a relentless focus on
              data to build growth systems that actually work.
            </p>
          </div>
        </ScrollFade>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8">
          {team.map((member, i) => (
            <ScrollFade key={member.name} delay={i * 0.1}>
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 rounded-xl overflow-hidden border-2 border-[#F5C518]/30 bg-[#1B2A4A]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#1B2A4A]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[#1B2A4A]/60">
                  {member.title}
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade delay={0.3}>
          <p className="mt-12 text-center text-sm text-[#1B2A4A]/50">
            15+ specialists across paid media, creative, analytics & automation
          </p>
        </ScrollFade>
      </div>
    </section>
  )
}
