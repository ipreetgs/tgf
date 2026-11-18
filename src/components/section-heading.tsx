import { cn } from "@/lib/utils"

type SectionHeadingProps = {
    eyebrow?: string
    title: React.ReactNode
    description?: React.ReactNode
    align?: "left" | "center"
    className?: string
}

/** The eyebrow + title + intro block used at the top of every section. */
export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
    return (
        <div className={cn("max-w-2xl space-y-3", align === "center" && "mx-auto text-center", className)}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            {description && <p className="text-base text-muted-foreground sm:text-lg">{description}</p>}
        </div>
    )
}
