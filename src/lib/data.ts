/* ============================================================
   Real-content data layer for the Luke Mori Luxury concept.
   Sourced from lukemori.com, used here in a speculative concept
   pitched directly to Luke Mori by Kootenay Made Digital.
   ============================================================ */

/* ---------- Brand contact (real) ---------- */

export const contact = {
  phone: "250-551-4917",
  phoneHref: "tel:+12505514917",
  email: "luke@lukemori.com",
  emailHref: "mailto:luke@lukemori.com",
  office: "191 Baker Street, Nelson, BC V1L 4H1",
  brokerage: "Fair Realty",
  social: {
    youtube: "https://www.youtube.com/@Lukemori",
    instagram: "https://www.instagram.com/lukemorirealestate/",
    facebook: "https://www.facebook.com/lukemorirealty/",
    twitter: "https://twitter.com/LukeMoriRealty",
  },
};

/* ---------- Hero, intent, and authority pillars ---------- */

export type HeroProofSignal = { value: string; label: string; detail: string };

export const heroProofSignals: HeroProofSignal[] = [
  {
    value: "$169M+",
    label: "Career sales volume",
    detail: "A public ledger of high-value representation across Nelson and the Kootenays.",
  },
  {
    value: "2021 & 2024",
    label: "Best Luxury Broker BC",
    detail: "Luxury Lifestyle Awards recognition, anchored by local market fluency.",
  },
  {
    value: "Nelson born",
    label: "Kootenay Lake intelligence",
    detail: "The streets, lakefront pockets, builders, slopes, and quiet owner networks.",
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
    eyebrow: "Luxury Sellers",
    title: "Launch the estate without overexposing it.",
    body: "Pricing strategy, cinematic presentation, qualified showings, and controlled release for homes that need discretion before reach.",
    href: "#sellers",
    cta: "Seller Strategy",
    note: "For lakefront, view, acreage, and legacy properties.",
  },
  {
    eyebrow: "Private Buyers",
    title: "See the market beyond the public feed.",
    body: "Active luxury listings, quiet introductions, and a principled filter for buyers who value privacy as much as property.",
    href: "/listings/luxury",
    cta: "Private Access / Listings",
    note: "For local, Vancouver, Calgary, U.S., and international principals.",
  },
  {
    eyebrow: "Relocation & Second Homes",
    title: "Land softly before you buy seriously.",
    body: "Neighbourhood fit, school and healthcare context, seasonal realities, and the first scouting route worth taking.",
    href: "/buyers/relocation",
    cta: "Relocation Guide",
    note: "For Nelson, North Shore, Balfour, Kaslo, and the Slocan Valley.",
  },
  {
    eyebrow: "Agents & Brokerages",
    title: "Review the concept as a private sales asset.",
    body: "Built by Kootenay Made Digital to show how a premium local operator can look sharper than national luxury brands.",
    href: "https://kootenaymade.ca/contact",
    cta: "Private Consultation",
    note: "For real estate teams evaluating a custom concept build.",
  },
];

export type AuthorityPillar = { number: string; title: string; body: string };

export const authorityPillars: AuthorityPillar[] = [
  {
    number: "01",
    title: "Local Luxury Intelligence",
    body: "From John's Walk to Johnstone Road, the lots, the views, the architects, and the owners who have not listed yet.",
  },
  {
    number: "02",
    title: "Discreet Seller Representation",
    body: "Trophy properties are launched, not uploaded. Quiet lists, qualified showings, controlled exposure.",
  },
  {
    number: "03",
    title: "Bespoke Property Marketing",
    body: "Cinematic film, drone, editorial copy, and a dedicated property site for every estate worth its own narrative.",
  },
  {
    number: "04",
    title: "Private Buyer Network",
    body: "A short list of relocating principals and second-home buyers from Vancouver, Calgary, and abroad, already vetted.",
  },
  {
    number: "05",
    title: "Kootenay Lake Expertise",
    body: "Waterfront, North Shore, ski access, and acreage. The inventory the rest of the market does not know how to position.",
  },
];

/* ---------- Credentials hairline (real public claims) ---------- */

