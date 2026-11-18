"use client"

import { useState } from "react"
import Link from "next/link"
import { Briefcase, Github, Globe, Instagram, Linkedin, Mail, Send, Share2, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { founderLinks, sipAndShelfLinks, tgfSocials } from "@/lib/links"

const EMAIL = "ipreetgs@icloud.com"

const topics = ["Farm order", "Sip & Shelf", "DevOps work", "Books", "Just saying hi"]

const socialGroups = [
    {
        title: "TGF",
        links: [
            { name: "Instagram", handle: "@the_gfarm", icon: Instagram, url: tgfSocials.instagram },
            { name: "LinkedIn", handle: "thegfarm", icon: Linkedin, url: tgfSocials.linkedin },
        ],
    },
    {
        title: "Sip & Shelf",
        links: [
            { name: "Instagram", handle: "@sipandshelf", icon: Instagram, url: sipAndShelfLinks.instagram },
            { name: "LinkedIn", handle: "sipandshelf", icon: Linkedin, url: sipAndShelfLinks.linkedin },
        ],
    },
    {
        title: "Gurpreet",
        links: [
            { name: "LinkedIn", handle: "ipreetgs", icon: Linkedin, url: founderLinks.linkedin },
            { name: "Portfolio", handle: "ipreetgs.github.io", icon: Globe, url: founderLinks.portfolio },
            { name: "GitHub", handle: "ipreetgs", icon: Github, url: founderLinks.github },
            { name: "Instagram", handle: "@ipreetgs", icon: Instagram, url: "https://www.instagram.com/ipreetgs" },
            { name: "Instagram (personal)", handle: "@__gurpreet__23", icon: Instagram, url: "https://instagram.com/__gurpreet__23" },
            { name: "Facebook", handle: "ipreetgs", icon: Share2, url: "https://www.facebook.com/ipreetgs/" },
            { name: "Wishlink", handle: "ipreetgs", icon: Briefcase, url: "http://wishlink.com/ipreetgs" },
            { name: "Igli", handle: "ipreetgs", icon: Share2, url: "http://igli.me/ipreetgs" },
        ],
    },
]

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
    const [topic, setTopic] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { name, email, subject, message } = formData
        const fullSubject = [topic, subject].filter(Boolean).join(": ") || "Contact from TGF website"
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-grain border-b">
                <div className="container max-w-3xl py-16 text-center md:py-20">
                    <p className="eyebrow">Contact</p>
                    <h1 className="mt-3 text-5xl font-semibold sm:text-6xl">Let&apos;s connect</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Want to order from the farm, ask about Sip &amp; Shelf, talk tech, or just say hi? Drop a message and
                        I&apos;ll get back to you.
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr]">
                    {/* Form */}
                    <div className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
                        <h2 className="text-2xl font-semibold">Send a message</h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            This opens your email app with your message ready to send.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                            <fieldset className="space-y-2">
                                <legend className="text-sm font-medium">What&apos;s it about?</legend>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {topics.map((t) => (
                                        <button
                                            key={t}
                                            type="button"
                                            aria-pressed={topic === t}
                                            onClick={() => setTopic(topic === t ? null : t)}
                                            className={cn(
                                                "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                                                topic === t
                                                    ? "border-primary bg-primary text-primary-foreground"
                                                    : "bg-background text-muted-foreground hover:border-primary hover:text-foreground"
                                            )}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </fieldset>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" name="name" autoComplete="name" placeholder="Your name" required value={formData.name} onChange={handleChange} className="h-11 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange} className="h-11 rounded-xl" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject <span className="font-normal text-muted-foreground">(optional)</span>
                                </label>
                                <Input id="subject" name="subject" placeholder="e.g. 5 litres of milk a week" value={formData.subject} onChange={handleChange} className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" name="message" placeholder="Write your message here…" className="min-h-[150px] rounded-xl" required value={formData.message} onChange={handleChange} />
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                <Send className="h-4 w-4" /> Send email
                            </Button>
                            <p className="text-center text-xs text-muted-foreground">
                                Prefer your own email app? Write to{" "}
                                <a href={`mailto:${EMAIL}`} className="font-medium text-primary hover:underline">{EMAIL}</a>
                            </p>
                        </form>
                    </div>

                    {/* Socials */}
                    <aside className="space-y-8">
                        {socialGroups.map((group) => (
                            <div key={group.title} className="space-y-3">
                                <h2 className="text-lg font-semibold">{group.title}</h2>
                                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                    {group.links.map((link) => (
                                        <li key={link.url}>
                                            <Link
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-3 rounded-xl border bg-card px-4 py-3 transition-all hover:border-primary hover:shadow-sm"
                                            >
                                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                                                    <link.icon className="h-4 w-4" />
                                                </span>
                                                <span className="min-w-0 flex-1">
                                                    <span className="block text-sm font-medium">{link.name}</span>
                                                    <span className="block truncate text-xs text-muted-foreground">{link.handle}</span>
                                                </span>
                                                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <a
                            href={`mailto:${EMAIL}`}
                            className="flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm font-medium transition-colors hover:bg-gold/15"
                        >
                            <Mail className="h-5 w-5 text-gold" /> Email directly: {EMAIL}
                        </a>
                    </aside>
                </div>
            </section>
        </div>
    )
}
