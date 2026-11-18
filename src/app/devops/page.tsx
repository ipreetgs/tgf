import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Terminal, Server, Code, Cloud, Shield, Linkedin, Globe, Github, Instagram,
    ExternalLink, BookOpen, Coffee, Search, Handshake, Package, Gauge, GitBranch, Rocket,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { aegisLinks, founderLinks, sipAndShelfLinks } from "@/lib/links"

export const metadata: Metadata = {
    title: "IT-DevOps | TGF Group",
    description: "Gurpreet Singh's IT and DevOps work, plus the products he builds: Sip & Shelf and Aegis.",
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const

export default function DevOpsPage() {
    return (
        <div className="flex flex-col min-h-screen font-mono bg-slate-950 text-slate-300">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 xl:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Animated Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-green-500/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

                <div className="container relative px-4 md:px-6 z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-6">
                            <div className="inline-flex items-center space-x-2 border border-green-500/30 rounded-full px-3 py-1 bg-green-950/30 w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-medium text-green-400">IT-DevOps</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                                Hi, I&apos;m Gurpreet.
                            </h1>
                            <p className="max-w-[600px] text-slate-400 md:text-xl leading-relaxed">
                                I&apos;m a DevOps engineer. My job is the work you only notice when it breaks: pipelines, cloud
                                infrastructure, monitoring and security, so releases go out smoothly and nobody gets paged at 3 a.m.
                            </p>
                            <p className="max-w-[600px] text-slate-400 md:text-lg leading-relaxed">
                                Outside the day job I build my own products. Two of them are below.
                            </p>

                            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                                <Link href={founderLinks.linkedin} {...external}>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2">
                                        <Linkedin className="h-4 w-4" /> LinkedIn
                                    </Button>
                                </Link>
                                <Link href={founderLinks.portfolio} {...external}>
                                    <Button variant="outline" className="w-full bg-transparent border-green-600 text-green-400 hover:bg-green-900/50 hover:text-green-300 gap-2">
                                        <Globe className="h-4 w-4" /> Portfolio
                                    </Button>
                                </Link>
                                <Link href={founderLinks.github} {...external}>
                                    <Button variant="outline" className="w-full bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white gap-2">
                                        <Github className="h-4 w-4" /> GitHub
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Terminal Visual */}
                        <div className="relative rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-sm overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-4 text-xs text-slate-500 font-sans">bash — 80x24</div>
                            </div>
                            <div className="p-6 space-y-2 font-mono text-sm overflow-x-auto">
                                <div className="flex">
                                    <span className="text-green-500 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-slate-300">whoami</span>
                                </div>
                                <div className="text-green-400 ml-4">Gurpreet Singh, DevOps Engineer and Founder</div>

                                <div className="flex pt-2">
                                    <span className="text-green-500 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-slate-300">cat skills.json | jq .core</span>
                                </div>
                                <div className="ml-4 text-orange-300">
                                    {`[`}<br />
                                    &nbsp;&nbsp;&quot;AWS&quot;, &quot;Azure&quot;, &quot;Kubernetes&quot;,<br />
                                    &nbsp;&nbsp;&quot;Terraform&quot;, &quot;Ansible&quot;,<br />
                                    &nbsp;&nbsp;&quot;Python&quot;, &quot;CI/CD&quot;<br />
                                    {`]`}
                                </div>

                                <div className="flex pt-2">
                                    <span className="text-green-500 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-slate-300">ls ~/building</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-amber-300 mr-6">sip-and-shelf/</span>
                                    <span className="text-emerald-300">aegis/</span>
                                </div>

                                <div className="flex pt-2">
                                    <span className="text-green-500 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-slate-300 animate-pulse">_</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Projects */}
            <section id="projects" className="w-full py-12 md:py-24 border-t border-slate-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col space-y-4 mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">What I&apos;m Building</h2>
                        <p className="text-slate-400 max-w-[700px]">
                            One app for readers and one tool for engineers. Both started with a problem I kept running into myself.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Sip & Shelf */}
                        <Card className="bg-slate-950 border-amber-500/30 hover:border-amber-400/60 transition-colors flex flex-col">
                            <CardHeader className="space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                        <Coffee className="h-7 w-7 text-amber-400" />
                                    </div>
                                    <Badge className="bg-amber-900/60 text-amber-200 hover:bg-amber-900/60 border-none">Founder &amp; CEO</Badge>
                                </div>
                                <div>
                                    <CardTitle className="text-white text-2xl">Sip &amp; Shelf</CardTitle>
                                    <CardDescription className="text-amber-300/90 mt-2 text-base">
                                        A good book. A nearby cafe. A reason to step out.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow gap-6">
                                <p className="text-slate-400 leading-relaxed font-sans">
                                    Most of us have a shelf of books we&apos;ve already read and a list of books we want to read next.
                                    Sip &amp; Shelf connects the two. You lend, rent, swap, donate or sell your old books to readers
                                    near you. There&apos;s no shipping: the book waits at a partner cafe, and you pick it up over a coffee.
                                    Reading a book becomes a small outing.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-3 font-sans">
                                    {[
                                        { icon: Search, title: "Find or list", text: "Search by title, author or ISBN, or list a book from your shelf." },
                                        { icon: Handshake, title: "Pick the terms", text: "Lend, rent, exchange, donate, give away or sell." },
                                        { icon: Coffee, title: "Meet at a cafe", text: "Collect the book at a partner cafe near you." },
                                    ].map((step, i) => (
                                        <div key={step.title} className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <step.icon className="h-4 w-4 text-amber-400" />
                                                <span className="text-xs text-amber-400 font-mono">0{i + 1}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-slate-200">{step.title}</p>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {["Community", "Book Sharing", "Cafes", "Chandigarh Tricity"].map(tag => (
                                        <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                                    <Link href={sipAndShelfLinks.site} {...external}>
                                        <Button className="bg-amber-600 hover:bg-amber-500 text-white gap-2">
                                            <BookOpen className="h-4 w-4" /> Open the App <ExternalLink className="h-3 w-3" />
                                        </Button>
                                    </Link>
                                    <Link href={sipAndShelfLinks.instagram} {...external} aria-label="Sip & Shelf on Instagram">
                                        <Button variant="outline" size="icon" className="bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-pink-400">
                                            <Instagram className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href={sipAndShelfLinks.linkedin} {...external} aria-label="Sip & Shelf on LinkedIn">
                                        <Button variant="outline" size="icon" className="bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-blue-400">
                                            <Linkedin className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Aegis */}
                        <Card className="bg-slate-950 border-emerald-500/30 hover:border-emerald-400/60 transition-colors flex flex-col">
                            <CardHeader className="space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                        <Shield className="h-7 w-7 text-emerald-400" />
                                    </div>
                                    <Badge className="bg-emerald-900/60 text-emerald-200 hover:bg-emerald-900/60 border-none">Open Source</Badge>
                                </div>
                                <div>
                                    <CardTitle className="text-white text-2xl">Aegis</CardTitle>
                                    <CardDescription className="text-emerald-300/90 mt-2 text-base">
                                        An open-source security framework for IT and DevOps teams.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow gap-6">
                                <p className="text-slate-400 leading-relaxed font-sans">
                                    Every team wants to know &quot;are we exposed?&quot; before shipping, but most scanners are paid black
                                    boxes. Aegis builds its own vulnerability index from public feeds (NVD, OSV, Exploit-DB, KEV and
                                    EPSS) and checks your code, container images and endpoints against it, with no commercial scanning
                                    API involved. It&apos;s built for defenders: scan what you own, see what matters first, fix it.
                                </p>

                                <ul className="grid sm:grid-cols-2 gap-3 font-sans">
                                    {[
                                        { icon: Code, title: "Code scans", text: "Leaked secrets, risky patterns and vulnerable dependencies." },
                                        { icon: Package, title: "Container images", text: "OS and language packages matched to known CVEs." },
                                        { icon: Globe, title: "Endpoint hygiene", text: "Passive checks for headers and exposed files. No attack payloads." },
                                        { icon: Gauge, title: "Clear priorities", text: "CVSS v3.1 scores plus KEV and EPSS signals, in one report." },
                                    ].map(item => (
                                        <li key={item.title} className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <item.icon className="h-4 w-4 text-emerald-400" />
                                                <p className="text-sm font-semibold text-slate-200">{item.title}</p>
                                            </div>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm overflow-x-auto">
                                    <span className="text-green-500 mr-2">$</span>
                                    <span className="text-slate-300">aegis init &amp;&amp; aegis --code ./my-app</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {["Python", "DevSecOps", "CVE Intelligence", "CI/CD"].map(tag => (
                                        <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                                    <Link href={aegisLinks.repo} {...external}>
                                        <Button className="bg-emerald-600 hover:bg-emerald-500 text-white gap-2">
                                            <Github className="h-4 w-4" /> View on GitHub <ExternalLink className="h-3 w-3" />
                                        </Button>
                                    </Link>
                                    <Link href={`${aegisLinks.repo}#readme`} {...external}>
                                        <Button variant="outline" className="bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white gap-2">
                                            <GitBranch className="h-4 w-4" /> Read the Docs
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="w-full py-12 md:py-24 bg-slate-900/50 border-y border-slate-800">
                <div className="container px-4 md:px-6">
                    <h2 className="text-2xl font-bold tracking-tighter mb-2 flex items-center gap-2 text-white">
                        <Terminal className="h-6 w-6 text-green-500" /> My Toolbox
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-[700px]">The tools I use every day to keep systems running.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Cloud Infra", icon: Cloud, color: "text-blue-500", skills: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"] },
                            { title: "Automation", icon: Code, color: "text-yellow-500", skills: ["Ansible", "Terraform", "Python", "Bash", "Chef"] },
                            { title: "Security", icon: Shield, color: "text-red-500", skills: ["VAPT", "Zero Trust", "NetSec", "CyberSecurity"] },
                            { title: "DevOps Tools", icon: Server, color: "text-purple-500", skills: ["Jenkins", "Harness", "Git", "Nexus", "Prometheus"] },
                        ].map((category) => (
                            <Card key={category.title} className="bg-slate-950 border-slate-800 hover:border-green-500/50 transition-colors group">
                                <CardHeader className="pb-2">
                                    <category.icon className={`h-8 w-8 ${category.color} mb-2 group-hover:scale-110 transition-transform`} />
                                    <CardTitle className="text-slate-200">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => (
                                        <Badge key={skill} variant="outline" className="border-slate-700 text-slate-400 group-hover:text-green-400 group-hover:border-green-500/30">
                                            {skill}
                                        </Badge>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col space-y-4 mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Where I&apos;ve Worked</h2>
                        <p className="text-slate-400 max-w-[700px]">I started in network security and moved into cloud and automation.</p>
                    </div>

                    <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-12">
                        {[
                            { year: "2022 - Present", role: "DevOps Engineer (SE)", company: "TestingXperts", desc: "Built and run multi-cloud CI/CD pipelines that cut deployment time by 40%. Moved services onto Docker and Kubernetes." },
                            { year: "2018", role: "Network Security Trainee", company: "EH1 Infotech", desc: "Ran VAPT audits and hardened network perimeters against real-world threats." },
                        ].map((job, i) => (
                            <div key={job.company} className="relative pl-8 md:pl-12 group">
                                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-green-500 group-hover:bg-green-950 transition-colors" />
                                <div className="flex flex-col space-y-1 p-4 rounded-lg hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                    <span className="text-sm text-green-500 font-mono">{job.year}</span>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-slate-200">{job.role}</h3>
                                        {i === 0 && <Badge className="bg-green-900 text-green-300 hover:bg-green-800 border-none">Current</Badge>}
                                    </div>
                                    <p className="text-slate-400 font-medium">{job.company}</p>
                                    <p className="text-slate-500 pt-2 text-sm leading-relaxed">
                                        {job.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client & Team Projects */}
            <section className="w-full py-12 md:py-24 bg-slate-900/30">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter mb-2 text-white">Client &amp; Team Projects</h2>
                    <p className="text-slate-400 mb-12 max-w-[700px]">Work I&apos;ve delivered for clients and for my team.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Deluxe Corporation", role: "IaC Engineer", desc: "Automated infrastructure provisioning with Terraform and Ansible.", tags: ["IaC", "Terraform"] },
                            { title: "Net Number Migrations", role: "Lead", desc: "Planned and ran a cloud migration with zero downtime.", tags: ["Migration", "Cloud"] },
                            { title: "Observability Suite", role: "Internal", desc: "Set up full-stack monitoring with Prometheus and Grafana.", tags: ["Monitoring", "Chaos Mesh"] },
                            { title: "IACT Tool", role: "Developer", desc: "An internal tool that speeds up day-to-day work for QA teams.", tags: ["Internal", "Tooling"] },
                        ].map((project) => (
                            <Card key={project.title} className="bg-slate-950 border-slate-800 text-slate-300">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                                            <CardDescription className="text-green-500/80 mt-1">{project.role}</CardDescription>
                                        </div>
                                        <Code className="h-5 w-5 text-slate-600" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-400 mb-6 min-h-[40px]">
                                        {project.desc}
                                    </p>
                                    <div className="flex gap-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio / Connect */}
            <section className="w-full py-16 md:py-24 border-t border-slate-800">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl text-center space-y-6">
                        <Rocket className="h-10 w-10 text-green-500 mx-auto" />
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Let&apos;s work together</h2>
                        <p className="text-slate-400 md:text-lg font-sans">
                            Need help with a pipeline, a cloud migration or a security review, or just want to talk about Sip &amp; Shelf
                            or Aegis? My full portfolio and work history are linked below.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4 pt-4 text-left">
                            {[
                                { icon: Linkedin, label: "LinkedIn", sub: "Work history & updates", href: founderLinks.linkedin, color: "text-blue-400" },
                                { icon: Globe, label: "Portfolio", sub: "Projects & case studies", href: founderLinks.portfolio, color: "text-green-400" },
                                { icon: Github, label: "GitHub", sub: "Code, including Aegis", href: founderLinks.github, color: "text-slate-200" },
                            ].map(link => (
                                <Link key={link.label} href={link.href} {...external} className="group block">
                                    <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4 group-hover:border-green-500/50 transition-colors">
                                        <link.icon className={`h-6 w-6 shrink-0 ${link.color}`} />
                                        <div className="min-w-0">
                                            <p className="font-semibold text-slate-200 flex items-center gap-1">
                                                {link.label} <ExternalLink className="h-3 w-3 text-slate-500" />
                                            </p>
                                            <p className="text-xs text-slate-500">{link.sub}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
