/* Trip data: stops, hand-built routes, swaps, travel legs, December weather.
   A day's `e` is its gentle version (no hikes, no bikes) for the parents switch; `rain` is a wet-day plan. */

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
      { p: 2, o: 2, pace: 'nature', t: 'The Cần Giờ mangroves', d: 'A day trip south, about 2 hours by car with a short ferry at Bình Khánh, to the Cần Giờ mangrove forest, a UNESCO biosphere reserve. A boat through the channels at Vàm Sát, the bird-watching tower, then seafood on the beach at Cần Thạnh before driving back.' },
      { p: 3, o: 3, pace: 'culture', t: 'Saigon the local way', d: 'Chợ Lớn in the morning: Bình Tây market, the incense coils of Thiên Hậu temple and dim sum on Hà Tôn Quyền street. Afternoon in the cafés of the old apartment blocks, then dinner at the snail and seafood stalls on Vĩnh Khánh street in District 4.' }
    ],
    gem: 'Cần Giờ: real mangrove forest inside the city limits, with almost no foreign visitors.',
    skip: 'The Củ Chi tunnels on a big group tour, and Bến Thành market.',
    instead: 'Cần Giờ, and Bình Tây market in Chợ Lớn.'
  },
  dalat: {
    name: 'Đà Lạt highlands', sub: 'Bidoup–Núi Bà forest and the Tà Năng grass hills', short: 'Đà Lạt',
    region: 'South', place: 'Da Lat, Vietnam', label: { dx: 0, dy: -15, a: 'middle' },
    photos: ['dalat_0', 'dalat_1', 'dalat_2', 'dalat_4', 'dalat_3'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Up to the highlands', d: 'Skip the town centre and head west to the ridges above the Tà Nung valley for sunset over pine hills and coffee farms. Sleep in a lodge outside town, where the nights are quiet and starry.' },
      { p: 2, o: 2, pace: 'hike', t: 'Bidoup–Núi Bà cloud forest', d: 'A guided trek through old pines, mossy forest and wild orchids toward Hòn Giao. December is the dry season, so the trails are firm. Book a guide at the park visitor centre.', e: { pace: 'nature', t: 'Pine forest and a lake monastery', d: 'The cable car from Robin Hill glides over the pine forest to Trúc Lâm, a quiet Zen monastery above Tuyền Lâm lake. Walk its gardens, then a slow boat on the lake or a long lakeside lunch.' } },
      { p: 3, o: 3, pace: 'hike', t: 'The Tà Năng grass hills', d: 'A day hike on the first part of the Tà Năng–Phan Dũng trail, often called Vietnam’s most beautiful trek. The hills turn gold in the dry season. Go with a licensed local guide and check the current access rules: the full traverse has been restricted at times.', e: { pace: 'culture', t: 'The old railway and the flower villages', d: 'The vintage train from Đà Lạt’s 1930s station to Trại Mát and the mosaic Linh Phước pagoda, then the greenhouses of the Vạn Thành flower village.' } },
      { p: 4, o: 4, pace: 'culture', t: 'Tea hills and a coffee farm', d: 'Sunrise over the Cầu Đất tea hills, then a K’Ho family coffee farm at the foot of Lang Biang. Wild sunflowers and pink grass bloom on the slopes in December.' }
    ],
    gem: 'Bidoup–Núi Bà. Most visitors to Đà Lạt never leave town.',
    skip: 'The Crazy House, the flower parks and the Datanla coaster.',
    instead: 'The national park and the Tà Năng hills.'
  },
  cattien: {
    name: 'Cát Tiên National Park', sub: 'Lowland jungle, gibbons and Crocodile Lake', short: 'Cát Tiên',
    region: 'South', place: 'Cat Tien National Park, Vietnam', label: { dx: 13, dy: 4, a: 'start' },
    photos: ['cattien_0', 'cattien_1', 'cattien_3', 'cattien_4'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Into the jungle', d: 'Cross the Đồng Nai river on the small ferry to the park headquarters and sleep inside the park. After dark, a night drive to spot deer and civets.' },
      { p: 2, o: 2, pace: 'hike', t: 'Gibbons and Crocodile Lake', d: 'Out before dawn with a ranger to hear the gibbons call, then the forest trail to Bàu Sấu, Crocodile Lake. Book the trek and the permit at headquarters the day before.', e: { pace: 'nature', t: 'Cát Tiên the easy way', d: 'A short guided walk to the giant trees near headquarters, then a boat across the Đồng Nai river to the Dao Tiến primate rescue centre, where rescued gibbons and langurs are prepared for release.' } }
    ],
    gem: 'One of the last large lowland forests in the south, four hours from Hồ Chí Minh City.'
  },
  mekong: {
    name: 'Mekong Delta', sub: 'Canals, orchards and a floating market by small boat', short: 'Mekong',
    region: 'South', place: 'Phong Dien, Can Tho, Vietnam', label: { dx: -13, dy: 4, a: 'end' },
    photos: ['mekong_0', 'mekong_2', 'mekong_3', 'mekong_1'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Down to the delta', d: 'Check into a homestay on a canal in Phong Điền, just outside Cần Thơ. In the late afternoon, a small sampan through the fruit-orchard canals.' },
      { p: 2, o: 2, pace: 'culture', t: 'The floating market at dawn', d: 'Leave at 5:30 am by small boat to reach Cái Răng before the tour boats, then the side canals and a rice-noodle workshop. In the afternoon, bikes on Cồn Sơn islet.', e: { pace: 'culture', t: 'The floating market at dawn', d: 'Leave at 5:30 am by small boat to reach Cái Răng before the tour boats, then the side canals and a rice-noodle workshop. In the afternoon, a slow boat to Cồn Sơn islet for fruit gardens and a home-cooked lunch.' } }
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
    name: 'Hội An & Huế', sub: 'The quiet side of Hội An, the Hải Vân Pass and the imperial tombs', short: 'Hội An & Huế',
    region: 'Central', place: 'Hue, Vietnam', label: { dx: 13, dy: 4, a: 'start' },
    photos: ['hoian_0', 'hoian_1', 'hue_0', 'hue_4', 'hoian_2'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'Hội An’s back roads', d: 'From Đà Nẵng airport it is 45 minutes to Hội An. Cycle out to Trà Quế vegetable village and the water-coconut channels of Cẩm Thanh.', e: { pace: 'travel', t: 'Hội An at an easy pace', d: 'From Đà Nẵng airport it is 45 minutes to Hội An. A cooking class in Trà Quế vegetable village (by taxi), then the old town at dusk when the lanterns come on, with a sampan ride on the Thu Bồn. Touristy, and still lovely.' }, rain: 'A cooking class or a lantern-making workshop, and the covered market.' },
      { p: 2, o: 2, pace: 'culture', t: 'The old town at 6 am, then the Hải Vân Pass', d: 'See Hội An’s old town before the day-trippers arrive. Then drive, or ride with a guide, over the Hải Vân Pass to Huế, stopping at Lăng Cô lagoon.', e: { pace: 'culture', t: 'The old town at 6 am, then the Hải Vân Pass by car', d: 'See Hội An’s old town before the day-trippers arrive. Then a car with a driver over the Hải Vân Pass to Huế, stopping at Lăng Cô lagoon.' }, rain: 'If the pass is in cloud, take the tunnel and spend the time in Hội An’s assembly halls or at a tailor.' },
      { p: 3, o: 3, pace: 'culture', t: 'Huế by bicycle', d: 'Cycle to the tombs of Minh Mạng and Tự Đức along the Perfume River, then Thiên Mụ pagoda in the late afternoon.', e: { pace: 'culture', t: 'Huế by boat and car', d: 'A dragon boat up the Perfume River to Thiên Mụ pagoda, then the tombs of Minh Mạng and Tự Đức by car. The Imperial City is flat and easy on foot.' }, rain: 'The Imperial City’s covered galleries and the Museum of Royal Antiquities, then a long lunch of bún bò Huế.' },
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
      { p: 2, o: 2, pace: 'hike', t: 'Ridges, villages and a waterfall', d: 'A full-day guided trek: the turquoise pools of Hiêu waterfall, Kho Mường village and its cave, and the ridges between the valleys.', e: { pace: 'nature', t: 'The valleys from the road', d: 'A car with a driver along the valley road, the lower pools of Hiêu waterfall (a short, easy walk), then Kho Mường village and a long lunch in a stilt house.' } },
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
      { p: 2, o: 2, pace: 'boat', t: 'Tràng An at 7 am', d: 'Be at the pier when it opens and take the longest cave route before the tour buses arrive. Then cycle the village lanes, or visit the 10th-century temples at Hoa Lư.', e: { pace: 'boat', t: 'Tràng An at 7 am', d: 'Be at the pier when it opens and take the longest cave route before the tour buses arrive; the boats are rowed for you. Then the 10th-century temples at Hoa Lư by car.' } }
    ],
    gem: 'Delacour’s langurs on Vân Long’s cliffs, one of the rarest primates in the world.',
    skip: 'Hang Múa viewpoint at sunset: 500 steps, shoulder to shoulder.',
    instead: 'Vân Long at golden hour.'
  },
  catba: {
    name: 'Cát Bà & Lan Hạ Bay', sub: 'A jungle island on the quiet side of Hạ Long', short: 'Cát Bà',
    region: 'North', place: 'Cat Ba Island, Vietnam', label: { dx: 13, dy: 4, a: 'start' },
    photos: ['catba_0', 'catba_3', 'catba_1', 'catba_2', 'catba_6'],
    days: [
      { p: 1, o: 1, pace: 'travel', t: 'To the island', d: 'Limousine van and a short ferry. Sunset from Cannon Fort, then seafood by the harbour.', e: { pace: 'travel', t: 'To the island', d: 'Limousine van and a short ferry. A slow evening along the harbour and seafood by the water.' } },
      { p: 3, o: 2, pace: 'hike', t: 'Việt Hải and the national park', d: 'Hike to Ngự Lâm peak in Cát Bà National Park, then cycle on to Việt Hải, a car-free village ringed by cliffs.', e: { pace: 'nature', t: 'Việt Hải without the climb', d: 'A boat from Cát Bà town to the Việt Hải pier, then about 5 km of flat lane into the village by electric cart or bicycle, and lunch among the cliffs.' } },
      { p: 4, o: 3, pace: 'rest', t: 'A slow island day', d: 'The small Cát Cò beaches, a massage and a long seafood lunch. The sea is brisk in December, around 20 °C.' },
      { p: 2, o: 4, pace: 'boat', t: 'Overnight on Lan Hạ Bay', d: 'Board a two-day, one-night cruise that starts on Cát Bà and sails into Lan Hạ Bay and the quiet southern edge of Hạ Long Bay. Kayak, visit a floating village and sleep on the boat.', e: { pace: 'boat', t: 'Overnight on Lan Hạ Bay', d: 'A two-day, one-night cruise into Lan Hạ Bay and the quiet southern edge of Hạ Long Bay. Pick a bigger, steadier boat with en-suite cabins, take the bamboo boat rowed by locals instead of a kayak, and watch the sunset from the deck.' } }
    ],
    gem: 'Việt Hải, a village with no cars inside the national park.',
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
      { p: 1, o: 1, pace: 'travel', t: 'Arrive at the lake', d: 'Check into a Tày stilt house in Pác Ngòi and walk the lakeshore at dusk.' },
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
      { p: 1, o: 1, pace: 'travel', t: 'Back in Hà Nội', d: 'A walk around Hoàn Kiếm lake and a farewell dinner in the Old Quarter.' },
      { p: 2, o: 2, pace: 'culture', t: 'Temple of Literature and the Museum of Ethnology', d: 'The Temple of Literature at 7:30 am, before the groups. Then the Museum of Ethnology, with full-size village houses in its garden.' },
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
    why: 'Built for travelling with parents: no hikes and no motorbikes, cars with a driver, short transfers and only short flights. The catch: Hội An and Huế are in their rainy season, so every day there has a rain plan.',
    stops: [['dalat', 2], ['central', 4], ['ninhbinh', 2], ['catba', 3], ['hanoi', 4]],
    city: [['dalat', 2], ['central', 3], ['ninhbinh', 2], ['catba', 3], ['hanoi', 2]],
    // calmer option first (the default) for the parents
    cityNight: {
      ninhbinh: [['dalat', 2], ['central', 3], ['ninhbinh', 2], ['catba', 3], ['hanoi', 2]],
      central: [['dalat', 2], ['central', 4], ['ninhbinh', 1], ['catba', 3], ['hanoi', 2]]
    }
  },
  balanced: {
    name: 'Balanced', tag: 'A bit of everything', cover: 'caobang_0',
    blurb: 'A bit of everything, weighted to nature: highland forest, karst rivers, the bay and the far north.',
    why: 'Built for nature with some culture: dry places all the way, two hiking days, one night on a boat and two short flights.',
    whyCity: 'Built for nature with some culture: dry places all the way, a day in the cloud forest, one night on a boat and two short flights.',
    stops: [['dalat', 3], ['ninhbinh', 2], ['catba', 3], ['hanoiStop', 1], ['caobang', 3], ['babe', 2], ['hanoi', 1]],
    city: [['dalat', 2], ['ninhbinh', 1], ['catba', 3], ['hanoiStop', 1], ['caobang', 2], ['babe', 2], ['hanoi', 1]],
    /* with the city days one night is short: the group picks where the spare one goes (first = default) */
    cityNight: {
      catba: [['dalat', 2], ['ninhbinh', 1], ['catba', 3], ['hanoiStop', 1], ['caobang', 2], ['babe', 2], ['hanoi', 1]],
      ninhbinh: [['dalat', 2], ['ninhbinh', 2], ['catba', 2], ['hanoiStop', 1], ['caobang', 2], ['babe', 2], ['hanoi', 1]]
    }
  },
  nature: {
    name: 'Nature & hiking', tag: 'Most trail time', cover: 'dalat_0',
    blurb: 'Jungle at the start, two highland treks, Pù Luông’s ridges and the karst border country.',
    why: 'Built for hiking: the most trail days and the fewest towns, at the cost of two long travel days.',
    stops: [['cattien', 2], ['dalat', 3], ['puluong', 2], ['ninhbinh', 2], ['caobang', 3], ['babe', 2], ['hanoi', 1]],
    city: [['cattien', 2], ['dalat', 3], ['puluong', 2], ['ninhbinh', 1], ['caobang', 2], ['babe', 1], ['hanoi', 1]],
    cityNight: {
      dalat: [['cattien', 2], ['dalat', 3], ['puluong', 2], ['ninhbinh', 1], ['caobang', 2], ['babe', 1], ['hanoi', 1]],
      ninhbinh: [['cattien', 2], ['dalat', 2], ['puluong', 2], ['ninhbinh', 2], ['caobang', 2], ['babe', 1], ['hanoi', 1]]
    }
  },
  culture: {
    name: 'Culture & food', tag: 'Most to see', cover: 'hoian_0',
    blurb: 'Delta markets, Hội An and Huế’s imperial tombs, Ninh Bình’s old capital, the bay and Hà Nội.',
    why: 'Built for culture and food, with the bay as a break. The catch: Hội An and Huế are in their rainy season.',
    stops: [['mekong', 2], ['central', 4], ['ninhbinh', 2], ['catba', 3], ['hanoi', 4]],
    city: [['mekong', 2], ['central', 3], ['ninhbinh', 2], ['catba', 3], ['hanoi', 2]],
    cityNight: {
      ninhbinh: [['mekong', 2], ['central', 3], ['ninhbinh', 2], ['catba', 3], ['hanoi', 2]],
      central: [['mekong', 2], ['central', 4], ['ninhbinh', 1], ['catba', 3], ['hanoi', 2]]
    }
  },
  slow: {
    name: 'Slow & beach', tag: 'Fewest moves', cover: 'phuquoc_0',
    blurb: 'Four beach days in Phú Quốc’s quiet north, then valleys, karst and the bay at an easy pace.',
    why: 'Built for an easy pace: five bases, long stays, two rest days and only two flights.',
    whyCity: 'Built for an easy pace: long stays, slow days and only two flights.',
    stops: [['phuquoc', 4], ['puluong', 3], ['ninhbinh', 2], ['catba', 4], ['hanoi', 2]],
    city: [['phuquoc', 4], ['puluong', 2], ['ninhbinh', 2], ['catba', 3], ['hanoi', 1]],
    // no early start by default, in keeping with the easy pace
    cityNight: {
      ninhbinh: [['phuquoc', 4], ['puluong', 2], ['ninhbinh', 2], ['catba', 3], ['hanoi', 1]],
      puluong: [['phuquoc', 4], ['puluong', 3], ['ninhbinh', 1], ['catba', 3], ['hanoi', 1]]
    }
  }

};

