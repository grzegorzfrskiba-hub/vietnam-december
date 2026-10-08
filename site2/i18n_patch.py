p="app.js"; s=open(p,encoding="utf-8").read()
def rep(a,b,n=1):
    global s
    c=s.count(a); assert c==n,(c,a[:90]); s=s.replace(a,b)

# --- language core, inserted after reduceMotion ---
rep("""  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
""", """  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- language ---------- */
  var LKEY = 'vn16-lang';
  var lang = 'en';
  try { lang = localStorage.getItem(LKEY) || ''; } catch (e) { lang = ''; }
  if (lang !== 'en' && lang !== 'de') lang = /^de\\b/i.test(navigator.language || '') ? 'de' : 'en';
  if ((location.hash || '').slice(1) === 'de') lang = 'de';
  if ((location.hash || '').slice(1) === 'en') lang = 'en';
  function T(k, vars) {
    var v = (UI[lang] && UI[lang][k]) || UI.en[k] || k;
    if (vars) Object.keys(vars).forEach(function (n) { v = v.replace('{' + n + '}', vars[n]); });
    return v;
  }
  var DE = lang === 'de';
  function S(id) {
    var base = STOPS[id];
    if (lang !== 'de' || !I18N_DE.stops[id]) return base;
    var tr = I18N_DE.stops[id];
    var out = Object.assign({}, base, tr);
    out.days = base.days.map(function (d, i) { return tr.days && tr.days[i] ? Object.assign({}, d, { t: tr.days[i][0], d: tr.days[i][1] }) : d; });
    return out;
  }
  function RT(id) { return lang === 'de' ? Object.assign({}, ROUTES[id], I18N_DE.routes[id]) : ROUTES[id]; }
  function SWT(sw) { return lang === 'de' && I18N_DE.swaps[sw.id] ? Object.assign({}, sw, I18N_DE.swaps[sw.id]) : sw; }
  function W(id) { return lang === 'de' ? Object.assign({}, WEATHER[id], I18N_DE.weather[id] || {}) : WEATHER[id]; }
  function PC(k) { return lang === 'de' ? I18N_DE.pace[k] : PACE[k]; }
  function CAP(id) { return (lang === 'de' && I18N_DE.cap[id]) || PHOTOS[id].cap; }
  function LO() { return lang === 'de' ? I18N_DE.leftOut : LEFT_OUT; }
""")

# --- formatting ---
rep("""    if (mins < 60) return mins + ' min';
    var hh = Math.floor(mins / 60), mm = mins % 60;
    return hh + ' h' + (mm ? ' ' + mm : '');""",
"""    if (mins < 60) return mins + ' ' + T('min');
    var hh = Math.floor(mins / 60), mm = mins % 60;
    return hh + ' ' + T('h') + (mm ? ' ' + mm : '');""")
rep("""    return '≈ ' + (r % 1 ? (whole ? whole : '') + '½' : whole) + ' h';""",
"""    return '≈ ' + (r % 1 ? (whole ? whole : '') + '½' : whole) + ' ' + T('h');""")
rep("""  function dayRange(a, b) { return a === b ? 'Day ' + a : 'Days ' + a + '–' + b; }""",
"""  function dayRange(a, b) { return a === b ? T('day') + ' ' + a : T('days') + ' ' + a + '–' + b; }""")

# --- legs: keys instead of text ---
rep("""    if (from === 'catba' || to === 'catba') return 'Limousine van and a short ferry';
    return 'Limousine van or private car';""",
"""    if (from === 'catba' || to === 'catba') return 'r.van_ferry';
    return 'r.van_car';""")
rep("""    return { mode: 'fly', from: a, to: b, h: FLY[a + '-' + b],
      text: 'Fly ' + AIRPORT_NAME[a] + ' → ' + AIRPORT_NAME[b] };""",
"""    return { mode: 'fly', from: a, to: b, h: FLY[a + '-' + b] };""")
rep("""  function R(a, b, h, text) { return { mode: 'road', from: a, to: b, h: h, text: text }; }""",
"""  function R(a, b, h, k) { return { mode: 'road', from: a, to: b, h: h, k: k }; }
  function segText(g) { return g.mode === 'fly' ? T('fly') + ' ' + AIRPORT_NAME[g.from] + ' → ' + AIRPORT_NAME[g.to] : T(g.k); }""")
