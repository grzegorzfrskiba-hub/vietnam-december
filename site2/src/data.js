/* Trip data: stops, hand-built routes, swaps, travel legs, December weather.
   A day's `e` is its gentle version (no hikes, no bikes) for the parents switch; `rain` is a wet-day plan.
   `pp` is what that day's trips cost per person, [low, high] in euros: cars with a driver, guides, tickets
   (research/budget-2026-10.md). A gentle version with its own costs carries its own `pp`.
   `early: true` marks a day that starts before 6 am (a sunrise trip, the 5:30 boat, the old town at 6); a gentle or
   one-night version says `early` itself when it differs. The night taxi on day 15 is the same for every route, so it is not marked. */

const PACE = {
  travel:  'Travel day',
  hike:    'Active hike',
  nature:  'Easy nature',
  boat:    'Boat day',
  culture: 'Easy culture',
  rest:    'Rest day'
};

/* Map points: [lat, lon]. Airports are separate so flight lines end in the right place. */
const PT = {
  start: [10.78, 106.70], SGN: [10.82, 106.66], VCA: [10.08, 105.71], PQC: [10.17, 103.99],
  DLI: [11.75, 108.37], DAD: [16.04, 108.20], HUI: [16.40, 107.70], HAN: [21.22, 105.80],
  saigon: [10.78, 106.70], mekong: [10.03, 105.78], phuquoc: [10.33, 103.97], cattien: [11.43, 107.43], dalat: [11.94, 108.44],
  central: [16.46, 107.59], puluong: [20.45, 105.18], ninhbinh: [20.25, 105.90], catba: [20.73, 107.05],
  hanoi: [21.03, 105.85], hanoiStop: [21.03, 105.85], caobang: [22.67, 106.25], babe: [22.41, 105.62]
};

