import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-12 lg:p-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-balance text-4xl font-bold lg:text-5xl">
              Ready to build the future?
            </h2>
            <p className="mb-10 text-pretty text-lg text-muted-foreground lg:text-xl">
              Join thousands of developers and enterprises already building on Jenga Labs. Start your blockchain journey
              today with our comprehensive platform and expert support.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group font-medium">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium bg-transparent">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