rep("'Road back to Hồ Chí Minh City airport'", "'r.back_sgn'", 3)
rep("'Taxi into the city'", "'r.taxi_city'")
rep("'Taxi to Cần Thơ airport'", "'r.taxi_vca'")
rep("'Taxi to Hội An'", "'r.taxi_hoian'")
rep("'Bus or private car to Phong Điền'", "'r.bus_mekong'")
rep("'Private car or bus, then the river ferry'", "'r.car_cattien'")
rep("'Taxi up to Đà Lạt'", "'r.taxi_dalat'", 2)
rep("'Taxi to the north coast'", "'r.taxi_pq'")
rep("'Private car up through Bảo Lộc'", "'r.car_baoloc'")
rep("note = 'The cruise docks around 11 am.';", "note = 'n.cruise';")
rep("note = 'See Bản Giốc when it opens at 7 am, before the weekend crowds, then drive.';", "note = 'n.bangioc';")
rep("note = 'A long day: leave early.';", "note = 'n.long';")
rep("note = 'Take a morning flight.';", "note = 'n.morning';")

# --- route uses localized stops ---
rep("var tmpl = STOPS[s.id].days.slice()", "var tmpl = S(s.id).days.slice()")

# --- state: keep language tokens out of style hash ---
# (hash 'de'/'en' is not a route id, so the style logic ignores it)

# --- images use localized captions ---
rep("""    return '<img class="' + (cls || '') + '" src="' + p.src + '" alt="' + esc(p.cap) + '" width="' + p.w +""",
"""    return '<img class="' + (cls || '') + '" src="' + p.src + '" alt="' + esc(CAP(id)) + '" width="' + p.w +""")

# --- styles ---
rep("""      var r = ROUTES[id];
      var places = r.stops.filter(function (s) { return s[0] !== 'hanoiStop'; })
        .map(function (s) { return STOPS[s[0]].short; }).join(' · ');""",
"""      var r = RT(id);
      var places = r.stops.filter(function (s) { return s[0] !== 'hanoiStop'; })
        .map(function (s) { return S(s[0]).short; }).join(' · ');""")

# --- swaps ---
rep("""      box.innerHTML = '<p class="swaps-none">No swaps on this route. It is built around a few long stays, and every alternative would add travel.</p>';""",
"""      box.innerHTML = '<p class="swaps-none">' + esc(T('swaps.none')) + '</p>';""")
rep("""    box.innerHTML = route.swaps.map(function (x) {
      var opts""", """    box.innerHTML = route.swaps.map(function (x) {
      var sw = SWT(x.sw);
      var opts""")
rep("""        var w = WEATHER[id];
        return '<label class="swap-opt\"""", """        var w = W(id);
        return '<label class="swap-opt\"""")
rep("""          '<span class="swap-name">' + esc(STOPS[id].name) + '</span>' +
          (i === 0 ? '<span class="swap-default">In this route</span>' : '') + '</span>' +
          '<span class="swap-meta">' + x.nights + ' nights · <span class="tone tone-' + w.tone + '">' + esc(w.verdict) + '</span></span>' +
          '<ul>' + x.sw.pts[id].map(""",
"""          '<span class="swap-name">' + esc(S(id).name) + '</span>' +
          (i === 0 ? '<span class="swap-default">' + esc(T('swaps.inroute')) + '</span>' : '') + '</span>' +
          '<span class="swap-meta">' + x.nights + ' ' + T('nights') + ' · <span class="tone tone-' + w.tone + '">' + esc(w.verdict) + '</span></span>' +
          '<ul>' + sw.pts[id].map(""")
rep("""      }).join('<span class="swap-or" aria-hidden="true">or</span>');
      return '<fieldset class="swap"><legend>' + esc(x.sw.q) + '</legend>""",
"""      }).join('<span class="swap-or" aria-hidden="true">' + esc(T('swaps.or')) + '</span>');
      return '<fieldset class="swap"><legend>' + esc(sw.q) + '</legend>""")

# --- facts ---
rep("""      '<li><b>16</b><span>days, 15 nights</span></li>' +
      '<li><b>' + bases + '</b><span>bases</span></li>' +
      '<li><b>' + flights + '</b><span>domestic flights</span></li>' +
      '<li><b>' + hikes + '</b><span>hiking days</span></li>' +
      '<li><b>' + approx(longest).replace('≈ ', '') + '</b><span>longest travel day</span></li>';""",
"""      '<li><b>16</b><span>' + T('f.days') + '</span></li>' +
      '<li><b>' + bases + '</b><span>' + T('f.bases') + '</span></li>' +
      '<li><b>' + flights + '</b><span>' + T('f.flights') + '</span></li>' +
      '<li><b>' + hikes + '</b><span>' + T('f.hikes') + '</span></li>' +
      '<li><b>' + approx(longest).replace('≈ ', '') + '</b><span>' + T('f.longest') + '</span></li>';""")

