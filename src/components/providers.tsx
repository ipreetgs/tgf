"use client"

import { MotionConfig } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {/* Respect the visitor's "reduce motion" setting for every framer-motion animation. */}
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </ThemeProvider>
    )
}