const STOPS = {
  /* Optional add-on: three days in the city before the route starts (state.saigon). */
  saigon: {
    name: 'Hồ Chí Minh City', sub: 'A slow start, the Cần Giờ mangroves and Saigon the local way', short: 'Hồ Chí Minh City',
    region: 'South', place: 'Ho Chi Minh City, Vietnam', label: null,
    photos: ['saigon_0', 'saigon_1', 'saigon_2', 'saigon_3', 'saigon_4'],
    days: [
      { p: 1, o: 1, pace: 'rest', t: 'Land and slow down', d: 'No plans on purpose. Sleep off the flight, then coffee at a neighbourhood café, a massage and a swim. At sunset take the Saigon Waterbus (if it is running) from Bạch Đằng pier up the river to Thảo Điền and eat by the water.' },
      { p: 2, o: 2, pace: 'nature', pp: [35, 60], t: 'The Cần Giờ mangroves', d: 'A day trip south, about 2 hours by car with a short ferry at Bình Khánh, to the Cần Giờ mangrove forest, a UNESCO biosphere reserve. A boat through the channels at Vàm Sát, the bird-watching tower, then seafood on the beach at Cần Thạnh before driving back.' },
      { p: 3, o: 3, pace: 'culture', t: 'Saigon the local way', d: 'Chợ Lớn in the morning: Bình Tây market, the incense coils of Thiên Hậu temple and dim sum on Hà Tôn Quyền street. Afternoon in the cafés of the old apartment blocks, then dinner at the snail and seafood stalls on Vĩnh Khánh street in District 4.' }
    ],
    gem: 'Cần Giờ: real mangrove forest inside the city limits, with almost no foreign visitors.',
    skip: 'The Củ Chi tunnels on a big group tour, and Bến Thành market.',
    instead: 'Cần Giờ, and Bình Tây market in Chợ Lớn.'
  },
  dalat: {
    name: 'Đà Lạt highlands', sub: 'Pine hills, quiet lodges and cold, clear nights', short: 'Đà Lạt',
    region: 'South', place: 'Da Lat, Vietnam', label: { dx: 0, dy: -15, a: 'middle' },
    photos: ['dalat_0', 'dalat_1', 'dalat_2', 'dalat_4', 'dalat_3'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Up to the highlands', d: 'Skip the town centre and head west to the ridges above the Tà Nung valley for sunset over pine hills and coffee farms. Sleep in a lodge outside town, where the nights are quiet and starry.' },
      { p: 2, o: 2, pace: 'hike', pp: [20, 30], t: 'Bidoup–Núi Bà cloud forest', d: 'A guided trek through old pines, mossy forest and wild orchids toward Hòn Giao. December is the dry season, so the trails are firm. Book a guide at the park visitor centre.', e: { pace: 'nature', pp: [15, 25], t: 'Pine forest and a lake monastery', d: 'The cable car from Robin Hill glides over the pine forest to Trúc Lâm, a quiet Zen monastery above Tuyền Lâm lake. Walk its gardens, then a slow boat on the lake or a long lakeside lunch.' } },
      { p: 3, o: 3, pace: 'hike', pp: [31, 44], t: 'The Tà Năng grass hills', d: 'A day hike on the first part of the Tà Năng–Phan Dũng trail, often called Vietnam’s most beautiful trek. The hills turn gold in the dry season. Only go with a licensed local guide, who arranges the permit: after accidents the route was closed to hikers without a guide, and walking it alone is still not allowed. Confirm the current rules with the operator when you book.', e: { pace: 'culture', pp: [16, 26], t: 'The old railway and the flower villages', d: 'The vintage train from Đà Lạt’s 1930s station to Trại Mát and the mosaic Linh Phước pagoda, then the greenhouses of the Vạn Thành flower village.' } },
      { p: 4, o: 4, pace: 'culture', early: true, t: 'Tea hills and a coffee farm', d: 'Sunrise over the Cầu Đất tea hills, then a K’Ho family coffee farm at the foot of Lang Biang. The wild sunflowers are over by December, but the last pink grass may still colour the slopes.' }
    ],
    gem: 'Bidoup–Núi Bà. Most visitors to Đà Lạt never leave town.',
    skip: 'The Crazy House, the flower parks and the Datanla coaster.',
    instead: 'The pine forest and the villages beyond the town.'
  },
  cattien: {
    name: 'Cát Tiên National Park', sub: 'Lowland jungle, gibbons and a night safari', short: 'Cát Tiên',
    region: 'South', place: 'Cat Tien National Park, Vietnam', label: { dx: 13, dy: 4, a: 'start' },
    photos: ['cattien_0', 'cattien_1', 'cattien_3', 'cattien_4'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Into the jungle', d: 'Cross the Đồng Nai river on the small ferry to the park headquarters and sleep inside the park. After dark, a night drive to spot deer and civets.', solo: { pace: 'nature', early: true, t: 'Jungle at night and at dawn', d: 'Arrive by mid-afternoon and sleep inside the park; book the dawn walk at headquarters when you check in. After dark, a night drive to spot deer and civets. Next morning, out before dawn with a ranger to hear the gibbons call, then breakfast and on.' } },
      { p: 2, o: 2, pace: 'hike', early: true, t: 'Gibbons and Crocodile Lake', d: 'Out before dawn with a ranger to hear the gibbons call, then the forest trail to Bàu Sấu, Crocodile Lake. Book the trek and the permit at headquarters the day before.', e: { pace: 'nature', early: false, t: 'Cát Tiên the easy way', d: 'A short guided walk to the giant trees near headquarters, then a boat across the Đồng Nai river to the Dao Tiến primate rescue centre, where rescued gibbons and langurs are prepared for release.' } }
    ],
    gem: 'One of the last large lowland forests in the south, four hours from Hồ Chí Minh City.'
  },
  mekong: {
    name: 'Mekong Delta', sub: 'Canals, orchards and a floating market by small boat', short: 'Mekong',
    region: 'South', place: 'Phong Dien, Can Tho, Vietnam', label: { dx: -13, dy: 4, a: 'end' },
    photos: ['mekong_0', 'mekong_2', 'mekong_3', 'mekong_1'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Down to the delta', d: 'Check into a homestay on a canal in Phong Điền, just outside Cần Thơ. In the late afternoon, a small sampan through the fruit-orchard canals.', solo: { pace: 'boat', early: true, t: 'The delta at dusk and at dawn', d: 'Arrive by mid-afternoon at a canal-side homestay in Phong Điền, just outside Cần Thơ, and take a sampan through the orchard canals. Next morning, leave at 5:30 am by small boat for the Cái Răng floating market and be back by 9 for the onward trip.' } },
      { p: 2, o: 2, pace: 'culture', early: true, t: 'The floating market at dawn', d: 'Leave at 5:30 am by small boat to reach Cái Răng before the tour boats, then the side canals and a rice-noodle workshop. In the afternoon, bikes on Cồn Sơn islet.', e: { pace: 'culture', t: 'The floating market at dawn', d: 'Leave at 5:30 am by small boat to reach Cái Răng before the tour boats, then the side canals and a rice-noodle workshop. In the afternoon, a slow boat to Cồn Sơn islet for fruit gardens and a home-cooked lunch.' } }
    ],
    gem: 'Cồn Sơn, a community-run islet a short boat ride from Cần Thơ.',
    skip: 'Day tours from Mỹ Tho and Cái Bè: coach groups on the same coconut-candy stops.',
    instead: 'A night in a Phong Điền homestay and the market at sunrise.'
  },
  phuquoc: {
    name: 'Phú Quốc’s quiet north', sub: 'Calm sea, starfish shallows and the national park', short: 'Phú Quốc',
    region: 'South', place: 'Ganh Dau, Phu Quoc, Vietnam', label: { dx: 13, dy: -9, a: 'start' },
    photos: ['phuquoc_0', 'phuquoc_1', 'phuquoc_2', 'phuquoc_5'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Island time', d: 'Stay on the north coast near Gành Dầu, far from the resort strip in the south. Sunset over the Gulf of Thailand.' },
      { p: 2, o: 2, pace: 'nature', t: 'Starfish shallows and the forest', d: 'Morning at Rạch Vẹm, where starfish sit in the shallows (look, don’t lift). Afternoon on the forest roads of Phú Quốc National Park, which covers most of the north.' },
      { p: 4, o: 3, pace: 'rest', t: 'A day off', d: 'Nothing planned: swim, a massage, a long lunch. It is a long trip, and this is the place to slow down.' },
      { p: 3, o: 4, pace: 'culture', t: 'Fishing villages and an empty beach', d: 'The east coast: crab lunch on the pier at Hàm Ninh, a pepper farm, then sunset at Vũng Bầu beach.' }
    ],
    gem: 'Rạch Vẹm’s starfish shallows on the north coast.',
    skip: 'Sunset Town, the Hòn Thơm cable car and VinWonders in the south.',
    instead: 'The north coast and the national park.'
  },
  central: {
    name: 'Hội An & Huế', sub: 'The quiet side of Hội An, the Hải Vân Pass and imperial Huế', short: 'Hội An & Huế',
    region: 'Central', place: 'Hue, Vietnam', label: { dx: 13, dy: 4, a: 'start' },
    photos: ['hoian_0', 'hoian_1', 'hue_0', 'hue_4', 'hoian_2'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Hội An’s back roads', d: 'From Đà Nẵng airport it is 45 minutes to Hội An. Cycle out to Trà Quế vegetable village and the water-coconut channels of Cẩm Thanh.', e: { pace: 'travel', pp: [35, 55], t: 'Hội An at an easy pace', d: 'From Đà Nẵng airport it is 45 minutes to Hội An. A cooking class in Trà Quế vegetable village (by taxi), then the old town around 5 pm as the lanterns come on, a sampan ride on the Thu Bồn and dinner before the crowds peak at about 7. Touristy, and still lovely.' }, rain: 'A cooking class or a lantern-making workshop, and the covered market.' },
      { p: 2, o: 2, pace: 'culture', early: true, pp: [25, 65], t: 'The old town at 6 am, then the Hải Vân Pass', d: 'See Hội An’s old town before the day-trippers arrive. Then drive, or ride with a guide, over the Hải Vân Pass to Huế, stopping at Lăng Cô lagoon.', e: { pace: 'culture', pp: [25, 40], t: 'The old town at 6 am, then the Hải Vân Pass by car', d: 'See Hội An’s old town before the day-trippers arrive. Then a car with a driver over the Hải Vân Pass to Huế, stopping at Lăng Cô lagoon.' }, rain: 'If the pass is in cloud, take the tunnel and spend the time in Hội An’s assembly halls or at a tailor.' },
      { p: 3, o: 3, pace: 'culture', pp: [15, 18], t: 'Huế by bicycle', d: 'Cycle to the tombs of Minh Mạng and Tự Đức along the Perfume River, then Thiên Mụ pagoda in the late afternoon.', e: { pace: 'culture', pp: [40, 56], t: 'Huế by boat and car', d: 'A dragon boat up the Perfume River to Thiên Mụ pagoda, then the tombs of Minh Mạng and Tự Đức by car. The Imperial City is flat and easy on foot.' }, rain: 'The Imperial City’s covered galleries and the Museum of Royal Antiquities, then a long lunch of bún bò Huế.' },
      { p: 4, o: 4, pace: 'nature', t: 'Huế’s countryside', d: 'The tile-roofed bridge at Thanh Toàn among the rice fields, then the Tam Giang lagoon at sunset.', rain: 'A Huế cooking class, or the old garden houses of Kim Long by car.' }
    ],
    gem: 'Thanh Toàn, a covered bridge from the 1770s in the rice fields east of Huế.',
    skip: 'Hội An’s old town at 7 pm, when the lantern crowds peak.',
    instead: 'The old town at 6 am and the villages around it.',
    warn: 'December is the rainy season here: around 20 wet days in Huế. Pack a rain jacket and keep plans flexible.'
  },
  puluong: {
    name: 'Pù Luông', sub: 'Bamboo homestays, rice valleys and ridge walks', short: 'Pù Luông',
    region: 'North', place: 'Pu Luong Nature Reserve, Vietnam', label: { dx: -13, dy: 4, a: 'end' },
    photos: ['puluong_1', 'puluong_2', 'puluong_3', 'puluong_0', 'puluong_5'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Into the valleys', d: 'Check into a bamboo homestay above the terraces in Bản Đôn or Kho Mường. Evening walk through the village.' },
      { p: 2, o: 2, pace: 'hike', pp: [25, 52], t: 'Ridges, villages and a waterfall', d: 'A full-day guided trek: the turquoise pools of Hiêu waterfall, Kho Mường village and its cave, and the ridges between the valleys.', e: { pace: 'nature', pp: [20, 35], t: 'The valleys from the road', d: 'A car with a driver along the valley road, the lower pools of Hiêu waterfall (a short, easy walk), then Kho Mường village and a long lunch in a stilt house.' } },
      { p: 3, o: 3, pace: 'rest', t: 'A slow day in the valley', d: 'Bamboo water wheels, a bamboo raft on the river, weaving in a stilt house and a long lunch at the homestay. The rice is harvested by December, so mornings are misty and quiet.' }
    ],
    gem: 'The turquoise pools of Hiêu waterfall.',
    skip: 'Mai Châu: lovely, but now ringed by tour-bus homestays.',
    instead: 'Pù Luông, about two hours further on.'
  },
  ninhbinh: {
    name: 'Ninh Bình', sub: 'Rowing boats between limestone towers', short: 'Ninh Bình',
    region: 'North', place: 'Tam Coc, Ninh Binh, Vietnam', label: { dx: 0, dy: 24, a: 'middle' },
    photos: ['ninhbinh_0', 'ninhbinh_3', 'ninhbinh_4', 'ninhbinh_5', 'ninhbinh_6'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Arrive among the karst', d: 'Stay in the lanes behind Tam Cốc. If you arrive by mid-afternoon, take the rowed boat on Vân Long’s wetland at golden hour.', solo: { pace: 'boat', t: 'Karst at dusk and at dawn', d: 'Stay in the lanes behind Tam Cốc and arrive by mid-afternoon for the rowed boat on Vân Long’s wetland at golden hour. Next morning, be at the Tràng An pier when it opens at 7 am for the cave route, then drive on.' } },
      { p: 2, o: 2, pace: 'boat', pp: [2, 4], t: 'Tràng An at 7 am', d: 'Be at the pier when it opens and take the longest cave route before the tour buses arrive. Then cycle the village lanes, or visit Hoa Lư, the 10th-century capital, and its temples to the first kings (rebuilt in the 1600s).', e: { pace: 'boat', pp: [9, 16], t: 'Tràng An at 7 am', d: 'Be at the pier when it opens and take the longest cave route before the tour buses arrive; the boats are rowed for you. Then Hoa Lư, the 10th-century capital, and its temples by car.' } }
    ],
    gem: 'Delacour’s langurs on Vân Long’s cliffs, one of the rarest primates in the world.',
    skip: 'Hang Múa viewpoint at sunset: 500 steps, shoulder to shoulder.',
    instead: 'Vân Long at golden hour.'
  },
  /* The cruise is the second night: the boat docks around noon, and the night after it leaves room to move the cruise if fog cancels it. */
  catba: {
    name: 'Cát Bà & Lan Hạ Bay', sub: 'A jungle island on the quiet side of Hạ Long', short: 'Cát Bà',
    region: 'North', place: 'Cat Ba Island, Vietnam', label: { dx: 13, dy: 4, a: 'start' },
    photos: ['catba_0', 'catba_3', 'catba_1', 'catba_2', 'catba_6'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'To the island', d: 'Limousine van and a short ferry. Sunset from Cannon Fort, then seafood by the harbour.', e: { pace: 'travel', t: 'To the island', d: 'Limousine van and a short ferry. A slow evening along the harbour and seafood by the water.' } },
      { p: 4, o: 4, pace: 'hike', t: 'Việt Hải and the national park', d: 'Hike to Ngự Lâm peak in Cát Bà National Park, then cycle on to Việt Hải, a car-free village ringed by cliffs.', e: { pace: 'nature', t: 'Việt Hải without the climb', d: 'A boat from Cát Bà town to the Việt Hải pier, then about 5 km of flat lane into the village by electric cart or bicycle, and lunch among the cliffs.' } },
      { p: 3, o: 3, pace: 'rest', t: 'Back on land, a slow afternoon', d: 'The boat docks back on Cát Bà around 12:00. A long seafood lunch by the harbour, then the small Cát Cò beaches and a massage. The sea is brisk in December, around 22 °C.' },
      { p: 2, o: 2, pace: 'boat', t: 'Overnight on Lan Hạ Bay', d: 'Board a two-day, one-night cruise that starts on Cát Bà and sails into Lan Hạ Bay and the quiet southern edge of Hạ Long Bay. Kayak, visit a floating village and sleep on the boat.', e: { pace: 'boat', t: 'Overnight on Lan Hạ Bay', d: 'A two-day, one-night cruise into Lan Hạ Bay and the quiet southern edge of Hạ Long Bay. Pick a bigger, steadier boat with en-suite cabins, take the bamboo boat rowed by locals instead of a kayak, and watch the sunset from the deck.' } }
    ],
    gem: 'Việt Hải, a village with no cars inside the national park. The Full Moon cruise stops there; with three nights it is your way in.',
    skip: 'Hạ Long cruises from Tuần Châu, and the crowded Sửng Sốt cave and Ti Tốp island stops.',
    instead: 'A cruise that starts from Cát Bà.'
  },
  caobang: {
    name: 'Cao Bằng', sub: 'Bản Giốc waterfall and the karst border country', short: 'Cao Bằng',
    region: 'North', place: 'Cao Bang, Vietnam', label: { dx: 13, dy: 4, a: 'start' },
    photos: ['caobang_0', 'caobang_6', 'caobang_1', 'caobang_2', 'caobang_3'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'North to the border', d: 'A long but scenic drive. Sleep in Cao Bằng town and line up a car with a driver, or an easy-rider guide, for the next days.', e: { pace: 'travel', t: 'North to the border', d: 'A long but scenic drive, best split with a lunch stop. Sleep in Cao Bằng town and book a comfortable car with a driver for the next days.' } },
      { p: 3, o: 2, pace: 'nature', t: 'Angel’s Eye and Pác Bó', d: 'Núi Mắt Thần, a mountain with a hole through its peak above a grassy valley, and the clear green stream at Pác Bó near the border.' },
      { p: 2, o: 3, pace: 'nature', t: 'Lakes, a pass, a cave and a waterfall', d: 'Thang Hen’s chain of karst lakes, the switchbacks of the Mã Phục pass, Ngườm Ngao cave, then Bản Giốc waterfall in the late-afternoon light. December is low-water season: thinner falls, clear turquoise pools. Sleep in Khuổi Ky, a Tày village of stone houses.' }
    ],
    gem: 'Khuổi Ky’s stone houses and the lakes at Thang Hen.',
    skip: 'Sapa and the Hà Giang loop: crowded tour groups and party hostels.',
    instead: 'Cao Bằng and Ba Bể.'
  },
  babe: {
    name: 'Ba Bể', sub: 'A mountain lake ringed by Tày villages', short: 'Ba Bể',
    region: 'North', place: 'Ba Be National Park, Vietnam', label: { dx: -13, dy: 4, a: 'end' },
    photos: ['babe_0', 'babe_1', 'babe_2', 'babe_3', 'babe_5'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Arrive at the lake', d: 'Check into a Tày stilt house in Pác Ngòi and walk the lakeshore at dusk.', solo: { pace: 'boat', t: 'The lake in an afternoon', d: 'Arrive by early afternoon, check into a Tày stilt house in Pác Ngòi, then take a boat to Puông cave and Ba Góa island while the light lasts. Dusk on the lakeshore.' } },
      { p: 2, o: 2, pace: 'boat', t: 'On the water', d: 'Boat or kayak to Puông cave, Đầu Đẳng waterfall and Ba Góa island. In the afternoon, cycle through the villages.', e: { pace: 'boat', t: 'On the water', d: 'A boat to Puông cave, Đầu Đẳng waterfall and Ba Góa island; the boatman does the work. In the afternoon, a slow walk along the lakeshore.' } },
      { p: 3, o: 3, pace: 'hike', t: 'Villages above the lake', d: 'A half-day walk with a local guide to the Tày and Dao villages above the lake. Ask your host about Then singing in the evening.', e: { pace: 'culture', t: 'A slow morning by the lake', d: 'A short boat ride to a neighbouring Tày village and a cooking lesson with your hosts. Ask about Then singing in the evening.' } }
    ],
    gem: 'A night in a Tày stilt house on the lakeshore.'
  },
  hanoiStop: {
    name: 'A night in Hà Nội', sub: 'A stopover on the way north', short: 'Hà Nội',
    region: 'North', place: 'Hanoi, Vietnam', compact: true, label: null,
    photos: [],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Street food and an early night', d: 'Back in the city by evening. Old Quarter street food (bún chả, bánh cuốn, egg coffee), then an early night before the drive north.' }
    ]
  },
  hanoi: {
    name: 'Hà Nội', sub: 'The capital, and the flight home', short: 'Hà Nội',
    region: 'North', place: 'Hanoi, Vietnam', label: { dx: -13, dy: -4, a: 'end' },
    photos: ['hanoi_0', 'hanoi_1', 'hanoi_3', 'hanoi_5'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Back in Hà Nội', d: 'A walk around Hoàn Kiếm lake and through the Old Quarter lanes.' },
      { p: 2, o: 2, pace: 'culture', t: 'Temple of Literature and the Museum of Ethnology', d: 'The Temple of Literature when it opens at 8 am, before the groups. Then the Museum of Ethnology, with full-size village houses in its garden.' },
      { p: 3, o: 3, pace: 'culture', t: 'Đường Lâm village', d: 'A day trip, about 1½ hours each way, to Đường Lâm: laterite-stone lanes, a 17th-century communal house and lunch with a local family.' },
      { p: 4, o: 4, pace: 'culture', t: 'Pottery and the river', d: 'Bát Tràng pottery village on the Red River, then walk back across Long Biên bridge at sunset.' }
    ],
    gem: 'Đường Lâm, an old laterite village west of the city.',
    skip: 'Train Street: repeatedly closed to visitors, and packed when it isn’t.',
    instead: 'Long Biên bridge at dawn.'
  }
};

