export type AreaIntelligence = {
  thesis: string;
  luxuryBuyer: string;
  dailyLife: string[];
  propertyTypes: string[];
  microPockets: { name: string; body: string }[];
  dueDiligence: { label: string; body: string }[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

export const areaIntelligence: Record<string, AreaIntelligence> = {
  nelson: {
    thesis:
      "Nelson is for buyers who want a real mountain town around the property: restaurants, heritage streets, lake access, schools, arts, and Whitewater ski days without giving up daily convenience.",
    luxuryBuyer:
      "The strongest Nelson searches usually start with one of three priorities: walkability near Baker Street, elevated city-and-lake views, or a quieter address close enough to town that ownership still feels easy.",
    dailyLife: [
      "Baker Street gives the city its daily rhythm, with restaurants, coffee, shops, and heritage buildings close together.",
      "Lakeside Park and the West Arm of Kootenay Lake make summer ownership feel active, not decorative.",
      "Whitewater Ski Resort is the winter anchor for buyers who want a serious ski lifestyle without buying in a resort village.",
    ],
    propertyTypes: [
      "Restored heritage homes near downtown, Uphill, and Fairview",
      "Larger view homes in elevated pockets like upper Fairview and Rosemont",
      "Walk-to-town homes with parking, outdoor space, and renovation upside",
      "Lake-adjacent homes around John's Walk, Sproat Drive, and Fairview approaches",
    ],
    microPockets: [
      { name: "Baker Street and Downtown", body: "Best for buyers who want restaurants, culture, and a walkable daily routine." },
      { name: "Fairview and Lakeside", body: "Often prized for lake access, older grand homes, and practical proximity to schools, parks, and the bridge." },
      { name: "Uphill and Rail Trail", body: "Character homes, steeper streets, and quick access to the trail network above town." },
      { name: "Rosemont", body: "Quieter residential feel, golf proximity, and larger lots compared with the downtown core." },
    ],
    dueDiligence: [
      { label: "Grade and parking", body: "Nelson streets can be steep. Confirm parking, winter access, and whether the daily walk still works in February." },
      { label: "Heritage condition", body: "Character can be valuable, but older homes need careful review of envelope, electrical, heating, drainage, and renovation history." },
      { label: "Sun and view exposure", body: "Two similar homes can live differently depending on elevation, tree cover, and when the sun drops behind the mountain." },
    ],
    faqs: [
      { question: "Where are Nelson BC luxury homes usually found?", answer: "Luxury homes appear across Nelson, but Luke's own local writing highlights John's Walk and Sproat Drive, Fairview, Uphill, Rosemont, Johnstone Road, and the North Shore as important luxury search areas." },
      { question: "Is Nelson better for full-time living or a second home?", answer: "Nelson can support both. Buyers who want restaurants, culture, schools, lake access, and Whitewater skiing usually see it as more than a seasonal address." },
      { question: "What should luxury buyers inspect first in Nelson?", answer: "Start with street grade, parking, renovation history, sun exposure, lake or mountain view protection, and whether the home fits the winter routine as well as the summer version." },
    ],
    cta: "Ask Luke which Nelson pocket fits your search",
  },
  "north-shore": {
    thesis:
      "The North Shore is for buyers who want the lake to feel immediate while keeping Nelson close. The decision is rarely just waterfront or not. It is privacy, shoreline, road rhythm, and daily convenience together.",
    luxuryBuyer:
      "Million-dollar North Shore buyers usually compare view, beach access, dock potential, highway exposure, and how quickly the address gets them back to Nelson for dinner, work, or services.",
    dailyLife: [
      "Highway 3A is the spine, running along the north side of the lake toward Balfour.",
      "Kokanee Creek Provincial Park adds beach, campground, hiking, and seasonal salmon-spawning appeal nearby.",
      "The West Arm gives the area its boating, kayaking, sailing, and lakefront identity.",
    ],
    propertyTypes: [
      "Waterfront homes with beach access or dock questions to investigate",
      "View homes facing Nelson, the bridge, or the West Arm",
      "Private homes tucked away from the road with stronger arrival privacy",
      "Second homes where maintenance, winter access, and local service access matter",
    ],
    microPockets: [
      { name: "Bridge-adjacent and Johnstone Road", body: "Close to Nelson, strong views, and the easiest city access from the north side of the lake." },
      { name: "Six Mile and Longbeach direction", body: "More distance from town, more lake lifestyle, and more need to judge road rhythm carefully." },
      { name: "Kokanee Creek area", body: "Beach, camping, trails, and park proximity shape the feel of the nearby addresses." },
      { name: "Toward Balfour", body: "The further east the search moves, the more buyers should compare North Shore convenience against main-lake privacy." },
    ],
    dueDiligence: [
      { label: "Shoreline orientation", body: "Confirm morning and evening sun, swimming usability, seasonal water levels, and how the shoreline actually feels at the property." },
      { label: "Highway exposure", body: "Some addresses feel private from the lake but exposed from the road. Visit at different times before judging." },
      { label: "Dock and access questions", body: "Do not assume dock potential. Confirm shoreline rules, stairs, slope, access, and maintenance realities before paying for the view." },
    ],
    faqs: [
      { question: "Is North Shore Nelson BC real estate mostly waterfront?", answer: "The North Shore is strongly associated with lakefront and view property, but buyers still need to compare shoreline access, road exposure, privacy, and how each address connects back to Nelson." },
      { question: "Who is the North Shore best for?", answer: "It fits buyers who want lakefront privacy, boating, views, and a quieter home base while keeping Nelson close enough for regular dinners, work, or services." },
      { question: "What can make a North Shore waterfront home harder to own?", answer: "Highway noise, steep water access, dock uncertainty, winter maintenance, and service distance can change the ownership experience even when the listing photos look exceptional." },
    ],
    cta: "Ask Luke about North Shore waterfront",
  },
  balfour: {
    thesis:
      "Balfour is for buyers who want the West Arm to open into a bigger lake life: deeper water, ferry rhythm, golf, marina thinking, and second-home privacy that feels more removed than Nelson proper.",
    luxuryBuyer:
      "The Balfour buyer usually cares about main-lake feel, moorage questions, seasonal guests, and whether ferry access is part of the charm or part of the friction.",
    dailyLife: [
      "Balfour sits where the West Arm meets the main body of Kootenay Lake.",
      "The Kootenay Lake ferry connects Balfour with Crawford Bay and the East Shore.",
      "Golf, marina access, and deep-water thinking shape the second-home conversation here.",
    ],
    propertyTypes: [
      "Deep-water waterfront homes and legacy lake properties",
      "Second homes built around guests, boats, and long summer stays",
      "Golf and marina-adjacent homes where recreation is part of the address",
      "Private estates where service access and winter care need planning",
    ],
    microPockets: [
      { name: "Balfour village and ferry area", body: "Best for buyers who want services, ferry access, and a recognizable lake-community hub." },
      { name: "Queens Bay direction", body: "Often considered by buyers comparing privacy, views, and a quieter shoreline feel." },
      { name: "Main-lake waterfront", body: "More open-water exposure, stronger lake identity, and more due diligence around weather, docks, and access." },
      { name: "Golf and marina pockets", body: "For buyers who want recreation close by rather than a purely private retreat." },
    ],
    dueDiligence: [
      { label: "Ferry rhythm", body: "The ferry can be a lifestyle feature, but buyers should understand timing, guest logistics, and how often they need the East Shore connection." },
      { label: "Moorage and water depth", body: "Confirm practical boat access, dock condition, shoreline exposure, and seasonal water behavior before assigning value." },
      { label: "Seasonal upkeep", body: "Second homes need a plan for winter checks, trades, snow, security, and guest turnover." },
    ],
    faqs: [
      { question: "Why do buyers look at Balfour BC waterfront homes?", answer: "Balfour appeals to buyers who want a bigger Kootenay Lake feel, ferry access, golf, marina proximity, and the possibility of deeper-water waterfront ownership." },
      { question: "Is Balfour better than the North Shore for a second home?", answer: "It depends on the buyer. North Shore usually keeps Nelson closer. Balfour can feel more like a lake retreat, especially for buyers who value marina, ferry, golf, and main-lake access." },
      { question: "What should be checked before buying in Balfour?", answer: "Review dock and shoreline details, water access, ferry rhythm, service availability, winter maintenance, and whether the address suits full-time use or seasonal ownership." },
    ],
    cta: "Compare Balfour and North Shore",
  },
  blewett: {
    thesis:
      "Blewett is for buyers who want land, privacy, workshops, gardens, and a rural feel without giving up Nelson completely. The luxury is space that still has a practical town connection.",
    luxuryBuyer:
      "Acreage buyers need to think beyond pretty land. Water, access, outbuildings, exposure, insurance, internet, and winter maintenance all decide whether the property feels freeing or heavy.",
    dailyLife: [
      "Blewett sits west of Nelson, with wooded privacy and larger parcels compared with the city core.",
      "Taghum and Morning Mountain help define the nearby outdoor rhythm.",
      "For families and estate buyers, the appeal is room to live, store, garden, build, and host without leaving Nelson too far behind.",
    ],
    propertyTypes: [
      "Acreage homes with mature timber, gardens, and outbuildings",
      "Family estates with room for workshops, guests, animals, or storage",
      "Rural homes where privacy matters more than walkability",
      "Land-rich properties that need careful water, septic, and access review",
    ],
    microPockets: [
      { name: "Taghum side", body: "Closer to river and beach access, useful for buyers comparing water recreation with acreage." },
      { name: "Blewett Road", body: "The classic acreage search corridor, where lot shape, exposure, and driveway practicality matter." },
      { name: "Morning Mountain side", body: "Outdoor access and forested privacy can be the draw, but winter access still deserves attention." },
      { name: "Nelson-edge acreage", body: "For buyers who want space but still need the town drive to feel simple." },
    ],
    dueDiligence: [
      { label: "Water and septic", body: "Acreage value depends on practical systems. Confirm water source, quantity, treatment, septic condition, and maintenance history." },
      { label: "Road and driveway", body: "A beautiful rural property can become a burden if winter access, slope, or driveway maintenance is underestimated." },
      { label: "Outbuildings and insurance", body: "Workshops, barns, and older structures need review for condition, permitted use, electrical, and insurability." },
    ],
    faqs: [
      { question: "Is Blewett good for acreage near Nelson BC?", answer: "Yes, Blewett is one of the natural searches for buyers who want acreage, privacy, and a rural feel while staying within reach of Nelson." },
      { question: "What makes Blewett different from Nelson?", answer: "Nelson is about walkability and town rhythm. Blewett is about land, privacy, outbuildings, gardens, and a more rural ownership pattern." },
      { question: "What should acreage buyers verify first?", answer: "Water, septic, road maintenance, winter access, internet, insurance, outbuildings, and actual drive time should be checked before falling in love with the setting." },
    ],
    cta: "Plan an acreage search near Nelson",
  },
  "slocan-valley": {
    thesis:
      "The Slocan Valley is for buyers who want the quiet version of Kootenay luxury: river frontage, timber, garden land, smaller communities, and retreat property that feels slower on purpose.",
    luxuryBuyer:
      "Retreat buyers need clarity on distance, services, internet, river exposure, winter driving, and whether the quiet that feels magical for a weekend still works for real life.",
    dailyLife: [
      "The valley follows Highway 6 north of Nelson through small communities toward Slocan Lake and New Denver.",
      "River, lake, timber, gardens, and slower community rhythm are the core attractions.",
      "Buyers often compare the valley when they want more space and quiet than Nelson or the North Shore can offer.",
    ],
    propertyTypes: [
      "Riverfront and rural homes with privacy and land",
      "Timber-frame and character homes suited to retreat ownership",
      "Garden, studio, and guest-cabin properties for slower living",
      "Second homes where service distance, weather, and internet need early review",
    ],
    microPockets: [
      { name: "South Slocan and Crescent Valley", body: "Closer to Nelson, useful for buyers who want valley quiet without going too far north." },
      { name: "Winlaw", body: "Small-community feel, rural privacy, and a more removed daily rhythm." },
      { name: "Slocan", body: "Closer to Slocan Lake, with a stronger retreat and lake-country identity." },
      { name: "New Denver", body: "A quieter lake-town option for buyers considering the north end of the valley." },
    ],
    dueDiligence: [
      { label: "Distance and services", body: "Confirm drive times, trades, medical access, groceries, and whether the distance works in winter as well as summer." },
      { label: "River and land exposure", body: "Waterfront and rural land need review for flood history, drainage, wildfire interface, and usable acreage." },
      { label: "Connectivity", body: "Internet and cell service can shape whether the property works for remote work, guests, or full-time living." },
    ],
    faqs: [
      { question: "Who should consider Slocan Valley real estate?", answer: "The valley fits buyers looking for retreat property, river or lake access, timber homes, rural privacy, and a quieter community rhythm north of Nelson." },
      { question: "Is the Slocan Valley too far for Nelson buyers?", answer: "It depends on the lifestyle. Buyers who need frequent Nelson access usually focus closer to South Slocan and Crescent Valley. Buyers who want more retreat value may look farther north." },
      { question: "What should retreat buyers verify?", answer: "Confirm winter driving, service distance, internet, cell coverage, river or land exposure, water systems, and how the property will be cared for when owners are away." },
    ],
    cta: "Discuss Slocan Valley retreat property",
  },
};
