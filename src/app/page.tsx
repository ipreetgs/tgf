"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sprout, BookOpen, Terminal, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tgf_home_hero.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
              Tradition Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8">
              The TGF Group is a diversified conglomerate bridging the gap between organic agriculture, literary arts, advanced technology, and luxury experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/farming">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-none">
                  Explore Agriculture
                </Button>
              </Link>
              <Link href="/devops">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  View Tech Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Verticals Grid */}
      <section className="py-20 bg-slate-50 dark:bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Ventures</h2>
            <p className="text-muted-foreground mt-4 max-w-[600px] mx-auto">
              Four distinct pillars of excellence, one unified vision.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Farming",
                desc: "100% Organic produce & dairy from the heart of Punjab.",
                icon: Sprout,
                href: "/farming",
                color: "text-green-500",
                bg: "bg-green-500/10",
                image: "/farm1.JPG" // Using existing asset as fallback preview
              },
              {
                title: "Books",
                desc: "Literary works including 'The Art of Attraction'.",
                icon: BookOpen,
                href: "/books",
                color: "text-amber-500",
                bg: "bg-amber-500/10",
                image: "/books-cover.jpg" // Placeholder
              },
              {
                title: "DevOps",
                desc: "Cloud infrastructure & automation solutions.",
                icon: Terminal,
                href: "/devops",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                image: "/tech-bg.jpg" // Placeholder
              },
              {
                title: "Perfume",
                desc: "Luxury fragrances tailored for elegance.",
                icon: Sparkles,
                href: "/perfume",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                image: "/perfume-bg.jpg" // Placeholder
              }
            ].map((venture, index) => (
              <motion.div key={index} variants={itemVariant}>
                <Link href={venture.href} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl border bg-background hover:bg-accent/50 transition-colors p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md">
                    <div className={`p-4 rounded-full ${venture.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <venture.icon className={`h-8 w-8 ${venture.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{venture.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {venture.desc}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Discover <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