const ROUTES = {
  classic: {
    name: 'Easy classics', tag: 'Our pick: with parents', cover: 'catba_0', gentle: true,
    blurb: 'The famous places, done gently: Đà Lạt’s cool hills, lantern-lit Hội An and imperial Huế, Ninh Bình by rowing boat, a comfortable night on Lan Hạ Bay and Hà Nội.',
    why: 'Built for travelling with parents: cars with a driver, short transfers and only short flights, and in the gentle version no hikes and no motorbikes. The catch: Hội An and Huế are in their rainy season, so every day there has a rain plan.',
    stops: [['dalat', 2], ['central', 4], ['ninhbinh', 2], ['catba', 3], ['hanoi', 3]],
    city: [['dalat', 2], ['central', 3], ['ninhbinh', 2], ['catba', 3], ['hanoi', 1]],
    // calmer option first (the default) for the parents
    cityNight: {
      ninhbinh: [['dalat', 2], ['central', 3], ['ninhbinh', 2], ['catba', 3], ['hanoi', 1]],
      central: [['dalat', 2], ['central', 4], ['ninhbinh', 1], ['catba', 3], ['hanoi', 1]]
    }
  },
  balanced: {
    name: 'Balanced', tag: 'A bit of everything', cover: 'caobang_0',
    blurb: 'A bit of everything, weighted to nature: highland forest, karst rivers, the bay and the far north.',
    why: 'Built for nature with some culture: dry places all the way, three days in the highlands, one night on a boat and two short flights.',
    whyCity: 'Built for nature with some culture: dry places all the way, two days in the highlands, one night on a boat and two short flights.',
    stops: [['dalat', 3], ['ninhbinh', 2], ['catba', 3], ['hanoiStop', 1], ['caobang', 2], ['babe', 2], ['hanoi', 1]],
    // no spare-night choice: Ninh Bình could only take it from Cát Bà, which keeps 3 nights
    city: [['dalat', 2], ['ninhbinh', 1], ['catba', 3], ['hanoiStop', 1], ['caobang', 2], ['babe', 1], ['hanoi', 1]]
  },
  nature: {
    name: 'Nature & hiking', tag: 'Most trail time', cover: 'dalat_0',
    blurb: 'Jungle at the start, the Đà Lạt highlands, Pù Luông’s ridges and the karst border country.',
    why: 'Built for hiking: the most trail days, at the cost of the most moves and two long travel days.',
    stops: [['cattien', 2], ['dalat', 3], ['puluong', 2], ['ninhbinh', 2], ['caobang', 2], ['babe', 2], ['hanoi', 1]],
    city: [['cattien', 1], ['dalat', 3], ['puluong', 2], ['ninhbinh', 1], ['caobang', 2], ['babe', 1], ['hanoi', 1]],
    cityNight: {
      dalat: [['cattien', 1], ['dalat', 3], ['puluong', 2], ['ninhbinh', 1], ['caobang', 2], ['babe', 1], ['hanoi', 1]],
      ninhbinh: [['cattien', 1], ['dalat', 2], ['puluong', 2], ['ninhbinh', 2], ['caobang', 2], ['babe', 1], ['hanoi', 1]]
    }
  },
  culture: {
    name: 'Culture & food', tag: 'Most to see', cover: 'hoian_0',
    blurb: 'Delta markets, Hội An and Huế’s imperial tombs, Ninh Bình’s old capital, the bay and Hà Nội.',
    why: 'Built for culture and food, with the bay as a break. The catch: Hội An and Huế are in their rainy season.',
    stops: [['mekong', 2], ['central', 4], ['ninhbinh', 2], ['catba', 3], ['hanoi', 3]],
    city: [['mekong', 2], ['central', 3], ['ninhbinh', 2], ['catba', 3], ['hanoi', 1]],
    cityNight: {
      ninhbinh: [['mekong', 2], ['central', 3], ['ninhbinh', 2], ['catba', 3], ['hanoi', 1]],
      central: [['mekong', 2], ['central', 4], ['ninhbinh', 1], ['catba', 3], ['hanoi', 1]]
    }
  },
  slow: {
    name: 'Slow & beach', tag: 'Fewest moves', cover: 'phuquoc_0',
    blurb: 'Beach days in Phú Quốc’s quiet north, then valleys, karst and the bay at an easy pace.',
    why: 'Built for an easy pace: five bases, long stays, three rest days and only two flights.',
    whyCity: 'Built for an easy pace: long stays, slow days and only two flights.',
    stops: [['phuquoc', 4], ['puluong', 3], ['ninhbinh', 2], ['catba', 4], ['hanoi', 1]],
    city: [['phuquoc', 3], ['puluong', 2], ['ninhbinh', 2], ['catba', 3], ['hanoi', 1]],
    // no early start by default, in keeping with the easy pace
    cityNight: {
      ninhbinh: [['phuquoc', 3], ['puluong', 2], ['ninhbinh', 2], ['catba', 3], ['hanoi', 1]],
      puluong: [['phuquoc', 3], ['puluong', 3], ['ninhbinh', 1], ['catba', 3], ['hanoi', 1]]
    }
  }

};

