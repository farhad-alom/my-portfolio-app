"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const emptySubscribe = () => () => {}

/**
 * Dark/light switch.
 *
 * The icons are swapped with CSS (`dark:` variants), so they never cause a
 * hydration mismatch. The label, however, depends on the saved theme, which
 * only exists in the browser — `mounted` keeps the server HTML and the first
 * client render identical, then the label updates after hydration.
 */
export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const isLight = mounted && resolvedTheme === "light"
  const label = mounted
    ? isLight
      ? "Switch to dark theme"
      : "Switch to light theme"
    : "Toggle color theme"

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors",
        "hover:bg-accent hover:text-foreground",
        "focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
        className
      )}
    >
      {/* Sun is visible in dark mode, Moon in light mode. */}
      <Sun className="hidden size-4.5 dark:block" aria-hidden="true" />
      <Moon className="block size-4.5 dark:hidden" aria-hidden="true" />
    </button>
  )
}
