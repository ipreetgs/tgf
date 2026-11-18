import { Suspense } from "react"
import Link from "next/link"
import { Briefcase, Github, Globe, Instagram, Linkedin, Mail, Share2, ArrowUpRight } from "lucide-react"
import { ContactForm, CONTACT_EMAIL } from "@/components/contact-form"
import { founderLinks, sipAndShelfLinks, tgfSocials } from "@/lib/links"

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
    return (
        <div className="flex flex-col gap-3">
            <section className="pb-12 pt-16 text-center md:pb-16 md:pt-24">
                <div className="container animate-fade-up">
                    <h1 className="text-[clamp(2.75rem,7vw,5rem)] leading-[1.03] tracking-[-0.035em]">Let&apos;s connect.</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
                        Want to order from the farm, ask about the book or Sip &amp; Shelf, talk tech, or just say hi? Drop a message.
                    </p>
                </div>
            </section>

            <div className="mx-3 mb-3 grid gap-3 lg:grid-cols-[1.3fr_1fr]">
                <section aria-labelledby="form-title" className="rounded-tile bg-muted p-7 md:p-12">
                    <h2 id="form-title" className="text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">Send a message</h2>
                    <div className="mt-8">
                        <Suspense fallback={<p className="text-muted-foreground">Loading form…</p>}>
                            <ContactForm />
                        </Suspense>
                    </div>
                </section>

                <aside aria-label="Other ways to reach us" className="flex flex-col gap-3">
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="flex items-center gap-4 rounded-tile bg-ink p-7 text-ink-foreground transition-opacity hover:opacity-90 md:p-9"
                    >
                        <Mail className="h-6 w-6 shrink-0 text-[#46C98A]" />
                        <span>
                            <span className="block text-[19px] font-semibold">Email directly</span>
                            <span className="block break-all text-[15px] text-ink-muted">{CONTACT_EMAIL}</span>
                        </span>
                    </a>
                    {socialGroups.map((group) => (
                        <div key={group.title} className="rounded-tile bg-muted p-7 md:p-9">
                            <h2 className="text-[21px]">{group.title}</h2>
                            <ul className="mt-4 divide-y divide-border">
                                {group.links.map((link) => (
                                    <li key={link.url}>
                                        <Link href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 py-3">
                                            <link.icon className="h-[18px] w-[18px] shrink-0 text-foreground/70" />
                                            <span className="min-w-0 flex-1">
                                                <span className="block text-[15px] font-medium">{link.name}</span>
                                                <span className="block truncate text-[13px] text-muted-foreground">{link.handle}</span>
                                            </span>
                                            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </aside>
            </div>
        </div>
    )
}