/* `city`: the same route with three nights handed to the Hồ Chí Minh City days, so the trip stays 15 days.
   `whyCity` replaces `why` where the shorter version changes the facts. */
/* A swap is offered when the route contains exactly one of the two stops, and the stop swapped in keeps its minimum nights. */
const MIN_NIGHTS = { catba: 3 };   // the bay needs a day either side of the cruise, for weather
const SWAPS = [
  {
    id: 'coast', a: 'dalat', b: 'central', q: 'Dry highlands or the rainy central coast?',
    pts: {
      dalat: ['Dry, sunny days and cold nights (around 13 °C)', 'Pine forest and the best hiking country on the trip', 'Nature first, few sights to tick off'],
      central: ['Hội An, the Hải Vân Pass and imperial Huế', 'Rainy season: around 20 wet days in December', 'Culture first, less nature']
    }
  },
  {
    id: 'water', a: 'catba', b: 'puluong', q: 'The bay or the valleys?',
    pts: {
      catba: ['A night on a boat among the karst islands', 'Kayaking or a rowed bamboo boat, island beaches, seafood', 'Cool and often misty; the sea is about 22 °C'],
      puluong: ['Bamboo homestays and a full day in the valleys', 'Rice valleys, water wheels and Thái villages', 'Rice is harvested by December; misty mornings']
    }
  },
  {
    id: 'south', a: 'mekong', b: 'cattien', q: 'The delta or the jungle?',
    pts: {
      mekong: ['Floating market, orchards and homestay life', 'Flat, easy and very social', 'Warm and dry in December'],
      cattien: ['Gibbons at dawn and a night safari', 'Forest walks with a ranger', 'Start of the dry season: fewer leeches']
    }
  }
];

