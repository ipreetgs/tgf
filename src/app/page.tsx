"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sprout, BookOpen, Terminal, Sparkles, Coffee, Shield, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { tgfSocials } from "@/lib/links"

const external = { target: "_blank", rel: "noopener noreferrer" } as const

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
              Rooted in Punjab. <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Built for Today.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8">
              TGF is what happens when a farmer learns to code. We grow organic food in Firozpur, write books,
              build software and make fragrances, and we try to do each of them honestly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/farming">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-none">
                  Visit the Farm
                </Button>
              </Link>
              <Link href="/devops">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                  See IT-DevOps
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Do</h2>
            <p className="text-muted-foreground mt-4 max-w-[600px] mx-auto">
              Four very different things. We run all of them the same way: no shortcuts, and nothing we wouldn&apos;t use ourselves.
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
                desc: "Buffalo milk, desi ghee and Basmati from our own fields, with no preservatives and nothing added.",
                icon: Sprout,
                href: "/farming",
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Books",
                desc: "Writing about people and relationships, starting with 'The Art of Attraction'.",
                icon: BookOpen,
                href: "/books",
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "IT-DevOps",
                desc: "Cloud, automation and security work, plus the products I build: Sip & Shelf and Aegis.",
                icon: Terminal,
                href: "/devops",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Perfume",
                desc: "Fragrances you'd actually wear every day, not just on special occasions.",
                icon: Sparkles,
                href: "/perfume",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              }
            ].map((venture) => (
              <motion.div key={venture.title} variants={itemVariant}>
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

      {/* Founder Projects */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What I&apos;m Building Now</h2>
            <p className="text-muted-foreground mt-4 max-w-[600px] mx-auto">
              Two new projects from the IT-DevOps side of TGF.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Sip & Shelf",
                tag: "Founder & CEO",
                desc: "Lend, rent, swap or sell your old books to readers nearby, and pick them up at a partner cafe. A book, a coffee and a reason to step out.",
                icon: Coffee,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Aegis",
                tag: "Open Source",
                desc: "A free, self-contained vulnerability-assessment framework that helps IT and DevOps teams find and fix security gaps in code, containers and endpoints.",
                icon: Shield,
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
              },
            ].map((project) => (
              <Link key={project.title} href="/devops#projects" className="group block">
                <div className="h-full rounded-2xl border bg-background p-6 flex gap-5 shadow-sm hover:shadow-md hover:bg-accent/50 transition-all">
                  <div className={`h-fit p-3 rounded-xl ${project.bg}`}>
                    <project.icon className={`h-7 w-7 ${project.color}`} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{project.tag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                    <p className="flex items-center text-sm font-medium text-primary pt-1">
                      Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Follow TGF */}
      <section className="py-16 bg-green-50 dark:bg-green-950/20 border-t">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Follow Life at the Farm</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fields, animals, harvest days and the odd behind-the-scenes moment. Come and say hello.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={tgfSocials.instagram} {...external}>
              <Button size="lg" variant="outline" className="gap-2 hover:text-pink-600 hover:border-pink-600">
                <Instagram className="h-5 w-5" /> @the_gfarm
              </Button>
            </Link>
            <Link href={tgfSocials.linkedin} {...external}>
              <Button size="lg" variant="outline" className="gap-2 hover:text-blue-600 hover:border-blue-600">
                <Linkedin className="h-5 w-5" /> TGF on LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
