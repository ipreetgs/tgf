import { cn } from "@/lib/utils"

/** Art of Attraction, rendered as a standing hardcover with a lit spine. */
export function BookCover({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
    const dims = { sm: "w-[150px]", md: "w-[200px] sm:w-[230px]", lg: "w-[230px] sm:w-[280px]" }[size]
    return (
        <div className={cn("relative aspect-[2/3]", dims, className)}>
            <div className="absolute -bottom-6 left-1/2 h-8 w-[90%] -translate-x-1/2 rounded-[50%] bg-black/30 blur-xl" aria-hidden />
            <div className="relative flex h-full flex-col overflow-hidden rounded-r-[6px] rounded-l-[3px] bg-[linear-gradient(135deg,#2b2620_0%,#16130f_100%)] text-[#f3e9d7] shadow-[inset_8px_0_14px_-6px_rgba(0,0,0,0.65),inset_-1px_0_0_rgba(255,255,255,0.08)]">
                <span className="absolute inset-y-0 left-[7%] w-px bg-white/10" aria-hidden />
                <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
                    <p className="text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                        Art of
                        <br />
                        Attraction
                    </p>
                    <span className="mt-4 h-px w-10 bg-[#d9b46a]" aria-hidden />
                    <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">The psychology of connection</p>
                </div>
                <p className="pb-5 text-center text-[12px] font-medium text-[#d9b46a]">Gurpreet Singh</p>
            </div>
        </div>
    )
}