/* Travel legs. Hours are door to door estimates; flights add about 1.5 h at the airports. Sources: research/road-times-2026-10.md. */
const FLY = { 'SGN-DLI': 0.9, 'SGN-PQC': 1, 'SGN-DAD': 1.3, 'SGN-HAN': 2.2, 'VCA-DAD': 1.5, 'VCA-HAN': 2.2,
  'PQC-HAN': 2.1, 'DLI-HAN': 1.8, 'DLI-DAD': 1.1, 'HUI-HAN': 1.2 };
const AIRPORT_NAME = { SGN: 'Hồ Chí Minh City', VCA: 'Cần Thơ', PQC: 'Phú Quốc', DLI: 'Đà Lạt', DAD: 'Đà Nẵng', HUI: 'Huế', HAN: 'Hà Nội' };
/* From a stop to its airport before a flight: [airport, hours, text]. Day 1 starts at the airport, so 'start' needs no ride. */
const TO_AIR = { saigon: ['SGN', 0.5, 'r.taxi_sgn'], cattien: ['SGN', 4, 'r.back_sgn'], mekong: ['VCA', 0.75, 'r.taxi_vca'],
  phuquoc: ['PQC', 0.75, 'r.taxi_pqc'], dalat: ['DLI', 0.75, 'r.taxi_dli'], central: ['HUI', 0.5, 'r.taxi_hui'] };
