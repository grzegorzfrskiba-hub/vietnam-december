"""One-off patch: German gentle/rain texts, UI keys for the parents switch, Easy classics style."""
p = 'src/i18n.js'
s = open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, a
    s = s.replace(a, b)

EN = """    'e.q': 'Travelling with older parents?', 'e.name': 'Gentle version', 'e.tag': 'Any style', 'e.on': 'On', 'e.off': 'Off',
    'e.p1': 'Hikes become easy walks, boat trips or scenic drives', 'e.p2': 'Cars with a driver instead of bicycles or motorbikes',
    'e.p3': 'Long drives stay as they are (Cao Bằng is 6–8 hours); Easy classics has the shortest transfers',
    'e.badge': 'Gentle', 't.rain': 'If it pours: ', 'why.gentle': ' The gentle version is on: no hikes, no bikes.',
"""
DE = """    'e.q': 'Mit älteren Eltern unterwegs?', 'e.name': 'Entspannte Variante', 'e.tag': 'Für jeden Stil', 'e.on': 'An', 'e.off': 'Aus',
    'e.p1': 'Wanderungen werden zu leichten Spaziergängen, Bootsfahrten oder Panoramafahrten', 'e.p2': 'Autos mit Fahrer statt Fahrrad oder Motorrad',
    'e.p3': 'Lange Fahrten bleiben (nach Cao Bằng 6–8 Stunden); die Entspannten Klassiker haben die kürzesten Transfers',
    'e.badge': 'Entspannt', 't.rain': 'Bei Starkregen: ', 'why.gentle': ' Die entspannte Variante ist an: keine Wanderungen, keine Fahrräder.',
"""
rep("    'x.q': 'Extra days at the start?',", EN + "    'x.q': 'Extra days at the start?',")
rep("    'x.q': 'Ein paar Tage mehr am Anfang?',", DE + "    'x.q': 'Ein paar Tage mehr am Anfang?',")

rep("'hero.lede': 'Four complete routes for two friends who like nature, hiking, culture and slow days. Each one",
    "'hero.lede': 'Five complete routes for friends and family: nature, hiking, culture, slow days, and an easy one for travelling with parents. Each one")
rep("choose the one that sounds most like the two of you.", "choose the one that sounds most like your group.")
rep("'hero.lede': 'Vier fertige Routen für zwei Freunde, die Natur, Wandern, Kultur und ruhige Tage mögen. Jede",
    "'hero.lede': 'Fünf fertige Routen für Freunde und Familie: Natur, Wandern, Kultur, ruhige Tage und eine entspannte Route für die Reise mit Eltern. Jede")
rep("wählt den Stil, der am besten zu euch beiden passt.", "wählt den Stil, der am besten zu eurer Gruppe passt.")

# German route text for the new style: insert after the 'slow' entry of I18N_DE.routes
i = s.index('  routes: {', s.index('const I18N_DE'))
j = s.index('\n  },', i)
s = s[:j] + """,
    classic: {
      name: 'Entspannte Klassiker', tag: 'Mit Eltern',
      blurb: 'Die berühmten Orte, ganz entspannt: die kühlen Hügel von Đà Lạt, das Laternenstädtchen Hội An und das kaiserliche Huế, Ninh Bình im Ruderboot, eine bequeme Nacht auf der Lan-Hạ-Bucht und Hà Nội.',
      why: 'Gebaut für die Reise mit Eltern: keine Wanderungen und keine Motorräder, Autos mit Fahrer, kurze Transfers und drei kurze Flüge. Der Haken: In Hội An und Huế ist Regenzeit, deshalb hat dort jeder Tag einen Regenplan.'
    }""" + s[j:]

# gentle versions and rain plans, by index into the stop's days array in data.js
EXTRA = """,
  /* gentle versions [title, text] and rain plans, by index into each stop's days in data.js */
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
    ninhbinh: { easy: {
      1: ['Tràng An um 7 Uhr', 'Zur Öffnung am Anleger sein und die längste Höhlenroute nehmen, bevor die Reisebusse kommen; gerudert wird für euch. Danach mit dem Auto zu den Tempeln von Hoa Lư aus dem 10. Jahrhundert.'] } },
    catba: { easy: {
      0: ['Auf die Insel', 'Limousinen-Van und eine kurze Fähre. Ein ruhiger Abend am Hafen und Meeresfrüchte am Wasser.'],
      1: ['Việt Hải ohne Aufstieg', 'Mit dem Boot von Cát Bà zum Anleger von Việt Hải, dann etwa 5 km auf flachem Weg ins Dorf, mit dem Elektrowagen oder dem Fahrrad, und Mittagessen zwischen den Felsen.'],
      3: ['Eine Nacht auf der Lan-Hạ-Bucht', 'Eine Kreuzfahrt mit einer Übernachtung in die Lan-Hạ-Bucht und an den ruhigen Südrand der Hạ-Long-Bucht. Wählt ein größeres, ruhiges Schiff mit Kabinen mit eigenem Bad, nehmt statt des Kajaks das von Einheimischen geruderte Bambusboot und schaut den Sonnenuntergang vom Deck.'] } },
    caobang: { easy: {
      0: ['Nach Norden an die Grenze', 'Eine lange, aber schöne Fahrt, am besten mit Mittagspause. Übernachtung in Cao Bằng; für die nächsten Tage ein bequemes Auto mit Fahrer buchen.'] } },
    babe: { easy: {
      2: ['Ein ruhiger Morgen am See', 'Eine kurze Bootsfahrt in ein benachbartes Tày-Dorf und eine Kochstunde bei euren Gastgebern. Fragt abends nach Then-Gesang.'] } }
  }
};"""
assert s.rstrip().endswith('}\n};') or s.rstrip().endswith('};')
k = s.rstrip().rindex('\n};')
s = s[:k] + EXTRA + s[k + 4:]
open(p, 'w', encoding='utf-8').write(s)
print('i18n ok')
