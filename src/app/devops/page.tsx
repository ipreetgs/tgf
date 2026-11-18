import type { Metadata } from "next"
import Link from "next/link"
import { Linkedin, Globe, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"
import { SectionHeading } from "@/components/section-heading"
import { Terminal } from "@/components/terminal"
import { founderLinks } from "@/lib/links"
import { clientProjects, experience } from "@/lib/portfolio"

export const metadata: Metadata = {
    title: "IT-DevOps",
    description: "Gurpreet Singh, Senior DevOps Engineer with 5+ years of experience: pipelines, cloud, reliability and security, plus Sip & Shelf and Aegis.",
    alternates: { canonical: "/devops" },
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const

export default function DevOpsPage() {
    const currentRole = experience.find((job) => job.current)
    const role = currentRole?.role ?? "Senior DevOps Engineer"

    const explore = [
        { title: "Products", text: "Sip & Shelf and Aegis, the two products I'm building.", href: "/devops/products" },
        { title: "Experience", text: `${experience.length} roles across 5+ years, from network security to senior DevOps.`, href: "/devops/experience" },
        { title: "Projects", text: `${clientProjects.length} client and team projects, including Tripare and HRC.`, href: "/devops/projects" },
        { title: "Skills", text: "Cloud, automation, security, CI/CD and observability.", href: "/devops/skills" },
    ]

    return (
        <div className="flex flex-col gap-3">
            {/* Hero */}
            <section className="mx-3 mt-3 overflow-hidden rounded-tile bg-ink text-ink-foreground">
                <div className="grid items-center gap-12 px-6 py-16 md:px-16 md:py-20 lg:grid-cols-2">
                    <div className="animate-fade-up text-center lg:text-left">
                        <h1 className="text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[1.03] tracking-[-0.035em]">Hi, I&apos;m Gurpreet.</h1>
                        <p className="mt-4 text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium tracking-[-0.02em]">
                            {role}. 5+ years in DevOps.
                        </p>
                        <p className="mx-auto mt-5 max-w-lg text-[19px] leading-relaxed text-ink-muted lg:mx-0">
                            My job is the work you only notice when it breaks: pipelines, cloud infrastructure, monitoring and
                            security, so releases go out smoothly and nobody gets paged at 3 a.m. Outside the day job, I build my own
                            products.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                            <Button asChild size="lg" variant="light">
                                <Link href={founderLinks.linkedin} {...external}><Linkedin className="h-4 w-4" /> LinkedIn</Link>
                            </Button>
                            <Button asChild size="lg" variant="ghostLight">
                                <Link href={founderLinks.portfolio} {...external}><Globe className="h-4 w-4" /> Portfolio</Link>
                            </Button>
                            <Button asChild size="lg" variant="ghostLight">
                                <Link href={founderLinks.github} {...external}><Github className="h-4 w-4" /> GitHub</Link>
                            </Button>
                        </div>
                    </div>
                    <Terminal role={role} className="shadow-[0_30px_80px_-30px_rgba(70,201,138,0.35)]" />
                </div>
            </section>

            {/* Explore */}
            <section aria-labelledby="explore-title" className="py-20 md:py-28">
                <div className="container">
                    <SectionHeading id="explore-title" title="Explore my work." description="Each part has its own page." />
                    <ul className="mt-12 grid gap-3 sm:grid-cols-2">
                        {explore.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="group flex h-full flex-col rounded-tile bg-muted p-8 transition-colors hover:bg-accent md:p-10">
                                    <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">{item.title}</h3>
                                    <p className="mt-3 text-[17px] text-muted-foreground">{item.text}</p>
                                    <span className="mt-6 text-[17px] text-primary group-hover:underline">Open {item.title.toLowerCase()} ›</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Highlight */}
            <section className="mx-3 rounded-tile bg-muted px-6 py-16 text-center md:py-24">
                <p className="text-[clamp(4rem,12vw,8rem)] font-semibold leading-none tracking-[-0.05em] text-primary">40%</p>
                <p className="mx-auto mt-4 max-w-xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35]">
                    less deployment time, after I rebuilt multi-cloud CI/CD pipelines at TestingXperts.
                </p>
                <ChevronLink href="/devops/experience" className="mt-6 text-[17px]">See my experience</ChevronLink>
            </section>

            {/* Connect */}
            <section aria-labelledby="connect-title" className="mx-3 mb-3 rounded-tile bg-ink px-6 py-16 text-center text-ink-foreground md:py-20">
                <h2 id="connect-title" className="text-[clamp(1.875rem,4vw,3rem)] leading-[1.08]">Let&apos;s work together.</h2>
                <p className="mx-auto mt-4 max-w-xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] text-ink-muted">
                    Need help with a pipeline, a cloud migration or a security review? Or want to talk about Sip &amp; Shelf or Aegis?
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button asChild size="lg" variant="light">
                        <Link href="/contact?topic=DevOps%20work">Get in touch</Link>
                    </Button>
                    <Button asChild size="lg" variant="ghostLight">
                        <Link href={founderLinks.portfolio} {...external}>View full portfolio</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
