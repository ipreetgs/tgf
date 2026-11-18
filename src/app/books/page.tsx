import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, ShoppingCart, Phone, Quote, ArrowRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { founderLinks } from "@/lib/links"

export const metadata: Metadata = {
    title: "Books",
    description: "Art of Attraction by Gurpreet Singh: the psychology of confidence, connection and presence.",
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const
const buyUrl = "https://aofa-7bfb7.web.app/buy.html"
const callUrl = "https://aofa-7bfb7.web.app/booking.html"

const philosophy = [
    { title: "Mindset over method", desc: "Confidence isn't a performance. It's not needing validation. Build a core so strong that rejection stops mattering." },
    { title: "Emotional polarity", desc: "Attraction needs tension. Understand masculine and feminine energy, and how to hold your ground without being aggressive." },
    { title: "Social intelligence", desc: "Read what isn't said. Learn the body language and presence that people respond to instinctively." },
]

const audience = [
    { title: "The high performer", desc: "You've sorted your career and finances, but your love life feels like the one thing you can't solve." },
    { title: "The seeker", desc: "You're tired of gimmicks and want a real understanding of human nature that helps in every interaction." },
    { title: "The realist", desc: "You value truth over comfort, and you're ready to face how dating actually works." },
]

const testimonials = [
    "This book didn't just change how I date. It changed how I walk into a room, how I negotiate business deals, and how I view myself.",
    "Finally, a guide that doesn't rely on 'pickup' tricks. It's about genuine self-improvement and understanding human psychology.",
]

export default function BooksPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-grain border-b">
                <div className="container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
                    <div className="space-y-6">
                        <p className="eyebrow">The psychology of connection</p>
                        <h1 className="text-5xl font-semibold italic leading-[1.05] sm:text-6xl">Art of Attraction</h1>
                        <p className="font-serif text-2xl text-muted-foreground">Attraction is not chased. It is created.</p>
                        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                            Stop relying on logic where emotions decide. A clear guide to the unspoken psychology of polarity,
                            confidence and magnetic presence.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Button asChild size="lg" variant="gold">
                                <Link href={buyUrl} {...external}><ShoppingCart className="h-4 w-4" /> Buy the book</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href={callUrl} {...external}><Phone className="h-4 w-4" /> Book a call</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Book cover */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative h-[440px] w-[290px] -rotate-2 transition-transform duration-500 hover:rotate-0 sm:h-[480px] sm:w-[320px]">
                            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg bg-gold/30" aria-hidden />
                            <div className="relative flex h-full flex-col items-center rounded-lg border-r-8 border-black/40 bg-gradient-to-br from-[#2a2117] to-[#14100b] p-8 text-[#f3e9d7] shadow-2xl">
                                <BookOpen className="absolute right-5 top-5 h-16 w-16 opacity-10" />
                                <div className="mt-auto text-center">
                                    <p className="font-serif text-4xl font-semibold italic leading-tight">Art of<br />Attraction</p>
                                    <div className="mx-auto my-5 h-0.5 w-14 bg-[#e6c27a]" />
                                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">The psychology of connection</p>
                                </div>
                                <p className="mt-auto text-sm font-medium text-[#e6c27a]">Gurpreet Singh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-16 md:py-24">
                <div className="container space-y-12">
                    <SectionHeading
                        eyebrow="The philosophy"
                        title={<>Most advice is about tactics. This book is about <span className="italic text-gold">who you are</span>.</>}
                        align="center"
                    />
                    <div className="grid gap-5 md:grid-cols-3">
                        {philosophy.map((item, i) => (
                            <div key={item.title} className="rounded-2xl border bg-card p-7 shadow-sm">
                                <p className="font-mono text-sm text-gold">0{i + 1}</p>
                                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                                <p className="mt-3 leading-relaxed text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audience */}
            <section className="border-y bg-secondary/40 py-16 md:py-24">
                <div className="container space-y-12">
                    <SectionHeading eyebrow="Who it's for" title="Is this book for you?" align="center" />
                    <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
                        {audience.map((item) => (
                            <div key={item.title} className="space-y-3 text-center">
                                <span className="mx-auto block h-1.5 w-10 rounded-full bg-gold" aria-hidden />
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="mx-auto max-w-[300px] leading-relaxed text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-24">
                <div className="container space-y-12">
                    <SectionHeading eyebrow="Readers say" title="Impact & results" align="center" />
                    <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
                        {testimonials.map((quote) => (
                            <figure key={quote} className="rounded-2xl border bg-card p-8 shadow-sm">
                                <Quote className="h-7 w-7 text-gold/60" aria-hidden />
                                <blockquote className="mt-4 font-serif text-lg italic leading-relaxed">&ldquo;{quote}&rdquo;</blockquote>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* Author */}
            <section className="pb-16 md:pb-24">
                <div className="container">
                    <div className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-[#2a2117] to-[#14100b] p-8 text-[#f3e9d7] sm:p-12 md:grid-cols-[auto_1fr]">
                        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-[#e6c27a]/40 shadow-2xl sm:h-56 sm:w-56">
                            <Image src="/me.jpg" alt="Gurpreet Singh" fill sizes="224px" className="object-cover" />
                        </div>
                        <div className="space-y-5 text-center md:text-left">
                            <div>
                                <p className="eyebrow text-[#e6c27a]">About the author</p>
                                <h2 className="mt-2 text-3xl font-semibold text-white">Gurpreet Singh</h2>
                            </div>
                            <p className="text-lg leading-relaxed text-white/80">
                                Unraveling the complexities of human dynamics through evolutionary psychology and practical
                                application. Gurpreet isn&apos;t just an author; he is a technologist and modern thinker who applies
                                systems thinking to social dynamics, helping men navigate modern relationships with integrity and
                                confidence.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                                <Button asChild variant="gold">
                                    <Link href={founderLinks.linkedin} {...external}><Linkedin className="h-4 w-4" /> Connect on LinkedIn</Link>
                                </Button>
                                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">
                                    <Link href="/about">More about Gurpreet <ArrowRight className="h-4 w-4" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
