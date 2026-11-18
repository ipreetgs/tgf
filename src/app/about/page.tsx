import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Instagram, Facebook, Globe, MapPin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { aegisLinks, founderLinks, sipAndShelfLinks } from "@/lib/links"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero / Intro */}
            <section className="relative w-full py-20 lg:py-32 bg-slate-50 dark:bg-zinc-900 border-b">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <div className="inline-block rounded-full bg-slate-200 dark:bg-slate-800 px-3 py-1 text-sm font-medium">
                                Founder, TGF &amp; Sip &amp; Shelf
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                Gurpreet Singh
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                                Technologist by profession, farmer by heart.
                                I spend my days automating cloud infrastructure and the rest of my time on the farm,
                                writing, and building things people can actually use.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <Link href="https://linkedin.com/in/ipreetgs" target="_blank">
                                    <Button variant="outline" size="icon" className="rounded-full">
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="https://github.com/ipreetgs" target="_blank">
                                    <Button variant="outline" size="icon" className="rounded-full">
                                        <Github className="h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="https://instagram.com/__gurpreet__23" target="_blank">
                                    <Button variant="outline" size="icon" className="rounded-full">
                                        <Instagram className="h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="https://www.facebook.com/ipreetgs/" target="_blank">
                                    <Button variant="outline" size="icon" className="rounded-full">
                                        <Facebook className="h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="https://ipreetgs.github.io/u/" target="_blank">
                                    <Button variant="outline" size="icon" className="rounded-full">
                                        <Globe className="h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        {/* Profile Image */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                            <Image
                                src="/me.jpg"
                                alt="Gurpreet Singh"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio & Journey */}
            <section className="w-full py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                                <p className="text-slate-600 dark:text-slate-300 leading-loose">
                                    I&apos;m a <strong>DevOps engineer</strong> and a <strong>farmer</strong>. People are often surprised by
                                    that mix, but the two jobs have a lot in common. Servers and crops both need patience, routine and
                                    someone who notices small problems before they turn into big ones.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-loose mt-4">
                                    For over 4.5 years I&apos;ve built CI/CD pipelines, automated infrastructure with Terraform and Ansible,
                                    and kept systems running when it counts. I started in hands-on network security and went on to lead
                                    cloud migrations. I like code that quietly solves a real problem and keeps working long after it ships.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-loose mt-4">
                                    At <strong>TGF</strong>, I bring modern methods to traditional farming. We care about the purity of our
                                    buffalo milk and the quality of our Basmati harvest the same way I care about a production deployment:
                                    every detail counts.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-loose mt-4">
                                    I&apos;m also the founder and CEO of <strong>Sip &amp; Shelf</strong>, an app that lets readers lend, swap and
                                    sell their old books and pick them up at a nearby cafe. I wanted a reason to read more and to meet the
                                    people who read too. On the engineering side I build <strong>Aegis</strong>, an open-source
                                    vulnerability-assessment framework for IT and DevOps teams.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-loose mt-4">
                                    And when I write, as in <em>&quot;The Art of Attraction&quot;</em>, it&apos;s about people: how we connect,
                                    and how to live a balanced life.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
                                            <p className="text-sm text-slate-500">
                                                Technology evolves, and so do I. Staying ahead of the curve is not just a job requirement, but a lifestyle.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="pt-6">
                                            <h3 className="font-semibold text-lg mb-2">Sustainable Living</h3>
                                            <p className="text-sm text-slate-500">
                                                Balancing high-tech solutions with grounded, eco-friendly farming practices.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="text-slate-400 h-5 w-5" />
                                        <div>
                                            <p className="text-sm font-medium">Location</p>
                                            <p className="text-sm text-muted-foreground">India / Global</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="text-slate-400 h-5 w-5" />
                                        <div>
                                            <p className="text-sm font-medium">Contact</p>
                                            <p className="text-sm text-muted-foreground">via LinkedIn</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-6">
                                <h3 className="font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link href="/devops" className="hover:underline text-blue-600 dark:text-blue-400">See my IT-DevOps work &rarr;</Link>
                                    </li>
                                    <li>
                                        <Link href={founderLinks.portfolio} target="_blank" rel="noopener noreferrer" className="hover:underline text-green-600 dark:text-green-400">Visit my portfolio &rarr;</Link>
                                    </li>
                                    <li>
                                        <Link href={sipAndShelfLinks.site} target="_blank" rel="noopener noreferrer" className="hover:underline text-orange-600 dark:text-orange-400">Try Sip &amp; Shelf &rarr;</Link>
                                    </li>
                                    <li>
                                        <Link href={aegisLinks.repo} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-600 dark:text-emerald-400">Aegis on GitHub &rarr;</Link>
                                    </li>
                                    <li>
                                        <Link href="/books" className="hover:underline text-amber-600 dark:text-amber-400">Read &quot;Art of Attraction&quot; &rarr;</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
