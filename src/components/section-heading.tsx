import { cn } from "@/lib/utils"

type SectionHeadingProps = {
    title: React.ReactNode
    description?: React.ReactNode
    align?: "left" | "center"
    className?: string
    id?: string
}

/** Section title and intro, centred by default like a product page. */
export function SectionHeading({ title, description, align = "center", className, id }: SectionHeadingProps) {
    return (
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
            <h2 id={id} className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.07]">{title}</h2>
            {description && (
                <p className="mt-4 text-[clamp(1.0625rem,1.6vw,1.3125rem)] leading-[1.4] text-muted-foreground">{description}</p>
            )}
        </div>
    )
}
