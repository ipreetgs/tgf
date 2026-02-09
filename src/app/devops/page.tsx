import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Server, Code, Database, Cloud, Shield, Cpu, Linkedin, Mail, ExternalLink, Globe, Github } from "lucide-react"
import Link from "next/link"

export default function DevOpsPage() {
    return (
        <div className="flex flex-col min-h-screen font-mono bg-slate-950 text-slate-300">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 xl:py-48 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Animated Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-green-500/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

                <div className="container relative px-4 md:px-6 z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col space-y-6">
                            <div className="inline-flex items-center space-x-2 border border-green-500/30 rounded-full px-3 py-1 bg-green-950/30 w-fit animate-pulse">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-medium text-green-400">System Online</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                                DevOps Engineer
                            </h1>
                            <p className="max-w-[600px] text-slate-400 md:text-xl">
                                Orchestrating chaos into reliability. Automating infrastructure, scaling clouds, and securing networks.
                            </p>

                            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                                <Link href="https://linkedin.com/in/ipreetgs" target="_blank">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2">
                                        <Linkedin className="h-4 w-4" /> LinkedIn
                                    </Button>
                                </Link>
                                <Link href="https://ipreetgs.github.io/u/" target="_blank">
                                    <Button variant="outline" className="w-full border-green-600 text-green-400 hover:bg-green-900/50 gap-2">
                                        <Globe className="h-4 w-4" /> Portfolio
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Validated Terminal Visual */}
                        <div className="relative rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-sm overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-4 text-xs text-slate-500 font-sans">bash — 80x24</div>
                            </div>
                            <div className="p-6 space-y-2 font-mono text-sm">
                                <div className="flex">
                                    <span className="text-green-500 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-slate-300">whoami</span>
                                </div>
                                <div className="text-green-400 ml-4">Gurpreet Singh</div>

                                <div className="flex pt-2">
                                    <span className="text-green-500 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-slate-300">cat skills.json | jq .core</span>
                                </div>
                                <div className="ml-4 text-orange-300">
                                    {`[`}<br />
                                    &nbsp;&nbsp;"AWS", "Azure", "Kubernetes",<br />
                                    &nbsp;&nbsp;"Terraform", "Ansible",<br />
                                    &nbsp;&nbsp;"Python", "CI/CD"<br />
                                    {`]`}
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

            {/* Skills Status Board */}
            <section className="w-full py-12 md:py-24 bg-slate-900/50 border-y border-slate-800">
                <div className="container px-4 md:px-6">
                    <h2 className="text-2xl font-bold tracking-tighter mb-8 flex items-center gap-2 text-white">
                        <Terminal className="h-6 w-6 text-green-500" /> System Status
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Cloud Infra", icon: Cloud, color: "text-blue-500", skills: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"] },
                            { title: "Automation", icon: Code, color: "text-yellow-500", skills: ["Ansible", "Terraform", "Python", "Bash", "Chef"] },
                            { title: "Security", icon: Shield, color: "text-red-500", skills: ["VAPT", "Zero Trust", "NetSec", "CyberSecurity"] },
                            { title: "DevOps Tools", icon: Server, color: "text-purple-500", skills: ["Jenkins", "Harness", "Git", "Nexus", "Prometheus"] },
                        ].map((category, idx) => (
                            <Card key={idx} className="bg-slate-950 border-slate-800 hover:border-green-500/50 transition-colors group">
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

            {/* Experience TTY */}
            <section className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col space-y-4 mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Experience Log</h2>
                        <p className="text-slate-400 max-w-[700px]">Execution history and runtime environment.</p>
                    </div>

                    <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-12">
                        {[
                            { year: "2022 - Present", role: "DevOps Engineer (SE)", company: "TestingXperts", desc: "Orchestrated multi-cloud CI/CD pipelines, reducing deployment time by 40%. Implemented containerization strategies using Docker & K8s." },
                            { year: "2018", role: "Network Security Trainee", company: "EH1 Infotech", desc: "Conducted VAPT audits and fortified network perimeters against potential threats." },
                        ].map((job, i) => (
                            <div key={i} className="relative pl-8 md:pl-12 group">
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

            {/* Featured Projects Dashboard */}
            <section className="w-full py-12 md:py-24 bg-slate-900/30">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter mb-12 text-white">Project Deployments</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Deluxe Corporation", role: "IaC Engineer", desc: "Automated infrastructure provisioning using Terraform & Ansible.", tags: ["IaC", "Terraform"] },
                            { title: "Net Number Migrations", role: "Lead", desc: "Zero-downtime cloud migration strategy execution.", tags: ["Migration", "Cloud"] },
                            { title: "Observability Suite", role: "Internal", desc: "Implemented full-stack monitoring with Prometheus/Grafana.", tags: ["Monitoring", "Chaos Mesh"] },
                            { title: "IACT Tool", role: "Developer", desc: "Internal workflow optimization tool for QA teams.", tags: ["Internal", "Tooling"] },
                        ].map((project, idx) => (
                            <Card key={idx} className="bg-slate-950 border-slate-800 text-slate-300">
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
        </div>
    )
}
