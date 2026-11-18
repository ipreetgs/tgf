import type { Metadata } from "next"
import Link from "next/link"
import { Instagram, Linkedin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"
import { aegisLinks, sipAndShelfLinks } from "@/lib/links"

export const metadata: Metadata = {
    title: "Products",
    description: "Sip & Shelf, a cafe-based book sharing app, and Aegis, an open-source vulnerability-assessment framework, both built by Gurpreet Singh.",
    alternates: { canonical: "/devops/products" },
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const

const sipSteps = [
    { title: "Find or list", text: "Search by title, author or ISBN, or list a book from your own shelf." },
    { title: "Pick the terms", text: "Lend, rent, exchange, donate, give away or sell." },
    { title: "Meet at a cafe", text: "Collect the book at a partner cafe near you." },
]

const aegisFeatures = [
    { title: "Code scans", text: "Leaked secrets, risky patterns and vulnerable dependencies." },
    { title: "Container images", text: "OS and language packages matched to known CVEs." },
    { title: "Endpoint hygiene", text: "Passive checks for headers and exposed files. No attack payloads." },
    { title: "Clear priorities", text: "CVSS v3.1 scores plus KEV and EPSS signals, in one report." },
]

export default function ProductsPage() {
    return (
        <div className="flex flex-col gap-3">
            <section className="pb-12 pt-16 text-center md:pb-16 md:pt-24">
                <div className="container animate-fade-up">
                    <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.04] tracking-[-0.035em]">What I&apos;m building.</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
                        One app for readers and one tool for engineers. Both started with a problem I kept running into myself.
                    </p>
                </div>
            </section>

            {/* Sip & Shelf */}
            <section id="sip-and-shelf" aria-labelledby="sip-title" className="mx-3 overflow-hidden rounded-tile bg-muted">
                <div className="px-6 pt-14 text-center md:px-16 md:pt-20">
                    <h2 id="sip-title" className="text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">Sip &amp; Shelf</h2>
                    <p className="mt-2 text-[17px] font-medium text-muted-foreground">Founder &amp; CEO</p>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35]">
                        A good book. A nearby cafe. A reason to step out.
                    </p>
                    <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
                        Most of us have a shelf of books we&apos;ve already read and a list of books we want to read next. Sip &amp; Shelf
                        connects the two. You lend, rent, swap, donate or sell your old books to readers nearby. There&apos;s no
                        shipping: the book waits at a partner cafe, and you pick it up over a coffee.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Button asChild size="lg">
                            <Link href={sipAndShelfLinks.site} {...external}>Open the app</Link>
                        </Button>
                        <Button asChild size="icon" variant="outline">
                            <Link href={sipAndShelfLinks.instagram} {...external} aria-label="Sip & Shelf on Instagram"><Instagram className="h-4 w-4" /></Link>
                        </Button>
                        <Button asChild size="icon" variant="outline">
                            <Link href={sipAndShelfLinks.linkedin} {...external} aria-label="Sip & Shelf on LinkedIn"><Linkedin className="h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
                <ol className="mx-auto grid max-w-5xl gap-3 px-6 pb-12 pt-12 md:grid-cols-3 md:px-16 md:pb-16">
                    {sipSteps.map((step, i) => (
                        <li key={step.title} className="rounded-[22px] bg-background p-7">
                            <span className="text-[32px] font-semibold leading-none tracking-[-0.03em] text-primary">{i + 1}</span>
                            <h3 className="mt-4 text-[21px]">{step.title}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.text}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Aegis */}
            <section id="aegis" aria-labelledby="aegis-title" className="mx-3 overflow-hidden rounded-tile bg-ink text-ink-foreground">
                <div className="px-6 pt-14 text-center md:px-16 md:pt-20">
                    <h2 id="aegis-title" className="text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">Aegis</h2>
                    <p className="mt-2 text-[17px] font-medium text-ink-muted">Open source</p>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35]">
                        A security framework for IT and DevOps teams.
                    </p>
                    <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-muted">
                        Every team wants to know &ldquo;are we exposed?&rdquo; before shipping, but most scanners are paid black boxes.
                        Aegis builds its own vulnerability index from public feeds (NVD, OSV, Exploit-DB, KEV and EPSS) and checks
                        your code, containers and endpoints against it, with no commercial scanning API involved.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        <Button asChild size="lg" variant="light">
                            <Link href={aegisLinks.repo} {...external}>View on GitHub</Link>
                        </Button>
                        <ChevronLink href={`${aegisLinks.repo}#readme`} className="text-[17px] text-[#46C98A]">Read the docs</ChevronLink>
                    </div>
                </div>
                <div className="mx-auto max-w-5xl px-6 pb-12 pt-12 md:px-16 md:pb-16">
                    <code className="block overflow-x-auto rounded-[18px] bg-ink-raised px-6 py-5 font-mono text-sm">
                        <span className="text-[#46C98A]">$</span> aegis init &amp;&amp; aegis --code ./my-app
                    </code>
                    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                        {aegisFeatures.map((f) => (
                            <li key={f.title} className="flex gap-3 rounded-[22px] bg-ink-raised p-6">
                                <Check className="mt-1 h-5 w-5 shrink-0 text-[#46C98A]" />
                                <div>
                                    <h3 className="text-[19px]">{f.title}</h3>
                                    <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{f.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
                    <ChevronLink href="/devops/experience">See my experience</ChevronLink>
                    <ChevronLink href="/contact?topic=Sip%20%26%20Shelf">Talk about Sip &amp; Shelf</ChevronLink>
                </div>
            </section>
        </div>
    )
}
