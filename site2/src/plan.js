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
