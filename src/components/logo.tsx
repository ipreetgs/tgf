import { cn } from "@/lib/utils"

/** TGF wordmark: a small leaf-green mark and the name, set like a product brand. */
export function Logo({ className }: { className?: string }) {
    return (
        <span className={cn("inline-flex items-center gap-2", className)}>
            <svg viewBox="0 0 24 24" aria-hidden className="h-[22px] w-[22px] text-primary">
                <path
                    fill="currentColor"
                    d="M12 2c4.6 2.6 7 6.2 7 10.4C19 17 15.9 21 12 22 8.1 21 5 17 5 12.4 5 8.2 7.4 4.6 12 2Zm0 4.2v13.3c2.6-1.1 4.4-4 4.4-7.1 0-2.6-1.5-4.6-4.4-6.2Z"
                />
            </svg>
            <span className="text-[19px] font-semibold tracking-[-0.03em]">
                TGF<span className="font-normal text-muted-foreground"> Group</span>
            </span>
        </span>
    )
}