const ROAD_FROM_HAN = { puluong: 4, ninhbinh: 2, catba: 4, caobang: 6, babe: 5, hanoi: 0.75, hanoiStop: 0.75 };
const ROAD = {
  'hanoi-ninhbinh': 2, 'hanoi-catba': 4, 'hanoi-caobang': 6, 'hanoi-babe': 5, 'hanoi-puluong': 4,
  'puluong-ninhbinh': 3, 'puluong-catba': 6, 'puluong-hanoi': 4,
  'ninhbinh-catba': 4, 'ninhbinh-hanoi': 2, 'ninhbinh-caobang': 8, 'ninhbinh-babe': 7, 'ninhbinh-puluong': 3,
  'catba-hanoi': 4, 'catba-ninhbinh': 4, 'catba-caobang': 9,
  'caobang-babe': 5, 'caobang-hanoi': 7, 'babe-hanoi': 5
};
const NORTH = new Set(['puluong', 'ninhbinh', 'catba', 'caobang', 'babe', 'hanoi', 'hanoiStop']);

const SITE_URL = 'https://grzegorzfrskiba-hub.github.io/vietnam-december/';   // the public page: links in the copied plan go here, also from the private artifact
const TRIP = { start: '2026-12-11' }; // Day 1, e.g. '2026-12-05'; null hides all dates

