"use client"

export function TrustBar() {
  const brands = [
    "E-Commerce",
    "Real Estate",
    "Healthcare",
    "Education",
    "Hospitality",
    "FMCG",
  ]

  return (
    <section className="py-12 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-700 uppercase tracking-wider">
            Trusted by growing brands
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <div
              key={brand}
              className="flex items-center gap-2 text-gray-700/50 hover:text-gray-700 transition-colors duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="text-xl font-bold group-hover:text-primary transition-colors">
                  {brand.charAt(0)}
                </span>
              </div>
              <span className="text-lg font-semibold hidden sm:inline">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





