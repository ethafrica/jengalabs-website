import Link from "next/link"
import { Layers3 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Layers3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">Jenga Labs</span>
            </Link>
            <p className="mb-6 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              A blockchain research and development lab exploring scalable infrastructure for the decentralized web.
            </p>
            {/* Social media links commented out - uncomment when ready */}
            {/* 
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
            */}
          </div>

          {/* Product and Company sections commented out - not relevant yet */}
          {/* 
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          */}

          {/* 
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          */}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Jenga Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
