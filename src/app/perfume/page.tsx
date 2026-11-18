import type { Metadata } from "next"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"
import { tgfSocials } from "@/lib/links"

export const metadata: Metadata = {
    title: "TGF Parfum",
    description: "TGF Parfum: the Nodesscent project, our first signature scent, is in formulation with master perfumers.",
    alternates: { canonical: "/perfume" },
}

const steps = [
    { label: "Idea", state: "done" },
    { label: "Formulation", state: "current" },
    { label: "Testing", state: "next" },
    { label: "Launch", state: "next" },
] as const

export default function PerfumePage() {
    return (
        <div className="flex flex-col gap-3 pt-3">
            <section className="relative isolate mx-3 flex min-h-[calc(100svh-120px)] flex-col items-center justify-center overflow-hidden rounded-tile bg-ink px-6 py-20 text-center text-ink-foreground">
                <div className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-[radial-gradient(ellipse_at_50%_100%,rgba(217,180,106,0.32),transparent_65%)]" aria-hidden />
                <p className="text-[17px] font-medium text-[#d9b46a]">Coming soon</p>
                <h1 className="mt-3 text-[clamp(3.25rem,9vw,6rem)] leading-[1] tracking-[-0.04em]">TGF Parfum</h1>
                <p className="mt-5 text-[clamp(1.375rem,2.6vw,2rem)] font-medium tracking-[-0.02em]">The Nodesscent project.</p>
                <p className="mx-auto mt-5 max-w-xl text-[19px] leading-relaxed text-ink-muted">
                    We are in the lab, in deep discussion with master perfumers to refine the final notes and formulation. The
                    Nodesscent idea is being crafted into a signature scent designed to leave a lasting impression.
                </p>

                <ol className="mx-auto mt-12 grid w-full max-w-lg grid-cols-4 gap-2" aria-label="Project progress">
                    {steps.map((step) => (
                        <li key={step.label} className="text-left">
                            <span
                                className={
                                    step.state === "done"
                                        ? "block h-1 rounded-full bg-[#d9b46a]"
                                        : step.state === "current"
                                            ? "block h-1 animate-pulse rounded-full bg-[#d9b46a]/60"
                                            : "block h-1 rounded-full bg-white/15"
                                }
                            />
                            <span className={step.state === "next" ? "mt-2 block text-[13px] text-white/45" : "mt-2 block text-[13px] font-medium text-[#d9b46a]"}>
                                {step.label}
                                {step.state === "current" && <span className="sr-only"> (current stage)</span>}
                            </span>
                        </li>
                    ))}
                </ol>

                <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
                    <Button asChild size="lg" variant="light">
                        <Link href={tgfSocials.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4" /> Follow for the launch
                        </Link>
                    </Button>
                    <ChevronLink href="/contact?topic=Perfume" className="text-[17px] text-[#d9b46a]">Ask about TGF Parfum</ChevronLink>
                </div>
            </section>
        </div>
    )
}
