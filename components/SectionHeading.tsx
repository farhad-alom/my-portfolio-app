type SectionHeadingProps = {
  /** Must match the id used on the section's h2 for aria-labelledby. */
  id: string
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="mb-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      ) : null}

      <h2 id={id} className="font-heading text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