export type Credential = { value: string; label: string };

export const credentials: Credential[] = [
  { value: "$169M+", label: "Career Sales Volume" },
  { value: "2021 & 2024", label: "Best Luxury Broker BC" },
  { value: "10+ Yrs", label: "Nelson Market Intelligence" },
  { value: "Private", label: "Representation Model" },
];

/* ---------- Trust architecture ---------- */

export type TrustProof = {
  eyebrow: string;
  title: string;
  proof: string;
  meaning: string;
};

export const trustProofs: TrustProof[] = [
  {
    eyebrow: "Track Record",
    title: "Volume that proves judgement, not noise.",
    proof: "$169M+ career sales volume across Nelson and the Kootenays.",
    meaning:
      "For sellers, the useful proof is not a loud number. It is pricing discipline, offer judgement, and pattern recognition from real negotiations.",
  },
  {
    eyebrow: "Recognition",
    title: "Awarded, then kept local.",
    proof: "Voted Best Luxury Real Estate Broker in British Columbia by the Luxury Lifestyle Awards in 2021 and again in 2024.",
    meaning:
      "Prestige matters only if it sharpens the work. The role is still local counsel: Nelson, Kootenay Lake, the North Shore, and the roads buyers underestimate.",
  },
  {
    eyebrow: "Local Fluency",
    title: "Born here means the map has memory.",
    proof: "Born and raised in Nelson, BC, with 10+ years of Nelson market intelligence.",
    meaning:
      "The value is knowing which lots hold light, which roads change in winter, which owners move quietly, and which addresses deserve patience.",
  },
  {
    eyebrow: "Presentation",
    title: "Editorial marketing instead of listing noise.",
    proof: "Cinematic film, architectural photography, dedicated property pages, and a public library of property films.",
    meaning:
      "High-value homes need a controlled first impression. The right buyer should understand the property before they ever book the showing.",
  },
];

export type TrustPrinciple = { title: string; body: string };

export const trustPrinciples: TrustPrinciple[] = [
  {
    title: "Receipts before adjectives",
    body: "Sales volume, awards, press visibility, local tenure, and client voice are framed as context, not confetti.",
  },
  {
    title: "Discretion before distribution",
    body: "The seller's privacy, timeline, showing appetite, and exposure strategy are settled before the market is invited in.",
  },
  {
    title: "Process before pressure",
    body: "Buyers and sellers get a clear next step, a private brief, and a personal reply instead of a generic contact queue.",
  },
];

/* ---------- Conversion architecture ---------- */

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
    audience: "Luxury Sellers",
    title: "Open a private seller file.",
    body: "Share the address, timeline, privacy needs, and the result you are trying to protect. The first reply is strategic, not canned.",
    href: "/contact",
    cta: "Start seller strategy",
    proof: "$169M+ career volume, private launch framework, controlled showing protocol.",
  },
  {
    audience: "Private Buyers",
    title: "Request access beyond the feed.",
    body: "Name the life you want, lakefront, walkable Nelson, acreage, ski rhythm, second home, or quiet relocation, then the search can narrow properly.",
    href: "/buyers",
    cta: "Build buyer brief",
    proof: "Open market, private introductions, area fit, and local advisor routing.",
  },
  {
    audience: "Relocation & Second Homes",
    title: "Plan the first scouting route.",
    body: "Schools, winter, healthcare, road rhythm, caretaker coverage, and ownership systems get mapped before a tour day becomes expensive theatre.",
    href: "/buyers/relocation",
    cta: "Plan relocation path",
    proof: "Nelson, North Shore, Balfour, Blewett, Slocan Valley, and absentee ownership context.",
  },
  {
    audience: "Agents & Brokerages",
    title: "Review the concept as a sales asset.",
    body: "For real estate teams evaluating Kootenay Made Digital, this site shows how a local operator can look sharper than national luxury templates.",
    href: "https://kootenaymade.ca/contact",
    cta: "Discuss a concept build",
    proof: "Custom positioning, route-specific funnels, proof architecture, and premium property storytelling.",
  },
];

