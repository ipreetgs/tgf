import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"
import { SectionHeading } from "@/components/section-heading"
import { BookCover } from "@/components/book-cover"
import { bookLinks } from "@/lib/links"

export const metadata: Metadata = {
    title: "Art of Attraction",
    description: "Art of Attraction by Gurpreet Singh: the psychology of polarity, confidence and magnetic presence. Buy the book or book a 30-minute call.",
    alternates: { canonical: "/books" },
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const

const philosophy = [
    { title: "Mindset over method", desc: "Confidence isn't a performance. It's the absence of the need for validation. Build a core so strong that rejection becomes irrelevant." },
    { title: "Emotional polarity", desc: "Attraction requires tension. Learn the dynamics of masculine and feminine energy, and how to hold your ground without being aggressive." },
    { title: "Social intelligence", desc: "Read what isn't said. Master the sub-communication of body language and presence that triggers instinctive attraction." },
]

const audience = [
    { title: "The high performer", desc: "You've optimised your career and finances, but your romantic life feels like the only variable you can't solve." },
    { title: "The seeker", desc: "You're tired of gimmicks. You want a deep, psychological understanding of human nature that applies to every interaction." },
    { title: "The realist", desc: "You value truth over comfort. You're ready to face how dating really works, and to compete at the highest level." },
]

const testimonials = [
    "This book didn't just change how I date. It changed how I walk into a room, how I negotiate business deals, and how I view myself.",
    "Finally, a guide that doesn't rely on 'pickup' tricks. It's about genuine self-improvement and understanding human psychology.",
]

export default function BooksPage() {
    return (
        <div className="flex flex-col gap-3">
            {/* Hero */}
            <section className="mx-3 mt-3 overflow-hidden rounded-tile bg-muted">
                <div className="grid items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:px-16 md:py-20">
                    <div className="animate-fade-up text-center md:text-left">
                        <h1 className="text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[1.03] tracking-[-0.035em]">Art of Attraction</h1>
                        <p className="mt-4 text-[clamp(1.375rem,2.6vw,2rem)] font-medium leading-[1.2] tracking-[-0.02em]">
                            Attraction is not chased. It is created.
                        </p>
                        <p className="mx-auto mt-5 max-w-lg text-[19px] leading-relaxed text-muted-foreground md:mx-0">
                            Stop relying on logic where emotions decide. The definitive guide to the unspoken psychology of polarity,
                            confidence and magnetic presence, by Gurpreet Singh.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                            <Button asChild size="lg">
                                <Link href={bookLinks.buy} {...external}><ShoppingBag className="h-4 w-4" /> Buy the book</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href={bookLinks.call} {...external}><Calendar className="h-4 w-4" /> Book a 30-min call</Link>
                            </Button>
                        </div>
                        <ChevronLink href={bookLinks.site} className="mt-6 text-[17px]">Visit the book&apos;s website</ChevronLink>
                    </div>
                    <div className="flex justify-center py-6">
                        <BookCover size="lg" />
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section aria-labelledby="philosophy-title" className="py-20 md:py-28">
                <div className="container">
                    <SectionHeading
                        id="philosophy-title"
                        title="Most advice is about tactics. This is about who you are."
                    />
                    <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
                        {philosophy.map((item) => (
                            <li key={item.title} className="border-t border-border pt-6">
                                <h3 className="text-[26px] leading-tight">{item.title}</h3>
                                <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Audience */}
            <section aria-labelledby="audience-title" className="mx-3 rounded-tile bg-ink px-6 py-16 text-ink-foreground md:px-16 md:py-24">
                <h2 id="audience-title" className="text-center text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.07]">Who is this for?</h2>
                <ul className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-3">
                    {audience.map((item) => (
                        <li key={item.title} className="text-center">
                            <h3 className="text-[24px] leading-tight">{item.title}</h3>
                            <p className="mt-3 text-[17px] leading-relaxed text-ink-muted">{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Testimonials */}
            <section aria-labelledby="readers-title" className="py-20 md:py-28">
                <div className="container">
                    <SectionHeading id="readers-title" title="Impact & results." />
                    <div className="mx-auto mt-14 grid max-w-5xl gap-3 md:grid-cols-2">
                        {testimonials.map((quote) => (
                            <figure key={quote} className="rounded-tile bg-muted px-8 py-10">
                                <blockquote className="text-[clamp(1.25rem,2.2vw,1.5rem)] font-medium leading-[1.4] tracking-[-0.015em]">
                                    &ldquo;{quote}&rdquo;
                                </blockquote>
                                <figcaption className="mt-5 text-[15px] text-muted-foreground">A reader</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* Buy */}
            <section aria-labelledby="buy-title" className="mx-3 mb-3 rounded-tile bg-muted px-6 py-16 text-center md:py-20">
                <h2 id="buy-title" className="text-[clamp(1.875rem,4vw,3rem)] leading-[1.08]">Start reading today.</h2>
                <p className="mx-auto mt-4 max-w-xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] text-muted-foreground">
                    Buy the book on Gumroad, or book a 30-minute call with Gurpreet.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button asChild size="lg">
                        <Link href={bookLinks.buy} {...external}><ShoppingBag className="h-4 w-4" /> Buy the book</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href={bookLinks.call} {...external}><Calendar className="h-4 w-4" /> Book a 30-min call</Link>
                    </Button>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
                    <ChevronLink href={bookLinks.site}>The book&apos;s website</ChevronLink>
                    <ChevronLink href="/books/author">About the author</ChevronLink>
                </div>
            </section>
        </div>
    )
}
