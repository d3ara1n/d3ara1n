import { cn } from "@/lib/utils"

export default function Marquee({
  items,
  className,
  rowClassName,
  itemClassName,
}: {
  items: string[]
  className?: string
  rowClassName?: string
  itemClassName?: string
}) {
  const row = items.map((item, i) => (
    <span key={i} className={cn("mx-4 text-4xl", itemClassName)}>
      {item}
    </span>
  ))

  return (
    <div
      className={cn(
        "relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base",
        className,
      )}
    >
      <div className={cn("animate-marquee whitespace-nowrap py-12", rowClassName)}>{row}</div>

      {/* must have both of these in order to work */}
      <div
        className={cn("absolute top-0 animate-marquee2 whitespace-nowrap py-12", rowClassName)}
        aria-hidden="true"
      >
        {row}
      </div>
    </div>
  )
}
