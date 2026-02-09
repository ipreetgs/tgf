import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sprout, Milk, ShieldCheck, Droplets, Leaf, Tractor, CheckCircle } from "lucide-react"
import { Wheat } from "lucide-react"
import Image from "next/image"

import Link from "next/link"

export default function FarmingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full py-32 lg:py-48 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/farm3.png"
                        alt="Harvesting at TGF"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                </div>
                <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-green-100">
                        Purity from Soil to Soul
                    </h1>
                    <p className="mx-auto max-w-[800px] text-lg md:text-xl text-green-50 mb-8 font-light">
                        Experience the authentic taste of Punjab. 100% Organic, Preservative-Free, and Ethically Grown.
                    </p>
                    <div className="space-x-4">
                        <Link href="/farming/harvest">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-none">Our Harvest</Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-900">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values / Facts Section */}
            <section className="w-full py-16 bg-white dark:bg-zinc-950">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-green-50 dark:bg-green-950/20">
                            <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-400">
                                <Leaf className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">100% Organic</h3>
                            <p className="text-muted-foreground">Certified organic farming methods without harmful pesticides or synthetic fertilizers.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                                <Droplets className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Pure & Natural</h3>
                            <p className="text-muted-foreground">Raw, unprocessed milk and ghee. No preservatives, no additives, just nature's best.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-amber-50 dark:bg-amber-950/20">
                            <div className="p-4 bg-amber-100 dark:bg-amber-900 rounded-full text-amber-600 dark:text-amber-400">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Totally Hygienic</h3>
                            <p className="text-muted-foreground">State-of-the-art automated milking and packaging processes ensuring highest safety standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Sections */}
            <section className="w-full py-12 md:py-24 bg-muted/20">
                <div className="container px-4 md:px-6 space-y-24">
                    {/* Dairy Feature */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/dairy.JPG"
                                alt="TGF Dairy Farm"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                                <Milk className="h-4 w-4" /> <span>Dairy Excellence</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pure Buffalo Milk & Desi Ghee</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our livestock thrives in a stress-free environment, fed on organic fodder grown right on our farm.
                                This results in milk that is rich, creamy, and packed with nutrition. We take pride in producing traditional Desi Ghee via the Bilona method, preserving the aroma and health benefits.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-5 w-5 text-green-500" /> High Fat Content (A2 Properties)</li>
                                <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-5 w-5 text-green-500" /> Antibiotic & Hormone Free</li>
                                <li className="flex items-center gap-2 font-medium"><CheckCircle className="h-5 w-5 text-green-500" /> Untouched by Human Hands</li>
                            </ul>
                        </div>
                    </div>

                    {/* Crops Feature */}
                    <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="space-y-6 md:order-1">
                            <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                                <Wheat className="h-4 w-4" /> <span>Golden Harvest</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Premium Basmati & Wheat</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Located in the heart of Punjab's fertile plains, TGF produces some of the world's finest Basmati rice.
                                Our staple crops are nurtured with care, ensuring every grain embodies the richness of the land.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-4 bg-background rounded-lg border shadow-sm">
                                    <h4 className="font-bold text-lg mb-1">Basmati Rice</h4>
                                    <p className="text-sm text-muted-foreground">Long-grain, aromatic, aged to perfection.</p>
                                </div>
                                <div className="p-4 bg-background rounded-lg border shadow-sm">
                                    <h4 className="font-bold text-lg mb-1">Organic Wheat</h4>
                                    <p className="text-sm text-muted-foreground">Whole grain, chemically free flour source.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 md:order-2">
                            <Image
                                src="/farm2.png"
                                alt="Wheat Fields"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="w-full py-12 md:py-24 justify-center bg-zinc-900 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Gallery: Life on the Farm</h2>
                        <p className="text-zinc-400 max-w-2xl">A glimpse into our daily operations, our animals, and the lush green fields of TGF.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px]">
                        {/* Large Item */}
                        <div className="relative group overflow-hidden rounded-xl md:col-span-2 md:row-span-2">
                            <Image
                                src="/dairy2.png"
                                alt="Dairy Herd"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-xl font-bold">Our Pride: The Herd</span>
                            </div>
                        </div>

                        {/* Regular Items */}
                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src="/dairy1.png"
                                alt="Calf"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src="/farm1.JPG"
                                alt="Farm House"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Wide Item */}
                        <div className="relative group overflow-hidden rounded-xl md:col-span-2">
                            <Image
                                src="/farm3.png"
                                alt="Harvest"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-xl font-bold">Harvest Season</span>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src="/farm.JPG"
                                alt="Night View"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

