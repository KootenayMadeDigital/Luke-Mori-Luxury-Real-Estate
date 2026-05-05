/* ============================================================
   Real-content data layer for Luke Mori Luxury.
   Sourced from lukemori.com and public listing material.
   ============================================================ */

/* ---------- Brand contact (real) ---------- */

export const contact = {
  phone: "250-551-4917",
  phoneHref: "tel:+12505514917",
  email: "luke@lukemori.com",
  emailHref: "mailto:luke@lukemori.com",
  office: "602 Baker St, Nelson, BC V1L 4J3",
  brokerage: "Fair Realty",
  social: {
    youtube: "https://www.youtube.com/@Lukemori",
    instagram: "https://www.instagram.com/lukemorirealestate/",
    facebook: "https://www.facebook.com/lukemorirealty/",
    twitter: "https://twitter.com/LukeMoriRealty",
  },
};

/* ---------- Hero, visitor paths, and authority pillars ---------- */

export type HeroProofSignal = { value: string; label: string; detail: string };

export const heroProofSignals: HeroProofSignal[] = [
  {
    value: "$169M+",
    label: "Career sales volume",
    detail: "High-value sales across Nelson, Kootenay Lake, and the surrounding region.",
  },
  {
    value: "2021 & 2024",
    label: "Best Luxury Broker BC",
    detail: "Provincial luxury recognition backed by deep local experience.",
  },
  {
    value: "Nelson born",
    label: "Kootenay Lake knowledge",
    detail: "Luke knows the streets, lakefront pockets, builders, slopes, and owner patterns that shape value.",
  },
];

export type VisitorIntent = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  note: string;
};

export const visitorIntents: VisitorIntent[] = [
  {
    eyebrow: "Sellers",
    title: "Sell with a clear plan.",
    body: "Understand pricing, presentation, showings, and timing before your home reaches buyers.",
    href: "#sellers",
    cta: "Plan a Sale",
    note: "For lakefront, view, acreage, and special properties.",
  },
  {
    eyebrow: "Buyers",
    title: "Find the right home, not just more listings.",
    body: "Compare public listings, local options, and daily-life fit so you spend time on homes that truly make sense.",
    href: "/listings/luxury",
    cta: "Start Your Search",
    note: "For local, Vancouver, Calgary, U.S., and international buyers.",
  },
  {
    eyebrow: "Relocation & Second Homes",
    title: "Feel prepared before you move.",
    body: "Understand neighbourhoods, schools, healthcare, winter conditions, and the first areas worth seeing in person.",
    href: "/buyers/relocation",
    cta: "Plan Your Move",
    note: "For Nelson, North Shore, Balfour, Kaslo, and the Slocan Valley.",
  },
  {
    eyebrow: "Referrals",
    title: "Introduce someone with confidence.",
    body: "For past clients, advisors, and trusted local relationships helping a buyer or seller find the right guidance.",
    href: "/contact",
    cta: "Make an Introduction",
    note: "For trusted introductions and personal conversations.",
  },
];

export type AuthorityPillar = { number: string; title: string; body: string };

export const authorityPillars: AuthorityPillar[] = [
  {
    number: "01",
    title: "Local Knowledge",
    body: "From John's Walk to Johnstone Road, Luke knows the lots, views, roads, builders, and ownership patterns that shape value.",
  },
  {
    number: "02",
    title: "Seller Representation",
    body: "High-value homes need disciplined pricing, strong visuals, qualified showings, and exposure that does not cheapen the property.",
  },
  {
    number: "03",
    title: "Property Marketing",
    body: "Film, drone, sharp copy, and a dedicated property page help the right buyer understand the home before the showing.",
  },
  {
    number: "04",
    title: "Buyer Network",
    body: "Relocating buyers, second-home buyers, and local buyers who know what they want before they book a tour.",
  },
  {
    number: "05",
    title: "Kootenay Lake Expertise",
    body: "Waterfront, North Shore, ski access, acreage, and the practical details that change value from one property to the next.",
  },
];

/* ---------- Credentials hairline (real public claims) ---------- */

export type Credential = { value: string; label: string };

export const credentials: Credential[] = [
  { value: "$169M+", label: "Career Sales Volume" },
  { value: "2021 & 2024", label: "Best Luxury Broker BC" },
  { value: "10+ Yrs", label: "Nelson Market Knowledge" },
  { value: "Private", label: "Representation" },
];

/* ---------- Trust section ---------- */

export type TrustProof = {
  eyebrow: string;
  title: string;
  proof: string;
  meaning: string;
};

export const trustProofs: TrustProof[] = [
  {
    eyebrow: "Track Record",
    title: "Sales volume with real negotiation experience.",
    proof: "$169M+ career sales volume across Nelson and the Kootenays.",
    meaning:
      "The number matters because it comes from real pricing, offers, negotiations, and closings, not claims on a brochure.",
  },
  {
    eyebrow: "Recognition",
    title: "Recognized in BC. Grounded in Nelson.",
    proof: "Voted Best Luxury Real Estate Broker in British Columbia by the Luxury Lifestyle Awards in 2021 and again in 2024.",
    meaning:
      "Awards help, but the useful work is local: Nelson, Kootenay Lake, the North Shore, and the roads buyers underestimate.",
  },
  {
    eyebrow: "Local Knowledge",
    title: "Born here. Knows the area.",
    proof: "Born and raised in Nelson, BC, with more than 10 years in the local market.",
    meaning:
      "That knowledge helps buyers avoid the wrong fit and helps sellers explain value clearly.",
  },
  {
    eyebrow: "Presentation",
    title: "Marketing that makes the home clear.",
    proof: "Property film, strong photography, dedicated property pages, and clear listing copy.",
    meaning:
      "When the right buyer understands the property before the showing, fewer visits are wasted and better offers become possible.",
  },
];

export type TrustPrinciple = { title: string; body: string };

export const trustPrinciples: TrustPrinciple[] = [
  {
    title: "Facts before adjectives",
    body: "Sales volume, awards, press visibility, local experience, and client voice make trust easier before the first conversation.",
  },
  {
    title: "Privacy before attention",
    body: "Your privacy, timeline, showing plan, and launch plan are settled before the market starts judging the home.",
  },
  {
    title: "Clarity before pressure",
    body: "Buyers and sellers get a clear next step and a personal reply, not a generic contact queue.",
  },
];

/* ---------- Inquiry paths ---------- */

export type InquiryPath = {
  audience: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  proof: string;
};

export const inquiryPaths: InquiryPath[] = [
  {
    audience: "Sellers",
    title: "Start with the address and your goal.",
    body: "Share the address, timeline, privacy needs, and what you are hoping for. Luke can help you understand the right next step.",
    href: "/contact",
    cta: "Plan your sale",
    proof: "$169M+ career volume, disciplined launch planning, qualified showings.",
  },
  {
    audience: "Buyers",
    title: "Search for the right fit.",
    body: "Share what matters most: lakefront, walkable Nelson, acreage, ski access, a second home, or a relocation plan. Then narrow the search to homes that fit.",
    href: "/buyers",
    cta: "Start your search",
    proof: "Open listings, private introductions, area fit, and local advisors.",
  },
  {
    audience: "Relocation & Second Homes",
    title: "Plan your first visit with care.",
    body: "Schools, winter roads, healthcare, caretaker coverage, and daily routines should be considered before tour day.",
    href: "/buyers/relocation",
    cta: "Plan your move",
    proof: "Nelson, North Shore, Balfour, Blewett, Slocan Valley, and second-home ownership.",
  },
  {
    audience: "Referrals",
    title: "Make a thoughtful introduction.",
    body: "For advisors, past clients, and trusted local relationships introducing a buyer or seller who needs local guidance.",
    href: "/contact",
    cta: "Make an introduction",
    proof: "A direct path into the right conversation.",
  },
];

