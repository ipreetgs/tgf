import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"
import { SectionHeading } from "@/components/section-heading"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
    title: "Farming",
    description: "Organic buffalo milk, desi ghee, Basmati rice and wheat from TGF's fields in Firozpur, Punjab.",
    alternates: { canonical: "/farming" },
}

const promises = [
    { title: "100% organic", text: "Certified organic farming methods, without harmful pesticides or synthetic fertilisers." },
    { title: "Pure & natural", text: "Raw, unprocessed milk and ghee. No preservatives, no additives, just nature's best." },
    { title: "Totally hygienic", text: "Automated milking and packaging processes, held to the highest safety standards." },
]

const explore = [
    {
        title: "Dairy",
        text: "Pure buffalo milk and desi ghee made the Bilona way.",
        href: "/farming/dairy",
        image: { src: "/dairy.webp", alt: "The TGF dairy" },
    },
    {
        title: "Harvest",
        text: "Basmati, Sharbati wheat, seasonal produce and fodder.",
        href: "/farming/harvest",
        image: { src: "/farm2.webp", alt: "Fields at sunset on the TGF farm" },
    },
    {
        title: "Gallery",
        text: "Our animals, our fields and our everyday work.",
        href: "/farming/gallery",
        image: { src: "/dairy2.webp", alt: "The TGF buffalo herd" },
    },
]

export default function FarmingPage() {
    return (
        <div className="flex flex-col gap-3 pt-3">
            {/* Hero */}
            <section className="relative isolate mx-3 flex min-h-[78vh] items-end overflow-hidden rounded-tile text-white">
                <Image src="/farm3.webp" alt="Harvesting at TGF in Firozpur" fill priority sizes="100vw" className="-z-20 object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />
                <div className="w-full px-6 pb-12 text-center md:pb-16">
                    <h1 className="text-[clamp(2.75rem,7vw,5rem)] leading-[1.03] tracking-[-0.035em]">Purity from soil to soul.</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-white/85">
                        The real taste of Punjab. 100% organic, preservative-free and ethically grown on our own land.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button asChild size="lg" variant="light">
                            <Link href="/farming/order">How to order</Link>
                        </Button>
                        <Button asChild size="lg" variant="ghostLight">
                            <Link href="/farming/harvest">See our harvest</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Promises */}
            <section aria-labelledby="promise-title" className="py-20 md:py-28">
                <div className="container">
                    <SectionHeading id="promise-title" title="What we promise, every day." />
                    <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
                        {promises.map((p) => (
                            <li key={p.title} className="text-center md:text-left">
                                <h3 className="text-[28px] leading-tight">{p.title}</h3>
                                <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">{p.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Explore */}
            <section aria-labelledby="explore-title" className="pb-20 md:pb-28">
                <div className="container">
                    <SectionHeading id="explore-title" title="Explore the farm." />
                    <ul className="mt-12 grid gap-4 md:grid-cols-3">
                        {explore.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="group block overflow-hidden rounded-tile bg-muted">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={item.image.src}
                                            alt={item.image.alt}
                                            fill
                                            sizes="(min-width: 768px) 33vw, 100vw"
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                        />
                                    </div>
                                    <div className="p-7">
                                        <h3 className="text-[28px] leading-tight">{item.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{item.text}</p>
                                        <span className="mt-4 inline-flex items-center text-primary group-hover:underline">Learn more ›</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Basmati highlight */}
            <section aria-labelledby="grain-title" className="mx-3 grid overflow-hidden rounded-tile bg-ink text-ink-foreground md:grid-cols-2">
                <div className="flex flex-col justify-center px-8 py-14 md:px-16">
                    <h2 id="grain-title" className="text-[clamp(2rem,4vw,3rem)] leading-[1.06]">Premium Basmati &amp; wheat.</h2>
                    <p className="mt-4 text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-[1.45] text-ink-muted">
                        In the heart of Punjab&apos;s fertile plains, TGF grows some of the world&apos;s finest Basmati rice. Every
                        grain carries the richness of the land.
                    </p>
                    <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
                        <div>
                            <dt className="text-[19px] font-semibold">Basmati rice</dt>
                            <dd className="mt-1 text-[15px] text-ink-muted">Long-grain, aromatic, aged to perfection.</dd>
                        </div>
                        <div>
                            <dt className="text-[19px] font-semibold">Organic wheat</dt>
                            <dd className="mt-1 text-[15px] text-ink-muted">Whole grain, chemical-free flour source.</dd>
                        </div>
                    </dl>
                    <ChevronLink href="/farming/harvest" className="mt-8 text-[17px] text-[#46C98A]">See the full harvest</ChevronLink>
                </div>
                <div className="relative min-h-[320px]">
                    <Image src="/farm.webp" alt="A combine harvesting rice in the TGF fields" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
            </section>

            <CtaBand
                title="Fresh from our farm, for your table."
                text="Tell us what you need and where you are. We'll tell you what's available this season and how to get it to you."
                primary={{ label: "How to order", href: "/farming/order" }}
                secondary={{ label: "Send a message", href: "/contact?topic=Farm%20order" }}
            />
        </div>
    )
}
