# Consumer trip-planner / itinerary apps: feature sets and interaction patterns (benchmark as of Oct 2026)

Research date: 8 Oct 2026. Caveats: reddit.com is blocked to this crawler, so every Reddit quote below comes through a secondary aggregator and is flagged as such. Several detailed comparisons are written by competing planners (Stippl, Pilot, MonkeyTravel, Wanderlog's blog) and are flagged "(competitor)". Some official help pages returned 403 or 404; where a claim rests only on a search-result snippet, it is marked "(snippet)".

## 1. Core UI building blocks per planner (map + day timeline, drag-and-drop, day/route summary, travel time, photos, budget, checklists, collaboration, export/sharing, offline)

### Takeaway
The best-regarded planners share one core: an ordered list of days and stops next to a map that redraws as you reorder (Wanderlog, Stippl, Tripomatic, and Polarsteps' Plan tab). Everything else is layered on top: budgets, packing lists, booking import, reels, eSIM, AI chat. That outer layer is where paywalls, clutter and bugs pile up. Polarsteps is journal-first and TripIt is booking-first, so both treat the plan as secondary. AI-first tools (Mindtrip, Layla, Wonderplan, Google AI Mode Canvas) start from a chat or form and produce an editable day list with a map.

### Cited Findings

#### Wanderlog (the most-recommended map-based planner)
- Layout: an itinerary list paired with an interactive map. Trips are organised by days and places, and map pins are colour-coded by section. — [Wanderlog FAQ](https://wanderlog.com/blog/faq)
- Interaction: "you add places, drag them into days, and the map redraws". The site calls the single itinerary-and-map view "best in the category". Every stop is added by hand, "one search at a time". — [Endless Travel Plans review, Jul 2026](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review) (the site credits a "Research Team", so treat it as a secondary source)
- Travel time: distance and travel time are shown between consecutive stops, and the mode (driving, transit or walking) can be chosen per leg. "Total travel time for each day is displayed under that day's heading." Units follow the device locale. — [Wanderlog FAQ](https://wanderlog.com/blog/faq)
- Route optimisation covers "up to 15 places within one day", with a start and end point the user picks. — [Wanderlog FAQ](https://wanderlog.com/blog/faq). It is listed as Pro-only by [Endless Travel Plans](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review) and by [MonkeyTravel, Sep 2026 (competitor)](https://monkeytravel.app/blog/wanderlog-vs-mindtrip-2026).
- App Store listing (fetched Oct 2026):
  - Rating: 4.9★ from about 36K ratings, plus Apple Editors' Choice.
  - Features listed: a map-based itinerary with Google Maps integration, real-time collaboration, offline access, reservation import (by email forwarding or Gmail), route optimisation, budget tracking with expense splitting, drag-and-drop reordering, and a Trip Journal.
  - Latest version: 2.223 (30 Sep), which added "import-from-anywhere".
  - Source: [App Store](https://apps.apple.com/us/app/wanderlog-travel-planner/id1476732439)
- Free vs Pro:
  - Free covers pins, days, collaboration, manual budgets and a capped AI assistant.
  - Pro ($39.99/yr) adds an unlimited AI assistant, route optimisation, Gmail scanning, offline access and Google Maps export.
  - Sources: [MonkeyTravel (competitor)](https://monkeytravel.app/blog/wanderlog-vs-mindtrip-2026); [Endless Travel Plans](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review)
  - The App Store instead lists $5.99/month and annual options from $31.99 to $59.99. — [App Store](https://apps.apple.com/us/app/wanderlog-travel-planner/id1476732439)
- Conflict on offline access: the FAQ says the "Wanderlog app stores your trip plan so you can access it offline". — [Wanderlog FAQ](https://wanderlog.com/blog/faq). Two reviews say offline access is Pro-only. — [Endless Travel Plans](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review); [MonkeyTravel](https://monkeytravel.app/blog/wanderlog-vs-mindtrip-2026). The likely reading is that cached trip data is free and offline maps are paid, but this is not confirmed.
- Conflict on budgeting: the older FAQ says "We currently don't have a great way to track expenses". — [Wanderlog FAQ](https://wanderlog.com/blog/faq). The 2026 App Store listing includes budget tracking and splitting. — [App Store](https://apps.apple.com/us/app/wanderlog-travel-planner/id1476732439). Stippl says Wanderlog's budget "requires manual entry and expense splitting is basic". — [Stippl blog, updated 4 Sep 2026 (competitor)](https://www.stippl.io/blog/stippl-vs-wanderlog)
- Checklists are not built in. The FAQ's workaround is a note in the "Overview" tab using "[ ]" checkbox syntax. — [Wanderlog FAQ](https://wanderlog.com/blog/faq). Stippl calls Wanderlog's packing list "generic… not integrated with the itinerary". — [Stippl blog](https://www.stippl.io/blog/stippl-vs-wanderlog)
- Notes can be attached to each place. Documents are handled by pasting Google Docs links into notes. — [Wanderlog FAQ](https://wanderlog.com/blog/faq)

#### Stippl (Dutch, route-first, web and app)
- Homepage claims:
  - "map every stop, auto-calculate distances and travel times"
  - "day-by-day holiday itinerary: times, places and notes in one timeline", organised by the number of nights at each location
  - a budget tracker with cost splitting and packing lists ("smart lists that travel with you")
  - "full web app, no install needed" plus iOS and Android apps, and offline use
  - Source: [stippl.io](https://www.stippl.io/)
- Stippl's own comparison page says:
  - destinations and activities are shown "on a map per day, with clear routing between stops"
  - the budget lets you set a total, allocate it by category, track actual spend and split costs automatically
  - offline access and the AI planner are PRO features (the AI produces "a day-by-day plan in under two minutes, ready to edit and share")
  - PRO costs €24.99/yr
  - Source: [Stippl blog (competitor to Wanderlog)](https://www.stippl.io/blog/stippl-vs-wanderlog)
- App Store listing:
  - Rating: 4.6★ from 483 ratings.
  - Features listed: a multi-city route planner, an hour-by-hour day planner, budget with bill splitting, a journal, an AI itinerary generator, booking organisation, eSIM in 190+ countries, packing lists, Travel Reels and photobooks, a World Tracker, and offline mode.
  - In-app purchases: $3.99–$34.99.
  - Latest version: 3.1.5 (early Oct 2026), "reliability improvements for invites".
  - Source: [App Store](https://apps.apple.com/app/id6443617088)
- AI travel-style options: "relaxed, cultural, adventurous, off the beaten track". — [Stippl listing via AppFollow](https://apps.appfollow.io/ios/stippl-travel-planner/6443617088?country=ca) (snippet)

#### Polarsteps (journal and tracker first; planning added 2023–2026)
- Summer 2026 release (9 Jun 2026; "over 20 million travelers"):
  - web-based trip planning, "bringing the full Polarsteps planning experience to larger screens"
  - in-app flight lookup that adds flights to the itinerary
  - Explore (trending destinations), and adding discovered places directly to plans
  - control over whether live location is visible, and "route-only" sharing
  - a redesigned trip timeline, and Trip Reels with "dynamic map flyovers"
  - Source: [Polarsteps news](https://www.polarsteps.com/news/polarsteps-launches-summer-2026-release-new-tools-for-planning-privacy-and-sharing)
- 2025 planning update:
  - choose transport per leg, "by train, bus, bike, boat, or on foot"
  - forward bookings to plan@polarsteps.app
  - an AI itinerary builder that draws a multi-destination plan "directly on the map". It uses past-trip data ("Travel DNA"), editor-written content, optional prompts and Claude AI, and is opt-in.
  - Source: [Polarsteps planning update](https://news.polarsteps.com/releases/planning-update-2025); [Polarsteps summer 2025 release](https://www.polarsteps.com/news/polarsteps-summer-2025-release-is-here) (the AI-builder details come from snippets)
- Plan-tab workflow:
  - "+ Add your first destination", then search or drag a location selector on the map
  - open a planned step to set its arrival date and number of nights
  - add notes to planned steps
  - Source: [Polarsteps help, "How do I plan my trip?"](https://support.polarsteps.com/article/176-itinerary-planner) (snippet; the page returned 403)
- Accommodations sit alongside the plan, "with practical details like the number of nights and booking status visible at a glance". — [Polarsteps: Introducing accommodations](https://www.polarsteps.com/stories/introducing-accommodations-in-polarsteps) (snippet)
- Polarsteps Guides:
  - editor-written, in three categories: See & Do, Stay, Eat & Drink
  - shown on a map with filters
  - deliberately list only recommended options, which "cuts down on the volume of information"
  - Source: [On the Go Solo review](https://onthegosolo.com/polarsteps-review/) (undated)
- Ratings: 4.8 on Trustpilot, 4.5 on the App Store, 4.7 on Google Play. — [On the Go Solo](https://onthegosolo.com/polarsteps-review/) (undated)

#### Google (Trips app → Maps lists → AI Overviews, AI Mode Canvas, Ask Maps, Gemini)
- **Discontinued:** the Google Trips app shut down on 5 Aug 2019 and its functions moved into Maps and Search. — [AlternativeTo, Jun 2019](https://alternativeto.net/news/2019/6/google-s-travel-planning-app-trips-is-shutting-down-on-august-5th-2019); [TechRadar](https://techradar.com/news/journey-planning-app-google-trips-has-reached-the-end-of-the-line)
- Maps collaborative lists (Nov 2023): a list is created when you share a place. "Everyone in the group can add places… and vote with an emoji, like a heart or a thumbs down." — [TechCrunch, 15 Nov 2023](https://techcrunch.com/2023/11/15/google-maps-gets-more-social-feature-help-you-collaborate-with-friends). Google's stated aim is to "take planning out of the group chat". — [PYMNTS, 2023](https://www.pymnts.com/google/2023/google-maps-adds-collaborative-lists-and-emojis/). TechCrunch does not mention any day-by-day structure for lists.
- March 2025 launches:
  - AI Overviews itineraries, e.g. "create an itinerary for Costa Rica with a focus on nature", with photos, reviews and an expandable map. They can be exported via Docs or Gmail or saved as a Maps list. US, English only.
  - A Maps "screenshot list", where Gemini picks out places in your screenshots.
  - Gemini Gems made free, including a trip-planner Gem.
  - Source: [TechCrunch, 27 Mar 2025](https://techcrunch.com/2025/03/27/google-rolls-out-new-vacation-planning-features-to-search-maps-and-gemini)
- AI Mode "Canvas" (17 Nov 2025):
  - you describe the trip and press "Create Canvas"
  - a side panel shows real-time flight and hotel data, Maps photos and reviews, and "ideas for restaurants and activities optimized by travel time"
  - follow-up questions handle trade-offs ("closer to brunch but a bit further from hiking trails")
  - plans are reopened from AI Mode history
  - US desktop only, Labs opt-in
  - Source: [Google blog](https://blog.google/products/search/agentic-plans-booking-travel-canvas-ai-mode/)
- Ask Maps (Mar 2026):
  - a Gemini chat inside Maps, personalised "using signals such as your search history and places you've saved"
  - from a result you can book a table, save it to a list or start navigation
  - US and India, Android and iOS first
  - Source: [Travolution, 16 Mar 2026](https://www.travolution.com/news/google-maps-launches-ask-maps-and-immersive-navigation-with-gemini/)
  - A secondary write-up says it produces day-by-day road-trip itineraries with waypoints and tolls. — [Noqta](https://www.noqta.tn/en/news/google-maps-gemini-ai-ask-maps-immersive-navigation-2026). Travolution does not confirm this.
- Gemini chat was "most consistently accurate" of four AI planners in one test, but the only export was copying the chat. — [Craig Stoltz, 20 May 2025](https://craigstoltz.substack.com/p/four-ai-travel-planning-programs)

#### Roadtrippers (US road trips)
- Free plan: up to 7 waypoints. Plus ($29.99/yr): up to 150 waypoints, no ads, offline maps, extra map styles, collaborative planning, RV routing and live traffic. — [Pilot review, 23 Dec 2025 (competitor)](https://pilotplans.com/blog/roadtrippers-review); [Roadtrippers help](https://support.roadtrippers.com/hc/en-us/articles/360000831566) (snippet; 403)
- Each trip gets an automatic gas-cost estimate and a trip duration. — [Pilot](https://pilotplans.com/blog/roadtrippers-review)
- Coverage centres on the US and Canada. Sources disagree about Mexico versus Australia and New Zealand, and say there are few recommendations outside the US. — [WhistleOut](https://www.whistleout.com/CellPhones/Apps/roadtrippers-is-the-best-app-for-road-trips) (snippet). In practice it does not apply to Vietnam.

#### TripIt (booking organiser)
- Forwarding confirmations to plans@tripit.com builds a chronological "master itinerary": flights (with terminal and gate), hotels, cars, restaurant reservations and event tickets. — [Pilot TripIt review (competitor)](https://www.pilotplans.com/blog/review-of-tripit) (snippet)
- Free plan: master itinerary, email import, calendar access, basic sharing and 3 documents per trip. Pro ($49/yr): real-time flight alerts, seat and fare tracking, and 25 documents per trip. — [Pilot](https://www.pilotplans.com/blog/review-of-tripit) (snippet)

#### Inspirock (status unclear) and Trip.com (TripGenie)
- Inspirock history: $3M seed funding in 2015. — [TechCrunch, 2015](https://techcrunch.com/2015/06/24/inspirock/). Acquired by Klarna in Oct 2021. — [Emerce](https://www.emerce.nl/nieuws/klarna-koopt-online-reisplanner-inspirock). It also partnered with Skyscanner on a personalised itinerary and road-trip product (date not confirmed). — [Breaking Travel News](https://www.breakingtravelnews.com/news/article/skyscanner-trials-new-road-trip-function) (snippet)
- **2026 status unverified:** inspirock.com failed to load on two attempts (8 Oct 2026). No 2024–2026 product news was found, and the most detailed feature review dates from 2021. Treat it as dormant or legacy.
- Trip.com TripGenie (launched Jul 2023):
  - an LLM assistant taking text or voice
  - suggests sights, maps and booking links, and saves an "interactive and structured itinerary" to My Itinerary
  - handles multiple destinations; users set destinations, length of stay and whether they want a "compact or leisurely" trip
  - Trip.com says TripGenie users are 30–40% more likely to return and convert at twice the rate (company claim)
  - Sources: [Trip.com newsroom](https://www.trip.com/newsroom/tripgenie-new-features-2/); [TTG Asia, 26 Jul 2023](https://www.ttgasia.com/2023/07/26/trip-com-introduces-ai-travel-assistant-tripgenie/) (snippets)

#### Sygic Travel → Tripomatic (rebranded; still operating)
- In 2016 Sygic took a 51% stake and Tripomatic was renamed Sygic Travel. — [CzechCrunch](https://cc.cz/brnensky-cestovatelsky-startup-tripomatic-se-meni-na-sygic-travel/). It is now Tripomatic again ("Tripomatic Trip Planner & Maps"). — [App Store](https://apps.apple.com/kr/app/%ED%8A%B8%EB%A6%AC%ED%8F%AC%EB%A7%A4%ED%8B%B1-%EC%97%AC%ED%96%89-%ED%94%8C%EB%9E%98%EB%84%88/id519058033?l=en-GB)
- tripomatic.com (Oct 2026):
  - day-by-day itineraries with "drag-and-drop scheduling and smart time estimates"
  - routes for walking, public transit, car, bike and hiking trails; it "shows you the route between stops so you can plan your driving time"
  - real-time collaboration
  - AI itineraries based on interests and travel style
  - Free plan: 5 days of planned activities per month, up to 25 places per trip, with ads
  - Premium: offline maps, PDF/GPX/KML export and custom AI prompts
  - "trusted by over 3 million travelers"; rated 4.6 on iOS and 4.3 on Android
  - Source: [tripomatic.com](https://tripomatic.com/)

#### Mindtrip (AI-first, chat + map)
- In testing:
  - hotels on a map, with scrollable lists carrying photos and links
  - the itinerary "automatically updated" as you pick flights, hotels and activities
  - a calendar format, plus download and print
  - Source: [Stoltz, May 2025](https://craigstoltz.substack.com/p/four-ai-travel-planning-programs)
- Afar called it "by far the slickest and most sophisticated". Itineraries include maps, and every item has a live link with a hover image and summary. — [Afar](https://www.afar.com/magazine/we-tested-ai-travel-planning-apps-here-are-the-3-that-actually-worked?p=23) (snippet; the page did not load)
- Group Chat (Sep 2024): trip members comment, discuss and flag must-sees, and Mindtrip merges everyone's preferences into one itinerary. — [Globetrender, 24 Sep 2024](https://globetrender.com/2024/09/24/mindtrip-launches-group-chat-feature/) (snippet)
- 2026: free, but needs a Google or Apple login; booking goes through partners; it can turn screenshots into places; it is weaker at multi-city sequencing. — [MonkeyTravel (competitor)](https://monkeytravel.app/blog/wanderlog-vs-mindtrip-2026)
- Homepage: it "remembers how you like to travel", keeps "itinerary, ideas and bookings all in one place", offers direct booking, and sends price-drop and flight-change alerts. — [mindtrip.ai](https://mindtrip.ai/)
- One directory lists about 1.5M monthly users (May 2026) and 4.84/5 from 108 reviews. — [ToolDirectory](https://tooldirectory.ai/tools/mindtrip) (snippet; low-reliability aggregator)

#### Layla and Wonderplan (AI generators)
- Layla:
  - builds "full daily schedules" and lets you swap activities, change hotels or adjust routes — [AtlasAI listing](https://atlasai.ma/en/ai-tools/ask-layla-ai-travel-trip/) (snippet, promotional)
  - Trustpilot: 4.2/5 from 91 reviews on the page fetched. — [Trustpilot](https://www.trustpilot.com/review/layla.ai?page=2). Regional pages showed about 3.5–4.0 in the snippets.
- Wonderplan:
  - free "(at least for now 🤭)", with a login needed for full functionality
  - you can "reorder, add, or remove locations", and download a PDF
  - Source: [wonderplan.ai](https://wonderplan.ai/)
  - Inputs: dates, budget, travel style (solo, couple, family) and interests ("history buff, foodie, adventure seeker, relaxation connoisseur"). The budget is broken down by category. — [iWeaver review 2026](https://iweaver.ai/blog/wonderplan-ai-review-best-ai-travel-planner-alternative) (snippet; the reviewer sells a competing tool)

### Inferences
- The universal core is two linked panes: an ordered list of days and stops, and a map with pins and a route line. Reordering one redraws the other. Everything beyond that is either a monetised add-on (offline, export, optimisation, AI) or a lifestyle extra (reels, photobooks, eSIM, world tracker, journal).
- The apps split into three archetypes:
  - "stop with N nights + leg with transport mode", best for multi-city routes (Polarsteps, Stippl)
  - "places dragged into days with per-hop travel time", best for dense city days (Wanderlog, Tripomatic)
  - "chronological bookings list" (TripIt)

  A 16-day, 6–8-stop Vietnam route fits the first archetype best.
- Summary matrix drawn from the findings above ("?" means not verified):

| | Map + ordered list | Per-leg time | Nights per stop | Co-edit | Read-only link | PDF/print | Offline |
|---|---|---|---|---|---|---|---|
| Wanderlog | yes | yes, mode selectable, daily total | implicit (days) | free | "Can view" | web print | conflicting |
| Stippl | yes | auto-calculated | yes | yes | ? | ? | Pro (per Stippl) |
| Polarsteps | yes | transport mode per leg | yes | ≤5 buddies, accounts needed | followers / route-only | ? | ? |
| Tripomatic | yes | "smart time estimates" | ? | yes | ? | Premium | Premium |
| Roadtrippers | yes | drive time + gas cost | no | Plus | yes | ? | Plus |
| TripIt | ? | no | via hotel dates | ? | yes (disputed, see Q5) | ? | ? |
| Google Maps lists | pins only, unordered | no | no | yes + emoji votes | link | no | n/r |

### Gaps
- Couldn't verify whether Inspirock is live in 2026 (site unreachable; no recent news).
- Did not verify TripIt's map or route view, or Stippl's exact share modes (view-only vs edit link).
- Could not confirm whether the Wanderlog mobile app has PDF export. The FAQ describes web "Print this trip", while an App Store reviewer complains there is no downloadable or printable itinerary.
- Did not verify whether Google's "Your trips" page in Google Travel still exists in 2026.
- The Afar article, the Polarsteps and Roadtrippers help pages, and Reddit could not be fetched in full.

## 2. Customising by interests and pace: how it works and whether interest-based auto-generation is liked

### Takeaway
Interest and pace inputs almost always act once, at generation time. They take the form of checkboxes or chips (Inspirock, Wonderplan), a style choice (Stippl, TripGenie "compact or leisurely"), a free-text prompt (Google, Mindtrip, Gemini), or inferred history (Polarsteps "Travel DNA"). The evidence is consistent:
- Users like AI or auto-generated plans as a fast first draft or outline.
- Users dislike them as a finished plan, for four reasons: factual errors and hallucinations, weak handling of combined constraints, days you cannot physically walk, and engines that "readjust" the plan when you hand-edit it.

### Cited Findings
- Inspirock's form (as of 2021):
  - interests: cultural, outdoor, romantic, beach, historic, museums, shopping, wildlife
  - pace: a "fast-paced or relaxed day, or somewhere in between"
  - popular vs lesser-known activities
  - Complaints: "I find it difficult to edit my plan without the program automatically readjusting"; poor geographic clustering of attractions; no mobile app.
  - Source: [Wanderlog's Inspirock review, 9 Sep 2021 (competitor)](https://wanderlog.com/blog/?p=558)
- Trip.com TripGenie asks for destinations, length of stay and whether you "prefer a compact or leisurely trip". — [Trip.com newsroom](https://www.trip.com/newsroom/tripgenie-new-features-2/) (snippet)
- Stippl's AI takes a trip type ("relaxed, cultural, adventurous, off the beaten track"). — [AppFollow listing](https://apps.appfollow.io/ios/stippl-travel-planner/6443617088?country=ca) (snippet). It is a PRO feature. — [Stippl blog](https://www.stippl.io/blog/stippl-vs-wanderlog)
- Polarsteps infers style from past trips ("traveling with children, solo adventuring, or seeking high-adrenaline experiences"), plus optional prompts, and shows the output on the map. It is opt-in. — [Polarsteps planning update](https://news.polarsteps.com/releases/planning-update-2025); [Polarsteps summer 2025 release](https://www.polarsteps.com/news/polarsteps-summer-2025-release-is-here) (snippets)
- Google:
  - AI Overviews take free text such as "with a focus on nature". — [TechCrunch, Mar 2025](https://techcrunch.com/2025/03/27/google-rolls-out-new-vacation-planning-features-to-search-maps-and-gemini)
  - Canvas takes interests and constraints, then handles trade-offs through follow-up questions. — [Google blog, Nov 2025](https://blog.google/products/search/agentic-plans-booking-travel-canvas-ai-mode/)
- Tripomatic offers AI itineraries "based on interests and travel style", with "custom AI prompts" only in Premium. — [tripomatic.com](https://tripomatic.com/)
- How the generators perform in practice:
  - Afar: only Mindtrip, Vacay and GuideGeek produced "decent, coherent, first-draft itineraries", and all of them "at best serve as outlines for you to modify and build upon". — [Afar](https://www.afar.com/magazine/we-tested-ai-travel-planning-apps-here-are-the-3-that-actually-worked?p=23) (snippet)
  - Stoltz:
    - Mindtrip told him his trip dates were in the past, and could not satisfy "downtown AND under $300/night".
    - Kayak-on-ChatGPT needed repeated budget reminders.
    - Gemini was "most consistently accurate".
    - He tried "more than a dozen" tools to find four that "don't suck".
    - Source: [Stoltz, May 2025](https://craigstoltz.substack.com/p/four-ai-travel-planning-programs)
  - Neither Wanderlog nor Mindtrip "reliably hands you a day you can actually walk"; both may scatter stops without accounting for transit time. — [MonkeyTravel, Sep 2026 (competitor)](https://monkeytravel.app/blog/wanderlog-vs-mindtrip-2026)
  - Layla reviews mention that the AI "forgets earlier instructions" and "struggles to build a complete itinerary without errors" (2026). — [Trustpilot](https://www.trustpilot.com/review/layla.ai?page=2)
- Hallucinations:
  - BBC Travel (26 Sep 2025) reported tourists heading for a non-existent "Sacred Canyon of Humantay" in Peru, and a couple stranded on a Japanese mountain after ChatGPT gave the wrong path-opening time.
  - A 2025 Global Rescue survey found 24% of tourists use AI for trip planning.
  - Sources: [Futurism, 4 Oct 2025](https://futurism.com/artificial-intelligence/ai-hallucination-landmarks-tourists); [OECD.AI incident record](https://oecd.ai/en/incidents/2025-09-29-8b4f) (which notes the tourists paid about $160)
- Wanderlog AI reviews (paraphrased by an aggregator): one user said the output "required substantial manual customization but prevented planning paralysis"; another said the AI could not recognise destinations (early 2024). — [AI Tool Discovery](https://www.aitooldiscovery.com/guides/wanderlog-reddit) (secondary)
- What users ask for: one HN commenter wants a planner that helps "decide where to travel depending on my situation… Then, show me options." — [Show HN thread, c. Dec 2025/Jan 2026](https://news.ycombinator.com/item?id=46229488). An older HN thread treats itineraries as "guidelines", since "things dont always go quite as you plan them to". — [Ask HN, May 2017](https://news.ycombinator.com/item?id=14293019)

### Inferences
- For two friends with a fixed route, interests such as nature, hiking, culture and relaxing work better as tags or filters that highlight or annotate options than as a "regenerate itinerary" button. Regeneration is exactly where the complaints cluster: unpredictable reshuffles, errors and unwalkable days.
- Pace is best made visible rather than set by a slider. Show nights per stop, how many travel days there are, and hours in transit per leg. If a pace control exists, it should swap between a few hand-made variants (for example "relaxed: fewer stops" vs "full: more stops") rather than recompute.
- Edits should stay local and predictable: changing one stop's nights should not silently reshuffle other days. This follows directly from the Inspirock "automatically readjusting" complaint.
- A hand-curated, fact-checked set of places is a real advantage over AI output, given the documented hallucination cases.

### Gaps
- No quantitative study found comparing slider or checkbox interest inputs with free-text prompts for user satisfaction.
- The exact names of Inspirock's pace options in its UI were not confirmed.
- Direct Reddit evidence (r/travel, r/solotravel, r/VietNam) on AI-generated itineraries could not be accessed.

## 3. What reviews praise and criticise most (overload, clutter, mobile UX, features actually used)

### Takeaway
Praise centres on four things:
- seeing your places on a map grouped by day, so you avoid backtracking
- free real-time collaboration
- automatic booking import (TripIt, Wanderlog)
- curated rather than exhaustive suggestions

Complaints centre on six:
- slowdowns on long itineraries
- busy interfaces and pop-ups
- crashes and sync or date bugs (items on the wrong day, overnight flights)
- paywalls on things needed mid-trip (offline, export, route optimisation)
- forced accounts and logins
- AI inaccuracy

Power users keep falling back on simple tools: Google Docs or Sheets, Google Maps proximity, printouts.

### Cited Findings
- Wanderlog, praise:
  - the itinerary-plus-map view is "best in the category", and collaboration is "free and best in class" — [Endless Travel Plans](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review)
  - App Store reviewers: "beats making a Microsoft Excel spreadsheet"; "It's that person on your trip with the plan, without all the anxiety" — [App Store](https://apps.apple.com/us/app/wanderlog-travel-planner/id1476732439)
- Wanderlog, complaints:
  - "the app gets slower the more you add to it" and "lags and is kind of clunky" (r/travel, Aug 2024, as quoted). Trustpilot is 1.8/5 from 48 reviews, against 4.9 on the App Store. — [Endless Travel Plans](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review)
  - App Store: hotel import is "a little wonky"; there is no section for excursion reservations and no downloadable or printable itinerary (in the app); optimisation sometimes needs manual reordering. — [App Store](https://apps.apple.com/us/app/wanderlog-travel-planner/id1476732439)
  - An aggregated review analysis (undisclosed method):
    - crashes, about 5% of reviews
    - a cluttered interface, about 4%: "too busy with too many pop-ups, making me want to delete the app"
    - long itineraries, about 3%: "web version slows to a crawl with long itineraries"
    - Source: [Onclarity](https://www.onclarity.com/leaderboard/insight/wanderlog)
  - "No dedicated bus/train timeline segment"; free AI is capped (reportedly 5 messages per trip). — [AI Tool Discovery](https://www.aitooldiscovery.com/guides/wanderlog-reddit) (secondary)
- Stippl: praise for "Calendar view is absolutely fantastic", the "underrated" budget tool, and the desktop-plus-mobile combination. Complaints: crashes, overnight and layover flights importing incorrectly, "dates sometimes save to wrong day", iPad/iPhone sync needing an app restart, and lag. — [App Store](https://apps.apple.com/app/id6443617088)
- TripIt: praise for automatic itineraries from forwarded emails and flight alerts faster than airlines. Complaints: frequent forced logouts; sharing tied to Pro ("can't share the itinerary with people without them having to pay for it"); calendar sync "imports WAAAY too much stuff"; a clunky desktop UI. — [JustUseApp TripIt reviews](https://justuseapp.com/en/app/311035142/tripit-reiseplaner/reviews)
- Roadtrippers: complaints about outdated suggestions for closed restaurants and hotels, crashes, and that "making changes to automated functionalities… [is] very time-consuming and also causes the app to crash". Praise for lesser-known roadside attractions. — [Pilot (competitor)](https://pilotplans.com/blog/roadtrippers-review)
- Polarsteps as a planner offers few suggestions, and historically only one person could add content per trip. — [Wanderlog's Polarsteps review (competitor)](https://wanderlog.com/blog/?p=695) (snippet). The collaboration point is partly out of date given Travel Together (see Q5). Its Guides are praised precisely for not listing everything. — [On the Go Solo](https://onthegosolo.com/polarsteps-review/)
- What travellers say they actually do (Reddit quotes via an aggregator, unverified):
  - "Wanderlog for planning and daydreaming…, TripIt for keeping track of your actual bookings."
  - "The map is the whole point… Saved me from planning a disaster itinerary where I was crossing the city four times a day."
  - The workflow "dump everything into ideas…, use the map to see what clusters geographically, then assign to days based on location not interest" (a PSA thread with "500+ upvotes").
  - Source: [AI Tool Discovery](https://www.aitooldiscovery.com/guides/wanderlog-reddit)
- Hacker News (older):
  - Jan 2018: Google Docs holding a packing checklist, a daily outline, phone numbers, ticket URLs and passport copies; Google Sheets for logistics with companions; Rome2Rio to compare transport between destinations; Sygic Travel. One commenter calls travel sites' usability "abysmal", "especially on mobile". — [Ask HN, Jan 2018](https://news.ycombinator.com/item?id=16254516)
  - May 2017: spreadsheets plus Google Maps proximity to build days; sharing via Google Drive or printing; downloading Google Maps for offline use. — [Ask HN, May 2017](https://news.ycombinator.com/item?id=14293019)

### Inferences
- "Used" features (map grouping by day, a shared view, reservation details in one place) are a small subset of what these apps ship. "Bloat" features (reels, photobooks, eSIM, world tracker, journals, flight alerts, Gmail parsing, expense splitting) are either irrelevant to a read-mostly page or are where bugs and paywalls pile up.
- Speed and simplicity are themselves praised: complaints about slowness and pop-ups recur. A small static page with 6–8 stops avoids both by design.
- Date handling is a recurring bug class: items on the wrong day, overnight flights, layovers. Overnight sleeper trains or buses and the HCMC→Hanoi date math should be modelled explicitly, for example as a "travel night" between two stops.
- Mobile matters. Both apps and web planners are criticised on mobile, and two friends will mostly open a shared link on their phones.

### Gaps
- Could not read Reddit directly, so the claims about what r/travel, r/solotravel and r/VietNam users use rest on aggregator quotes.
- No vendor usage data (for example the share of users who use budget or packing features) was found.
- Complaints specific to clutter and feature overload are anecdotal or come from aggregators of undisclosed method (Onclarity).

## 4. How tools show "getting between places" (time, mode, distance) and the overall shape of a trip

### Takeaway
Tools work at two levels:
1. Legs between multi-night stops. Polarsteps and Stippl show a transport mode per leg, nights per stop and a route line on the map.
2. Hops within a day. Wanderlog and Tripomatic show time and distance per hop with a selectable mode, a daily total, and a "Directions" hand-off to Google Maps.

Road-trip tools add trip-level distance, time and fuel cost. AI planners are weakest here: they often ignore transit time and clustering.

### Cited Findings
- Wanderlog:
  - distance and travel time between consecutive stops, with a mode per leg (driving, transit, walking)
  - "Total travel time for each day is displayed under that day's heading"
  - a "Directions" button between two places opens Google Maps
  - optimisation for up to 15 places per day
  - Source: [Wanderlog FAQ](https://wanderlog.com/blog/faq)
  - "neighbourhood clustering to avoid backtracking" — [Stippl blog (competitor)](https://www.stippl.io/blog/stippl-vs-wanderlog)
- Stippl auto-calculates distances and travel times between stops, organises the trip by nights per location, and draws a map per day "with clear routing between stops". — [stippl.io](https://www.stippl.io/); [Stippl blog](https://www.stippl.io/blog/stippl-vs-wanderlog)
- Polarsteps:
  - a transport mode per leg ("train, bus, bike, boat, or on foot") — [Polarsteps planning update](https://news.polarsteps.com/releases/planning-update-2025)
  - each planned step has an arrival date and number of nights — [Polarsteps help](https://support.polarsteps.com/article/176-itinerary-planner) (snippet)
  - stays show nights and booking status at a glance — [Polarsteps accommodations](https://www.polarsteps.com/stories/introducing-accommodations-in-polarsteps) (snippet)
  - flights can be added to the itinerary (2026) — [Polarsteps summer 2026](https://www.polarsteps.com/news/polarsteps-launches-summer-2026-release-new-tools-for-planning-privacy-and-sharing)
- Tripomatic offers "smart time estimates" and routes by walking, public transit, car, bike or hiking trail; it "shows you the route between stops so you can plan your driving time". — [tripomatic.com](https://tripomatic.com/)
- Roadtrippers shows trip duration and an automatic gas-cost estimate, with a waypoint cap (7 free, 150 on Plus). — [Pilot](https://pilotplans.com/blog/roadtrippers-review)
- Google Canvas suggests restaurants and activities "optimized by travel time". — [Google blog](https://blog.google/products/search/agentic-plans-booking-travel-canvas-ai-mode/). Ask Maps targets queries like "scenic stops on a multi-stop itinerary". — [Travolution](https://www.travolution.com/news/google-maps-launches-ask-maps-and-immersive-navigation-with-gemini/)
- Weak spots:
  - AI planners "may scatter stops across cities without accounting for transit time" — [MonkeyTravel](https://monkeytravel.app/blog/wanderlog-vs-mindtrip-2026)
  - Mindtrip is weaker at multi-city sequencing — [MonkeyTravel](https://monkeytravel.app/blog/wanderlog-vs-mindtrip-2026)
  - Inspirock clustered attractions poorly — [Wanderlog 2021](https://wanderlog.com/blog/?p=558)
  - Wanderlog lacks a dedicated bus or train segment — [AI Tool Discovery](https://www.aitooldiscovery.com/guides/wanderlog-reddit) (secondary)
- Practitioners: Rome2Rio to compare transport options between destinations. — [HN 2018](https://news.ycombinator.com/item?id=16254516). Days are planned "by looking at proximity of places in Google Maps". — [HN 2017](https://news.ycombinator.com/item?id=14293019)

### Inferences
- For HCMC → Hanoi over 16 days, the leg between cities is the key unit. Each leg needs its mode (domestic flight, sleeper train, sleeper bus, car or private transfer), an approximate duration, and a flag when it eats a day or a night. The Polarsteps/Stippl model ("stop × nights" plus "leg × mode × time") fits better than Wanderlog's model of hops within a day.
- The trip's overall shape reads best from two views:
  - a map with a south-to-north route line and numbered stops
  - a horizontal strip of days, coloured by stop and with travel days marked, so nights per place and pace are visible at a glance
- Without a backend, routes should not be computed. Store hand-checked durations, and link out to Google Maps directions for each leg or place, as Wanderlog's "Directions" button does.

### Gaps
- No source showed how these apps visually render overnight sleeper transport or multi-modal legs (for example a bus plus a ferry).
- Whether Polarsteps and Stippl show numeric leg durations or only the mode was not confirmed beyond Stippl's "auto-calculate" claim.
- Vietnam-specific transport times and seasonal factors (December weather by region) were outside this scope and were not researched.

## 5. Sharing formats, and what people use to share a plan with a travel companion

### Takeaway
Three sharing formats exist:
1. Collaborative editing: Wanderlog "Can edit", Polarsteps Travel Together (up to 5 buddies, accounts needed), Stippl invites, Roadtrippers Plus, Google Maps collaborative lists with emoji votes, Mindtrip group chat.
2. A read-only link: Wanderlog "Can view", TripIt share links, Polarsteps followers and route-only sharing.
3. A static export: print or PDF from Wanderlog (web), Tripomatic (Premium), Wonderplan and Mindtrip; Docs or Gmail export from Google AI Overviews.

Required accounts and logins are a recurring friction, and even large apps advise against simultaneous editing. Low-tech sharing (Docs, Sheets, Drive, printouts) remains common among experienced planners.

### Cited Findings
- Wanderlog: "tap 'Share' and select 'Can edit'" or "'Can view'"; privacy can be Public, Friends-only or Private (link only); "Print this trip" lets you save a PDF on the web; Google Maps export is available. — [Wanderlog FAQ](https://wanderlog.com/blog/faq). Google Maps export is Pro-only per [Endless Travel Plans](https://www.endlesstravelplans.com/guides/planning-tools/wanderlog-review).
- Polarsteps Travel Together:
  - "invite up to five" travel buddies
  - "you and your buddies can add, edit, and remove planned steps together"
  - buddies "need to have a Polarsteps account"
  - Polarsteps recommends "only one person… makes changes to the planned steps at a time" and syncing before the next person edits
  - Source: [Polarsteps help: What is Travel Together](https://support.polarsteps.com/hc/en-us/articles/24266789457170-What-is-Travel-Together); [Can we plan a trip with Travel Together](https://support.polarsteps.com/hc/en-us/articles/24266937975570-Can-we-plan-a-trip-with-Travel-Together) (snippets)
  - Route-only sharing and live-location visibility settings arrived in Jun 2026. — [Polarsteps summer 2026](https://www.polarsteps.com/news/polarsteps-launches-summer-2026-release-new-tools-for-planning-privacy-and-sharing)
- TripIt, conflicting accounts:
  - shareable links that companions "see… without needing a TripIt account" — [Pilot TripIt review](https://www.pilotplans.com/blog/review-of-tripit) (snippet)
  - versus a user complaint: "can't share the itinerary with people without them having to pay for it" — [JustUseApp](https://justuseapp.com/en/app/311035142/tripit-reiseplaner/reviews)
- Stippl has a shared itinerary with live updates. — [Stippl blog](https://www.stippl.io/blog/stippl-vs-wanderlog). Its latest release fixed "reliability… for invites". — [App Store](https://apps.apple.com/app/id6443617088)
- Roadtrippers lets you "share your itineraries with your friends and family and grant access to edit trips"; co-planning is a Plus feature. — [Pilot](https://pilotplans.com/blog/roadtrippers-review)
- Tripomatic offers sharing and real-time collaboration, plus PDF/GPX/KML export in Premium. — [tripomatic.com](https://tripomatic.com/)
- Wonderplan offers a PDF download. — [wonderplan.ai](https://wonderplan.ai/). Mindtrip offers download, print and calendar format. — [Stoltz](https://craigstoltz.substack.com/p/four-ai-travel-planning-programs). Gemini can only be shared by copying the chat. — [Stoltz](https://craigstoltz.substack.com/p/four-ai-travel-planning-programs)
- Google: Maps lists are shareable and collaborative, with emoji voting, "to take planning out of the group chat". — [TechCrunch 2023](https://techcrunch.com/2023/11/15/google-maps-gets-more-social-feature-help-you-collaborate-with-friends); [PYMNTS](https://www.pymnts.com/google/2023/google-maps-adds-collaborative-lists-and-emojis/). AI Overviews itineraries export to Docs, Gmail or a Maps list. — [TechCrunch 2025](https://techcrunch.com/2025/03/27/google-rolls-out-new-vacation-planning-features-to-search-maps-and-gemini)
- Mindtrip Group Chat merges each traveller's preferences into one itinerary. Its research found 90% of respondents usually travel with at least one other person and 67% in groups of two to four. — [Globetrender, Sep 2024](https://globetrender.com/2024/09/24/mindtrip-launches-group-chat-feature/) (snippet)
- Account friction: both Wanderlog and Mindtrip "require account creation before users can evaluate output quality". — [MonkeyTravel (competitor)](https://monkeytravel.app/blog/wanderlog-vs-mindtrip-2026). Wonderplan needs a login for full functionality. — [wonderplan.ai](https://wonderplan.ai/)
- What practitioners use with companions: Google Sheets for logistics; TripCase to share itineraries with companions; Google Docs or Drive; printouts. — [HN 2018](https://news.ycombinator.com/item?id=16254516); [HN 2017](https://news.ycombinator.com/item?id=14293019)

### Inferences
- For a no-account, no-backend page, the share format should be a URL: a read-only view by default, with tweaks encoded in the URL (hash or query) and a "copy link" button so one friend can send their variant back. This combines Wanderlog's "Can view" with a fork, avoids account friction, and sidesteps concurrent editing, which even Polarsteps tells users to avoid.
- Google Maps' emoji voting suggests a lightweight collaboration primitive for two people: 👍 / 👎 / "maybe" on optional activities or alternative stops, stored in the link, rather than full co-editing.
- Print or PDF should come free through print-friendly CSS, since printing and PDF export persist across tools and user habits. Per-place and per-leg "open in Google Maps" links replace the paid "export to Google Maps" feature.
- Two companions are the core use case (67% travel in groups of two to four, per Mindtrip's research). Heavy multi-user features (roles, comments, expense splitting) are unnecessary.

### Gaps
- No data on how often users share read-only versus editable links, or on what share of plans end up in Docs or WhatsApp rather than the app.
- Stippl's precise sharing options (public view-only link vs invite-only) were not confirmed.
- TripIt's free-tier sharing terms in 2026 conflict between sources.
- Reddit threads where travellers describe sharing with a single companion could not be accessed directly.