/* ---------- Press logos (his real coverage, with image URLs) ---------- */

export type PressLogo = { name: string; src: string; alt: string };

export const pressLogos: PressLogo[] = [
  {
    name: "Ryan Serhant",
    src: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/64261d75afa01c72c93b03fd_SERHANT_logo.png",
    alt: "Ryan Serhant",
  },
  {
    name: "BC Luxury Homes",
    src: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/64261ccfa039a797f8191a86_bc-luxury-homes-logo-white.webp",
    alt: "BC Luxury Homes Magazine",
  },
  {
    name: "NYC Journal",
    src: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/647780da88b661a3e83a624c_the-nyc-journal-logo.webp",
    alt: "NYC Journal",
  },
  {
    name: "Truly Classy Luxury",
    src: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6476acd2cc0de46689e54980_truly-classy-luxury-magazine-logo.webp",
    alt: "Truly Classy Luxury Magazine",
  },
  {
    name: "Metropolitan Design",
    src: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6476acd2e0cf325a310c968c_metropolitan-design-magazine-logo.png",
    alt: "Metropolitan Design Magazine",
  },
  {
    name: "Lifestyle News",
    src: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6476acd101597f0016981090_lifestyle-news-logo.webp",
    alt: "Lifestyle News",
  },
  {
    name: "Deluxshionist",
    src: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6476acd14e355f0af962403b_deluxshionist-logo.png",
    alt: "Deluxshionist",
  },
  {
    name: "Design Tellers",
    src: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6476acd1b41557a22aafec2e_designtellers-logo.png",
    alt: "Design Tellers",
  },
  {
    name: "Narcity",
    src: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/647780e4c833dde885f8b906_narcity-logo.png",
    alt: "Narcity",
  },
];

/* ---------- Hero & lifestyle imagery (real) ---------- */

export const brandImages = {
  nelsonLandscape:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc5bb50e2b484db46c921_nelson-bc-looking-north.webp",
  westArmKootenayLake:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbd01452436a306385f19_west-arm-kootenay-lake.webp",
  balfourKootenayLake:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbf4350d03715e52475f0_balfour-kootenay-lake.webp",
  taghumBeach:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645c47aa9f90e17c6340bf24_taghum-beach-nelson-bc.jpeg",
  slocanLake:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645c4642fd23523853ddcfc5_slocan-lake.jpeg",
  procterLakeHouse:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc3e63cf060ba15246859_procter-lake-house-nelson-bc.webp",
  procterLivingRoom:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc5047afaca9df841c013_procter-lake-house-living-room.webp",
  buyerInterior:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/643f5f72973c035fce6e7603_luke-mori-buyer.webp",
  sellerDining:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc24f50e2b484db43de69_beautiful-modern-dining-room.webp",
  sellerStudy:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc17ef700d10a31fbc3d8_staged-white-study-room.webp",
  lukeSellerSign:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/643f6020da8384104ee7c2c1_luke-mori-seller.webp",
  orangeBridge:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc64304b2f02d85dcc491_orange-bridge-nelson-bc.webp",
  bakerStreet:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbe517afaca9df83bb128_baker-street-nelson-bc.jpg",
  whitewater:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/644c985ba7eb5cd68b85251e_skiiing-whitewater-powder.webp",
  kayaking:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbec43c5ce9bf7bf969e7_kayaking-kootenay-lake.webp",
  kokaneeBeach:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dcb933c5ce9bf7b047b0d_kokanee-creek-beach.webp",
  sailboats:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dcbc6df0f35f336976444_sailboats-on-kootenay-lake.webp",
  ainsworth:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dcc76d70f00fded6e2d86_ainsworth.webp",
  balfourFerry:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/644c94282e553d49e931eb19_balfour-ferry.webp",
  balfourGolf:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dcc566c5fd39678aa9ce8_balfour-golf-course.jpeg",
  morningMountain:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645c49ba6e6e26c70b04aa56_morning-mountain-biking-blewett.jpeg",
  blewettSchool:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645c482b99fdbc39f99f1ad2_blewett-elementary-school.jpeg",
  blewettWoodedAcreage: "/generated/blewett-wooded-acreage.webp",
  blewettFamilyEstate: "/generated/blewett-family-estate.webp",
  blewettBakerCommute: "/generated/blewett-baker-commute.webp",
  frogPeakCafe:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645c46630832a07999c1b3d4_frog-peak-cafe-slocan-valley.jpeg",
  valhallaMountains:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645c46889d38854a3709eb19_valhalla-mountains-british-columbia.jpeg",
  lukePortrait:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645d8fbc8db94236ab1c3f92_luke-mori-sitting-on-grey-couch.webp",
  lukeLeaningPortrait:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc0db19116cf9403bfdb8_luke-mori-leaning-against-couch.webp",
  lukeFrame:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc04c452436a3063b3e97_luke-mori-adjusting-picture-frame.webp",
  lukeAwardPhoto:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dca656c5fd39678a8eafc_luxury-lifestyle-award-luke-mori.webp",
  lukeContact:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6508c07354741e28df5af2c6_IMG_4049.JPG",
  signature:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/674dc33b755d5ade724e48d5_luke-mori-signature.svg",
  awardBadge:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc87f3cf060ba1528d066_winner-black-horizontal.webp",
  fairRealty:
    "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/63feb0192159be8269c8e9df_fair-realty-logo-new-horiz.webp",
};

export const headerImages = {
  bakerStreet: "/generated/headers-4k/baker-street-4k.webp",
  procterLivingRoom: "/generated/headers-4k/procter-living-room-4k.webp",
  procterLakeHouse: "/generated/headers-4k/procter-lake-house-4k.webp",
  orangeBridge: "/generated/headers-4k/orange-bridge-4k.webp",
  nelsonLandscape: "/generated/headers-4k/nelson-landscape-4k.webp",
  lukeLeaningPortrait: "/generated/headers-4k/luke-leaning-portrait-4k.webp",
  westArmKootenayLake: "/generated/headers-4k/west-arm-kootenay-lake-4k.webp",
  sellerDining: "/generated/headers-4k/seller-dining-4k.webp",
  lukeContact: "/generated/headers-4k/luke-contact-4k.webp",
  balfourKootenayLake: "/generated/headers-4k/balfour-kootenay-lake-4k.webp",
  taghumBeach: "/generated/headers-4k/taghum-beach-4k.webp",
  slocanLake: "/generated/headers-4k/slocan-lake-4k.webp",
};

