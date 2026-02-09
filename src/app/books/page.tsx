import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Star, User, ShoppingCart, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BooksPage() {
    return (
        <div className="flex flex-col min-h-screen font-serif bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 xl:py-48 bg-stone-100 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-block rounded-lg bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm font-medium text-amber-800 dark:text-amber-300 w-fit">
                                The Psychology of Connection
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none italic">
                                Art of Attraction
                            </h1>
                            <h2 className="text-xl font-medium text-stone-600 dark:text-stone-400">
                                Attraction Is Not Chased. It Is Created.
                            </h2>
                            <p className="max-w-[600px] text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                                Stop relying on logic where emotions decide. The definitive guide to understanding the unspoken psychology of polarity, confidence, and magnetic presence.
                            </p>
                            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                                <Link href="https://aofa-7bfb7.web.app/buy.html" target="_blank">
                                    <Button className="bg-amber-800 hover:bg-amber-900 text-white dark:bg-amber-700 dark:hover:bg-amber-600 h-11 px-8">
                                        <ShoppingCart className="mr-2 h-4 w-4" /> Buy The Book
                                    </Button>
                                </Link>
                                <Link href="https://aofa-7bfb7.web.app/booking.html" target="_blank">
                                    <Button variant="outline" className="border-amber-800 text-amber-800 dark:border-amber-400 dark:text-amber-400 h-11 px-8 hover:bg-amber-50 dark:hover:bg-amber-900/20">
                                        <Phone className="mr-2 h-4 w-4" /> Book a Call
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            {/* Book Cover Visual */}
                            <div className="relative w-[320px] h-[500px] bg-gradient-to-br from-stone-800 to-stone-900 rounded-lg shadow-2xl flex flex-col items-center justify-center p-8 border-r-8 border-stone-950 text-white transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <BookOpen className="w-24 h-24" />
                                </div>
                                <h3 className="text-3xl font-bold text-center mb-2 italic">Art of <br />Attraction</h3>
                                <div className="w-16 h-1 bg-amber-500 my-4" />
                                <p className="text-stone-400 text-sm text-center tracking-widest uppercase">The Psychology of Connection</p>
                                <div className="mt-auto text-center">
                                    <p className="text-sm font-medium text-amber-500">Gurpreet Singh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Philosophy */}
            <section className="w-full py-12 md:py-24 bg-white dark:bg-stone-950">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <BookOpen className="h-10 w-10 mx-auto text-amber-700 mb-4 opacity-50" />
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-stone-900 dark:text-stone-100">The Philosophy</h2>
                        <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">Most advice focuses on "tactics". We focus on <span className="text-amber-700 dark:text-amber-400 font-semibold italic">who you ARE</span>.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Mindset Over Method", desc: "Confidence isn't a performance. It's the absence of the need for validation. Build a core so strong that rejection becomes irrelevant." },
                            { title: "Emotional Polarity", desc: "Attraction requires tension. Learn the dynamics of masculine and feminine energy and how to hold your ground without being aggressive." },
                            { title: "Social Intelligence", desc: "Read what isn't said. Master the sub-communications of body language and presence that trigger instinctual attraction." },
                        ].map((item, i) => (
                            <Card key={i} className="border-none shadow-lg bg-stone-50 dark:bg-stone-900">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-3 text-amber-800 dark:text-amber-500">{item.title}</h3>
                                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="w-full py-16 md:py-24 bg-stone-100 dark:bg-stone-900/50">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Who Is This For?</h2>
                    <div className="grid gap-8 md:grid-cols-3 mx-auto max-w-5xl">
                        {[
                            { title: "The High Performer", desc: "You've optimized your career and finances, but your romantic life feels like the only variable you can't solve." },
                            { title: "The Seeker", desc: "You're tired of gimmicks. You want a deep, psychological understanding of human nature that applies to every interaction." },
                            { title: "The Realist", desc: "You value truth over comfort. You're ready to face the harsh realities of dating markets to compete at the highest level." },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-3">
                                <div className="h-2 w-2 rounded-full bg-amber-600 mb-2" />
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-[300px]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="w-full py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 italic">Impact & Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="bg-amber-50/50 dark:bg-stone-900 border-amber-200 dark:border-amber-900/30">
                            <CardContent className="pt-8 pb-8 px-8 text-center italic text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                                "This book didn't just change how I date. It changed how I walk into a room, how I negotiate business deals, and how I view myself."
                            </CardContent>
                        </Card>
                        <Card className="bg-amber-50/50 dark:bg-stone-900 border-amber-200 dark:border-amber-900/30">
                            <CardContent className="pt-8 pb-8 px-8 text-center italic text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                                "Finally, a guide that doesn't rely on 'pickup' tricks. It's about genuine self-improvement and understanding human psychology."
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Author Section */}
            <section className="w-full py-20 bg-amber-950 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
                        <div className="relative w-64 h-64 shrink-0 rounded-full overflow-hidden border-4 border-amber-600/50 shadow-2xl">
                            <Image
                                src="/me.jpg"
                                alt="Gurpreet Singh"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6 text-center md:text-left">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">About the Author</h2>
                                <h3 className="text-xl text-amber-400 font-medium">Gurpreet Singh</h3>
                            </div>
                            <p className="text-stone-200 text-lg leading-relaxed">
                                Unraveling the complexities of human dynamics through evolutionary psychology and practical application.
                                Gurpreet isn't just an author; he is a technologist and modern thinker who applies systems thinking to social dynamics, helping men navigate the complexities of modern relationships with integrity and confidence.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start pt-2">
                                <Link href="/devops">
                                    <Button variant="outline" className="text-amber-100 border-amber-700 hover:bg-amber-900 hover:text-white">
                                        View Other Ventures
                                    </Button>
                                </Link>
                                <Link href="https://linkedin.com/in/ipreetgs" target="_blank">
                                    <Button className="bg-amber-700 hover:bg-amber-600 text-white">
                                        Connect on LinkedIn
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
