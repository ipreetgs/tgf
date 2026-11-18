import type { Metadata } from "next"
import { PhotoGallery, type Photo } from "@/components/photo-gallery"
import { CtaBand } from "@/components/cta-band"
import { tgfSocials } from "@/lib/links"

export const metadata: Metadata = {
    title: "Gallery",
    description: "Life on the TGF farm in Firozpur: our buffalo herd, our fields and harvest season.",
    alternates: { canonical: "/farming/gallery" },
}

const photos: Photo[] = [
    { src: "/dairy2.webp", alt: "The TGF buffalo herd", caption: "Our pride: the herd", width: 1179, height: 722, wide: true, tall: true },
    { src: "/dairy1.webp", alt: "A calf resting on the farm", caption: "A calf on the farm", width: 1179, height: 1593 },
    { src: "/farm1.webp", alt: "The TGF farm house lit up at night", caption: "The farm house at night", width: 1920, height: 1440 },
    { src: "/farm3.webp", alt: "Harvest season in the fields", caption: "Harvest season", width: 1179, height: 614, wide: true },
    { src: "/farm.webp", alt: "A combine harvesting golden rice", caption: "Rice harvest", width: 1080, height: 1920, tall: true },
    { src: "/farm2.webp", alt: "Sunset over the fields", caption: "Evening in the fields", width: 1179, height: 616 },
    { src: "/dairy.webp", alt: "Buffaloes at the dairy", caption: "At the dairy", width: 1920, height: 1440, wide: true },
]

export default function GalleryPage() {
    return (
        <div className="flex flex-col gap-3">
            <section className="pb-12 pt-16 text-center md:pb-16 md:pt-24">
                <div className="container animate-fade-up">
                    <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.04] tracking-[-0.035em]">Life on the farm.</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
                        A glimpse into our daily work, our animals and the green fields of TGF. Tap any photo to see it larger.
                    </p>
                </div>
            </section>

            <section aria-label="Photos" className="mx-3">
                <PhotoGallery photos={photos} />
            </section>

            <CtaBand
                title="See more on Instagram."
                text="New photos from the fields and the herd, as they happen."
                primary={{ label: "Follow @the_gfarm", href: tgfSocials.instagram }}
                secondary={{ label: "How to order", href: "/farming/order" }}
            />
        </div>
    )
}