export const siteImages = {
  lukePortrait: "/generated/site-images/luke-portrait-enhanced.webp",
  lukeSellerSign: "/generated/site-images/luke-seller-sign-enhanced.webp",
  sellerDining: "/generated/site-images/seller-dining-enhanced.webp",
  sellerStudy: "/generated/site-images/seller-study-enhanced.webp",
  sproatDrive: "/generated/site-images/sproat-drive-enhanced.webp",
  observatoryStreet: "/generated/site-images/observatory-street-enhanced.webp",
  rosemontRobertson: "/generated/site-images/rosemont-robertson-enhanced.webp",
  homeTourAinslie: "/generated/site-images/home-tour-ainslie-enhanced.webp",
  homeTourHeddle: "/generated/site-images/home-tour-heddle-enhanced.webp",
  homeTourHarrop: "/generated/site-images/home-tour-harrop-enhanced.webp",
  privateOfficeTexture: "/generated/site-images/private-office-texture-enhanced.webp",
  lukeFrame: "/generated/site-images/luke-frame-enhanced.webp",
  lukeAward: "/generated/site-images/luke-award-enhanced.webp",
  buyerInterior: "/generated/site-images/buyer-interior-enhanced.webp",
  relocationBaker: "/generated/site-images/relocation-baker-card.webp",
  relocationNorthshore: "/generated/site-images/relocation-northshore-card.webp",
  relocationBlewett: "/generated/site-images/relocation-blewett-card.webp",
  relocationSlocan: "/generated/site-images/relocation-slocan-card.webp",
  internationalProcter: "/generated/site-images/international-procter-card.webp",
  internationalAdvisor: "/generated/site-images/international-luke-advisor-card.webp",
  internationalOwnership: "/generated/site-images/international-ownership-card.webp",
  internationalBalfour: "/generated/site-images/international-balfour-card.webp",
  areaNorthshore: "/generated/site-images/area-northshore-card.webp",
  areaBalfour: "/generated/site-images/area-balfour-card.webp",
  areaSlocan: "/generated/site-images/area-slocan-card.webp",
  nelsonKayakingScene: "/generated/site-images/nelson-kayaking-scene.webp",
  northshoreWaterfrontScene: "/generated/site-images/northshore-waterfront-scene.webp",
  relocationHeaderBaker: "/generated/site-images/relocation-header-baker.webp",
  realtorHeaderLuke: "/generated/site-images/realtor-header-luke-frame.webp",
  nelsonPlaceHero: "/generated/site-images/nelson-place-hero.webp",
  northshorePlaceHero: "/generated/site-images/northshore-place-hero.webp",
};

/* ---------- Signature areas (refined) ---------- */

export type Area = {
  index: string;
  name: string;
  body: string;
  tags: string;
  intent: string;
  href: string;
  cta: string;
  feature?: boolean;
  image: string;
  imageAlt: string;
  artId: "johns" | "fairview" | "rosemont" | "northshore" | "balfour" | "kaslo";
};

export const signatureAreas: Area[] = [
  {
    index: "01 / 06",
    name: "John's Walk & Sproat Drive",
    body: "Walk-to-water home on one of Nelson's strongest lakefront stretches, close to town and difficult to replace.",
    tags: "Waterfront · Walk-to-Beach · Heritage Lots",
    intent: "For buyers who want lake proximity, old Nelson character, and an address with a known reputation.",
    href: "/listings/waterfront",
    cta: "View Waterfront",
    feature: true,
    image: siteImages.sproatDrive,
    imageAlt: "922 Sproat Drive in Nelson near the lakefront",
    artId: "johns",
  },
  {
    index: "02 / 06",
    name: "Fairview & Uphill",
    body: "Larger, newer builds with full city-and-lake exposure. Higher elevation, extended summer sun, and Baker Street culture a downhill walk away.",
    tags: "View Homes · Architectural · Walk to Downtown",
    intent: "For buyers who want the daily Nelson rhythm, more view exposure, and a home that still feels connected to town.",
    href: "/nelson/nelson",
    cta: "Explore Nelson",
    image: siteImages.observatoryStreet,
    imageAlt: "1009 Observatory Street in Nelson",
    artId: "fairview",
  },
  {
    index: "03 / 06",
    name: "Rosemont",
    body: "Established families, wide lots, and proximity to Granite Pointe Golf Club. Settled, spacious, and increasingly hard to find in this size class.",
    tags: "Acreage Adjacent · Golf · Established",
    intent: "For buyers who want quieter streets, family scale, golf proximity, and room to breathe without leaving the city.",
    href: "/nelson/nelson",
    cta: "Compare City Areas",
    image: siteImages.rosemontRobertson,
    imageAlt: "1107 Robertson Avenue in Nelson",
    artId: "rosemont",
  },
  {
    index: "04 / 06",
    name: "Johnstone Road & North Shore",
    body: "Cross 'Bob', the Big Orange Bridge, and the lake opens. Highway 3A toward Balfour holds many of Nelson's strongest waterfront homes.",
    tags: "Lakefront · Acreage · Boathouses",
    intent: "For waterfront searches where the approach, the shoreline, and the distance from public attention all matter.",
    href: "/nelson/north-shore",
    cta: "Study North Shore",
    feature: true,
    image: siteImages.areaNorthshore,
    imageAlt: "West Arm of Kootenay Lake on the North Shore",
    artId: "northshore",
  },
  {
    index: "05 / 06",
    name: "Balfour & Kootenay Lake",
    body: "Where the West Arm meets the main lake. Deep water, larger parcels, and waterfront holdings that do not come up often.",
    tags: "Deep Water · Generational · Private Marina",
    intent: "For deep-water second homes, legacy lake holdings, and buyers who value easy access over downtown proximity.",
    href: "/nelson/balfour",
    cta: "Study Balfour",
    image: siteImages.areaBalfour,
    imageAlt: "Balfour and Kootenay Lake",
    artId: "balfour",
  },
  {
    index: "06 / 06",
    name: "Kaslo & Slocan Valley",
    body: "Beyond the city, heritage timber estates, river-frontage acreage, and second-home buyers seeking distance without isolation.",
    tags: "Heritage · Acreage · Retreat Properties",
    intent: "For retreat buyers who want timber, river frontage, mountain quiet, and a wider radius than Nelson proper.",
    href: "/nelson/slocan-valley",
    cta: "Study Retreat Areas",
    image: siteImages.areaSlocan,
    imageAlt: "Slocan Lake in British Columbia",
    artId: "kaslo",
  },
];

/* ---------- Featured estates, REAL active listings ---------- */

export type Estate = {
  slug: string;
  area: string;
  title: string;
  shortTitle: string;
  body: string;
  fullDescription: string;
  specs: { label: string; value: string }[];
  reverse?: boolean;
  artId: "lakefront" | "view" | "mountain" | "heritage";
  hero: string;
  gallery: string[];
};

