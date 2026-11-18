import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLink } from "@/components/chevron-link"
import { BookCover } from "@/components/book-cover"
import { aegisLinks, bookLinks, sipAndShelfLinks, tgfSocials } from "@/lib/links"

const external = { target: "_blank", rel: "noopener noreferrer" } as const

export default function Home() {
  return (
    <div className="flex flex-col gap-3 pb-3">
      {/* Hero */}
      <section className="pt-14 text-center md:pt-20">
        <div className="container animate-fade-up">
          <h1 className="mx-auto max-w-4xl text-[clamp(2.75rem,7vw,5rem)] leading-[1.03] tracking-[-0.035em]">
            Rooted in Punjab.
            <br />
            Built for today.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-muted-foreground">
            Organic farming, books, technology and fragrance from Firozpur, Punjab. Four ventures, one standard of care.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/farming">Visit the farm</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Meet the founder</Link>
            </Button>
          </div>
        </div>
        <div className="container mt-12 md:mt-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-tile md:aspect-[1179/560]">
            <Image
              src="/tgf_home_hero.webp"
              alt="Gurpreet Singh walking through the crop fields at TGF in Firozpur"
              fill
              priority
              sizes="(min-width: 1280px) 1160px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Farming */}
      <section aria-labelledby="farming-tile" className="mx-3 overflow-hidden rounded-tile bg-muted pt-14 text-center md:pt-20">
        <h2 id="farming-tile" className="text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">Farming</h2>
        <p className="mx-auto mt-3 max-w-xl px-5 text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.3] text-muted-foreground">
          Buffalo milk, desi ghee and Basmati from our own fields.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[clamp(1.0625rem,1.5vw,1.25rem)]">
          <ChevronLink href="/farming">Learn more</ChevronLink>
          <ChevronLink href="/farming/order">How to order</ChevronLink>
        </div>
        <div className="relative mx-auto mt-10 aspect-[16/8] max-w-[1100px] md:mt-14">
          <Image src="/farm2.webp" alt="Sunset over the TGF fields" fill sizes="(min-width: 1180px) 1100px, 100vw" className="rounded-t-[20px] object-cover" />
        </div>
      </section>

      {/* IT-DevOps */}
      <section aria-labelledby="devops-tile" className="mx-3 overflow-hidden rounded-tile bg-ink pt-14 text-center text-ink-foreground md:pt-20">
        <h2 id="devops-tile" className="text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">IT-DevOps</h2>
        <p className="mx-auto mt-3 max-w-xl px-5 text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.3] text-ink-muted">
          5+ years of pipelines, cloud and reliability. Two products in the making.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[clamp(1.0625rem,1.5vw,1.25rem)]">
          <ChevronLink href="/devops" className="text-[#46C98A]">Learn more</ChevronLink>
          <ChevronLink href="/devops/products" className="text-[#46C98A]">See the products</ChevronLink>
        </div>
        <div className="mx-auto mt-10 max-w-3xl px-5 text-left md:mt-14">
          <div className="overflow-hidden rounded-t-[16px] border border-b-0 border-white/10 bg-ink-raised shadow-[0_-20px_60px_-20px_rgba(70,201,138,0.25)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-white/40">gurpreet@tgf: ~</span>
            </div>
            <div className="space-y-2.5 overflow-x-auto p-6 pb-10 font-mono text-[13px] leading-relaxed sm:text-sm">
              <p><span className="text-[#46C98A]">$</span> whoami</p>
              <p className="pl-4 text-white/85">Gurpreet Singh · Senior DevOps Engineer · Founder</p>
              <p><span className="text-[#46C98A]">$</span> cat skills.json | jq .core</p>
              <p className="pl-4 text-[#f2c879]">[&quot;AWS&quot;, &quot;Azure&quot;, &quot;Kubernetes&quot;, &quot;Terraform&quot;, &quot;Ansible&quot;, &quot;CI/CD&quot;]</p>
              <p><span className="text-[#46C98A]">$</span> ls ~/building</p>
              <p className="pl-4"><span className="mr-6 text-[#7cc4ff]">sip-and-shelf/</span><span className="text-[#7cc4ff]">aegis/</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Books + Perfume */}
      <div className="mx-3 grid gap-3 lg:grid-cols-2">
        <section aria-labelledby="books-tile" className="flex min-h-[600px] flex-col items-center overflow-hidden rounded-tile bg-muted px-6 pt-14 text-center">
          <h2 id="books-tile" className="text-[clamp(2rem,4vw,3rem)] leading-[1.05]">Art of Attraction</h2>
          <p className="mt-3 max-w-md text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-[1.35] text-muted-foreground">
            Attraction is not chased. It is created.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
            <ChevronLink href="/books">Learn more</ChevronLink>
            <ChevronLink href={bookLinks.buy}>Buy</ChevronLink>
          </div>
          <div className="flex flex-1 items-center py-12">
            <BookCover />
          </div>
        </section>

        <section aria-labelledby="perfume-tile" className="relative isolate flex min-h-[600px] flex-col items-center overflow-hidden rounded-tile bg-ink px-6 pt-14 text-center text-ink-foreground">
          <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,rgba(217,180,106,0.35),transparent_65%)]" aria-hidden />
          <h2 id="perfume-tile" className="text-[clamp(2rem,4vw,3rem)] leading-[1.05]">
            TGF <span className="text-[#d9b46a]">Parfum</span>
          </h2>
          <p className="mt-3 max-w-md text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-[1.35] text-ink-muted">
            Nodesscent, our first signature scent. In formulation now.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
            <ChevronLink href="/perfume" className="text-[#d9b46a]">Learn more</ChevronLink>
            <ChevronLink href={tgfSocials.instagram} className="text-[#d9b46a]">Follow the launch</ChevronLink>
          </div>
          <div className="flex flex-1 items-center py-12">
            <p className="text-[clamp(4.5rem,10vw,7.5rem)] font-semibold leading-none tracking-[-0.05em] text-white/90">
              Soon.
            </p>
          </div>
        </section>
      </div>

      {/* Products */}
      <div className="mx-3 grid gap-3 lg:grid-cols-2">
        <section aria-labelledby="sip-tile" className="flex min-h-[520px] flex-col items-center rounded-tile bg-muted px-6 pt-14 text-center">
          <h2 id="sip-tile" className="text-[clamp(2rem,4vw,3rem)] leading-[1.05]">Sip &amp; Shelf</h2>
          <p className="mt-1 text-[15px] font-medium text-muted-foreground">Founded and led by Gurpreet as CEO</p>
          <p className="mt-3 max-w-md text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-[1.35] text-muted-foreground">
            Lend, swap or sell your old books to readers nearby. Pick them up at a partner cafe.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
            <ChevronLink href="/devops/products#sip-and-shelf">Learn more</ChevronLink>
            <ChevronLink href={sipAndShelfLinks.site}>Open the app</ChevronLink>
          </div>
          <ol className="mt-auto grid w-full max-w-md grid-cols-3 gap-2 pb-10 pt-10 text-left">
            {["Find or list a book", "Pick the terms", "Meet at a cafe"].map((step, i) => (
              <li key={step} className="rounded-[18px] bg-background p-4">
                <span className="text-2xl font-semibold text-primary">{i + 1}</span>
                <p className="mt-2 text-[14px] font-medium leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="aegis-tile" className="flex min-h-[520px] flex-col items-center rounded-tile bg-muted px-6 pt-14 text-center">
          <h2 id="aegis-tile" className="text-[clamp(2rem,4vw,3rem)] leading-[1.05]">Aegis</h2>
          <p className="mt-1 text-[15px] font-medium text-muted-foreground">Open source on GitHub</p>
          <p className="mt-3 max-w-md text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-[1.35] text-muted-foreground">
            A self-contained vulnerability-assessment framework for IT and DevOps teams.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px]">
            <ChevronLink href="/devops/products#aegis">Learn more</ChevronLink>
            <ChevronLink href={aegisLinks.repo}>View on GitHub</ChevronLink>
          </div>
          <div className="mt-auto w-full max-w-md pb-10 pt-10">
            <code className="block overflow-x-auto rounded-[18px] bg-ink px-5 py-4 text-left font-mono text-[13px] text-ink-foreground">
              <span className="text-[#46C98A]">$</span> aegis init &amp;&amp; aegis --code ./my-app
            </code>
          </div>
        </section>
      </div>

      {/* Founder */}
      <section aria-labelledby="founder-tile" className="mx-3 rounded-tile bg-muted">
        <div className="grid items-center gap-10 px-6 py-14 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16 md:px-16 md:py-16">
          <div className="relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-[22px] md:w-full">
            <Image src="/me.jpg" alt="Gurpreet Singh, founder of TGF" fill sizes="(min-width: 768px) 320px, 224px" className="object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h2 id="founder-tile" className="text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.12]">
              &ldquo;Servers and crops both need patience, routine and someone who notices small problems before they turn
              into big ones.&rdquo;
            </h2>
            <p className="mt-5 text-[19px] text-muted-foreground">Gurpreet Singh, founder of TGF Group</p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[17px] md:justify-start">
              <ChevronLink href="/about">Read his story</ChevronLink>
              <ChevronLink href="/contact">Get in touch</ChevronLink>
            </div>
          </div>
        </div>
      </section>

      {/* Follow */}
      <section aria-labelledby="follow-title" className="py-16 text-center md:py-20">
        <div className="container">
          <h2 id="follow-title" className="text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1]">Follow life at the farm</h2>
          <p className="mx-auto mt-3 max-w-xl text-[19px] text-muted-foreground">
            Fields, animals and harvest days, as they happen.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href={tgfSocials.instagram} {...external}>
                <Instagram className="h-4 w-4" /> @the_gfarm
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={tgfSocials.linkedin} {...external}>
                <Linkedin className="h-4 w-4" /> TGF on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
