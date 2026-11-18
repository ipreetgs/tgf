import type { Metadata } from "next"
import Image from "next/image"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
    title: "Harvest",
    description: "Wheat, Basmati rice, seasonal produce and fodder, grown chemical-free at TGF in Firozpur, Punjab.",
    alternates: { canonical: "/farming/harvest" },
}

const harvest = [
    {
        title: "Wheat & Basmati rice.",
        subtitle: "Staple grains",
        text: "Our fields shimmer with the gold of premium Sharbati wheat and the aromatic allure of Basmati rice. Grown using traditional wisdom combined with modern sustainable practices, our grains are harvested at peak maturity for maximum nutrition and taste.",
        image: { src: "/farm.webp", alt: "A combine harvesting rice at TGF" },
    },
    {
        title: "Seasonal vegetables & fruits.",
        subtitle: "Organic produce",
        text: "We cultivate a vibrant variety of seasonal vegetables and fruits. From leafy greens to succulent citrus, our produce is sun-ripened and hand-picked. By avoiding synthetic pesticides, we preserve the natural flavours and nutrients nature intended.",
        image: { src: "/farm3.webp", alt: "Green crop fields at TGF" },
    },
    {
        title: "Nutrient-rich animal fodder.",
        subtitle: "Cycle of life",
        text: "Thinking holistically, we grow specialised organic crops solely for our dairy herd. Healthy soil grows healthy fodder, which feeds happy buffaloes, resulting in the purest, cream-rich milk. This closed-loop system is the secret behind the quality of our dairy.",
        image: { src: "/dairy.webp", alt: "Buffaloes eating fodder grown on the farm" },
    },
]

export default function HarvestPage() {
    return (
        <div className="flex flex-col gap-3">
            <section className="pt-16 text-center md:pt-24">
                <div className="container animate-fade-up">
                    <h1 className="mx-auto max-w-4xl text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.04] tracking-[-0.035em]">
                        The bounty of Firozpur.
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
                        100% chemical-free farming. Cultivated with love and tradition by Gurpreet Singh on the fertile plains of Punjab.
                    </p>
                </div>
                <div className="container mt-12">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-tile md:aspect-[1179/560]">
                        <Image src="/farm3.webp" alt="Golden fields of Firozpur" fill priority sizes="(min-width: 1280px) 1160px, 100vw" className="object-cover" />
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24">
                <div className="container max-w-3xl text-center">
                    <p className="text-[clamp(1.375rem,2.6vw,2rem)] font-medium leading-[1.35] tracking-[-0.02em]">
                        At our farm in Firozpur, we believe true health begins with the soil. We don&apos;t just grow food; we nurture
                        an ecosystem. <span className="text-muted-foreground">From our staple grains to the fodder for our dairy herd,
                        everything is cultivated without harmful chemicals.</span>
                    </p>
                </div>
            </section>

            <div className="flex flex-col gap-3">
                {harvest.map((item, i) => (
                    <section key={item.title} className="mx-3 grid overflow-hidden rounded-tile bg-muted md:grid-cols-2">
                        <div className={`relative min-h-[300px] md:min-h-[480px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                            <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                        </div>
                        <div className={`flex flex-col justify-center px-8 py-12 md:px-14 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                            <h2 className="text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.08]">
                                <span className="sr-only">{item.subtitle}: </span>
                                {item.title}
                            </h2>
                            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{item.text}</p>
                        </div>
                    </section>
                ))}
            </div>

            <CtaBand
                title="Taste the purity of Firozpur."
                text="Interested in our harvest? Get in touch to know about this season's availability."
                primary={{ label: "How to order", href: "/farming/order" }}
                secondary={{ label: "See the gallery", href: "/farming/gallery" }}
            />
        </div>
    )
}
