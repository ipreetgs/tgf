import { LocalNav } from "@/components/local-nav"

const tabs = [
    { name: "Overview", href: "/devops" },
    { name: "Products", href: "/devops/products" },
    { name: "Experience", href: "/devops/experience" },
    { name: "Projects", href: "/devops/projects" },
    { name: "Skills", href: "/devops/skills" },
]

export default function DevOpsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LocalNav title="IT-DevOps" titleHref="/devops" tabs={tabs} action={{ label: "Get in touch", href: "/contact?topic=DevOps%20work" }} />
            {children}
        </>
    )
}
