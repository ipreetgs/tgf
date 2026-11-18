import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"
import { bookLinks, founderLinks } from "@/lib/links"

export const metadata: Metadata = {
    title: "About the author",
    description: "Gurpreet Singh, author of Art of Attraction: a technologist who applies systems thinking to social dynamics.",
    alternates: { canonical: "/books/author" },
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const

export default function AuthorPage() {
    return (
        <div className="flex flex-col gap-3">
            <section className="mx-3 mt-3 overflow-hidden rounded-tile bg-muted">
                <div className="grid items-center gap-10 px-6 py-14 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16 md:px-16 md:py-20">
                    <div className="relative mx-auto aspect-[3/4] w-60 overflow-hidden rounded-[22px] md:w-full">
                        <Image src="/me.jpg" alt="Gurpreet Singh" fill priority sizes="(min-width: 768px) 360px, 240px" className="object-cover" />
                    </div>
                    <div className="animate-fade-up text-center md:text-left">
                        <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.04] tracking-[-0.035em]">Gurpreet Singh</h1>
                        <p className="mt-3 text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium tracking-[-0.02em] text-muted-foreground">
                            Author of Art of Attraction
                        </p>
                        <p className="mt-6 max-w-2xl text-[19px] leading-relaxed">
                            Unraveling the complexities of human dynamics through evolutionary psychology and practical application.
                            Gurpreet isn&apos;t just an author; he is a technologist and modern thinker who applies systems thinking to
                            social dynamics, helping men navigate the complexities of modern relationships with integrity and
                            confidence.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                            <Button asChild size="lg">
                                <Link href={bookLinks.call} {...external}><Calendar className="h-4 w-4" /> Book a 30-min call</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href={founderLinks.linkedin} {...external}><Linkedin className="h-4 w-4" /> Connect on LinkedIn</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24">
                <div className="container max-w-3xl text-center">
                    <blockquote className="text-[clamp(1.375rem,2.6vw,2rem)] font-medium leading-[1.35] tracking-[-0.02em]">
                        &ldquo;When I write, it&apos;s about people: how we connect, and how to live a balanced life.&rdquo;
                    </blockquote>
                    <p className="mt-4 text-[17px] text-muted-foreground">Gurpreet Singh</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
                        <ChevronLink href="/about">His full story</ChevronLink>
                        <ChevronLink href="/devops">His IT-DevOps work</ChevronLink>
                        <ChevronLink href={bookLinks.buy}>Buy the book</ChevronLink>
                    </div>
                </div>
            </section>
        </div>
    )
}