export const featuredEstates: Estate[] = [
  {
    slug: "6890-harrop-procter-road",
    area: "Harrop · 51.8 Acres",
    title: "6890 Harrop-Procter Road",
    shortTitle: "Harrop Acreage Retreat",
    body: "A meticulously crafted 2008 contemporary on 51.8 acres of forested Harrop land, hand-scraped walnut floors, a stream-fed pond, fenced pastures, and a versatile lower-level suite with B&B licensing for up to 10 annual events.",
    fullDescription:
      "This meticulously designed home, originally crafted in 2008 and renovated in 2015 and 2020, offers a fusion of contemporary elegance and timeless charm. Hand-scraped walnut flooring, floor-to-ceiling views, in-floor heating throughout, and a chef's kitchen with high-end appliances anchor the main living space. The expansive 51.8-acre grounds include a stream-fed pond with dock, fenced pastures, and mature forests. A versatile lower-level suite suits B&B operations, special licensing permits up to 10 annual events. Additional amenities include rustic washrooms, a double garage with workshop, and a single carport.",
    specs: [
      { label: "Bed", value: "3" },
      { label: "Bath", value: "3" },
      { label: "Sq Ft", value: "3,600" },
      { label: "Acres", value: "51.8" },
    ],
    artId: "mountain",
    hero: "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988bd_10372962_1.jpeg",
    gallery: [
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988bd_10372962_1.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988c3_10372962_2.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988c6_10372962_3.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988c9_10372962_4.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988cc_10372962_5.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988cf_10372962_6.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988d2_10372962_7.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988b7_10372962_8.jpeg",
    ],
  },
  {
    slug: "26-birchgrove-bend",
    area: "Kaslo · Wing Creek",
    title: "26 Birchgrove Bend",
    shortTitle: "Hamill Creek Timber Frame",
    body: "A 2018 Hamill Creek custom timber frame on Wing Creek with access to 20 acres of shared community waterfront, 21.6-foot ceilings, bamboo floors, a 38×13 wrap-around deck with hot tub, and creek-bordered grounds.",
    fullDescription:
      "A stunning 2,544-square-foot custom timber frame home by Hamill Creek, nestled on a 0.25-acre parcel with access to 20 acres of shared community waterfront, a perfect blend of rustic charm and modern amenities. Four bedrooms and four bathrooms, including a bedroom designed with an 8-bed bunk room. The open-concept main floor boasts 21.6-foot ceilings, bamboo wood floors, and a cozy gas fireplace, all complemented by in-floor heating for year-round comfort. The gourmet kitchen with granite countertops and modern appliances is ideal for preparing meals and entertaining. Step outside to the expansive 38×13-foot wrap-around deck, complete with a hot tub and access to the master bedroom. The serene property is bordered by a tranquil creek, and a beautifully landscaped yard with a fire pit offers the perfect setting for outdoor gatherings. Features a double car garage with integrated workshop and a dedicated carport for boat parking.",
    specs: [
      { label: "Bed", value: "4" },
      { label: "Bath", value: "4" },
      { label: "Sq Ft", value: "2,536" },
      { label: "Built", value: "2018" },
    ],
    reverse: true,
    artId: "lakefront",
    hero: "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8453903d2d3c5087da7_10338765_1.jpeg",
    gallery: [
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8453903d2d3c5087da7_10338765_1.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8453903d2d3c5087daa_10338765_2.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8453903d2d3c5087dad_10338765_3.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8453903d2d3c5087db0_10338765_4.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8453903d2d3c5087db3_10338765_5.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8463903d2d3c5087e4d_10338765_6.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8453903d2d3c5087db6_10338765_7.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8453903d2d3c5087db9_10338765_8.jpeg",
    ],
  },
  {
    slug: "906-james-road",
    area: "Shoreacres · Riverfront",
    title: "906 James Road",
    shortTitle: "Kootenay River Log Home",
    body: "A custom-built log home on the picturesque Kootenay River, open-concept design, in-law suite, concrete stamped deck, private dock, and 1.18 acres of landscaped grounds with fruit and berry varieties.",
    fullDescription:
      "Nestled in the tranquil beauty of Shoreacres, this custom-built log home epitomizes waterfront living on the picturesque Kootenay River. Top-quality craftsmanship is evident throughout, only the highest-quality finishing materials were used. The residence features an open-concept design with three bedrooms, three bathrooms, and a downstairs in-law suite. Notable amenities include a concrete stamped deck, private dock for water activities, a 1.18-acre landscaped yard with fruit and berry varieties, and a 24×34 high-ceiling garage with a bonus studio room.",
    specs: [
      { label: "Bed", value: "3" },
      { label: "Bath", value: "3" },
      { label: "Sq Ft", value: "4,030" },
      { label: "Acres", value: "1.18" },
    ],
    artId: "lakefront",
    hero: "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8f7944806382851b29e_10369462_1.jpeg",
    gallery: [
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8f7944806382851b29e_10369462_1.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8f7944806382851b2a4_10369462_2.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8f7944806382851b35e_10369462_3.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8f7944806382851b2a7_10369462_4.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8f7944806382851b2aa_10369462_5.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8f7944806382851b279_10369462_6.jpeg",
      "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb8f7944806382851b2ad_10369462_7.jpeg",
    ],
  },
];

/* ---------- Recently sold (real, with prices) ---------- */

export type ConcludedItem = {
  address: string;
  area: string;
  type: string;
  status: string;
  offered: string;
  image: string;
  imageAlt: string;
};

export const recentlyConcluded: ConcludedItem[] = [
  {
    address: "3954 MacGregor West Road",
    area: "Nelson",
    type: "Private Acreage Estate",
    status: "Sold",
    offered: "$3,950,000",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6446ae992a38806865de5209_3954-MACGREGOR-WEST-RD.jpeg",
    imageAlt: "3954 MacGregor West Road sold acreage estate",
  },
  {
    address: "812 Highway 3A",
    area: "Nelson · North Shore",
    type: "Lakefront Residence",
    status: "Sold",
    offered: "$2,695,000",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6446b060e1101f75fa48d86c_812-HIGHWAY-3A.webp",
    imageAlt: "812 Highway 3A sold lakefront residence",
  },
  {
    address: "74 Johnstone Road",
    area: "Nelson · North Shore",
    type: "Lakefront Estate",
    status: "Sold",
    offered: "$2,380,000",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6446b0c8bfbace57cd20d181_74-JOHNSTONE-RD.webp",
    imageAlt: "74 Johnstone Road sold lakefront estate",
  },
  {
    address: "1009 Observatory Street",
    area: "Nelson · Uphill",
    type: "Architectural View Home",
    status: "Sold",
    offered: "$2,240,000",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6446b1293335fccd20f271d9_1009-OBSERVATORY-STREET.webp",
    imageAlt: "1009 Observatory Street sold architectural view home",
  },
  {
    address: "1001 Sproat Drive",
    area: "Nelson · John's Walk",
    type: "Walk-to-Water Residence",
    status: "Sold",
    offered: "$1,980,000",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/649f23e431e1f1e0169f28bc_1001-sproat-drive.jpeg",
    imageAlt: "1001 Sproat Drive sold walk-to-water residence",
  },
];

export type SoldArchiveItem = { address: string; area: string; beds: string | null; baths: string | null; offered: string; image: string; imageAlt: string };

