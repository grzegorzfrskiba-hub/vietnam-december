Object.keys(STOPS).forEach(function (id) {
  STOPS[id].photos.forEach(function (p) { ok(I18N_DE.cap[p], 'DE caption missing for ' + p); });
  var de = I18N_DE.stops[id];
  if (de && de.days) eq(de.days.length, STOPS[id].days.length, 'DE day count for ' + id);
});
print('data ok');
function pair(r, what) { ok(r && r.length === 2 && r[0] > 0 && r[1] >= r[0], 'bad range for ' + what + ': ' + JSON.stringify(r)); }
Object.keys(STOPS).filter(function (id) { return id !== 'hanoiStop'; }).forEach(function (id) { pair(COSTS.nightPP[id], 'nightPP.' + id); });
Object.keys(COSTS.extrasPP).forEach(function (id) { pair(COSTS.extrasPP[id], 'extrasPP.' + id); });
['flightPP', 'roadHourPP', 'carHourPP', 'dayPP'].forEach(function (k) { pair(COSTS[k], k); });
print('costs ok');