# --- strip & why ---
rep("""'" aria-label="Day ' + d.day + ': ' + esc(STOPS[s.id].short) + ', ' + esc(d.t) + '"><span>'""",
"""'" aria-label="' + T('day') + ' ' + d.day + ': ' + esc(S(s.id).short) + ', ' + esc(d.t) + '"><span>'""")
rep("""cells.push('<a class="cell home" href="#day-16" aria-label="Day 16: fly home from Hà Nội"><span>16</span>' + ICON.fly + '</a>');""",
"""cells.push('<a class="cell home" href="#day-16" aria-label="' + esc(T('flyhome.aria')) + '"><span>16</span>' + ICON.fly + '</a>');""")
rep("""    var seen = {};
    $('#strip-legend')""", """    $('#strip-legend')""")
rep("""      return '<li><span class="dot" style="--c:' + stopColor(s.id) + '"></span>' + esc(STOPS[s.id].short) +
        ' <span class="mono">' + dayRange(s.start, s.end) + '</span></li>';
    }).join('') + '<li><span class="dot home-dot"></span>Fly home <span class="mono">Day 16</span></li>';
    var why = ROUTES[route.style].why;""",
"""      return '<li><span class="dot" style="--c:' + stopColor(s.id) + '"></span>' + esc(S(s.id).short) +
        ' <span class="mono">' + dayRange(s.start, s.end) + '</span></li>';
    }).join('') + '<li><span class="dot home-dot"></span>' + T('flyhome') + ' <span class="mono">' + T('day') + ' 16</span></li>';
    var why = RT(route.style).why;""")
rep("""      why += ' Your swaps: ' + swapped.map(function (x) { return STOPS[x.pick].short + ' instead of ' + STOPS[x.def].short; }).join('; ') + '.';""",
"""      why += T('why.swaps') + swapped.map(function (x) { return S(x.pick).short + T('why.instead') + S(x.def).short; }).join('; ') + '.';""")
rep("""      why += ' Hội An and Huế will be rainy.';""", """      why += T('why.rain');""")

# --- map ---
rep("""      return (parts.length > 1 || parts[0].indexOf('–') > -1 ? 'Days ' : 'Day ') + parts.join(', ');""",
"""      return (parts.length > 1 || parts[0].indexOf('–') > -1 ? T('days') : T('day')) + ' ' + parts.join(', ');""")
rep("""'" text-anchor="' + L[2] + '">' + esc(STOPS[key].short) + '</text>' +""", """'" text-anchor="' + L[2] + '">' + esc(S(key).short) + '</text>' +""")
rep("""n.push('<text class="m-title" x="10" y="18">North</text>');""", """n.push('<text class="m-title" x="10" y="18">' + T('m.north') + '</text>');""")
rep("""'" y="' + r(i0[1] + 12) + '">North panel</text>');""", """'" y="' + r(i0[1] + 12) + '">' + T('m.panel') + '</text>');""")
rep("""'" text-anchor="' + L[2] + '">' + esc(STOPS[key].short) +
        ' <tspan class="m-sub">'""", """'" text-anchor="' + L[2] + '">' + esc(S(key).short) +
        ' <tspan class="m-sub">'""")
rep(""">Hồ Chí Minh City <tspan class="m-sub">Start</tspan></text></g>');""", """>Hồ Chí Minh City <tspan class="m-sub">' + T('m.start') + '</tspan></text></g>');""")
rep("""text-anchor="end">Whole route</text>');""", """text-anchor="end">' + T('m.whole') + '</text>');""")
rep("""role="img" aria-labelledby="map-title"><title id="map-title">Route map: ' +
      esc(route.stops.map(function (s) { return STOPS[s.id].short; }).join(', '))""",
"""role="img" aria-labelledby="map-title"><title id="map-title">' + T('m.title') +
      esc(route.stops.map(function (s) { return S(s.id).short; }).join(', '))""")