export const soldArchive: SoldArchiveItem[] = [
  {
    "address": "6680 Highway 3A",
    "area": "Nelson Rural",
    "beds": "3",
    "baths": "3",
    "offered": "$1,095,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441b6a91285d98c660eecd0_6680-HIGHWAY-3A.jpeg",
    "imageAlt": "6680 Highway 3A sold property"
  },
  {
    "address": "6450 Sunshine Drive",
    "area": "Nelson Rural",
    "beds": "3",
    "baths": "3",
    "offered": "$1,375,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441bc0ca9a044078f882575_6450-SUNSHINE-DRIVE.jpeg",
    "imageAlt": "6450 Sunshine Drive sold property"
  },
  {
    "address": "923 Sproat Drive",
    "area": "Nelson",
    "beds": "5",
    "baths": "3",
    "offered": "$1,425,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441bc8e4b0cce503c516fd8_923-SPROAT-DRIVE.jpeg",
    "imageAlt": "923 Sproat Drive sold property"
  },
  {
    "address": "3805 Highway 6",
    "area": "Nelson Rural",
    "beds": "5",
    "baths": "3",
    "offered": "$815,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441bdcb08bbcbfc5a7a4478_3805-HIGHWAY-6.jpeg",
    "imageAlt": "3805 Highway 6 sold property"
  },
  {
    "address": "305 Jam Factory Lane",
    "area": "Nelson",
    "beds": "3",
    "baths": "4",
    "offered": "$789,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441bdd6192890dde251b79e_305-JAM-FACTORY-LANE.jpeg",
    "imageAlt": "305 Jam Factory Lane sold property"
  },
  {
    "address": "4265 Slocan River Road",
    "area": "Nelson Rural",
    "beds": "3",
    "baths": "2",
    "offered": "$699,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441bde09b63564a17411dd4_4265-SLOCAN-RIVER-ROAD.jpeg",
    "imageAlt": "4265 Slocan River Road sold property"
  },
  {
    "address": "7597-7593 Highway 3A",
    "area": "Nelson Rural",
    "beds": "5",
    "baths": "3",
    "offered": "$699,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441bdfb63d18c3ce303dd66_7597-7593-HIGHWAY-3A.jpeg",
    "imageAlt": "7597-7593 Highway 3A sold property"
  },
  {
    "address": "4171 Corra Linn Road",
    "area": "Nelson Rural",
    "beds": "4",
    "baths": "3",
    "offered": "$534,999",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441bef4e71df4023c66e4a8_4171-CORRA-LINN-ROAD.jpeg",
    "imageAlt": "4171 Corra Linn Road sold property"
  },
  {
    "address": "1012 Fell Street",
    "area": "Nelson",
    "beds": "4",
    "baths": "4",
    "offered": "$759,900",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c04b192890601e51e909_1012-FELL-STREET.jpeg",
    "imageAlt": "1012 Fell Street sold property"
  },
  {
    "address": "410 Lexington Avenue",
    "area": "Nelson Rural",
    "beds": null,
    "baths": null,
    "offered": "$139,900",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c05282cf24152374ae93_410-LEXINGTON-AVENUE.jpeg",
    "imageAlt": "410 Lexington Avenue sold property"
  },
  {
    "address": "1511 Vancouver Street",
    "area": "Nelson",
    "beds": "4",
    "baths": "3",
    "offered": "$479,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c0574d6c5e1e83d3c0e6_1511-VANCOUVER-STREET.jpeg",
    "imageAlt": "1511 Vancouver Street sold property"
  },
  {
    "address": "514 First Street",
    "area": "Nelson",
    "beds": "2",
    "baths": "2",
    "offered": "$365,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c05d79c7a465b2bc530f_514-FIRST-STREET.jpeg",
    "imageAlt": "514 First Street sold property"
  },
  {
    "address": "3946 MacGregor Road",
    "area": "Nelson Rural",
    "beds": "5",
    "baths": "3",
    "offered": "$1,220,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c06408843b634aa181c4_3946-MACGREGOR-ROAD.jpeg",
    "imageAlt": "3946 MacGregor Road sold property"
  },
  {
    "address": "1308 Trevor Street",
    "area": "Nelson",
    "beds": "2",
    "baths": "2",
    "offered": "$1,149,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c06a08843b33bfa18258_1308-TREVOR-STREET.jpeg",
    "imageAlt": "1308 Trevor Street sold property"
  },
  {
    "address": "7620 Highway 3A",
    "area": "Nelson Rural",
    "beds": "3",
    "baths": "3",
    "offered": "$955,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c06f4b0cce121651bba3_7620-HIGHWAY-3A.jpeg",
    "imageAlt": "7620 Highway 3A sold property"
  },
  {
    "address": "1017 Richards Street W",
    "area": "Nelson",
    "beds": "4",
    "baths": "2",
    "offered": "$599,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c0329ffae5a884623476_1017-RICHARDS-STREET-W.jpeg",
    "imageAlt": "1017 Richards Street W sold property"
  },
  {
    "address": "C-912 Stanley Street",
    "area": "Nelson",
    "beds": "2",
    "baths": "3",
    "offered": "$429,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1b4ebb39e1769ef80e4_C-912-STANLEY-STREET.jpeg",
    "imageAlt": "C-912 Stanley Street sold property"
  },
  {
    "address": "5745 Longbeach Road",
    "area": "Nelson Rural",
    "beds": "1",
    "baths": null,
    "offered": "$319,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1bb79c7a42364bc6e29_5745-LONGBEACH-ROAD.jpeg",
    "imageAlt": "5745 Longbeach Road sold property"
  },
  {
    "address": "905 Eighth Street",
    "area": "Salmo",
    "beds": "4",
    "baths": "2",
    "offered": "$419,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1c224650017c8846b15_905-EIGHTH-STREET.jpeg",
    "imageAlt": "905 Eighth Street sold property"
  },
  {
    "address": "Lot 7 Alpine Road",
    "area": "Nelson Rural",
    "beds": null,
    "baths": null,
    "offered": "$295,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1c74b0cce980451dda3_Lot-7-ALPINE-ROAD.jpeg",
    "imageAlt": "Lot 7 Alpine Road sold property"
  },
  {
    "address": "6106 Pippers Lane",
    "area": "Nelson Rural",
    "beds": "3",
    "baths": "3",
    "offered": "$665,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1cf99d919651e0dc085_6106-PIPPERS-LANE.jpeg",
    "imageAlt": "6106 Pippers Lane sold property"
  },
  {
    "address": "516 Mill Street",
    "area": "Nelson",
    "beds": "3",
    "baths": "2",
    "offered": "$420,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1d582cf24711774c3c1_516-MILL-STREET.jpeg",
    "imageAlt": "516 Mill Street sold property"
  },
  {
    "address": "7738 Holt Road",
    "area": "Nelson Rural",
    "beds": "3",
    "baths": "2",
    "offered": "$898,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1db79c7a45e87bc6fa9_7738-HOLT-ROAD.jpeg",
    "imageAlt": "7738 Holt Road sold property"
  },
  {
    "address": "1101 Forin Road",
    "area": "Nelson",
    "beds": "5",
    "baths": "5",
    "offered": "$999,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1e0ebb39eb60fef8226_1101-FORIN-ROAD.jpeg",
    "imageAlt": "1101 Forin Road sold property"
  },
  {
    "address": "4634 Crescent Road",
    "area": "Nelson Rural",
    "beds": "4",
    "baths": "3",
    "offered": "$1,089,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1e6e174f521e7557fd1_4634-CRESCENT-ROAD.jpeg",
    "imageAlt": "4634 Crescent Road sold property"
  },
  {
    "address": "2422 Perrier Lane",
    "area": "Nelson",
    "beds": "4",
    "baths": "4",
    "offered": "$799,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1ed08bbcbb9b67ab5a4_2422-PERRIER-LANE.jpeg",
    "imageAlt": "2422 Perrier Lane sold property"
  },
  {
    "address": "1009 Observatory Street",
    "area": "Nelson",
    "beds": "5",
    "baths": "4",
    "offered": "$2,240,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6447137b82b1e1745b372c77_6441c1f299d919076b0dc59a_1009-OBSERVATORY-STREET.jpeg",
    "imageAlt": "1009 Observatory Street sold property"
  },
  {
    "address": "2517 Perrier Lane",
    "area": "Nelson",
    "beds": "6",
    "baths": "4",
    "offered": "$979,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c1fc79c7a4ebb9bc70e2_2517-PERRIER-LANE.jpeg",
    "imageAlt": "2517 Perrier Lane sold property"
  },
  {
    "address": "6796 Highway 3A",
    "area": "Nelson Rural",
    "beds": "3",
    "baths": "3",
    "offered": "$720,000",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c36979c7a4e4dcbc9941_6796-HIGHWAY-3A.jpeg",
    "imageAlt": "6796 Highway 3A sold property"
  },
  {
    "address": "8903 Highway 6",
    "area": "Salmo",
    "beds": "2",
    "baths": "1",
    "offered": "$279,800",
    "image": "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/6441c3704d6c5e6dd2d3fff9_8903-HIGHWAY-6.jpeg",
    "imageAlt": "8903 Highway 6 sold property"
  }
];

