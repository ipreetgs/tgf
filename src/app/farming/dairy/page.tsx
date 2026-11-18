import type { Metadata } from "next"
import Image from "next/image"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
    title: "Dairy",
    description: "Pure buffalo milk and desi ghee from TGF: A2 properties, antibiotic and hormone free, untouched by human hands.",
    alternates: { canonical: "/farming/dairy" },
}

const qualities = [
    { title: "High fat content", text: "Rich, creamy buffalo milk with A2 properties." },
    { title: "Antibiotic & hormone free", text: "Nothing in the milk that nature didn't put there." },
    { title: "Untouched by human hands", text: "Automated milking and packaging, start to finish." },
    { title: "Bilona desi ghee", text: "Made the traditional way to keep its aroma and goodness." },
]

export default function DairyPage() {
    return (
        <div className="flex flex-col gap-3">
            <section className="pt-16 text-center md:pt-24">
                <div className="container animate-fade-up">
                    <h1 className="mx-auto max-w-4xl text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.04] tracking-[-0.035em]">
                        Pure buffalo milk
                        <br />
                        &amp; desi ghee.
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
                        Our livestock thrives in a stress-free environment, fed on organic fodder grown right on our farm.
                    </p>
                </div>
                <div className="container mt-12">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-tile md:aspect-[2/1]">
                        <Image src="/dairy.webp" alt="Buffaloes at the TGF dairy in Firozpur" fill priority sizes="(min-width: 1280px) 1160px, 100vw" className="object-cover" />
                    </div>
                </div>
            </section>

            <section aria-labelledby="quality-title" className="py-20 md:py-28">
                <div className="container grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                    <div>
                        <h2 id="quality-title" className="text-[clamp(2rem,4vw,3rem)] leading-[1.07]">Milk that&apos;s rich, creamy and full of nutrition.</h2>
                        <p className="mt-5 text-[19px] leading-relaxed text-muted-foreground">
                            This results in milk that is rich, creamy and packed with nutrition. We take pride in producing
                            traditional desi ghee via the Bilona method, preserving the aroma and health benefits.
                        </p>
                    </div>
                    <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
                        {qualities.map((q) => (
                            <div key={q.title} className="border-t border-border pt-5">
                                <dt className="text-[21px] font-semibold tracking-[-0.02em]">{q.title}</dt>
                                <dd className="mt-2 text-muted-foreground">{q.text}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="mx-3 grid gap-3 md:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-tile md:aspect-auto md:min-h-[520px]">
                    <Image src="/dairy1.webp" alt="A calf on the TGF dairy farm" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center rounded-tile bg-ink px-8 py-14 text-ink-foreground md:px-14">
                    <h2 className="text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.08]">A closed loop, from soil to milk.</h2>
                    <p className="mt-4 text-[19px] leading-relaxed text-ink-muted">
                        We grow specialised organic crops solely for our dairy herd. Healthy soil grows healthy fodder, which feeds
                        happy buffaloes, resulting in the purest, cream-rich milk.
                    </p>
                </div>
            </section>

            <CtaBand
                title="Fresh milk and ghee, from our herd to you."
                text="Tell us how much you need and where you are, and we'll let you know availability."
                primary={{ label: "How to order", href: "/farming/order" }}
                secondary={{ label: "Send a message", href: "/contact?topic=Farm%20order" }}
            />
        </div>
    )
}
