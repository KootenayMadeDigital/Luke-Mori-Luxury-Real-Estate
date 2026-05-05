import { headerImages } from "@/lib/data";

export type GuideSource = { label: string; href: string };
export type GuideSection = { title: string; body: string[] };
export type BuyerGuide = {
  slug: string;
  category: "Buyer Guides" | "Due Diligence" | "Seller Guides";
  title: string;
  dek: string;
  intent: string;
  image: string;
  readTime: string;
  sections: GuideSection[];
  checklist: string[];
  questions: string[];
  sources: GuideSource[];
};

const bcTaxSources: GuideSource[] = [
  { label: "BC property transfer tax", href: "https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax" },
  { label: "BC speculation and vacancy tax", href: "https://www2.gov.bc.ca/gov/content/taxes/speculation-vacancy-tax" },
];

const waterSources: GuideSource[] = [
  { label: "BC water licensing and rights", href: "https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/water-licensing-rights" },
  { label: "BC riparian areas protection", href: "https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/laws-rules/riparian-areas-protection-regulation" },
];

const localSources: GuideSource[] = [
  { label: "City of Nelson", href: "https://www.nelson.ca/" },
  { label: "Village of Kaslo", href: "https://www.kaslo.ca/" },
];

const riskSources: GuideSource[] = [
  { label: "FireSmart BC", href: "https://firesmartbc.ca/" },
  { label: "BC water licensing and rights", href: "https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/water-licensing-rights" },
];

const rdckSource = { label: "Regional District of Central Kootenay", href: "https://www.rdck.ca/" };