/* ---------- Seller promises ---------- */

export type Promise = { num: string; title: string; body: string };

export const sellerPromises: Promise[] = [
  { num: "01", title: "Value before launch", body: "A clear read on value, comparable pressure, buyer depth, and the price line worth protecting." },
  { num: "02", title: "Buyer-facing story", body: "Before launch, the home is presented around what matters most to the likely buyer: lifestyle, design, land, privacy, and value." },
  { num: "03", title: "Film, photo, and copy", body: "Film, photography, floor-plan clarity, and writing that makes the home easy to understand and remember." },
  { num: "04", title: "Dedicated property page", body: "A dedicated page for the address, with the photos, facts, and story presented clearly." },
  { num: "05", title: "Qualified buyer rollout", body: "Release to qualified buyers, relocation buyers, second-home families, and trusted agent networks, not casual traffic." },
  { num: "06", title: "Showing plan", body: "Showings are scheduled around privacy, readiness, and buyer fit, with casual traffic filtered before it reaches the door." },
  { num: "07", title: "Negotiation", body: "Price, timing, terms, conditions, and leverage are handled together, not as a reaction to the loudest bidder." },
  { num: "08", title: "Closing care", body: "From accepted offer to possession, the process stays calm, documented, and organized." },
];

/* ---------- Real testimonials (verbatim with names) ---------- */

export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We had a wonderful time working with Luke! Words cannot describe how happy we are to have found this home and to be beginning our new life as a family here. Truly a dream come true. Thank you Luke Mori!",
    attribution: "Em K.",
    context: "Home Buyer",
  },
  {
    quote:
      "Luke worked tirelessly to ensure our needs were met and questions answered in a prompt fashion. Luke was not only a wealth of information and insight, he was also sincere and fun to work with.",
    attribution: "Coral Bober",
    context: "Home Seller",
  },
  {
    quote:
      "We were extremely happy with the service you provided and we would highly recommend potential buyers/sellers to consider lukemori.com for their next real estate transaction.",
    attribution: "Darrell & Crissa M.",
    context: "Home Sellers",
  },
  {
    quote:
      "After talking to you, Luke, I decided to list with you. I am so happy I did. You are also very pleasant to chat with! Thanks so much for the quick sale and closure of the apartment! I can now move on!",
    attribution: "Lorraine Merwin",
    context: "Home Seller",
  },
  {
    quote:
      "Whatever question we had for you, you always answered. Your professionalism was great, your enthusiasm was astounding! Thanks for helping us find our dream home!",
    attribution: "Adam Baker",
    context: "Home Buyer",
  },
  {
    quote:
      "Many thanks Luke for the dedication and patience you applied to our experience.",
    attribution: "Ron Coles",
    context: "Home Buyer",
  },
];

/* ---------- Nelson area subpages content (real) ---------- */

export type NelsonArea = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  population: string;
  avgPrice: string;
  focus: string;
  hero: string;
  scenes: { title: string; alt: string; image: string }[];
  highlights: { title: string; body: string }[];
  neighbourhoods?: { name: string; body: string }[];
};

