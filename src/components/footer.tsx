import Link from "next/link"
import { Instagram, Linkedin, Globe, Github } from "lucide-react"
import { Logo } from "@/components/logo"
import { bookLinks, founderLinks, sipAndShelfLinks, tgfSocials } from "@/lib/links"

const external = { target: "_blank", rel: "noopener noreferrer" } as const

const columns = [
    {
        title: "Farming",
        links: [
            { label: "Overview", href: "/farming" },
            { label: "Dairy", href: "/farming/dairy" },
            { label: "Harvest", href: "/farming/harvest" },
            { label: "Gallery", href: "/farming/gallery" },
            { label: "How to order", href: "/farming/order" },
        ],
    },
    {
        title: "Books",
        links: [
            { label: "Art of Attraction", href: "/books" },
            { label: "About the author", href: "/books/author" },
            { label: "Buy the book", href: bookLinks.buy },
            { label: "Book a call", href: bookLinks.call },
            { label: "Book website", href: bookLinks.site },
        ],
    },
    {
        title: "IT-DevOps",
        links: [
            { label: "Overview", href: "/devops" },
            { label: "Products", href: "/devops/products" },
            { label: "Experience", href: "/devops/experience" },
            { label: "Projects", href: "/devops/projects" },
            { label: "Skills", href: "/devops/skills" },
        ],
    },
    {
        title: "TGF Group",
        links: [
            { label: "About the founder", href: "/about" },
            { label: "Perfume", href: "/perfume" },
            { label: "Sip & Shelf", href: sipAndShelfLinks.site },
            { label: "Contact", href: "/contact" },
        ],
    },
]

const socials = [
    { label: "TGF on Instagram", href: tgfSocials.instagram, icon: Instagram },
    { label: "TGF on LinkedIn", href: tgfSocials.linkedin, icon: Linkedin },
    { label: "Founder's portfolio", href: founderLinks.portfolio, icon: Globe },
    { label: "Founder on GitHub", href: founderLinks.github, icon: Github },
]

export function Footer() {
    return (
        <footer className="bg-muted text-[13px] leading-relaxed text-muted-foreground">
            <div className="container py-12">
                <div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Logo className="text-foreground" />
                        <p className="mt-2 max-w-md">Organic farming, books, technology and fragrance from Firozpur, Punjab.</p>
                    </div>
                    <ul className="flex items-center gap-2">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    {...external}
                                    aria-label={label}
                                    className="grid h-10 w-10 place-items-center rounded-full bg-background text-foreground/70 transition-colors hover:text-foreground"
                                >
                                    <Icon className="h-[18px] w-[18px]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <p className="font-semibold text-foreground">{column.title}</p>
                            <ul className="mt-3 space-y-2">
                                {column.links.map((link) => {
                                    const isExternal = /^https?:\/\//.test(link.href)
                                    return (
                                        <li key={link.label}>
                                            <Link href={link.href} {...(isExternal ? external : {})} className="transition-colors hover:text-foreground hover:underline">
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>

                <div className="flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p>Copyright © {new Date().getFullYear()} TGF Group. Firozpur, Punjab, India.</p>
                    <p>
                        Founded by{" "}
                        <Link href="/about" className="text-foreground hover:underline">Gurpreet Singh</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}
