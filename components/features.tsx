import { Card } from "@/components/ui/card"
import { Wallet, Zap, Shield, Bot } from "lucide-react"

const features = [
  {
    icon: Wallet,
    title: "Stablecoin Wallets",
    description:
      "Developing intuitive wallet experiences that make stablecoin payments as simple as traditional digital payments, bridging Web2 and Web3.",
  },
  {
    icon: Zap,
    title: "x402 for AI Agents",
    description:
      "HTTP 402 standard enabling autonomous AI agent payments with stablecoins, eliminating API keys and subscriptions.",
  },
  {
    icon: Bot,
    title: "AI-Powered Governance",
    description:
      "Exploring how autonomous AI agents can enhance onchain governance through intelligent decision-making and coordination.",
  },
  {
    icon: Shield,
    title: "Zero-Knowledge Privacy",
    description:
      "Researching zero-knowledge proofs and privacy-preserving technologies for confidential transactions and data protection.",
  },
]

export function Features() {
  return (
    <section id="research-development" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-balance text-3xl font-bold lg:text-5xl">Research & Development</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Exploring innovative solutions at the intersection of stablecoins, payments, and user experience.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold">{feature.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
