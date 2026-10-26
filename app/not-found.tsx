import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex flex-col items-center text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">404</p>
        <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          This page does not exist
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you were looking for may have moved. Head back home to see the portfolio.
        </p>
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "mt-8")}>
          Back to home
        </Link>
      </div>
    </section>
  )
}
