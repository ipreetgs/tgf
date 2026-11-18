import Link from "next/link"
import { ChevronRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ChevronLinkProps = {
    href: string
    children: React.ReactNode
    className?: string
    external?: boolean
}

/** "Learn more ›" text link. External links show an arrow and open in a new tab. */
export function ChevronLink({ href, children, className, external }: ChevronLinkProps) {
    const isExternal = external ?? /^https?:\/\//.test(href)
    return (
        <Link
            href={href}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn("group inline-flex items-center gap-0.5 text-primary hover:underline", className)}
        >
            {children}
            {isExternal ? (
                <ArrowUpRight className="h-[1em] w-[1em] transition-transform group-hover:-translate-y-px group-hover:translate-x-px" aria-hidden />
            ) : (
                <ChevronRight className="h-[1em] w-[1em] transition-transform group-hover:translate-x-0.5" aria-hidden />
            )}
        </Link>
    )
}
