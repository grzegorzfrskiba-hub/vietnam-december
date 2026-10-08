// every language in UI has exactly the keys of UI.en, and none is empty
var en = Object.keys(UI.en);
Object.keys(UI).forEach(function (code) {
  var keys = Object.keys(UI[code]);
  eq(en.filter(function (k) { return !(k in UI[code]); }), [], 'keys missing in UI.' + code);
  eq(keys.filter(function (k) { return !(k in UI.en); }), [], 'keys in UI.' + code + ' that UI.en does not have');
  en.forEach(function (k) { ok(typeof UI[code][k] === 'string' && UI[code][k].trim(), 'empty text for UI.' + code + '[\'' + k + '\']'); });
  print('i18n ok: ' + code + ' ' + keys.length + ' keys');
});
// the hours-and-minutes format needs both numbers, or the minutes would silently vanish from every travel time
Object.keys(UI).forEach(function (code) {
  ok(UI[code]['fmt.hm'].indexOf('{h}') > -1 && UI[code]['fmt.hm'].indexOf('{m}') > -1, 'UI.' + code + '[\'fmt.hm\'] needs {h} and {m}');
});
print('fmt.hm ok');
// counted words come in three forms, chosen by nightForm() in plan.js; the old single keys must be gone
['nights', 'f.bases', 'f.flights', 'f.hikes'].forEach(function (family) {
  ['one', 'few', 'many'].forEach(function (form) {
    Object.keys(UI).forEach(function (code) { ok(UI[code][family + '.' + form], 'UI.' + code + ' lacks ' + family + '.' + form); });
  });
});
['night', 'nights', 'f.bases', 'f.flights', 'f.hikes'].forEach(function (k) { ok(!(k in UI.en), 'UI.en still has the old key ' + k); });
print('counted words ok');
