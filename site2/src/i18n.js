/* Interface text in English and German, plus German versions of the trip content.
   Content not listed under I18N_DE falls back to the English data in data.js. */

const UI = {
  en: {
    'lang.aria': 'Language',
    'hero.alt': 'A woman rowing a small boat on the river below limestone cliffs at Tràng An, Ninh Bình',
    'hero.eyebrow': '{days} days · December 2026 · Hồ Chí Minh City → Hà Nội',
    'hero.h1': 'Vietnam, south <em>to</em> north',
    'hero.lede': 'Five complete routes for friends and family: nature, hiking, culture, slow days, and an easy one for travelling with parents. Each one is built for December weather, with honest travel times and the crowded places swapped for quieter ones nearby.',
    'hero.cta1': 'Pick a trip style', 'hero.cta2': 'See the {days} days',
    'styles.eyebrow': 'Step 1', 'styles.h2': 'Pick a trip style', 'styles.legend': 'Trip style', 'styles.sel': 'Selected',
    'styles.p': 'Each style is a complete 16-day route, planned and checked by hand. Start with our pick, or choose the one that sounds most like your group. Everything below updates.',
    'swaps.eyebrow': 'Step 2', 'swaps.h3': 'Decide together',
    'swaps.p': 'Where the route has a real either/or, both sides are here. A swap changes one stop and keeps the rest of the trip as it is.',
    'e.q': 'Travelling with older parents?', 'e.name': 'Gentle version', 'e.tag': 'Any style', 'e.on': 'On', 'e.off': 'Off',
    'e.p1': 'Hikes become easy walks, boat trips or scenic drives', 'e.p2': 'Cars with a driver instead of bicycles or motorbikes',
    'e.p3': 'Long drives stay as they are (Cao Bằng is 6–8 hours); Easy classics has the shortest transfers',
    'e.badge': 'Gentle', 't.rain': 'If it pours: ', 'why.gentle': ' The gentle version is on: no hikes, no bikes.',
    'x.q': 'Start with 3 days in Hồ Chí Minh City?', 'x.name': 'First 3 days in Hồ Chí Minh City', 'x.tag': 'Within the 16 days', 'x.add': 'Add', 'x.added': 'Added',
    'x.p1': 'Day 1 to land and do very little', 'x.p2': 'Day 2 in the Cần Giờ mangroves, day 3 in Chợ Lớn and on the river',
    'n.q': 'The spare night: {a} or {b}?', 'n.p': 'With the city days, one stop gets a night less. Choose which one keeps it.',
    'x.cut': 'To make room: {x}', 'x.less': '{s} {a} → {b} nights', 'x.less1': '{s} {a} → 1 night', 'x.drop': '{s} left out', 'x.same': 'Nothing else changes',
    'why.saigon': ' It starts with three days in Hồ Chí Minh City.',
    'swaps.none': 'No swaps on this route. It is built around a few long stays, and every alternative would add travel.',
    'swaps.inroute': 'In this route', 'swaps.or': 'or',
    'shape.eyebrow': 'At a glance', 'shape.h2': 'The {days} days',
    'shape.p': 'One square per day, coloured by where you sleep. A small dot marks a travel day. Tap a day to jump to it.',
    'copy.btn': 'Copy the plan for WhatsApp', 'copy.aria': 'Plan as text',
    'copy.ok': 'Copied. Paste it into your chat.', 'copy.fail': 'Copy the selected text below.',
    'days.eyebrow': 'Day by day', 'days.h2': 'The route', 'map.aria': 'Route map',
    'days.p': 'Each stop with its photos, a plan for every day and the journey to get there. The map is drawn to scale and follows you as you scroll.',
    'wx.eyebrow': 'Weather', 'wx.h2': 'December, stop by stop',
    'wx.p': 'December is dry in the south and the north, with cold nights in the mountains. The central coast is the exception: it is in its rainy season.',
    'wx.col1': 'Stop', 'wx.col2': 'Night to day', 'wx.col3': 'Rain in December',
    'wx.src': 'Long-term December averages. Temperature bars run from 5 to 35 °C; rain bars run up to 360 mm. Sources: Wikipedia climate tables based on Vietnam Institute for Building Science and Technology normals; Cao Bằng from World Climate Guide.',
    'wx.wet': 'wet days', 'wx.station': 'Station: ',
    'lo.eyebrow': 'Not in any route', 'lo.h2': 'Left out on purpose', 'lo.p': 'Famous places we decided against for this trip, and why.',
    'lg.eyebrow': 'Before you go', 'lg.h2': 'Flights, bookings and packing',
    'lg.flights': 'Flights', 'lg.book': 'Book ahead', 'lg.pack': 'Pack',
    'lg.home': 'Hà Nội → home', 'lg.intl': 'International',
    'ft.photos': 'Photos · Wikimedia Commons', 'ft.notes': 'Notes',
    'ft.notes.p': 'Travel times are door-to-door estimates and include about 1½ hours at the airport for each flight. Direct flights checked in October 2026 (Cần Thơ–Đà Nẵng, Đà Lạt–Hà Nội, Phú Quốc–Hà Nội); confirm schedules when you book. Check opening hours, trail rules and sea conditions locally.',
    'lb.aria': 'Photo viewer', 'lb.close': 'Close photo viewer', 'lb.photo': 'Photo: ',
    'min': 'min', 'h': 'h', 'day': 'Day', 'days': 'Days', 'night': 'night', 'nights': 'nights',
    'fly': 'Fly', 'door': 'door to door', 'longday': 'Long travel day', 'maps': 'Route in Google Maps',
    'r.van_ferry': 'Limousine van and a short ferry', 'r.van_car': 'Limousine van or private car',
    'r.back_sgn': 'Road back to Hồ Chí Minh City airport', 'r.taxi_city': 'Taxi into the city',
    'r.taxi_vca': 'Taxi to Cần Thơ airport', 'r.taxi_hoian': 'Taxi to Hội An',
    'r.bus_mekong': 'Bus or private car to Phong Điền', 'r.car_cattien': 'Private car or bus, then the river ferry',
    'r.taxi_dalat': 'Taxi up to Đà Lạt', 'r.taxi_pq': 'Taxi to the north coast', 'r.car_baoloc': 'Private car up through Bảo Lộc',
    'n.cruise': 'The cruise docks around 11 am.',
    'n.bangioc': 'See Bản Giốc when it opens at 7 am, before the weekend crowds, then drive.',
    'n.long': 'A long day: leave early.', 'n.morning': 'Take a morning flight.',
    'f.for': 'Your route: {name}', 'f.days': 'days, {nights} nights', 'f.bases': 'bases', 'f.flights': 'domestic flights', 'f.hikes': 'hiking days', 'f.longest': 'longest travel day',
    'flyhome': 'Fly home', 'flyhome.aria': 'Day {days}: fly home from Hà Nội',
    'why.swaps': ' Your swaps: ', 'why.instead': ' instead of ', 'why.rain': ' Hội An and Huế will be rainy.',
    'm.start': 'Start', 'm.north': 'North', 'm.whole': 'Whole route', 'm.panel': 'North panel', 'm.china': 'China', 'm.laos': 'Laos', 'm.cambodia': 'Cambodia', 'm.sea': 'South China Sea', 'm.tonkin': 'Gulf of Tonkin',
    'm.road': 'Road', 'm.flight': 'Flight', 'm.scale': 'Both panels drawn to scale', 'm.zoom': 'Click the map to enlarge it', 'm.close': 'Close the large map', 'm.title': 'Route map: ',
    'g.open': 'Open photo {i} of {n} full screen', 'g.show': 'Show photo {i}', 'g.photos': 'Photos of {x}',
    'g.prev': 'Previous photo', 'g.next': 'Next photo', 'g.full': 'View full screen',
    'reg.South': 'South', 'reg.Central': 'Central', 'reg.North': 'North',
    't.dec': 'December', 't.gem': 'Hidden gem', 't.skip': 'Skip', 't.instead': 'Instead: ',
    'home.h3': 'Fly home from Hà Nội', 'home.t': 'Last morning',
    'home.d': 'Coffee by West Lake, or Long Biên bridge at dawn, then about 45 minutes to Nội Bài airport. Allow 3 hours for an international flight.',
    'b.xmas': 'If your dates touch Christmas or New Year, book flights and the best rooms by early November.',
    'b.cruise': 'A Lan Hạ Bay cruise that starts from Cát Bà, with free date changes in case of fog or a storm.',
    'b.dalat': 'A licensed local guide for the Tà Năng hills, and a guide for Bidoup–Núi Bà.',
    'b.cattien': 'The Crocodile Lake trek and permit at Cát Tiên headquarters, the day before.',
    'b.caobang': 'A car with a driver, or an easy-rider guide, for the Cao Bằng days.',
    'b.homestay': 'Homestays in {x} a few weeks ahead: the good ones are small.',
    'b.evening': 'An evening flight home on Day {days}, so the last morning is free.',
    'p.warm': 'A warm layer and a hat: nights drop to 11–14 °C in the north and in Đà Lạt.',
    'p.rain_central': 'A light rain jacket, and proper rain gear for Hội An and Huế.',
    'p.rain': 'A light rain jacket. It rarely rains, but the bay is often misty and damp.',
    'p.hike': 'Hiking shoes with grip, and quick-dry clothes.',
    'p.sun_pq': 'Swimwear and sun protection for the south and Phú Quốc.',
    'p.sun': 'Swimwear and sun protection for the south.',
    'p.cash': 'Cash in small notes: homestays and boats rarely take cards.',
    'p.apps': 'Grab and offline Google Maps on your phones.',
    'pt.title': 'Vietnam, {days} days in December: ', 'pt.home': 'Day {days}: fly home from Hà Nội', 'pt.flights': 'Flights: '
  },
  de: {
    'lang.aria': 'Sprache',
    'hero.alt': 'Eine Frau rudert ein kleines Boot auf dem Fluss unter den Kalksteinfelsen von Tràng An, Ninh Bình',
    'hero.eyebrow': '{days} Tage · Dezember 2026 · Hồ Chí Minh City → Hà Nội',
    'hero.h1': 'Vietnam, von Süden <em>nach</em> Norden',
    'hero.lede': 'Fünf fertige Routen für Freunde und Familie: Natur, Wandern, Kultur, ruhige Tage und eine entspannte Route für die Reise mit Eltern. Jede ist auf das Dezemberwetter abgestimmt, mit ehrlichen Reisezeiten und ruhigeren Alternativen statt überlaufener Orte.',
    'hero.cta1': 'Reisestil wählen', 'hero.cta2': 'Die {days} Tage ansehen',
    'styles.eyebrow': 'Schritt 1', 'styles.h2': 'Wählt euren Reisestil', 'styles.legend': 'Reisestil', 'styles.sel': 'Ausgewählt',
    'styles.p': 'Jeder Stil ist eine komplette 16-Tage-Route, von Hand geplant und geprüft. Startet mit unserem Tipp oder wählt den Stil, der am besten zu eurer Gruppe passt. Alles darunter passt sich an.',
    'swaps.eyebrow': 'Schritt 2', 'swaps.h3': 'Gemeinsam entscheiden',
    'swaps.p': 'Wo die Route eine echte Entweder-oder-Frage hat, stehen hier beide Seiten. Ein Tausch ändert eine Station, der Rest der Reise bleibt gleich.',
    'e.q': 'Mit älteren Eltern unterwegs?', 'e.name': 'Sanfte Variante', 'e.tag': 'Für jeden Stil', 'e.on': 'An', 'e.off': 'Aus',
    'e.p1': 'Wanderungen werden zu leichten Spaziergängen, Bootsfahrten oder Panoramafahrten', 'e.p2': 'Autos mit Fahrer statt Fahrrad oder Motorrad',
    'e.p3': 'Lange Fahrten bleiben (nach Cao Bằng 6–8 Stunden); die Sanften Klassiker haben die kürzesten Transfers',
    'e.badge': 'Sanft', 't.rain': 'Bei Starkregen: ', 'why.gentle': ' Die sanfte Variante ist an: keine Wanderungen, keine Fahrräder.',
    'x.q': 'Mit 3 Tagen in Hồ Chí Minh City beginnen?', 'x.name': 'Erst 3 Tage in Hồ Chí Minh City', 'x.tag': 'Innerhalb der 16 Tage', 'x.add': 'Hinzufügen', 'x.added': 'Dabei',
    'x.p1': 'Tag 1 zum Ankommen und Nichtstun', 'x.p2': 'Tag 2 in den Mangroven von Cần Giờ, Tag 3 in Chợ Lớn und am Fluss',
    'n.q': 'Die übrige Nacht: {a} oder {b}?', 'n.p': 'Mit den Stadttagen hat ein Ort eine Nacht weniger. Wählt, welcher sie behält.',
    'x.cut': 'Dafür kürzer: {x}', 'x.less': '{s} {a} → {b} Nächte', 'x.less1': '{s} {a} → 1 Nacht', 'x.drop': '{s} entfällt', 'x.same': 'Sonst ändert sich nichts',
    'why.saigon': ' Vorher gibt es drei Tage in Hồ Chí Minh City.',
    'swaps.none': 'Auf dieser Route gibt es nichts zu tauschen. Sie setzt auf wenige lange Aufenthalte, und jede Alternative würde mehr Reisezeit bedeuten.',
    'swaps.inroute': 'In dieser Route', 'swaps.or': 'oder',
    'shape.eyebrow': 'Auf einen Blick', 'shape.h2': 'Die {days} Tage',
    'shape.p': 'Ein Quadrat pro Tag, gefärbt nach dem Übernachtungsort. Ein kleiner Punkt markiert einen Reisetag. Antippen springt zum Tag.',
    'copy.btn': 'Plan für WhatsApp kopieren', 'copy.aria': 'Plan als Text',
    'copy.ok': 'Kopiert. Jetzt im Chat einfügen.', 'copy.fail': 'Den markierten Text unten kopieren.',
    'days.eyebrow': 'Tag für Tag', 'days.h2': 'Die Route', 'map.aria': 'Routenkarte',
    'days.p': 'Jede Station mit Fotos, einem Plan für jeden Tag und der Anreise. Die Karte ist maßstabsgetreu und folgt euch beim Scrollen.',
    'wx.eyebrow': 'Wetter', 'wx.h2': 'Dezember, Station für Station',
    'wx.p': 'Im Dezember ist es im Süden und im Norden trocken, mit kalten Nächten in den Bergen. Die Ausnahme ist die Zentralküste: Dort ist Regenzeit.',
    'wx.col1': 'Station', 'wx.col2': 'Nacht bis Tag', 'wx.col3': 'Regen im Dezember',
    'wx.src': 'Langjährige Dezember-Mittelwerte. Die Temperaturbalken reichen von 5 bis 35 °C, die Regenbalken bis 360 mm. Quellen: Klimatabellen der Wikipedia auf Basis der Normalwerte des Vietnam Institute for Building Science and Technology; Cao Bằng nach World Climate Guide.',
    'wx.wet': 'Regentage', 'wx.station': 'Station: ',
    'lo.eyebrow': 'In keiner Route', 'lo.h2': 'Bewusst weggelassen', 'lo.p': 'Berühmte Orte, gegen die wir uns für diese Reise entschieden haben, und warum.',
    'lg.eyebrow': 'Vor der Reise', 'lg.h2': 'Flüge, Buchungen und Packliste',
    'lg.flights': 'Flüge', 'lg.book': 'Vorab buchen', 'lg.pack': 'Einpacken',
    'lg.home': 'Hà Nội → nach Hause', 'lg.intl': 'International',
    'ft.photos': 'Fotos · Wikimedia Commons', 'ft.notes': 'Hinweise',
    'ft.notes.p': 'Reisezeiten sind Schätzungen von Tür zu Tür und enthalten pro Flug etwa 1½ Stunden am Flughafen. Direktflüge im Oktober 2026 geprüft (Cần Thơ–Đà Nẵng, Đà Lạt–Hà Nội, Phú Quốc–Hà Nội); Flugpläne bei der Buchung bestätigen. Öffnungszeiten, Wegeregeln und Seegang vor Ort prüfen.',
    'lb.aria': 'Fotoansicht', 'lb.close': 'Fotoansicht schließen', 'lb.photo': 'Foto: ',
    'min': 'Min.', 'h': 'Std.', 'day': 'Tag', 'days': 'Tage', 'night': 'Nacht', 'nights': 'Nächte',
    'fly': 'Flug', 'door': 'von Tür zu Tür', 'longday': 'Langer Reisetag', 'maps': 'Route in Google Maps',
    'r.van_ferry': 'Limousinen-Van und eine kurze Fähre', 'r.van_car': 'Limousinen-Van oder Privatwagen',
    'r.back_sgn': 'Zurück zum Flughafen Hồ Chí Minh City', 'r.taxi_city': 'Taxi in die Stadt',
    'r.taxi_vca': 'Taxi zum Flughafen Cần Thơ', 'r.taxi_hoian': 'Taxi nach Hội An',
    'r.bus_mekong': 'Bus oder Privatwagen nach Phong Điền', 'r.car_cattien': 'Privatwagen oder Bus, dann die Flussfähre',
    'r.taxi_dalat': 'Taxi hinauf nach Đà Lạt', 'r.taxi_pq': 'Taxi an die Nordküste', 'r.car_baoloc': 'Privatwagen über Bảo Lộc hinauf',
    'n.cruise': 'Das Boot legt gegen 11 Uhr an.',
    'n.bangioc': 'Bản Giốc um 7 Uhr zur Öffnung ansehen, vor dem Wochenendandrang, dann losfahren.',
    'n.long': 'Ein langer Tag: früh losfahren.', 'n.morning': 'Am besten morgens fliegen.',
    'f.for': 'Eure Route: {name}', 'f.days': 'Tage, {nights} Nächte', 'f.bases': 'Stationen', 'f.flights': 'Inlandsflüge', 'f.hikes': 'Wandertage', 'f.longest': 'längster Reisetag',
    'flyhome': 'Heimflug', 'flyhome.aria': 'Tag {days}: Heimflug ab Hà Nội',
    'why.swaps': ' Eure Wahl: ', 'why.instead': ' statt ', 'why.rain': ' In Hội An und Huế wird es regnen.',
    'm.start': 'Start', 'm.north': 'Norden', 'm.whole': 'Gesamte Route', 'm.panel': 'Nordkarte', 'm.china': 'China', 'm.laos': 'Laos', 'm.cambodia': 'Kambodscha', 'm.sea': 'Südchinesisches Meer', 'm.tonkin': 'Golf von Tonkin',
    'm.road': 'Straße', 'm.flight': 'Flug', 'm.scale': 'Beide Karten maßstabsgetreu', 'm.zoom': 'Karte anklicken zum Vergrößern', 'm.close': 'Große Karte schließen', 'm.title': 'Routenkarte: ',
    'g.open': 'Foto {i} von {n} im Vollbild öffnen', 'g.show': 'Foto {i} zeigen', 'g.photos': 'Fotos: {x}',
    'g.prev': 'Vorheriges Foto', 'g.next': 'Nächstes Foto', 'g.full': 'Vollbild',
    'reg.South': 'Süden', 'reg.Central': 'Mitte', 'reg.North': 'Norden',
    't.dec': 'Dezember', 't.gem': 'Geheimtipp', 't.skip': 'Auslassen', 't.instead': 'Stattdessen: ',
    'home.h3': 'Heimflug ab Hà Nội', 'home.t': 'Letzter Morgen',
    'home.d': 'Kaffee am Westsee oder die Long-Biên-Brücke im Morgengrauen, dann etwa 45 Minuten zum Flughafen Nội Bài. Für einen internationalen Flug drei Stunden einplanen.',
    'b.xmas': 'Wenn eure Reise Weihnachten oder Neujahr berührt, Flüge und die besten Unterkünfte bis Anfang November buchen.',
    'b.cruise': 'Eine Kreuzfahrt in der Lan-Hạ-Bucht ab Cát Bà, mit kostenloser Umbuchung bei Nebel oder Sturm.',
    'b.dalat': 'Einen lizenzierten lokalen Guide für die Hügel von Tà Năng und einen Guide für Bidoup–Núi Bà.',
    'b.cattien': 'Die Wanderung zum Krokodilsee samt Genehmigung am Vortag im Hauptquartier von Cát Tiên.',
    'b.caobang': 'Ein Auto mit Fahrer oder einen Easy-Rider-Guide für die Tage in Cao Bằng.',
    'b.homestay': 'Homestays in {x} ein paar Wochen vorher: Die guten sind klein.',
    'b.evening': 'Einen Abendflug nach Hause an Tag {days}, damit der letzte Morgen frei bleibt.',
    'p.warm': 'Eine warme Schicht und eine Mütze: Nachts wird es im Norden und in Đà Lạt 11–14 °C kalt.',
    'p.rain_central': 'Eine leichte Regenjacke und richtige Regenkleidung für Hội An und Huế.',
    'p.rain': 'Eine leichte Regenjacke. Es regnet selten, aber in der Bucht ist es oft neblig und feucht.',
    'p.hike': 'Wanderschuhe mit gutem Profil und schnell trocknende Kleidung.',
    'p.sun_pq': 'Badesachen und Sonnenschutz für den Süden und Phú Quốc.',
    'p.sun': 'Badesachen und Sonnenschutz für den Süden.',
    'p.cash': 'Bargeld in kleinen Scheinen: Homestays und Boote nehmen selten Karten.',
    'p.apps': 'Grab und Offline-Karten von Google Maps auf den Handys.',
    'pt.title': 'Vietnam, {days} Tage im Dezember: ', 'pt.home': 'Tag {days}: Heimflug ab Hà Nội', 'pt.flights': 'Flüge: '
  }
};

