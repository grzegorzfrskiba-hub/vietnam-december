/* Pure helpers shared by the page and the tests: route statistics, budget, dates. No DOM here. */

/* Counts for one built route: domestic flights, hiking days, the longest travel day (hours) and bases (the Hà Nội stopover is not a base). */
function routeStats(route) {
  var flights = 0, hikes = 0, longest = 0;
  route.stops.forEach(function (s) {
    if (s.leg) {
      s.leg.segs.forEach(function (g) { if (g.mode === 'fly') flights++; });
      longest = Math.max(longest, s.leg.total);
    }
    s.days.forEach(function (d) { if (d.pace === 'hike') hikes++; });
  });
  var bases = route.stops.filter(function (s) { return s.id !== 'hanoiStop'; }).length;
  return { flights: flights, hikes: hikes, longest: longest, bases: bases };
}

/* Per-person estimate [low, high], rounded to 10: sharing a double room, no international flights.
   The gentle version travels by private car instead of vans and buses. */
function budgetFor(route, costs) {
  var lo = 0, hi = 0;
  function add(r, k) { lo += r[0] * k; hi += r[1] * k; }
  var road = route.gentle ? costs.carHourPP : costs.roadHourPP;
  route.stops.forEach(function (s) {
    var id = s.id === 'hanoiStop' ? 'hanoi' : s.id;
    add(costs.nightPP[id], s.n);
    if (costs.extrasPP[id]) add(costs.extrasPP[id], 1);
    if (s.leg) s.leg.segs.forEach(function (g) { if (g.mode === 'fly') add(costs.flightPP, 1); else add(road, g.h); });
  });
  add(costs.dayPP, route.days);
  return [Math.round(lo / 10) * 10, Math.round(hi / 10) * 10];
}

/* Calendar date of trip day n (1-based) as YYYY-MM-DD, or null while no start date is set. UTC avoids time-zone shifts. */
function tripDate(startISO, day) {
  if (!startISO) return null;
  var p = startISO.split('-').map(Number);
  return new Date(Date.UTC(p[0], p[1] - 1, p[2] + day - 1)).toISOString().slice(0, 10);
}

/* Plural class of a night count: 'one', 'few' (2–4, 22–24…, but not 12–14) or 'many'. English and German use one plural, Polish two. */
function nightForm(n) {
  var last = n % 10, lastTwo = n % 100;
  if (n === 1) return 'one';
  return last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14) ? 'few' : 'many';
}

/* The page language: a #hash that names one of langs wins, then a stored choice, then the browser's primary language subtag
   (de-AT gives de; deu is another language), else the first language. */
