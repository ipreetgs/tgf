import type { Metadata } from "next"
import Link from "next/link"
import {
    Server, Code, Cloud, Shield, Linkedin, Globe, Github, Instagram, ArrowUpRight,
    BookOpen, Coffee, Search, Handshake, Package, Gauge, Briefcase, CheckCircle2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { aegisLinks, founderLinks, sipAndShelfLinks } from "@/lib/links"
import { clientProjects, experience } from "@/lib/portfolio"

export const metadata: Metadata = {
    title: "IT-DevOps",
    description: "Gurpreet Singh's IT and DevOps work, plus the products he builds: Sip & Shelf and Aegis.",
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const

const sections = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Client work", href: "#client-work" },
    { label: "Toolbox", href: "#toolbox" },
]

const toolbox = [
    { title: "Cloud & Containers", icon: Cloud, skills: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"] },
    { title: "Automation & IaC", icon: Code, skills: ["Terraform", "Ansible", "Python", "Bash", "Chef"] },
    { title: "Security", icon: Shield, skills: ["VAPT", "Zero Trust", "NetSec", "DevSecOps"] },
    { title: "CI/CD & Observability", icon: Server, skills: ["Jenkins", "Harness", "Git", "Nexus", "Prometheus"] },
]

export default function DevOpsPage() {
    const currentRole = experience.find((job) => job.current)

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-grain relative overflow-hidden border-b">
                <div className="container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
                    <div className="space-y-6">
                        <p className="eyebrow">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                            </span>
                            IT-DevOps
                        </p>
                        <h1 className="text-5xl font-semibold leading-[1.05] sm:text-6xl">Hi, I&apos;m Gurpreet.</h1>
                        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                            I&apos;m a {currentRole?.role ?? "DevOps engineer"}. My job is the work you only notice when it
                            breaks: pipelines, cloud infrastructure, monitoring and security, so releases go out smoothly and
                            nobody gets paged at 3 a.m. Outside the day job, I build my own products.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button asChild size="lg">
                                <Link href={founderLinks.linkedin} {...external}>
                                    <Linkedin className="h-4 w-4" /> LinkedIn
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href={founderLinks.portfolio} {...external}>
                                    <Globe className="h-4 w-4" /> Portfolio
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="ghost">
                                <Link href={founderLinks.github} {...external}>
                                    <Github className="h-4 w-4" /> GitHub
                                </Link>
                            </Button>
                        </div>
                        <dl className="grid max-w-lg grid-cols-3 gap-4 border-t pt-6">
                            {[
                                { label: "Role", value: "Senior DevOps" },
                                { label: "Experience", value: "5+ years" },
                                { label: "Building", value: "2 products" },
                            ].map((fact) => (
                                <div key={fact.label}>
                                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</dt>
                                    <dd className="mt-1 font-serif text-lg font-semibold">{fact.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Terminal */}
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#0f1714] text-[#e7e3d8] shadow-2xl shadow-primary/10 dark:border-white/10">
                        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                            <span className="ml-3 font-mono text-xs text-white/40">gurpreet@tgf: ~</span>
                        </div>
                        <div className="space-y-3 overflow-x-auto p-6 font-mono text-sm leading-relaxed">
                            <p><span className="text-[#7bd88f]">➜</span> <span className="text-[#78b7ff]">~</span> whoami</p>
                            <p className="pl-4 text-[#7bd88f]">Gurpreet Singh · {currentRole?.role ?? "DevOps Engineer"} · Founder</p>
                            <p><span className="text-[#7bd88f]">➜</span> <span className="text-[#78b7ff]">~</span> cat skills.json | jq .core</p>
                            <p className="pl-4 text-[#f2c879]">[&quot;AWS&quot;, &quot;Azure&quot;, &quot;Kubernetes&quot;, &quot;Terraform&quot;, &quot;Ansible&quot;, &quot;CI/CD&quot;]</p>
                            <p><span className="text-[#7bd88f]">➜</span> <span className="text-[#78b7ff]">~</span> ls ~/building</p>
                            <p className="pl-4"><span className="mr-6 text-[#f2c879]">sip-and-shelf/</span><span className="text-[#7bd88f]">aegis/</span></p>
                            <p><span className="text-[#7bd88f]">➜</span> <span className="text-[#78b7ff]">~</span> <span className="animate-pulse">▋</span></p>
                        </div>
                    </div>
                </div>

                {/* On-page navigation */}
                <nav aria-label="On this page" className="container pb-8">
                    <ul className="flex flex-wrap gap-2">
                        {sections.map((s) => (
                            <li key={s.href}>
                                <a href={s.href} className="inline-flex rounded-full border bg-background/70 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>

            {/* Products */}
            <section id="projects" className="py-16 md:py-24">
                <div className="container space-y-12">
                    <SectionHeading
                        eyebrow="What I'm building"
                        title="Two products, two problems I kept running into"
                        description="One app for readers and one tool for engineers."
                    />

                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Sip & Shelf */}
                        <article className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold">
                                    <Coffee className="h-6 w-6" />
                                </span>
                                <Badge className="border-none bg-gold/15 text-gold hover:bg-gold/15">Founder &amp; CEO</Badge>
                            </div>
                            <h3 className="mt-6 text-3xl font-semibold">Sip &amp; Shelf</h3>
                            <p className="mt-1 font-medium text-gold">A good book. A nearby cafe. A reason to step out.</p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Most of us have a shelf of books we&apos;ve already read and a list of books we want to read next.
                                Sip &amp; Shelf connects the two. You lend, rent, swap, donate or sell your old books to readers
                                nearby. There&apos;s no shipping: the book waits at a partner cafe, and you pick it up over a coffee.
                            </p>
                            <ol className="mt-6 grid gap-3 sm:grid-cols-3">
                                {[
                                    { icon: Search, title: "Find or list", text: "Search by title, author or ISBN, or list your own." },
                                    { icon: Handshake, title: "Pick the terms", text: "Lend, rent, exchange, donate or sell." },
                                    { icon: Coffee, title: "Meet at a cafe", text: "Collect it at a partner cafe nearby." },
                                ].map((step, i) => (
                                    <li key={step.title} className="rounded-xl bg-secondary/60 p-4">
                                        <div className="flex items-center gap-2 text-gold">
                                            <step.icon className="h-4 w-4" />
                                            <span className="font-mono text-xs">0{i + 1}</span>
                                        </div>
                                        <p className="mt-2 text-sm font-semibold">{step.title}</p>
                                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.text}</p>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-8 flex flex-wrap items-center gap-3 pt-2 lg:mt-auto">
                                <Button asChild variant="gold">
                                    <Link href={sipAndShelfLinks.site} {...external}>
                                        <BookOpen className="h-4 w-4" /> Open the app <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="icon">
                                    <Link href={sipAndShelfLinks.instagram} {...external} aria-label="Sip & Shelf on Instagram">
                                        <Instagram className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="icon">
                                    <Link href={sipAndShelfLinks.linkedin} {...external} aria-label="Sip & Shelf on LinkedIn">
                                        <Linkedin className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </article>

                        {/* Aegis */}
                        <article className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                                    <Shield className="h-6 w-6" />
                                </span>
                                <Badge className="border-none bg-primary/10 text-primary hover:bg-primary/10">Open Source</Badge>
                            </div>
                            <h3 className="mt-6 text-3xl font-semibold">Aegis</h3>
                            <p className="mt-1 font-medium text-primary">An open-source security framework for IT and DevOps teams.</p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Every team wants to know &quot;are we exposed?&quot; before shipping, but most scanners are paid black
                                boxes. Aegis builds its own vulnerability index from public feeds (NVD, OSV, Exploit-DB, KEV and
                                EPSS) and checks your code, containers and endpoints against it. Scan what you own, see what
                                matters first, fix it.
                            </p>
                            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                {[
                                    { icon: Code, title: "Code scans", text: "Secrets, risky patterns and vulnerable dependencies." },
                                    { icon: Package, title: "Container images", text: "OS and language packages matched to known CVEs." },
                                    { icon: Globe, title: "Endpoint hygiene", text: "Passive checks for headers and exposed files." },
                                    { icon: Gauge, title: "Clear priorities", text: "CVSS v3.1 plus KEV and EPSS signals in one report." },
                                ].map((item) => (
                                    <li key={item.title} className="rounded-xl bg-secondary/60 p-4">
                                        <div className="flex items-center gap-2">
                                            <item.icon className="h-4 w-4 text-primary" />
                                            <p className="text-sm font-semibold">{item.title}</p>
                                        </div>
                                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                            <code className="mt-6 block overflow-x-auto rounded-xl bg-[#0f1714] px-4 py-3 font-mono text-sm text-[#e7e3d8]">
                                <span className="text-[#7bd88f]">$</span> aegis init &amp;&amp; aegis --code ./my-app
                            </code>
                            <div className="mt-8 flex flex-wrap gap-3 pt-2 lg:mt-auto">
                                <Button asChild>
                                    <Link href={aegisLinks.repo} {...external}>
                                        <Github className="h-4 w-4" /> View on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href={`${aegisLinks.repo}#readme`} {...external}>Read the docs</Link>
                                </Button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="border-y bg-secondary/40 py-16 md:py-24">
                <div className="container grid gap-12 lg:grid-cols-[1fr_2fr]">
                    <SectionHeading
                        eyebrow="Experience"
                        title="Where I've worked"
                        description="I started in network security, spent four years building pipelines and clouds at TestingXperts, and now work as a Senior DevOps Engineer."
                        className="lg:sticky lg:top-28 lg:self-start"
                    />

                    <ol className="relative space-y-6 border-l-2 border-border pl-6 sm:pl-8">
                        {experience.map((job) => (
                            <li key={`${job.role}-${job.period}`} className="relative">
                                <span
                                    className={
                                        job.current
                                            ? "absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-background bg-primary ring-4 ring-primary/20 sm:-left-[41px]"
                                            : "absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-background bg-muted-foreground/40 sm:-left-[41px]"
                                    }
                                    aria-hidden
                                />
                                <div className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{job.period}</p>
                                        {job.current && <Badge className="border-none bg-primary text-primary-foreground hover:bg-primary">Current</Badge>}
                                    </div>
                                    <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
                                    {job.company && (
                                        <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-gold">
                                            <Briefcase className="h-3.5 w-3.5" /> {job.company}
                                        </p>
                                    )}
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
                                    {job.highlights && (
                                        <ul className="mt-4 space-y-2">
                                            {job.highlights.map((h) => (
                                                <li key={h} className="flex gap-2 text-sm">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Client & team projects */}
            <section id="client-work" className="py-16 md:py-24">
                <div className="container space-y-12">
                    <SectionHeading
                        eyebrow="Client & team projects"
                        title="Work I've delivered"
                        description="Client and team projects from my DevOps work so far."
                    />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {clientProjects.map((project) => (
                            <article key={project.title} className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    {project.company && (
                                        <Badge variant="outline" className="shrink-0 border-gold/40 text-gold">{project.company}</Badge>
                                    )}
                                </div>
                                <p className="mt-1 text-sm font-medium text-primary">{project.role}</p>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Toolbox */}
            <section id="toolbox" className="border-t bg-secondary/40 py-16 md:py-24">
                <div className="container space-y-12">
                    <SectionHeading eyebrow="Toolbox" title="What I work with every day" />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {toolbox.map((group) => (
                            <div key={group.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                                <group.icon className="h-7 w-7 text-primary" />
                                <h3 className="mt-4 text-lg font-semibold">{group.title}</h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <Badge key={skill} variant="outline" className="font-normal">{skill}</Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Connect */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 md:py-16">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/30 blur-3xl" aria-hidden />
                        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-semibold sm:text-4xl">Let&apos;s work together</h2>
                                <p className="max-w-lg text-primary-foreground/80">
                                    Need help with a pipeline, a cloud migration or a security review? Or just want to talk about
                                    Sip &amp; Shelf or Aegis? My full portfolio and work history are one click away.
                                </p>
                            </div>
                            <div className="grid gap-3">
                                {[
                                    { icon: Linkedin, label: "LinkedIn", sub: "Work history & updates", href: founderLinks.linkedin },
                                    { icon: Globe, label: "Portfolio", sub: "Projects & case studies", href: founderLinks.portfolio },
                                    { icon: Github, label: "GitHub", sub: "Code, including Aegis", href: founderLinks.github },
                                ].map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        {...external}
                                        className="group flex items-center gap-4 rounded-xl bg-primary-foreground/10 px-5 py-4 transition-colors hover:bg-primary-foreground/20"
                                    >
                                        <link.icon className="h-5 w-5 shrink-0" />
                                        <div className="flex-1">
                                            <p className="font-semibold">{link.label}</p>
                                            <p className="text-xs text-primary-foreground/70">{link.sub}</p>
                                        </div>
                                        <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
