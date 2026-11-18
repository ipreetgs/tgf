import { Sprout } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
    return (
        <span className={cn("inline-flex items-center gap-2.5", className)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Sprout className="h-5 w-5" aria-hidden />
            </span>
            <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold tracking-tight">TGF</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Group</span>
            </span>
        </span>
    )
}
