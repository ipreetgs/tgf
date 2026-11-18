import { LocalNav } from "@/components/local-nav"

const tabs = [
    { name: "Overview", href: "/farming" },
    { name: "Dairy", href: "/farming/dairy" },
    { name: "Harvest", href: "/farming/harvest" },
    { name: "Gallery", href: "/farming/gallery" },
    { name: "How to order", href: "/farming/order" },
]

export default function FarmingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LocalNav title="Farming" titleHref="/farming" tabs={tabs} action={{ label: "Order", href: "/farming/order" }} />
            {children}
        </>
    )
}
