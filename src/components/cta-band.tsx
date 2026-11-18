import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"

type CtaBandProps = {
    title: string
    text: string
    primary: { label: string; href: string }
    secondary?: { label: string; href: string }
}

/** The closing tile on a page: one sentence and the next step. */
export function CtaBand({ title, text, primary, secondary }: CtaBandProps) {
    const external = /^https?:\/\//.test(primary.href)
    return (
        <section className="mx-3 mb-3 rounded-tile bg-muted px-6 py-16 text-center md:py-20">
            <h2 className="mx-auto max-w-2xl text-[clamp(1.875rem,4vw,3rem)] leading-[1.08]">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-[1.4] text-muted-foreground">{text}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <Button asChild size="lg">
                    <Link href={primary.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {primary.label}
                    </Link>
                </Button>
                {secondary && <ChevronLink href={secondary.href} className="text-[17px]">{secondary.label}</ChevronLink>}
            </div>
        </section>
    )
}
