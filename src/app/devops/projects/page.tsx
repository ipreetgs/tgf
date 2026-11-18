import type { Metadata } from "next"
import { ChevronLink } from "@/components/chevron-link"
import { clientProjects } from "@/lib/portfolio"

export const metadata: Metadata = {
    title: "Projects",
    description: "Client and team DevOps projects by Gurpreet Singh, including Tripare and HRC at Opstree, Deluxe Corporation and cloud migrations.",
    alternates: { canonical: "/devops/projects" },
}

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-3">
            <section className="pb-12 pt-16 text-center md:pb-16 md:pt-24">
                <div className="container animate-fade-up">
                    <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.04] tracking-[-0.035em]">Work I&apos;ve delivered.</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
                        Client and team projects from my DevOps work so far.
                    </p>
                </div>
            </section>

            <section aria-label="Projects" className="mx-3 mb-3">
                <ul className="grid gap-3 md:grid-cols-2">
                    {clientProjects.map((project, i) => (
                        <li
                            key={project.title}
                            className={`flex flex-col rounded-tile p-8 md:p-10 ${i < 2 ? "bg-ink text-ink-foreground" : "bg-muted"}`}
                        >
                            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">{project.title}</h2>
                            <p className={`mt-1 text-[15px] font-medium ${i < 2 ? "text-[#46C98A]" : "text-primary"}`}>
                                {project.role}
                                {project.company && ` · ${project.company}`}
                            </p>
                            <p className={`mt-4 flex-1 text-[17px] leading-relaxed ${i < 2 ? "text-ink-muted" : "text-muted-foreground"}`}>
                                {project.summary}
                            </p>
                            <ul className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <li
                                        key={tag}
                                        className={`rounded-full px-3 py-1 text-[13px] ${i < 2 ? "bg-white/10 text-ink-foreground" : "bg-background text-foreground/80"}`}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="py-16 text-center">
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
                    <ChevronLink href="/devops/experience">See my experience</ChevronLink>
                    <ChevronLink href="/contact?topic=DevOps%20work">Discuss a project</ChevronLink>
                </div>
            </section>
        </div>
    )
}