/* December averages. Sources in the footer. */
const WEATHER = {
  saigon:  { hi: 32, lo: 24, rain: 41,  days: 5,  station: 'Hồ Chí Minh City', verdict: 'Hot and dry', tone: 'good' },
  dalat:   { hi: 21, lo: 13, rain: 36,  days: 6,  station: 'Đà Lạt', verdict: 'Dry, cold nights', tone: 'cool' },
  cattien: { hi: 32, lo: 24, rain: 41,  days: 5,  station: 'Hồ Chí Minh City, the nearest long-term station', verdict: 'Warm and drying out', tone: 'good' },
  mekong:  { hi: 30, lo: 23, rain: 42,  days: 7,  station: 'Cần Thơ', verdict: 'Warm and dry', tone: 'good' },
  phuquoc: { hi: 30, lo: 23, rain: 59,  days: 6,  station: 'Phú Quốc', verdict: 'Calm sea, sunny', tone: 'good' },
  central: { hi: 24, lo: 19, rain: 350, days: 20, station: 'Huế; Đà Nẵng, near Hội An, gets 218 mm over 19 days', verdict: 'Rainy season', tone: 'wet' },
  puluong: { hi: 23, lo: 15, rain: 17,  days: 6,  station: 'Hòa Bình; Pù Luông sits higher and runs a few degrees colder', verdict: 'Dry, cold nights', tone: 'cool' },
  ninhbinh:{ hi: 22, lo: 16, rain: 28,  days: 6,  station: 'Thanh Hóa, the nearest long-term station', verdict: 'Dry and mild', tone: 'good' },
  catba:   { hi: 22, lo: 16, rain: 23,  days: 6,  station: 'Hải Phòng', verdict: 'Cool, often misty', tone: 'cool' },
  caobang: { hi: 20, lo: 11, rain: 20,  days: 8,  station: 'Cao Bằng', verdict: 'Dry, cold nights', tone: 'cool' },
  babe:    { hi: 22, lo: 13, rain: 20,  days: 6,  station: 'Bắc Kạn', verdict: 'Dry, cold nights', tone: 'cool' },
  hanoi:   { hi: 21, lo: 14, rain: 20,  days: 5,  station: 'Hà Nội', verdict: 'Dry and mild', tone: 'good' }
};

