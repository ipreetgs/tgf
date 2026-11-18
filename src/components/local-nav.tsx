"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type LocalTab = { name: string; href: string }

type LocalNavProps = {
    title: string
    titleHref: string
    tabs: LocalTab[]
    action: { label: string; href: string }
}

/**
 * The venture tab bar: sticks under the global nav, marks the current tab,
 * and keeps the venture's main action in reach on every page.
 */
export function LocalNav({ title, titleHref, tabs, action }: LocalNavProps) {
    const pathname = usePathname()
    const external = /^https?:\/\//.test(action.href)

    return (
        <div className="sticky top-[53px] z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
            <div className="container flex h-[52px] items-center justify-between gap-4">
                <Link href={titleHref} className="shrink-0 text-[19px] font-semibold tracking-[-0.02em] md:text-[21px]">
                    {title}
                </Link>
                <div className="flex min-w-0 items-center gap-5">
                    <nav aria-label={`${title} sections`} className="hidden md:block">
                        <TabList tabs={tabs} pathname={pathname} />
                    </nav>
                    <Button asChild size="sm" className="shrink-0">
                        <Link href={action.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                            {action.label}
                        </Link>
                    </Button>
                </div>
            </div>
            {/* Phones and small tablets: the tabs scroll sideways under the title */}
            <nav aria-label={`${title} sections`} className="no-scrollbar overflow-x-auto border-t border-border/60 md:hidden">
                <div className="container">
                    <TabList tabs={tabs} pathname={pathname} />
                </div>
            </nav>
        </div>
    )
}

function TabList({ tabs, pathname }: { tabs: LocalTab[]; pathname: string }) {
    return (
        <ul className="flex items-center gap-6 whitespace-nowrap md:gap-7">
            {tabs.map((tab) => {
                const active = pathname === tab.href || pathname === `${tab.href}/`
                return (
                    <li key={tab.href}>
                        <Link
                            href={tab.href}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                                "relative block py-3 text-[13px] transition-colors md:py-1",
                                active
                                    ? "font-medium text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:rounded-full after:bg-foreground md:after:-bottom-[15px]"
                                    : "text-foreground/65 hover:text-foreground"
                            )}
                        >
                            {tab.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
