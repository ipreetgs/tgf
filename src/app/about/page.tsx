import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Instagram, Facebook, Globe, MapPin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero / Intro */}
            <section className="relative w-full py-20 lg:py-32 bg-slate-50 dark:bg-zinc-900 border-b">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <div className="inline-block rounded-full bg-slate-200 dark:bg-slate-800 px-3 py-1 text-sm font-medium">
                                Founder & Visionary
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                Gurpreet Singh
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                                Technologist by Profession, Farmer by Heart.
                                Bridging the gap between Silicon Valley methods and Indus Valley traditions.
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
                                    I am a dynamic <strong>DevOps Engineer</strong> and a <strong>modern agriculturalist</strong>. This unique combination allows me to view the world through two distinct yet complementary lenses: the precise, automated world of cloud infrastructure, and the organic, patient rhythms of nature.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-loose mt-4">
                                    On the technical front, I have spent over 4.5 years designing robust CI/CD pipelines, automating complex infrastructures using Terraform and Ansible, and ensuring system resilience. My journey has taken me from hands-on network security to leading cloud migration projects at scale. I believe in the power of code to solve problems, increase efficiency, and create scalable systems that stand the test of time.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-loose mt-4">
                                    Simultaneously, I am deeply connected to my heritage. At <strong>TGF</strong>, I apply modern methodologies to traditional farming. We don't just grow crops; we cultivate sustainability and health. Whether it's ensuring the purity of our buffalo milk or the quality of our Basmati harvest, I bring the same level of attention to detail to the farm as I do to a production deployment.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-loose mt-4">
                                    My writing, particularly through <em>"The Art of Attraction"</em>, is where these worlds converge—exploring human connection, philosophy, and the subtle art of living a balanced life.
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
                                        <Link href="/devops" className="hover:underline text-blue-600 dark:text-blue-400">View Professional Portfolio &rarr;</Link>
                                    </li>
                                    <li>
                                        <Link href="/books" className="hover:underline text-amber-600 dark:text-amber-400">Read "Art of Attraction" &rarr;</Link>
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
