Object.keys(STOPS).forEach(function (id) {
  STOPS[id].photos.forEach(function (p) { ok(I18N_DE.cap[p], 'DE caption missing for ' + p); });
  var de = I18N_DE.stops[id];
  if (de && de.days) eq(de.days.length, STOPS[id].days.length, 'DE day count for ' + id);
});
print('data ok');
function pair(r, what) { ok(r && r.length === 2 && r[0] > 0 && r[1] >= r[0], 'bad range for ' + what + ': ' + JSON.stringify(r)); }
Object.keys(STOPS).filter(function (id) { return id !== 'hanoiStop'; }).forEach(function (id) { pair(COSTS.nightPP[id], 'nightPP.' + id); });
Object.keys(COSTS.extrasPP).forEach(function (id) { pair(COSTS.extrasPP[id], 'extrasPP.' + id); ok(id in STOPS, 'extrasPP key is not a stop: ' + id); });
['flightPP', 'roadHourPP', 'carHourPP', 'dayPP'].forEach(function (k) { pair(COSTS[k], k); });
// a day's trip cost is a range; a day that has a cost and a gentle version prices the gentle one too, or it would inherit the hike's guide
Object.keys(STOPS).forEach(function (id) {
  STOPS[id].days.forEach(function (d, i) {
    if (d.pp) pair(d.pp, id + ' day ' + i + ' pp');
    if (d.e && d.e.pp) pair(d.e.pp, id + ' day ' + i + ' gentle pp');
    if (d.pp && d.e) ok(d.e.pp, id + ' day ' + i + ' has a cost but its gentle version has none');
    [d, d.e, d.solo].forEach(function (x) { if (x && 'early' in x) ok(typeof x.early === 'boolean', id + ' day ' + i + ': early is true or false'); });
  });
});
print('costs ok');
Object.keys(BOOK_LINKS).forEach(function (k) {
  ok(k in UI.en, 'BOOK_LINKS key without text: ' + k);
  BOOK_LINKS[k].forEach(function (l) { ok(/^https:\/\//.test(l.url) && l.label, 'bad link in ' + k); });
});
print('links data ok');
/* Real dates: Fri 11 Dec arrival, Fri 25 Dec departure = 14 nights (3 of them in Saigon with the city add-on). */
eq(TRIP.start, '2026-12-11', 'trip start');
function nightSum(list) { return list.reduce(function (n, s) { return n + s[1]; }, 0); }
var oneNight = {};
Object.keys(ROUTES).forEach(function (rid) {
  var R = ROUTES[rid];
  eq(nightSum(R.stops), 14, rid + ' stops nights');
  eq(nightSum(R.city), 11, rid + ' city nights');
  // the spare-night choice, where a route has one, offers two lists and the first is the default
  var cn = R.cityNight || {};
  if (R.cityNight) {
    eq(Object.keys(cn).length, 2, rid + ' cityNight has two options');
    eq(JSON.stringify(R.city), JSON.stringify(cn[Object.keys(cn)[0]]), rid + ' city is the first cityNight entry');
  }
  Object.keys(cn).forEach(function (k) { eq(nightSum(cn[k]), 11, rid + ' cityNight.' + k + ' nights'); });
  [R.stops, R.city].concat(Object.keys(cn).map(function (k) { return cn[k]; })).forEach(function (list) {
    list.forEach(function (s) { if (s[1] === 1 && s[0] !== 'hanoi' && s[0] !== 'hanoiStop') oneNight[s[0]] = true; });
  });
});
/* a one-night stop needs a one-night plan, and so does its swap partner (the swap can put it in the same place) */
Object.keys(oneNight).slice().forEach(function (id) {
  SWAPS.forEach(function (sw) { if (sw.a === id) oneNight[sw.b] = true; if (sw.b === id) oneNight[sw.a] = true; });
});
Object.keys(oneNight).forEach(function (id) {
  var first = STOPS[id].days.filter(function (d) { return d.p === 1; })[0];
  ok(first && first.solo, id + ' gets one night but its first day has no solo plan');
});
Object.keys(STOPS).forEach(function (id) {
  STOPS[id].days.forEach(function (d, i) {
    if (!d.solo) return;
    var de = I18N_DE.dayExtra[id] && I18N_DE.dayExtra[id].solo && I18N_DE.dayExtra[id].solo[i];
    ok(de && de.length === 2 && de[0] && de[1], 'DE solo text missing for ' + id + ' day ' + i);
  });
});
print('real dates ok');