rep("""y1="3" y2="3"/></svg>Road</span>' +""", """y1="3" y2="3"/></svg>' + T('m.road') + '</span>' +""")
rep("""y1="3" y2="3"/></svg>Flight</span>' +""", """y1="3" y2="3"/></svg>' + T('m.flight') + '</span>' +""")
rep("""'<span class="map-note">Both panels drawn to scale</span></p>';""", """'<span class="map-note">' + T('m.scale') + '</span></p>';""")

# --- leg card ---
rep("""    var fromName = L.from === 'start' ? 'Hồ Chí Minh City' : STOPS[L.from].short;""",
"""    var fromName = L.from === 'start' ? 'Hồ Chí Minh City' : S(L.from).short;""")
rep("""'<div class="leg-head"><span class="leg-day mono">Day ' + s.start + '</span>' +
      '<span class="leg-route">' + esc(fromName) + ' → ' + esc(STOPS[s.id].short) + '</span>' +
      '<span class="leg-total mono">' + approx(L.total) + ' door to door</span></div>' +""",
"""'<div class="leg-head"><span class="leg-day mono">' + T('day') + ' ' + s.start + '</span>' +
      '<span class="leg-route">' + esc(fromName) + ' → ' + esc(S(s.id).short) + '</span>' +
      '<span class="leg-total mono">' + approx(L.total) + ' ' + T('door') + '</span></div>' +""")
rep("""esc(g.text)""", """esc(segText(g))""")
rep("""(L.long ? '<span class="flag">Long travel day</span> ' : '') +
        esc(L.note) + (L.maps ? ' <a href="' + L.maps + '" target="_blank" rel="noopener">Route in Google Maps</a>' : '')""",
"""(L.long ? '<span class="flag">' + T('longday') + '</span> ' : '') +
        (L.note ? esc(T(L.note)) : '') + (L.maps ? ' <a href="' + L.maps + '" target="_blank" rel="noopener">' + T('maps') + '</a>' : '')""")

# --- gallery ---
rep("""aria-label="Open photo ' + (i + 1) + ' of ' + ids.length + ' full screen">'""",
"""aria-label="' + esc(T('g.open', { i: i + 1, n: ids.length })) + '">'""")
rep("""aria-label="Show photo ' + (i + 1) + '"'""", """aria-label="' + esc(T('g.show', { i: i + 1 })) + '"'""")
rep("""    var first = PHOTOS[ids[0]];
""", "")
rep("""aria-label="Photos of ' + esc(STOPS[s.id].name) + '">'""", """aria-label="' + esc(T('g.photos', { x: S(s.id).name })) + '">'""")
rep("""aria-label="Previous photo" disabled>'""", """aria-label="' + esc(T('g.prev')) + '" disabled>'""")
rep("""aria-label="Next photo">'""", """aria-label="' + esc(T('g.next')) + '">'""")
rep("""aria-label="View full screen">'""", """aria-label="' + esc(T('g.full')) + '">'""")
rep("""'<div class="gal-under"><p class="gal-cap">' + esc(first.cap) + '</p>""", """'<div class="gal-under"><p class="gal-cap">' + esc(CAP(ids[0])) + '</p>""")
rep("""    var ids = STOPS[s.id].photos;""", """    var ids = S(s.id).photos;""")

# --- stops ---
rep("""      var st = STOPS[s.id];
      var w = WEATHER[normStop(s.id)];""", """      var st = S(s.id);
      var w = W(normStop(s.id));""")
rep("""'<li class="day" id="day-' + d.day + '"><div class="day-n mono">Day <b>' + d.day + '</b></div>' +
          '<div class="day-body"><h4>' + esc(d.t) + ' <span class="pace pace-' + d.pace + '">' + PACE[d.pace] + '</span></h4>' +""",
"""'<li class="day" id="day-' + d.day + '"><div class="day-n mono">' + T('day') + ' <b>' + d.day + '</b></div>' +
          '<div class="day-body"><h4>' + esc(d.t) + ' <span class="pace pace-' + d.pace + '">' + PC(d.pace) + '</span></h4>' +""")
