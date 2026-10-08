# Tour operator and publisher itinerary pages: anatomy, "customise this trip" mechanisms, seasonality, transport and photography (Vietnam focus, observed 8 Oct 2026)

Scope note: pages were read with WebFetch and, where WebFetch was blocked or the page is JS-rendered (Audley returned HTTP 403; Lonely Planet Journeys, Selective Asia, Bamba), in a real browser with screenshots on 8 Oct 2026. "Rendered" means seen on screen, not only in the page text.

## 1. What is the page anatomy of leading itinerary pages (premium tailor-made, adventure, editorial, Vietnam specialists)?

### Takeaway
Almost every strong page follows the same order. It opens with a hero photo and a strip of 3–4 key facts (length, "from" price, when to go, sometimes style or activity level). Then comes a short highlights list, then a route map. The best version is a sticky map tied to a day list that is collapsed by default and has an "Expand all" control. The day-by-day section shows place → place, where you sleep, meals and optional extras. After that come accommodation per stop, a "When to go" section, inclusions, sibling routes and an enquiry button. Premium tailor-made operators (Audley, Black Tomato, Selective Asia, Steppes) tend to write by stop, in narrative, with named hotels and a soft "make it yours" message. Group adventure operators (Intrepid, G Adventures, Exodus) use dense per-day fields: accommodation, meals, included vs optional activities, and activity level.

### Cited Findings

