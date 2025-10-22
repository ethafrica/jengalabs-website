import Image from "next/image"

const partners = [
  { name: "Ethereum", logo: "/ethereum-logo.png" },
  { name: "Polygon", logo: "/polygon-logo.png" },
  { name: "Chainlink", logo: "/chainlink-logo.png" },
  { name: "Avalanche", logo: "/avalanche-logo-abstract.png" },
  { name: "Solana", logo: "/solana-logo.png" },
  { name: "Cosmos", logo: "/cosmos-logo.png" },
]

export function Partners() {
  return (
    <section id="partners" className="border-y border-border bg-card/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-balance text-3xl font-bold lg:text-5xl">Trusted by industry leaders</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            We collaborate with the most innovative blockchain networks and protocols to deliver unparalleled
            interoperability and performance.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={40}
                className="h-10 w-auto opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 font-heading text-4xl font-bold text-primary">$2.5B+</div>
            <div className="text-sm text-muted-foreground">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-heading text-4xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Blockchain Networks</div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-heading text-4xl font-bold text-primary">500K+</div>
            <div className="text-sm text-muted-foreground">Active Developers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
