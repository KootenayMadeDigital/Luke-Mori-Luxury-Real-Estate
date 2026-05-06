# Claim Source Audit: Luke Mori Luxury Real Estate

Date: 2026-05-06

## Sources checked

- Luke Mori homepage: https://www.lukemori.com/
- Luke Mori awards/testimonials page: https://www.lukemori.com/awards-and-testimonials
- Luke Mori selling page: https://www.lukemori.com/selling-with-luke
- Luke Mori buying page: https://www.lukemori.com/buying-with-luke
- Luxury Lifestyle Awards 2021 article: https://luxurylifestyleawards.com/news/luke-moris-contemporary-approach-to-realtor-services-in-british-columbia-earns-him-top-honors
- DuckDuckGo result snippets for published Luke Mori award/media references
- Local listing data: src/lib/listings.json
- Local sold/property data: src/lib/data.ts

## Claim decisions

### Kept, with source support

- `$169M+ lifetime real estate sales`: visible in Luke Mori homepage HTML as “Lifetime Real Estate Sales of $169+ Million.”
- `Best Luxury Real Estate Broker 2021 & 2024`: visible in Luke Mori homepage HTML. The 2021 award is also directly published by Luxury Lifestyle Awards.
- `Best Luxury Real Estate Broker 2021`: directly published by Luxury Lifestyle Awards in the 2021 article.
- `British Columbia Luxury Homes magazine feature`: present on Luke Mori awards/testimonials page.
- Client testimonials: copied from Luke Mori homepage and awards/testimonials page.
- Seller marketing components: Luke Mori selling page states professional photos, video tour using drone and professional indoor equipment, room measurements, and recorded property details.
- Social proof on seller page: Luke Mori selling/homepage HTML states 350 subscribers, 100+ videos, 200,000 views, 9000+ Instagram followers.
- Contact details: phone/email from Luke Mori site; 602 Baker Street supported by public directory/search results.
- Listing counts/market stats: derived from local listing JSON. Current snapshot: 677 listings, 92 active listings at $1M+, median active price $579,000, max active price $5,995,000, 16 active listings where Luke Mori appears in agent fields.

### Changed or softened

- Removed `150+ Lifetime Clients`: no clean public source found.
- Changed `Career Volume` to `Lifetime Sales`: matches public wording more closely.
- Changed `9+ Press Features` to `9 Media Logos`: avoids overclaiming a count of features when the UI displays nine logos.
- Removed “only two-time recipient in Nelson and Kootenay region”: no source found.
- Changed seller “What every property gets, regardless of price” to a source-backed description of Luke’s published seller materials.
- Changed YouTube/property-film metrics from 500+/250K+/250+ to 350+/200K+/100+, matching Luke Mori site text.
- SEO award field for 2024 no longer attributes 2024 directly to Luxury Lifestyle Awards unless source-backed in visible copy.

## Verification run

- `npm run lint`: pass
- `npx tsc --noEmit`: pass
- `git diff --check`: pass
- No production build run.
