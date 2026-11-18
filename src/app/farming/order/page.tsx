import type { Metadata } from "next"
import Link from "next/link"
import { Instagram, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { tgfSocials } from "@/lib/links"

export const metadata: Metadata = {
    title: "How to order",
    description: "Order fresh buffalo milk, desi ghee, Basmati rice, wheat and seasonal produce from TGF in Firozpur, Punjab.",
    alternates: { canonical: "/farming/order" },
}

const EMAIL = "ipreetgs@icloud.com"

const products = [
    { name: "Buffalo milk", note: "Rich and creamy, with A2 properties." },
    { name: "Desi ghee", note: "Made the traditional Bilona way." },
    { name: "Basmati rice", note: "Long-grain, aromatic, aged to perfection." },
    { name: "Organic wheat", note: "Premium Sharbati, a whole-grain flour source." },
    { name: "Seasonal produce", note: "Vegetables and fruits, when in season." },
]

const steps = [
    { title: "Tell us what you need.", text: "Send a message with the products, the quantity and where you are." },
    { title: "We confirm availability.", text: "We'll tell you what's available this season and how to get it to you." },
]

export default function OrderPage() {
    return (
        <div className="flex flex-col gap-3">
            <section className="pb-14 pt-16 text-center md:pb-20 md:pt-24">
                <div className="container animate-fade-up">
                    <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.04] tracking-[-0.035em]">How to order.</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
                        Fresh milk, ghee and grain from our farm in Firozpur. Ordering takes one message.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button asChild size="lg">
                            <Link href="/contact?topic=Farm%20order"><MessageCircle className="h-4 w-4" /> Send a message</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href={tgfSocials.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-4 w-4" /> Message on Instagram
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section aria-label="How ordering works" className="mx-3 grid gap-3 md:grid-cols-2">
                {steps.map((step, i) => (
                    <div key={step.title} className="rounded-tile bg-muted px-8 py-12 md:px-12">
                        <p className="text-[48px] font-semibold leading-none tracking-[-0.04em] text-primary">{i + 1}</p>
                        <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.1]">{step.title}</h2>
                        <p className="mt-3 text-[17px] text-muted-foreground">{step.text}</p>
                    </div>
                ))}
            </section>

            {/* Products */}
            <section aria-labelledby="products-title" className="py-20 md:py-28">
                <div className="container max-w-4xl">
                    <h2 id="products-title" className="text-center text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.07]">What you can order.</h2>
                    <ul className="mt-12 divide-y divide-border border-y border-border">
                        {products.map((p) => (
                            <li key={p.name} className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                                <h3 className="text-[24px] leading-tight">{p.name}</h3>
                                <p className="text-muted-foreground sm:text-right">{p.note}</p>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-center text-[15px] text-muted-foreground">
                        Availability changes with the season. We&apos;ll confirm what&apos;s ready when you get in touch.
                    </p>
                </div>
            </section>

            {/* Channels */}
            <section aria-labelledby="channels-title" className="mx-3 mb-3 rounded-tile bg-ink px-6 py-16 text-center text-ink-foreground md:py-20">
                <h2 id="channels-title" className="text-[clamp(1.875rem,4vw,3rem)] leading-[1.08]">Choose how to reach us.</h2>
                <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
                    {[
                        { icon: MessageCircle, label: "Website form", text: "Opens your email app, ready to send.", href: "/contact?topic=Farm%20order" },
                        { icon: Instagram, label: "Instagram", text: "Send a DM to @the_gfarm.", href: tgfSocials.instagram },
                        { icon: Mail, label: "Email", text: EMAIL, href: `mailto:${EMAIL}?subject=${encodeURIComponent("Farm order")}` },
                    ].map((c) => {
                        const isExternal = c.href.startsWith("http")
                        return (
                            <li key={c.label}>
                                <Link
                                    href={c.href}
                                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="flex h-full flex-col items-center rounded-[22px] bg-ink-raised px-5 py-8 transition-colors hover:bg-[#1f1f21]"
                                >
                                    <c.icon className="h-6 w-6 text-[#46C98A]" />
                                    <span className="mt-4 text-[19px] font-semibold">{c.label}</span>
                                    <span className="mt-1 break-all text-[15px] text-ink-muted">{c.text}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}
