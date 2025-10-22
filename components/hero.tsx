import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <svg
              className="h-4 w-4 text-primary"
              viewBox="0 0 256 417"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fillOpacity="0.6" />
              <path d="M127.962 0L0 212.32l127.962 75.639V154.158z" />
              <path d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" fillOpacity="0.6" />
              <path d="M127.962 416.905v-104.72L0 236.585z" />
              <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity="0.2" />
              <path d="M0 212.32l127.96 75.638v-133.8z" fillOpacity="0.6" />
            </svg>
            <span className="text-muted-foreground">EVM Compatible</span>
          </div>

          <h1 className="mb-6 font-heading text-balance text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
            Building the <span className="text-primary flicker-text">onchain</span> future, one block at a time
          </h1>

          <p className="mb-10 text-pretty text-lg text-muted-foreground lg:text-xl">
            A blockchain R&amp;D lab exploring scalable, secure infrastructure for the decentralized web.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group font-medium" asChild>
              <a href="#research-development">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            {/* <Button size="lg" variant="outline" className="font-medium bg-transparent">
              View Documentation
            </Button> */}
          </div>

          {/* <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 lg:grid-cols-4">
            <div>
              <div className="mb-2 font-heading text-3xl font-bold text-primary">50M+</div>
              <div className="text-sm text-muted-foreground">Transactions Processed</div>
            </div>
            <div>
              <div className="mb-2 font-heading text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="mb-2 font-heading text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Enterprise Partners</div>
            </div>
            <div>
              <div className="mb-2 font-heading text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Developer Support</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
