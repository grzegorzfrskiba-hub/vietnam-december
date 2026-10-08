# Itinerary page UX evidence: interactivity, customisation and photo galleries (as of October 2026)

_Compiled 2026-10-08. Evidence labels: **[Field exp.]** large live experiment · **[Exp.]** controlled lab/online/scenario experiment · **[Meta]** meta-analysis · **[Testing]** Baymard/NN/g usability or eyetracking testing · **[Guideline]** expert guidance · **[Standard]** W3C/WCAG · **[Industry]** travel-industry survey · **[Practitioner]** vendor, design-system or blog (weak evidence). **DATED** = pre-2018 finding that may have aged. Items marked "(via search summary)" were confirmed only through search-result summaries, not by reading the full page._

## 1. What does research say about choice overload, progressive disclosure, presets vs. free-form configuration, sliders vs. chips/toggles, and explaining recommendations?

### Takeaway
Choice overload is real but conditional. It is strongest when people are unsure what they want and the product is complex, and that describes two friends planning an unfamiliar country. The evidence favours one ready-made plan plus a few clearly different preset variants ("starting solutions") that can be lightly refined. Primary information should be visible, with details revealed on demand (no more than 2 levels). Use tap-able discrete controls (buttons/chips) rather than sliders, and give a short "why this" explanation for each recommendation.

### Cited Findings

