import Link from "next/link"
import { Layers3 } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Layers3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold">Jenga Labs</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#research-development"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Research & Development
            </Link>
            {/* Uncomment when you have these sections
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#docs"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation
            </Link>
            */}
          </nav>

          {/* <Button size="sm" className="font-medium">
            Get Started
          </Button> */}
        </div>
      </div>
    </header>
  )
}