export type PrivateOfficeStep = { num: string; title: string; body: string };

export const privateOfficeSteps: PrivateOfficeStep[] = [
  {
    num: "01",
    title: "Name the mandate",
    body: "Seller strategy, private buyer access, relocation, second-home ownership, or a concept review for a real estate brand.",
  },
  {
    num: "02",
    title: "Send the useful context",
    body: "Address, timeline, budget range, privacy needs, ideal lifestyle, or the business goal behind the inquiry.",
  },
  {
    num: "03",
    title: "Receive a personal reply",
    body: "The next step is routed by intent, with a clear recommendation and no generic sales sequence.",
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
    body: "Walk-to-water sanctuary on the city's most quietly coveted lakefront stretch, the kind of address that rarely lists, and almost never twice in a generation.",
    tags: "Waterfront · Walk-to-Beach · Heritage Lots",
    intent: "For buyers who want lake proximity, old Nelson character, and the rare confidence of an address that already has a reputation.",
    href: "/listings/waterfront",
    cta: "View Waterfront",
    feature: true,
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/64586ce6a1f16d469d0f7850_922-SPROAT-DRIVE-nelson.webp",
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
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/64586bfb34d3540cbe512e68_1009-OBSERVATORY-STREET-nelson.webp",
    imageAlt: "1009 Observatory Street in Nelson",
    artId: "fairview",
  },
  {
    index: "03 / 06",
    name: "Rosemont",
    body: "Established families, wide lots, and proximity to Granite Pointe Golf Club. Quiet, settled, and increasingly rare in this size class.",
    tags: "Acreage Adjacent · Golf · Established",
    intent: "For buyers who want quieter streets, family scale, golf proximity, and room to breathe without leaving the city.",
    href: "/nelson/nelson",
    cta: "Compare City Areas",
    image: "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfba17f69ba07cd6e87dae_10381969_1.jpeg",
    imageAlt: "1107 Robertson Avenue in Nelson",
    artId: "rosemont",
  },
  {
    index: "04 / 06",
    name: "Johnstone Road & North Shore",
    body: "Cross 'Bob', the Big Orange Bridge, and the lake opens. Highway 3A's waterfront corridor toward Balfour holds Nelson's most cinematic private residences.",
    tags: "Lakefront · Private Acreage · Boathouses",
    intent: "For privacy-led waterfront searches where the approach, the shoreline, and the distance from public attention all matter.",
    href: "/nelson/north-shore",
    cta: "Study North Shore",
    feature: true,
    image: brandImages.westArmKootenayLake,
    imageAlt: "West Arm of Kootenay Lake on the North Shore",
    artId: "northshore",
  },
  {
    index: "05 / 06",
    name: "Balfour & Kootenay Lake",
    body: "Where the West Arm meets the main lake. Deep water, deep privacy, and the kind of generational waterfront acreage that rarely transacts in public.",
    tags: "Deep Water · Generational · Private Marina",
    intent: "For deep-water second homes, legacy lake holdings, and buyers who value quiet access over downtown proximity.",
    href: "/nelson/balfour",
    cta: "Study Balfour",
    image: brandImages.balfourKootenayLake,
    imageAlt: "Balfour and Kootenay Lake",
    artId: "balfour",
  },
  {
    index: "06 / 06",
    name: "Kaslo & Slocan Valley",
    body: "Beyond the city, heritage timber estates, river-frontage acreage, and serious second-home buyers seeking distance without isolation.",
    tags: "Heritage · Acreage · Retreat Properties",
    intent: "For retreat buyers who want timber, river frontage, mountain quiet, and a wider radius than Nelson proper.",
    href: "/nelson/slocan-valley",
    cta: "Study Retreat Areas",
    image: brandImages.slocanLake,
    imageAlt: "Slocan Lake in British Columbia",
    artId: "kaslo",
  },
];

/* ---------- Featured estates, REAL active listings ---------- */

