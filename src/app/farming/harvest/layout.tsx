import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Harvest",
    description: "Wheat, Basmati rice, seasonal produce and fodder, grown chemical-free at TGF in Firozpur.",
}

export default function HarvestLayout({ children }: { children: React.ReactNode }) {
    return children
}
