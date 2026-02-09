"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"

const branches = [
    { name: "Home", href: "/" },
    { name: "Farming", href: "/farming", color: "text-green-600" },
    { name: "Books", href: "/books", color: "text-amber-700" },
    { name: "DevOps", href: "/devops", color: "text-blue-600" },
    { name: "Perfume", href: "/perfume", color: "text-purple-600" },
    { name: "About", href: "/about", color: "text-slate-600" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)
    const { setTheme, theme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="relative h-8 w-24">
                            <Image
                                src="/logo-placeholder.svg"
                                alt="TGF Logo"
                                fill
                                className="object-contain dark:invert"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {branches.map((branch) => (
                        <Link
                            key={branch.href}
                            href={branch.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === branch.href
                                    ? "text-foreground font-bold"
                                    : "text-muted-foreground",
                                branch.color && pathname.startsWith(branch.href) && branch.href !== "/" ? branch.color : ""
                            )}
                        >
                            {branch.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="rounded-full p-2 hover:bg-accent"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="rounded-full p-2 hover:bg-accent"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </button>
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden border-t">
                    <div className="container flex flex-col py-4 gap-4">
                        {branches.map((branch) => (
                            <Link
                                key={branch.href}
                                href={branch.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-primary",
                                    pathname === branch.href ? "text-foreground font-bold" : "text-muted-foreground"
                                )}
                            >
                                {branch.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
