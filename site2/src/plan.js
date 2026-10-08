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
