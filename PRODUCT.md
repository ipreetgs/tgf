# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

TGF serves four audiences equally (confirmed):

- **Farm customers** in and around Firozpur, Punjab, who want fresh buffalo milk, desi ghee, Basmati rice and wheat and need to know how to order.
- **Book readers** considering *Art of Attraction* by Gurpreet Singh, who want to buy it or book a 1:1 call.
- **Tech employers, clients and collaborators** evaluating Gurpreet Singh as a Senior DevOps engineer and founder.
- **Readers, cafes and partners** interested in Sip & Shelf, and engineers interested in Aegis.

## Product Purpose

The website for TGF Group, a founder-led company from Firozpur, Punjab, with four ventures: organic farming, books, IT-DevOps, and perfume (TGF Parfum, in development). It lets each audience understand the venture they came for and act on it: order from the farm, buy the book or book a call, view the founder's DevOps work and products, or follow the perfume launch.

## Positioning

A company led by its founder (confirmed): TGF Group is the brand, Gurpreet Singh appears as its founder. What no neighbour can copy: one person who runs an organic buffalo dairy and grain farm in Punjab, works as a Senior DevOps engineer, writes books, and builds products (Sip & Shelf, Aegis), under one name and one standard of care.

## Operating Context

- Static Next.js site (`output: "export"`), deployed to Firebase Hosting (project `thegfarm`) via a Harness CI pipeline on push to `main`.
- Farm orders arrive by email (the contact form opens a mailto to ipreetgs@icloud.com) and Instagram DMs to @the_gfarm.
- Book sales go through Gumroad; calls are booked through Calendly; the book has its own site.

## Capabilities and Constraints

- Routes: `/` home, `/farming`, `/farming/harvest`, `/books`, `/devops` (labelled IT-DevOps), `/perfume`, `/about`, `/contact`.
- No backend: no checkout, accounts or form processing on this site.
- Work history and client projects live in `src/lib/portfolio.ts`; external URLs in `src/lib/links.ts`.
- The current employer's name is deliberately hidden (role: Senior DevOps Engineer, Nov 2026 to present).
- Experience is stated as **5+ years** everywhere.
- Tripare and HRC (Opstree client projects) are described in general terms only until the founder supplies specifics.
- Perfume is pre-launch: no products, prices or release date exist.

## Brand Commitments

- Name: TGF Group (Instagram @the_gfarm, LinkedIn /company/thegfarm). Location line: Firozpur, Punjab.
- The founder asked for a professional, premium standard of craft, citing Apple and premium brands as the bar.
- Standing preference (confirmed 2026-11-19, after rejecting a culturally themed Phulkari direction): the premium brand-site standard, played straight at Apple-class craft. No themed or costume worlds.
- The site must be a full multi-page website: each venture has its own pages with a tab bar (local navigation), not one long page.
- Voice: plain, warm, first-person where the founder speaks; honest, no hype.

## Evidence on Hand

- Real photos in `public/`: farm and dairy (`dairy*.webp`, `farm*.webp`, `tgf_home_hero.webp`), founder portrait (`me.jpg`).
- Confirmed true: the two reader quotes on the Books page; certified organic farming; milk with A2 properties, antibiotic and hormone free, untouched by hands; the 40% deployment-time reduction at TestingXperts.
- Book links: site https://artofattractionbook.web.app/, buy https://ipreet.gumroad.com/l/ArtOfAttrection, call https://calendly.com/ipreetgs/30min.
- Sip & Shelf: https://sip-and-shelf.vercel.app/ (founder & CEO). Aegis: https://github.com/ipreetgs/aegis (open source).
- Absent, never to be invented: customer counts, farm output figures, prices, book sales numbers, press, additional testimonials, perfume details beyond "in formulation".

## Product Principles

1. Every venture gets one clear next step for its audience.
2. Real material over decoration: the farm, the founder and the work are the proof.
3. Say only what is true; specifics beat adjectives.
4. One standard of care across very different ventures.
