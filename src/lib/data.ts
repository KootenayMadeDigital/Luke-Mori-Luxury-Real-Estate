/* ============================================================
   Static content for the Luke Mori Luxury concept page.
   All names, statistics, and quotes are illustrative concept
   placeholders unless drawn from public local geography.
   ============================================================ */

export type AuthorityPillar = {
  number: string;
  title: string;
  body: string;
};

export const authorityPillars: AuthorityPillar[] = [
  {
    number: "01",
    title: "Local Luxury Intelligence",
    body: "From John's Walk to Johnstone Road — the lots, the views, the architects, and the owners who haven't listed yet.",
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
    body: "A short list of relocating principals and second-home buyers from Vancouver, Calgary, and abroad — already vetted.",
  },
  {
    number: "05",
    title: "Kootenay Lake Expertise",
    body: "Waterfront, North Shore, ski-access, acreage — the inventory the rest of the market doesn't know how to position.",
  },
];

export type Area = {
  index: string;
  name: string;
  body: string;
  tags: string;
  feature?: boolean;
  artId: "johns" | "fairview" | "rosemont" | "northshore" | "balfour" | "kaslo";
};

export const signatureAreas: Area[] = [
  {
    index: "01 / 06",
    name: "John's Walk & Sproat Drive",
    body: "Walk-to-water sanctuary on the city's most quietly coveted lakefront stretch — the kind of address that rarely lists, and almost never twice in a generation.",
    tags: "Waterfront · Walk-to-Beach · Heritage Lots",
    feature: true,
    artId: "johns",
  },
  {
    index: "02 / 06",
    name: "Fairview & Uphill",
    body: "Larger, newer builds with full city-and-lake exposure. Higher elevation, extended summer sun, and Baker Street culture a downhill walk away.",
    tags: "View Homes · Architectural · Walk to Downtown",
    artId: "fairview",
  },
  {
    index: "03 / 06",
    name: "Rosemont",
    body: "Established families, wide lots, and proximity to the Granite Pointe Golf Club. Quiet, settled, and increasingly rare in this size class.",
    tags: "Acreage Adjacent · Golf · Established",
    artId: "rosemont",
  },
  {
    index: "04 / 06",
    name: "Johnstone Road & North Shore",
    body: "Cross 'Bob' — the Big Orange Bridge — and the lake opens. Highway 3A's waterfront corridor toward Balfour holds Nelson's most cinematic private residences.",
    tags: "Lakefront · Private Acreage · Boathouses",
    feature: true,
    artId: "northshore",
  },
  {
    index: "05 / 06",
    name: "Balfour & Kootenay Lake",
    body: "Where the West Arm meets the main lake. Deep water, deep privacy, and the kind of generational waterfront acreage that rarely transacts in public.",
    tags: "Deep Water · Generational · Private Marina",
    artId: "balfour",
  },
  {
    index: "06 / 06",
    name: "Kaslo & Slocan Valley",
    body: "Beyond the city — heritage timber estates, river-frontage acreage, and serious second-home buyers seeking distance without isolation.",
    tags: "Heritage · Acreage · Retreat Properties",
    artId: "kaslo",
  },
];

export type Estate = {
  concept: string;
  area: string;
  title: string;
  body: string;
  specs: { label: string; value: string }[];
  reverse?: boolean;
  artId: "lakefront" | "view" | "mountain" | "heritage";
};

export const featuredEstates: Estate[] = [
  {
    concept: "Concept No. 01",
    area: "North Shore",
    title: "North Shore Lakefront Retreat",
    body: "A long, low contemporary set on a private cove off Highway 3A. Cedar, glass, and a 92-foot beach frontage — engineered for stillness.",
    specs: [
      { label: "Bed", value: "5" },
      { label: "Bath", value: "4.5" },
      { label: "Sq Ft", value: "4,800" },
      { label: "Acres Waterfront", value: "1.4" },
    ],
    artId: "lakefront",
  },
  {
    concept: "Concept No. 02",
    area: "Upper Fairview",
    title: "Architectural View Home Above Nelson",
    body: "A three-storey contemporary terraced into the south slope. Floor-to-ceiling glass framing the city, the lake, and the Selkirks beyond.",
    specs: [
      { label: "Bed", value: "4" },
      { label: "Bath", value: "3.5" },
      { label: "Sq Ft", value: "3,650" },
      { label: "Lake View", value: "180°" },
    ],
    reverse: true,
    artId: "view",
  },
  {
    concept: "Concept No. 03",
    area: "Whitewater Corridor",
    title: "Private Mountain Estate near Whitewater",
    body: "A timber-and-stone retreat on twelve forested acres. Twenty minutes to the lifts, ten to Baker Street, and a private creek through the south meadow.",
    specs: [
      { label: "Bed", value: "6" },
      { label: "Bath", value: "5" },
      { label: "Sq Ft", value: "6,200" },
      { label: "Acres", value: "12.3" },
    ],
    artId: "mountain",
  },
  {
    concept: "Concept No. 04",
    area: "Heritage Downtown",
    title: "Walkable Heritage Luxury near Baker Street",
    body: "A meticulously restored heritage residence — original brick, modern systems, walled garden. Within four blocks of every restaurant that matters in Nelson.",
    specs: [
      { label: "Bed", value: "4" },
      { label: "Bath", value: "3" },
      { label: "Sq Ft", value: "3,200" },
      { label: "Vintage", value: "1894" },
    ],
    reverse: true,
    artId: "heritage",
  },
];

