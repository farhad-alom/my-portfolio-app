import { Download } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type DownloadResumeButtonProps = {
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline" | "ghost"
  className?: string
  label?: string
  /** Optional: used by the mobile menu to close itself after the click. */
  onClick?: () => void
}

/**
 * One button used everywhere (navbar, mobile menu, hero).
 * It always downloads the real CV file from /public and renames it on the way out.
 */
export default function DownloadResumeButton({
  size = "sm",
  variant = "default",
  className,
  label = "Download Resume",
  onClick,
}: DownloadResumeButtonProps) {
  return (
    <a
      href={site.cv.href}
      download={site.cv.downloadName}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size }), "font-medium", className)}
    >
      <Download aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}
