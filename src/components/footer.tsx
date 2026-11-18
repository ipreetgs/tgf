import Link from "next/link"
import { Instagram, Linkedin, Globe, Github, ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/logo"
import { founderLinks, sipAndShelfLinks, tgfSocials } from "@/lib/links"

const external = { target: "_blank", rel: "noopener noreferrer" } as const

const columns = [
    {
        title: "Explore",
        links: [
            { label: "Farming", href: "/farming" },
            { label: "Our Harvest", href: "/farming/harvest" },
            { label: "Books", href: "/books" },
            { label: "IT-DevOps", href: "/devops" },
            { label: "Perfume", href: "/perfume" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About the Founder", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Sip & Shelf", href: sipAndShelfLinks.site, external: true },
        ],
    },
    {
        title: "Founder",
        links: [
            { label: "LinkedIn", href: founderLinks.linkedin, external: true },
            { label: "Portfolio", href: founderLinks.portfolio, external: true },
            { label: "GitHub", href: founderLinks.github, external: true },
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
        <footer className="border-t bg-secondary/40">
            <div className="container grid grid-cols-2 gap-10 py-14 sm:grid-cols-3 md:grid-cols-[1.4fr_repeat(3,1fr)]">
                <div className="col-span-2 space-y-4 sm:col-span-3 md:col-span-1">
                    <Logo />
                    <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                        Organic farming, books, technology and fragrance, run with care from Firozpur, Punjab.
                    </p>
                    <div className="flex items-center gap-2">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                {...external}
                                aria-label={label}
                                className="grid h-10 w-10 place-items-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                                <Icon className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </div>

                {columns.map((column) => (
                    <div key={column.title} className="space-y-4">
                        <p className="text-sm font-semibold">{column.title}</p>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            {column.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        {...("external" in link && link.external ? external : {})}
                                        className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                        {"external" in link && link.external && <ArrowUpRight className="h-3 w-3" />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="border-t">
                <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
                    <p>© {new Date().getFullYear()} TGF Group. Firozpur, Punjab.</p>
                    <p>Grown in Punjab. Built with care.</p>
                </div>
            </div>
        </footer>
    )
}