/* `city`: the same route with three nights handed to the Hồ Chí Minh City days, so the trip stays 16 days.
   `whyCity` replaces `why` where the shorter version changes the facts. */
/* A swap is offered when the route contains exactly one of the two stops. */
const SWAPS = [
  {
    id: 'coast', a: 'dalat', b: 'central', q: 'Dry highlands or the rainy central coast?',
    pts: {
      dalat: ['Dry, sunny days and cold nights (around 13 °C)', 'Two of the best hikes on the trip', 'Nature first, few sights to tick off'],
      central: ['Hội An, the Hải Vân Pass and Huế’s tombs', 'Rainy season: around 20 wet days in December', 'Culture first, less nature']
    }
  },
  {
    id: 'water', a: 'catba', b: 'puluong', q: 'The bay or the valleys?',
    pts: {
      catba: ['A night on a boat among the karst islands', 'Kayaking, a car-free village, seafood', 'Cool and often misty; the sea is about 20 °C'],
      puluong: ['Bamboo homestays and a full-day trek', 'Rice valleys, water wheels and Thái villages', 'Rice is harvested by December; misty mornings']
    }
  },
  {
    id: 'south', a: 'mekong', b: 'cattien', q: 'The delta or the jungle?',
    pts: {
      mekong: ['Floating market, orchards and homestay life', 'Flat, easy and very social', 'Warm and dry in December'],
      cattien: ['Gibbons at dawn and a night safari', 'Forest trails and Crocodile Lake', 'Start of the dry season: fewer leeches']
    }
  }
];