export const nelsonAreas: NelsonArea[] = [
  {
    slug: "nelson",
    name: "Nelson",
    tagline: "The Queen City of the Kootenays.",
    intro:
      "Surrounded by breathtaking mountain views and the pristine West Arm of Kootenay Lake, Nelson is a city of roughly 10,000, characterised by an arts and culture scene, distinctive local cuisine, and a famously welcoming atmosphere. A balanced lifestyle, with diverse opportunities in tourism and the outdoor industries.",
    population: "~10,000",
    avgPrice: "$800,000",
    focus: "Heritage · Walkable · Lake & Mountain Lifestyle",
    hero: siteImages.nelsonPlaceHero,
    scenes: [
      { title: "Baker Street", alt: "Baker Street in downtown Nelson BC", image: brandImages.bakerStreet },
      { title: "Whitewater Resort", alt: "Skiing powder at Whitewater Ski Resort near Nelson", image: brandImages.whitewater },
      { title: "Kootenay Lake", alt: "Kayaking on Kootenay Lake near Nelson BC", image: siteImages.nelsonKayakingScene },
    ],
    highlights: [
      { title: "Baker Street", body: "Heritage buildings, boutique shops, and coffee houses anchor the city's downtown spine." },
      { title: "Whitewater Resort", body: "World-class skiing and snowboarding with approximately 12 metres of annual snowfall." },
      { title: "Kootenay Lake", body: "Boating, kayaking, paddleboarding, and fishing on the West Arm, Lakeside Park beach for the warmer months." },
    ],
    neighbourhoods: [
      { name: "Downtown", body: "The hub. Baker Street, heritage buildings, restaurants, and the cultural pulse of the city." },
      { name: "Uphill", body: "South of Baker Street on the mountainside, characterful heritage homes with quick downtown access despite steeper roads." },
      { name: "Mountain Station", body: "Higher than Uphill, set among the trees with quick access to the walk- and bike-friendly rail trail." },
      { name: "Rosemont", body: "Southwest across the highway, Selkirk College, a golf course, and an outdoor skate park." },
      { name: "Fairview", body: "East of Nelson on gradual slopes near the Big Orange Bridge (BOB), old grand homes with access to high school, Lakeside Park, and beach." },
    ],
  },
  {
    slug: "north-shore",
    name: "North Shore",
    tagline: "Highway 3A, where the lake opens up.",
    intro:
      "A scenic and vibrant community along the northern shores of Kootenay Lake, offering a unique blend of peaceful rural living and modern urban convenience. The waterfront artery of the region, Highway 3A, runs east toward Balfour and the main lake.",
    population: "~4,000",
    avgPrice: "$900,000",
    focus: "Waterfront · Boating · Beach",
    hero: siteImages.northshorePlaceHero,
    scenes: [
      { title: "Kokanee Creek Provincial Park", alt: "Kokanee Creek Park beach", image: brandImages.kokaneeBeach },
      { title: "West Arm Sailing", alt: "Sailboats on Kootenay Lake near Nelson", image: brandImages.sailboats },
      { title: "Waterfront Living", alt: "Kayaking Kootenay Lake on the North Shore", image: siteImages.northshoreWaterfrontScene },
    ],
    highlights: [
      { title: "Kokanee Creek Provincial Park", body: "Camping, RV sites, hiking trails, sandy beach, and seasonal salmon spawning viewing." },
      { title: "West Arm Sailing", body: "Ideal conditions for sailing enthusiasts of all levels, protected water with consistent afternoon wind." },
      { title: "Waterfront Living", body: "Direct lake access, dock potential, and the kind of front-yard view most buyers spend a lifetime chasing." },
    ],
  },
  {
    slug: "balfour",
    name: "Balfour",
    tagline: "Where the West Arm meets the main lake.",
    intro:
      "At the eastern end of Highway 3A's North Shore area, where the West Arm of Kootenay Lake opens into the main body of the lake. Deep water, generational acreage, and the longest-tenured waterfront properties in the region. The Kootenay Lake ferry departs from Balfour for Crawford Bay and the East Shore.",
    population: "~600",
    avgPrice: "$1,150,000",
    focus: "Deep Water · Marina · Generational Estates",
    hero: headerImages.balfourKootenayLake,
    scenes: [
      { title: "Kootenay Lake Ferry", alt: "Balfour ferry on Kootenay Lake", image: brandImages.balfourFerry },
      { title: "Balfour Golf Course", alt: "Balfour Golf Course", image: brandImages.balfourGolf },
      { title: "Private Moorage", alt: "Balfour waterfront on Kootenay Lake", image: brandImages.balfourKootenayLake },
    ],
    highlights: [
      { title: "Kootenay Lake Ferry", body: "The world's longest free ferry connects Balfour to the East Shore, Crawford Bay, Riondel, and the Purcell Range." },
      { title: "Balfour Golf Course", body: "Eighteen holes carved between the lake and the surrounding mountains, a Kootenay institution." },
      { title: "Private Moorage", body: "Deep-water moorage and private dock arrangements that are hard to find elsewhere in the region." },
    ],
  },
  {
    slug: "blewett",
    name: "Blewett",
    tagline: "Country acreage, ten minutes from town.",
    intro:
      "A pastoral, semi-rural community west of Nelson, large lots, wooded privacy, and the kind of horse-and-orchard properties that suit families wanting space without the commute. The Blewett Road area remains one of the region's most considered acreage addresses.",
    population: "~1,500",
    avgPrice: "$1,050,000",
    focus: "Acreage · Privacy · Country Living",
    hero: headerImages.taghumBeach,
    scenes: [
      { title: "Wooded Acreage", alt: "Wooded acreage driveway through mature Kootenay forest", image: brandImages.blewettWoodedAcreage },
      { title: "Family Estates", alt: "Rural family estate acreage with pasture and mountain views", image: brandImages.blewettFamilyEstate },
      { title: "Ten Minutes to Baker", alt: "Country road commute toward Nelson and Baker Street", image: brandImages.blewettBakerCommute },
    ],
    highlights: [
      { title: "Wooded Acreage", body: "Five-to-twenty-acre parcels with mature timber, pasture, and creek frontage, most never appear on the open market." },
      { title: "Family Estates", body: "Multi-generation properties, agricultural use, and the kind of land that gets passed down rather than sold." },
      { title: "Ten Minutes to Baker", body: "Country living with a downtown commute measured in minutes, not hours." },
    ],
  },
  {
    slug: "slocan-valley",
    name: "Slocan Valley",
    tagline: "Heritage timber, river frontage, and space.",
    intro:
      "North of Nelson along Highway 6, a string of small communities (South Slocan, Crescent Valley, Winlaw, Slocan, New Denver) following the Slocan River and lake. Heritage timber estates, riverfront acreage, and second-home buyers seeking distance without isolation.",
    population: "~5,000 (valley-wide)",
    avgPrice: "$850,000",
    focus: "Riverfront · Heritage · Retreat Properties",
    hero: headerImages.slocanLake,
    scenes: [
      { title: "Slocan River", alt: "Slocan Lake in British Columbia", image: brandImages.slocanLake },
      { title: "Heritage Timber Estates", alt: "Frog Peak Cafe in Slocan Valley", image: brandImages.frogPeakCafe },
      { title: "Slocan Lake & New Denver", alt: "Valhalla Mountain Range in British Columbia", image: brandImages.valhallaMountains },
    ],
    highlights: [
      { title: "Slocan River", body: "Some of British Columbia's finest fly-fishing, and the kind of river-frontage acreage that anchors generational holdings." },
      { title: "Heritage Timber Estates", body: "Hand-built homes by Hamill Creek and other regional timber-frame masters dot the valley." },
      { title: "Slocan Lake & New Denver", body: "Northern reaches of the valley open onto Slocan Lake, a quieter, more secluded waterfront experience." },
    ],
  },
];

/* ---------- About / bio ---------- */

export const lukeBio = {
  short:
    "Born and raised in Nelson, BC. Founder of the Luke Mori division at Fair Realty. Voted Best Luxury Real Estate Broker in British Columbia by the Luxury Lifestyle Awards in 2021 and again in 2024.",
  philosophy:
    "Local knowledge, privacy, strong photography, clear copy, and steady representation for the property and the people behind it.",
  approach:
    "Good technology helps, but real estate is still personal. The goal is better advice, better communication, and fewer surprises.",
  bornAndRaised: "Born and raised in Nelson, BC",
  brokerage: "Founder, Luke Mori at Fair Realty",
  pillars: [
    {
      k: "I.",
      title: "Local knowledge over generic luxury.",
      body: "Knowing the lots, roads, views, owners, and what each property may be worth to the right buyer.",
    },
    {
      k: "II.",
      title: "Privacy from the start.",
      body: "Private representation, controlled exposure, and qualified showings. Your home needs the right buyer, not an audience.",
    },
    {
      k: "III.",
      title: "Marketing that respects the home.",
      body: "Film, photography, and writing that make the property clear, attractive, and easy to trust.",
    },
  ],
};

/* ---------- Buyer / seller process steps (real) ---------- */

export type ProcessStep = { num: string; title: string; body: string };

