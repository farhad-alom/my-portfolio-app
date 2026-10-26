"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { EllipsisVertical, X } from "lucide-react"

import logo from "@/public/logo.png"
import DownloadResumeButton from "@/components/DownloadResumeButton"
import ThemeToggle from "@/components/ThemeToggle"
import { navLinks, site } from "@/lib/site"
import { cn } from "@/lib/utils"

const iconButtonClass =
  "inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileWasOpen = useRef(false)

  // Move focus into the mobile panel and allow Escape to close it.
  useEffect(() => {
    if (!mobileOpen) return

    closeButtonRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [mobileOpen])

  // If the window grows to tablet/desktop width, drop the mobile panel.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)")
    function onChange() {
      if (query.matches) setMobileOpen(false)
    }

    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  // When the mobile panel closes, put focus back on the button that opened it.
  useEffect(() => {
    if (mobileWasOpen.current && !mobileOpen) {
      menuButtonRef.current?.focus()
    }
    mobileWasOpen.current = mobileOpen
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page">
        <nav aria-label="Main navigation" className="flex h-16 items-center justify-between gap-4">
          {/* Logo + name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-lg focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <Image
              src={logo}
              alt=""
              width={36}
              height={36}
              priority
              className="size-9 rounded-lg object-contain ring-1 ring-border"
            />
            <span className="text-base font-semibold tracking-tight">{site.name}</span>
          </Link>

          {/* Tablet + desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none lg:px-3"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Tablet + desktop actions: Download CV + theme toggle */}
          <div className="hidden items-center gap-2 md:flex">
            <DownloadResumeButton size="sm" />
            <ThemeToggle />
          </div>

          {/* Mobile actions: theme toggle + three-dot menu */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            {/* Hidden while the panel is open: the panel has its own close button. */}
            {mobileOpen ? null : (
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className={iconButtonClass}
              >
                <EllipsisVertical className="size-5" aria-hidden="true" />
              </button>
            )}
          </div>
        </nav>

        {/* Mobile panel */}
        {mobileOpen ? (
          <div id="mobile-menu" className="pb-4 md:hidden">
            <div className="animate-in fade-in-0 slide-in-from-top-2 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-2xl border border-border bg-card p-3 shadow-lg">
              <div className="flex items-center justify-between px-1 pb-2">
                <span className="font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Menu
                </span>

                {/* Visible close button, top-right. */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMobile}
                  aria-label="Close navigation menu"
                  className={cn(iconButtonClass, "size-9 border-transparent bg-transparent")}
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:bg-accent focus-visible:text-foreground focus-visible:outline-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-2 border-t border-border pt-3">
                <DownloadResumeButton size="lg" className="w-full" onClick={closeMobile} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
