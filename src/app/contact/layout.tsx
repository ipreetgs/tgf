import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with TGF: farm orders, Sip & Shelf, DevOps work, books, or just to say hi.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children
}
