"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Wheat, Leaf, Sun, Droplets } from "lucide-react"
import { motion } from "framer-motion"

export default function HarvestPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }

    return (
        <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-stone-950">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/farm3.png"
                        alt="Golden Wheat Fields of Firozpur"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 container px-4 text-center text-white space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
                    >
                        The Bounty of <span className="text-amber-400">Firozpur</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl max-w-3xl mx-auto text-stone-200 font-light"
                    >
                        Cultivated with love and tradition by Gurpreet Singh on the fertile plains of Punjab.
                    </motion.p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 md:py-24 bg-white dark:bg-stone-900 text-center">
                <div className="container px-4 max-w-4xl mx-auto">
                    <Leaf className="w-12 h-12 text-green-600 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800 dark:text-stone-100">
                        100% Chemical-Free Farming
                    </h2>
                    <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
                        At our farm in Firozpur, we believe that true health begins with the soil.
                        Under the guidance of <strong>Gurpreet Singh</strong>, we have embraced a holistic approach
                        to agriculture. We don't just grow food; we nurture an ecosystem. From our staple grains
                        to the fodder for our dairy herd, everything is cultivated without harmful chemicals,
                        ensuring purity from soil to soul.
                    </p>
                </div>
            </section>

            {/* The Harvest Grid */}
            <section className="py-16 bg-stone-100 dark:bg-stone-950">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div
                            {...fadeIn}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image src="/farm2.png" alt="Wheat Harvest" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                                    <Wheat className="w-6 h-6 text-amber-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-stone-800 dark:text-stone-100">Staple Grains</h3>
                            </div>
                            <h4 className="text-xl font-semibold text-amber-700 dark:text-amber-500">Wheat & Basmati Rice</h4>
                            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                                Our fields shimmer with the gold of premium Sharbati Wheat and the aromatic allure of Basmati Rice.
                                Grown using traditional wisdom combined with modern sustainable practices, our grains are
                                harvested at peak maturity to ensure maximum nutrition and taste.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="order-2 md:order-1 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                                    <Sun className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-stone-800 dark:text-stone-100">Organic Produce</h3>
                            </div>
                            <h4 className="text-xl font-semibold text-green-700 dark:text-green-500">Seasonal Vegetables & Fruits</h4>
                            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                                We cultivate a vibrant variety of seasonal vegetables and fruits. From leafy greens to succulent citrus,
                                our produce is sun-ripened and hand-picked. By avoiding synthetic pesticides, we preserve the
                                natural flavors and nutrients that nature intended.
                            </p>
                        </div>
                        <motion.div
                            {...fadeIn}
                            className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image src="/farm.JPG" alt="Green Fields" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            {...fadeIn}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image src="/dairy.JPG" alt="Fodder for Animals" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                    <Droplets className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-stone-800 dark:text-stone-100">Cycle of Life</h3>
                            </div>
                            <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-500">Nutrient-Rich Animal Fodder</h4>
                            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                                Thinking holistically, we grow specialized organic crops solely for our dairy herd.
                                Healthy soil grows healthy fodder, which feeds happy buffaloes, resulting in the purest,
                                cream-rich milk. This closed-loop system is the secret behind the quality of our dairy products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-900 text-white text-center">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Taste the Purity of Firozpur</h2>
                    <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Interested in our harvest? Contact us to know about the current season's availability.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/farming#contact">
                            <Button size="lg" className="bg-white text-green-900 hover:bg-green-100">
                                Contact Us
                            </Button>
                        </Link>
                        <Link href="/farming">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Farming
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