rep("""      if (st.warn) tips += '<p class="tip tip-warn"><b>December</b>' + esc(st.warn) + '</p>';
      if (st.gem) tips += '<p class="tip"><b>Hidden gem</b>' + esc(st.gem) + '</p>';
      if (st.skip) tips += '<p class="tip tip-skip"><b>Skip</b>' + esc(st.skip) + ' <span class="instead">Instead: ' + esc(st.instead) + '</span></p>';""",
"""      if (st.warn) tips += '<p class="tip tip-warn"><b>' + T('t.dec') + '</b>' + esc(st.warn) + '</p>';
      if (st.gem) tips += '<p class="tip"><b>' + T('t.gem') + '</b>' + esc(st.gem) + '</p>';
      if (st.skip) tips += '<p class="tip tip-skip"><b>' + T('t.skip') + '</b>' + esc(st.skip) + ' <span class="instead">' + T('t.instead') + esc(st.instead) + '</span></p>';""")
rep("""' · ' + s.n + (s.n === 1 ? ' night' : ' nights') + ' · ' + st.region + '</p>' +""",
"""' · ' + s.n + ' ' + (s.n === 1 ? T('night') : T('nights')) + ' · ' + T('reg.' + st.region) + '</p>' +""")
rep("""'<div class="stop-title"><p class="eyebrow">Day 16</p><h3>Fly home from Hà Nội</h3></div></header>' +
      '<ol class="days"><li class="day" id="day-16"><div class="day-n mono">Day <b>16</b></div><div class="day-body">' +
      '<h4>Last morning <span class="pace pace-travel">Travel day</span></h4><p>Coffee by West Lake, or Long Biên bridge at dawn, then about 45 minutes to Nội Bài airport. Allow 3 hours for an international flight.</p></div></li></ol></section>';""",
"""'<div class="stop-title"><p class="eyebrow">' + T('day') + ' 16</p><h3>' + T('home.h3') + '</h3></div></header>' +
      '<ol class="days"><li class="day" id="day-16"><div class="day-n mono">' + T('day') + ' <b>16</b></div><div class="day-body">' +
      '<h4>' + T('home.t') + ' <span class="pace pace-travel">' + PC('travel') + '</span></h4><p>' + T('home.d') + '</p></div></li></ol></section>';""")

# --- weather ---
rep("""      var w = WEATHER[id];
      var t0 = 5, t1 = 35;""", """      var w = W(id);
      var t0 = 5, t1 = 35;""")
rep("""esc(STOPS[id].short) + '</b>'""", """esc(S(id).short) + '</b>'""")
rep("""' mm · ' + w.days + ' wet days</div>' +
        '<p class="wx-station">Station: ' + esc(w.station) + '</p></li>');""",
"""' mm · ' + w.days + ' ' + T('wx.wet') + '</div>' +
        '<p class="wx-station">' + T('wx.station') + esc(w.station) + '</p></li>');""")

# --- logistics ---
rep("""'<li><span class="mono">Day ' + f.day + '</span><span>'""", """'<li><span class="mono">' + T('day') + ' ' + f.day + '</span><span>'""")
rep("""'<li><span class="mono">Day 16</span><span>Hà Nội → home</span><span class="mono">International</span></li>';""",
"""'<li><span class="mono">' + T('day') + ' 16</span><span>' + T('lg.home') + '</span><span class="mono">' + T('lg.intl') + '</span></li>';""")
rep("""    var book = ['If your dates touch Christmas or New Year, book flights and the best rooms by early November.'];
    if (has('catba')) book.push('A Lan Hạ Bay cruise that starts from Cát Bà, with free date changes in case of fog or a storm.');
    if (has('dalat')) book.push('A licensed local guide for the Tà Năng hills, and a guide for Bidoup–Núi Bà.');
    if (has('cattien')) book.push('The Crocodile Lake trek and permit at Cát Tiên headquarters, the day before.');
    if (has('caobang')) book.push('A car with a driver, or an easy-rider guide, for the Cao Bằng days.');
    if (has('puluong') || has('babe') || has('mekong')) book.push('Homestays in ' + ['mekong', 'puluong', 'babe'].filter(has).map(function (id) { return STOPS[id].short; }).join(', ') + ' a few weeks ahead: the good ones are small.');
    book.push('An evening flight home on Day 16, so the last morning is free.');""",
"""    var book = [T('b.xmas')];
    if (has('catba')) book.push(T('b.cruise'));
    if (has('dalat')) book.push(T('b.dalat'));
    if (has('cattien')) book.push(T('b.cattien'));
    if (has('caobang')) book.push(T('b.caobang'));
    if (has('puluong') || has('babe') || has('mekong')) book.push(T('b.homestay', { x: ['mekong', 'puluong', 'babe'].filter(has).map(function (id) { return S(id).short; }).join(', ') }));
    book.push(T('b.evening'));""")