const I18N_DE = {
  pace: { travel: 'Reisetag', hike: 'Aktive Wanderung', nature: 'Leichte Natur', boat: 'Bootstag', culture: 'Leichte Kultur', rest: 'Ruhetag' },
  stops: {
    saigon: {
      name: 'Hồ Chí Minh City', sub: 'Ein ruhiger Start, die Mangroven von Cần Giờ und Saigon wie die Einheimischen',
      days: [
        ['Ankommen und runterkommen', 'Bewusst ohne Plan. Den Flug ausschlafen, dann Kaffee in einem Café im Viertel, eine Massage und ein Sprung in den Pool. Zum Sonnenuntergang mit dem Saigon Waterbus (falls er gerade fährt) vom Bạch-Đằng-Anleger flussaufwärts nach Thảo Điền und dort am Wasser essen.'],
        ['Die Mangroven von Cần Giờ', 'Ein Tagesausflug nach Süden, rund 2 Stunden mit dem Auto und einer kurzen Fähre bei Bình Khánh, in den Mangrovenwald von Cần Giờ, ein UNESCO-Biosphärenreservat. Mit dem Boot durch die Kanäle von Vàm Sát, hinauf auf den Vogelbeobachtungsturm, dann Meeresfrüchte am Strand von Cần Thạnh, bevor es zurückgeht.'],
        ['Saigon wie die Einheimischen', 'Morgens nach Chợ Lớn: der Bình-Tây-Markt, die Räucherspiralen im Thiên-Hậu-Tempel und Dim Sum in der Hà-Tôn-Quyền-Straße. Nachmittags in die Cafés der alten Wohnblocks, abends Schnecken und Meeresfrüchte an den Ständen der Vĩnh-Khánh-Straße in Distrikt 4.']
      ],
      gem: 'Cần Giờ: echter Mangrovenwald innerhalb der Stadtgrenzen, mit kaum ausländischen Besuchern.',
      skip: 'Die Củ-Chi-Tunnel mit einer großen Gruppentour und der Bến-Thành-Markt.',
      instead: 'Cần Giờ und der Bình-Tây-Markt in Chợ Lớn.'
    },
    dalat: {
      name: 'Hochland von Đà Lạt', sub: 'Der Wald von Bidoup–Núi Bà und die Grashügel von Tà Năng',
      days: [
        ['Hinauf ins Hochland', 'Das Stadtzentrum auslassen und nach Westen auf die Hügelkämme über dem Tà-Nung-Tal fahren: Sonnenuntergang über Kiefernhügeln und Kaffeefarmen. Übernachtung in einer Lodge außerhalb der Stadt, wo die Nächte still und sternenklar sind.'],
        ['Nebelwald von Bidoup–Núi Bà', 'Geführte Wanderung durch alte Kiefern, moosigen Wald und wilde Orchideen Richtung Hòn Giao. Im Dezember ist Trockenzeit, die Wege sind fest. Einen Guide im Besucherzentrum des Nationalparks buchen.'],
        ['Die Grashügel von Tà Năng', 'Tageswanderung auf dem ersten Abschnitt des Tà-Năng–Phan-Dũng-Trails, oft die schönste Wanderung Vietnams genannt. In der Trockenzeit leuchten die Hügel golden. Mit einem lizenzierten lokalen Guide gehen und die aktuellen Zugangsregeln prüfen: Die komplette Durchquerung war zeitweise gesperrt.'],
        ['Teehügel und eine Kaffeefarm', 'Sonnenaufgang über den Teehügeln von Cầu Đất, dann die Kaffeefarm einer K’Ho-Familie am Fuß des Lang Biang. Im Dezember blühen an den Hängen wilde Sonnenblumen und rosa Gras.']
      ],
      gem: 'Bidoup–Núi Bà. Die meisten Besucher von Đà Lạt verlassen die Stadt nie.',
      skip: 'Das Crazy House, die Blumenparks und die Sommerrodelbahn von Datanla.',
      instead: 'Der Nationalpark und die Hügel von Tà Năng.'
    },
    cattien: {
      name: 'Nationalpark Cát Tiên', sub: 'Tieflanddschungel, Gibbons und der Krokodilsee',
      days: [
        ['Hinein in den Dschungel', 'Mit der kleinen Fähre über den Fluss Đồng Nai zum Hauptquartier und im Park übernachten. Nach Einbruch der Dunkelheit eine Nachtfahrt, um Hirsche und Zibetkatzen zu sehen.'],
        ['Gibbons und der Krokodilsee', 'Vor Sonnenaufgang mit einem Ranger los, um die Gibbons rufen zu hören, dann der Waldweg zum Bàu Sấu, dem Krokodilsee. Wanderung und Genehmigung am Vortag im Hauptquartier buchen.']
      ],
      gem: 'Einer der letzten großen Tieflandwälder im Süden, vier Stunden von Hồ Chí Minh City.'
    },
    mekong: {
      name: 'Mekong-Delta', sub: 'Kanäle, Obstgärten und ein schwimmender Markt im kleinen Boot',
      days: [
        ['Hinunter ins Delta', 'Einchecken in einem Homestay an einem Kanal in Phong Điền, gleich außerhalb von Cần Thơ. Am späten Nachmittag mit einem kleinen Sampan durch die Kanäle der Obstgärten.'],
        ['Der schwimmende Markt im Morgengrauen', 'Um 5:30 Uhr im kleinen Boot los, um Cái Răng vor den Touristenbooten zu erreichen, dann die Seitenkanäle und eine Reisnudel-Werkstatt. Nachmittags mit dem Fahrrad auf die Insel Cồn Sơn.']
      ],
      gem: 'Cồn Sơn, eine gemeinschaftlich geführte kleine Insel, eine kurze Bootsfahrt von Cần Thơ.',
      skip: 'Tagestouren ab Mỹ Tho und Cái Bè: Busgruppen an denselben Kokosbonbon-Stopps.',
      instead: 'Eine Nacht im Homestay in Phong Điền und der Markt bei Sonnenaufgang.'
    },
    phuquoc: {
      name: 'Der stille Norden von Phú Quốc', sub: 'Ruhige See, Seesterne im flachen Wasser und der Nationalpark',
      days: [
        ['Inselzeit', 'Unterkunft an der Nordküste bei Gành Dầu, weit weg vom Resortstreifen im Süden. Sonnenuntergang über dem Golf von Thailand.'],
        ['Seesterne und Wald', 'Vormittags in Rạch Vẹm, wo Seesterne im flachen Wasser liegen (anschauen, nicht herausnehmen). Nachmittags auf den Waldstraßen des Nationalparks Phú Quốc, der fast den ganzen Norden bedeckt.'],
        ['Ein freier Tag', 'Nichts geplant: schwimmen, eine Massage, ein langes Mittagessen. Die Reise ist lang, und hier ist der Ort, um langsamer zu werden.'],
        ['Fischerdörfer und ein leerer Strand', 'Die Ostküste: Krabben zum Mittagessen auf dem Steg von Hàm Ninh, eine Pfefferfarm, dann Sonnenuntergang am Strand Vũng Bầu.']
      ],
      gem: 'Die Seesterne von Rạch Vẹm an der Nordküste.',
      skip: 'Sunset Town, die Seilbahn nach Hòn Thơm und VinWonders im Süden.',
      instead: 'Die Nordküste und der Nationalpark.'
    },
    central: {
      name: 'Hội An & Huế', sub: 'Die ruhige Seite von Hội An, der Hải-Vân-Pass und die Kaisergräber',
      days: [
        ['Hội Ans Nebenstraßen', 'Vom Flughafen Đà Nẵng sind es 45 Minuten nach Hội An. Mit dem Fahrrad hinaus zum Gemüsedorf Trà Quế und zu den Wasserkokos-Kanälen von Cẩm Thanh.'],
        ['Die Altstadt um 6 Uhr, dann der Hải-Vân-Pass', 'Die Altstadt von Hội An ansehen, bevor die Tagesbesucher kommen. Dann mit dem Auto oder mit einem Guide auf dem Motorrad über den Hải-Vân-Pass nach Huế, mit Halt an der Lagune Lăng Cô.'],
        ['Huế mit dem Fahrrad', 'Mit dem Rad zu den Gräbern von Minh Mạng und Tự Đức am Parfümfluss, dann am späten Nachmittag zur Thiên-Mụ-Pagode.'],
        ['Das Umland von Huế', 'Die ziegelgedeckte Brücke von Thanh Toàn zwischen den Reisfeldern, dann die Lagune Tam Giang bei Sonnenuntergang.']
      ],
      gem: 'Thanh Toàn, eine überdachte Brücke aus den 1770er-Jahren in den Reisfeldern östlich von Huế.',
      skip: 'Die Altstadt von Hội An um 19 Uhr, wenn das Laternengedränge am größten ist.',
      instead: 'Die Altstadt um 6 Uhr und die Dörfer ringsum.',
      warn: 'Im Dezember ist hier Regenzeit: rund 20 Regentage in Huế. Regenjacke einpacken und Pläne flexibel halten.'
    },
    puluong: {
      name: 'Pù Luông', sub: 'Bambus-Homestays, Reistäler und Gratwanderungen',
      days: [
        ['Hinein in die Täler', 'Einchecken in einem Bambus-Homestay über den Terrassen in Bản Đôn oder Kho Mường. Abendspaziergang durchs Dorf.'],
        ['Grate, Dörfer und ein Wasserfall', 'Ganztägige geführte Wanderung: die türkisfarbenen Becken des Hiêu-Wasserfalls, das Dorf Kho Mường mit seiner Höhle und die Grate zwischen den Tälern.'],
        ['Ein ruhiger Tag im Tal', 'Bambus-Wasserräder, ein Bambusfloß auf dem Fluss, Weben in einem Stelzenhaus und ein langes Mittagessen im Homestay. Im Dezember ist der Reis geerntet, die Morgen sind neblig und still.']
      ],
      gem: 'Die türkisfarbenen Becken des Hiêu-Wasserfalls.',
      skip: 'Mai Châu: schön, aber inzwischen umringt von Reisebus-Homestays.',
      instead: 'Pù Luông, etwa zwei Stunden weiter.'
    },
    ninhbinh: {
      name: 'Ninh Bình', sub: 'Ruderboote zwischen Kalksteintürmen',
      days: [
        ['Ankunft zwischen den Karstbergen', 'Unterkunft in den Gassen hinter Tam Cốc. Wer bis zum mittleren Nachmittag ankommt, nimmt zur goldenen Stunde das Ruderboot im Feuchtgebiet von Vân Long.'],
        ['Tràng An um 7 Uhr', 'Zur Öffnung am Anleger sein und die längste Höhlenroute nehmen, bevor die Reisebusse kommen. Danach mit dem Rad durch die Dorfgassen oder zu den Tempeln aus dem 10. Jahrhundert in Hoa Lư.']
      ],
      gem: 'Delacour-Languren an den Felsen von Vân Long, eine der seltensten Primatenarten der Welt.',
      skip: 'Der Aussichtspunkt Hang Múa bei Sonnenuntergang: 500 Stufen, Schulter an Schulter.',
      instead: 'Vân Long zur goldenen Stunde.'
    },
    catba: {
      name: 'Cát Bà & Lan-Hạ-Bucht', sub: 'Eine Dschungelinsel auf der ruhigen Seite der Hạ-Long-Bucht',
      days: [
        ['Auf die Insel', 'Limousinen-Van und eine kurze Fähre. Sonnenuntergang vom Cannon Fort, dann Meeresfrüchte am Hafen.'],
        ['Việt Hải und der Nationalpark', 'Wanderung zum Gipfel Ngự Lâm im Nationalpark Cát Bà, dann mit dem Rad weiter nach Việt Hải, einem autofreien Dorf zwischen Felswänden.'],
        ['Ein ruhiger Inseltag', 'Die kleinen Cát-Cò-Strände, eine Massage und ein langes Mittagessen mit Meeresfrüchten. Das Meer ist im Dezember frisch, etwa 20 °C.'],
        ['Eine Nacht in der Lan-Hạ-Bucht', 'An Bord einer Kreuzfahrt mit einer Übernachtung, die auf Cát Bà beginnt und durch die Lan-Hạ-Bucht bis an den ruhigen Südrand der Hạ-Long-Bucht fährt. Kajak fahren, ein schwimmendes Dorf besuchen und an Bord schlafen.']
      ],
      gem: 'Việt Hải, ein Dorf ohne Autos im Nationalpark.',
      skip: 'Hạ-Long-Kreuzfahrten ab Tuần Châu und die überlaufenen Stopps an der Sửng-Sốt-Höhle und der Insel Ti Tốp.',
      instead: 'Eine Kreuzfahrt, die auf Cát Bà beginnt.'
    },
    caobang: {
      name: 'Cao Bằng', sub: 'Der Bản-Giốc-Wasserfall und das Karstland an der Grenze',
      days: [
        ['Nach Norden an die Grenze', 'Eine lange, aber schöne Fahrt. Übernachtung in Cao Bằng und für die nächsten Tage ein Auto mit Fahrer oder einen Easy-Rider-Guide organisieren.'],
        ['Angel’s Eye und Pác Bó', 'Núi Mắt Thần, ein Berg mit einem Loch im Gipfel über einem grasbewachsenen Tal, und der klare grüne Bach von Pác Bó nahe der Grenze.'],
        ['Seen, ein Pass, eine Höhle und ein Wasserfall', 'Die Karstseen von Thang Hen, die Serpentinen des Mã-Phục-Passes, die Höhle Ngườm Ngao, dann der Bản-Giốc-Wasserfall im Licht des späten Nachmittags. Im Dezember führt er wenig Wasser: schmalere Fälle, klare türkise Becken. Übernachtung in Khuổi Ky, einem Tày-Dorf aus Steinhäusern.']
      ],
      gem: 'Die Steinhäuser von Khuổi Ky und die Seen von Thang Hen.',
      skip: 'Sapa und der Hà-Giang-Loop: volle Tourgruppen und Party-Hostels.',
      instead: 'Cao Bằng und Ba Bể.'
    },
    babe: {
      name: 'Ba Bể', sub: 'Ein Bergsee, umgeben von Tày-Dörfern',
      days: [
        ['Ankunft am See', 'Einchecken in einem Tày-Stelzenhaus in Pác Ngòi und in der Dämmerung am Seeufer spazieren.'],
        ['Auf dem Wasser', 'Mit Boot oder Kajak zur Höhle Puông, zum Wasserfall Đầu Đẳng und zur Insel Ba Góa. Nachmittags mit dem Rad durch die Dörfer.'],
        ['Dörfer über dem See', 'Eine halbtägige Wanderung mit lokalem Guide zu den Tày- und Dao-Dörfern oberhalb des Sees. Abends den Gastgeber nach Then-Gesang fragen.']
      ],
      gem: 'Eine Nacht in einem Tày-Stelzenhaus am Seeufer.'
    },
    hanoiStop: {
      name: 'Eine Nacht in Hà Nội', sub: 'Ein Zwischenstopp auf dem Weg nach Norden',
      days: [
        ['Streetfood und früh schlafen', 'Abends zurück in der Stadt. Streetfood in der Altstadt (bún chả, bánh cuốn, Eierkaffee), dann früh ins Bett vor der Fahrt nach Norden.']
      ]
    },
    hanoi: {
      name: 'Hà Nội', sub: 'Die Hauptstadt und der Heimflug',
      days: [
        ['Zurück in Hà Nội', 'Ein Spaziergang um den Hoàn-Kiếm-See und ein Abschiedsessen in der Altstadt.'],
        ['Literaturtempel und Museum für Ethnologie', 'Der Literaturtempel um 7:30 Uhr, vor den Gruppen. Dann das Museum für Ethnologie mit Dorfhäusern in Originalgröße im Garten.'],
        ['Das Dorf Đường Lâm', 'Tagesausflug, je etwa 1½ Stunden pro Strecke, nach Đường Lâm: Gassen aus Laterit, ein Gemeindehaus aus dem 17. Jahrhundert und Mittagessen bei einer Familie.'],
        ['Keramik und der Fluss', 'Das Töpferdorf Bát Tràng am Roten Fluss, dann bei Sonnenuntergang zu Fuß über die Long-Biên-Brücke zurück.']
      ],
      gem: 'Đường Lâm, ein altes Laterit-Dorf westlich der Stadt.',
      skip: 'Die Train Street: immer wieder für Besucher gesperrt und überfüllt, wenn sie offen ist.',
      instead: 'Die Long-Biên-Brücke im Morgengrauen.'
    }
  },
  routes: {
    balanced: { name: 'Ausgewogen', tag: 'Von allem etwas',
      blurb: 'Von allem etwas, mit Schwerpunkt Natur: Hochlandwald, Karstflüsse, die Bucht und der hohe Norden.',
      why: 'Für Natur mit etwas Kultur: durchgehend trockene Orte, zwei Wandertage, eine Nacht auf dem Boot und zwei kurze Flüge.',
      whyCity: 'Für Natur mit etwas Kultur: durchgehend trockene Orte, ein Tag im Nebelwald, eine Nacht auf dem Boot und zwei kurze Flüge.' },
    nature: { name: 'Natur & Wandern', tag: 'Am meisten Wandern',
      blurb: 'Dschungel zum Auftakt, zwei Wanderungen im Hochland, die Grate von Pù Luông und das Karstland an der Grenze.',
      why: 'Für Wanderer: die meisten Wandertage und die wenigsten Städte, dafür zwei lange Reisetage.' },
    culture: { name: 'Kultur & Essen', tag: 'Am meisten zu sehen',
      blurb: 'Märkte im Delta, Hội An und die Kaisergräber von Huế, die alte Hauptstadt bei Ninh Bình, die Bucht und Hà Nội.',
      why: 'Für Kultur und gutes Essen, mit der Bucht als Pause. Der Haken: In Hội An und Huế ist Regenzeit.' },
    slow: { name: 'Entspannt & Strand', tag: 'Wenigste Ortswechsel',
      blurb: 'Vier Strandtage im stillen Norden von Phú Quốc, dann Täler, Karst und die Bucht in ruhigem Tempo.',
      why: 'Für ein ruhiges Tempo: fünf Stationen, lange Aufenthalte, zwei Ruhetage und nur zwei Flüge.',
      whyCity: 'Für ein ruhiges Tempo: lange Aufenthalte, ruhige Tage und nur zwei Flüge.' },
    classic: {
      name: 'Sanfte Klassiker', tag: 'Unser Tipp: mit Eltern',
      blurb: 'Die berühmten Orte, ganz entspannt: die kühlen Hügel von Đà Lạt, das Laternenstädtchen Hội An und das kaiserliche Huế, Ninh Bình im Ruderboot, eine bequeme Nacht auf der Lan-Hạ-Bucht und Hà Nội.',
      why: 'Gebaut für die Reise mit Eltern: keine Wanderungen und keine Motorräder, Autos mit Fahrer, kurze Transfers und nur kurze Flüge. Der Haken: In Hội An und Huế ist Regenzeit, deshalb hat dort jeder Tag einen Regenplan.'
    }
  },
  swaps: {
    coast: { q: 'Trockenes Hochland oder die regnerische Zentralküste?',
      pts: { dalat: ['Trockene, sonnige Tage und kalte Nächte (um 13 °C)', 'Zwei der schönsten Wanderungen der Reise', 'Natur zuerst, wenig Sehenswürdigkeiten zum Abhaken'],
        central: ['Hội An, der Hải-Vân-Pass und die Gräber von Huế', 'Regenzeit: rund 20 Regentage im Dezember', 'Kultur zuerst, weniger Natur'] } },
    water: { q: 'Die Bucht oder die Täler?',
      pts: { catba: ['Eine Nacht auf dem Boot zwischen den Karstinseln', 'Kajak, ein autofreies Dorf, Meeresfrüchte', 'Kühl und oft neblig; das Meer hat etwa 20 °C'],
        puluong: ['Bambus-Homestays und eine Ganztageswanderung', 'Reistäler, Wasserräder und Thái-Dörfer', 'Im Dezember ist der Reis geerntet; neblige Morgen'] } },
    south: { q: 'Das Delta oder der Dschungel?',
      pts: { mekong: ['Schwimmender Markt, Obstgärten und Homestay-Leben', 'Flach, einfach und sehr gesellig', 'Warm und trocken im Dezember'],
        cattien: ['Gibbons im Morgengrauen und eine Nachtsafari', 'Waldwege und der Krokodilsee', 'Beginn der Trockenzeit: weniger Blutegel'] } }
  },
  weather: {
    saigon: { verdict: 'Heiß und trocken' },
    dalat: { verdict: 'Trocken, kalte Nächte' },
    cattien: { verdict: 'Warm, wird trockener', station: 'Hồ Chí Minh City, die nächstgelegene Langzeitstation' },
    mekong: { verdict: 'Warm und trocken' },
    phuquoc: { verdict: 'Ruhige See, sonnig' },
    central: { verdict: 'Regenzeit', station: 'Huế; Đà Nẵng nahe Hội An hat 218 mm an 19 Tagen' },
    puluong: { verdict: 'Trocken, kalte Nächte', station: 'Hòa Bình; Pù Luông liegt höher und ist ein paar Grad kälter' },
    ninhbinh: { verdict: 'Trocken und mild', station: 'Thanh Hóa, die nächstgelegene Langzeitstation' },
    catba: { verdict: 'Kühl, oft neblig' },
    caobang: { verdict: 'Trocken, kalte Nächte' },
    babe: { verdict: 'Trocken, kalte Nächte' },
    hanoi: { verdict: 'Trocken und mild' }
  },
  leftOut: [
    { name: 'Sapa', why: 'Im Dezember kalt und neblig, mit frostigen Nächten, und der vollste Trekking-Ort im Norden. Cao Bằng und Ba Bể bieten die Berge ohne das Gedränge.' },
    { name: 'Der Hà-Giang-Loop', why: 'Spektakulär, aber inzwischen ein Fließband von Easy-Rider-Gruppentouren. Besser auf einer längeren Reise außerhalb der Hauptsaison.' },
    { name: 'Die Hạ-Long-Bucht ab Hạ Long City', why: 'Hunderte Boote auf derselben Runde. Die Lan-Hạ-Bucht ab Cát Bà hat denselben Karst mit viel weniger Booten.' },
    { name: 'Phong Nha', why: 'Im Dezember ist an der Zentralküste Regenzeit, und die großen Höhlenexpeditionen beginnen erst wieder um Februar.' },
    { name: 'Côn Đảo und Sơn Trà', why: 'Raue See und Regen im Dezember. Beide sind ein einfaches Frühlingswochenende ab Hồ Chí Minh City.' }
  ],
  cap: {
    saigon_0: 'Der Saigon-Fluss zur blauen Stunde',
    saigon_1: 'Eine einzelne Mangrove vor der Küste von Cần Giờ',
    saigon_2: 'Ein Holzsteg durch die Mangroven von Rừng Sác, Cần Giờ',
    saigon_3: 'Räucherwerk im Thiên-Hậu-Tempel, Chợ Lớn',
    saigon_4: 'Trockenwaren auf dem Bình-Tây-Markt',
    dalat_0: 'Auf dem Tà-Năng-Trail in der Trockenzeit',
    dalat_1: 'Bach und Becken bei Hòn Giao, Nationalpark Bidoup–Núi Bà',
    dalat_2: 'Alte Kiefern in Bidoup–Núi Bà nach dem Regen',
    dalat_4: 'Ausblick vom Berg Lang Biang',
    dalat_3: 'Zelte auf den Grashügeln von Tà Năng',
    cattien_0: 'Fischerboot auf einem See im Feuchtgebiet von Cát Tiên',
    cattien_1: 'Sonnenuntergang über den Feuchtgebieten von Cát Tiên',
    cattien_3: 'Brettwurzeln eines Urwaldriesen',
    cattien_4: 'Feuchtgebiet vom Waldrand aus',
    mekong_0: 'Ein Ruderer auf dem Mekong kurz vor Sonnenaufgang',
    mekong_2: 'Der schwimmende Markt Cái Răng, Cần Thơ',
    mekong_3: 'Verkauf vom Boot in Phong Điền',
    mekong_1: 'Ein Kanal mit Nipapalmen im Delta',
    phuquoc_0: 'Granitfelsen an einem Strand auf Phú Quốc',
    phuquoc_1: 'Seesterne im flachen Wasser, Phú Quốc',
    phuquoc_2: 'Sonnenuntergang über dem Golf von Thailand',
    phuquoc_5: 'Ein ruhiger Strand bei Hàm Ninh',
    hoian_0: 'Hội Ans Uferpromenade am Fluss Thu Bồn',
    hoian_1: 'Ein Korbboot zwischen Wasserkokospalmen',
    hue_0: 'Das Grab von Kaiser Minh Mạng in Huế im Nebel',
    hue_4: 'Der Hải-Vân-Pass über dem Meer',
    hoian_2: 'Die ziegelgedeckte Brücke Thanh Toàn bei Huế',
    puluong_1: 'Sonnenuntergang über dem Tal von Pù Luông im November',
    puluong_2: 'Ein Dorf zwischen den Reisfeldern, Pù Luông',
    puluong_3: 'Mit dem Bambusfloß auf dem Fluss',
    puluong_0: 'Die Terrassen von Pù Luông zur Erntezeit (September)',
    puluong_5: 'Weben am Holzwebstuhl zu Hause',
    ninhbinh_1: 'Ruderboot unter den Felsen von Tràng An',
    ninhbinh_0: 'Kalksteintürme in Tràng An',
    ninhbinh_3: 'Das Feuchtgebiet Vân Long zur goldenen Stunde',
    ninhbinh_4: 'Ein Delacour-Langur an einer Kalksteinwand',
    ninhbinh_5: 'Durch eine Höhle auf der Bootsroute von Tràng An',
    ninhbinh_6: 'Hoa Lư, die Königshauptstadt des 10. Jahrhunderts',
    catba_0: 'Dschunken in der Lan-Hạ-Bucht',
    catba_3: 'Morgendunst über den Inseln vor Cát Bà',
    catba_1: 'Ein kleiner Strand in der Lan-Hạ-Bucht',
    catba_2: 'Schwimmende Fischfarm vor Cát Bà',
    catba_6: 'Das Dorf Việt Hải im Nationalpark Cát Bà',
    caobang_0: 'Der Bản-Giốc-Wasserfall vom Anleger der Bambusflöße',
    caobang_6: 'Núi Mắt Thần, der Angel’s-Eye-Berg',
    caobang_1: 'Bản Giốc über den Reisfeldern',
    caobang_2: 'In der Höhle Ngườm Ngao',
    caobang_3: 'Karstberg gespiegelt in einem Reisfeld bei Bản Giốc',
    babe_0: 'Ein Boot auf dem Ba-Bể-See',
    babe_1: 'Stilles Wasser auf dem Ba-Bể-See',
    babe_2: 'Ein Tày-Stelzenhaus am See',
    babe_3: 'Die Felder von Pác Ngòi zwischen See und Bergen',
    babe_5: 'Then-Gesang mit einer Tính-Laute',
    hanoi_0: 'Ein Zug auf der Long-Biên-Brücke',
    hanoi_1: 'Das Haupttor des Literaturtempels',
    hanoi_3: 'Eine Lateritgasse im Dorf Đường Lâm',
    hanoi_5: 'Ein Stelzenhaus im Garten des Museums für Ethnologie'
  },
  night: {
    dalat: { pro: ['Ein dritter Tag im Hochland, für die Grashügel von Tà Năng', 'Trockene, sonnige Tage und kühle Nächte'],
      con: ['Ninh Bình schrumpft auf einen Abend und eine frühe Bootsfahrt in Tràng An vor der Abreise'] },
    central: { pro: ['Ein Tag mehr für Huế und sein Umland', 'Puffer im Plan, falls der Regen einen Tag verdirbt'],
      con: ['Ninh Bình schrumpft auf einen Abend und eine frühe Bootsfahrt in Tràng An vor der Abreise'] },
    catba: { pro: ['Ein ganzer Tag in Việt Hải zusätzlich zur Nacht auf dem Boot', 'Mehr Zeit in der Bucht, dem Höhepunkt des Nordens'],
      con: ['Ninh Bình schrumpft auf einen Abend und eine frühe Bootsfahrt in Tràng An vor der Abreise'] },
    puluong: { pro: ['Ein ruhiger Tag im Tal nach der Wanderung', 'Eine Nacht mehr in einer Bambus-Unterkunft'],
      con: ['Ninh Bình schrumpft auf einen Abend und eine frühe Bootsfahrt in Tràng An vor der Abreise'] },
    ninhbinh: { pro: ['Ein ganzer, entspannter Tag im Karst: Tràng An, Hoa Lư und Vân Long', 'Kein früher Start am Tag der Weiterreise'],
      con: { catba: 'Cát Bà wird zu Ankunft plus Kreuzfahrt, ohne Inseltag', puluong: 'Pù Luông wird zu Ankunft plus Wanderung, ohne ruhigen Tag',
      dalat: 'Đà Lạt verliert seinen dritten Tag und die Grashügel von Tà Năng', central: 'Hội An & Huế bekommt einen Tag weniger und weniger Puffer für Regen' } }
  },
  /* gentle versions [title, text], one-night versions (solo) and rain plans, by index into each stop's days in data.js */
  dayExtra: {
    dalat: { easy: {
      1: ['Kiefernwald und ein Kloster am See', 'Die Seilbahn vom Robin Hill schwebt über den Kiefernwald zum Zen-Kloster Trúc Lâm oberhalb des Tuyền-Lâm-Sees. Durch die Klostergärten schlendern, dann gemütlich Boot fahren oder lange am See zu Mittag essen.'],
      2: ['Die alte Bahn und die Blumendörfer', 'Mit dem nostalgischen Zug vom Bahnhof aus den 1930er-Jahren nach Trại Mát zur Mosaik-Pagode Linh Phước, danach die Gewächshäuser des Blumendorfs Vạn Thành.'] } },
    cattien: { easy: {
      1: ['Cát Tiên ganz entspannt', 'Ein kurzer geführter Spaziergang zu den Baumriesen nahe der Parkverwaltung, dann mit dem Boot über den Đồng Nai zur Primaten-Rettungsstation Dao Tiến, wo gerettete Gibbons und Languren auf die Auswilderung vorbereitet werden.'] } },
    mekong: { easy: {
      1: ['Der schwimmende Markt im Morgengrauen', 'Um 5:30 Uhr mit dem kleinen Boot los, um vor den Ausflugsbooten in Cái Răng zu sein, dann die Seitenkanäle und eine Reisnudel-Werkstatt. Nachmittags gemütlich mit dem Boot nach Cồn Sơn zu Obstgärten und einem hausgemachten Mittagessen.'] } },
    central: {
      easy: {
        0: ['Hội An ganz gemütlich', 'Vom Flughafen Đà Nẵng sind es 45 Minuten nach Hội An. Ein Kochkurs im Gemüsedorf Trà Quế (mit dem Taxi), dann die Altstadt in der Dämmerung, wenn die Laternen angehen, mit einer Sampan-Fahrt auf dem Thu Bồn. Touristisch, und trotzdem wunderschön.'],
        1: ['Die Altstadt um 6 Uhr, dann mit dem Auto über den Hải-Vân-Pass', 'Hội Ans Altstadt sehen, bevor die Tagesgäste kommen. Dann mit Auto und Fahrer über den Hải-Vân-Pass nach Huế, mit Halt an der Lagune von Lăng Cô.'],
        2: ['Huế mit Boot und Auto', 'Mit dem Drachenboot den Parfümfluss hinauf zur Thiên-Mụ-Pagode, dann mit dem Auto zu den Gräbern von Minh Mạng und Tự Đức. Die Kaiserstadt ist flach und gut zu Fuß zu schaffen.'] },
      rain: {
        0: 'Ein Kochkurs oder ein Laternen-Workshop und die überdachte Markthalle.',
        1: 'Liegt der Pass in den Wolken, nehmt den Tunnel und verbringt die Zeit in Hội Ans Versammlungshallen oder beim Schneider.',
        2: 'Die überdachten Galerien der Kaiserstadt und das Museum der königlichen Altertümer, danach ein langes Mittagessen mit Bún bò Huế.',
        3: 'Ein Kochkurs in Huế oder mit dem Auto zu den alten Gartenhäusern von Kim Long.' } },
    puluong: { easy: {
      1: ['Die Täler von der Straße aus', 'Mit Auto und Fahrer die Talstraße entlang, zu den unteren Becken des Hiêu-Wasserfalls (ein kurzer, leichter Weg), dann ins Dorf Kho Mường und ein langes Mittagessen im Stelzenhaus.'] } },
    ninhbinh: { solo: {
      0: ['Karst in der Dämmerung und am Morgen', 'Unterkunft in den Gassen hinter Tam Cốc; bis zum Nachmittag ankommen und zur goldenen Stunde im Ruderboot durch das Feuchtgebiet Vân Long. Am nächsten Morgen um 7 Uhr zur Öffnung am Anleger von Tràng An für die Höhlenroute, dann weiter.'] }, easy: {
      1: ['Tràng An um 7 Uhr', 'Zur Öffnung am Anleger sein und die längste Höhlenroute nehmen, bevor die Reisebusse kommen; gerudert wird für euch. Danach mit dem Auto zu den Tempeln von Hoa Lư aus dem 10. Jahrhundert.'] } },
    catba: { easy: {
      0: ['Auf die Insel', 'Limousinen-Van und eine kurze Fähre. Ein ruhiger Abend am Hafen und Meeresfrüchte am Wasser.'],
      1: ['Việt Hải ohne Aufstieg', 'Mit dem Boot von Cát Bà zum Anleger von Việt Hải, dann etwa 5 km auf flachem Weg ins Dorf, mit dem Elektrowagen oder dem Fahrrad, und Mittagessen zwischen den Felsen.'],
      3: ['Eine Nacht auf der Lan-Hạ-Bucht', 'Eine Kreuzfahrt mit einer Übernachtung in die Lan-Hạ-Bucht und an den ruhigen Südrand der Hạ-Long-Bucht. Wählt ein größeres, ruhiges Schiff mit Kabinen mit eigenem Bad, nehmt statt des Kajaks das von Einheimischen geruderte Bambusboot und schaut den Sonnenuntergang vom Deck.'] } },
    caobang: { easy: {
      0: ['Nach Norden an die Grenze', 'Eine lange, aber schöne Fahrt, am besten mit Mittagspause. Übernachtung in Cao Bằng; für die nächsten Tage ein bequemes Auto mit Fahrer buchen.'] } },
    babe: { easy: {
      1: ['Auf dem Wasser', 'Mit dem Boot zur Puông-Höhle, zum Đầu-Đẳng-Wasserfall und zur Insel Ba Góa; rudern müsst ihr nicht. Nachmittags ein gemütlicher Spaziergang am Seeufer.'],
      2: ['Ein ruhiger Morgen am See', 'Eine kurze Bootsfahrt in ein benachbartes Tày-Dorf und eine Kochstunde bei euren Gastgebern. Fragt abends nach Then-Gesang.'] } }
  }
};