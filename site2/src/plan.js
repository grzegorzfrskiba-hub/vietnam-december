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
