import Link from "next/link"
import { Instagram, Linkedin, Globe } from "lucide-react"
import { founderLinks, tgfSocials } from "@/lib/links"

const external = { target: "_blank", rel: "noopener noreferrer" } as const

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3 text-center md:text-left">
                    <p className="font-semibold">TGF Group</p>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        Organic farming, books, technology and fragrance, run from Firozpur, Punjab.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <Link
                            href={tgfSocials.instagram}
                            {...external}
                            aria-label="TGF on Instagram"
                            className="rounded-full border p-2 text-muted-foreground hover:text-pink-600 hover:border-pink-600 transition-colors"
                        >
                            <Instagram className="h-4 w-4" />
                        </Link>
                        <Link
                            href={tgfSocials.linkedin}
                            {...external}
                            aria-label="TGF on LinkedIn"
                            className="rounded-full border p-2 text-muted-foreground hover:text-blue-600 hover:border-blue-600 transition-colors"
                        >
                            <Linkedin className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="space-y-3 text-center md:text-left">
                    <p className="font-semibold">Founder</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <Link href={founderLinks.linkedin} {...external} className="inline-flex items-center gap-2 hover:text-foreground">
                                <Linkedin className="h-4 w-4" /> Gurpreet on LinkedIn
                            </Link>
                        </li>
                        <li>
                            <Link href={founderLinks.portfolio} {...external} className="inline-flex items-center gap-2 hover:text-foreground">
                                <Globe className="h-4 w-4" /> Portfolio
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-3 text-center md:text-left">
                    <p className="font-semibold">Explore</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-foreground">About the Founder</Link></li>
                        <li><Link href="/devops" className="hover:text-foreground">IT-DevOps</Link></li>
                        <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t">
                <div className="container flex flex-col items-center justify-between gap-2 py-4 text-xs text-muted-foreground md:flex-row">
                    <p>© {new Date().getFullYear()} TGF Group. Firozpur, Punjab.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
