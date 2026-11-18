"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const CONTACT_EMAIL = "ipreetgs@icloud.com"

const topics = ["Farm order", "Books", "DevOps work", "Sip & Shelf", "Perfume", "Just saying hi"]

const field =
    "h-12 w-full rounded-xl border border-input bg-background px-4 text-[17px] text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"

/** Contact form: builds an email in the visitor's mail app. A ?topic= link preselects the subject. */
export function ContactForm() {
    const params = useSearchParams()
    const requested = params.get("topic")
    const [topic, setTopic] = useState<string | null>(requested && topics.includes(requested) ? requested : null)
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
    const [sent, setSent] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const subject = [topic, form.subject].filter(Boolean).join(": ") || "Contact from the TGF website"
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        setSent(true)
    }

    return (
        <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
            <fieldset>
                <legend className="text-[15px] font-medium">What&apos;s it about?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                    {topics.map((t) => (
                        <button
                            key={t}
                            type="button"
                            aria-pressed={topic === t}
                            onClick={() => setTopic(topic === t ? null : t)}
                            className={cn(
                                "rounded-full border px-4 py-2 text-[14px] transition-colors",
                                topic === t
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-input bg-background text-foreground/80 hover:border-foreground/40"
                            )}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                    <span className="text-[15px] font-medium">Name</span>
                    <input name="name" autoComplete="name" required value={form.name} onChange={onChange} placeholder="Your name" className={cn(field, "mt-2")} />
                </label>
                <label className="block">
                    <span className="text-[15px] font-medium">Email</span>
                    <input name="email" type="email" autoComplete="email" required value={form.email} onChange={onChange} placeholder="you@example.com" className={cn(field, "mt-2")} />
                </label>
            </div>
            <label className="block">
                <span className="text-[15px] font-medium">
                    Subject <span className="font-normal text-muted-foreground">(optional)</span>
                </span>
                <input name="subject" value={form.subject} onChange={onChange} placeholder="e.g. 5 litres of milk a week" className={cn(field, "mt-2")} />
            </label>
            <label className="block">
                <span className="text-[15px] font-medium">Message</span>
                <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Write your message here…"
                    className={cn(field, "mt-2 h-auto min-h-[160px] py-3 leading-relaxed")}
                />
            </label>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send className="h-4 w-4" /> Send message
            </Button>

            {sent ? (
                <p role="status" className="flex items-start gap-2 rounded-xl bg-primary/10 p-4 text-[15px]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                        Your email app should open with the message ready to send. If it didn&apos;t, email{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-primary underline">{CONTACT_EMAIL}</a> directly.
                    </span>
                </p>
            ) : (
                <p className="text-[15px] text-muted-foreground">Sending opens your email app with everything filled in.</p>
            )}
        </form>
    )
}
