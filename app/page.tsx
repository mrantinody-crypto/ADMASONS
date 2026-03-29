import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { MarqueeStrip } from '@/components/marquee-strip'
import { Services } from '@/components/services'
import { CaseStudies } from '@/components/case-studies'
import { WhyChooseUs } from '@/components/why-choose-us'
import { About } from '@/components/about'
import { Team } from '@/components/team'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Resources } from '@/components/resources'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <About />
      <Team />
      <Testimonials />
      <Pricing />
      <Resources />
      <Contact />
      <Footer />
    </main>
  )
}
