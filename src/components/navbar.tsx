"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const links = [
    { name: "Home", href: "/" },
    { name: "Farming", href: "/farming" },
    { name: "Books", href: "/books" },
    { name: "IT-DevOps", href: "/devops" },
    { name: "Perfume", href: "/perfume" },
    { name: "About", href: "/about" },
]

function isActive(pathname: string, href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
}

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const isDark = resolvedTheme === "dark"

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Switch between light and dark theme"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    )
}

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

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
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled || isOpen
                    ? "border-b bg-background/85 shadow-sm backdrop-blur-lg supports-[backdrop-filter]:bg-background/70"
                    : "border-b border-transparent bg-background/0"
            )}
        >
            <div className="container flex h-16 items-center justify-between md:h-[72px]">
                <Link href="/" aria-label="TGF Group home" className="rounded-lg">
                    <Logo />
                </Link>

                {/* Desktop navigation */}
                <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => {
                        const active = isActive(pathname, link.href)
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                className={cn(
                                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                                    active
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-1">
                    <ThemeToggle />
                    <Button asChild size="sm" className="ml-2 hidden lg:inline-flex">
                        <Link href="/contact">Contact</Link>
                    </Button>
                    <button
                        type="button"
                        className="grid h-10 w-10 place-items-center rounded-full hover:bg-accent lg:hidden"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile navigation */}
            {isOpen && (
                <nav
                    id="mobile-menu"
                    aria-label="Mobile"
                    className="h-[calc(100dvh-4rem)] overflow-y-auto border-t bg-background lg:hidden"
                >
                    <div className="container flex flex-col gap-1 py-6">
                        {links.map((link) => {
                            const active = isActive(pathname, link.href)
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center justify-between rounded-xl px-4 py-3.5 font-serif text-xl transition-colors",
                                        active ? "bg-primary/10 text-primary" : "hover:bg-accent"
                                    )}
                                >
                                    {link.name}
                                    <ArrowRight className="h-4 w-4 opacity-40" />
                                </Link>
                            )
                        })}
                        <Button asChild size="lg" className="mt-6">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Get in touch</Link>
                        </Button>
                    </div>
                </nav>
            )}
        </header>
    )
}