/* Travel legs. Hours are door to door estimates; flights add about 1.5 h at the airports. */
const FLY = { 'SGN-DLI': 0.9, 'SGN-PQC': 1, 'SGN-DAD': 1.3, 'SGN-HAN': 2.2, 'VCA-DAD': 1.5, 'VCA-HAN': 2.2,
  'PQC-HAN': 2.1, 'DLI-HAN': 1.8, 'DLI-DAD': 1.1, 'HUI-HAN': 1.2 };
const AIRPORT_NAME = { SGN: 'Hồ Chí Minh City', VCA: 'Cần Thơ', PQC: 'Phú Quốc', DLI: 'Đà Lạt', DAD: 'Đà Nẵng', HUI: 'Huế', HAN: 'Hà Nội' };
const EXIT_AIR = { start: 'SGN', mekong: 'VCA', phuquoc: 'PQC', dalat: 'DLI', central: 'HUI' };
const ROAD_FROM_HAN = { puluong: 4, ninhbinh: 2, catba: 3.5, caobang: 6, babe: 5, hanoi: 0.75, hanoiStop: 0.75 };
const ROAD = {
  'hanoi-ninhbinh': 2, 'hanoi-catba': 3.5, 'hanoi-caobang': 6, 'hanoi-babe': 5, 'hanoi-puluong': 4,
  'puluong-ninhbinh': 2.5, 'puluong-catba': 6, 'puluong-hanoi': 4,
  'ninhbinh-catba': 3, 'ninhbinh-hanoi': 2, 'ninhbinh-caobang': 8, 'ninhbinh-babe': 7, 'ninhbinh-puluong': 2.5,
  'catba-hanoi': 3.5, 'catba-ninhbinh': 3, 'catba-caobang': 9,
  'caobang-babe': 5, 'caobang-hanoi': 7, 'babe-hanoi': 5
};
const NORTH = new Set(['puluong', 'ninhbinh', 'catba', 'caobang', 'babe', 'hanoi', 'hanoiStop']);

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

