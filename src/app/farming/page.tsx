import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Milk, ShieldCheck, Droplets, Leaf, CheckCircle2, Wheat, ArrowRight, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { tgfSocials } from "@/lib/links"

export const metadata: Metadata = {
    title: "Farming",
    description: "Organic buffalo milk, desi ghee, Basmati rice and wheat from TGF's fields in Firozpur, Punjab.",
}

const promises = [
    { icon: Leaf, title: "100% organic", text: "Organic farming methods without harmful pesticides or synthetic fertilisers." },
    { icon: Droplets, title: "Pure & natural", text: "Raw, unprocessed milk and ghee. No preservatives, no additives." },
    { icon: ShieldCheck, title: "Totally hygienic", text: "Automated milking and packaging, held to high safety standards." },
]

const gallery = [
    { src: "/dairy2.webp", alt: "The TGF buffalo herd", caption: "Our pride: the herd", className: "sm:col-span-2 sm:row-span-2" },
    { src: "/dairy1.webp", alt: "A calf on the farm" },
    { src: "/farm1.webp", alt: "The farm house" },
    { src: "/farm3.webp", alt: "Harvest season", caption: "Harvest season", className: "sm:col-span-2" },
    { src: "/farm.webp", alt: "The farm at night" },
]

export default function FarmingPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden">
                <Image src="/farm3.webp" alt="Harvesting at TGF" fill priority sizes="100vw" className="-z-20 object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
                <div className="container py-16 text-white md:py-20">
                    <div className="max-w-2xl space-y-5">
                        <p className="eyebrow text-[#e6c27a]">TGF Farms · Firozpur, Punjab</p>
                        <h1 className="text-5xl font-semibold leading-[1.05] sm:text-6xl">Purity from soil to soul</h1>
                        <p className="text-lg text-white/85 md:text-xl">
                            The real taste of Punjab: organic, preservative-free and grown with care on our own land.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Button asChild size="lg" variant="gold">
                                <Link href="/farming/harvest">See our harvest <ArrowRight className="h-4 w-4" /></Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-black">
                                <a href="#order">How to order</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promises */}
            <section className="py-12 md:py-16">
                <div className="container">
                    <ul className="grid gap-5 md:grid-cols-3">
                        {promises.map((p) => (
                            <li key={p.title} className="flex gap-4 rounded-2xl border bg-card p-6 shadow-sm">
                                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                                    <p.icon className="h-6 w-6" />
                                </span>
                                <div>
                                    <h2 className="text-xl font-semibold">{p.title}</h2>
                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Dairy and grains */}
            <section className="pb-16 md:pb-24">
                <div className="container space-y-20 md:space-y-28">
                    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                            <Image src="/dairy.webp" alt="Buffaloes at the TGF dairy" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                        </div>
                        <div className="space-y-5">
                            <p className="eyebrow"><Milk className="h-4 w-4" /> Dairy</p>
                            <h2 className="text-3xl font-semibold sm:text-4xl">Pure buffalo milk &amp; desi ghee</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Our animals live a calm, stress-free life and eat organic fodder grown right here on the farm. The
                                result is milk that&apos;s rich, creamy and full of nutrition. We make our desi ghee the
                                traditional way, with the Bilona method, to keep its aroma and goodness.
                            </p>
                            <ul className="space-y-3">
                                {["High fat content (A2 properties)", "Antibiotic and hormone free", "Untouched by human hands"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 font-medium">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl md:order-2">
                            <Image src="/farm2.webp" alt="Wheat fields at TGF" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                        </div>
                        <div className="space-y-5 md:order-1">
                            <p className="eyebrow"><Wheat className="h-4 w-4" /> Grains</p>
                            <h2 className="text-3xl font-semibold sm:text-4xl">Basmati rice &amp; wheat</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                In the heart of Punjab&apos;s fertile plains, TGF grows some of the finest Basmati rice you&apos;ll
                                taste. Our staple crops are looked after season by season, so every grain carries the richness of
                                the land.
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border bg-card p-5 shadow-sm">
                                    <h3 className="text-lg font-semibold">Basmati rice</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Long-grain, aromatic, aged to perfection.</p>
                                </div>
                                <div className="rounded-2xl border bg-card p-5 shadow-sm">
                                    <h3 className="text-lg font-semibold">Organic wheat</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">Whole grain, chemical-free flour.</p>
                                </div>
                            </div>
                            <Button asChild variant="link" className="px-0">
                                <Link href="/farming/harvest">More about our harvest <ArrowRight className="h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="bg-[#0f1714] py-16 text-[#e7e3d8] md:py-24">
                <div className="container space-y-12">
                    <SectionHeading
                        eyebrow="Gallery"
                        title={<span className="text-white">Life on the farm</span>}
                        description={<span className="text-white/60">Our animals, our fields and our everyday work at TGF.</span>}
                        align="center"
                    />
                    <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 sm:auto-rows-[260px] md:grid-cols-3">
                        {gallery.map((photo) => (
                            <figure key={photo.src} className={`group relative overflow-hidden rounded-2xl ${photo.className ?? ""}`}>
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {photo.caption && (
                                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 font-serif text-lg font-semibold text-white">
                                        {photo.caption}
                                    </figcaption>
                                )}
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* Order */}
            <section id="order" className="py-16 md:py-24">
                <div className="container">
                    <div className="grid items-center gap-8 rounded-3xl border bg-secondary/50 p-8 sm:p-12 md:grid-cols-[1.3fr_1fr]">
                        <div className="space-y-3">
                            <p className="eyebrow">Order from the farm</p>
                            <h2 className="text-3xl font-semibold sm:text-4xl">Want fresh milk, ghee or grain?</h2>
                            <p className="text-muted-foreground">
                                Send us a message with what you need and where you are. We&apos;ll tell you what&apos;s available
                                this season and how to get it to you.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                            <Button asChild size="lg">
                                <Link href="/contact"><MessageCircle className="h-5 w-5" /> Send a message</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href={tgfSocials.instagram} target="_blank" rel="noopener noreferrer">
                                    <Instagram className="h-5 w-5" /> Message us on Instagram
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