rep("""    var pack = ['A warm layer and a hat: nights drop to 11–14 °C in the north and in Đà Lạt.',
      'A light rain jacket' + (has('central') ? ', and proper rain gear for Hội An and Huế.' : '. It rarely rains, but the bay is often misty and damp.'),
      'Hiking shoes with grip, and quick-dry clothes.',
      'Swimwear and sun protection for the south' + (has('phuquoc') ? ' and Phú Quốc.' : '.'),
      'Cash in small notes: homestays and boats rarely take cards.',
      'Grab and offline Google Maps on your phones.'];""",
"""    var pack = [T('p.warm'), T(has('central') ? 'p.rain_central' : 'p.rain'), T('p.hike'),
      T(has('phuquoc') ? 'p.sun_pq' : 'p.sun'), T('p.cash'), T('p.apps')];""")

# --- plan text & copy ---
rep("""    var lines = ['Vietnam, 16 days in December: ' + ROUTES[route.style].name];
    route.stops.forEach(function (s) { lines.push(dayRange(s.start, s.end) + ': ' + STOPS[s.id].name); });
    lines.push('Day 16: fly home from Hà Nội');
    var fl = allFlights(route).map(function (f) { return 'Day ' + f.day + ' ' + AIRPORT_NAME[f.seg.from] + ' → ' + AIRPORT_NAME[f.seg.to]; });
    if (fl.length) lines.push('Flights: ' + fl.join('; '));""",
"""    var lines = [T('pt.title') + RT(route.style).name];
    route.stops.forEach(function (s) { lines.push(dayRange(s.start, s.end) + ': ' + S(s.id).name); });
    lines.push(T('pt.home'));
    var fl = allFlights(route).map(function (f) { return T('day') + ' ' + f.day + ' ' + AIRPORT_NAME[f.seg.from] + ' → ' + AIRPORT_NAME[f.seg.to]; });
    if (fl.length) lines.push(T('pt.flights') + fl.join('; '));""")
rep("""status.textContent = 'Copied. Paste it into your chat.';""", """status.textContent = T('copy.ok');""")
rep("""status.textContent = 'Copy the selected text below.';""", """status.textContent = T('copy.fail');""")

# --- gallery update & lightbox captions ---
rep("""        cap.textContent = PHOTOS[ids[i]].cap;""", """        cap.textContent = CAP(ids[i]);""")
rep("""    im.src = p.src; im.alt = p.cap; im.width = p.w; im.height = p.h;
    $('#lb-cap').textContent = p.cap;
    $('#lb-credit').textContent = 'Photo: ' + p.artist + ' · ' + p.license;""",
"""    im.src = p.src; im.alt = CAP(lb.ids[lb.i]); im.width = p.w; im.height = p.h;
    $('#lb-cap').textContent = CAP(lb.ids[lb.i]);
    $('#lb-credit').textContent = T('lb.photo') + p.artist + ' · ' + p.license;""")

# --- left out & credits ---
rep("""    $('#left-out').innerHTML = LEFT_OUT.map(function (x) {""", """    $('#left-out').innerHTML = LO().map(function (x) {""")
rep("""      return '<li>' + esc(p.cap) + ': ' + esc(p.artist)""", """      return '<li>' + esc(CAP(id)) + ': ' + esc(p.artist)""")

# --- static text, language switch, wiring ---
rep("""  renderStyles();
  renderStatic();
  bindLightbox();
  bindCopy();
  render();
""", """  function applyStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = T(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = T(el.getAttribute('data-i18n-html')); });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.alt = T(el.getAttribute('data-i18n-alt')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', T(el.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
  }
  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem(LKEY, lang); } catch (e) { /* ignore */ }
    applyStatic(); renderStyles(); renderStatic(); render();
  }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  applyStatic();
  renderStyles();
  renderStatic();
  bindLightbox();
  bindCopy();
  render();
""")
rep("""  window.__trip = { buildRoute: buildRoute, ROUTES: ROUTES, SWAPS: SWAPS };""",
"""  window.__trip = { buildRoute: buildRoute, ROUTES: ROUTES, SWAPS: SWAPS, setLang: setLang };""")
open(p,"w",encoding="utf-8").write(s)
import re
left=[m for m in re.findall(r"'([A-Z][a-z][^'<>]{6,})'", s) if not m.startswith(('Route ','No leg','Not enough','Ho Chi'))]
print("remaining English-looking literals:", left)
print("DE var unused ok")