export const buyerGuides: BuyerGuide[] = [
  {
    slug: "buying-kootenay-lake-waterfront-property",
    category: "Buyer Guides",
    title: "Buying Waterfront Property on Kootenay Lake",
    dek: "A practical guide to shoreline access, water rights, docks, services, and the questions to settle before a showing.",
    intent: "For buyers comparing lakefront, lake access, and view properties around Kootenay Lake.",
    image: headerImages.balfourKootenayLake,
    readTime: "7 min read",
    sections: [
      { title: "Start with what is actually being sold", body: ["Waterfront can mean fee simple shoreline, shared access, community waterfront, a nearby beach, or a view over the lake. Those are not interchangeable. Confirm what rights are included on title, what is shared, and what depends on association, strata, easement, or licence terms.", "In British Columbia, water itself is owned by the Crown. If a property depends on surface water or groundwater use beyond basic domestic purposes, the right to use that water may require provincial authorization."] },
      { title: "The shoreline needs careful review", body: ["A waterfront purchase should include careful review of riparian areas, flood risk, erosion, septic location, slope, road access, insurance, and any existing dock or foreshore structure.", "If the listing mentions a dock, moorage, shared waterfront, creek, or lake access, ask for documents early. The right time to discover uncertainty is before offer strategy, not after acceptance."] },
      { title: "Use the showing to test daily life", body: ["A showing should answer more than whether the view is beautiful. Test privacy, afternoon sun, road noise, stairs to the water, winter access, cell service, internet, storage, guest parking, and how the property would actually be used in each season."] },
    ],
    checklist: ["Confirm title, strata, easements, and shared waterfront rights", "Ask about water source, septic, dock status, and foreshore permissions", "Review flood, erosion, wildfire, access, and insurance questions", "Compare lakefront, lake access, and lake view pricing separately"],
    questions: ["What exact waterfront rights transfer with the property?", "Is the dock, beach, path, or access point private, shared, licensed, or informal?", "What should be verified with the lawyer, inspector, insurer, and local government before writing?"],
    sources: [...waterSources, ...bcTaxSources],
  },
  {
    slug: "kootenay-lake-waterfront-vs-lake-access",
    category: "Buyer Guides",
    title: "Kootenay Lake Waterfront vs. Lake Access",
    dek: "The difference between owning shoreline, sharing access, and enjoying a lake view can change price, use, privacy, and risk.",
    intent: "For buyers who want the lake life but need to understand what the listing language really means.",
    image: headerImages.westArmKootenayLake,
    readTime: "5 min read",
    sections: [
      { title: "The rights are different", body: ["Waterfront usually suggests a direct relationship with the shoreline, but the exact legal interest still needs review. Lake access may mean shared land, a community beach, an easement, a strata amenity, or proximity. Lake view may carry daily-life value without any right to use the shoreline.", "The correct question is not whether the property feels close to the lake. The correct question is what use, access, and obligations are legally attached to the property."] },
      { title: "Price should follow rights and usability", body: ["A property with clean, usable shoreline can carry a different price than a home with a view or a shared access path. The comparison set should reflect the actual right being purchased, not just the lake in the photos.", "For buyers, privacy and ease of use matter. A shared waterfront area may be excellent, but it is not the same buyer experience as private shoreline."] },
      { title: "Documentation beats assumptions", body: ["Ask for maps, title documents, strata or association material, water and septic information, and any relevant licences or agreements. If the property relies on a shared structure or access route, understand maintenance, cost, governance, and practical availability."] },
    ],
    checklist: ["Separate waterfront, lake access, and lake view in your shortlist", "Verify legal access, not just physical access", "Ask who maintains shared roads, paths, docks, or beach areas", "Compare privacy, slope, parking, and seasonal use"],
    questions: ["What exactly can the owner use?", "Who else can use it?", "What documents prove the right?"],
    sources: waterSources,
  },
  {
    slug: "moving-to-nelson-bc",
    category: "Buyer Guides",
    title: "Moving to Nelson, BC",
    dek: "A relocation guide for buyers comparing walkability, services, seasons, mountain access, and the reality behind the postcard.",
    intent: "For buyers coming from Vancouver, Calgary, Ontario, the United States, or elsewhere in BC.",
    image: headerImages.bakerStreet,
    readTime: "6 min read",
    sections: [
      { title: "Nelson is a daily-life choice first", body: ["Nelson is known for its historic downtown, mountain setting, arts culture, and access to Kootenay Lake. For buyers, the real decision is not simply Nelson or not Nelson. It is walkable town life, hillside views, North Shore privacy, rural acreage, or lake access near services.", "A strong relocation search starts by deciding how daily life should work before looking at individual homes."] },
      { title: "Tour the routine", body: ["A useful scouting trip includes grocery routes, schools if relevant, winter driving, healthcare access, recreation habits, commute patterns, internet needs, and how guests will arrive. Beautiful homes can still be the wrong fit if the daily rhythm is wrong."] },
      { title: "Match the property type to the season", body: ["In the Kootenays, winter access, slope, snow storage, heating systems, road maintenance, and sun deserve attention. Summer viewings can hide winter tradeoffs."] },
    ],
    checklist: ["Decide town, lake, acreage, or ski rhythm first", "Tour daily services and winter routes", "Confirm internet, heat, access, parking, and maintenance", "Use a local showing plan instead of browsing randomly"],
    questions: ["Which neighbourhoods fit the life I want?", "What will winter change about this property?", "What local tradeoffs should I understand before offering?"],
    sources: localSources,
  },
  {
    slug: "moving-to-kaslo-bc",
    category: "Buyer Guides",
    title: "Moving to Kaslo, BC",
    dek: "What buyers should understand about Kaslo, Kootenay Lake, small-town services, access, and privacy.",
    intent: "For buyers considering Kaslo, North Kootenay Lake, or a quieter lake and mountain setting.",
    image: headerImages.balfourKootenayLake,
    readTime: "5 min read",
    sections: [
      { title: "Kaslo rewards buyers who want quiet", body: ["The Village of Kaslo describes itself as a picturesque village in the West Kootenay region on the west shore of Kootenay Lake. For real estate buyers, that setting can offer lake, mountain, heritage, and privacy appeal, but it should be evaluated with practical questions about services and access."] },
      { title: "Distance is part of the value equation", body: ["Some buyers want the quieter pace. Others underestimate how often they need larger-town services, flights, trades, medical appointments, or winter travel. A showing should include the roads and routines around the property, not only the rooms inside it."] },
      { title: "Lake life needs documentation", body: ["If a Kaslo-area property includes lake access, community waterfront, creek frontage, strata elements, or rural services, verify the documents. Local knowledge helps narrow questions, but legal and technical details still belong with lawyers, inspectors, insurers, and local authorities."] },
    ],
    checklist: ["Test distance to services and regular routes", "Confirm winter access and road maintenance", "Review lake, creek, water, septic, and strata details", "Separate quiet living value from resale practicality"],
    questions: ["How often will I need Nelson, Castlegar, or larger services?", "What is maintained privately, by strata, or by local government?", "What should be checked before committing to a rural lake life?"],
    sources: [{ label: "Village of Kaslo", href: "https://www.kaslo.ca/" }, ...waterSources],
  },
  {
    slug: "nelson-vs-kaslo-vs-balfour",
    category: "Buyer Guides",
    title: "Nelson vs. Kaslo vs. Balfour",
    dek: "A practical comparison for buyers choosing between town energy, lake access, ferry rhythm, privacy, and small-community pace.",
    intent: "For buyers narrowing the Kootenay life before booking showings.",
    image: headerImages.nelsonLandscape,
    readTime: "6 min read",
    sections: [
      { title: "Choose the life before the address", body: ["Nelson often appeals to buyers who want heritage, restaurants, services, culture, and walkability close to Kootenay Lake. Kaslo often appeals to buyers seeking quieter village life on the lake. Balfour can suit buyers who want lake access, ferry connection, and a more rural rhythm near the West Arm and main lake."] },
      { title: "The best choice depends on daily use", body: ["A second-home buyer, a full-time family, a retiree, and a remote worker can all look at the same map and need different answers. The right comparison includes services, road habits, internet, winter, guests, maintenance, recreation, and resale."] },
      { title: "Compare tradeoffs in person", body: ["Do not compare only square footage and price. Compare the lived pattern: where you buy groceries, how often you cross the ferry, how guests arrive, how winter affects the driveway, and how much privacy you actually want."] },
    ],
    checklist: ["Pick your non-negotiable way of life first", "Compare road rhythm and services", "Test lake, town, and rural tradeoffs in one showing day", "Ask which compromises buyers regret later"],
    questions: ["Do I want walkability, quiet, ferry access, or privacy most?", "Which area fits full-time living versus second-home use?", "What would be hard to resell if my needs change?"],
    sources: localSources,
  },
  {
    slug: "rural-luxury-property-due-diligence-bc",
    category: "Due Diligence",
    title: "How to Evaluate a Rural Luxury Property in BC",
    dek: "A clear review framework for buyers considering acreage, lake access, privacy, outbuildings, wells, septic, and rural systems.",
    intent: "For buyers who need more than a beautiful showing before writing a serious offer.",
    image: headerImages.slocanLake,
    readTime: "8 min read",
    sections: [
      { title: "Rural luxury is systems plus setting", body: ["The appeal is privacy, land, views, workshops, guest space, water, forest, and quiet. The risk is that every one of those benefits can carry a system, cost, restriction, or maintenance question. A careful buyer evaluates both the romance and the infrastructure."] },
      { title: "Confirm what professionals must verify", body: ["A real estate advisor can help frame questions, but lawyers, inspectors, insurers, surveyors, septic professionals, well specialists, and local government staff may all be needed depending on the property. The more unique the property, the less useful generic assumptions become."] },
      { title: "Do not let photos outrun documents", body: ["Before writing or removing conditions, understand title, zoning, access, water, septic, heating, insurance, wildfire risk, building permits where relevant, boundaries, and any shared road or easement obligations."] },
    ],
    checklist: ["Review title, access, easements, and zoning", "Inspect water, septic, heat, roof, drainage, and outbuildings", "Ask about wildfire mitigation and insurance", "Confirm what the current owner maintains privately"],
    questions: ["What system failure would be expensive here?", "What document should I review before offering?", "Who needs to inspect this property besides a general home inspector?"],
    sources: [...waterSources, ...riskSources],
  },
  {
    slug: "buying-acreage-in-the-kootenays",
    category: "Due Diligence",
    title: "Buying Acreage in the Kootenays",
    dek: "How to think about usable land, slope, access, water, zoning, outbuildings, privacy, and long-term maintenance.",
    intent: "For buyers comparing rural acreage near Nelson, Blewett, Slocan Valley, Pass Creek, and Kootenay Lake communities.",
    image: headerImages.slocanLake,
    readTime: "6 min read",
    sections: [
      { title: "Acreage is not only the number of acres", body: ["Usable land matters more than the headline number. Slope, access, sun, drainage, forest, ALR status where applicable, zoning, services, and building sites can change how the property lives and what it may support."] },
      { title: "Privacy has a maintenance cost", body: ["Long driveways, private roads, snow clearing, drainage, tree work, fire mitigation, wells, septic, and outbuildings can be exactly what a buyer wants. They are also responsibilities to price into ownership."] },
      { title: "Plan around future use", body: ["If you imagine a guest cabin, shop, studio, garden, rental, subdivision, or major renovation, verify rules early. Rural flexibility depends on zoning, servicing, access, environmental constraints, and approvals."] },
    ],
    checklist: ["Walk the land, not just the house", "Review zoning and permitted uses", "Ask about road, snow, drainage, water, and septic", "Price maintenance into the ownership plan"],
    questions: ["How much land is actually usable?", "What future use is legally and practically possible?", "What would a local owner check before buying this acreage?"],
    sources: [...riskSources, rdckSource],
  },
  {
    slug: "winter-access-year-round-living-kootenays",
    category: "Due Diligence",
    title: "Winter Access and Year-Round Living in the Kootenays",
    dek: "The winter questions that matter for rural homes, lake properties, steep drives, second homes, and relocation buyers.",
    intent: "For buyers who toured in summer and need to understand the property in February.",
    image: headerImages.nelsonLandscape,
    readTime: "5 min read",
    sections: [
      { title: "Winter changes the property test", body: ["A driveway, road, roofline, heating system, lake access path, or rural service distance can feel simple in July and very different in winter. Year-round living requires a clear look at snow storage, plowing, grade, sun, backup heat, and who maintains the access."] },
      { title: "Second homes need a caretaker plan", body: ["If the property will sit empty, ask who checks heat, snow, water, alarms, access, and storm damage. A beautiful second home becomes stressful when nobody local is responsible for small problems before they become expensive ones."] },
      { title: "Insurance and wildfire still matter", body: ["Winter access is one side of rural ownership. Wildfire mitigation, defensible space, roof and gutter maintenance, and insurance availability should also be part of the annual ownership plan."] },
    ],
    checklist: ["Ask who maintains the road and driveway", "Confirm heat source, backup systems, and utility reliability", "Plan for snow storage, access, and caretaker coverage", "Review wildfire mitigation and insurance early"],
    questions: ["Would I buy this property if I toured it in winter?", "Who keeps the property safe when I am away?", "What seasonal cost is not obvious in the listing?"],
    sources: riskSources,
  },
  {
    slug: "septic-water-access-insurance-rural-bc",
    category: "Due Diligence",
    title: "Septic, Water, Access, and Insurance in Rural BC",
    dek: "Four quiet issues that can decide whether a rural or waterfront property is easy to own or expensive to correct.",
    intent: "For buyers who want a focused checklist before removing conditions.",
    image: headerImages.procterLakeHouse,
    readTime: "7 min read",
    sections: [
      { title: "Water deserves early attention", body: ["In BC, water use is governed provincially. Domestic groundwater use is treated differently from non-domestic groundwater use, and non-domestic use can require a water licence. Buyers should understand the property water source, records, quality, quantity, treatment, and any licences or shared systems."] },
      { title: "Septic is not cosmetic", body: ["A rural septic system should be treated as core infrastructure. Buyers should ask for available records, service history, age, capacity, location, and inspection advice from a licensed professional. The system must suit the home, use, and site conditions."] },
      { title: "Access and insurance are ownership issues", body: ["Shared roads, private roads, steep drives, bridges, wildfire risk, and distance from services can affect cost, maintenance, and insurance. These are not reasons to avoid rural property. They are reasons to investigate properly."] },
    ],
    checklist: ["Identify the water source and any licences or records", "Inspect septic with licensed advice", "Confirm legal and practical access", "Speak with insurance early in the process"],
    questions: ["What system would be hardest to replace?", "What records are available?", "What should my insurer know before I write?"],
    sources: [...waterSources, ...riskSources],
  },
  {
    slug: "access-easements-shared-roads-bc",
    category: "Due Diligence",
    title: "Access Easements and Shared Roads in Rural BC",
    dek: "Why legal access, practical access, road maintenance, and neighbour agreements should be reviewed before a rural purchase.",
    intent: "For buyers considering acreages, lake homes, remote properties, or shared waterfront communities.",
    image: headerImages.taghumBeach,
    readTime: "5 min read",
    sections: [
      { title: "A driveway is not the same as legal access", body: ["If a property depends on crossing another parcel, using a shared road, or maintaining a private route, confirm the legal basis and maintenance expectations. The map, title documents, easements, road agreements, and local knowledge all matter."] },
      { title: "Maintenance should not be vague", body: ["Who plows, grades, drains, repairs, insures, and pays for the road? If the answer is informal, understand the risk. Informal arrangements can work for years, but buyers should know what they are inheriting."] },
      { title: "Access affects financing, insurance, and resale", body: ["A property with unclear access can create friction beyond daily inconvenience. It may affect lender comfort, insurance, future buyers, and long-term value. This is a lawyer question, not a handshake question."] },
    ],
    checklist: ["Review title, easements, plans, and road agreements", "Ask who maintains and pays for access", "Confirm emergency, winter, and guest access", "Treat unclear access as a pre-offer issue"],
    questions: ["Is the access legal, practical, and year-round?", "Who is responsible for maintenance?", "Would the same access story satisfy my lender and insurer?"],
    sources: [{ label: "Land Title and Survey Authority of BC", href: "https://ltsa.ca/" }, rdckSource],
  },
  {
    slug: "luxury-home-marketing-kootenays",
    category: "Seller Guides",
    title: "How Luxury Homes Should Be Marketed in the Kootenays",
    dek: "Why unique rural, lake, view, and legacy properties need more than an MLS upload and attractive photography.",
    intent: "For sellers deciding how an important Kootenay property should be prepared before listing.",
    image: headerImages.sellerDining,
    readTime: "6 min read",
    sections: [
      { title: "Strong marketing starts before listing", body: ["The strongest sale plans clarify the likely buyer, the property story, the strongest objections, the showing plan, and the assets needed to make the home understandable from a distance. For rural and waterfront homes, the buyer may not be local. The page has to do more work before the showing."] },
      { title: "The property needs to be explained", body: ["Drone, video, photography, room information, area context, and clear copy should reduce uncertainty. Overstated adjectives do not help if the buyer still cannot understand access, daily life, privacy, or systems."] },
      { title: "Serious attention beats empty traffic", body: ["A seller does not need every buyer. They need the right buyer to understand the property, believe the value, and take the next step with seriousness. Marketing should filter as much as it attracts."] },
    ],
    checklist: ["Define the buyer before writing the listing", "Build visual assets that explain the property", "Answer objections before showings", "Use the listing page as a serious presentation tool"],
    questions: ["Who is the right buyer and what will they worry about?", "What must be shown visually to justify value?", "What should be private, public, or shown only to serious buyers?"],
    sources: [{ label: "Luke Mori listings", href: "/listings" }, { label: "Luke Mori seller guidance", href: "/sellers" }],
  },
  {
    slug: "preparing-waterfront-home-for-market-kootenays",
    category: "Seller Guides",
    title: "Preparing a Waterfront Home for Market in the Kootenays",
    dek: "A seller guide for presenting shoreline, views, docks, access, systems, and daily life without overpromising.",
    intent: "For owners of lakefront, lake access, creekside, or view properties preparing to sell.",
    image: headerImages.westArmKootenayLake,
    readTime: "6 min read",
    sections: [
      { title: "Prepare documents before attention", body: ["Waterfront buyers ask sharper questions. Before listing, gather what you can about title, access, dock or foreshore matters, strata or community waterfront rights, septic, water, maintenance, insurance, and upgrades. The goal is not to overwhelm buyers. It is to reduce uncertainty for serious ones."] },
      { title: "Show daily life with restraint", body: ["The best waterfront marketing shows approach, privacy, shoreline usability, outdoor rooms, views, guest flow, and daily life in multiple seasons where possible. It should not imply rights or uses that are not documented."] },
      { title: "Price the rights, not only the view", body: ["A direct waterfront property, a shared-access property, and a lake-view property may attract different buyers and deserve different comparable sets. Sale strategy should make that distinction clear."] },
    ],
    checklist: ["Gather documents that support access, waterfront use, and systems", "Prepare shoreline, decks, paths, windows, and outdoor spaces", "Clarify what is private, shared, licensed, or informal", "Price against the correct waterfront category"],
    questions: ["What will buyers ask about water, access, and systems?", "What can be documented before listing?", "What claim should be avoided because it cannot be proven?"],
    sources: waterSources,
  },
  {
    slug: "pricing-unique-kootenay-property",
    category: "Seller Guides",
    title: "How to Price a Unique Kootenay Property",
    dek: "Why waterfront, acreage, view, and legacy homes need a pricing strategy beyond ordinary comparables.",
    intent: "For sellers preparing a property that is hard to compare cleanly against recent sales.",
    image: headerImages.sellerDining,
    readTime: "6 min read",
    sections: [
      { title: "Unique homes need a clearer pricing argument", body: ["A distinctive property can be valuable because of privacy, lake access, views, acreage, architecture, guest capacity, or rarity. The challenge is proving that value without assuming every feature adds dollar-for-dollar value.", "Pricing should separate what buyers can verify from what the seller feels. The right number usually comes from comparable sales, current competition, replacement difficulty, buyer depth, and how clearly the property can be explained."] },
      { title: "Rare does not mean unlimited demand", body: ["A rare property can still sit if the price outruns the buyer pool. The sale strategy should identify who is most likely to care, what they will compare against, and what objections must be solved before the first showing."] },
      { title: "Presentation affects pricing confidence", body: ["Strong photography, video, property pages, room clarity, documents, and area context help buyers understand why the property deserves attention. Weak presentation makes even the right price feel uncertain." ] },
    ],
    checklist: ["Separate emotional value from market evidence", "Compare against active competition and closed sales", "Identify buyer objections before listing", "Prepare the evidence that supports the price"],
    questions: ["Which features are truly scarce?", "What would the best buyer compare this against?", "What evidence supports the asking range?"],
    sources: [{ label: "Luke Mori seller guidance", href: "/sellers" }, { label: "Luke Mori sold listings", href: "/listings/sold" }],
  },
  {
    slug: "questions-before-hiring-luxury-listing-agent",
    category: "Seller Guides",
    title: "What Sellers Should Ask Before Hiring a Listing Agent",
    dek: "The questions that reveal whether an agent can price, prepare, market, screen, and negotiate an important property properly.",
    intent: "For sellers interviewing agents before listing a waterfront, acreage, or unique home.",
    image: headerImages.lukeLeaningPortrait,
    readTime: "6 min read",
    sections: [
      { title: "Ask how the price will be defended", body: ["A listing agent should be able to explain the pricing method, the comparable set, the current competition, and the risks of both overpricing and underpricing. A confident number without a clear argument is not strategy." ] },
      { title: "Ask how the property will be understood", body: ["For unique Kootenay homes, marketing should explain the property, not simply decorate it. Ask about photography, video, copy, floor and room information, local context, buyer objections, and how inquiries will be screened." ] },
      { title: "Ask what happens after listing", body: ["The listing is only the start. Sellers should understand feedback loops, showing quality, privacy, negotiation posture, offer handling, and when the strategy should change if the market does not respond." ] },
    ],
    checklist: ["Ask for the pricing argument", "Review the marketing plan before signing", "Understand buyer screening and showing process", "Clarify feedback, privacy, and negotiation strategy"],
    questions: ["How will you explain this property to an out-of-area buyer?", "What objections do you expect?", "How will you protect privacy while still creating demand?"],
    sources: [{ label: "Luke Mori about", href: "/about" }, { label: "Luke Mori testimonials", href: "/testimonials" }],
  },
  {
    slug: "preparing-acreage-property-for-market-kootenays",
    category: "Seller Guides",
    title: "Preparing an Acreage Property for Market in the Kootenays",
    dek: "How to prepare land, outbuildings, access, documents, systems, and photography before listing an acreage property.",
    intent: "For acreage owners who want buyers to understand the land instead of only touring the house.",
    image: headerImages.slocanLake,
    readTime: "6 min read",
    sections: [
      { title: "Make the usable land obvious", body: ["Acreage buyers need to understand slope, access, sun, drainage, gardens, outbuildings, parking, guest areas, privacy, and future use. The showing should not leave them guessing which parts of the land are practical." ] },
      { title: "Prepare the systems story", body: ["Water, septic, road maintenance, snow clearing, heat, outbuildings, drainage, and wildfire mitigation can all affect confidence. Gather service records, maps, permits where available, and clear explanations before listing." ] },
      { title: "Do not over-stage the wrong things", body: ["Acreage preparation is less about making everything look suburban and more about making the property legible. Clear paths, tidy utility areas, accessible outbuildings, visible boundaries, and honest maintenance details matter." ] },
    ],
    checklist: ["Clear access routes and key land features", "Gather water, septic, road, and outbuilding records", "Prepare maps or notes for boundaries and usable areas", "Address wildfire, drainage, and maintenance questions early"],
    questions: ["What parts of the acreage are genuinely usable?", "What systems will buyers ask about first?", "What should be photographed, mapped, or explained before listing?"],
    sources: [rdckSource, ...riskSources],
  },
  {
    slug: "buying-second-home-kootenays",
    category: "Buyer Guides",
    title: "Buying a Second Home in the Kootenays",
    dek: "A practical guide to caretaker plans, winterization, insurance, travel rhythm, guests, and remote ownership.",
    intent: "For buyers considering a part-time home, family retreat, or long-term relocation foothold.",
    image: headerImages.procterLakeHouse,
    readTime: "6 min read",
    sections: [
      { title: "Second homes need an ownership plan", body: ["The best second-home purchase is not only beautiful when you arrive. It is manageable when you are not there. Buyers should plan for heat, water, snow, alarms, insurance, storm checks, landscaping, guest access, and local service relationships." ] },
      { title: "Be honest about travel rhythm", body: ["A property that feels perfect on a holiday weekend may be harder to use if the drive, flights, ferry timing, winter access, or maintenance demands are heavier than expected. The right home matches the way you will actually visit." ] },
      { title: "Check rules before assuming rental or guest use", body: ["If rental income, guest stays, caretaker suites, strata rules, or future renovations matter, verify the rules before buying. Local government, strata, insurance, lender, tax, and legal advice may all be relevant." ] },
    ],
    checklist: ["Build a caretaker and maintenance plan", "Confirm winterization and access", "Review insurance, taxes, strata, and rental assumptions", "Test travel time and guest logistics"],
    questions: ["Who watches the property when I am away?", "How often will I realistically use it?", "What rules limit rental, guests, renovations, or future use?"],
    sources: [...bcTaxSources, ...riskSources],
  },
  {
    slug: "out-of-province-buyers-buying-in-bc",
    category: "Buyer Guides",
    title: "Out-of-Province Buyers Buying in BC",
    dek: "What Alberta, Ontario, U.S., and other non-local buyers should know before purchasing in the Kootenays.",
    intent: "For buyers who need a clean BC process before they book travel or write remotely.",
    image: headerImages.bakerStreet,
    readTime: "7 min read",
    sections: [
      { title: "BC costs and rules need early attention", body: ["Buyers should understand property transfer tax, annual property taxes, possible speculation and vacancy tax obligations in designated areas, financing timing, insurance, legal closing process, and any residency or foreign-buyer rules that may apply at the time of purchase.", "Rules change. Treat online guidance as a starting point, then confirm with a BC lawyer or notary, tax advisor, lender, and insurer." ] },
      { title: "Remote review must be organized", body: ["Out-of-area buyers should decide what can be reviewed remotely, what requires an in-person showing, and what needs local professional inspection. Video can help, but it should not replace technical review of water, septic, access, strata, insurance, and title questions." ] },
      { title: "Local context prevents expensive surprises", body: ["The biggest surprises are often practical: winter roads, service distance, trades availability, ferry rhythm, internet, wildfire risk, and how daily life differs from the buyer's current market." ] },
    ],
    checklist: ["Confirm BC taxes and closing process", "Line up lawyer or notary, lender, insurer, and inspector", "Verify property-specific systems before removing conditions", "Plan a showing route that tests daily life and access"],
    questions: ["What BC-specific cost am I missing?", "What must be seen in person?", "Which local tradeoffs would not be obvious from another province or country?"],
    sources: [...bcTaxSources, { label: "BC Financial Services Authority", href: "https://www.bcfsa.ca/" }],
  },
  {
    slug: "strata-bare-land-strata-rural-bc",
    category: "Due Diligence",
    title: "Understanding Strata and Bare Land Strata in Rural BC",
    dek: "How strata, bare land strata, shared roads, common property, fees, bylaws, and documents can affect rural ownership.",
    intent: "For buyers considering strata homes, shared waterfront communities, bare land strata, or rural subdivisions.",
    image: headerImages.balfourKootenayLake,
    readTime: "7 min read",
    sections: [
      { title: "Strata can include more than condos", body: ["BC's strata housing information notes that strata can include condos, townhouses, duplexes, and even single family homes in bare land strata corporations. In strata housing, owners own individual strata lots and together own common property and common assets as a strata corporation." ] },
      { title: "Shared amenities need document review", body: ["In rural settings, strata or bare land strata may involve shared roads, septic, water, waterfront, trails, buildings, landscaping, or other common assets. Buyers should review bylaws, rules, fees, minutes, financials, insurance, depreciation reports where available, and responsibility for maintenance." ] },
      { title: "Shared ownership can work well if the governance fits", body: ["Shared ownership can provide access and convenience, but it also creates obligations. The question is whether the rules, costs, neighbours, and maintenance structure fit the way you want to use the property." ] },
    ],
    checklist: ["Review strata plan, bylaws, rules, fees, minutes, and financials", "Confirm what is common property or a common asset", "Ask about shared roads, waterfront, water, septic, and insurance", "Have legal advice review the documents before removing conditions"],
    questions: ["What do I own individually and what is shared?", "Who decides maintenance and cost?", "Do the bylaws fit my intended use?"],
    sources: [{ label: "BC strata housing", href: "https://www2.gov.bc.ca/gov/content/housing-tenancy/strata-housing" }, rdckSource],
  },
  {
    slug: "renovating-building-rural-kootenay-property",
    category: "Due Diligence",
    title: "Renovating or Building on Rural Kootenay Property",
    dek: "What buyers should verify before assuming they can renovate, add buildings, expand septic, or build on rural land.",
    intent: "For buyers who see future potential in land, outbuildings, guest space, studios, or major renovations.",
    image: headerImages.slocanLake,
    readTime: "7 min read",
    sections: [
      { title: "Potential needs permission", body: ["A property may feel like it has room for a shop, suite, guest cabin, studio, or major renovation, but future use depends on zoning, building permits, access, servicing, septic capacity, water, environmental constraints, and local bylaws." ] },
      { title: "RDCK building permits and inspections matter", body: ["The RDCK building department says it issues building and plumbing permits and conducts inspections across its geographic area, with some municipalities handled directly by those municipalities. Its public information notes that complete applications help processing and that timelines depend on workload." ] },
      { title: "Trades, access, and seasonality affect feasibility", body: ["Rural projects can be shaped by contractor availability, winter access, delivery routes, slope, drainage, utilities, wildfire mitigation, and site preparation. Feasible on paper does not always mean easy or fast in practice." ] },
    ],
    checklist: ["Confirm zoning and permitted uses", "Ask the correct local authority about permits", "Review septic, water, access, slope, and environmental constraints", "Price trades, timing, and seasonal access before assuming value"],
    questions: ["Is my intended use permitted?", "Which permits or inspections would be required?", "What site condition could make the project harder than expected?"],
    sources: [rdckSource, { label: "BC permits and licences", href: "https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences" }, ...riskSources],
  },
  {
    slug: "offer-strategy-luxury-homes-nelson-kootenay-lake",
    category: "Buyer Guides",
    title: "Offer Strategy for Luxury Homes in Nelson and Kootenay Lake",
    dek: "How serious buyers should think about conditions, timing, evidence, negotiation, and emotional discipline on unique properties.",
    intent: "For buyers preparing to write on an important home where the comparison set is not simple.",
    image: headerImages.nelsonLandscape,
    readTime: "6 min read",
    sections: [
      { title: "The right offer starts before the form", body: ["A strong luxury offer is built from preparation: financing clarity, legal advice, inspection plan, understanding of the seller's timing, and a clear view of what must be verified. The paperwork should reflect decisions already made, not create them in a rush." ] },
      { title: "Conditions should match the property", body: ["A rural or waterfront property may require different review than an ordinary urban home. Water, septic, access, strata, title, insurance, zoning, wildfire, and building questions can all shape the condition strategy." ] },
      { title: "Emotional discipline protects value", body: ["Unique properties can create urgency because there may be no identical replacement. That does not mean every price or term is justified. A good offer strategy separates what you love from what the market, documents, and risk profile support." ] },
    ],
    checklist: ["Clarify financing and deposit position", "Identify must-verify conditions before writing", "Understand seller timing and motivation where possible", "Decide walk-away terms before emotion rises"],
    questions: ["What do I need verified before I can own this confidently?", "Where is the seller likely flexible?", "What price is supported by evidence, not adrenaline?"],
    sources: [{ label: "BC Financial Services Authority", href: "https://www.bcfsa.ca/" }, ...bcTaxSources],
  },
];

export const guideCategories = ["Buyer Guides", "Due Diligence", "Seller Guides"] as const;

export function getGuideBySlug(slug: string): BuyerGuide | undefined {
  return buyerGuides.find((guide) => guide.slug === slug);
}