/* Rough per-person prices in euros, [low, high]. Sources and exchange rate in research/budget-2026-10.md. */
const COSTS = {
  currency: 'EUR', checked: 'October 2026',
  nightPP: { saigon: [16, 31], dalat: [14, 34], cattien: [13, 31], mekong: [11, 25], phuquoc: [22, 49], central: [15, 34], puluong: [15, 41], ninhbinh: [11, 27], catba: [14, 26], caobang: [9, 21], babe: [8, 26], hanoi: [15, 41] },
  extrasPP: { catba: [75, 130], cattien: [17, 48], ninhbinh: [9, 10], caobang: [41, 62], babe: [13, 17], mekong: [10, 21] },
  flightPP: [40, 95], roadHourPP: [2.5, 5], carHourPP: [10, 18], dayPP: [22, 45]
};

/* Pros and cons for the spare-night choice (`cityNight`). Swapped-in stops (dalat, central) have their own. */
const NIGHT_PTS = {
  dalat: { pro: ['A third day in the highlands: the Tà Năng grass hills, or the old railway and the flower villages in the gentle version', 'Dry, sunny days and cool nights'],
    con: ['Ninh Bình shrinks to one evening and an early boat at Tràng An before you leave'] },
  central: { pro: ['One more day for Huế and its countryside', 'Slack in the plan if the rain spoils a day'],
    con: ['Ninh Bình shrinks to one evening and an early boat at Tràng An before you leave'] },
  puluong: { pro: ['A slow day in the valley after the full day out', 'One more night in a bamboo homestay'],
    con: ['Ninh Bình shrinks to one evening and an early boat at Tràng An before you leave'] },
  ninhbinh: { pro: ['A full, unhurried day among the karst: Tràng An, Hoa Lư and Vân Long', 'No early start on the day you move on'],
    con: { puluong: 'Pù Luông becomes arrival plus one full day, with no slow day',
      dalat: 'Đà Lạt drops its third day', central: 'Hội An & Huế gets a day less, with less slack for rain' } }
};

const LEFT_OUT = [
  { name: 'Sapa', why: 'Cold and foggy in December, with frosty nights, and the busiest trekking town in the north. Cao Bằng and Ba Bể give you the mountains without the crowds.' },
  { name: 'The Hà Giang loop', why: 'Spectacular, but now a conveyor belt of easy-rider group tours. Better on a longer trip, outside the peak months.' },
  { name: 'Hạ Long Bay from Hạ Long City', why: 'Hundreds of boats on the same circuit. Lan Hạ Bay from Cát Bà has the same karst with far fewer boats.' },
  { name: 'Phong Nha', why: 'December is the wet season on the central coast, and the big cave expeditions only start again at the end of January.' },
  { name: 'Côn Đảo and Sơn Trà', why: 'Rough seas and rain in December. Both make an easy spring weekend from Hồ Chí Minh City.' }
];

/* Where to book; checked in October 2026 (research/booking-links-2026-10.md). Keys match the lines in "Book ahead". */
const BIDOUP_LINK = [{ label: 'Bidoup–Núi Bà', url: 'https://bidoupnuiba.gov.vn/' }];
const BOOK_LINKS = {
  'b.xmas': [{ label: 'Vietnam Airlines', url: 'https://www.vietnamairlines.com/' }, { label: 'Vietjet', url: 'https://www.vietjetair.com/' }, { label: 'Google Flights', url: 'https://www.google.com/travel/flights' }],
  'b.transfer': [{ label: '12Go', url: 'https://12go.asia/en/vietnam/transport' }],
  'b.cruise': [{ label: 'Full Moon Travel Asia', url: 'https://fullmoontravelasia.com/cat-ba-overnight-cruise-lan-ha-bay-viet-hai-village/' }, { label: 'Cat Ba Ventures', url: 'https://catbaventures.com/tours/cat-ba/sailing-expeditions-kayaking.html' }],
  'b.dalat': BIDOUP_LINK,
  'b.dalat_bidoup': BIDOUP_LINK
};
