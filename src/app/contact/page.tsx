"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, Github, Globe, Instagram, Linkedin, Mail, Send, Share2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { founderLinks, sipAndShelfLinks, tgfSocials } from "@/lib/links"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { name, email, subject, message } = formData

        // Construct mailto link
        const mailtoLink = `mailto:ipreetgs@icloud.com?subject=${encodeURIComponent(subject || "Contact from TGF Website")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

        window.location.href = mailtoLink
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const socialLinks = [
        { name: "TGF on Instagram", icon: Instagram, url: tgfSocials.instagram, color: "text-pink-600" },
        { name: "TGF on LinkedIn", icon: Linkedin, url: tgfSocials.linkedin, color: "text-blue-700" },
        { name: "Sip & Shelf on Instagram", icon: Instagram, url: sipAndShelfLinks.instagram, color: "text-amber-600" },
        { name: "Sip & Shelf on LinkedIn", icon: Linkedin, url: sipAndShelfLinks.linkedin, color: "text-amber-700" },
        { name: "LinkedIn", icon: Linkedin, url: founderLinks.linkedin, color: "text-blue-600" },
        { name: "Portfolio", icon: Globe, url: founderLinks.portfolio, color: "text-green-600" },
        { name: "GitHub", icon: Github, url: founderLinks.github, color: "text-gray-900 dark:text-gray-100" },
        { name: "Instagram (Personal)", icon: Instagram, url: "https://instagram.com/__gurpreet__23", color: "text-pink-600" },
        { name: "Instagram (Public)", icon: Instagram, url: "https://www.instagram.com/ipreetgs", color: "text-purple-600" },
        { name: "Facebook", icon: Share2, url: "https://www.facebook.com/ipreetgs/", color: "text-blue-800" },
        { name: "Wishlink", icon: Briefcase, url: "http://wishlink.com/ipreetgs", color: "text-orange-500" },
        { name: "Igli", icon: Share2, url: "http://igli.me/ipreetgs", color: "text-green-600" },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-stone-950">
            {/* Header */}
            <section className="py-20 bg-stone-900 text-white text-center">
                <div className="container px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Connect</h1>
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                        Want to order from the farm, ask about Sip &amp; Shelf, talk tech, or just say hi? Drop a message and I&apos;ll get back to you.
                    </p>
                </div>
            </section>

            <div className="container px-4 py-12 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Form */}
                    <Card className="h-fit shadow-xl border-stone-200 dark:border-stone-800">
                        <CardHeader>
                            <CardTitle className="text-2xl">Send a Message</CardTitle>
                            <CardDescription>
                                This form will open your default email client to send a message directly to us.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="Inquiry about..."
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write your message here..."
                                        className="min-h-[150px]"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900">
                                    <Send className="mr-2 h-4 w-4" /> Send Email
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Social Links */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Share2 className="text-amber-600" /> Social & Professional
                            </h2>
                            <div className="grid gap-4">
                                {socialLinks.map((link) => (
                                    <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="block group">
                                        <div className="flex items-center p-4 bg-white dark:bg-stone-900 rounded-lg shadow-sm border border-stone-200 dark:border-stone-800 hover:shadow-md hover:border-amber-500 transition-all">
                                            <div className={`p-3 rounded-full bg-stone-100 dark:bg-stone-800 mr-4 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors`}>
                                                <link.icon className={`h-6 w-6 ${link.color}`} />
                                            </div>
                                            <span className="font-medium text-lg pr-4">{link.name}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-100 dark:border-amber-900/30">
                            <h3 className="font-bold text-lg mb-2 text-amber-800 dark:text-amber-200">Direct Contact</h3>
                            <div className="flex items-center gap-3 text-stone-700 dark:text-stone-300">
                                <Mail className="h-5 w-5" />
                                <a href="mailto:ipreetgs@icloud.com" className="hover:underline hover:text-amber-600">
                                    Send an Email
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
