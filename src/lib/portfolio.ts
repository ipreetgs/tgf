// Work history and client projects shown on the IT-DevOps and About pages.
// Newest first. Edit this file to update the portfolio; the pages read from it.

export type Job = {
    period: string
    role: string
    /** Leave undefined to hide the company name. */
    company?: string
    summary: string
    highlights?: string[]
    current?: boolean
}

export const experience: Job[] = [
    {
        period: "Nov 2026 – Present",
        role: "Senior DevOps Engineer",
        summary:
            "Leading CI/CD, cloud infrastructure and reliability work, and helping the team ship faster with fewer surprises.",
        current: true,
    },
    {
        period: "Aug 2026 – Nov 2026",
        role: "Senior DevOps Specialist",
        company: "Opstree",
        summary:
            "Worked on client engagements at a DevOps consultancy, including the Tripare and HRC projects.",
        highlights: [
            "Built and improved CI/CD pipelines for client applications",
            "Managed cloud and Kubernetes infrastructure across environments",
            "Worked on monitoring and day-to-day reliability",
        ],
    },
    {
        period: "2022 – Aug 2026",
        role: "DevOps Engineer (SE)",
        company: "TestingXperts",
        summary:
            "Built and ran multi-cloud CI/CD pipelines that cut deployment time by 40%, and moved services onto Docker and Kubernetes.",
    },
    {
        period: "2018",
        role: "Network Security Trainee",
        company: "EH1 Infotech",
        summary: "Ran VAPT audits and hardened network perimeters against real-world threats.",
    },
]

export type ClientProject = {
    title: string
    role: string
    company?: string
    summary: string
    tags: string[]
}

export const clientProjects: ClientProject[] = [
    {
        title: "Tripare",
        role: "Senior DevOps Specialist",
        company: "Opstree",
        summary: "DevOps for the Tripare platform: CI/CD pipelines, cloud infrastructure and keeping releases reliable.",
        tags: ["CI/CD", "Cloud", "Kubernetes"],
    },
    {
        title: "HRC",
        role: "Senior DevOps Specialist",
        company: "Opstree",
        summary: "Infrastructure and delivery work for HRC: automated deployments, environment management and monitoring.",
        tags: ["Automation", "Infrastructure", "Monitoring"],
    },
    {
        title: "Deluxe Corporation",
        role: "IaC Engineer",
        summary: "Automated infrastructure provisioning with Terraform and Ansible.",
        tags: ["IaC", "Terraform"],
    },
    {
        title: "Net Number Migrations",
        role: "Lead",
        summary: "Planned and ran a cloud migration with zero downtime.",
        tags: ["Migration", "Cloud"],
    },
    {
        title: "Observability Suite",
        role: "Internal",
        summary: "Set up full-stack monitoring with Prometheus and Grafana.",
        tags: ["Monitoring", "Chaos Mesh"],
    },
    {
        title: "IACT Tool",
        role: "Developer",
        summary: "An internal tool that speeds up day-to-day work for QA teams.",
        tags: ["Internal", "Tooling"],
    },
]