#### Audley Travel: "Highlights of Vietnam: Celebrating 30 Years" (19 days from £7,430pp)
- Hero: a large serif title over a full-width photo with "19 days from £7,430pp". A "Where is this?" pill on the hero opens to name the photo's location ("Mekong Delta, Vietnam", linking to the Mekong Delta guide). Rendered. — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- A sticky sub-nav reads "Jump to: Day-to-day Itinerary · Reviews · When to go" with "Vietnam trip ideas" on the right. The header has a phone number and a "REQUEST A QUOTE" button. — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- "Tour highlights" is 6 one-line bullets, for example "Marvel at the sculpted limestone karsts of Bai Tu Long Bay." and "Relax on one of Vietnam's scenic islands." Next to it sits a "Price includes:" checklist box ("Scheduled international and domestic flights / In-destination transfers / Activities and excursions as detailed / All accommodation / 24-hour support while you travel") and "MAKE AN ENQUIRY". — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- The section is labelled "Itinerary idea" and has "Close all / Expand all" controls. It uses a split layout (rendered):
  - Left: round numbered "DAY" badges with the place name and a chevron (e.g. "11 Mekong Delta", "13 Phu Quoc").
  - Right: a sticky Mapbox map with blue pins, a red pin for the highlighted stop, and a dashed route line.
  - An expanded day shows a narrative paragraph, pin chips for from → to (e.g. "Mekong Delta" → "Phu Quoc"), "Stay at La Veranda Resort", and a 3-photo carousel with ‹ › arrows.
  - Source: [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- The day list includes the flight days at each end ("Day 1 International outbound flight", "Day 19 … Arrive home today to complete your journey."). It also has an explicit rest day: "Day 14 Phu Quoc — Enjoy a full day relaxing at the resort." Day 15 offers optional ideas ("Should you wish to explore beyond the resort, Phu Quoc offers… pepper farms… pearl harvesting… snorkel"). — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- A separate "Accommodation" accordion groups stays by stop with night counts ("Hanoi 2 nights", "Gulf of Tonkin 2 nights", "Hue 2 nights", "Hoi An 3 nights", "Mekong Delta 2 nights", "Phu Quoc 3 nights", "Ho Chi Minh City 2 nights"). Each lists the proposed hotel, 2–3 alternatives and "View more accommodation in …". — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- Further down:
  - A Trustpilot block ("Excellent TrustScore 4.8 | 5043 of reviews").
  - "Contact a Vietnam specialist": "The specialist who designs your trip to Vietnam will have explored the country many times and, in some cases, lived there." with "REQUEST A QUOTE" and "Watch our tailor-made process".
  - A "When to go" widget (see Q3).
  - "Other tours you may be interested in" cards (e.g. "Classic Vietnam tour / Vietnam / 17 days from £4,615pp / View this tour").
  - Source: [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)

#### Black Tomato: "Ultimate Vietnam: A Luxury Holiday from Top to Tail"
- The H1 is centred, condensed and uppercase. Below it sit three coloured labels:
  - WHEN "January - April"
  - PRICE "From £9,250pp excl. flights (based on 2 ppl sharing)", with an info tooltip: "Price includes all accommodation, experiences, guiding and transfers… Based on travelling off-peak and may increase if travelling over peak season."
  - HOW LONG "14 nights ideal length"
  - A wide landscape photo of Ha Long Bay follows (rendered). — [Black Tomato](https://www.blacktomato.com/destinations/vietnam/vietnam-north-south/)
- There is no route map. A DOM check found no map element or map iframe. — [Black Tomato](https://www.blacktomato.com/destinations/vietnam/vietnam-north-south/)
- The body is organised by stop, not by day. Each stop has an evocative H2: "THE HUB OF THE BUZZ" (Hanoi), "SAIL AWAY IN HA LONG", "THE PERSONAL TOUCH IN HUE", "THERE'S NOWHERE LIKE HOI AN", "ZIPPING THROUGH HO CHI MINH", "THE PERFECT ENDING" (Con Dao). Named hotels such as Four Seasons Nam Hai, Park Hyatt and Six Senses Con Dao appear inside the narrative. — [Black Tomato](https://www.blacktomato.com/destinations/vietnam/vietnam-north-south/)
- After that come "WHERE TO REST YOUR HEAD" (hotel cards, "View Hotel" / "View all") and "SIMILAR EXPERIENCES". A sticky bottom bar reads "SO, READY TO START? SPEAK TO OUR TRAVEL EXPERTS TO START PLANNING YOUR TRIP — ENQUIRE NOW", and a newsletter pop-up overlays the page (rendered). — [Black Tomato](https://www.blacktomato.com/destinations/vietnam/vietnam-north-south/)

#### Selective Asia: "Top to Tail" journey
- Pre-built routes are now called "Journeys". The Vietnam nav reads Journeys · Places · Accommodation · Experiences · Family · When to go · Blog & More. — [Selective Asia Vietnam hub](https://www.selectiveasia.com/vietnam-holidays/). The old `/vietnam-holidays/tours` URL returned 404 — [WebFetch of selectiveasia.com/vietnam-holidays/tours](https://www.selectiveasia.com/vietnam-holidays/tours)
- Header facts: "Culture & Coastlines" (style tag), "Price fr. £2,490", "Ideal duration 14 days", "Best time to go - November - May", "Everything we do is custom made by real Asia experts...", "View route map", "Call us on 01273 670 001 / Get in touch". — [Selective Asia Top to Tail](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
- "Journey highlights" has three themed blocks ("Characterful cities", "Impressive scenery", "Beach breaks"). Then "The detailed journey…" runs as six stop essays with alliterative subheads ("Narrow streets & delicious eats", "Jagged limestone & junk boats", "Vietnam's Imperial majesty", "Historic houses & elegant eateries", "Beautiful beaches & idyllic islands", "Historic Saigon; modern Ho Chi Minh"). There are no day numbers. — [Selective Asia Top to Tail](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
- "A note on cost..." explains what the guide price assumes: "2 nights in Hanoi, 2 nights on Bai Tu Long Bay, 2 nights in Hue and 2 in Hoi An, 2 nights in Ho Chi Minh City before spending your final 3 nights on the beaches of Phu Quoc; all in our favourite mid-range hotels." — [Selective Asia Top to Tail](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
- The page ends with:
  - Sibling journey cards, each with "Price fr." and "Ideal duration".
  - "Place to stay" cards tagged by tier ("Deluxe", "Mid-range", "Luxury", "Mid-range eco").
  - "The Selective Asia difference" checklist.
  - Source: [Selective Asia Top to Tail](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)

#### Steppes Travel: "Highlights of Vietnam"
- Header: "BESPOKE HOLIDAY IDEA" label, "14 Days", "Prices Start from £3,450pp (ex. flights)". — [Steppes](https://www.steppestravel.com/holiday-ideas/highlights-of-vietnam/)
- The itinerary has "Map View" / "List View" tabs. Day entries use ranges and route strings, each with a single line of text (e.g. "Days 3-4: Hanoi - Halong Bay", "Day 5: Halong Bay - Hanoi - Hue — Travel from Halong Bay to Hue via Hanoi."). — [Steppes](https://www.steppestravel.com/holiday-ideas/highlights-of-vietnam/)
- Accommodation has its own section. The page also includes a Jan–Dec "When to travel" calendar, "Why we like it", "Why Steppes?" (Trustpilot, Condé Nast, B Corp) and "Holiday Inspiration" cards. — [Steppes](https://www.steppestravel.com/holiday-ideas/highlights-of-vietnam/)
- The destination hub names its specialists with bios ("Meet our experts": Clare Wiggins, Paul Craven) and shows hotel cards with a "£££££" price signal. — [Steppes Vietnam](https://www.steppestravel.com/destinations/south-east-asia/vietnam/)

#### Intrepid Travel: "18 to 35s Essential Vietnam" (Hanoi → Ho Chi Minh City)
- Facts block: "12 days", "Start: Hanoi, Vietnam / End: Ho Chi Minh City, Vietnam", group "1 to 16", "Ages Min 18 - Max 35", "Style: Basic", "Theme: 18 to 35s", a physical rating with a "More info on physical ratings" link, trip code, and "4.9 / 429 reviews". The price only appears under "Choose a departure to explore". — [Intrepid](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239)
- A static map sits among the hero photos, with an "All photos (13)" link. "Why you'll love this trip" has 5 bullets. — [Intrepid](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239)
- Days are headed "Day 1 • Hanoi". Each day has fixed fields: Accommodation (e.g. "Hotel (1 night)"), Meals ("There are no meals included on this day"), Included activities, Optional activities (priced in USD/VND) and Special information. — [Intrepid](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239)
- "Before you book you should know" contains "Is this trip right for you?". "What's included" counts items ("9 Activities", "3 Meals"). There is also a carbon line: "This trip generates 52 kg of CO2-e per person per day". — [Intrepid](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239)
- Intrepid also sells "Real Vietnam", a 15-day trip from Ho Chi Minh City to Hanoi, the same direction as the user's route. This comes from a search-result summary; the page was not opened. — [WebSearch result set incl. Intrepid trip notes](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239/tripnotes)

#### G Adventures: "Vietnam: Roadtrip Hanoi to Ho Chi Minh City"
- Facts: "15 days", "From Hanoi to Ho Chi Minh City", "Travel Style: 18-to-Thirtysomethings", "Service Level: Basic", "Physical Grading: 2 - Light", "Trip Type: Small Group", minimum age 15, "Trees for Days", "Ripple Score". The page also says "There are no departure dates currently available for the rest of this season." — [G Adventures](https://www.gadventures.com/trips/vietnam-roadtrip-hanoi-to-ho-chi-minh-city/AVHH/)
- The map is titled "Map of Vietnam: Roadtrip…". The itinerary is paged "Days 1 - 12" / "Days 13 - 15". Highlight cards carry a status line ("Oodles of Noodles — Included on Day 8" vs "Caving in Phong Nha — Available on Day 5 for an additional cost"). — [G Adventures](https://www.gadventures.com/trips/vietnam-roadtrip-hanoi-to-ho-chi-minh-city/AVHH/)
- The trip-level summary reads "Hotels (12 nts), beach resort (2 nts)", "14 breakfasts, 1 lunch", "Private vehicle, paddle boat, walking", with a "Download Itinerary PDF" link. — [G Adventures](https://www.gadventures.com/trips/vietnam-roadtrip-hanoi-to-ho-chi-minh-city/AVHH/)

#### Exodus: "Hidden Vietnam: Sapa & Beyond" (13 days, Hanoi → Ho Chi Minh City)
- Facts: "Activity Level: Moderate" with an "Activity Level Guidelines" link. Trip Style is "Classic: The quintessential Exodus adventure, pairing iconic sights and cultural discovery with comfortable stays". Price is £2,028–£2,303 excluding flights, with a "20% OFF" banner. — [Exodus](https://www.exodus.co.uk/trips/vietnam-holidays/culture/vietnam-uncovered/aos)
- There is a "Map View Full Itinerary" map and six photo highlights. The day accordion has "Expand all / Collapse all", "Day 1: Adventure starts in Hanoi", "Accommodation: Hotel De Sapa (or similar)" and "Meals included". Drive and hike durations sit in the narrative. — [Exodus](https://www.exodus.co.uk/trips/vietnam-holidays/culture/vietnam-uncovered/aos)
- "What's Included" counts nights by comfort tier: "7 Superior Comfort nights (hotels/resorts), 5 Comfort nights (4 hotel, 1 ecolodge), 2 Simple nights (1 homestay, 1 sleeper train)". — [Exodus](https://www.exodus.co.uk/trips/vietnam-holidays/culture/vietnam-uncovered/aos)

#### Responsible Travel: "Hanoi to Saigon tailor made holiday, Vietnam"
- Facts: "Price from £7,130", "Duration: 19 Days", "Type: Tailor made", "This price is per person, based on 2 people sharing". An 8-image carousel follows. In the fetched content the route is a bulleted list of the sequence, with no map and no day-by-day. "Make enquiry" buttons repeat down the page, and there is a "Responsible Travel" section (Planet / People). — [Responsible Travel](https://www.responsibletravel.com/holiday/13463/hanoi-to-saigon-tailor-made-holiday-vietnam)

#### Lonely Planet Journeys: "12 Days in Vietnam: City, Coastal and Countryside Traditions"
- Hero (rendered) is split in two:
  - Left: a dark panel with the breadcrumb "ASIA > VIETNAM", a "lonely planet journeys" wordmark, a tilted yellow label "ITINERARY CRAFTED BY LOCAL EXPERTS IN VIETNAM", the title and a summary.
  - Right: a full-bleed photo of the Golden Bridge (Ba Na Hills).
  - Source: [Lonely Planet](https://www.lonelyplanet.com/journeys/itineraries/d4bc3ce1-d45e-4189-8057-17d7eb3737fc)
- Fact strip: "COUNTRY Vietnam · DURATION 12 Days / 11 Nights · FROM $2,731 /person · CUSTOMIZE THIS TRIP". It turns into a sticky top bar on scroll (rendered). Then "Your trip at a glance — TOP ACTIVITIES" lists 5 bullets. — [Lonely Planet](https://www.lonelyplanet.com/journeys/itineraries/d4bc3ce1-d45e-4189-8057-17d7eb3737fc)
- Each day card has an evocative title plus "SHOW ME MORE" (e.g. "DAY 3 Day and Night on Hạ Long Bay: Overnight Cruise Through Spectacular Scenery"). There is also "SHOW ALL 12 DAYS". A PREV/NEXT preview panel has the sub-blocks OVERVIEW / HIGHLIGHTS / ACCOMMODATIONS ("Sena Cruise (or similar)") / TRANSPORTATION, and meals appear as "(Breakfast, Lunch, Dinner)". — [Lonely Planet](https://www.lonelyplanet.com/journeys/itineraries/d4bc3ce1-d45e-4189-8057-17d7eb3737fc)
- Further down: "How it works" (4 steps), "What's included" / "NOT INCLUDED IN THE FINAL PRICE", and a gate: "READY TO SEE THE FULL ITINERARY? Submit a free request to talk with our local experts. LET'S GO". — [Lonely Planet](https://www.lonelyplanet.com/journeys/itineraries/d4bc3ce1-d45e-4189-8057-17d7eb3737fc)
- Lonely Planet runs several priced Vietnam "journeys". Examples are "12 Days in Vietnam: All-Encompassing Getaway" ($2,224pp) and "10 Days in Vietnam: Vibrant City, Coastal and Countryside Charms" ($2,420pp); the prices come from search snippets. — [LP 12-day](https://www.lonelyplanet.com/journeys/itineraries/c24494c2-e730-4a5f-a963-4e6041ed2dd8); [LP 10-day](https://www.lonelyplanet.com/journeys/itineraries/9fdaf57c-b984-475b-ae32-36eed966e12d)

#### Rough Guides (editorial) and Insight Guides (Rough Guides' former tailor-made trips)
- The Rough Guides "Complete 2 Weeks in Vietnam Itinerary" article is laid out like this:
  - Days are grouped by destination ("Days 1-2: Hanoi … Days 5-8: Sapa region … Days 11-14: Hoi An").
  - Each stop has a bold "Travel time: 4 hours by bus or private car" line, plus "Editor's tip" asides.
  - A tips box by a named local expert (Han Pham) covers rice-harvest timing.
  - There is no map, about 10 photos with captions and credits ("© Shutterstock"), and a "Select Month" → "start planning" CTA.
  - Source: [Rough Guides](https://roughguides.com/vietnam/itineraries/14-days-in-vietnam-itinerary)
- Rough Guides' tailor-made trip URLs now return 301 redirects to insightguides.com (Apa Digital). For example roughguides.com/vietnam/trips/winter-trip/ → [Insight Guides winter trip](https://www.insightguides.com/destinations/asia-pacific/vietnam/trips/winter-trip/), and /trips/14-days/ → [Insight Guides 14 days](https://www.insightguides.com/destinations/asia-pacific/vietnam/trips/14-days/)
- "Tailor-made Vietnam winter trip - 11 days" header: "Starting from: 1482 USD per Adult / 11 days", "Crafted by Han Pham, travel expert from Vietnam", "4.9 Excellent". It has 5 highlight bullets, a day table "Day | Location | Activity | Overnight", and one image per day. — [Insight Guides](https://www.insightguides.com/destinations/asia-pacific/vietnam/trips/winter-trip/)

#### Highlights Travel (formerly Asia Highlights)
- asiahighlights.com tour URLs now 301-redirect to highlightstravel.com. The footer reads "Since 1998, we've been crafting private journeys…". — [Highlights Travel](https://www.highlightstravel.com/vietnam/tours/northern-vietnam-discovery)
- Example page:
  - Title "6-Day Northern Vietnam Discovery Tour", subtitle "The Best of Northern Vietnam", price "6 days from US$ 829 per person (based on 2 persons and 4-star hotels)". There is no map.
  - Day titles are written as experiences ("Unveil the Hill Tribe Culture with a Valley Cycling Tour in Mai Chau").
  - Each day lists hotels in two tiers ("Hanoi Pearl Hotel(4star)/Apricot Hotel Hanoi(5 star)"), meals and drive times.
  - Trust badges include "2026 Traveler's Choice" and "10,000+ reviews & 98.8% 5-star rating".
  - Source: [Highlights Travel](https://www.highlightstravel.com/vietnam/tours/northern-vietnam-discovery)

#### Vietnam Coracle (independent Vietnam specialist)
- "Saigon to Hanoi by Motorbike" is laid out like this:
  - Author bio, table of contents and general information first.
  - Then 7 routes, each with the same template: DETAILS ("Total Distance: 2,863km", "Average Duration: 3-4 weeks or more", Navigation, Road Conditions & Traffic, Scenery & Attractions, Accommodation, Best Time, Useful Resources), then OVERVIEW, then ROUTE MAP.
  - The page shows "Last updated August 2025".
  - Source: [Vietnam Coracle](https://www.vietnamcoracle.com/saigon-to-hanoi-by-motorbike-5-suggested-routes/)
- Paid offline packages bundle a PDF guide with KMZ and GPX map files. — [Vietnam Coracle shop](https://www.vietnamcoracle.com/shop-offline-guides-maps)

#### Bamba
- The Vietnam listing (rendered) reads "Discover 4 trips to Vietnam" with sort options. Cards look like "16 days • Travel Passes • Vietnam" / "14 days • Independent • Vietnam" / "3 days • Group • Vietnam", with category tags ("Explorer Trips", "Water & Coastline"), "FROM PER PERSON" and "View trip". — [Bamba](https://bambatravel.com/landings/countries/vietnam)
- Two cards showed broken prices: "From $1,655,366,484.00 USD" (Vietnam Circuit Travel Pass) and "From $1,061,426,513.00 USD" (Sapa Trekking). An older Vietnam Circuit (from Ho Chi Minh City) URL returns "Trip not found". — [Bamba listing](https://bambatravel.com/landings/countries/vietnam); [Bamba old trip URL](https://bambatravel.com/adventure/35978/vietnam-circuit-from-ho-chi-minh-city-travel-pass)

### Inferences
- The shared minimum across all categories is: facts strip → highlights → map + collapsed day list → where you sleep → when to go → alternatives. A friends' page can drop price, inclusions, reviews and enquiry entirely. The space freed up is best spent on weather per stop and transport legs, which most commercial pages handle weakly.
- Stop-based narrative (Black Tomato, Selective Asia) feels editorial and premium but is hard to scan. Day-based fields (Intrepid, G Adventures, Exodus) scan well but read as a template. A hybrid works for 16 days: group the days under stop headings ("Days 3–5 · Đà Lạt"), with one-line day entries inside. Steppes ("Days 3-4: Hanoi - Halong Bay") and Rough Guides ("Days 5-8: Sapa region") already do this.
- Audley's split layout (collapsed numbered days on the left, sticky map with the active pin highlighted on the right) is the clearest example of making the map and the itinerary one tool rather than two separate sections.

### Gaps
- Not examined: Asia Pioneer, Condé Nast Traveller itinerary articles, and Lonely Planet "Best in Travel". The available calls went to operator trip pages instead.
- Bamba trip pages could not be observed. Clicking "View trip" opens a new tab, which the browser pane blocked, and known older trip URLs return "Trip not found". Only the listing is described.
- Responsible Travel's anatomy comes from WebFetch only. Tabbed content such as a full itinerary may not have been captured.
- Mobile layouts were not tested on any site.
- Rough Guides conflict: the search-result title says "14 days in Vietnam: How to spend it with 5 unique itineraries", but the fetched page showed one itinerary. The page has either changed or the fetch missed the alternatives.

## 2. How do these sites offer variation or personalisation without overwhelming the reader?

### Takeaway
They show one complete, opinionated route, explicitly framed as a starting point ("Itinerary idea", "Bespoke holiday idea", "Make this itinerary yours"). Choice is offered only where it matters:
- Alternatives are written inline at the stop where the decision happens.
- Optional add-ons are flagged per day.
- Alternative hotels are tucked into a collapsed accommodation accordion.
- Sibling routes appear as 3–6 cards at the bottom.
- A single activity or pace label stands in for any complex filtering.

Real configurators are rare. Personalisation is mostly handed off to a human (form or call).

### Cited Findings
- **Framing the route as a starting point:**
  - Audley labels its itinerary "Itinerary idea". — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
  - Steppes labels it "BESPOKE HOLIDAY IDEA" and says "Our travel experts can tailor this itinerary to suit you." → "Speak to our experts". — [Steppes](https://www.steppestravel.com/holiday-ideas/highlights-of-vietnam/)
  - Black Tomato: "MAKE THIS ITINERARY YOURS — Each and every Black Tomato trip is tailored exactly to who you are and what you want to do So tell us about yourself and we'll create something that's entirely you." — [Black Tomato](https://www.blacktomato.com/destinations/vietnam/vietnam-north-south/)
  - Insight Guides: "Think of this itinerary as a starting point rather than a fixed package." — [Insight Guides](https://www.insightguides.com/destinations/asia-pacific/vietnam/trips/winter-trip/); "Each itinerary is an example you can adapt to your dates, budget, and pace, then customize with experiences that match how you like to travel." — [Insight Guides 14 days](https://www.insightguides.com/destinations/asia-pacific/vietnam/trips/14-days/)
- **Reversibility stated once:** "this route works just as well in reverse" — [Selective Asia](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/). Coracle: "All the routes can be ridden in either direction… The only reason to consider which direction to ride is weather conditions." — [Vietnam Coracle](https://www.vietnamcoracle.com/saigon-to-hanoi-by-motorbike-5-suggested-routes/)
- **Inline "swap this for that" with an honest reason (Selective Asia):**
  - Ha Long is "a conundrum… Hundreds of boats ply the waters". The page recommends Bai Tu Long or Lan Ha ("slightly quieter… but it will still feel busy!") and adds "Alternatively, a few days exploring Vietnam's stunning rural north… from Ha Giang to Mai Chau".
  - Beach choice: "Which you opt for will depend on the time of year…", followed by a list of options (Hoi An beaches, Danang, Quy Nhon, Nha Trang, Ho Tram, Phan Thiet, Mui Ne, Con Dao, Phu Quoc).
  - "We'd always recommend adding a few extra days in Hoi An, if you can."
  - Source: [Selective Asia](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
- **Easier vs harder option inside a day (Exodus):** the Sapa hike runs "between four and seven hours", with a choice between a "paved flat route" and a "slightly more demanding scenic route". The add-on prompts sit on the days where they apply: "Want more time in Hanoi? Secure pre-tour hotel nights through your sales representative", "Upgrade to a premium room today – speak to your sales representative", an Angkor add-on on Day 13, and a private version ("Your Group, Your Adventure"). — [Exodus](https://www.exodus.co.uk/trips/vietnam-holidays/culture/vietnam-uncovered/aos)
- **Alternative stays per stop:** Audley's accommodation accordion lists the proposed hotel plus alternatives for each stop (e.g. Hue: aNhill Boutique / Pilgrimage Village Hotel / AZERAI — La Residence Hue) and "View more accommodation in Hoi An". — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam). Highlights Travel prints two hotel tiers on each day ("(4star)/(5 star)"). — [Highlights Travel](https://www.highlightstravel.com/vietnam/tours/northern-vietnam-discovery)
- **Optional extras flagged per day:**
  - G Adventures: "Included on Day 8" vs "Available on Day 5 for an additional cost", and per-day counts such as "5 optional activities". — [G Adventures](https://www.gadventures.com/trips/vietnam-roadtrip-hanoi-to-ho-chi-minh-city/AVHH/)
  - Intrepid lists priced "Optional activities" separately from "Included activities". — [Intrepid](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239)
  - Lonely Planet tags highlights "(optional)", e.g. "Hạ Long Bay Kayaking (optional)". — [Lonely Planet](https://www.lonelyplanet.com/journeys/itineraries/d4bc3ce1-d45e-4189-8057-17d7eb3737fc)
- **One label instead of filters:**
  - Exodus: "Activity Level: Moderate" + "Trip Style: Classic". — [Exodus](https://www.exodus.co.uk/trips/vietnam-holidays/culture/vietnam-uncovered/aos)
  - G Adventures: "Physical Grading: 2 - Light", "Service Level: Basic". — [G Adventures](https://www.gadventures.com/trips/vietnam-roadtrip-hanoi-to-ho-chi-minh-city/AVHH/)
  - Intrepid: "Style: Basic" + physical rating + "Is this trip right for you?". — [Intrepid](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239)
  - Selective Asia: a journey style tag ("Culture & Coastlines") and hotel tier tags ("Mid-range eco"). — [Selective Asia](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
- **Sibling routes as a short card row:**
  - Selective Asia shows "Vietnam Made Easy" ("a slower journey… without the need to rush", 13 days, £2,790), "From Field to Pho" ("Vietnam's less-visited north", 14 days), "Rural Routes" (12 days) and "Vietnam Family Explorer" (16 days). — [Selective Asia](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
  - Audley "Other tours you may be interested in". — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
  - Black Tomato "SIMILAR EXPERIENCES". — [Black Tomato](https://www.blacktomato.com/destinations/vietnam/vietnam-north-south/)
  - Steppes "Holiday Inspiration". — [Steppes](https://www.steppestravel.com/holiday-ideas/highlights-of-vietnam/)
  - Insight Guides duration links ("Other durations: 5 days · 6 days · 10 days…"). — [Insight Guides 14 days](https://www.insightguides.com/destinations/asia-pacific/vietnam/trips/14-days/)
- **Parallel alternative routes in one template:** Coracle presents 7 routes with identical DETAILS fields (distance, duration, navigation, road conditions, scenery, accommodation, best time), so they can be compared at a glance. — [Vietnam Coracle](https://www.vietnamcoracle.com/saigon-to-hanoi-by-motorbike-5-suggested-routes/)
- **Hand-off forms and processes:**
  - Highlights Travel: "Inquire now! Your 1:1 travel consultant will reply within 1 working day." The fields are group type, number of travellers, hotel preference (Deluxe 5-star / Selected comfort 4-star / Standard 3-star / Self-booking), dates (Exact / Approximate / Undecided) and a WhatsApp option. — [Highlights Travel](https://www.highlightstravel.com/vietnam/tours/northern-vietnam-discovery)
  - Lonely Planet "How it works": 01 FILL OUT REQUEST FORM / 02 MEET YOUR EXPERT / 03 BOOK YOUR TRIP / 04 TAKE-OFF. — [Lonely Planet](https://www.lonelyplanet.com/journeys/itineraries/d4bc3ce1-d45e-4189-8057-17d7eb3737fc)
  - Bamba offers a do-it-yourself builder: "Craft your perfect tailor-made trip, easily designed by you. — Get Started". — [Bamba](https://bambatravel.com/landings/countries/vietnam)
- **Evidence that hiding route details costs conversions (non-Vietnam UX case study, Headout hop-on hop-off):**
  - Problem: "Important details about routes were hidden away in a swipe-sheet", and reviewers complained of "Unclear route maps… not interactive and… difficult to read".
  - Fix: "route details below the selection unit" plus "inclusions, need to know, image gallery and reviews" were brought together on one page.
  - Result: "both the treatment versions had a significant CVR uplift compared to control". No figures were given.
  - Source: [Headout](https://backstage.headout.com/ux-in-motion-driving-cvr-up-with-the-hop-on-hop-off-redesign/)

### Inferences
- For a simple shared page, the strongest low-clutter pattern is one route, plus at most one or two "or…" swaps written into the relevant stop. Each swap should name its trade-off ("easier / harder", "if it rains / if dry"), the way Exodus and Selective Asia do it. A separate configurator is not needed.
- A per-day pace tag is cheap and does the job of the operators' activity-level labels for a mixed interest set (nature, hiking, culture, relaxing). Examples: "Active hike", "Easy culture", "Rest day", where the Rest day mirrors Audley's "Enjoy a full day relaxing at the resort".
- Lonely Planet hides the full itinerary behind a request form. That gate fits a sales page, not a page shared between friends; everything should be visible, with collapsing used only to keep it short.

### Gaps
- No observed site lets a reader toggle an alternative and see the map or day list update live. Swaps were text or hand-off forms only. I found no evidence either way for interactive swap toggles on these operators' sites.
- Not verified on the page: the search summary claimed Rough Guides/Insight Guides lets you "receive up to 3 different itineraries" from local agents. It was not seen on the fetched pages.

## 3. How do the best Vietnam itineraries handle regional weather (north cool/dry, central coast wet Oct–Dec, south dry), and how is seasonality shown visually?

### Takeaway
The most informative visual found is Audley's per-itinerary "When to go" widget. Month tabs carry 2–3 tick ratings. Choosing a month shows a one-line verdict plus paired horizontal bars (daily max °C and monthly rainfall in mm) for each stop on that route. In December these bars expose the wet central coast (Hue 329 mm, Hoi An 214 mm) even though the overall verdict reads "The best time to travel".

Other approaches seen:
- Selective Asia: month tiles per region rated "Best / Good / Mixed / Poor".
- Steppes: a Jan–Dec calendar with one-line verdicts.
- Black Tomato and Selective Asia: a single "When" or "Best time to go" fact in the header.
- Adventure operators: only day-level caveats.

### Cited Findings
- **Audley itinerary widget (rendered):**
  - Month tabs JAN–DEC each show ticks (as rendered: FEB, MAR, APR, NOV, DEC = ✓✓✓; others ✓✓).
  - Selecting DEC shows "The best time to travel", then rows for the itinerary's stops only, with "Daily max temperature (°C)" (orange bar) and "Monthly rainfall (mm)" (blue-grey bar):

    | Stop | Daily max (°C) | Rainfall (mm) |
    |---|---|---|
    | Hanoi | 22 | 20 |
    | Hue | 24 | 329 |
    | Hoi An | 25 | 214 |
    | Mekong Delta | 30 | 43 |
    | Phu Quoc | 30 | 55 |
    | Ho Chi Minh City | 31 | 44 |

  - OCT reads "A good time to travel, but there may be some factors to be aware of".
  - Source: [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- **Audley best-time page, regional text:** "The best time to visit Vietnam is between November and April." North: "December and January are the coldest months — temperatures drop as low as 10°C in most areas." Central: "Conditions between September and December are much wetter, although temperatures remain balmy." South: hot and dry from November to end of April. — [Audley best time](https://www.audleytravel.com/vietnam/best-time-to-visit)
- **Audley's December text:** "There is still a chance of rain in the central part of the country. However, the rest of Vietnam will be hot and dry. December is one of the driest months in the north, although temperatures can drop at night. They reach an average of 26°C in the balmy south, with beach season starting again on the island of Phu Quoc. We advise travelling before the Christmas period, as availability is few and far between once the festivities begin." Event: "The Ooc Om Boc Festival, a boat racing festival in Soc Trang, can take place in November or December." — [Audley best time](https://www.audleytravel.com/vietnam/best-time-to-visit)
- **Audley "Vietnam Climate Guide" table, December column (max °C / rain mm):**

  | Place | Max (°C) | Rain (mm) |
  |---|---|---|
  | Sapa & the Tonkinese Alps | 16 | 6 |
  | Halong Bay | 22 | 18 |
  | Hanoi | 22 | 20 |
  | Hue | 24 | 329 |
  | Hoi An | 25 | 214 |
  | Nha Trang | 28 | 157 |
  | Con Dao | 28 | 56 |
  | Mekong Delta | 30 | 43 |
  | Phu Quoc | 30 | 55 |
  | Ho Chi Minh City | 31 | 44 |

  Central-coast peaks are Hue 612 mm (Oct) and 625 mm (Nov), and Hoi An 532 mm (Oct). — [Audley best time](https://www.audleytravel.com/vietnam/best-time-to-visit)
- **Selective Asia weather page:**
  - Interactive month tiles per region (North / Central / South) with the legend "Best", "Good", "Mixed", "Poor". The tiles show no temperature or rainfall figures; narratives sit below.
  - North: "The cool but mostly dry winter lasts from November to April when temperatures average 17-22°C with the coldest months being January – March."
  - Sapa: "It can get very cold and frosty in December and January, especially at night."
  - Dalat: "From November to May it is far drier although cold in December & January."
  - Central: "hot and dry weather from mid-January to late August".
  - South: "The dry season begins in November and ends in April/early May".
  - Source: [Selective Asia weather](https://www.selectiveasia.com/vietnam-holidays/weather/)
- **One-line "when" facts in headers:**
  - Selective Asia Top to Tail: "Best time to go - November - May". — [Selective Asia](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
  - Black Tomato's north→south route: "WHEN January - April". — [Black Tomato](https://www.blacktomato.com/destinations/vietnam/vietnam-north-south/)
  - Selective Asia's family journey is "ideally synced, weather-wise, with the school summer holidays". — [Selective Asia](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
- **Steppes "When to travel" calendar:** Jan–Dec with a verdict sentence per month, e.g. March: "The busiest month, but for good reason. All regions experience good weather and the ideal time to see Halong Bay with clear skies." October: "A fantastic time to explore the alpine north. Trek in Sapa or get off the tourist trail in Ha Giang." — [Steppes](https://www.steppestravel.com/holiday-ideas/highlights-of-vietnam/)
- **Day-level seasonal caveat (Intrepid):** "Ky Co Beach and Hon Kho Island daytrips are available in the dry season only (March to September)." — [Intrepid](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239)
- **A season-themed route (Insight Guides winter trip):** "Escape the cold and enjoy mild winter days"; "Winter brings dry weather, calm seas, and warm temperatures, making it an ideal beach escape and one of the best times to visit Vietnam for island travel". The route is Hanoi → Ha Long cruise → fly to Danang/Hoi An (2 nights) → Saigon → Phu Quoc (3 nights). — [Insight Guides](https://www.insightguides.com/destinations/asia-pacific/vietnam/trips/winter-trip/)
- **Seasonality as a per-route field and a reason for direction (Coracle):** "Best Time" is part of each route's DETAILS. "The only reason to consider which direction to ride is weather conditions." The whole-country motorbiking window is given as "from March to September". — [Vietnam Coracle](https://www.vietnamcoracle.com/saigon-to-hanoi-by-motorbike-5-suggested-routes/)
- **Little or no climate content on the trip pages fetched** from Exodus, G Adventures and Responsible Travel (RT only says "can be tailor made throughout the year"). — [Exodus](https://www.exodus.co.uk/trips/vietnam-holidays/culture/vietnam-uncovered/aos); [G Adventures](https://www.gadventures.com/trips/vietnam-roadtrip-hanoi-to-ho-chi-minh-city/AVHH/); [Responsible Travel](https://www.responsibletravel.com/holiday/13463/hanoi-to-saigon-tailor-made-holiday-vietnam)
- **Rough Guides' 2-week article** handles timing in a local-expert tips box about golden rice terraces ("late September, early October…") and links out to "Vietnam Weather in December". It has no on-page climate chart. — [Rough Guides](https://roughguides.com/vietnam/itineraries/14-days-in-vietnam-itinerary)

### Inferences
- For a December HCMC → Hanoi route, Audley's per-stop pair of bars, limited to the route's stops and fixed to December, is the single element that best explains the north / central / south split. Audley's own numbers give:
  - South: hot and dry (30–31 °C, about 43–55 mm).
  - Central coast: wet (Hue 329 mm, Hoi An 214 mm).
  - North: dry and cool (Hanoi 22 °C / 20 mm; Sapa max 16 °C / 6 mm). Selective Asia adds that Sapa nights are "very cold and frosty".
- Blanket verdicts can mislead. Audley's December text says "the rest of Vietnam will be hot and dry", and its widget says "The best time to travel", yet its own table shows a 16 °C maximum in Sapa and over 200 mm of rain in Hue and Hoi An. A per-stop verdict (Selective Asia-style "Best / Good / Mixed / Poor") plus a one-line "pack for" note is more honest.
- Two leading operators set their north–south route windows to "January - April" (Black Tomato) and "November - May" (Selective Asia). That suggests a December route should label its central-coast leg candidly, or keep it short or flexible, and reassure on the dry south and north.

### Gaps
- No source here gives December data for Đà Lạt, Phong Nha, Ninh Binh or Cát Bà / Lan Ha in the same per-stop format. Audley's table omits them, and Selective Asia gives Dalat only as narrative ("cold in December & January"). Those numbers must come from another source.
- Selective Asia's December rating per region could not be read. The tiles are interactive and WebFetch returned only the legend.

## 4. How do they show transport between stops (mode icons, travel times)?

### Takeaway
None of the observed Vietnam pages shows every leg in a consistent "mode icon + duration" form. Transport mostly lives in the prose ("a comfortable 2.5 hour drive", "Travel to Danang for your flight south…"). The closest structured examples are:
- Lonely Planet's ticket-style TRANSPORTATION block ("BY CAR · DEPART: HANOI → ARRIVE: …").
- Audley's from → to pin chips on each day, paired with a dashed route line on the map.
- Rough Guides' bold "Travel time: 4 hours by bus or private car".
- G Adventures' trip-level mode summary.

### Cited Findings
- **Lonely Planet:** a "TRANSPORTATION" sub-block with a dark header label "BY CAR", then "DEPART: HANOI → ARRIVE: HẠ LONG BAY OVERNIGHT CRUISER" in monospace (rendered), plus prose ("driven roughly three and a half hours to Lan Ha Bay"). The day overview on the same page says "a roughly three-hour drive". — [Lonely Planet](https://www.lonelyplanet.com/journeys/itineraries/d4bc3ce1-d45e-4189-8057-17d7eb3737fc)
- **Audley:** each day shows pin chips for origin and destination ("Hanoi → Hue", "Mekong Delta → Phu Quoc") and "Stay at …". The mode is only in the prose: "…your onward flight to Hue", "Wind your way over the Hai Van Pass, where mountains meet the sea", "Travel to Danang for your flight south to Can Tho", "travel by speedboat to the Cu Chi Tunnels". No durations are given; the map shows a dashed route line. — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- **Rough Guides:** a bold per-stop line, "Travel time: 4 hours by bus or private car". — [Rough Guides](https://roughguides.com/vietnam/itineraries/14-days-in-vietnam-itinerary)
- **Highlights Travel:** durations and distances in each day: "2-hour drive from Hanoi", "scenic 4-hour drive southwest", "45-minute drive", cycling "7 kilometers", "2-hour walk". — [Highlights Travel](https://www.highlightstravel.com/vietnam/tours/northern-vietnam-discovery)
- **Exodus:** durations in the narrative ("approximately six hours" drive; hike "between four and seven hours"). An overnight leg appears as the night's lodging ("Accommodation: Overnight train"). All modes are summarised in inclusions ("private air-conditioned bus, boat, sleeper train and internal flight"). — [Exodus](https://www.exodus.co.uk/trips/vietnam-holidays/culture/vietnam-uncovered/aos)
- **Intrepid:** per-day "Special information" carries travel-time notes. Modes are summarised in "What's included" (boat, overnight sleeper train, private minibus). Overnight trains count as accommodation: the single supplement "excludes Days 5 & 10 (overnight train)". — [Intrepid](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239)
- **G Adventures:** each day shows an origin → destination flow (e.g. Hanoi → Vinh), and a trip-level summary lists "Private vehicle, paddle boat, walking". — [G Adventures](https://www.gadventures.com/trips/vietnam-roadtrip-hanoi-to-ho-chi-minh-city/AVHH/)
- **Steppes:** route strings in the day titles ("Day 5: Halong Bay - Hanoi - Hue"), with one-liners such as "Day 10: Hoi An - Ho Chi Minh — Take an internal flight from Hoi An to Ho Chi Minh." — [Steppes](https://www.steppestravel.com/holiday-ideas/highlights-of-vietnam/)
- **Selective Asia:** relative distances in prose ("a comfortable 2.5 hour drive from Hanoi"; "Just a short flight or overnight train ride away"; "Take a scenic drive from Hue, up and over the Hai Van pass"). — [Selective Asia](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
- **Insight Guides:** a tabular "Day | Location | Activity | Overnight" layout, with legs written as activities ("Flight to Phu Quoc Island"). — [Insight Guides](https://www.insightguides.com/destinations/asia-pacific/vietnam/trips/winter-trip/)
- **Vietnam Coracle:** map legend with "blue lines" for routes, "red pins" for cities and towns, and "orange cameras" marking scenic sections. Each route carries "Total Distance" and "Average Duration". — [Vietnam Coracle](https://www.vietnamcoracle.com/saigon-to-hanoi-by-motorbike-5-suggested-routes/)

### Inferences
- A consistent leg row between stops (mode icon + approximate time + one word of character) is cheap and high-value, and most competitors don't do it. Examples: "[plane icon] ~1h · flight", "[car icon] ~3.5h · scenic pass", "[train icon] overnight sleeper". It also avoids the narrative-vs-box mismatch seen on Lonely Planet (3 h vs 3.5 h).
- Flagging scenic transfers turns dead time into content. Audley does it for the Hai Van Pass and Coracle marks scenic sections with camera icons on its maps.

### Gaps
- No observed page used plane, car or train icons for every leg with durations. I can't cite an operator that does this fully, so it should be treated as an opportunity rather than an established convention.

## 5. Photography, and what makes these pages feel premium rather than template-like

### Takeaway
Premium pages feel premium through specificity and restraint more than through photo volume:
- One strong hero photo with a location caption.
- Evocative but informative stop headings.
- Named hotels.
- A candid, first-hand voice.
- Consistent typography.

The template feel comes from mismatched or generic photos, repetitive captions, off-topic reviews and broken data.

### Cited Findings
- **Audley hero and day photos:** the hero has a "Where is this?" caption pill (rendered). Each day has a 3-photo carousel with captions. — [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- **Template slips on the same Audley page:**
  - The Hoi An day (Day 10) is illustrated with "Rice paddy fields in Pu Luong", "Rice fields outside Mai Chau" and "Mu Cang Chai rice fields", which are all northern places.
  - The Mekong day uses the repeated captions "Delta scene / Delta scene / Delta scene, Vietnam".
  - The review block shows Trustpilot reviews about Kenya, Tanzania, Spain and Japan rather than Vietnam.
  - Source: [Audley](https://www.audleytravel.com/vietnam/tours/highlights-of-vietnam)
- **Black Tomato:**
  - Centred condensed uppercase type and three colour-coded fact labels (WHEN / PRICE / HOW LONG) over one wide landscape photo (rendered).
  - Evocative stop titles ("THE HUB OF THE BUZZ", "THE PERFECT ENDING") and named luxury hotels.
  - Captioned images and a carousel within sections.
  - Source: [Black Tomato](https://www.blacktomato.com/destinations/vietnam/vietnam-north-south/)
- **Lonely Planet Journeys:** a split hero (dark text panel plus full-bleed photo), a yellow tilted credential label ("ITINERARY CRAFTED BY LOCAL EXPERTS IN VIETNAM"), a sticky facts bar and a monospace ticket-style transport box (rendered). — [Lonely Planet](https://www.lonelyplanet.com/journeys/itineraries/d4bc3ce1-d45e-4189-8057-17d7eb3737fc)
- **Selective Asia's candid editorial voice:** "Perfume River (perhaps slightly less picturesque than the name suggests!)"; on the quieter bays, "it will still feel busy!". The stop subheads are alliterative ("Jagged limestone & junk boats"). — [Selective Asia](https://www.selectiveasia.com/vietnam-holidays/journeys/top-to-tail/)
- **Steppes:** WebFetch described the photography as documentary-style (cultural portraits, markets, river life), with a "Why we like it" editorial box. — [Steppes Vietnam](https://www.steppestravel.com/destinations/south-east-asia/vietnam/); [Steppes itinerary](https://www.steppestravel.com/holiday-ideas/highlights-of-vietnam/)
- **Adventure operators lean on volume:**
  - Exodus: 48+ images in several carousel formats. — [Exodus](https://www.exodus.co.uk/trips/vietnam-holidays/culture/vietnam-uncovered/aos)
  - Intrepid: hero photos with the route map as one of the gallery tiles, plus "All photos (13)". — [Intrepid](https://www.intrepidtravel.com/us/vietnam/essential-vietnam-167239)
  - G Adventures: a hero banner plus square highlight cards. — [G Adventures](https://www.gadventures.com/trips/vietnam-roadtrip-hanoi-to-ho-chi-minh-city/AVHH/)
- **Editorial and specialist sites:**
  - Rough Guides uses about 10 captioned, credited stock images ("© Shutterstock", "© AdobeStock"). — [Rough Guides](https://roughguides.com/vietnam/itineraries/14-days-in-vietnam-itinerary)
  - Vietnam Coracle uses the author's own photos and a first-hand voice ("I've ridden Saigon to Hanoi dozens of times") with "Last updated August 2025". — [Vietnam Coracle](https://www.vietnamcoracle.com/saigon-to-hanoi-by-motorbike-5-suggested-routes/)
  - Insight Guides puts the named local expert ("Crafted by Han Pham…") at the top. — [Insight Guides](https://www.insightguides.com/destinations/asia-pacific/vietnam/trips/winter-trip/)
- **Broken data as a template signal:** Bamba's listing shows impossible prices ("From $1,655,366,484.00 USD"). — [Bamba](https://bambatravel.com/landings/countries/vietnam)
- **Intrusive CTAs even on premium pages:** Black Tomato pairs a sticky "ENQUIRE NOW" bar with a newsletter pop-up (rendered), and Responsible Travel repeats "Make enquiry" throughout. — [Black Tomato](https://www.blacktomato.com/destinations/vietnam/vietnam-north-south/); [Responsible Travel](https://www.responsibletravel.com/holiday/13463/hanoi-to-saigon-tailor-made-holiday-vietnam)

### Inferences
- On a simple page, "premium" can be achieved with:
  - One hero photo with a "where is this" caption.
  - One correctly located photo per stop rather than per day, avoiding Audley's wrong-region images.
  - Stop headings that pair an evocative phrase with the plain place name (Black Tomato / Selective Asia style).
  - Named stays.
  - A couple of candid first-hand notes.
  - A restrained type system: one display face for titles and a clean sans for data.
- Removing sales chrome (pop-ups, sticky enquiry bars, reviews) is itself a premium signal for a page shared between friends. The facts strip and map do the orienting work that CTAs do on commercial pages.
- Carousels add weight and hide images. A single image per stop with a caption likely does more work on a phone. This is an inference: mobile behaviour was not tested.

### Gaps
- Hero images on Audley did not fully load in the browser pane, so the hero photo itself was not assessed, only its caption mechanism.
- I found no published design case study or review for any of these specific operators' itinerary pages. Searches returned only generic agency case studies; the Headout redesign above is the closest relevant evidence.
- Mobile rendering and image counts per viewport were not checked.