export type Promise = { num: string; title: string; body: string };

export const sellerPromises: Promise[] = [
  { num: "i.", title: "Cinematic film & drone", body: "A 60-second property film built for placement, not for autoplay-mute scrolling." },
  { num: "ii.", title: "Editorial property copy", body: "Your home written about the way it deserves to be remembered — not described." },
  { num: "iii.", title: "Private launch strategy", body: "A staged release — pocket list to network, then private preview, then market." },
  { num: "iv.", title: "Targeted buyer outreach", body: "A real list of relocating principals, ski-buyers, and second-home families. Vetted." },
  { num: "v.", title: "Dedicated property website", body: "Every signature listing is built its own site. The property as a destination." },
  { num: "vi.", title: "Paid & social distribution", body: "Geotargeted campaigns into Vancouver, Calgary, and the international second-home market." },
  { num: "vii.", title: "High-end photography", body: "Architectural-grade interior and twilight exterior — the standard, not the upgrade." },
  { num: "viii.", title: "Discreet inquiry handling", body: "No mass auto-replies. Every serious inquiry is answered personally, by name." },
];

export type LifestyleTile = { num: string; title: string; body: string };

export const lifestyleTiles: LifestyleTile[] = [
  { num: "01", title: "Lakefront", body: "Direct beach, dock potential, and morning water on the bedroom ceiling." },
  { num: "02", title: "Ski Access", body: "Powder mornings at Whitewater, dinner on Baker Street the same evening." },
  { num: "03", title: "Walkable Nelson", body: "Heritage, café, gallery, lake — under fifteen minutes from your front door." },
  { num: "04", title: "Acreage", body: "Forested privacy, room for outbuildings, and a driveway long enough to matter." },
  { num: "05", title: "Privacy", body: "End-of-road, tree-buffered, off the search results — and off the radar." },
  { num: "06", title: "Mountain Views", body: "Selkirks to the south, Purcells across the lake, and the right pane of glass between." },
  { num: "07", title: "Second-Home", body: "Lock-and-leave, professionally managed, ready for the weekend you decide to fly in." },
];

export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We sold a property most agents would have priced under. Luke priced it where the market actually was — and brought the buyer himself. Quietly. The way we asked.",
    attribution: "Private Seller",
    context: "North Shore Estate · Concept Reference",
  },
  {
    quote:
      "We were relocating from Vancouver and didn't know what we didn't know. Luke walked us through three neighbourhoods we hadn't considered, and one of them is now home.",
    attribution: "Relocation Buyer",
    context: "Upper Fairview · Concept Reference",
  },
  {
    quote:
      "He showed me a property before it ever hit the market. By the time it would have, I had already moved in. That's the difference.",
    attribution: "Second-Home Principal",
    context: "Kootenay Lake · Concept Reference",
  },
];

export type ConcludedItem = {
  area: string;
  type: string;
  status: string;
};

export const recentlyConcluded: ConcludedItem[] = [
  { area: "North Shore", type: "Lakefront Estate", status: "Privately Represented" },
  { area: "Upper Fairview", type: "Architectural View Home", status: "Off-Market Sale" },
  { area: "Balfour", type: "Generational Waterfront", status: "Buyer Introduced" },
  { area: "Whitewater Corridor", type: "Mountain Retreat", status: "Privately Represented" },
  { area: "Baker Street", type: "Heritage Residence", status: "Privately Represented" },
  { area: "Slocan Valley", type: "Riverfront Acreage", status: "Off-Market Sale" },
];

/* Press list reflects Luke's real public coverage where applicable
   (Ryan Serhant, BC Luxury Homes, NYC Journal) plus aspirational
   placements appropriate to a luxury division. */
export const pressMentions: string[] = [
  "Ryan Serhant",
  "BC Luxury Homes",
  "NYC Journal",
  "Western Living",
  "Mountain Life",
  "Nuvo Magazine",
  "House & Home",
  "Vancouver Magazine",
];

export type Credential = { value: string; label: string };

/* Drawn from Luke Mori's public credentials at lukemori.com — used here
   to demonstrate how this division's brand could lead with real proof. */
export const credentials: Credential[] = [
  { value: "$169M+", label: "Career Volume" },
  { value: "2021 / 2024", label: "Best Luxury Broker" },
  { value: "10+ Yrs", label: "Nelson Market" },
  { value: "100+", label: "Property Films" },
];
