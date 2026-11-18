import { cn } from "@/lib/utils"

/** A terminal window showing real facts about Gurpreet's work. */
export function Terminal({ role, className }: { role: string; className?: string }) {
    return (
        <div className={cn("overflow-hidden rounded-[18px] border border-white/10 bg-ink-raised text-left text-ink-foreground", className)}>
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-white/40">gurpreet@tgf: ~</span>
            </div>
            <div className="space-y-2.5 overflow-x-auto p-6 font-mono text-[13px] leading-relaxed sm:text-sm">
                <p><span className="text-[#46C98A]">$</span> whoami</p>
                <p className="pl-4 text-white/85">Gurpreet Singh · {role} · Founder</p>
                <p><span className="text-[#46C98A]">$</span> cat experience.txt</p>
                <p className="pl-4 text-white/85">5+ years in DevOps</p>
                <p><span className="text-[#46C98A]">$</span> cat skills.json | jq .core</p>
                <p className="pl-4 text-[#f2c879]">[&quot;AWS&quot;, &quot;Azure&quot;, &quot;Kubernetes&quot;, &quot;Terraform&quot;, &quot;Ansible&quot;, &quot;CI/CD&quot;]</p>
                <p><span className="text-[#46C98A]">$</span> ls ~/building</p>
                <p className="pl-4"><span className="mr-6 text-[#7cc4ff]">sip-and-shelf/</span><span className="text-[#7cc4ff]">aegis/</span></p>
                <p><span className="text-[#46C98A]">$</span> <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[#46C98A]" /></p>
            </div>
        </div>
    )
}
