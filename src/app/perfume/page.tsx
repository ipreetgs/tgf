import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, FlaskConical, Instagram, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { tgfSocials } from "@/lib/links"

export const metadata: Metadata = {
    title: "Perfume",
    description: "TGF Parfum: the Nodesscent project, our first signature scent, is being crafted now.",
}

const steps = [
    { label: "Idea", done: true },
    { label: "Formulation", current: true },
    { label: "Testing" },
    { label: "Launch" },
]

export default function PerfumePage() {
    return (
        <div className="relative isolate overflow-hidden bg-[#0e0b08] text-[#f3e9d7]">
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(230,194,122,0.22),_transparent_60%)]"
                aria-hidden
            />
            <section className="container flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center py-20 text-center">
                <div className="max-w-3xl space-y-8">
                    <p className="inline-flex items-center gap-2 rounded-full border border-[#e6c27a]/30 bg-[#e6c27a]/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#e6c27a]">
                        <Sparkles className="h-3.5 w-3.5" /> Coming soon
                    </p>

                    <h1 className="text-6xl font-light tracking-tight sm:text-7xl lg:text-8xl">
                        TGF <span className="font-normal italic text-[#e6c27a]">Parfum</span>
                    </h1>

                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#e6c27a] to-transparent" />

                    <h2 className="font-serif text-2xl font-light sm:text-3xl">
                        The <span className="italic text-[#e6c27a]">Nodesscent</span> project
                    </h2>

                    <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/65">
                        We&apos;re in the lab with master perfumers, refining the final notes and formulation. Nodesscent is
                        becoming real: a signature scent made to leave a lasting impression.
                    </p>

                    {/* Progress */}
                    <ol className="mx-auto grid max-w-lg grid-cols-4 gap-2 pt-4" aria-label="Project progress">
                        {steps.map((step) => (
                            <li key={step.label} className="space-y-2">
                                <span
                                    className={
                                        step.done
                                            ? "block h-1.5 rounded-full bg-[#e6c27a]"
                                            : step.current
                                                ? "block h-1.5 animate-pulse rounded-full bg-[#e6c27a]/60"
                                                : "block h-1.5 rounded-full bg-white/10"
                                    }
                                />
                                <span className={step.done || step.current ? "text-xs text-[#e6c27a]" : "text-xs text-white/40"}>
                                    {step.label}
                                </span>
                            </li>
                        ))}
                    </ol>

                    <p className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white/60">
                        <FlaskConical className="h-4 w-4 text-[#e6c27a]" /> Formulation in progress
                    </p>

                    <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row">
                        <Button asChild size="lg" variant="gold">
                            <Link href={tgfSocials.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-4 w-4" /> Follow for the launch
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="ghost" className="text-white/70 hover:bg-white/10 hover:text-white">
                            <Link href="/"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
