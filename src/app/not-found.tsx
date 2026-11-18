import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"

export default function NotFound() {
    return (
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.035em]">This page can&apos;t be found.</h1>
            <p className="mx-auto mt-4 max-w-md text-[19px] text-muted-foreground">
                Error 404. The link may be old, or the page may have moved. Try one of these instead.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/">Go to the home page</Link>
            </Button>
            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
                <ChevronLink href="/farming">Farming</ChevronLink>
                <ChevronLink href="/books">Books</ChevronLink>
                <ChevronLink href="/devops">IT-DevOps</ChevronLink>
                <ChevronLink href="/contact">Contact</ChevronLink>
            </div>
        </section>
    )
}
