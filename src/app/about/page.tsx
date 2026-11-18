import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Instagram, Facebook, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"
import { aegisLinks, bookLinks, founderLinks, sipAndShelfLinks } from "@/lib/links"
import { experience } from "@/lib/portfolio"

export const metadata: Metadata = {
    title: "About the founder",
    description: "Gurpreet Singh: Senior DevOps Engineer with 5+ years of experience, farmer, author, and founder of TGF Group and Sip & Shelf.",
    alternates: { canonical: "/about" },
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const

const socials = [
    { label: "LinkedIn", href: founderLinks.linkedin, icon: Linkedin },
    { label: "GitHub", href: founderLinks.github, icon: Github },
    { label: "Instagram", href: "https://instagram.com/__gurpreet__23", icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/ipreetgs/", icon: Facebook },
    { label: "Portfolio", href: founderLinks.portfolio, icon: Globe },
]

const roles = [
    { title: "DevOps engineer", text: "Pipelines, cloud and reliability, for 5+ years.", href: "/devops" },
    { title: "Farmer", text: "Organic milk, ghee and grain from Firozpur.", href: "/farming" },
    { title: "Author", text: "Art of Attraction, on people and connection.", href: "/books" },
    { title: "Founder", text: "TGF Group, and Sip & Shelf as its CEO.", href: "/devops/products" },
]

export default function AboutPage() {
    const role = experience.find((job) => job.current)?.role ?? "Senior DevOps Engineer"

    return (
        <div className="flex flex-col gap-3">
            {/* Intro */}
            <section className="mx-3 mt-3 overflow-hidden rounded-tile bg-muted">
                <div className="grid items-center gap-10 px-6 py-14 md:grid-cols-[1fr_minmax(0,380px)] md:gap-16 md:px-16 md:py-20">
                    <div className="animate-fade-up text-center md:text-left">
                        <h1 className="text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[1.03] tracking-[-0.035em]">Gurpreet Singh</h1>
                        <p className="mt-3 text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium tracking-[-0.02em] text-muted-foreground">
                            Founder of TGF Group
                        </p>
                        <p className="mx-auto mt-6 max-w-xl text-[19px] leading-relaxed md:mx-0">
                            Technologist by profession, farmer by heart. I spend my days automating cloud infrastructure and the rest
                            of my time on the farm, writing, and building things people can actually use.
                        </p>
                        <ul className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
                            {socials.map(({ label, href, icon: Icon }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        {...external}
                                        aria-label={label}
                                        className="grid h-11 w-11 place-items-center rounded-full bg-background text-foreground/75 transition-colors hover:text-foreground"
                                    >
                                        <Icon className="h-[18px] w-[18px]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative mx-auto aspect-[3/4] w-64 overflow-hidden rounded-[22px] md:w-full">
                        <Image src="/me.jpg" alt="Gurpreet Singh" fill priority sizes="(min-width: 768px) 380px, 256px" className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Roles */}
            <section aria-label="What I do" className="mx-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {roles.map((r) => (
                    <Link key={r.title} href={r.href} className="group rounded-tile bg-muted p-8 transition-colors hover:bg-accent">
                        <h2 className="text-[24px] leading-tight">{r.title}</h2>
                        <p className="mt-2 text-muted-foreground">{r.text}</p>
                        <span className="mt-4 inline-block text-primary group-hover:underline">Learn more ›</span>
                    </Link>
                ))}
            </section>

            {/* Story */}
            <section aria-labelledby="story-title" className="py-20 md:py-28">
                <div className="container max-w-3xl">
                    <h2 id="story-title" className="text-center text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.07]">
                        Two jobs with more in common than you&apos;d think.
                    </h2>
                    <div className="mt-12 space-y-6 text-[19px] leading-[1.6] text-foreground/85">
                        <p>
                            I&apos;m a <strong className="font-semibold text-foreground">DevOps engineer</strong> and a{" "}
                            <strong className="font-semibold text-foreground">farmer</strong>. People are often surprised by that mix,
                            but the two jobs have a lot in common. Servers and crops both need patience, routine and someone who
                            notices small problems before they turn into big ones.
                        </p>
                        <p>
                            In 5+ years I&apos;ve moved from hands-on network security to four years at TestingXperts, building CI/CD
                            pipelines, automating infrastructure with Terraform and Ansible, and leading cloud migrations. I then
                            joined Opstree as a Senior DevOps Specialist, working on client projects such as Tripare and HRC. Today I
                            work as a {role}.
                        </p>
                        <p>
                            At <strong className="font-semibold text-foreground">TGF</strong>, I bring modern methods to traditional
                            farming. We don&apos;t just grow crops; we cultivate sustainability and health. Whether it&apos;s the purity of
                            our buffalo milk or the quality of our Basmati harvest, I bring the same attention to detail to the farm as
                            I do to a production deployment.
                        </p>
                        <p>
                            I&apos;m also the founder and CEO of <strong className="font-semibold text-foreground">Sip &amp; Shelf</strong>,
                            an app that lets readers lend, swap and sell their old books and pick them up at a nearby cafe. On the
                            engineering side, I build <strong className="font-semibold text-foreground">Aegis</strong>, an open-source
                            vulnerability-assessment framework for IT and DevOps teams.
                        </p>
                        <p>
                            My writing, particularly <em>Art of Attraction</em>, is where these worlds meet: exploring human
                            connection, philosophy and the subtle art of living a balanced life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section aria-labelledby="philosophy-title" className="mx-3 rounded-tile bg-ink px-6 py-16 text-ink-foreground md:px-16 md:py-20">
                <h2 id="philosophy-title" className="text-center text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.07]">My philosophy.</h2>
                <div className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
                    <div>
                        <h3 className="text-[24px]">Continuous learning</h3>
                        <p className="mt-2 text-[17px] leading-relaxed text-ink-muted">
                            Technology evolves, and so do I. Staying ahead of the curve is not just a job requirement, but a way of life.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-[24px]">Sustainable living</h3>
                        <p className="mt-2 text-[17px] leading-relaxed text-ink-muted">
                            Balancing high-tech solutions with grounded, eco-friendly farming practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Links */}
            <section className="mx-3 mb-3 rounded-tile bg-muted px-6 py-16 text-center md:py-20">
                <h2 className="text-[clamp(1.875rem,4vw,3rem)] leading-[1.08]">Let&apos;s connect.</h2>
                <p className="mx-auto mt-4 max-w-xl text-[19px] text-muted-foreground">Based in Firozpur, Punjab. Working globally.</p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Send me a message</Link>
                    </Button>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[17px]">
                    <ChevronLink href={founderLinks.portfolio}>My portfolio</ChevronLink>
                    <ChevronLink href={bookLinks.call}>Book a 30-min call</ChevronLink>
                    <ChevronLink href={sipAndShelfLinks.site}>Try Sip &amp; Shelf</ChevronLink>
                    <ChevronLink href={aegisLinks.repo}>Aegis on GitHub</ChevronLink>
                </div>
            </section>
        </div>
    )
}
