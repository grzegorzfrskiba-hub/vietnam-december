"""One-off patch: in Balanced with the city days, let the group choose where the extra night goes (Cát Bà or Ninh Bình)."""

def patch(p, pairs):
    s = open(p, encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) == 1, (p, a)
        s = s.replace(a, b)
    open(p, 'w', encoding='utf-8').write(s)

patch('src/data.js', [
    # Ninh Bình with a single night: fold Tràng An into the next morning
    ("t: 'Arrive among the karst', d: 'Stay in the lanes behind Tam Cốc. If you arrive by mid-afternoon, take the rowed boat on Vân Long’s wetland at golden hour.' }",
     "t: 'Arrive among the karst', d: 'Stay in the lanes behind Tam Cốc. If you arrive by mid-afternoon, take the rowed boat on Vân Long’s wetland at golden hour.', "
     "solo: { pace: 'boat', t: 'Karst at dusk and at dawn', d: 'Stay in the lanes behind Tam Cốc and arrive by mid-afternoon for the rowed boat on Vân Long’s wetland at golden hour. Next morning, be at the Tràng An pier when it opens at 7 am for the cave route, then drive on.' } }"),
    ("    city: [['dalat', 2], ['ninhbinh', 2], ['catba', 2], ['hanoiStop', 1], ['caobang', 2], ['babe', 2], ['hanoi', 1]]\n",
     "    city: [['dalat', 2], ['ninhbinh', 1], ['catba', 3], ['hanoiStop', 1], ['caobang', 2], ['babe', 2], ['hanoi', 1]],\n"
     "    /* with the city days one night is short: the group picks where the spare one goes (first = default) */\n"
     "    cityNight: {\n"
     "      catba: [['dalat', 2], ['ninhbinh', 1], ['catba', 3], ['hanoiStop', 1], ['caobang', 2], ['babe', 2], ['hanoi', 1]],\n"
     "      ninhbinh: [['dalat', 2], ['ninhbinh', 2], ['catba', 2], ['hanoiStop', 1], ['caobang', 2], ['babe', 2], ['hanoi', 1]]\n"
     "    }\n"),
    ("const LEFT_OUT = [",
     """/* Pros and cons for the Balanced night choice. puluong stands in when the bay is swapped for the valleys. */
const NIGHT_PTS = {
  catba: { pro: ['A full day at Việt Hải as well as the night on the boat', 'More time on the bay, the highlight of the north'],
    con: ['Ninh Bình shrinks to one evening and an early boat at Tràng An before you leave'] },
  puluong: { pro: ['A slow day in the valley after the trek', 'One more night in a bamboo homestay'],
    con: ['Ninh Bình shrinks to one evening and an early boat at Tràng An before you leave'] },
  ninhbinh: { pro: ['A full, unhurried day among the karst: Tràng An, Hoa Lư and Vân Long', 'No early start on the day you move on'],
    con: { catba: 'Cát Bà becomes arrival plus the cruise, with no island day', puluong: 'Pù Luông becomes arrival plus the trek, with no slow day' } }
};

const LEFT_OUT = ["""),
])

patch('src/i18n.js', [
    ("    'x.cut': 'To make room: {x}',",
     "    'n.q': 'The spare night: {a} or {b}?', 'n.p': 'With the city days, one stop gets a night less. Choose which one keeps it.',\n    'x.cut': 'To make room: {x}',"),
    ("    'x.cut': 'Dafür kürzer: {x}',",
     "    'n.q': 'Die übrige Nacht: {a} oder {b}?', 'n.p': 'Mit den Stadttagen hat ein Ort eine Nacht weniger. Wählt, welcher sie behält.',\n    'x.cut': 'Dafür kürzer: {x}',"),
    ("    ninhbinh: { easy: {\n",
     "    ninhbinh: { solo: {\n      0: ['Karst in der Dämmerung und am Morgen', 'Unterkunft in den Gassen hinter Tam Cốc; bis zum Nachmittag ankommen und zur goldenen Stunde im Ruderboot durch das Feuchtgebiet Vân Long. Am nächsten Morgen um 7 Uhr zur Öffnung am Anleger von Tràng An für die Höhlenroute, dann weiter.'] }, easy: {\n"),
    ("  /* gentle versions [title, text] and rain plans, by index into each stop's days in data.js */",
     """  night: {
    catba: { pro: ['Ein ganzer Tag in Việt Hải zusätzlich zur Nacht auf dem Boot', 'Mehr Zeit in der Bucht, dem Höhepunkt des Nordens'],
      con: ['Ninh Bình schrumpft auf einen Abend und eine frühe Bootsfahrt in Tràng An vor der Abreise'] },
    puluong: { pro: ['Ein ruhiger Tag im Tal nach der Wanderung', 'Eine Nacht mehr in einer Bambus-Unterkunft'],
      con: ['Ninh Bình schrumpft auf einen Abend und eine frühe Bootsfahrt in Tràng An vor der Abreise'] },
    ninhbinh: { pro: ['Ein ganzer, entspannter Tag im Karst: Tràng An, Hoa Lư und Vân Long', 'Kein früher Start am Tag der Weiterreise'],
      con: { catba: 'Cát Bà wird zu Ankunft plus Kreuzfahrt, ohne Inseltag', puluong: 'Pù Luông wird zu Ankunft plus Wanderung, ohne ruhigen Tag' } }
  },
  /* gentle versions [title, text], one-night versions (solo) and rain plans, by index into each stop's days in data.js */"""),
])