export type Estate = {
  slug: string;
  concept: string;
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
    concept: "Featured Estate",
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
    concept: "Featured Estate",
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
    concept: "Featured Estate",
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

/* ---------- Seller promises ---------- */

export type Promise = { num: string; title: string; body: string };

export const sellerPromises: Promise[] = [
  { num: "01", title: "Confidential valuation", body: "A private read on value, comparable pressure, buyer depth, and the price line that should not be crossed." },
  { num: "02", title: "Editorial positioning", body: "The property is framed before it is exposed: legacy, lifestyle, architecture, land, privacy, and scarcity." },
  { num: "03", title: "Film, photo, and copy", body: "Cinematic film, architectural photography, floor-plan clarity, and writing that makes the home feel considered." },
  { num: "04", title: "Dedicated property page", body: "A private-office presentation built around the address, not a generic portal card surrounded by competitors." },
  { num: "05", title: "Qualified buyer rollout", body: "Controlled release to serious principals, relocation buyers, second-home families, and trusted agent networks." },
  { num: "06", title: "Discreet showing protocol", body: "Showings are scheduled around privacy, readiness, and intent, with casual traffic filtered before it reaches the door." },
  { num: "07", title: "Negotiation discipline", body: "Offer strategy, leverage, timing, and terms are handled as one plan, not as a reaction to the loudest bidder." },
  { num: "08", title: "Closing discretion", body: "From accepted offer to possession, the process stays calm, documented, and deliberately quiet." },
];

/* ---------- Lifestyle tiles ---------- */

export type LifestyleTile = {
  num: string;
  title: string;
  kicker: string;
  body: string;
  href: string;
  cta: string;
};

export const lifestyleTiles: LifestyleTile[] = [
  {
    num: "01",
    title: "Lakefront",
    kicker: "Dock, beach, morning water",
    body: "Direct lake access, protected shoreline, and the ownership questions that need answering before a waterfront tour matters.",
    href: "/listings/waterfront",
    cta: "View waterfront",
  },
  {
    num: "02",
    title: "Walkable Nelson",
    kicker: "Baker Street, galleries, lake",
    body: "Heritage streets, coffee, culture, Lakeside Park, and the rare homes that make daily Nelson life feel effortless.",
    href: "/nelson/nelson",
    cta: "Explore Nelson",
  },
  {
    num: "03",
    title: "North Shore Privacy",
    kicker: "Highway 3A, water, discretion",
    body: "A quieter lakefront corridor where the driveway, exposure, beach, and neighbour distance matter as much as the house.",
    href: "/nelson/north-shore",
    cta: "Study North Shore",
  },
  {
    num: "04",
    title: "Acreage",
    kicker: "Space, timber, outbuildings",
    body: "Forested privacy, workshop potential, family compounds, and enough land to make the approach feel intentional.",
    href: "/nelson/blewett",
    cta: "Find acreage fit",
  },
  {
    num: "05",
    title: "Ski Access",
    kicker: "Whitewater mornings, town evenings",
    body: "A search built around winter rhythm, road comfort, gear storage, and the distance between first chair and dinner.",
    href: "/buyers/relocation",
    cta: "Plan ski lifestyle",
  },
  {
    num: "06",
    title: "Second Home",
    kicker: "Lock-and-leave, managed, ready",
    body: "Weekend arrival, caretaker coverage, winterisation, security, and the systems that make absentee ownership calm.",
    href: "/buyers/international",
    cta: "Ask ownership questions",
  },
  {
    num: "07",
    title: "Relocation",
    kicker: "Schools, seasons, soft landing",
    body: "A search that starts with daily life: school runs, healthcare, winter reality, commute patterns, and first-year fit.",
    href: "/buyers/relocation",
    cta: "Plan relocation call",
  },
  {
    num: "08",
    title: "International / Absentee",
    kicker: "Advisors, wires, local care",
    body: "Foreign-buyer review, tax counsel, FX timing, property management, and the local team needed before closing.",
    href: "/buyers/international",
    cta: "Buy from afar",
  },
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
    hero: brandImages.orangeBridge,
    scenes: [
      { title: "Whitewater", alt: "Skiing powder at Whitewater Ski Resort near Nelson", image: brandImages.whitewater },
      { title: "Baker Street", alt: "Baker Street in downtown Nelson BC", image: brandImages.bakerStreet },
      { title: "Kootenay Lake", alt: "Kayaking on Kootenay Lake near Nelson BC", image: brandImages.kayaking },
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
    hero: brandImages.westArmKootenayLake,
    scenes: [
      { title: "West Arm", alt: "Kayaking Kootenay Lake on the North Shore", image: brandImages.kayaking },
      { title: "Kokanee Creek", alt: "Kokanee Creek Park beach", image: brandImages.kokaneeBeach },
      { title: "Sailing Water", alt: "Sailboats on Kootenay Lake near Nelson", image: brandImages.sailboats },
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
      "At the eastern end of Highway 3A's North Shore corridor, where the West Arm of Kootenay Lake opens into the main body of the lake. Deep water, generational acreage, and the longest-tenured waterfront properties in the region. The Kootenay Lake ferry departs from Balfour for Crawford Bay and the East Shore.",
    population: "~600",
    avgPrice: "$1,150,000",
    focus: "Deep Water · Marina · Generational Estates",
    hero: brandImages.balfourKootenayLake,
    scenes: [
      { title: "Ainsworth", alt: "Ainsworth Hot Springs near Kootenay Lake", image: brandImages.ainsworth },
      { title: "Ferry Rhythm", alt: "Balfour ferry on Kootenay Lake", image: brandImages.balfourFerry },
      { title: "Balfour Golf", alt: "Balfour Golf Course", image: brandImages.balfourGolf },
    ],
    highlights: [
      { title: "Kootenay Lake Ferry", body: "The world's longest free ferry connects Balfour to the East Shore, Crawford Bay, Riondel, and the Purcell Range." },
      { title: "Balfour Golf Course", body: "Eighteen holes carved between the lake and the surrounding mountains, a Kootenay institution." },
      { title: "Private Marinas", body: "Deep-water moorage and the kind of private dock arrangements rare elsewhere in the region." },
    ],
  },
  {
    slug: "blewett",
    name: "Blewett",
    tagline: "Country acreage, ten minutes from town.",
    intro:
      "A pastoral, semi-rural community west of Nelson, large lots, wooded privacy, and the kind of horse-and-orchard properties that suit families wanting space without the commute. The Blewett Road corridor remains one of the region's most considered acreage addresses.",
    population: "~1,500",
    avgPrice: "$1,050,000",
    focus: "Acreage · Privacy · Country Living",
    hero: brandImages.taghumBeach,
    scenes: [
      { title: "Taghum", alt: "Taghum Beach near Nelson BC", image: brandImages.taghumBeach },
      { title: "Morning Mountain", alt: "Morning Mountain biking near Blewett BC", image: brandImages.morningMountain },
      { title: "Blewett School", alt: "Blewett Elementary School", image: brandImages.blewettSchool },
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
    tagline: "Heritage timber, river frontage, and quiet wealth.",
    intro:
      "North of Nelson along Highway 6, a string of small communities (South Slocan, Crescent Valley, Winlaw, Slocan, New Denver) following the Slocan River and lake. Heritage timber estates, riverfront acreage, and serious second-home buyers seeking distance without isolation.",
    population: "~5,000 (valley-wide)",
    avgPrice: "$850,000",
    focus: "Riverfront · Heritage · Retreat Properties",
    hero: brandImages.slocanLake,
    scenes: [
      { title: "Slocan Lake", alt: "Slocan Lake in British Columbia", image: brandImages.slocanLake },
      { title: "Frog Peak", alt: "Frog Peak Cafe in Slocan Valley", image: brandImages.frogPeakCafe },
      { title: "Valhalla", alt: "Valhalla Mountain Range in British Columbia", image: brandImages.valhallaMountains },
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
    "Local intelligence over generic luxury. Discretion as a default, not a request. Editorial marketing, not realtor marketing. The work is about representing properties, and the people behind them, at a calibre the rest of the local market still hasn't caught up to.",
  approach:
    "I leverage technology to serve clients better, but I never forget the importance of personal relationships. Every transaction is a long-term relationship. My goal is to stay at the forefront of the industry while always prioritising my clients' satisfaction and trust.",
  bornAndRaised: "Born and raised in Nelson, BC",
  brokerage: "Founder, Luke Mori at Fair Realty",
  pillars: [
    {
      k: "I.",
      title: "Local intelligence over generic luxury.",
      body: "Knowing every architect, every lot, every owner who hasn't listed yet, and what each property is actually worth to the right buyer.",
    },
    {
      k: "II.",
      title: "Discretion as a default, not a request.",
      body: "Quiet representation, controlled exposure, and qualified showings. Your home doesn't need an audience, it needs the right buyer.",
    },
    {
      k: "III.",
      title: "Editorial marketing, not realtor marketing.",
      body: "Cinematic film, considered photography, and writing that respects what your property actually is. Launched, not uploaded.",
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
    body: "We work the open market and the private one. Listings on the site, off-market introductions through our network, and curated tours that respect your time and your discretion.",
  },
  {
    num: "03",
    title: "Make an offer",
    body: "Strategic offer construction, financing conditions, home inspections, purchase specifics, and any first-time buyer savings opportunities you're entitled to.",
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
    body: "Why are you selling? What time constraints exist? What makes your home unique? The first conversation defines the strategy that follows.",
  },
  {
    num: "02",
    title: "Marketing the property",
    body: "Professional photography, drone film, indoor video tours, full room measurements, and an editorial presentation built for the buyer profile your home is meant to attract.",
  },
  {
    num: "03",
    title: "Receiving offers",
    body: "Every offer is reviewed in detail. Strategic counsel on price, terms, and what each offer actually means for your timeline and walk-away.",
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
    meta: "Waterfront living at its finest",
    href: "https://www.youtube.com/watch?v=ItcMSmhyMxw",
    image: "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69f05d3851101693059b1a50_10384831_1.jpeg",
    imageAlt: "Waterfront home at 664 Ainslie Road",
  },
  {
    title: "3179 Heddle Road",
    meta: "Timber-frame home with in-law suite",
    href: "https://www.youtube.com/watch?v=Xd0u7gQ0Qm0",
    image: "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb9ee6a414f4f0dd7670c_10380904_1.jpeg",
    imageAlt: "Timber-frame home at 3179 Heddle Road",
  },
  {
    title: "6890 Harrop Procter Road",
    meta: "Modern Kootenay home presentation",
    href: "https://www.youtube.com/watch?v=xJhNYaokEzA",
    image: "https://cdn.prod.website-files.com/63f2f1893f4efb1d4755a829/69dfb91c9d095c231a5988bd_10372962_1.jpeg",
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
    q: "What marketing assets are used for a serious listing?",
    a: "The seller process described on this site includes professional photography, drone film, indoor video tours, full room measurements, and an editorial presentation built around the buyer profile for the home.",
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
    a: "The buying process on this site calls out property viewings, disclosure review, title search, confirmation of property details, zoning, taxes, restrictions, and any applicable strata information before an offer is treated as serious.",
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
    a: "International buyers should get qualified legal and tax advice before purchasing. The site can organize the property and area questions, but tax residency, transfer rules, financing, and regulatory issues require professional advice.",
  },
  {
    category: "Representation",
    q: "What does off-market mean?",
    a: "Off-market means a property is not being publicly promoted through the usual listing channels. Access depends on the owner's instructions, buyer fit, and whether an introduction is appropriate.",
  },
  {
    category: "Selling",
    q: "Why does presentation matter so much for a higher-value property?",
    a: "High-value homes ask buyers to understand architecture, land, privacy, lifestyle, and location at once. Photography, video, measurements, and clear copy help a serious buyer decide whether a showing is worth their time.",
  },
  {
    category: "Selling",
    q: "Should every listing be marketed the same way?",
    a: "No. A lakefront home, acreage estate, city view home, and walkable Nelson property each need different positioning. The buyer profile should shape the launch plan.",
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
    a: "A useful first conversation defines the property, timeline, privacy needs, budget or pricing context, area preferences, and the decision the client is actually trying to make.",
  },
];
