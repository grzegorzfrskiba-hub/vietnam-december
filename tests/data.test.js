Object.keys(STOPS).forEach(function (id) {
  STOPS[id].photos.forEach(function (p) { ok(I18N_DE.cap[p], 'DE caption missing for ' + p); });
  var de = I18N_DE.stops[id];
  if (de && de.days) eq(de.days.length, STOPS[id].days.length, 'DE day count for ' + id);
});
print('data ok');
