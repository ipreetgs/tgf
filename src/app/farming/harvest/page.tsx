"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Wheat, Leaf, Sun, Droplets, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
}

const harvest = [
    {
        icon: Wheat,
        eyebrow: "Staple grains",
        title: "Wheat & Basmati rice",
        text: "Our fields shimmer with premium Sharbati wheat and aromatic Basmati rice. We grow them with traditional know-how and sustainable practices, and harvest at peak maturity for the best nutrition and taste.",
        image: { src: "/farm2.webp", alt: "Wheat harvest at TGF" },
    },
    {
        icon: Sun,
        eyebrow: "Organic produce",
        title: "Seasonal vegetables & fruits",
        text: "From leafy greens to juicy citrus, our produce is sun-ripened and hand-picked. Without synthetic pesticides, it keeps the natural flavour and nutrients nature intended.",
        image: { src: "/farm.webp", alt: "Green fields at TGF" },
    },
    {
        icon: Droplets,
        eyebrow: "Cycle of life",
        title: "Nutrient-rich animal fodder",
        text: "We grow organic crops just for our dairy herd. Healthy soil grows healthy fodder, which feeds happy buffaloes and gives the purest, cream-rich milk. This closed loop is the secret behind our dairy.",
        image: { src: "/dairy.webp", alt: "Buffaloes eating fodder grown on the farm" },
    },
]

export default function HarvestPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden md:min-h-[70vh]">
                <Image src="/farm3.webp" alt="Golden wheat fields of Firozpur" fill priority sizes="100vw" className="-z-20 object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
                <div className="container space-y-5 py-16 text-white md:py-20">
                    <Link href="/farming" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                        <ArrowLeft className="h-4 w-4" /> Back to Farming
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl"
                    >
                        The bounty of <span className="italic text-[#e6c27a]">Firozpur</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="max-w-2xl text-lg text-white/85 md:text-xl"
                    >
                        Grown with love and tradition by Gurpreet Singh on the fertile plains of Punjab.
                    </motion.p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 text-center md:py-24">
                <div className="container max-w-3xl space-y-5">
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                        <Leaf className="h-7 w-7" />
                    </span>
                    <h2 className="text-3xl font-semibold sm:text-4xl">100% chemical-free farming</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        At our farm in Firozpur, we believe good health starts with the soil. We don&apos;t just grow food; we
                        look after a whole ecosystem. From our staple grains to the fodder for our dairy herd, everything is
                        grown without harmful chemicals.
                    </p>
                </div>
            </section>

            {/* Harvest */}
            <section className="border-y bg-secondary/40 py-16 md:py-24">
                <div className="container space-y-20 md:space-y-28">
                    {harvest.map((item, i) => (
                        <div key={item.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                            <motion.div
                                {...fadeIn}
                                className={`relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ${i % 2 === 1 ? "md:order-2" : ""}`}
                            >
                                <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                            </motion.div>
                            <div className={`space-y-4 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                                <p className="eyebrow"><item.icon className="h-4 w-4" /> {item.eyebrow}</p>
                                <h3 className="text-3xl font-semibold">{item.title}</h3>
                                <p className="text-lg leading-relaxed text-muted-foreground">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 md:py-16">
                        <h2 className="text-3xl font-semibold sm:text-4xl">Taste the purity of Firozpur</h2>
                        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                            Interested in this season&apos;s harvest? Get in touch and we&apos;ll tell you what&apos;s available.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Button asChild size="lg" variant="gold">
                                <Link href="/contact"><MessageCircle className="h-5 w-5" /> Contact us</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary">
                                <Link href="/farming"><ArrowLeft className="h-4 w-4" /> Back to Farming</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