#### Choice overload and how many options/controls
- **[Meta, 2015]** Chernev, Böckenholt & Goodman (Journal of Consumer Psychology) pooled 99 observations from 53 studies (combined N = 7,202). Four moderators reliably drive choice overload: choice-set complexity, decision-task difficulty, preference uncertainty and an effort-minimising goal. Once these are accounted for, assortment size has a significant overload effect. That contradicts the 2010 Scheibehenne et al. meta-analysis, which had found essentially no average effect — [Kellogg School of Management](https://www.kellogg.northwestern.edu/faculty/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual) (via search summary)
- Same meta-analysis: satisfaction/confidence, regret, choice deferral and switching likelihood were equally strong indicators of overload and can be used interchangeably — [Kellogg](https://www.kellogg.northwestern.edu/faculty/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual) (via search summary)
- **[Field exp., 2025]** Long, Sun, Dai, Zhang, Zhang, Chen, Hu & Zhao, "The Choice Overload Effect in Online Recommender Systems", *Manufacturing & Service Operations Management* 27(1):249–268. The field experiment covered 1.6 million consumers on an online retail platform. The likelihood of buying anything from a recommendation set **first rose, then fell** as the number of recommended products increased. Up to **64%** of the drop came from consumers being less likely to *start* a search, i.e. click any recommended item at all — [INFORMS](https://pubsonline.informs.org/doi/fpi/10.1287/msom.2022.0659); [IDEAS/RePEc](https://ideas.repec.org/a/inm/ormsom/v27y2025i1p249-268.html). UCLA Anderson Review covered the study under the URL headline "as few as three options can be too many for online shoppers" — [UCLA Anderson Review](https://anderson-review.ucla.edu/as-few-as-three-options-can-be-too-many-for-online-shoppers/) (headline only, article not read)
- **[Exp., tourism, 2013, DATED]** Park & Jang, "Confused by too many choices? Choice overload in tourism" (*Tourism Management* 35:1–12) used scenarios: 2 destination types × 5 choice-set sizes, randomly assigned. More than 22 options raised the likelihood of choosing nothing, whatever the destination type. Below 22 options, people who chose felt less regret than non-choosers; with too many options the pattern reversed — [IDEAS/RePEc](https://ideas.repec.org/a/eee/touman/v35y2013icp1-12.html) (via search summary)
- **[Exp., 2010, DATED]** Bollen, Knijnenburg, Willemsen & Graus (RecSys 2010) varied recommendation-list size (5 vs. 20 items) and quality (low/high) using MovieLens matrix factorisation. They measured perceived variety, attractiveness, choice difficulty and satisfaction with the chosen item — [ACM via Unpaywall](https://unpaywall.org/10.1145%2F1864708.1864724) (design only; see Gaps)
- **[Journal, 2016]** Later work in *User Modeling and User-Adapted Interaction*: overload was traditionally tied to item-set size, but the **diversity** of the set is an important moderator — [Springer UMUAI](https://link.springer.com/article/10.1007/s11257-016-9178-6) (via search summary)

#### Progressive disclosure and accordions
- **[Guideline, 2006, DATED but foundational]** Nielsen: show only the few most important options first and offer specialised options on request. The first level must hold everything users often need, but not so much that attention is diluted. "Designs that go beyond 2 disclosure levels typically have low usability". Done well, progressive disclosure improves learnability, efficiency and error rate — [NN/g, Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
- **[Guideline, 2023]** Accordions fit when users need only a few pieces of information, sections are independent, the content is a step-by-step process, or the screen is small. Avoid them when the audience needs most or all of the content (then show it all), for continuous reading (they fragment it), for deep nested hierarchies, and for content that is hard to summarise in headings. Caret or plus icons tested best. Let users open several sections at once and offer Expand all/Collapse all. Never hide crucial information inside an accordion — [NN/g, Wang 2023, Accordions on Desktop](https://www.nngroup.com/articles/accordions-on-desktop/)
- **[Guideline]** On mobile, accordions give an overview and shorten long pages. They can also cause disorientation and extra scrolling, and hidden content gets less attention than visible content — [NN/g video, Accordions on Mobile](https://www.nngroup.com/videos/accordions-on-mobile/) (via search summary)

#### Preset "starting points" vs. free-form configuration
- **[9 studies, 3 in the field, 2014]** Hildebrand, Häubl & Herrmann, "Product Customization via Starting Solutions", *Journal of Marketing Research* 51(6):707–725. Consumers first pick one of a set of pre-specified products, then refine it. Domains tested were shirts, cars, **vacation packages**, jewellery and financial products. Compared with attribute-by-attribute configuration, this raised satisfaction with the choice, reduced perceived complexity and improved mental simulation of using the product. Buyers also chose more feature-rich products — [University of St. Gallen repository](https://www.alexandria.unisg.ch/236290) (via search summary of abstract)
- **[3 experiments, 2012]** The conference precursor (Hildebrand, Landwehr, Herrmann & Häubl, *Advances in Consumer Research* 40:1019–1020) found that picking one of a small number of prototypes and then refining it beat established customisation approaches on several measures — [University of St. Gallen repository](https://www.alexandria.unisg.ch/entities/publication/f22b16e1-7590-4992-ab3f-05aee6e7eeb2)
- **[Working paper, 2004, DATED]** Mass-customisation research recommends offering a default version as the starting point to minimise complexity. A "base" default works best for letting consumers approach their ideal — [Erasmus Research Institute of Management, ERS-2004-087-MKT](https://repub.eur.nl/pub/1804/ERS%202004%20087%20MKT.pdf) (via search summary)
- **[Exp., 2011, DATED]** Knijnenburg, Reijmer & Willemsen, "Each to his own" (RecSys 2011), compared five ways of interacting with an attribute-based (energy-saving) recommender. Most users, especially domain experts, were happiest with a hybrid of implicit and explicit preference input. **Novices and maximisers** did better with a non-personalised recommender that simply showed the most popular items — [ACM via Unpaywall](https://unpaywall.org/10.1145%2F2043932.2043960) (via search summary of abstract)

#### Interest/preference sliders vs. simple chips, toggles and buttons
- **[Guideline, 2015]** NN/g (Harley): sliders suit approximate values, not exact ones. They are hard to use on touch devices, especially one-handed or on the move. The wider or denser the range, the harder precise selection gets, and people with motor difficulties struggle. NN/g recommends controls users can tap or type instead of press-and-drag — [NN/g, Slider Design: Rules of Thumb](https://www.nngroup.com/articles/gui-slider-controls/)
- **[Deployed study, 2015, DATED]** Harper et al., "Putting Users in Control of their Recommendations" (RecSys 2015). MovieLens users got simple buttons ("more popular"/"less popular", plus a recency modifier) that immediately changed their list. Users rated the adjusted lists as more helpful, a better fit and more appropriate in popularity than the originals — [GroupLens](https://grouplens.org/blog/putting-users-in-control-of-their-recommendations/)
- **[Observational, tourism, 2016]** Delic, Neidhardt, Nguyen & Ricci argue that explicit preference statements are problematic early in travel planning, because people perceive destination features differently. Their research line uses picture-based preference elicitation (the PixMeAway engine, based on 17 tourist roles and Big Five traits) — [RecTour 2016, CEUR-WS](https://ceur-ws.org/Vol-1685/paper5.pdf)
- **[Standard, WCAG 2.2 AA]** SC 2.5.7 Dragging Movements: anything operated by dragging (slider thumbs, swipe-only carousels) must also work with a single pointer without dragging, e.g. buttons, unless dragging is essential — [W3C Understanding 2.5.7](https://www.w3.org/WAI/WCAG22/Understanding/dragging.html)

#### Explaining why a recommendation was made
- **[Framework]** Tintarev & Masthoff list seven aims for explanations: transparency, scrutability (letting users correct the system), trust, effectiveness, persuasiveness, efficiency and satisfaction. These aims can conflict, so a design has to choose which ones it serves — [Systematic review, arXiv 2006.08672](https://arxiv.org/pdf/2006.08672) (via search summary)
- **[Exp., 2020]** Research on review-based recommendations tested argumentative textual explanation types and their effect on perceived transparency, trust and satisfaction — [Interactive Systems group, U. Duisburg-Essen](https://interactivesystems.info/publications/effects-of-argumentative-explanation-types-on-the-perception-of-review-based-recommendations-2020) (via search summary)
- **[Small study]** A mobile sustainable-tourism recommender with an LLM natural-language explanation interface was rated satisfactory for usability and perceived as transparent. N = 13, so the evidence is weak — [SINTEF](https://www.sintef.no/en/publications/publication/10252166) (via search summary)
- **[Paper]** For destination recommenders, map-based interfaces are argued to help with transparency, justification, controllability and explorability — [arXiv 2302.09803](https://ar5iv.labs.arxiv.org/html/2302.09803) (via search summary)
- **[Prototype, tourism]** Delic et al.'s STSGroup prototype attaches explanations, derived from what group members did, to its group suggestions — [CEUR-WS](https://ceur-ws.org/Vol-1685/paper5.pdf)

### Inferences
- The audience matches the high-risk moderators from Chernev et al.: high preference uncertainty (Vietnam is new to them) and a complex bundled product (16 days, several regions, transport). This argues for **few, clearly different alternatives** rather than many fine-grained controls. The diversity finding supports making presets differ meaningfully, e.g. "more hiking", "more culture", "slower pace", rather than being near-duplicates.
- Long et al.'s inverted-U curve means "one option only" is not optimal either. One recommended plan plus **2–3 named variants** is consistent with the evidence. The main loss in that study was people never starting to engage, so the **default view must be immediately useful without any configuration**.
- Hildebrand et al. tested vacation packages directly. "Pick a preset, then tweak a few days" is the evidence-backed shape for customisation, rather than building the trip from scratch.
- Knijnenburg et al. suggest novices benefit from a curated, "what most people do" default more than from attribute-weighting controls. Interest **sliders** add precision nobody needs, are worse on phones, and need a non-drag alternative under WCAG 2.5.7. **Chips, toggles or 2–3-step segmented buttons** fit better, and Harper's "more/less" buttons are a tested precedent.
- Disclosure should stop at 2 levels: level 1 is the day summary, level 2 the details (logistics, alternatives, tips). No nested accordions.
- A one-line "why this fits you" per day or stop, tied to the friends' stated interests (nature, hiking, culture, relaxing), serves the transparency, trust and efficiency aims without long justifications.

### Gaps
- The outcome of Bollen et al. (2010), whether 20-item lists lowered satisfaction compared with 5, was not verified this session; only the design was confirmed.
- No study was found that directly compares chips/toggles with sliders for capturing travel interests. The evidence is indirect (NN/g slider guidance, Harper's buttons, Knijnenburg's novice finding).
- No research was found on explanations in hand-curated, static itinerary pages, as opposed to algorithmic recommenders.
- Park & Jang's 22-option threshold is specific to that study and should not be read as a general rule.

## 2. What are best practices for presenting day-by-day itineraries (scannability, trip-at-a-glance summaries, accordions vs. long scroll, maps paired with lists, travel time between stops)?

### Takeaway
No peer-reviewed or Baymard/NN/g study on itinerary-page layouts was found. The best evidence is general scanning and scrolling research plus Baymard's travel-map testing. Together they support: a trip-at-a-glance summary at the top, where attention concentrates; day sections with informative, consistent headings that support skimming by headings; an in-page day index; a long scroll with only secondary details collapsed; and a map visible next to the list rather than hidden behind a toggle.

### Cited Findings
- **[Testing, eyetracking, 2018]** Users spent about 57% of page-viewing time above the fold and about 74% in the first two screenfuls. In NN/g's 2010 study, 80% was above the fold. The sharp drop in attention after the fold persisted. The study analysed more than 130,000 fixations, apparently on desktop screens at 1920×1080 — [NN/g, Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/) (via search summary)
- **[Testing, eyetracking]** In the "layer-cake" scanning pattern, eyes rest mainly on headings and subheadings and read body text only under a heading that matches the goal. NN/g rates it the most effective way to scan short of reading everything, and it depends on clear, descriptive, visually distinct headings — [NN/g, Text Scanning Patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/) (via search summary)
- **[Guideline, 2023]** A table of contents gives an overview of the page without the details and direct access to sections. It also helps lower content get found, because attention concentrates at the top. On mobile, a ToC in the main body is easiest. Sticky, collapsible mobile ToCs that appear after scrolling went unnoticed by many test users. ToCs in side rails should be sticky and highlight the current section; ToCs in the main body should not be sticky. Link labels should match section headings exactly, include all headings, and long pages need back-to-top links — [NN/g, Wang & Brown 2023, Table of Contents](https://www.nngroup.com/articles/table-of-contents/)
- **[Guideline, 2023]** Long scroll vs. accordions: if users need most of the content, show it all. Accordions suit independent sections where only a few are needed, and should never hide crucial information — [NN/g, Accordions on Desktop](https://www.nngroup.com/articles/accordions-on-desktop/)
- **[Testing, 2022]** Baymard, hotel and rental search results (OTAs, hotel chains, rental sites):
  - 70% of OTA and large-brand hotel sites showed a list with no map by default.
  - 65% of users on list-view sites didn't use the map, either because they couldn't find it or overlooked it.
  - 95% of users engaged with the map when list and map were shown side by side ("Split View").
  - Switching between map and list views caused problems: filters didn't carry over; 75% of Expedia users who zoomed the map found the results didn't persist back in the list.
  - Exact location was a key relevance factor for users; one participant copied addresses into new tabs because no map was visible.
  - Baymard recommends Split View and warns that overlay versions get mistaken for the whole page.

  — [Baymard, Accommodations Split View](https://baymard.com/blog/accommodations-split-view) (article covers desktop only; mobile not detailed)
- **[Industry, 2023]** Expedia Group's Path to Purchase study, across seven countries:
  - Travellers viewed about 141 pages of travel content in the 45 days before booking (277 in the US) and spent about 303 minutes with it.
  - Early on that was about 2.5 page views a day, rising to about 25 on the day of booking.
  - Top resources: online travel agencies (OTAs, 80%), search engines (61%), social media (58%), airline sites (54%) and metasearch sites (51%).

  — [Expedia Group newsroom](https://www.expedia.com/newsroom/eg-path-to-purchase-research); [Hospitality Net](https://www.hospitalitynet.org/news/4117478.html) (via search summary)
- **[Industry, c. 2016, DATED]** Think with Google frames travel planning as "micro-moments" across dreaming, planning, booking and experiencing. In planning moments, people have picked a destination and are looking for dates, transport, accommodation and activities. Its illustrative traveller had 419 digital moments in two months, 87% on mobile — [Think with Google](https://thinkwithgoogle.com/consumer-insights/travel-trends-4-mobile-moments-changing-consumer-journey) (via search summary)
- **[Industry, 2025]** Phocuswright listing summaries say about one in three US and European travellers now use generative AI to plan or enhance trips, and that trust and accuracy remain concerns — [Phocuswright research listing](https://www.phocuswright.com/Travel-Research/The-Phocuswright-Conference-Session-Related-Research) (via search summary; report itself paywalled and not read)
- **[Observational, tourism, 2016]** Delic et al. describe tourism products as bundles: less tangible and emotional. They argue groups need decision-relevant *information*, not just a recommended outcome. In their study 10 destinations were offered, each with an information page — [CEUR-WS](https://ceur-ws.org/Vol-1685/paper5.pdf)
- **[Diary study, CHI 2016]** A study of 12 groups' real trip planning listed how tourism information is presented among its design implications for group trip planners — [ResearchGate](https://www.researchgate.net/publication/302074045_Designing_a_Trip_Planner_Application_for_Groups_Exploring_Group_Tourists_Trip_Planning_Requirements) (via search summary)

### Inferences
- **Top of page = trip at a glance**, because most attention falls in the first one or two screens. Include:
  - a route map from Ho Chi Minh City through the stops to Hanoi;
  - a compact 16-day strip showing each base town and number of nights;
  - a few key facts (internal flights or night trains, number of hiking days, rest days).
- **Day sections with a fixed heading pattern**, e.g. "Day 5 · Đà Lạt · Canyon hike", so readers can skim by headings. The first line is the main activity; secondary details (logistics, food, alternatives, tips) sit in a single level of disclosure.
- **Long scroll by default.** It is a personal itinerary friends will read through at least once, i.e. they need most of the content. Collapse only secondary details and offer Expand all.
- **A non-sticky day index in the main body** (day chips or a ToC) plus back-to-top links. Don't rely on a sticky collapsible ToC on mobile.
- **Map paired with the list.** On desktop, a map beside the list (split view). On phones, a summary map at the top whose numbered pins match day numbers, plus small per-leg maps or "open in Google Maps" links. Never hide the map behind a hard-to-find toggle.
- **Travel time between stops:** a "transfer" row between day sections (mode, duration, overnight/day) is a reasonable pattern. This is an inference, not tested evidence; it extends Baymard's finding that location context drives decisions.
- Travellers already go through about 141 pages of content, so the page's value is **curation and synthesis**, not more information.

### Gaps
- No usability study was found specifically on itinerary layouts (timeline vs. cards, accordion vs. scroll for multi-day itineraries).
- No evidence was found on the best way to show travel time between stops (inline transfer rows vs. lines on a map vs. tables).
- Baymard's split-view research covers desktop; no Baymard mobile map+list data was retrieved.
- The NN/g 2018 scrolling data appears to be desktop (1920×1080); mobile attention distribution was not retrieved.
- The underlying Phocuswright and Think with Google reports were not accessed in full.

## 3. When do image carousels and galleries hurt or help, how many images, captions, and what accessibility requirements apply?

### Takeaway
Auto-rotating, promotion-style carousels perform badly: few users get past the first frame and moving panels hurt reading and accessibility. User-controlled galleries of related images can work if they are easy to discover, preferably with thumbnails or a counter rather than tiny dots. They should also: be swipeable with visible button alternatives, open full-screen with zoom, carry captions, stay around 5 images or fewer, and meet the WCAG requirements below (no or pausable auto-advance, reduced motion respected, keyboard operable, alt text, targets of at least 24×24 px).

### Cited Findings
- **[Guideline/testing; Pernice 2013, last reviewed 7 Aug 2026]** NN/g on carousels:
  - People often scroll past carousels on both large and small screens; some see only the first frame or none.
  - Seeing only one frame can give the wrong impression.
  - Use 5 or fewer frames, because users are unlikely to engage with more.
  - Show how many frames there are and which one is current; dots are a particularly poor cue on mobile because people don't notice them.
  - Put navigation inside the carousel and make each control represent its frame.
  - Don't auto-forward on mobile.
  - Letting the next image "bleed" in from the edge signals there is more.
  - Keep important content available elsewhere too.

  — [NN/g, Designing Effective Carousels](https://www.nngroup.com/articles/designing-effective-carousels/)
- **[Testing, 2013, DATED]** NN/g (Nielsen): in a UK test, a user failed to find a prominent deal in an auto-rotating homepage carousel because it changed before she could read it. Moving panels hurt users with motor impairments, low-literacy and international users, and users assume they are ads. NN/g's rule: change panels only when the user asks — [NN/g, Auto-Forwarding Carousels](https://www.nngroup.com/articles/auto-forwarding/)
- **[Analytics, 2013, DATED]** Erik Runyon's Notre Dame data: about 1.07% of visitors clicked a homepage carousel slide. Of those clicks, 89.1% were on the first slide and the second slide got about 3.1% — [Smashing Magazine 2015](https://www.smashingmagazine.com/2015/02/carousel-usage-exploration-on-mobile-e-commerce-websites/) (via search summary; promotional homepage context, not a destination gallery)
- **[Testing, 2020]** Baymard, product image galleries:
  - 100% of desktop benchmark sites use thumbnails, vs. only 24% on mobile.
  - 50% of desktop users had trouble finding additional images when only dots or text indicators were shown; users assumed fewer images existed and tired before seeing them all.
  - Mobile users swiped whether or not there were indicators, but dot indicators have tiny, closely spaced hit areas that caused accidental taps.
  - Baymard recommends thumbnails on all platforms, a visible cue when thumbnails run off-screen, and descriptive information next to images so users know what they show.

  — [Baymard, Always Use Thumbnails](https://baymard.com/blog/always-use-thumbnails-additional-images)
- **[Testing]** Baymard: 40% of sites cut off gallery thumbnails without a clear cue, so users overlooked images — [Baymard, Truncating Gallery Thumbnails](https://baymard.com/research-articles/truncating-product-gallery-thumbnails) (via search summary)
- **[Testing, 2016, DATED]** Baymard, mobile image zoom:
  - 40% of top-grossing US mobile e-commerce sites did not support pinch or double-tap zoom on product images.
  - Test users repeatedly tried those gestures.
  - Baymard recommends supporting both pinch and double-tap and loading higher-resolution images on zoom.
  - Only 50% of sites that supported gestures told users so; brief fade-out hints worked.
  - Pair the word "pinch" with an icon, because non-native speakers found the word confusing.

  — [Baymard, Mobile Image Gestures](https://baymard.com/blog/mobile-image-gestures)
- **[Testing, eyetracking, 2010, DATED]** NN/g: users scrutinise information-carrying images (real products, real people, relevant content) and ignore decorative "feel-good" or stock imagery — [NN/g, Photos as Web Content](https://www.nngroup.com/articles/photos-as-web-content/) (via search summary)
- **[Standard]** W3C ARIA Authoring Practices carousel pattern:
  - If a carousel auto-rotates, the rotation control comes first in reading order and is always visible.
  - Hovering or keyboard focus pauses rotation, and rotation starts paused if the OS reduced-motion setting is on.
  - Each slide is a group with role description "slide" and a label like "3 of 5".
  - The live region is off while rotating and "polite" when paused.

  — [W3C APG carousel example](https://www.w3.org/WAI/ARIA/apg/example-index/carousel/carousel-2-tablist.html); [WAI-ARIA Practices 1.1 auto-rotating example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/carousel/carousel-1.html) (via search summary; the WAI carousel tutorial page returned HTTP 403)
- **[Standard, WCAG 2.2.2, Level A]** Anything that moves, blinks or scrolls automatically, lasts more than 5 seconds and appears alongside other content needs a way to pause, stop or hide it. This applies whatever the user's motion setting — [W3C Understanding 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) (via search summary)
- **[Standard, WCAG 2.3.3, AAA]** Motion animation triggered by interaction can be disabled unless essential. Browsers expose the user's choice through the `prefers-reduced-motion` CSS media query — [Reduced-motion reference](https://specification.website/spec/accessibility/reduced-motion.md); [Disability World glossary](https://www.disabilityworld.org/toolkit/glossary/reduced-motion/) (via search summary)
- **[Standard, WCAG 2.5.7, AA]** Swipe or drag needs a single-pointer alternative; for carousels that means Previous/Next buttons — [W3C Understanding 2.5.7](https://www.w3.org/WAI/WCAG22/Understanding/dragging.html)
- **[Standard, WCAG 2.5.8, AA]** Interactive targets must be at least 24×24 CSS px, or spaced enough to avoid accidental activation. This is relevant to dots and small arrows — [Hidde de Vries, What's new in WCAG 2.2](https://hidde.blog/new-in-wcag22/) (via search summary)
- **[Practitioner]** Design systems recommend a "peek" (part of the next card visible) to signal that content swipes. Practitioner guidance suggests 3–5 items with the most relevant first — [SAP Fiori carousel layout](https://www.sap.com/design-system/fiori-design-android/v25-4/components/cards-and-layouts/carousel-layout/usage); [Uxcel](https://app.uxcel.com/courses/mobile-design/mobile-information--container-components-105/carousels-2940) (weak evidence)

### Inferences
- Per destination or day: **3–5 real-location photos**, user-controlled, with **no autoplay**. The **first image should be the most representative**, because many people will see only that one.
- Use a counter ("2 / 5") or small thumbnails instead of dots. Add a **caption** naming the place or what is shown. Swipe plus visible Previous/Next buttons, at least 24×24 px and ideally around 44 px / 1 cm on phones.
- Tapping opens a **full-screen lightbox** that supports pinch and double-tap zoom with a higher-resolution image. It needs a clear close button, closes with Esc, keeps keyboard focus inside while open and returns it afterwards.
- Respect `prefers-reduced-motion`: use instant slide changes with no sliding animation.
- **Alternative that sidesteps carousel problems:** a static 2–3-image grid per stop with a "View all" lightbox. This keeps images visible without relying on users finding the carousel.

### Gaps
- No evidence-based optimum number of photos for travel-destination galleries was found. NN/g's "5 or fewer" applies to carousels in general; Baymard's data is from e-commerce product galleries.
- No study was found that measures the effect of captions in web image galleries. Baymard's "descriptive information alongside images" is the closest.
- WCAG 1.1.1 (alt text) and focus handling for lightboxes were not re-verified against W3C pages this session; W3C pages returned 403 to the fetch tool.
- The Runyon numbers are from 2013 promotional homepage carousels and may not transfer to galleries people open on purpose.

## 4. What works on phones (the link will be opened from WhatsApp/Messenger) for maps + lists, sticky elements and swipe galleries?

### Takeaway
Design for phones first. Keep sticky elements minimal (a slim header that hides on scroll down and reappears on scroll up), and don't depend on sticky collapsible menus that users miss. Show the map alongside the list instead of behind a toggle that users fail to find. Use native swipe gestures with visible button alternatives and zoom. Make the link-preview image fit WhatsApp's limits.

### Cited Findings
- **[Guideline, 2021]** NN/g sticky headers (Laubheimer):
  - Keep them small to maximise the content-to-chrome ratio; this matters most on phones.
  - Use an opaque background that contrasts with the page.
  - Use little or no animation; for partially persistent headers, 300–400 ms.
  - Partially persistent headers (hide on scroll down, reappear on scroll up) suit mobile best and should not trigger too eagerly.
  - Mobile tap targets of at least about 1 cm × 1 cm, text around 16 pt.

  A widely repeated claim that satisfaction drops once a sticky header covers 20–30% of the screen does **not** appear in this article and is unverified — [NN/g, Sticky Headers](https://www.nngroup.com/articles/sticky-headers/)
- **[Guideline, 2023]** On mobile, many test users did not notice sticky, collapsible ToCs that appear after scrolling. A ToC placed in the main body is the easiest mobile option — [NN/g, Table of Contents](https://www.nngroup.com/articles/table-of-contents/)
- **[Standard, WCAG 2.4.11, AA, new in 2.2]** A keyboard-focused element must not be entirely hidden by author content such as sticky headers or footers — [Hidde de Vries](https://hidde.blog/new-in-wcag22/); [Missouri Assistive Technology, What's new in WCAG 2.2 (PDF)](https://at.mo.gov/wp-content/uploads/whats-new-wcag-2.2.pdf) (via search summary)
- **[Standard, WCAG 2.5.8, AA]** Minimum target size is 24×24 CSS px or equivalent spacing — [Hidde de Vries](https://hidde.blog/new-in-wcag22/) (via search summary)
- **[Guideline]** Don't auto-forward carousels on mobile, and dots are poorly noticed there — [NN/g, Designing Effective Carousels](https://www.nngroup.com/articles/designing-effective-carousels/)
- **[Testing, 2020/2016]** Mobile users swipe galleries even without indicators. Dot targets are tiny and cause accidental taps. Users expect pinch and double-tap zoom — [Baymard, Thumbnails](https://baymard.com/blog/always-use-thumbnails-additional-images); [Baymard, Mobile Image Gestures](https://baymard.com/blog/mobile-image-gestures)
- **[Testing, 2022]** Hidden map views get overlooked: 65% of users on list-only sites didn't use the map, and users had trouble moving between map and list views — [Baymard, Split View](https://baymard.com/blog/accommodations-split-view)
- **[Practitioner]** Store-locator vendors recommend that on phones users toggle between a full map and a full list, avoiding a cramped combined screen. Baymard's examples pair this with numbered pins that match numbered list items — [MetaLocator support](https://support.metalocator.com/en/articles/8216012-toggling-between-the-map-and-list-in-mobile-view); [Baymard example: Holland & Barrett store locator](https://baymard.com/ecommerce-design-examples/store-locator/17198-hollandandbarrett) (via search summary). This is in tension with Baymard's finding that toggles hide the map, so make any toggle prominent or avoid it.
- **[Practitioner/design system]** A bottom sheet is a panel anchored to the bottom of the screen that shows details over content. Google Maps uses one to list results while keeping the map visible — [Material Design, Bottom Sheets](https://m1.material.io/components/bottom-sheets.html); [Screensdesign examples](https://screensdesign.com/explore/ui-elements/bottom-sheets/) (via search summary)
- **[Industry, DATED]** Think with Google's illustrative traveller had 87% of their travel "moments" on mobile — [Think with Google](https://thinkwithgoogle.com/consumer-insights/travel-trends-4-mobile-moments-changing-consumer-journey) (via search summary)
- **[Platform docs]** Meta's WhatsApp link-preview documentation: the og:image should be at least 300 px wide, have an aspect ratio of 4:1 or less, and be under 600 KB — [Meta for Developers, WhatsApp Link Previews](https://developers.facebook.com/documentation/business-messaging/whatsapp/link-previews/) (via search summary). Community reports say previews can silently fail above about 300 KB, and recommend 1200×630 px (1.91:1) — [Flarum community thread](https://discuss.flarum.org/d/39207-whatsapp-embed) (anecdotal; the exact source page of the 300 KB claim was not verified)

### Inferences
- **Single column, mobile-first.** At the top: a summary map whose numbered pins match the numbered day sections, with no hidden map toggle. Per day, an "Open in Google Maps" link or small static map is lighter than several interactive maps.
- **Sticky elements:** none, or at most a slim header that reappears on scroll up and holds a day picker. It must not cover focused elements (WCAG 2.4.11), and its targets must be at least 24 px (ideally about 1 cm).
- **Galleries on phones:** native horizontal swipe with a visible peek of the next photo, a counter, Previous/Next buttons and a full-screen zoomable view.
- **Link preview:** an og:image of about 1200×630 px kept under about 300 KB to be safe, plus a meaningful og:title and og:description so the WhatsApp/Messenger preview looks professional.
- **Testing:** check the page inside the WhatsApp and Messenger in-app browsers. On-device storage there may behave differently from regular Safari or Chrome, so don't make essential functions depend on it.

### Gaps
- No usability research was found on WhatsApp/Messenger in-app browsers: whether localStorage persists, how embedded maps behave, how scrolling conflicts with map panning.
- The NN/g bottom-sheet guidelines article was not retrieved (only its definition, via search summary).
- No mobile-specific Baymard data on combining map and list was retrieved.

## 5. What helps two people decide together (comparing alternatives, marking favourites/"must-see", showing trade-offs)?

### Takeaway
Research on group travel decisions finds that preferences form during discussion rather than by adding up individual votes. Satisfaction stays high even for members whose first choice loses, as long as the process works; the least satisfied groups were those where every member disagreed. What helps is a small set of comparable alternatives with decision-relevant information, lightweight reactions (like, dislike, favourite, comment) that feed the conversation, a fallback choice, and support for communication. Elaborate voting or aggregation is not what drives good outcomes.

### Cited Findings
- **[Observational study, RecTour @ RecSys 2016]** Delic, Neidhardt, Nguyen & Ricci observed group decisions at TU Delft, Klagenfurt, Leiden and TU Wien:
  - **200 decision makers in 55 groups of 2–5 people** (only 7 two-person groups), plus 16 observers.
  - Task: pick one of 10 European capitals for a group trip, with an information page per destination, and also name a second choice.
  - The vast majority were satisfied with the group's choice. **More than two-thirds of those whose personal top choice lost were still satisfied.**
  - Group preferences were **constructed during the process**; common aggregation strategies barely predicted the outcomes.
  - In less satisfied groups, typically all members showed disagreement during the process.
  - Individual satisfaction correlated with personality traits and with behaviour during the discussion.

  — [CEUR-WS, Research Methods for Group Recommender Systems](https://ceur-ws.org/Vol-1685/paper5.pdf)
- **[Same research line, RecSys 2016]** Conflicting preferences, even when present at the start, did not substantially lower satisfaction with the final group choice — [TU Delft research portal, Observing group decision making processes](https://research.tudelft.nl/en/publications/observing-group-decision-making-processes/) (via search summary)
- **[Journal version, 2018]** Delic, Neidhardt, Nguyen & Ricci, "An observational user study for group recommender systems in the tourism domain", *Information Technology & Tourism* 19(1):87–116 — [IDEAS/RePEc](https://ideas.repec.org/a/spr/infott/v19y2018i1d10.1007_s40558-018-0106-y.html)
- **[Prototype]** STSGroup, built from these findings, is a mobile tool where members propose items and react to each other's proposals with likes, dislikes or favourites, plus comments and emoticons. The system watches the discussion to suggest options with explanations. The authors leave open whether a group tool should follow the group's natural dynamics or act as a mediator steering toward fairer choices. Earlier travel tools for group decisions and negotiation include Travel Decision Forum, Trip@dvice, CATS and Choicla — [CEUR-WS](https://ceur-ws.org/Vol-1685/paper5.pdf)
- **[Diary study, CHI 2016]** A diary study plus interviews with 12 groups planning real trips, analysed with Activity Theory, identified requirements in: division of labour and information search, communication within the group, and cultural differences. Design implications covered how tourism information is presented and support for communication within the group — [ResearchGate, Designing a Trip Planner Application for Groups](https://www.researchgate.net/publication/302074045_Designing_a_Trip_Planner_Application_for_Groups_Exploring_Group_Tourists_Trip_Planning_Requirements) (via search summary)
- **[System study, CSCW 2018 companion]** CollaboPlanner combined phones with a public display for collaborative travel planning (less relevant to a single shared page) — [ACM DL](https://dl.acm.org/doi/abs/10.1145/3272973.3272993) (via search summary)
- **[Guideline]** NN/g: comparison tables help people decide quickly when weighing several attributes of a small number of options; simplicity, consistency and scannability are key — [NN/g video, 3 Rules for Better Comparison Tables](https://www.nngroup.com/videos/ux-rules-comparison-tables/) (via search summary). Secondary summaries add: at most 5 items, and only 2 side by side on mobile (original NN/g wording not verified)
- **[Field exp./Meta]** Overload is lower with small, diverse sets, and the main loss from too many options is people not engaging at all (see Q1) — [Long et al. 2025, INFORMS](https://pubsonline.informs.org/doi/fpi/10.1287/msom.2022.0659); [Springer UMUAI 2016](https://link.springer.com/article/10.1007/s11257-016-9178-6)

### Inferences
- Present **one default plan with a few explicit either/or decision points**. Example: "Days 6–8: Đà Lạt canyoning **or** Cát Tiên jungle". Each is a **2-column comparison** that fits a phone and states the trade-offs: travel time, physical effort, cost, December conditions, and the highlight of each.
- **Lightweight per-person marks** ("must-see", "maybe", "skip") echo STSGroup's like/dislike/favourite. They help start the conversation rather than settle it by vote.
- With no backend, marks stored on one phone **won't sync** to the other. Low-tech alternatives: a "copy my picks" button that produces a short text summary to paste into WhatsApp, or picks encoded in a shareable URL. This is a design inference, not tested.
- **Deep links** to each day or option (anchor URLs) let the friends point at specific parts in chat. This supports communication within the group, which the CHI 2016 study identified as a core need.
- **Offer a fallback** ("Plan B") for each decision point. Delic et al. asked for second choices, and it is also useful if December weather turns.
- Don't build aggregation or voting logic. The evidence says satisfaction comes from the discussion; the page should give the discussion clear, comparable information.

### Gaps
- No study was found specifically on **two-person** travel decisions. Delic et al. had only 7 dyads among 55 groups, and their task chose a destination, not a multi-day itinerary.
- No evidence was found on how well favourite or "must-see" marking works on static shared pages without accounts.
- A conference paper, "Choice Overload during Travel Decision Making for Self vs Other" (University of Wollongong), was found but not read. It may matter because the page owner is planning for a friend as well as himself — [UOW](https://ro.uow.edu.au/articles/conference_contribution/Choice_Overload_during_Travel_Decision_Making_for_Self_vs_Other/27696393)
- Research on explanations for group recommendations exists (e.g. Maastricht's "Explanations for Groups"; 2026 arXiv work on counterfactual group explanations) but was not reviewed — [Maastricht University](https://cris.maastrichtuniversity.nl/en/publications/explanations-for-groups); [arXiv 2601.16882](https://arxiv.org/pdf/2601.16882)