patch('src/app.js', [
    ("      if (d.rain && ex.rain && ex.rain[i]) o.rain = ex.rain[i];",
     "      if (d.rain && ex.rain && ex.rain[i]) o.rain = ex.rain[i];\n      if (d.solo && ex.solo && ex.solo[i]) o.solo = Object.assign({}, d.solo, { t: ex.solo[i][0], d: ex.solo[i][1] });"),
    ("  function LO() { return lang === 'de' ? I18N_DE.leftOut : LEFT_OUT; }",
     "  function LO() { return lang === 'de' ? I18N_DE.leftOut : LEFT_OUT; }\n  function NP(id) { return lang === 'de' ? I18N_DE.night[id] : NIGHT_PTS[id]; }"),
    ("    var stops = (saigon ? R0.city : R0.stops).map(function (s) { return { id: s[0], n: s[1] }; });",
     """    var night = null, list = saigon ? R0.city : R0.stops;
    if (saigon && R0.cityNight) {
      var keys = Object.keys(R0.cityNight);
      night = { keys: keys, pick: R0.cityNight[choice.night] ? choice.night : keys[0] };
      list = R0.cityNight[night.pick];
    }
    var stops = list.map(function (s) { return { id: s[0], n: s[1] }; });"""),
    ("        days: tmpl.map(function (t, k) { return Object.assign({ day: day + k }, t, gentle && t.e ? Object.assign({ gentle: true }, t.e) : {}); })",
     "        // a one-night stop uses its folded plan (solo) when it has one\n"
     "        days: tmpl.map(function (t, k) { return Object.assign({ day: day + k }, t, s.n === 1 && t.solo ? t.solo : gentle && t.e ? Object.assign({ gentle: true }, t.e) : {}); })"),
    ("    return { style: styleId, stops: out, swaps: swaps, saigon: !!saigon, gentle: !!gentle, days: day };",
     "    return { style: styleId, stops: out, swaps: swaps, saigon: !!saigon, gentle: !!gentle, days: day, night: night };"),
    ("  function renderExtra(route) {",
     """  // Balanced with the city days: where the spare night goes, with pros and cons
  function renderNight(route) {
    var box = $('#night');
    if (!route.night) { box.innerHTML = ''; return; }
    var lists = ROUTES[route.style].cityNight;
    var actual = function (id) {   // the bay may have been swapped for the valleys
      var x = route.swaps.filter(function (w) { return w.def === id; })[0];
      return x ? x.pick : id;
    };
    var nightsOf = function (key, id) { return lists[key].filter(function (s) { return s[0] === id; })[0][1]; };
    var ids = route.night.keys;
    var label = function (id, n) { return S(actual(id)).short + ' ' + n + ' ' + (n === 1 ? T('night') : T('nights')); };
    var opts = ids.map(function (key) {
      var real = actual(key), other = actual(ids[0] === key ? ids[1] : ids[0]), pts = NP(real);
      var cons = Array.isArray(pts.con) ? pts.con : [pts.con[other]];
      return '<label class="swap-opt" for="night-' + key + '">' +
        '<input type="radio" name="night" id="night-' + key + '" value="' + key + '"' + (route.night.pick === key ? ' checked' : '') + '>' +
        '<span class="swap-head"><span class="dot" style="--c:' + stopColor(real) + '"></span><span class="swap-name">' + esc(S(real).short) + '</span></span>' +
        '<span class="swap-meta mono">' + esc(ids.map(function (id) { return label(id, nightsOf(key, id)); }).join(' · ')) + '</span>' +
        '<ul>' + pts.pro.map(function (t) { return '<li class="pro">' + esc(t) + '</li>'; }).join('') +
        cons.map(function (t) { return '<li class="con">' + esc(t) + '</li>'; }).join('') + '</ul></label>';
    }).join('<span class="swap-or" aria-hidden="true">' + esc(T('swaps.or')) + '</span>');
    box.innerHTML = '<fieldset class="swap"><legend>' + esc(T('n.q', { a: S(actual(ids[0])).short, b: S(actual(ids[1])).short })) + '</legend>' +
      '<p class="night-p">' + esc(T('n.p')) + '</p><div class="swap-opts">' + opts + '</div></fieldset>';
  }

  function renderExtra(route) {"""),
    ("    renderExtra(current);", "    renderExtra(current);\n    renderNight(current);"),
    ("    } else if (t.name && t.name.indexOf('swap-') === 0) {",
     "    } else if (t.name === 'night') {\n      state.choice.night = t.value;\n      save(); render();\n    } else if (t.name && t.name.indexOf('swap-') === 0) {"),
])

patch('src/template.html', [
    ("      <div id=\"extra\" class=\"extras\"></div>\n", "      <div id=\"extra\" class=\"extras\"></div>\n      <div id=\"night\"></div>\n"),
    (".pace-gentle {",
     "#night .swap { margin-top: 22px; }\n.night-p { margin: -4px 0 10px; font-size: 14px; color: var(--muted); }\n"
     ".swap-opt li.pro::before { content: \"+\"; color: var(--accent); font-weight: 600; }\n"
     ".swap-opt li.con::before { content: \"−\"; color: var(--wet); font-weight: 600; }\n.pace-gentle {"),
])
print('night patch ok')
