"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Beaker } from "lucide-react"
import Link from "next/link"

export default function PerfumePage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white font-serif">
            {/* Hero Section */}
            <section className="relative flex-1 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                {/* Background ambient effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black animate-pulse-slow"></div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm text-purple-300 text-sm tracking-widest uppercase mb-4">
                        <Sparkles className="w-4 h-4" /> Coming Soon
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-thin tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-purple-200">
                        TGF <span className="italic font-normal">Parfum</span>
                    </h1>

                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto my-8"></div>

                    <h2 className="text-2xl md:text-4xl font-light text-purple-100 tracking-wide">
                        The <span className="text-purple-400 font-normal italic">Nodesscent</span> Project
                    </h2>

                    <p className="max-w-xl mx-auto text-lg text-gray-400 leading-relaxed font-light">
                        We are currently in the lab, engaging in deep discussions with master perfumers to refine the final notes and formulations.
                        The <span className="text-white italic">Nodesscent</span> idea is being crafted into a reality—a signature scent designed to leave a lasting impression.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-white/5 border border-white/10">
                            <Beaker className="w-5 h-5 text-purple-400" />
                            <span className="text-sm tracking-wider uppercase">Formulation in Progress</span>
                        </div>
                    </div>

                    <div className="pt-12">
                        <Link href="/">
                            <Button variant="link" className="text-gray-500 hover:text-white tracking-widest uppercase text-xs">
                                Return to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
