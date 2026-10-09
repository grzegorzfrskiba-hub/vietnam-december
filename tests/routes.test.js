/* Every combination a visitor can pick: style × city days × gentle × spare night × swaps. Each one is built and checked. */
function allChoices() {
  var out = [];
  Object.keys(ROUTES).forEach(function (style) {
    [false, true].forEach(function (saigon) {
      [false, true].forEach(function (gentle) {
        var nights = saigon && ROUTES[style].cityNight ? Object.keys(ROUTES[style].cityNight) : [null];
        nights.forEach(function (night) {
          var base = night ? { night: night } : {};
          // the swaps on offer, each with both of its stops
          var picks = [base];
          buildRoute(style, base, saigon, gentle).swaps.forEach(function (x) {
            var next = [];
            picks.forEach(function (c) {
              [x.sw.a, x.sw.b].forEach(function (id) {
                var c2 = Object.assign({}, c); c2[x.sw.id] = id; next.push(c2);
              });
            });
            picks = next;
          });
          picks.forEach(function (choice) { out.push({ style: style, saigon: saigon, gentle: gentle, choice: choice }); });
        });
      });
    });
  });
  return out;
}

var combos = allChoices(), fails = [];
combos.forEach(function (c) {
  var name = c.style + (c.saigon ? ' +HCMC' : '') + (c.gentle ? ' +gentle' : '') + ' ' + JSON.stringify(c.choice);
  function need(cond, what) { if (!cond) fails.push(name + ': ' + what); }
  var r;
  try { r = buildRoute(c.style, c.choice, c.saigon, c.gentle); } catch (e) { fails.push(name + ': ' + e.message); return; }

  // 14 nights, days 1–14 in order with no gap, then the flight home on day 15
  var nights = r.stops.reduce(function (n, s) { return n + s.n; }, 0);
  need(nights === 14, nights + ' nights');
  need(r.days === 15, 'flight home on day ' + r.days);
  var expect = 1;
  r.stops.forEach(function (s) {
    need(s.start === expect && s.end === s.start + s.n - 1 && s.days.length === s.n, s.id + ' covers days ' + s.start + '–' + s.end);
    s.days.forEach(function (d) { need(d.day === expect, s.id + ': day ' + d.day + ', want ' + expect); expect++; });
  });

  // every leg in is defined, with a time for each segment (the city days have none: the trip starts there)
  r.stops.forEach(function (s, i) {
    if (s.id === 'saigon') { need(i === 0 && !s.leg, 'city days not first'); return; }
    need(s.leg && s.leg.segs.length && s.leg.total > 0, 'no leg into ' + s.id);
    if (s.leg) s.leg.segs.forEach(function (g) { need(typeof g.h === 'number' && g.h > 0, 'segment without hours into ' + s.id); });
    // a flight from anywhere but the arrival airport starts with the ride from the stop to the airport
    if (s.leg && s.leg.flights && s.leg.from !== 'start') need(s.leg.segs[0].mode === 'road' && s.leg.segs[0].from === s.leg.from, 'no ride to the airport from ' + s.leg.from);
  });

  // the gentle version has no hikes
  if (c.gentle) r.stops.forEach(function (s) { s.days.forEach(function (d) { need(d.pace !== 'hike', 'hike on day ' + d.day + ' (' + s.id + ')'); }); });
});
print('routes: ' + combos.length + ' combinations');
if (fails.length) throw new Error(fails.length + ' failures:\n' + fails.slice(0, 40).join('\n'));
print('routes ok');
