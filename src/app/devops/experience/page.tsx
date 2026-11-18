import type { Metadata } from "next"
import { Check } from "lucide-react"
import { ChevronLink } from "@/components/chevron-link"
import { experience } from "@/lib/portfolio"

export const metadata: Metadata = {
    title: "Experience",
    description: "Gurpreet Singh's 5+ years in DevOps: Senior DevOps Engineer, Senior DevOps Specialist at Opstree, DevOps Engineer at TestingXperts.",
    alternates: { canonical: "/devops/experience" },
}

export default function ExperiencePage() {
    return (
        <div className="flex flex-col gap-3">
            <section className="pb-12 pt-16 text-center md:pb-16 md:pt-24">
                <div className="container animate-fade-up">
                    <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.04] tracking-[-0.035em]">Where I&apos;ve worked.</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
                        5+ years, from network security, through four years of pipelines and clouds at TestingXperts, to senior
                        DevOps roles today.
                    </p>
                </div>
            </section>

            <section aria-label="Work history" className="mx-3 mb-3 rounded-tile bg-muted px-6 py-12 md:px-16 md:py-16">
                <ol className="mx-auto max-w-4xl">
                    {experience.map((job, i) => (
                        <li
                            key={`${job.role}-${job.period}`}
                            className={`grid gap-3 py-10 md:grid-cols-[200px_1fr] md:gap-10 ${i > 0 ? "border-t border-border" : ""}`}
                        >
                            <div>
                                <p className="tabular text-[15px] font-medium text-muted-foreground">{job.period}</p>
                                {job.current && (
                                    <p className="mt-2 inline-flex rounded-full bg-primary px-3 py-1 text-[13px] font-medium text-primary-foreground">
                                        Current role
                                    </p>
                                )}
                            </div>
                            <div>
                                <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] leading-tight">{job.role}</h2>
                                {job.company && <p className="mt-1 text-[17px] font-medium text-primary">{job.company}</p>}
                                <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">{job.summary}</p>
                                {job.highlights && (
                                    <ul className="mt-5 space-y-2.5">
                                        {job.highlights.map((h) => (
                                            <li key={h} className="flex gap-3">
                                                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="py-16 text-center">
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
                    <ChevronLink href="/devops/projects">See the projects</ChevronLink>
                    <ChevronLink href="/devops/skills">See my skills</ChevronLink>
                </div>
            </section>
        </div>
    )
}
