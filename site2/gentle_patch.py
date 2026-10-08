"""One-off patch: gentle day versions (e), rain plans and the Easy classics style in src/data.js."""
import re

def js(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"

p = 'src/data.js'
s = open(p, encoding='utf-8').read()

E = {
 ('dalat', 'Bidoup–Núi Bà cloud forest'): ('nature', 'Pine forest and a lake monastery', 'The cable car from Robin Hill glides over the pine forest to Trúc Lâm, a quiet Zen monastery above Tuyền Lâm lake. Walk its gardens, then a slow boat on the lake or a long lakeside lunch.'),
 ('dalat', 'The Tà Năng grass hills'): ('culture', 'The old railway and the flower villages', 'The vintage train from Đà Lạt’s 1930s station to Trại Mát and the mosaic Linh Phước pagoda, then the greenhouses of the Vạn Thành flower village.'),
 ('cattien', 'Gibbons and Crocodile Lake'): ('nature', 'Cát Tiên the easy way', 'A short guided walk to the giant trees near headquarters, then a boat across the Đồng Nai river to the Dao Tiến primate rescue centre, where rescued gibbons and langurs are prepared for release.'),
 ('mekong', 'The floating market at dawn'): ('culture', 'The floating market at dawn', 'Leave at 5:30 am by small boat to reach Cái Răng before the tour boats, then the side canals and a rice-noodle workshop. In the afternoon, a slow boat to Cồn Sơn islet for fruit gardens and a home-cooked lunch.'),
 ('central', 'Hội An’s back roads'): ('travel', 'Hội An at an easy pace', 'From Đà Nẵng airport it is 45 minutes to Hội An. A cooking class in Trà Quế vegetable village (by taxi), then the old town at dusk when the lanterns come on, with a sampan ride on the Thu Bồn. Touristy, and still lovely.'),
 ('central', 'The old town at 6 am, then the Hải Vân Pass'): ('culture', 'The old town at 6 am, then the Hải Vân Pass by car', 'See Hội An’s old town before the day-trippers arrive. Then a car with a driver over the Hải Vân Pass to Huế, stopping at Lăng Cô lagoon.'),
 ('central', 'Huế by bicycle'): ('culture', 'Huế by boat and car', 'A dragon boat up the Perfume River to Thiên Mụ pagoda, then the tombs of Minh Mạng and Tự Đức by car. The Imperial City is flat and easy on foot.'),
 ('puluong', 'Ridges, villages and a waterfall'): ('nature', 'The valleys from the road', 'A car with a driver along the valley road, the lower pools of Hiêu waterfall (a short, easy walk), then Kho Mường village and a long lunch in a stilt house.'),
 ('ninhbinh', 'Tràng An at 7 am'): ('boat', 'Tràng An at 7 am', 'Be at the pier when it opens and take the longest cave route before the tour buses arrive; the boats are rowed for you. Then the 10th-century temples at Hoa Lư by car.'),
 ('catba', 'To the island'): ('travel', 'To the island', 'Limousine van and a short ferry. A slow evening along the harbour and seafood by the water.'),
 ('catba', 'Việt Hải and the national park'): ('nature', 'Việt Hải without the climb', 'A boat from Cát Bà town to the Việt Hải pier, then about 5 km of flat lane into the village by electric cart or bicycle, and lunch among the cliffs.'),
 ('catba', 'Overnight on Lan Hạ Bay'): ('boat', 'Overnight on Lan Hạ Bay', 'A two-day, one-night cruise into Lan Hạ Bay and the quiet southern edge of Hạ Long Bay. Pick a bigger, steadier boat with en-suite cabins, take the bamboo boat rowed by locals instead of a kayak, and watch the sunset from the deck.'),
 ('caobang', 'North to the border'): ('travel', 'North to the border', 'A long but scenic drive, best split with a lunch stop. Sleep in Cao Bằng town and book a comfortable car with a driver for the next days.'),
 ('babe', 'Villages above the lake'): ('culture', 'A slow morning by the lake', 'A short boat ride to a neighbouring Tày village and a cooking lesson with your hosts. Ask about Then singing in the evening.'),
}
RAIN = {
 ('central', 'Hội An’s back roads'): 'A cooking class or a lantern-making workshop, and the covered market.',
 ('central', 'The old town at 6 am, then the Hải Vân Pass'): 'If the pass is in cloud, take the tunnel and spend the time in Hội An’s assembly halls or at a tailor.',
 ('central', 'Huế by bicycle'): 'The Imperial City’s covered galleries and the Museum of Royal Antiquities, then a long lunch of bún bò Huế.',
 ('central', 'Huế’s countryside'): 'A Huế cooking class, or the old garden houses of Kim Long by car.',
}

def stop_span(src, sid):
    blocks = list(re.finditer(r"\n  (\w+): \{\n    name: ", src))
    for i, m in enumerate(blocks):
        if m.group(1) == sid:
            end = blocks[i + 1].start() if i + 1 < len(blocks) else src.index('\nconst ROUTES')
            return m.start(), end
    raise KeyError(sid)

for sid, title in sorted(set(E) | set(RAIN)):
    a, b = stop_span(s, sid)
    seg = s[a:b]
    i = seg.index("t: " + js(title) + ", d: ")
    j = seg.index("' }", i) + 1
    add = ''
    if (sid, title) in E:
        pace, t, d = E[(sid, title)]
        add += ", e: { pace: '%s', t: %s, d: %s }" % (pace, js(t), js(d))
    if (sid, title) in RAIN:
        add += ", rain: " + js(RAIN[(sid, title)])
    s = s[:a] + seg[:j] + add + seg[j:] + s[b:]

old = """    stops: [['phuquoc', 4], ['puluong', 3], ['ninhbinh', 2], ['catba', 4], ['hanoi', 2]]
  }
};"""
assert s.count(old) == 1
s = s.replace(old, """    stops: [['phuquoc', 4], ['puluong', 3], ['ninhbinh', 2], ['catba', 4], ['hanoi', 2]]
  },
  classic: {
    name: 'Easy classics', tag: 'With parents', cover: 'catba_0', gentle: true,
    blurb: 'The famous places, done gently: Đà Lạt’s cool hills, lantern-lit Hội An and imperial Huế, Ninh Bình by rowing boat, a comfortable night on Lan Hạ Bay and Hà Nội.',
    why: 'Built for travelling with parents: no hikes and no motorbikes, cars with a driver, short transfers and three short flights. The catch: Hội An and Huế are in their rainy season, so every day there has a rain plan.',
    stops: [['dalat', 2], ['central', 4], ['ninhbinh', 2], ['catba', 3], ['hanoi', 4]]
  }
};""")
old = "'PQC-HAN': 2.1, 'DLI-HAN': 1.8,"
assert s.count(old) == 1
s = s.replace(old, "'PQC-HAN': 2.1, 'DLI-HAN': 1.8, 'DLI-DAD': 1.1,")
s = s.replace("/* Trip data: stops, hand-built routes, swaps, travel legs, December weather. */",
              "/* Trip data: stops, hand-built routes, swaps, travel legs, December weather.\n   A day's `e` is its gentle version (no hikes, no bikes) for the parents switch; `rain` is a wet-day plan. */")
open(p, 'w', encoding='utf-8').write(s)
print('e:', s.count("e: { pace"), 'rain:', s.count("rain: '"))
