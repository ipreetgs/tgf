import type { Metadata } from "next"
import { ChevronLink } from "@/components/chevron-link"

export const metadata: Metadata = {
    title: "Skills",
    description: "The tools Gurpreet Singh uses every day: AWS, Azure, GCP, Kubernetes, Docker, Terraform, Ansible, Jenkins, Harness, Prometheus and more.",
    alternates: { canonical: "/devops/skills" },
}

const toolbox = [
    { title: "Cloud & containers", text: "Where the systems run.", skills: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"] },
    { title: "Automation & IaC", text: "Infrastructure as code, and the glue around it.", skills: ["Terraform", "Ansible", "Python", "Bash", "Chef"] },
    { title: "Security", text: "From VAPT audits to zero-trust networks.", skills: ["VAPT", "Zero Trust", "NetSec", "Cybersecurity"] },
    { title: "CI/CD & observability", text: "How code ships, and how we know it's healthy.", skills: ["Jenkins", "Harness", "Git", "Nexus", "Prometheus", "Grafana"] },
]

export default function SkillsPage() {
    return (
        <div className="flex flex-col gap-3">
            <section className="pb-12 pt-16 text-center md:pb-16 md:pt-24">
                <div className="container animate-fade-up">
                    <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.04] tracking-[-0.035em]">My toolbox.</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
                        The tools I use every day to keep systems running.
                    </p>
                </div>
            </section>

            <section aria-label="Skills" className="mx-3 mb-3 grid gap-3 md:grid-cols-2">
                {toolbox.map((group, i) => (
                    <div key={group.title} className={`rounded-tile p-8 md:p-12 ${i === 0 ? "bg-ink text-ink-foreground" : "bg-muted"}`}>
                        <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">{group.title}</h2>
                        <p className={`mt-2 text-[17px] ${i === 0 ? "text-ink-muted" : "text-muted-foreground"}`}>{group.text}</p>
                        <ul className="mt-8 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className={`rounded-full px-4 py-2 text-[15px] font-medium ${i === 0 ? "bg-white/10" : "bg-background"}`}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="py-16 text-center">
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
                    <ChevronLink href="/devops/projects">See the projects</ChevronLink>
                    <ChevronLink href="/contact?topic=DevOps%20work">Get in touch</ChevronLink>
                </div>
            </section>
        </div>
    )
}
