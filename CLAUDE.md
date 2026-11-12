# dean-davis.com: Project Instructions

Read this first in every session that touches the portfolio site.

## Mission
Replace the Squarespace site at dean-davis.com (~$300+/yr) with a self-hosted site Dean owns, that costs ~$0/yr to host, looks better than the original, and doubles as a technical artifact for his PM job search.

## Who it's for
- **Primary audience:** hiring managers and recruiters for **Product Manager and Program Manager roles at B2C / consumer companies** (dream company: Nike).
- Dean is a marketing ops and analytics leader (since 2016, B2B) pivoting into product. The site must make that pivot read as an advantage: real shipped products, real outcomes, consumer instincts.
- The old site was positioned for B2B revenue tooling. **Current positioning is consumer product.** B2B case studies stay (they are real, shipped, and have strong results) but are framed as proof of product skill, not as the target market.

## Non-negotiables
1. **No em dashes** anywhere in site copy or in responses to Dean. Use commas, periods, colons, or parentheses.
2. **Never invent facts, metrics, employers, or results.** Copy comes from Dean's existing site or from Dean directly. Mock/simulated results (Tandem) must stay labeled as mock.
3. Keep every page from the original site reachable, and keep the same URL paths (`/about`, `/projects`, `/tandem`, `/calendarcloud`, `/smartplanner`, `/visionpro`, `/contact`) so existing links and resume links keep working. `/projects-1` redirects to `/certifications`.
4. No dependency on Squarespace after cutover: all images live in `/public/images`.
5. Hosting must stay free-tier (Netlify). Only recurring cost is the domain.
6. Give Dean one clear recommendation with reasoning, not a menu of options.

## Stack (decided)
- **Next.js (App Router) + TypeScript + Tailwind CSS**, `output: "export"` (fully static).
- **Hosting:** Netlify free tier (Dean already uses Netlify for the Zellerfeld app). Deploys automatically from GitHub (`deanmrdavis/portfolio-site`, public) on every push to `main`.
- **Contact form:** Netlify Forms (free, 100 submissions/mo), notifications to Dean's email.
- **Content:** typed data in `src/content/*.ts`. Edit copy there, not inside components.
- **Domain:** dean-davis.com, registered at Squarespace Domains, paid through **2027-03-30**. Domain billing is separate from the website plan.

## Design direction (set by Dean, 2026-11-12)
The site should read as **elegant and product-minded, in the spirit of Apple, Nike, Google, and Kith.**
- Monochrome: white `#ffffff`, soft gray tiles `#f5f5f7`, ink `#1d1d1f`, secondary text `#6e6e73`, hairlines `#d2d2d7`. No colored accent; the product screenshots carry the color.
- One typeface: Geist (Swiss neo-grotesk), semibold headlines with tight tracking (-0.035em). No condensed or novelty type.
- Projects are presented like products: large rounded gray tiles (28px radius), centered copy, black pill buttons, screenshot rising from the bottom edge.
- Case studies are product pages: centered title and tagline, hero screenshot tile, "at a glance" spec strip, calm reading column (~66ch) with a sticky section nav.
- Restrained sizes: page titles max ~4.5rem, section headings ~2.25rem. Clean grid alignment, no zig-zag rows, generous whitespace.
- Homepage headline states plainly who Dean is ("Product manager with a decade of building tools people rely on."). No casual hooks.
- Be honest about experience: Dean has not yet shipped a consumer product to real users. Shipped work is B2B (Calendar Cloud, Smart Planner); consumer work is concepts and prototypes (Project Ed, Tandem). His first real consumer product, a returns tracker, is in progress; add it when it ships.
- Motion: one subtle hero settle on load; respect reduced motion.

## Site map
| Path | Content |
|---|---|
| `/` | Hero, featured projects, short about, CTA |
| `/about` | My Story + photo |
| `/projects` | All projects grid |
| `/visionpro` | Apple Vision Pro: Project Ed (Gamma deck + Google Doc embeds) |
| `/tandem` | Tandem case study (mock KPIs labeled) |
| `/calendarcloud` | Calendar Cloud case study + walkthrough video |
| `/smartplanner` | Smart Planner case study + walkthrough video |
| `/certifications` | 7 certificates (old URL `/projects-1` redirects) |
| `/contact` | Netlify form + email + LinkedIn |

## Cutover plan (do in order, never skip step 4)
1. Build and deploy to a Netlify preview URL.
2. Dean reviews; iterate.
3. Point DNS: in Squarespace Domains, ALIAS `@` to apex-loadbalancer.netlify.com and CNAME `www` to `dean-davis-portfolio.netlify.app` (done 2026-11-12).
4. Verify dean-davis.com serves the new site over HTTPS on every page.
5. Cancel the Squarespace **website** subscription only. Keep the domain.
6. Optional later: transfer the domain to Cloudflare Registrar (~$10/yr at cost) before the 2027-03-30 renewal.

## Status log
Append a dated line here whenever a milestone lands.
- 2026-11-12: GitHub repo deanmrdavis/portfolio-site created (public) and linked to Netlify; pushes to main auto-deploy.
- 2026-11-12: LAUNCHED. dean-davis.com now served by Netlify over HTTPS (Let's Encrypt). Squarespace DNS: Squarespace Defaults preset deleted; custom ALIAS @ -> apex-loadbalancer.netlify.com and CNAME www -> dean-davis-portfolio.netlify.app. www redirects to apex. Form email alerts to Dean on. Netlify badge turned off. About page is a single text column (photo only on homepage).
- 2026-11-12: Content and images extracted from Squarespace. Project instructions written.
- 2026-11-12: v1 built and deployed to Netlify. Site `dean-davis-portfolio` (id 2a067d48-35dd-4403-9f88-cd17064bf38f), preview at https://dean-davis-portfolio.netlify.app. Netlify Forms enabled, `contact` form verified. Not yet on the custom domain.
- 2026-11-12: v2 (later restyled as v3): cleaner homepage (aligned hero, plain headline, project grid), smaller type scale, Zellerfeld moved to drafts, Calendar Cloud and Smart Planner walkthrough videos added (pulled from the Squarespace CDN, re-encoded, self-hosted in `/public/videos`).
- 2026-11-12: v5: Project Ed alpha prototype video embedded (downloaded from Dean's Drive, re-encoded, self-hosted). Case study headers get a "Watch the demo" button when a page has a video.
- 2026-11-12: v4: honest homepage intro; Project Ed rebuilt as a full case study from Dean's product doc (content in `src/content/visionpro.ts`), matching the other projects.
- 2026-11-12: v3: full restyle to the Apple/Nike/Google/Kith direction above.

## Open items
- Zellerfeld: pulled from the site at Dean's request (2026-11-12) because it isn't fully built. Content kept in `src/content/drafts.ts`; revisit later.
- Cancel the Squarespace website plan (renews 2027-03-29). Keep the domain.

## How to deploy changes
Edit content in `src/content/`, commit, and push to `main`; Netlify rebuilds and publishes in about a minute. Local preview: `npm install && npm run dev`.