/* Pros and cons for the spare-night choice (Balanced, Nature & hiking). Swapped-in stops (puluong, central) have their own. */
const NIGHT_PTS = {
  dalat: { pro: ['A third day in the highlands, for the Tà Năng grass hills', 'Dry, sunny days and cool nights'],
    con: ['Ninh Bình shrinks to one evening and an early boat at Tràng An before you leave'] },
  central: { pro: ['One more day for Huế and its countryside', 'Slack in the plan if the rain spoils a day'],
    con: ['Ninh Bình shrinks to one evening and an early boat at Tràng An before you leave'] },
  catba: { pro: ['A full day at Việt Hải as well as the night on the boat', 'More time on the bay, the highlight of the north'],
    con: ['Ninh Bình shrinks to one evening and an early boat at Tràng An before you leave'] },
  puluong: { pro: ['A slow day in the valley after the trek', 'One more night in a bamboo homestay'],
    con: ['Ninh Bình shrinks to one evening and an early boat at Tràng An before you leave'] },
  ninhbinh: { pro: ['A full, unhurried day among the karst: Tràng An, Hoa Lư and Vân Long', 'No early start on the day you move on'],
    con: { catba: 'Cát Bà becomes arrival plus the cruise, with no island day', puluong: 'Pù Luông becomes arrival plus the trek, with no slow day',
      dalat: 'Đà Lạt drops its third day and the Tà Năng grass hills', central: 'Hội An & Huế gets a day less, with less slack for rain' } }
};

const LEFT_OUT = [
  { name: 'Sapa', why: 'Cold and foggy in December, with frosty nights, and the busiest trekking town in the north. Cao Bằng and Ba Bể give you the mountains without the crowds.' },
  { name: 'The Hà Giang loop', why: 'Spectacular, but now a conveyor belt of easy-rider group tours. Better on a longer trip, outside the peak months.' },
  { name: 'Hạ Long Bay from Hạ Long City', why: 'Hundreds of boats on the same circuit. Lan Hạ Bay from Cát Bà has the same karst with far fewer boats.' },
  { name: 'Phong Nha', why: 'December is the wet season on the central coast, and the big cave expeditions only start again around February.' },
  { name: 'Côn Đảo and Sơn Trà', why: 'Rough seas and rain in December. Both make an easy spring weekend from Hồ Chí Minh City.' }
];
