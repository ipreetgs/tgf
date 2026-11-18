import type { MetadataRoute } from "next"
import { ROUTES, SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    return ROUTES.map((route) => ({
        url: `${SITE_URL}${route === "/" ? "" : route}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
    }))
}