export const buyerSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Ensure you're ready to buy",
    body: "Mortgage approval and an available down payment, the percentage depends on lender approval. We'll connect you with the right local advisors before we start touring.",
  },
  {
    num: "02",
    title: "Find your home",
    body: "We work public listings, off-market introductions, and focused tours so your time goes to real contenders.",
  },
  {
    num: "03",
    title: "Make an offer",
    body: "Offer price, financing conditions, inspections, dates, included items, and any buyer savings opportunities you may qualify for.",
  },
  {
    num: "04",
    title: "Legal work",
    body: "A trusted local lawyer handles documentation, title transfer, land transfer tax, GST applicability where relevant, and deposit management.",
  },
  {
    num: "05",
    title: "Take possession",
    body: "Final meeting with your lawyer, document signing, deposit forwarding, mortgage paperwork, and keys in hand.",
  },
];

export const sellerSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Answer the questions worth asking",
    body: "Why are you selling? What timeline matters? What makes the home valuable? Answer that before setting price or launch plan.",
  },
  {
    num: "02",
    title: "Marketing the property",
    body: "Professional photography, drone film, indoor video, room measurements, and presentation built for the buyer your home is most likely to attract.",
  },
  {
    num: "03",
    title: "Receiving offers",
    body: "Every offer is reviewed for price, terms, conditions, timing, and what it actually means for your walk-away result.",
  },
  {
    num: "04",
    title: "Closing the sale",
    body: "Legal documentation, title transfer, and the practical orchestration around it, movers, utilities, mail forwarding, possession-day cleaners.",
  },
  {
    num: "05",
    title: "Possession day",
    body: "Final meeting with your lawyer, signed documents, transferred keys. The moment the property becomes someone else's home.",
  },
];

/* ---------- Home tour video proof ---------- */

export type HomeTourVideo = {
  title: string;
  meta: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const homeTourVideos: HomeTourVideo[] = [
  {
    title: "664 Ainslie Road",
    meta: "Waterfront home presentation",
    href: "https://www.youtube.com/watch?v=ItcMSmhyMxw",
    image: siteImages.homeTourAinslie,
    imageAlt: "Waterfront home at 664 Ainslie Road",
  },
  {
    title: "3179 Heddle Road",
    meta: "Timber-frame home with in-law suite",
    href: "https://www.youtube.com/watch?v=Xd0u7gQ0Qm0",
    image: siteImages.homeTourHeddle,
    imageAlt: "Timber-frame home at 3179 Heddle Road",
  },
  {
    title: "6890 Harrop Procter Road",
    meta: "Modern Kootenay home presentation",
    href: "https://www.youtube.com/watch?v=xJhNYaokEzA",
    image: siteImages.homeTourHarrop,
    imageAlt: "Modern Kootenay home at 6890 Harrop Procter Road",
  },
];

/* ---------- FAQ ---------- */

export type FAQ = { category: string; q: string; a: string };

export const faqs: FAQ[] = [
  {
    category: "Selling",
    q: "What happens before a property is publicly listed?",
    a: "The seller process starts with the questions that affect strategy: why the owner is selling, what timing constraints exist, and what makes the home unique. The public launch should come after pricing, presentation, and the showing plan are clear.",
  },
  {
    category: "Selling",
    q: "What marketing assets are used for a strong listing?",
    a: "A strong listing can include professional photography, drone film, indoor video, room measurements, and copy written around the likely buyer.",
  },
  {
    category: "Selling",
    q: "How are offers handled?",
    a: "Every offer should be reviewed in detail, including price, dates, conditions, financing, and the seller's timeline. The useful advice is not just the number, it is what the full offer means for the owner.",
  },
  {
    category: "Selling",
    q: "What does closing involve for a seller?",
    a: "Closing normally includes legal documentation, title transfer, and the practical details around possession, such as movers, utilities, mail forwarding, cleaners, and key transfer.",
  },
  {
    category: "Buying",
    q: "How should a buyer begin in Nelson or Kootenay Lake?",
    a: "Start with lifestyle fit before listings: waterfront, walkable Nelson, North Shore privacy, acreage, ski rhythm, second-home use, or relocation needs. The right area can narrow the search faster than price alone.",
  },
  {
    category: "Buying",
    q: "What should buyers verify before writing an offer?",
    a: "Buyers should review property viewings, disclosure documents, title search, property details, zoning, taxes, restrictions, and any applicable strata information before an offer moves forward.",
  },
  {
    category: "Buying",
    q: "What common costs should buyers ask about?",
    a: "Buyers should ask about legal fees, title insurance, home inspection costs, appraisal fees, property transfer tax, GST where applicable, moving costs, and insurance. Exact amounts depend on the property and buyer situation.",
  },
  {
    category: "Buying",
    q: "What happens after an accepted offer?",
    a: "The buyer's team works through the agreed conditions, legal review, deposit handling, mortgage paperwork if financing is involved, and then possession details once the transaction is ready to complete.",
  },
  {
    category: "Relocation",
    q: "What should relocating buyers understand first?",
    a: "Area fit matters. Nelson, the North Shore, Balfour, Blewett, and the Slocan Valley offer different road rhythms, services, winter realities, privacy levels, and daily routines.",
  },
  {
    category: "Relocation",
    q: "Are international buyers treated differently?",
    a: "International buyers should get qualified legal and tax advice before purchasing. Luke can help organize property and area questions, but tax residency, transfer rules, financing, and regulatory issues require professional advice.",
  },
  {
    category: "Representation",
    q: "What does off-market mean?",
    a: "Off-market means a property is not being publicly promoted through the usual listing channels. Access depends on the owner's instructions, buyer fit, and whether an introduction is appropriate.",
  },
  {
    category: "Selling",
    q: "Why does presentation matter so much for a higher-value property?",
    a: "High-value homes ask buyers to understand the house, land, privacy, lifestyle, and location at once. Photography, video, measurements, and clear copy help the right buyer decide whether to tour.",
  },
  {
    category: "Selling",
    q: "Should every listing be marketed the same way?",
    a: "No. A lakefront home, acreage estate, city view home, and walkable Nelson property each need a different launch plan. The likely buyer should shape the marketing.",
  },
  {
    category: "Buying",
    q: "Why do area details matter before the first tour?",
    a: "In the Kootenays, a short distance can change sun exposure, road rhythm, winter access, lake access, privacy, and daily convenience. The map matters before the showing schedule does.",
  },
  {
    category: "Buying",
    q: "What should waterfront buyers ask about?",
    a: "Waterfront buyers should ask about shoreline, access, dock or beach use, sun exposure, road access, maintenance, insurance, and any property-specific restrictions or approvals that may apply.",
  },
  {
    category: "Relocation",
    q: "Why plan a scouting route before booking showings?",
    a: "A scouting route helps buyers compare daily life, not just houses. It can include neighbourhoods, schools, services, commute patterns, lake access, winter roads, and the areas that match the buyer's actual routine.",
  },
  {
    category: "Representation",
    q: "Why does local knowledge matter in Nelson real estate?",
    a: "Local knowledge helps interpret more than the listing sheet: road conditions, light, slope, privacy, neighbourhood fit, lake access, seasonal use, and the practical details buyers often notice too late.",
  },
  {
    category: "Representation",
    q: "What makes a first conversation useful?",
    a: "A useful first conversation defines the property, timeline, privacy needs, budget or pricing range, area preferences, and the decision you are trying to make.",
  },
];
