"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight, Sprout, BookOpen, Terminal, Sparkles, Coffee, Shield, Instagram, Linkedin, MapPin, Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { tgfSocials } from "@/lib/links"

const external = { target: "_blank", rel: "noopener noreferrer" } as const

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const ventures = [
  {
    title: "IT-DevOps",
    desc: "Cloud, automation and security work, plus the products I build: Sip & Shelf and Aegis.",
    icon: Terminal,
    href: "/devops",
    className: "bg-[#0f1714] text-[#e7e3d8] dark:border-white/10",
    iconClass: "bg-white/10 text-[#7bd88f]",
    textClass: "text-white/70",
  },
  {
    title: "Books",
    desc: "Writing about people and relationships, starting with 'The Art of Attraction'.",
    icon: BookOpen,
    href: "/books",
    className: "bg-card",
    iconClass: "bg-gold/15 text-gold",
    textClass: "text-muted-foreground",
  },
  {
    title: "Perfume",
    desc: "TGF Parfum: our first signature scent is in the lab now. Fragrances you'd actually wear every day.",
    icon: Sparkles,
    href: "/perfume",
    className: "bg-gradient-to-br from-[#2a2117] to-[#14100b] text-[#f3e9d7] dark:border-white/10",
    iconClass: "bg-white/10 text-[#e6c27a]",
    textClass: "text-white/70",
    wide: true,
  },
]

const farmPhotos = [
  { src: "/dairy1.webp", alt: "A calf on the TGF dairy farm" },
  { src: "/farm2.webp", alt: "Wheat fields at TGF" },
  { src: "/dairy2.webp", alt: "The TGF buffalo herd" },
  { src: "/farm3.webp", alt: "Harvest season at TGF" },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden md:min-h-[86vh] md:items-center">
        <Image
          src="/tgf_home_hero.webp"
          alt="Gurpreet walking through the crop fields at TGF in Firozpur"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/20 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-transparent" />

        <div className="container py-16 text-white md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-6"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
              <MapPin className="h-3.5 w-3.5" /> Firozpur, Punjab
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Rooted in Punjab.
              <br />
              <span className="italic text-[#e6c27a]">Built for today.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              TGF is what happens when a farmer learns to code. We grow organic food, write books, build software and
              make fragrances, and we try to do each of them honestly.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" variant="gold">
                <Link href="/farming">
                  Visit the farm <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-black">
                <Link href="/about">Meet the founder</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-16 md:py-24">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="What we do"
            title="Four very different things, one way of doing them"
            description="No shortcuts, and nothing we wouldn't use ourselves."
          />

          <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
            {/* Farming: the anchor of TGF, shown large */}
            <motion.div {...fadeUp} className="lg:row-span-2">
              <Link
                href="/farming"
                className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl border p-7 text-white shadow-sm"
              >
                <Image
                  src="/farm2.webp"
                  alt="Golden wheat at TGF"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <span className="mb-auto grid h-12 w-12 place-items-center rounded-xl bg-white/15 backdrop-blur">
                  <Sprout className="h-6 w-6" />
                </span>
                <h3 className="text-3xl font-semibold">Farming</h3>
                <p className="mt-2 max-w-sm text-white/80">
                  Buffalo milk, desi ghee and Basmati from our own fields, with no preservatives and nothing added.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#e6c27a]">
                  Explore the farm <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>

            {ventures.map((v, i) => (
              <motion.div key={v.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 * (i + 1) }} className={"wide" in v ? "lg:col-span-2" : undefined}>
                <Link
                  href={v.href}
                  className={`group flex h-full min-h-[220px] flex-col rounded-3xl border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${v.className}`}
                >
                  <span className={`grid h-12 w-12 place-items-center rounded-xl ${v.iconClass}`}>
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold">{v.title}</h3>
                  <p className={`mt-2 max-w-md text-sm leading-relaxed ${v.textClass}`}>{v.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-y bg-secondary/40 py-16 md:py-24">
        <div className="container grid items-center gap-12 md:grid-cols-[auto_1fr]">
          <motion.div {...fadeUp} className="relative mx-auto w-56 sm:w-64 md:w-72">
            <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2rem] bg-gold/20" aria-hidden />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border-4 border-background shadow-xl">
              <Image src="/me.jpg" alt="Gurpreet Singh, founder of TGF" fill sizes="288px" className="object-cover" />
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-5">
            <p className="eyebrow">Meet the founder</p>
            <Quote className="h-8 w-8 text-gold/60" aria-hidden />
            <blockquote className="font-serif text-2xl leading-snug sm:text-3xl">
              Servers and crops both need patience, routine and someone who notices small problems before they turn into
              big ones.
            </blockquote>
            <p className="max-w-xl text-muted-foreground">
              I&apos;m Gurpreet Singh: a Senior DevOps engineer by profession and a farmer at heart. TGF is where I bring
              both together, along with my writing and the products I build.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">
                Read my story <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Building now */}
      <section className="py-16 md:py-24">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="New from TGF"
            title="What I'm building now"
            description="Two new projects from the IT-DevOps side of TGF."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Sip & Shelf",
                tag: "Founder & CEO",
                desc: "Lend, rent, swap or sell your old books to readers nearby, and pick them up at a partner cafe. A book, a coffee and a reason to step out.",
                icon: Coffee,
                tone: "bg-gold/15 text-gold",
              },
              {
                title: "Aegis",
                tag: "Open Source",
                desc: "A free, self-contained vulnerability-assessment framework that helps IT and DevOps teams find and fix security gaps in code, containers and endpoints.",
                icon: Shield,
                tone: "bg-primary/10 text-primary",
              },
            ].map((project, i) => (
              <motion.div key={project.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 * i }}>
                <Link
                  href="/devops#projects"
                  className="group flex h-full gap-5 rounded-3xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${project.tone}`}>
                    <project.icon className="h-6 w-6" />
                  </span>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <span className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">{project.tag}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                    <span className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow the farm */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="overflow-hidden rounded-3xl bg-primary text-primary-foreground">
            <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold sm:text-4xl">Follow life at the farm</h2>
                <p className="max-w-md text-primary-foreground/80">
                  Fields, animals, harvest days and the odd behind-the-scenes moment. Come and say hello.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="gold" size="lg">
                    <Link href={tgfSocials.instagram} {...external}>
                      <Instagram className="h-5 w-5" /> @the_gfarm
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary">
                    <Link href={tgfSocials.linkedin} {...external}>
                      <Linkedin className="h-5 w-5" /> TGF on LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {farmPhotos.map((photo) => (
                  <div key={photo.src} className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
