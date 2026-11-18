import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
    Github, Linkedin, Instagram, Facebook, Globe, MapPin, Mail, ArrowRight, ArrowUpRight,
    Sprout, Terminal, BookOpen, Coffee, Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { aegisLinks, founderLinks, sipAndShelfLinks } from "@/lib/links"
import { experience } from "@/lib/portfolio"

export const metadata: Metadata = {
    title: "About the Founder",
    description: "Gurpreet Singh: Senior DevOps engineer, farmer, author, and founder of TGF and Sip & Shelf.",
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const

const socials = [
    { label: "LinkedIn", href: founderLinks.linkedin, icon: Linkedin },
    { label: "GitHub", href: founderLinks.github, icon: Github },
    { label: "Instagram", href: "https://instagram.com/__gurpreet__23", icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/ipreetgs/", icon: Facebook },
    { label: "Portfolio", href: founderLinks.portfolio, icon: Globe },
]

const hats = [
    { icon: Terminal, title: "DevOps engineer", text: "Pipelines, cloud and reliability, for over 4.5 years." },
    { icon: Sprout, title: "Farmer", text: "Organic milk, ghee and grain from our fields in Firozpur." },
    { icon: BookOpen, title: "Author", text: "Writing about people, connection and balance." },
    { icon: Coffee, title: "Founder", text: "Building Sip & Shelf, a cafe-based book sharing app." },
]

export default function AboutPage() {
    const currentRole = experience.find((job) => job.current)

    return (
        <div className="flex flex-col">
            {/* Intro */}
            <section className="bg-grain border-b">
                <div className="container grid items-center gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
                    <div className="space-y-6 text-center md:text-left">
                        <p className="eyebrow">Founder · TGF &amp; Sip &amp; Shelf</p>
                        <h1 className="text-5xl font-semibold sm:text-6xl">Gurpreet Singh</h1>
                        <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0 md:text-xl">
                            Technologist by profession, farmer by heart. I spend my days automating cloud infrastructure and
                            the rest of my time on the farm, writing, and building things people can actually use.
                        </p>
                        <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
                            {socials.map(({ label, href, icon: Icon }) => (
                                <li key={label}>
                                    <Button asChild variant="outline" size="icon">
                                        <Link href={href} {...external} aria-label={label}>
                                            <Icon className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative mx-auto w-64 sm:w-72 md:w-80">
                        <div className="absolute -inset-3 -z-10 -rotate-3 rounded-[2rem] bg-primary/15" aria-hidden />
                        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border-4 border-background shadow-2xl">
                            <Image src="/me.jpg" alt="Gurpreet Singh" fill priority sizes="320px" className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Many hats */}
            <section className="py-12">
                <div className="container">
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {hats.map((hat) => (
                            <li key={hat.title} className="rounded-2xl border bg-card p-5 shadow-sm">
                                <hat.icon className="h-6 w-6 text-primary" />
                                <p className="mt-3 font-serif text-lg font-semibold">{hat.title}</p>
                                <p className="mt-1 text-sm text-muted-foreground">{hat.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Story */}
            <section className="pb-16 md:pb-24">
                <div className="container grid gap-12 lg:grid-cols-[1fr_320px]">
                    <article className="max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/85">
                        <SectionHeading eyebrow="My story" title="Two jobs with more in common than you'd think" className="mb-8" />
                        <p>
                            I&apos;m a <strong>DevOps engineer</strong> and a <strong>farmer</strong>. People are often surprised by
                            that mix, but the two jobs have a lot in common. Servers and crops both need patience, routine and
                            someone who notices small problems before they turn into big ones.
                        </p>
                        <p>
                            I started in hands-on network security, then spent four years at TestingXperts building CI/CD
                            pipelines, automating infrastructure with Terraform and Ansible, and leading cloud migrations. After
                            that I joined Opstree as a Senior DevOps Specialist, working on client projects such as Tripare and
                            HRC. Today I work as a {currentRole?.role ?? "Senior DevOps Engineer"}.
                        </p>
                        <p>
                            At <strong>TGF</strong>, I bring modern methods to traditional farming. We care about the purity of
                            our buffalo milk and the quality of our Basmati harvest the same way I care about a production
                            deployment: every detail counts.
                        </p>
                        <p>
                            I&apos;m also the founder and CEO of <strong>Sip &amp; Shelf</strong>, an app that lets readers lend,
                            swap and sell their old books and pick them up at a nearby cafe. I wanted a reason to read more and
                            to meet the people who read too. On the engineering side, I build <strong>Aegis</strong>, an
                            open-source vulnerability-assessment framework for IT and DevOps teams.
                        </p>
                        <p>
                            And when I write, as in <em>&quot;The Art of Attraction&quot;</em>, it&apos;s about people: how we
                            connect, and how to live a balanced life.
                        </p>

                        <div className="grid gap-4 pt-6 sm:grid-cols-2">
                            {[
                                { title: "Continuous learning", text: "Technology changes every year, and so do I. Staying curious is part of the job." },
                                { title: "Sustainable living", text: "Using good technology without losing touch with the land and how food is grown." },
                            ].map((value) => (
                                <div key={value.title} className="rounded-2xl border bg-secondary/40 p-5">
                                    <p className="font-serif text-lg font-semibold">{value.title}</p>
                                    <p className="mt-1 text-sm text-muted-foreground">{value.text}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
                        <div className="space-y-4 rounded-2xl border bg-card p-6 shadow-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm font-medium">Based in</p>
                                    <p className="text-sm text-muted-foreground">Firozpur, Punjab · working globally</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm font-medium">Say hello</p>
                                    <Link href="/contact" className="text-sm text-primary hover:underline">Send me a message</Link>
                                </div>
                            </div>
                        </div>

                        <nav aria-label="Quick links" className="rounded-2xl border bg-secondary/40 p-6">
                            <p className="mb-3 font-semibold">Quick links</p>
                            <ul className="space-y-1 text-sm">
                                {[
                                    { label: "My IT-DevOps work", href: "/devops", icon: Terminal },
                                    { label: "Read \"Art of Attraction\"", href: "/books", icon: BookOpen },
                                    { label: "My portfolio", href: founderLinks.portfolio, icon: Globe, ext: true },
                                    { label: "Try Sip & Shelf", href: sipAndShelfLinks.site, icon: Coffee, ext: true },
                                    { label: "Aegis on GitHub", href: aegisLinks.repo, icon: Shield, ext: true },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            {...(link.ext ? external : {})}
                                            className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-background"
                                        >
                                            <link.icon className="h-4 w-4 text-primary" />
                                            <span className="flex-1">{link.label}</span>
                                            {link.ext ? (
                                                <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                                            ) : (
                                                <ArrowRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:translate-x-0.5" />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                </div>
            </section>
        </div>
    )
}
