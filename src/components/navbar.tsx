"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

export const mainLinks = [
    { name: "Farming", href: "/farming" },
    { name: "Books", href: "/books" },
    { name: "IT-DevOps", href: "/devops" },
    { name: "Perfume", href: "/perfume" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

function isActive(pathname: string, href: string) {
    return pathname === href || pathname.startsWith(`${href}/`)
}

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const isDark = resolvedTheme === "dark"
    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative grid h-10 w-10 place-items-center rounded-full text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Switch between light and dark theme"
        >
            <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    )
}

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        if (!isOpen) return
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false)
        document.addEventListener("keydown", onKey)
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = ""
        }
    }, [isOpen])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b border-border/60 backdrop-blur-xl backdrop-saturate-150",
                isOpen ? "bg-background" : "bg-background/80"
            )}
        >
            <div className="container flex h-[52px] items-center justify-between">
                <Link href="/" aria-label="TGF Group home" className="rounded-md">
                    <Logo />
                </Link>

                <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
                    {mainLinks.map((link) => {
                        const active = isActive(pathname, link.href)
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                className={cn(
                                    "rounded-full px-3.5 py-1.5 text-[14px] transition-colors",
                                    active ? "font-medium text-foreground" : "text-foreground/70 hover:text-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="grid h-10 w-10 place-items-center rounded-full hover:bg-accent md:hidden"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav id="mobile-menu" aria-label="Mobile" className="h-[calc(100dvh-52px)] overflow-y-auto bg-background md:hidden">
                    <ul className="container pb-10 pt-4">
                        {[{ name: "Home", href: "/" }, ...mainLinks].map((link) => {
                            const active = link.href === "/" ? pathname === "/" : isActive(pathname, link.href)
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        aria-current={active ? "page" : undefined}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "flex items-center justify-between py-3 text-[28px] font-semibold tracking-[-0.02em]",
                                            active ? "text-foreground" : "text-foreground/80"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            )}
        </header>
    )
}
