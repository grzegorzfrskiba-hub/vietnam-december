/* Polish: UI.pl has exactly the UI.en keys (same order, same {placeholders} and tags),
   and I18N_PL covers every English text in data.js and every photo caption. Every gap is listed by name. */
(function () {
  var fails = [];
  function need(c, what) { if (!c) fails.push(what); }
  function text(v) { return typeof v === 'string' && v.trim() !== ''; }
  function pair(v) { return Array.isArray(v) && v.length === 2 && text(v[0]) && text(v[1]); }
  function list(v, n) { return Array.isArray(v) && v.length === n && v.every(text); }

  /* ---------- UI ---------- */
  var pl = UI.pl || {};
  var enKeys = Object.keys(UI.en), plKeys = Object.keys(pl);
  enKeys.forEach(function (k) { need(text(pl[k]), 'UI.pl[\'' + k + '\']'); });
  plKeys.forEach(function (k) { need(k in UI.en, 'unexpected key UI.pl[\'' + k + '\']'); });
  need(JSON.stringify(plKeys.filter(function (k) { return k in UI.en; })) === JSON.stringify(enKeys.filter(function (k) { return k in pl; })),
    'UI.pl keys are not in the order of UI.en');
  // the page fills in {placeholders} and renders hero.h1 as HTML; strings starting or ending with a space are glued to others
  function marks(s) { return (String(s).match(/\{[a-z]+\}|<\/?[a-z][^>]*>/gi) || []).sort().join(' '); }
  enKeys.forEach(function (k) {
    if (!text(pl[k])) return;
    need(marks(pl[k]) === marks(UI.en[k]), 'UI.pl[\'' + k + '\'] has placeholders/tags "' + marks(pl[k]) + '", want "' + marks(UI.en[k]) + '"');
    need(/^\s/.test(pl[k]) === /^\s/.test(UI.en[k]) && /\s$/.test(pl[k]) === /\s$/.test(UI.en[k]), 'UI.pl[\'' + k + '\'] leading/trailing space differs from EN');
  });
  if (text(pl['fmt.hm'])) need(marks(pl['fmt.hm']) === '{h} {m}', 'UI.pl[\'fmt.hm\'] needs {h} and {m}');

  /* ---------- content ---------- */
  var P = typeof I18N_PL === 'object' && I18N_PL ? I18N_PL : {};
  ['pace', 'stops', 'routes', 'swaps', 'weather', 'leftOut', 'cap', 'night', 'dayExtra'].forEach(function (k) { need(P[k], 'I18N_PL.' + k); });
  var pace = P.pace || {}, stops = P.stops || {}, routes = P.routes || {}, swaps = P.swaps || {}, weather = P.weather || {},
    leftOut = P.leftOut || [], cap = P.cap || {}, night = P.night || {}, extra = P.dayExtra || {};

  Object.keys(PACE).forEach(function (k) { need(text(pace[k]), 'pace.' + k); });

  // dayExtra mirrors the day fields: e → easy [title, text], rain → rain text, solo → solo [title, text]
  var KIND = { easy: 'e', rain: 'rain', solo: 'solo' };
  Object.keys(STOPS).forEach(function (id) {
    var en = STOPS[id], st = stops[id] || {}, ex = extra[id] || {};
    need(stops[id], 'stops.' + id);
    ['name', 'sub', 'short', 'gem', 'skip', 'instead', 'warn'].forEach(function (f) {
      if (en[f] != null) need(text(st[f]), 'stops.' + id + '.' + f);
    });
    need(Array.isArray(st.days) && st.days.length === en.days.length,
      'stops.' + id + '.days has ' + (st.days ? st.days.length : 0) + ' days, want ' + en.days.length);
    en.days.forEach(function (d, i) {
      need(st.days && pair(st.days[i]), 'stops.' + id + '.days[' + i + '] [title, text]');
      if (d.e) need(ex.easy && pair(ex.easy[i]), 'dayExtra.' + id + '.easy[' + i + '] [title, text]');
      if (d.rain) need(ex.rain && text(ex.rain[i]), 'dayExtra.' + id + '.rain[' + i + ']');
      if (d.solo) need(ex.solo && pair(ex.solo[i]), 'dayExtra.' + id + '.solo[' + i + '] [title, text]');
    });
    Object.keys(KIND).forEach(function (kind) {
      Object.keys(ex[kind] || {}).forEach(function (i) {
        need(en.days[i] && en.days[i][KIND[kind]], 'unexpected dayExtra.' + id + '.' + kind + '[' + i + ']: that day has no ' + KIND[kind]);
      });
    });
  });
  Object.keys(stops).forEach(function (id) { need(id in STOPS, 'unexpected stops.' + id); });
  Object.keys(extra).forEach(function (id) { need(id in STOPS, 'unexpected dayExtra.' + id); });

  Object.keys(ROUTES).forEach(function (id) {
    var r = routes[id] || {};
    need(routes[id], 'routes.' + id);
    ['name', 'tag', 'blurb', 'why', 'whyCity'].forEach(function (f) {
      if (ROUTES[id][f] != null) need(text(r[f]), 'routes.' + id + '.' + f);
    });
  });
  Object.keys(routes).forEach(function (id) { need(id in ROUTES, 'unexpected routes.' + id); });

  SWAPS.forEach(function (sw) {
    var s = swaps[sw.id] || {};
    need(text(s.q), 'swaps.' + sw.id + '.q');
    [sw.a, sw.b].forEach(function (id) {
      need(s.pts && list(s.pts[id], sw.pts[id].length), 'swaps.' + sw.id + '.pts.' + id + ' (' + sw.pts[id].length + ' points)');
    });
  });

  Object.keys(WEATHER).forEach(function (id) {
    var w = weather[id] || {};
    need(text(w.verdict), 'weather.' + id + '.verdict');
    need(text(w.station), 'weather.' + id + '.station');
  });

  need(leftOut.length === LEFT_OUT.length, 'leftOut has ' + leftOut.length + ' items, want ' + LEFT_OUT.length);
  LEFT_OUT.forEach(function (x, i) { need(leftOut[i] && text(leftOut[i].name) && text(leftOut[i].why), 'leftOut[' + i + '] (' + x.name + ')'); });

  // every photo the page shows: the stops' photos, the style covers and the hero (PHOTOS itself is built by build.py)
  var photo = { ninhbinh_1: true };
  Object.keys(STOPS).forEach(function (id) { STOPS[id].photos.forEach(function (p) { photo[p] = true; }); });
  Object.keys(ROUTES).forEach(function (id) { photo[ROUTES[id].cover] = true; });
  Object.keys(photo).forEach(function (p) { need(text(cap[p]), 'cap.' + p); });
  Object.keys(cap).forEach(function (p) { need(photo[p], 'unexpected cap.' + p); });

  Object.keys(NIGHT_PTS).forEach(function (id) {
    var en = NIGHT_PTS[id], n = night[id];
    need(n, 'night.' + id);
    if (!n) return;
    need(JSON.stringify(Object.keys(n).sort()) === JSON.stringify(Object.keys(en).sort()), 'night.' + id + ' keys are ' + Object.keys(n).sort() + ', want ' + Object.keys(en).sort());
    need(list(n.pro, en.pro.length), 'night.' + id + '.pro (' + en.pro.length + ' points)');
    if (Array.isArray(en.con)) {
      need(list(n.con, en.con.length), 'night.' + id + '.con (' + en.con.length + ' points)');
    } else {
      var want = Object.keys(en.con).sort(), got = n.con && !Array.isArray(n.con) ? Object.keys(n.con).sort() : [];
      need(JSON.stringify(got) === JSON.stringify(want), 'night.' + id + '.con stops are ' + got + ', want ' + want);
      want.forEach(function (k) { need(n.con && text(n.con[k]), 'night.' + id + '.con.' + k); });
    }
  });
  Object.keys(night).forEach(function (id) { need(id in NIGHT_PTS, 'unexpected night.' + id); });

  /* ---------- Polish typography in every string ---------- */
  var all = [];
  function walk(v, path) {
    if (typeof v === 'string') all.push([path, v]);
    else if (v && typeof v === 'object') Object.keys(v).forEach(function (k) { walk(v[k], path + '.' + k); });
  }
  walk(pl, 'UI.pl');
  walk(P, 'I18N_PL');
  all.forEach(function (x) {
    need(!/"/.test(x[1]), x[0] + ': straight quotes, use „…”');
    need(!/\d\s*(am|pm)\b/i.test(x[1]), x[0] + ': am/pm time, use 24-hour time');
    need(!/\d°/.test(x[1]), x[0] + ': no space before °C');
    need(!/\d-\d/.test(x[1]), x[0] + ': hyphen in a range, use an en dash');
  });

  fails.forEach(function (f) { print('  PL missing or wrong: ' + f); });
  ok(!fails.length, fails.length + ' Polish text problem(s), listed above');
  print('pl ok: ' + plKeys.length + ' UI keys, ' + Object.keys(stops).length + ' stops, ' + Object.keys(cap).length + ' captions, ' + all.length + ' strings');
})();