function pickLang(stored, browser, hash, langs) {
  var fromHash = String(hash || '').replace(/^#/, '');
  if (langs.indexOf(fromHash) > -1) return fromHash;
  if (langs.indexOf(stored) > -1) return stored;
  var primary = String(browser || '').split(/[-_]/)[0].toLowerCase();
  return langs.indexOf(primary) > -1 ? primary : langs[0];
}

/* Polish typography: a one-letter word (a i o u w z) gets a no-break space after it, so no line ends on it. It must start the text
   or follow white space, ( „ or –. A run like "i w domu" needs several passes (a match uses up the space in front of the next word), so repeat. */
function tieShort(text) {
  var before;
  do {
    before = text;
    text = text.replace(/(^|[\s(„–])([aiouwzAIOUWZ]) /g, '$1$2\u00a0');
  } while (text !== before);
  return text;
}

/* ---------- building a route ---------- */
var EXTRA_N = 3;     // nights of the optional Hồ Chí Minh City start, taken from the route's own nights
var DAYS = 15;       // trip length incl. the flight-home day

function normStop(id) { return id === 'hanoiStop' ? 'hanoi' : id; }
function roadHours(a, b) {
  var x = normStop(a), y = normStop(b);
  var v = ROAD[x + '-' + y];
  return v != null ? v : ROAD[y + '-' + x];
}
function roadText(from, to) {
  if (from === 'catba' || to === 'catba') return 'r.van_ferry';
  return 'r.van_car';
}
function flySeg(a, b) { return { mode: 'fly', from: a, to: b, h: FLY[a + '-' + b] }; }
function roadSeg(a, b, h, k) { return { mode: 'road', from: a, to: b, h: h, k: k }; }

/* One travel leg between two stops ('start' is the arrival airport, 'saigon' a hotel in the city): road and flight segments,
   door-to-door hours and a note key. A flight starts with the ride from the stop to its airport.
   fromNights: nights at the stop it leaves; after one night the morning there has its own plan (solo). */
function buildLeg(from, to, fromNights) {
  var segs = [];
  var air;
  var dep = from === 'saigon' ? 'start' : from;   // after the city days the trip goes on as from Day 1, plus the ride to the airport
  function toAirport() {
    var a = TO_AIR[from];
    if (a) segs.push(roadSeg(from, a[0], a[1], a[2]));
    return a ? a[0] : 'SGN';
  }
  if (NORTH.has(to)) {
    if (dep === 'start' || !NORTH.has(dep)) {
      air = toAirport();
      segs.push(flySeg(air, 'HAN'));
      segs.push(roadSeg('HAN', to, ROAD_FROM_HAN[to], to === 'hanoi' || to === 'hanoiStop' ? 'r.taxi_city' : roadText('HAN', to)));
    } else {
      segs.push(roadSeg(from, to, roadHours(from, to), roadText(from, to)));
    }
  } else if (to === 'central') {
    air = toAirport();
    segs.push(flySeg(air, 'DAD'));
    segs.push(roadSeg('DAD', 'central', 0.75, 'r.taxi_hoian'));
  } else if (dep === 'start') {
    if (to === 'mekong') segs.push(roadSeg('start', 'mekong', 3.5, 'r.bus_mekong'));
    if (to === 'cattien') segs.push(roadSeg('start', 'cattien', 4, 'r.car_cattien'));
    if (to === 'dalat') { segs.push(flySeg(toAirport(), 'DLI')); segs.push(roadSeg('DLI', 'dalat', 0.75, 'r.taxi_dalat')); }
    if (to === 'phuquoc') { segs.push(flySeg(toAirport(), 'PQC')); segs.push(roadSeg('PQC', 'phuquoc', 0.75, 'r.taxi_pq')); }
  } else if (from === 'cattien' && to === 'dalat') {
    segs.push(roadSeg('cattien', 'dalat', 4.5, 'r.car_baoloc'));
  } else if (from === 'mekong' && to === 'dalat') {
    segs.push(roadSeg('mekong', 'SGN', 3.5, 'r.back_sgn'));
    segs.push(flySeg('SGN', 'DLI'));
    segs.push(roadSeg('DLI', 'dalat', 0.75, 'r.taxi_dalat'));
  }
  if (!segs.length || segs.some(function (s) { return s.h == null; })) {
    throw new Error('No leg defined from ' + from + ' to ' + to);
  }
  var flights = segs.filter(function (s) { return s.mode === 'fly'; }).length;
  var total = segs.reduce(function (sum, s) { return sum + s.h; }, 0) + 1.5 * flights;
  var note = '';
  if (from === 'caobang' && to === 'babe') note = 'n.bangioc';
  // after one night in Ninh Bình the 7 am boat comes first, so the 8 hours to Cao Bằng end in the evening
  if (from === 'ninhbinh' && to === 'caobang') note = fromNights === 1 ? 'n.long_boat' : 'n.long';
  // hours of road before the airport rule out a morning flight
  if (flights && segs[0].mode === 'road' && segs[0].h >= 2) note = 'n.afternoon';
  else if (from === 'dalat' || from === 'phuquoc' || from === 'central' || from === 'mekong') {
    if (flights && !note) note = 'n.morning';
  }
  var maps = null;
  if (!flights) {
    var origin = from === 'start' ? 'Ho Chi Minh City, Vietnam' : STOPS[from].place;
    maps = 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(origin) +
      '&destination=' + encodeURIComponent(STOPS[to].place) + '&travelmode=driving';
  }
  return { from: from, to: to, segs: segs, flights: flights, total: total, long: total >= 7, note: note, maps: maps };
}

/* The trip for one set of choices: stops with nights, day numbers, legs and the day plans.
   choice: { night, <swap id>: stop id }. dayPlans(id) gives a stop's days in the page language (default: English). */
function buildRoute(styleId, choice, saigon, gentle, dayPlans) {
  dayPlans = dayPlans || function (id) { return STOPS[id].days; };
  var R0 = ROUTES[styleId];
  var night = null, list = saigon ? R0.city : R0.stops;
  if (saigon && R0.cityNight) {
    var keys = Object.keys(R0.cityNight);
    night = { keys: keys, pick: R0.cityNight[choice.night] ? choice.night : keys[0] };
    list = R0.cityNight[night.pick];
  }
  var stops = list.map(function (s) { return { id: s[0], n: s[1] }; });
  var swaps = [];
  SWAPS.forEach(function (sw) {
    var hasA = stops.some(function (s) { return s.id === sw.a; });
    var hasB = stops.some(function (s) { return s.id === sw.b; });
    if (hasA === hasB) return;
    var def = hasA ? sw.a : sw.b, other = hasA ? sw.b : sw.a;
    var nights = stops.filter(function (s) { return s.id === def; })[0].n;
    if (nights < (MIN_NIGHTS[other] || 1)) return;   // e.g. Cát Bà for Pù Luông's two nights in Nature & hiking
    var pick = (choice[sw.id] === sw.a || choice[sw.id] === sw.b) ? choice[sw.id] : def;
    swaps.push({ sw: sw, def: def, pick: pick, nights: nights });
    if (pick !== def) stops = stops.map(function (s) { return s.id === def ? { id: pick, n: s.n } : s; });
  });
  if (saigon) stops.unshift({ id: 'saigon', n: EXTRA_N });
  var day = 1, prev = 'start', prevN = 0, out = [];
  stops.forEach(function (s, i) {
    var tmpl = dayPlans(s.id).slice().sort(function (x, y) { return x.p - y.p; })
      .slice(0, s.n).sort(function (x, y) { return x.o - y.o; });
    if (tmpl.length !== s.n) throw new Error('Not enough day plans for ' + s.id);
    out.push({
      // the city add-on has no leg in: the trip starts there
      id: s.id, n: s.n, num: i + 1, start: day, end: day + s.n - 1, leg: s.id === 'saigon' ? null : buildLeg(prev, s.id, prevN),
      // gentle: swap in the day's easy version (no hikes, no bikes) where it has one
      // a one-night stop uses its folded plan (solo) when it has one
      days: tmpl.map(function (t, k) { return Object.assign({ day: day + k }, t, s.n === 1 && t.solo ? t.solo : gentle && t.e ? Object.assign({ gentle: true }, t.e) : {}); })
    });
    day += s.n; prev = s.id; prevN = s.n;
  });
  if (day !== DAYS) throw new Error('Route ' + styleId + (saigon ? ' with the city days' : '') + ' covers ' + (day - 1) + ' nights, not ' + (DAYS - 1));
  return { style: styleId, stops: out, swaps: swaps, saigon: !!saigon, gentle: !!gentle, days: day, night: night };
}
