import { LocalNav } from "@/components/local-nav"
import { bookLinks } from "@/lib/links"

const tabs = [
    { name: "Overview", href: "/books" },
    { name: "About the author", href: "/books/author" },
]

export default function BooksLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LocalNav title="Art of Attraction" titleHref="/books" tabs={tabs} action={{ label: "Buy", href: bookLinks.buy }} />
            {children}
        </>
    )
}
