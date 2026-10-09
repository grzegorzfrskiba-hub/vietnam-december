/* Page logic: builds the chosen route, then renders strip, map, stops, weather and logistics. */
(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- language ---------- */
  var LKEY = 'vn16-lang';
  var LANGS = ['en', 'de', 'pl'];
  var TR = { de: I18N_DE, pl: I18N_PL };   // translated trip content; English lives in data.js
  var LOCALE = { en: 'en-GB', de: 'de-DE', pl: 'pl-PL' };
  var lang = 'en';
  var stored = '';
  try { stored = localStorage.getItem(LKEY) || ''; } catch (e) { /* storage unavailable */ }
  lang = pickLang(stored, navigator.language, location.hash, LANGS);
  function T(k, vars) {
    var v = (UI[lang] && UI[lang][k]) || UI.en[k] || k;
    if (vars) Object.keys(vars).forEach(function (n) { v = v.replace('{' + n + '}', vars[n]); });
    return v.replace(/\{days\}/g, DAYS).replace(/\{nights\}/g, DAYS - 1);
  }
  function S(id) {
    var base = STOPS[id], tr = TR[lang] && TR[lang].stops[id];
    if (!tr) return base;
    var out = Object.assign({}, base, tr);
    var ex = TR[lang].dayExtra[id] || {};
    out.days = base.days.map(function (d, i) {
      var o = tr.days && tr.days[i] ? Object.assign({}, d, { t: tr.days[i][0], d: tr.days[i][1] }) : Object.assign({}, d);
      if (d.e && ex.easy && ex.easy[i]) o.e = Object.assign({}, d.e, { t: ex.easy[i][0], d: ex.easy[i][1] });
      if (d.rain && ex.rain && ex.rain[i]) o.rain = ex.rain[i];
      if (d.solo && ex.solo && ex.solo[i]) o.solo = Object.assign({}, d.solo, { t: ex.solo[i][0], d: ex.solo[i][1] });
      return o;
    });
    return out;
  }
  function RT(id) { var tr = TR[lang] && TR[lang].routes[id]; return tr ? Object.assign({}, ROUTES[id], tr) : ROUTES[id]; }
  function SWT(sw) { var tr = TR[lang] && TR[lang].swaps[sw.id]; return tr ? Object.assign({}, sw, tr) : sw; }
  function W(id) { var tr = TR[lang] && TR[lang].weather[id]; return tr ? Object.assign({}, WEATHER[id], tr) : WEATHER[id]; }
  function PC(k) { return (TR[lang] && TR[lang].pace[k]) || PACE[k]; }
  function CAP(id) { return (TR[lang] && TR[lang].cap[id]) || PHOTOS[id].cap; }
  function LO() { return (TR[lang] && TR[lang].leftOut) || LEFT_OUT; }
  function NP(id) { return (TR[lang] && TR[lang].night[id]) || NIGHT_PTS[id]; }

  /* ---------- formatting ---------- */
  function fmtH(h) {
    var mins = Math.round(h * 60 / 5) * 5;
    if (mins < 60) return mins + ' ' + T('min');
    var hh = Math.floor(mins / 60), mm = mins % 60;
    return mm ? T('fmt.hm', { h: hh, m: mm }) : hh + ' ' + T('h');
  }
  // the counted word for n: key.one, key.few or key.many ('nights', 'f.bases', …); English and German spell the last two alike
  function countWord(key, n) { return T(key + '.' + nightForm(n)); }
  function approx(h) {
    var r = Math.round(h * 2) / 2;
    var whole = Math.floor(r);
    return '≈ ' + (r % 1 ? (whole ? whole : '') + '½' : whole) + ' ' + T('h');
  }
  function fmtMoney(r) {
    var n = function (v) { return v.toLocaleString(LOCALE[lang]); };
    return lang === 'en' ? '€' + n(r[0]) + '–' + n(r[1]) : n(r[0]) + '–' + n(r[1]) + '\u00a0€';
  }
  function dayRange(a, b) { return a === b ? T('day') + ' ' + a : T('days') + ' ' + a + '–' + b; }

  /* ---------- legs (built in plan.js) ---------- */
  function segText(g) { return g.mode === 'fly' ? T('fly') + ' ' + AIRPORT_NAME[g.from] + ' → ' + AIRPORT_NAME[g.to] : T(g.k); }

  /* ---------- route (built in plan.js, with the day plans in the page language) ---------- */
  function dayPlans(id) { return S(id).days; }
  function routeFor(styleId, choice, saigon, gentle) { return buildRoute(styleId, choice, saigon, gentle, dayPlans); }

  /* ---------- state ---------- */
  var KEY = 'vn16-plan-v3';
  var state = { style: 'classic', choice: {}, saigon: true, gentle: true };
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved && ROUTES[saved.style]) state = { style: saved.style, choice: saved.choice || {}, saigon: !!saved.saigon, gentle: !!saved.gentle };
  } catch (e) { /* storage unavailable */ }
  // a link to a style (#classic) or to a whole variant (#nature&south=mekong&hcmc=1&gentle=0); a full variant is remembered
  var link = parseVariant(location.hash);
  if (link) {
    state = { style: link.style, choice: link.choice, saigon: 'saigon' in link ? link.saigon : state.saigon,
      gentle: 'gentle' in link ? link.gentle : ROUTES[link.style].gentle || state.gentle };
    if ('saigon' in link || 'gentle' in link) save();
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  /* ---------- shared bits ---------- */
  var ICON = {
    fly: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>',
    road: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11v7h-2v-2H7v2H5zm2.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM7 11h10l-1-3.5H8z"/></svg>',
    prev: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>',
    expand: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>'
  };
  function stopColor(id) { return 'var(--c-' + normStop(id) + ')'; }
  // sizes: how wide the photo is drawn, so the browser picks the smallest copy from srcset (the offline file has no srcset)
  function img(id, cls, sizes) {
    var p = PHOTOS[id];
    return '<img class="' + (cls || '') + '" src="' + p.src + '" alt="' + esc(CAP(id)) + '" width="' + p.w +
      '" height="' + p.h + '" loading="lazy" decoding="async"' + (p.srcset && sizes ? ' srcset="' + p.srcset + '" sizes="' + sizes + '"' : '') + '>';
  }
  function allFlights(route) {
    var list = [];
    route.stops.forEach(function (s) {
      if (s.leg) s.leg.segs.forEach(function (g) { if (g.mode === 'fly') list.push({ day: s.start, seg: g }); });
    });
    return list;
  }

  /* ---------- style picker ---------- */
  function renderStyles() {
    var html = Object.keys(ROUTES).map(function (id) {
      var r = RT(id);
      return '<label class="style-card" for="style-' + id + '">' +
        '<input type="radio" name="style" id="style-' + id + '" value="' + id + '"' + (state.style === id ? ' checked' : '') + '>' +
        '<span class="style-img">' + img(r.cover, '', '(max-width: 640px) 34vw, (max-width: 1000px) 50vw, 240px') + '</span>' +
        '<span class="style-map" aria-hidden="true"></span>' +
        '<span class="style-body"><span class="style-tag"><span class="style-sel">✓ ' + esc(T('styles.sel')) + ' · </span>' + esc(r.tag) + '</span>' +
        '<span class="style-name">' + esc(r.name) + '</span>' +
        '<span class="style-blurb">' + esc(r.blurb) + '</span>' +
        '<span class="style-places"></span>' +
        '<span class="style-stats"></span></span></label>';
    }).join('');
    $('#style-list').innerHTML = html;
    // the land outlines for the card maps, drawn once and reused by every card through <use>
    if (!document.getElementById('mini-defs')) {
      document.body.insertAdjacentHTML('beforeend', '<svg id="mini-defs" width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
        ['north', 'whole'].map(function (k) {
          return '<g id="mini-' + k + '"><path class="m-land-o" d="' + BASEMAP[k].other + '"/><path class="m-land" d="' + BASEMAP[k].vn + '"/></g>';
        }).join('') + '</defs></svg>');
    }
  }
  // each card shows the trip that clicking it would give: the current Saigon setting, and gentle if the
  // style is gentle or the gentle setting is on; the selected card shows the current trip, exactly as the
  // facts bar: the user's swaps, spare-night pick and gentle setting. Places and numbers come from that trip,
  // so they follow the swaps and the city days. Only the text is refreshed, so the radios keep focus.
  function renderCardStats() {
    Object.keys(ROUTES).forEach(function (id) {
      var el = document.querySelector('#style-' + id + ' ~ .style-body .style-stats');
      if (!el) return;
      var sel = id === state.style, choice = sel ? state.choice : {};
      var gentle = sel ? state.gentle : ROUTES[id].gentle || state.gentle;
      var built = routeFor(id, choice, state.saigon, gentle);
      var st = routeStats(built);
      // with the gentle version on, say how many hiking days the style has without it
      var full = gentle ? routeStats(routeFor(id, choice, state.saigon, false)).hikes : st.hikes;
      var hikes = full > st.hikes ? T('styles.hoff', { h: st.hikes, n: full }) : st.hikes;
      el.textContent = T('styles.stats', { f: st.flights, h: hikes, t: approx(st.road).replace('≈ ', ''), l: approx(st.longest).replace('≈ ', ''), e: st.early, b: fmtMoney(budgetFor(built, COSTS)) });
      el.parentNode.parentNode.querySelector('.style-map').innerHTML = miniMap(built, false) + miniMap(built, true);
      el.parentNode.querySelector('.style-places').textContent = built.stops.filter(function (s) { return s.id !== 'hanoiStop'; })
        .map(function (s) { return S(s.id).short; }).join(' · ');
    });
  }

  function renderSwaps(route) {
    var box = $('#swaps');
    if (!route.swaps.length) {
      box.innerHTML = '<p class="swaps-none">' + esc(T('swaps.none')) + '</p>';
      return;
    }
    box.innerHTML = route.swaps.map(function (x) {
      var sw = SWT(x.sw);
      var opts = [x.def, x.def === x.sw.a ? x.sw.b : x.sw.a].map(function (id, i) {
        var w = W(id);
        return '<label class="swap-opt" for="swap-' + x.sw.id + '-' + id + '">' +
          '<input type="radio" name="swap-' + x.sw.id + '" id="swap-' + x.sw.id + '-' + id + '" value="' + id + '"' + (x.pick === id ? ' checked' : '') + '>' +
          '<span class="swap-head"><span class="dot" style="--c:' + stopColor(id) + '"></span>' +
          '<span class="swap-name">' + esc(S(id).name) + '</span>' +
          (i === 0 ? '<span class="swap-default">' + esc(T('swaps.inroute')) + '</span>' : '') + '</span>' +
          '<span class="swap-meta">' + x.nights + ' ' + countWord('nights', x.nights) + ' · <span class="tone tone-' + w.tone + '">' + esc(w.verdict) + '</span></span>' +
          '<ul>' + sw.pts[id].map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></label>';
      }).join('<span class="swap-or" aria-hidden="true">' + esc(T('swaps.or')) + '</span>');
      return '<fieldset class="swap"><legend>' + esc(sw.q) + '</legend><div class="swap-opts">' + opts + '</div></fieldset>';
    }).join('');
  }

  // what the current style gives up for the three city nights, e.g. "Hà Nội 4 → 3 nights"
  function cityCut(route) {
    var nightsIn = function (r) {
      var m = {};
      r.stops.forEach(function (s) { if (s.id !== 'saigon') m[s.id] = (m[s.id] || 0) + s.n; });
      return m;
    };
    var a = nightsIn(routeFor(route.style, state.choice, false, route.gentle));
    var b = nightsIn(routeFor(route.style, state.choice, true, route.gentle));
    var parts = Object.keys(a).filter(function (id) { return a[id] !== b[id]; }).map(function (id) {
      return b[id] ? T(b[id] === 1 ? 'x.less1' : 'x.less', { s: S(id).short, a: a[id], b: b[id] }) : T('x.drop', { s: S(id).short });
    });
    return parts.length ? T('x.cut', { x: parts.join(', ') }) : T('x.same');
  }

  // Balanced with the city days: where the spare night goes, with pros and cons
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
    var label = function (id, n) { return S(actual(id)).short + ' ' + n + ' ' + countWord('nights', n); };
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

  function renderExtra(route) {
    $('#extra').innerHTML = '<fieldset class="extra"><legend>' + esc(T('x.q')) + '</legend>' +
      '<label class="swap-opt" for="extra-saigon"><input type="checkbox" id="extra-saigon" name="extra-saigon"' + (route.saigon ? ' checked' : '') + '>' +
      '<span class="swap-head"><span class="dot" style="--c:' + stopColor('saigon') + '"></span><span class="swap-name">' + esc(T('x.name')) + '</span>' +
      '<span class="extra-tag">' + esc(T('x.tag')) + '</span>' +
      '<span class="extra-switch">' + esc(T(route.saigon ? 'x.added' : 'x.add')) + '<i aria-hidden="true"></i></span></span>' +
      '<span class="swap-meta"><span class="tone tone-' + W('saigon').tone + '">' + esc(W('saigon').verdict) + '</span></span>' +
      '<ul><li>' + esc(T('x.p1')) + '</li><li>' + esc(T('x.p2')) + '</li><li>' + esc(cityCut(route)) + '</li></ul></label></fieldset>' +
      '<fieldset class="extra"><legend>' + esc(T('e.q')) + '</legend>' +
      '<label class="swap-opt" for="extra-gentle"><input type="checkbox" id="extra-gentle" name="extra-gentle"' + (route.gentle ? ' checked' : '') + '>' +
      '<span class="swap-head"><span class="swap-name">' + esc(T('e.name')) + '</span><span class="extra-tag">' + esc(T('e.tag')) + '</span>' +
      '<span class="extra-switch">' + esc(T(route.gentle ? 'e.on' : 'e.off')) + '<i aria-hidden="true"></i></span></span>' +
      '<ul><li>' + esc(T('e.p1')) + '</li><li>' + esc(T('e.p2')) + '</li><li>' + esc(T('e.p3')) + '</li></ul></label></fieldset>';
  }

  /* ---------- facts, strip, why ---------- */
  function renderFacts(route) {
    $('#facts-for').textContent = T('f.for', { name: RT(route.style).name });
    var st = routeStats(route);
    $('#facts').innerHTML =
      '<li><b>' + route.days + '</b><span>' + T('f.days') + '</span></li>' +
      '<li><b>' + st.bases + '</b><span>' + countWord('f.bases', st.bases) + '</span></li>' +
      '<li><b>' + st.flights + '</b><span>' + countWord('f.flights', st.flights) + '</span></li>' +
      '<li><b>' + st.hikes + '</b><span>' + countWord('f.hikes', st.hikes) + '</span></li>' +
      '<li><b>' + approx(st.longest).replace('≈ ', '') + '</b><span>' + T('f.longest') + '</span></li>' +
      '<li><b class="money">' + fmtMoney(budgetFor(route, COSTS)) + '</b><span>' + T('f.budget') + '</span></li>';
  }

  function dateLabel(day) {
    var iso = tripDate(TRIP.start, day);
    if (!iso) return '';
    var p = iso.split('-').map(Number);
    return new Date(Date.UTC(p[0], p[1] - 1, p[2])).toLocaleDateString(LOCALE[lang],
      { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' });
  }

  function renderShape(route) {
    var cells = [];
    route.stops.forEach(function (s) {
      s.days.forEach(function (d, k) {
        cells.push('<a class="cell' + (k === 0 ? ' arrive' : '') + '" href="#day-' + d.day + '" style="--c:' + stopColor(s.id) +
          '" aria-label="' + T('day') + ' ' + d.day + ': ' + esc(S(s.id).short) + ', ' + esc(d.t) + (dateLabel(d.day) ? ' (' + esc(dateLabel(d.day)) + ')' : '') + '"><span>' + d.day + '</span></a>');
      });
    });
    cells.push('<a class="cell home" href="#day-' + route.days + '" aria-label="' + esc(T('flyhome.aria')) + '"><span>' + route.days + '</span>' + ICON.fly + '</a>');
    $('#strip').innerHTML = cells.join('');
    $('#strip').style.setProperty('--cols', route.days);
    $('#strip-legend').innerHTML = route.stops.map(function (s) {
      return '<li><span class="dot" style="--c:' + stopColor(s.id) + '"></span>' + esc(S(s.id).short) +
        ' <span class="mono">' + dayRange(s.start, s.end) + '</span></li>';
    }).join('') + '<li><span class="dot home-dot"></span>' + T('flyhome') + ' <span class="mono">' + T('day') + ' ' + route.days + '</span></li>';
    var why = (route.saigon && RT(route.style).whyCity) || RT(route.style).why;
    var swapped = route.swaps.filter(function (x) { return x.pick !== x.def; });
    if (swapped.length) {
      why += T('why.swaps') + swapped.map(function (x) { return S(x.pick).short + T('why.instead') + S(x.def).short; }).join('; ') + '.';
    }
    if (route.saigon) why += T('why.saigon');
    if (route.gentle && !ROUTES[route.style].gentle) why += T('why.gentle');
    if (route.stops.some(function (s) { return s.id === 'central'; }) && route.style !== 'culture' && route.style !== 'classic') {
      why += T('why.rain');
    }
    $('#why').textContent = why;
  }

  /* ---------- map: an enlarged North panel above a whole-country panel ---------- */
  var NF = { lon0: 104.85, lat0: 23.05, s: 104, x: 0, y: 0, w: 270, h: 322 };
  var CF = { lon0: 103.6, lat0: 23.4, s: 22, x: 0, y: 352, w: 270, h: 322 };
  var NLAB = { hanoi: [-14, 4, 'end'], ninhbinh: [14, 4, 'start'], puluong: [0, 26, 'middle'], catba: [0, 26, 'middle'], caobang: [14, 4, 'start'], babe: [-14, 4, 'end'] };
  var CLAB = { start: [10, 18, 'start'], dalat: [10, 4, 'start'], cattien: [10, 15, 'start'], mekong: [8, 17, 'start'], phuquoc: [-4, 19, 'start'], central: [10, 4, 'start'] };
  var BANGIOC = [22.85, 106.72];
  /* place names on the basemap: [i18n key, lat, lon, class, anchor] */
  var GEO = {
    north: [['m.china', 22.25, 107.25, 'm-country', 'middle'], ['m.tonkin', 20.12, 107.0, 'm-water', 'middle']],
    whole: [['m.china', 21.9, 111.6, 'm-country', 'middle'], ['m.laos', 17.6, 103.9, 'm-country', 'start'],
      ['m.cambodia', 12.9, 103.9, 'm-country', 'start'], ['m.sea', 14.6, 112.4, 'm-water', 'middle']]
  };
  function basemap(key, f) {
    var b = BASEMAP[key];
    return '<path class="m-land-o" d="' + b.other + '"/><path class="m-land" d="' + b.vn + '"/><path class="m-river" d="' + b.rivers + '"/>';
  }
  function geoLabels(key, f) {
    return GEO[key].map(function (g) {
      var p = proj(f, [g[1], g[2]]);
      return '<text class="' + g[3] + '" x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '" text-anchor="' + g[4] + '">' + T(g[0]) + '</text>';
    }).join('');
  }
  function proj(f, p) { return [f.x + (p[1] - f.lon0) * f.s, f.y + (f.lat0 - p[0]) * f.s]; }
  function curve(a, b) {
    var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1];
    var len = Math.sqrt(dx * dx + dy * dy) || 1, k = 0.16 * len;
    var cx = mx - dy / len * k, cy = my + dx / len * k;
    return 'M' + a[0].toFixed(1) + ' ' + a[1].toFixed(1) + ' Q' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + b[1].toFixed(1);
  }
  function renderMap(route) {
    var n = [], c = [];
    var inRoute = {}, groups = {};
    route.stops.forEach(function (s) {
      var key = normStop(s.id);
      inRoute[key] = true;
      (groups[key] = groups[key] || []).push(s);
    });
    var r = function (v) { return v.toFixed(1); };
    function seg(f, g, cls) {
      var a = proj(f, PT[g.from]), b = proj(f, PT[g.to]);
      if (g.mode === 'fly') return '<path class="m-fly ' + cls + '" d="' + curve(a, b) + '"/>';
      return '<line class="m-road ' + cls + '" x1="' + r(a[0]) + '" y1="' + r(a[1]) + '" x2="' + r(b[0]) + '" y2="' + r(b[1]) + '"/>';
    }
    function subsFor(key) {
      var parts = groups[key].map(function (v) { var e = v.id === 'hanoi' ? route.days : v.end; return v.start === e ? '' + e : v.start + '–' + e; });
      return (parts.length > 1 || parts[0].indexOf('–') > -1 ? T('days') : T('day')) + ' ' + parts.join(', ');
    }
    function pill(p, key, big) {
      var nums = groups[key].map(function (v) { return v.num; }).join('·');
      var h = big ? 20 : 15, w = Math.max(h, (big ? 10 : 8) + nums.length * (big ? 6.5 : 5));
      return '<rect x="' + r(p[0] - w / 2) + '" y="' + r(p[1] - h / 2) + '" width="' + r(w) + '" height="' + h + '" rx="' + h / 2 + '"/>' +
        '<text class="pin-num' + (big ? '' : ' pin-num-s') + '" x="' + r(p[0]) + '" y="' + r(p[1] + (big ? 4 : 3.2)) + '" text-anchor="middle">' + nums + '</text>';
    }

    /* North panel */
    n.push('<rect class="m-frame" x="0" y="0" width="' + NF.w + '" height="' + NF.h + '" rx="8"/>' + basemap('north', NF) + geoLabels('north', NF));
    [21, 22].forEach(function (lat) {
      var y = r((NF.lat0 - lat) * NF.s);
      n.push('<line class="m-grid" x1="0" x2="' + NF.w + '" y1="' + y + '" y2="' + y + '"/><text class="m-gridlabel" x="' + (NF.w - 6) + '" y="' + (y - 4) + '" text-anchor="end">' + lat + '°N</text>');
    });
    [105, 106, 107].forEach(function (lon) {
      var x = r((lon - NF.lon0) * NF.s);
      n.push('<line class="m-grid m-grid-v" x1="' + x + '" x2="' + x + '" y1="0" y2="' + NF.h + '"/>');
    });
    ['puluong', 'ninhbinh', 'catba', 'caobang', 'babe', 'hanoi'].forEach(function (id) {
      if (inRoute[id]) return;
      var p = proj(NF, PT[id]);
      n.push('<circle class="m-faint" cx="' + r(p[0]) + '" cy="' + r(p[1]) + '" r="4"/>');
    });
    route.stops.forEach(function (s) { if (s.leg) s.leg.segs.forEach(function (g) { n.push(seg(NF, g, '')); }); });
    if (inRoute.caobang) {
      var cb = proj(NF, PT.caobang), bg = proj(NF, BANGIOC);
      n.push('<line class="m-road m-local" x1="' + r(cb[0]) + '" y1="' + r(cb[1]) + '" x2="' + r(bg[0]) + '" y2="' + r(bg[1]) + '"/>' +
        '<circle class="m-poi" cx="' + r(bg[0]) + '" cy="' + r(bg[1]) + '" r="4"/>' +
        '<text class="m-sub" x="' + r(bg[0] + 8) + '" y="' + r(bg[1] - 6) + '">Bản Giốc</text>');
    }
    Object.keys(groups).forEach(function (key) {
      if (!NLAB[key]) return;
      var p = proj(NF, PT[key]), L = NLAB[key];
      n.push('<g class="pin" data-pin="' + key + '" style="--c:' + stopColor(key) + '">' + pill(p, key, true) +
        '<text class="m-label" x="' + r(p[0] + L[0]) + '" y="' + r(p[1] + L[1]) + '" text-anchor="' + L[2] + '">' + esc(S(key).short) + '</text>' +
        '<text class="m-sub" x="' + r(p[0] + L[0]) + '" y="' + r(p[1] + L[1] + 12) + '" text-anchor="' + L[2] + '">' + subsFor(key) + '</text></g>');
    });
    n.push('<text class="m-title" x="10" y="18">' + T('m.north') + '</text>');

    /* Whole-country panel */
    c.push('<rect class="m-frame" x="0" y="' + CF.y + '" width="' + CF.w + '" height="' + CF.h + '" rx="8"/>' +
      '<g clip-path="url(#clip-whole)">' + basemap('whole', CF) + '</g>' + geoLabels('whole', CF));
    [10, 15, 20].forEach(function (lat) {
      var y = r(CF.y + (CF.lat0 - lat) * CF.s);
      c.push('<line class="m-grid" x1="0" x2="' + CF.w + '" y1="' + y + '" y2="' + y + '"/><text class="m-gridlabel" x="' + (CF.w - 6) + '" y="' + (y - 4) + '" text-anchor="end">' + lat + '°N</text>');
    });
    var i0 = proj(CF, [NF.lat0, NF.lon0]), i1 = proj(CF, [NF.lat0 - NF.h / NF.s, NF.lon0 + NF.w / NF.s]);
    c.push('<rect class="m-inset" x="' + r(i0[0]) + '" y="' + r(i0[1]) + '" width="' + r(i1[0] - i0[0]) + '" height="' + r(i1[1] - i0[1]) + '"/>' +
      '<text class="m-sub" x="' + r(i1[0] + 6) + '" y="' + r(i0[1] + 12) + '">' + T('m.panel') + '</text>');
    route.stops.forEach(function (s) { if (s.leg) s.leg.segs.forEach(function (g) { c.push(seg(CF, g, 'm-thin')); }); });
    var SL = inRoute.phuquoc ? [10, -9] : CLAB.start;
    Object.keys(groups).forEach(function (key) {
      if (key === 'saigon') return;
      var p = proj(CF, PT[key]);
      if (NLAB[key]) { c.push('<circle class="m-dot" cx="' + r(p[0]) + '" cy="' + r(p[1]) + '" r="2.6" style="--c:' + stopColor(key) + '"/>'); return; }
      var L = CLAB[key];
      c.push('<g class="pin" data-pin="' + key + '" style="--c:' + stopColor(key) + '">' + pill(p, key, false) +
        '<text class="m-label m-label-s" x="' + r(p[0] + L[0]) + '" y="' + r(p[1] + L[1]) + '" text-anchor="' + L[2] + '">' + esc(S(key).short) +
        ' <tspan class="m-sub">' + subsFor(key) + '</tspan></text></g>');
    });
    var st = proj(CF, PT.start);
    if (inRoute.saigon) {
      // with the city add-on the start square becomes stop 1
      c.push('<g class="pin" data-pin="saigon" style="--c:' + stopColor('saigon') + '">' + pill(st, 'saigon', false) +
        '<text class="m-label m-label-s" x="' + r(st[0] + SL[0]) + '" y="' + r(st[1] + SL[1]) + '">Hồ Chí Minh City <tspan class="m-sub">' + subsFor('saigon') + '</tspan></text></g>');
    } else {
      c.push('<g class="m-start"><rect x="' + r(st[0] - 5) + '" y="' + r(st[1] - 5) + '" width="10" height="10" rx="2"/>' +
        '<text class="m-label m-label-s" x="' + r(st[0] + SL[0]) + '" y="' + r(st[1] + SL[1]) + '">Hồ Chí Minh City <tspan class="m-sub">' + T('m.start') + '</tspan></text></g>');
    }
    c.push('<text class="m-title" x="' + (CF.w - 10) + '" y="' + (CF.y + 18) + '" text-anchor="end">' + T('m.whole') + '</text>');

    $('#map').innerHTML = '<svg viewBox="-6 -6 282 686" role="img" aria-labelledby="map-title"><title id="map-title">' + T('m.title') +
      esc(route.stops.map(function (s) { return S(s.id).short; }).join(', ')) + '</title>' +
      '<defs><clipPath id="clip-north"><rect x="0" y="0" width="' + NF.w + '" height="' + NF.h + '" rx="8"/></clipPath>' +
      '<clipPath id="clip-whole"><rect x="0" y="' + CF.y + '" width="' + CF.w + '" height="' + CF.h + '" rx="8"/></clipPath></defs>' +
      '<g clip-path="url(#clip-north)">' + n.join('') + '</g>' + c.join('') +
      '<rect class="m-edge" x="0" y="0" width="' + NF.w + '" height="' + NF.h + '" rx="8"/>' +
      '<rect class="m-edge" x="0" y="' + CF.y + '" width="' + CF.w + '" height="' + CF.h + '" rx="8"/></svg>' +
      '<p class="map-legend"><span><svg width="24" height="6" aria-hidden="true"><line class="m-road" x1="0" x2="24" y1="3" y2="3"/></svg>' + T('m.road') + '</span>' +
      '<span><svg width="24" height="6" aria-hidden="true"><line class="m-fly" x1="0" x2="24" y1="3" y2="3"/></svg>' + T('m.flight') + '</span>' +
      '<span class="map-note">' + T('m.scale') + '</span><button type="button" class="map-hint">' + T('m.zoom') + '</button></p>';
  }

  /* A small copy of the route map for a style card: the whole country (cut to Vietnam's width) beside the north,
     in the coordinates of the big map. No labels: the colours match the strip, and the places are listed below.
     Places the route skips stay as faint dots, so the cards can be compared at a glance.
     tall: the phone version, the north above the whole country as in the big map. CSS shows one of the two. */
  var MINI_SOUTH = ['cattien', 'dalat', 'mekong', 'phuquoc', 'central'], MINI_NORTH = ['puluong', 'ninhbinh', 'catba', 'caobang', 'babe', 'hanoi'];
  function miniMap(route, tall) {
    var r = function (v) { return v.toFixed(1); };
    var inRoute = {};
    route.stops.forEach(function (s) { inRoute[normStop(s.id)] = true; });
    function lines(f) {
      var out = [];
      route.stops.forEach(function (s) {
        if (s.leg) s.leg.segs.forEach(function (g) {
          var a = proj(f, PT[g.from]), b = proj(f, PT[g.to]);
          out.push(g.mode === 'fly' ? '<path class="m-fly" d="' + curve(a, b) + '"/>' :
            '<line class="m-road" x1="' + r(a[0]) + '" y1="' + r(a[1]) + '" x2="' + r(b[0]) + '" y2="' + r(b[1]) + '"/>');
        });
      });
      return out.join('');
    }
    function dots(f, ids, big) {
      return ids.map(function (id) {
        var p = proj(f, PT[id]);
        return inRoute[id] ? '<circle class="m-dot" cx="' + r(p[0]) + '" cy="' + r(p[1]) + '" r="' + big + '" style="--c:' + stopColor(id) + '"/>' :
          '<circle class="m-faint" cx="' + r(p[0]) + '" cy="' + r(p[1]) + '" r="' + big * 0.6 + '"/>';
      }).join('');
    }
    var st = proj(CF, PT.start);
    var start = inRoute.saigon ? '<circle class="m-dot" cx="' + r(st[0]) + '" cy="' + r(st[1]) + '" r="8" style="--c:' + stopColor('saigon') + '"/>' :
      '<rect class="m-startbox" x="' + r(st[0] - 6) + '" y="' + r(st[1] - 6) + '" width="12" height="12" rx="2"/>';
    var i0 = proj(CF, [NF.lat0, NF.lon0]), i1 = proj(CF, [NF.lat0 - NF.h / NF.s, NF.lon0 + NF.w / NF.s]);
    // wide: the whole country cut to Vietnam's width on the left, the north on the right
    var cw = tall ? 270 : 138, cx = 0, cy = tall ? 332 : 0, nx = tall ? 0 : 148;
    return '<svg class="' + (tall ? 'mini-tall' : 'mini-wide') + '" viewBox="0 0 ' + (tall ? '270 654' : '418 322') + '">' +
      '<svg x="' + cx + '" y="' + cy + '" width="' + cw + '" height="322" viewBox="0 ' + CF.y + ' ' + cw + ' 322"><rect class="m-frame" x="0" y="' + CF.y + '" width="' + cw + '" height="322"/>' +
      '<use href="#mini-whole"/><rect class="m-inset" x="' + r(i0[0]) + '" y="' + r(i0[1]) + '" width="' + r(i1[0] - i0[0]) + '" height="' + r(i1[1] - i0[1]) + '"/>' +
      lines(CF) + dots(CF, MINI_SOUTH, 8) + dots(CF, MINI_NORTH, 5) + start + '</svg>' +
      '<svg x="' + nx + '" y="0" width="270" height="322" viewBox="0 0 270 322"><rect class="m-frame" x="0" y="0" width="270" height="322"/>' +
      '<use href="#mini-north"/>' + lines(NF) + dots(NF, MINI_NORTH, 11) + '</svg>' +
      '<rect class="m-edge" x="' + cx + '" y="' + cy + '" width="' + cw + '" height="322" rx="6"/><rect class="m-edge" x="' + nx + '" y="0" width="270" height="322" rx="6"/></svg>';
  }

  /* ---------- stops ---------- */
  function legCard(s) {
    var L = s.leg;
    if (!L) return '';
    var fromName = L.from === 'start' ? 'Hồ Chí Minh City' : S(L.from).short;
    return '<div class="leg' + (L.long ? ' leg-long' : '') + '">' +
      '<div class="leg-head"><span class="leg-day mono">' + T('day') + ' ' + s.start + '</span>' +
      '<span class="leg-route">' + esc(fromName) + ' → ' + esc(S(s.id).short) + '</span>' +
      '<span class="leg-total mono">' + approx(L.total) + ' ' + T('door') + '</span></div>' +
      '<ul class="leg-segs">' + L.segs.map(function (g) {
        return '<li>' + ICON[g.mode] + '<span>' + esc(segText(g)) + '</span><span class="mono">' + fmtH(g.h) + '</span></li>';
      }).join('') + '</ul>' +
      ((L.note || L.long || L.maps) ? '<p class="leg-foot">' + (L.long ? '<span class="flag">' + T('longday') + '</span> ' : '') +
        (L.note ? esc(T(L.note)) : '') + (L.maps ? ' <a href="' + L.maps + '" target="_blank" rel="noopener">' + T('maps') + '</a>' : '') + '</p>' : '') +
      '</div>';
  }

  // Keyboard stops per gallery: the photo strip (arrow keys), previous, next and full screen. The photos and
  // thumbnails stay clickable and readable by screen readers but are left out of the Tab order (tabindex -1).
  function gallery(s) {
    var ids = S(s.id).photos;
    if (!ids.length) return '';
    var slides = ids.map(function (id, i) {
      return '<figure class="gal-slide"><button type="button" class="gal-open" tabindex="-1" data-i="' + i + '" aria-label="' + esc(T('g.open', { i: i + 1, n: ids.length })) + '">' +
        img(id, '', '(max-width: 900px) calc(100vw - 64px), 760px') + '</button></figure>';
    }).join('');
    var thumbs = ids.map(function (id, i) {
      return '<button type="button" class="gal-thumb" tabindex="-1" data-i="' + i + '" aria-label="' + esc(T('g.show', { i: i + 1 })) + '"' + (i === 0 ? ' aria-current="true"' : '') + '>' +
        img(id, '', '56px') + '</button>';
    }).join('');
    return '<div class="gal" data-photos="' + ids.join(',') + '">' +
      '<div class="gal-view"><div class="gal-track" tabindex="0" aria-label="' + esc(T('g.photos', { x: S(s.id).name })) + '">' + slides + '</div>' +
      '<button type="button" class="gal-btn gal-prev" aria-label="' + esc(T('g.prev')) + '" disabled>' + ICON.prev + '</button>' +
      '<button type="button" class="gal-btn gal-next" aria-label="' + esc(T('g.next')) + '">' + ICON.next + '</button>' +
      '<span class="gal-count mono" aria-live="polite">1 / ' + ids.length + '</span>' +
      '<button type="button" class="gal-full" data-i="0" aria-label="' + esc(T('g.full')) + '">' + ICON.expand + '</button></div>' +
      '<div class="gal-under"><p class="gal-cap">' + esc(CAP(ids[0])) + '</p><div class="gal-thumbs">' + thumbs + '</div></div></div>';
  }

  function renderStops(route) {
    var html = route.stops.map(function (s) {
      var st = S(s.id);
      var w = W(normStop(s.id));
      var days = s.days.map(function (d) {
        return '<li class="day" id="day-' + d.day + '"><div class="day-n mono">' + T('day') + ' <b>' + d.day + '</b>' + (dateLabel(d.day) ? '<span class="day-date">' + esc(dateLabel(d.day)) + '</span>' : '') + '</div>' +
          '<div class="day-body"><h4>' + esc(d.t) + ' <span class="pace pace-' + d.pace + '">' + PC(d.pace) + '</span>' +
          (d.gentle ? ' <span class="pace pace-gentle">' + T('e.badge') + '</span>' : '') +
          (d.early ? ' <span class="pace pace-early">' + T('early') + '</span>' : '') + '</h4>' +
          '<p>' + esc(d.d) + '</p>' + (d.rain ? '<p class="day-rain"><b>' + T('t.rain') + '</b>' + esc(d.rain) + '</p>' : '') + '</div></li>';
      }).join('');
      var tips = '';
      if (st.warn) tips += '<p class="tip tip-warn"><b>' + T('t.dec') + '</b>' + esc(st.warn) + '</p>';
      if (st.gem) tips += '<p class="tip"><b>' + T('t.gem') + '</b>' + esc(st.gem) + '</p>';
      if (st.skip) tips += '<p class="tip tip-skip"><b>' + T('t.skip') + '</b>' + esc(st.skip) + ' <span class="instead">' + T('t.instead') + esc(st.instead) + '</span></p>';
      return legCard(s) +
        '<section class="stop' + (st.compact ? ' stop-compact' : '') + '" id="stop-' + s.num + '" data-pin="' + normStop(s.id) + '" style="--c:' + stopColor(s.id) + '">' +
        '<header class="stop-head"><span class="stop-num">' + s.num + '</span><div class="stop-title">' +
        '<p class="eyebrow">' + dayRange(s.start, s.end) + ' · ' + s.n + ' ' + countWord('nights', s.n) + ' · ' + T('reg.' + st.region) + '</p>' +
        '<h3>' + esc(st.name) + '</h3><p class="stop-sub">' + esc(st.sub) + '</p></div>' +
        (st.compact ? '' : '<span class="tone tone-' + w.tone + '">' + w.lo + '–' + w.hi + ' °C · ' + esc(w.verdict) + '</span>') + '</header>' +
        gallery(s) + '<ol class="days">' + days + '</ol>' + (tips ? '<div class="tips">' + tips + '</div>' : '') + '</section>';
    }).join('');
    html += '<section class="stop stop-compact stop-home" id="stop-home" data-pin="hanoi"><header class="stop-head"><span class="stop-num home-num">' + ICON.fly + '</span>' +
      '<div class="stop-title"><p class="eyebrow">' + T('day') + ' ' + route.days + '</p><h3>' + T('home.h3') + '</h3></div></header>' +
      '<ol class="days"><li class="day" id="day-' + route.days + '"><div class="day-n mono">' + T('day') + ' <b>' + route.days + '</b>' + (dateLabel(route.days) ? '<span class="day-date">' + esc(dateLabel(route.days)) + '</span>' : '') + '</div><div class="day-body">' +
      '<h4>' + T('home.t') + ' <span class="pace pace-travel">' + PC('travel') + '</span></h4><p>' + T('home.d') + '</p></div></li></ol></section>';
    $('#stops').innerHTML = html;
    initGalleries();
    observeStops();
  }

  /* ---------- weather ---------- */
  function renderWeather(route) {
    var seen = {}, rows = [];
    route.stops.forEach(function (s) {
      var id = normStop(s.id);
      if (seen[id]) return; seen[id] = true;
      var w = W(id);
      var t0 = 5, t1 = 35;
      var left = (w.lo - t0) / (t1 - t0) * 100, width = (w.hi - w.lo) / (t1 - t0) * 100;
      rows.push('<li class="wx"><div class="wx-name"><span class="dot" style="--c:' + stopColor(id) + '"></span><b>' + esc(S(id).short) + '</b>' +
        '<span class="tone tone-' + w.tone + '">' + esc(w.verdict) + '</span></div>' +
        '<div class="wx-bar" aria-hidden="true"><span class="wx-temp" style="left:' + left + '%;width:' + width + '%"></span></div>' +
        '<div class="wx-val mono">' + w.lo + '–' + w.hi + ' °C</div>' +
        '<div class="wx-bar" aria-hidden="true"><span class="wx-rain" style="width:' + Math.min(100, w.rain / 360 * 100) + '%"></span></div>' +
        '<div class="wx-val mono">' + w.rain + ' mm · ' + w.days + ' ' + T('wx.wet') + '</div>' +
        '<p class="wx-station">' + T('wx.station') + esc(w.station) + '</p></li>');
    });
    $('#weather-list').innerHTML = rows.join('');
  }

  /* ---------- logistics ---------- */
  function bookItem(k, vars) {
    var links = (BOOK_LINKS[k] || []).map(function (l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    });
    return esc(T(k, vars)) + (links.length ? ' <span class="book-links">' + links.join(' · ') + '</span>' : '');
  }
  function renderLogistics(route) {
    var flights = allFlights(route);
    $('#flight-list').innerHTML = '<li><span class="mono">' + T('day') + ' 1</span><span>' + T('lg.arrive') + '</span><span class="mono">' + T('lg.intl') + '</span></li>' + flights.map(function (f) {
      return '<li><span class="mono">' + T('day') + ' ' + f.day + '</span><span>' + esc(AIRPORT_NAME[f.seg.from]) + ' → ' + esc(AIRPORT_NAME[f.seg.to]) + '</span><span class="mono">' + fmtH(f.seg.h) + '</span></li>';
    }).join('') + '<li><span class="mono">' + T('day') + ' ' + route.days + '</span><span>' + T('lg.home') + '</span><span class="mono">' + T('lg.intl') + '</span></li>';
    var has = function (id) { return route.stops.some(function (s) { return s.id === id; }); };
    // most urgent first: the arrival hotel and the rare flight now, then flights, beds and the Christmas table,
    // then the bay and homestays, then guides and drivers, and the vans a day or two ahead
    var book = [];
    if (route.saigon) book.push(bookItem('b.hotel_sgn'));   // without the city days you fly on the same morning
    if (flights.some(function (f) { return f.seg.from === 'DLI' && f.seg.to === 'DAD'; })) book.push(bookItem('b.flight_dad'));
    book.push(bookItem('b.xmas'), bookItem('b.lastnight'));
    if (has('catba')) book.push(bookItem('b.cruise'));
    if (has('puluong') || has('babe') || has('mekong')) book.push(bookItem('b.homestay', { x: ['mekong', 'puluong', 'babe'].filter(has).map(function (id) { return S(id).short; }).join(', ') }));
    // guide lines for Đà Lạt: the full line when the Tà Năng day (third day, a hike) is planned; only the Bidoup–Núi Bà
    // line when just that hike (second day) is; gentle days are guide-free variants, so neither shows.
    // Cát Tiên's line (the Crocodile Lake trek, its second day) follows the same rule
    var hikeOn = function (id, o) {
      return route.stops.some(function (s) {
        return s.id === id && s.days.some(function (d) { return d.o === o && d.pace === 'hike'; });
      });
    };
    if (hikeOn('dalat', 3)) book.push(bookItem('b.dalat'));
    else if (hikeOn('dalat', 2)) book.push(bookItem('b.dalat_bidoup'));
    if (has('caobang')) book.push(bookItem(route.gentle ? 'b.caobang_gentle' : 'b.caobang'));   // no motorbikes in the gentle version
    if (hikeOn('cattien', 2)) book.push(bookItem('b.cattien'));   // the day before, at the park
    book.push(bookItem('b.transfer'));
    $('#book-list').innerHTML = book.map(function (t) { return '<li>' + t + '</li>'; }).join('');
    var pack = [T('p.warm'), T(has('central') ? 'p.rain_central' : has('catba') ? 'p.rain' : 'p.rain_dry'), T(route.gentle ? 'p.walk' : 'p.hike'),
      T(has('phuquoc') ? 'p.sun_pq' : 'p.sun'), T('p.cash'), T('p.apps')];
    $('#pack-list').innerHTML = pack.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
  }

  /* ---------- copy plan ---------- */
  function planText(route) {
    var lines = [T('pt.title') + RT(route.style).name];
    if (TRIP.start) lines.push(dateLabel(1) + ' – ' + dateLabel(route.days));
    lines.push(T('pt.arrive'));
    route.stops.forEach(function (s) { lines.push(dayRange(s.start, s.end) + ': ' + S(s.id).name); });
    lines.push(T('pt.home'));
    var fl = allFlights(route).map(function (f) { return T('day') + ' ' + f.day + ' ' + AIRPORT_NAME[f.seg.from] + ' → ' + AIRPORT_NAME[f.seg.to]; });
    if (fl.length) lines.push(T('pt.flights') + fl.join('; '));
    lines.push(T('pt.link') + SITE_URL + variantHash(route, lang));
    return lines.join('\n');
  }
  function bindCopy() {
    var btn = $('#copy-plan'), status = $('#copy-status'), box = $('#copy-fallback');
    btn.addEventListener('click', function () {
      var text = planText(current);
      box.hidden = true;
      var done = function () { status.textContent = T('copy.ok'); };
      var fail = function () {
        box.hidden = false; box.value = text; box.focus(); box.select();
        status.textContent = T('copy.fail');
      };
      try {
        navigator.clipboard.writeText(text).then(done, fail);
      } catch (e) { fail(); }
    });
  }

  /* ---------- galleries & lightbox ---------- */
  function initGalleries() {
    document.querySelectorAll('.gal').forEach(function (gal) {
      var track = $('.gal-track', gal), count = $('.gal-count', gal), cap = $('.gal-cap', gal);
      var prev = $('.gal-prev', gal), next = $('.gal-next', gal), full = $('.gal-full', gal);
      var ids = gal.getAttribute('data-photos').split(','), idx = 0;
      var thumbs = gal.querySelectorAll('.gal-thumb');
      function update(i) {
        idx = i;
        count.textContent = (i + 1) + ' / ' + ids.length;
        cap.textContent = CAP(ids[i]);
        prev.disabled = i === 0; next.disabled = i === ids.length - 1;
        full.setAttribute('data-i', i);
        thumbs.forEach(function (t, k) { if (k === i) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current'); });
      }
      var target = null, release = null;
      function go(i) {
        i = Math.max(0, Math.min(ids.length - 1, i));
        target = i;
        clearTimeout(release);
        release = setTimeout(function () { target = null; }, 700);
        track.scrollTo({ left: i * track.clientWidth, behavior: 'auto' });
        update(i);
      }
      var tick = null;
      track.addEventListener('scroll', function () {
        if (tick) return;
        tick = requestAnimationFrame(function () {
          tick = null;
          var w = Math.max(1, track.clientWidth);
          if (target !== null) {
            if (Math.abs(track.scrollLeft - target * w) < 2) target = null;
            return;
          }
          var i = Math.round(track.scrollLeft / w);
          if (i !== idx) update(i);
        });
      });
      prev.addEventListener('click', function () { go(idx - 1); });
      next.addEventListener('click', function () { go(idx + 1); });
      track.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
      });
      thumbs.forEach(function (t) { t.addEventListener('click', function () { go(+t.getAttribute('data-i')); }); });
      gal.querySelectorAll('.gal-open, .gal-full').forEach(function (b) {
        b.addEventListener('click', function () { openLightbox(ids, +b.getAttribute('data-i'), b); });
      });
    });
  }

  var lb = { ids: [], i: 0, opener: null };
  function lbShow() {
    var p = PHOTOS[lb.ids[lb.i]];
    var im = $('#lb-img');
    im.src = p.src; im.alt = CAP(lb.ids[lb.i]); im.width = p.w; im.height = p.h;
    $('#lb-cap').textContent = CAP(lb.ids[lb.i]);
    $('#lb-credit').textContent = T('lb.photo') + p.artist + ' · ' + p.license;
    $('#lb-count').textContent = (lb.i + 1) + ' / ' + lb.ids.length;
    $('#lb-prev').disabled = lb.i === 0;
    $('#lb-next').disabled = lb.i === lb.ids.length - 1;
  }
  function openLightbox(ids, i, opener) {
    lb.ids = ids; lb.i = i; lb.opener = opener;
    $('#lightbox').hidden = false;
    document.body.classList.add('lb-open');
    lbShow();
    $('#lb-close').focus();
  }
  function closeLightbox() {
    $('#lightbox').hidden = true;
    document.body.classList.remove('lb-open');
    if (lb.opener) lb.opener.focus();
  }
  function bindLightbox() {
    $('#lb-close').addEventListener('click', closeLightbox);
    $('#lb-prev').addEventListener('click', function () { if (lb.i > 0) { lb.i--; lbShow(); } });
    $('#lb-next').addEventListener('click', function () { if (lb.i < lb.ids.length - 1) { lb.i++; lbShow(); } });
    $('#lightbox').addEventListener('click', function (e) { if (e.target.id === 'lightbox' || e.target.classList.contains('lb-stage')) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if ($('#lightbox').hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && lb.i < lb.ids.length - 1) { lb.i++; lbShow(); }
      if (e.key === 'ArrowLeft' && lb.i > 0) { lb.i--; lbShow(); }
      if (e.key === 'Tab') {
        var f = Array.prototype.slice.call($('#lightbox').querySelectorAll('button:not([disabled])'));
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    var x0 = null;
    $('#lightbox').addEventListener('touchstart', function (e) { if (e.touches.length === 1) x0 = e.touches[0].clientX; }, { passive: true });
    $('#lightbox').addEventListener('touchend', function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) < 50) return;
      if (dx < 0 && lb.i < lb.ids.length - 1) { lb.i++; lbShow(); }
      if (dx > 0 && lb.i > 0) { lb.i--; lbShow(); }
    });
  }

  /* ---------- map zoom (desktop): the two panels grow out of the sidebar into a side-by-side view ---------- */
  var MZ_MS = 480;
  var mz = { open: false, busy: false, opener: null, kb: false };
  function mzWide() { return window.matchMedia('(min-width: 901px)').matches; }
  function mzSource() {
    // on-screen boxes of the two panels inside the sidebar map (viewBox is -6 -6 282 686)
    var r = $('#map svg').getBoundingClientRect(), k = r.width / 282;
    return [
      { x: r.left, y: r.top, w: r.width, h: 334 * k },
      { x: r.left, y: r.top + 352 * k, w: r.width, h: 334 * k }
    ];
  }
  function mzTarget() {
    var pad = 28, gap = 24, top = 64;
    var h = Math.min(window.innerHeight - top - pad, ((window.innerWidth - 2 * pad - gap) / 2) * 334 / 282);
    var w = h * 282 / 334, x0 = (window.innerWidth - (2 * w + gap)) / 2, y0 = top + (window.innerHeight - top - pad - h) / 2;
    return [{ x: x0, y: y0, w: w, h: h }, { x: x0 + w + gap, y: y0, w: w, h: h }];
  }
  function mzPlace(el, t, from) {
    el.style.left = t.x + 'px'; el.style.top = t.y + 'px'; el.style.width = t.w + 'px'; el.style.height = t.h + 'px';
    el.style.transform = from ? 'translate(' + (from.x - t.x) + 'px,' + (from.y - t.y) + 'px) scale(' + (from.w / t.w) + ')' : 'none';
  }
  function openMapZoom(kb) {
    if (mz.open || mz.busy || !mzWide()) return;
    var src = mzSource(), dst = mzTarget(), box = $('#mapzoom'), svg = $('#map svg').outerHTML;
    var panels = ['-6 -6 282 334', '-6 346 282 334'].map(function (vb, i) {
      var d = document.createElement('div');
      d.className = 'mz-panel';
      // own ids so the copies never borrow the sidebar map's clip paths
      d.innerHTML = svg.replace(/(clip-(?:north|whole)|map-title)/g, '$1-z' + i).replace(/viewBox="[^"]*"/, 'viewBox="' + vb + '"');
      return d;
    });
    box.querySelectorAll('.mz-panel').forEach(function (n) { n.remove(); });
    panels.forEach(function (d, i) { box.appendChild(d); mzPlace(d, dst[i], src[i]); });
    mz.open = mz.busy = true;
    mz.opener = document.activeElement;
    mz.kb = !!kb;
    box.hidden = false;
    document.body.classList.add('mz-open');
    $('#map').classList.add('mz-hide');
    void box.offsetWidth;
    box.classList.add('on');
    panels.forEach(function (d, i) { mzPlace(d, dst[i]); });
    $('#mz-close').focus({ preventScroll: true });
    setTimeout(function () { mz.busy = false; }, MZ_MS);
  }
  function closeMapZoom() {
    if (!mz.open || mz.busy) return;
    var box = $('#mapzoom'), src = mzSource(), dst = mzTarget();
    mz.busy = true;
    box.classList.remove('on');
    box.querySelectorAll('.mz-panel').forEach(function (d, i) { mzPlace(d, dst[i], src[i]); });
    setTimeout(function () {
      box.hidden = true;
      box.querySelectorAll('.mz-panel').forEach(function (n) { n.remove(); });
      $('#map').classList.remove('mz-hide');
      document.body.classList.remove('mz-open');
      mz.open = mz.busy = false;
      // keyboard users get their focus back; mouse users get no leftover focus ring
      if (mz.kb && mz.opener && mz.opener.focus) mz.opener.focus({ preventScroll: true });
      else if (document.activeElement) document.activeElement.blur();
    }, MZ_MS);
  }
  function bindMapZoom() {
    var m = $('#map');
    // the whole map opens on a mouse click; the hint is the real button (Enter/Space give a click with detail 0)
    m.addEventListener('click', function (e) {
      var hint = e.target.closest('.map-hint');
      if (hint) openMapZoom(e.detail === 0);
      else if (!e.target.closest('.map-legend')) openMapZoom(false);
    });
    $('#mapzoom').addEventListener('click', closeMapZoom);
    document.addEventListener('keydown', function (e) {
      if (!mz.open) return;
      if (e.key === 'Escape') closeMapZoom();
      if (e.key === 'Tab') { e.preventDefault(); $('#mz-close').focus(); }
    });
    window.addEventListener('resize', function () {
      if (!mz.open || mz.busy) return;
      if (!mzWide()) { closeMapZoom(); return; }
      var dst = mzTarget();
      $('#mapzoom').querySelectorAll('.mz-panel').forEach(function (d, i) { mzPlace(d, dst[i]); });
    });
  }

  /* ---------- scroll-linked map highlight ---------- */
  var io = null;
  function observeStops() {
    if (io) io.disconnect();
    if (!('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var key = e.target.getAttribute('data-pin');
        document.querySelectorAll('#map .pin').forEach(function (p) { p.classList.toggle('on', p.getAttribute('data-pin') === key); });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('#stops .stop').forEach(function (s) { io.observe(s); });
  }

  /* ---------- left out & credits ---------- */
  function renderStatic() {
    $('#left-out').innerHTML = LO().map(function (x) {
      return '<li><h3>' + esc(x.name) + '</h3><p>' + esc(x.why) + '</p></li>';
    }).join('');
    var used = {};
    Object.keys(STOPS).forEach(function (k) { STOPS[k].photos.forEach(function (p) { used[p] = true; }); });
    Object.keys(ROUTES).forEach(function (k) { used[ROUTES[k].cover] = true; });
    used[HERO] = true;
    $('#credits').innerHTML = Object.keys(used).map(function (id) {
      var p = PHOTOS[id];
      return '<li>' + esc(CAP(id)) + ': ' + esc(p.artist) + ', <a href="' + esc(p.page) + '" target="_blank" rel="noopener">' + esc(p.license) + '</a></li>';
    }).join('');
  }

  /* ---------- wiring ---------- */
  var current = null;
  // Polish: no line may end on a one-letter word, so each gets a no-break space after it (the text rule is tieShort in plan.js)
  function tieShortWords(root) {
    if (lang !== 'pl') return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), node;
    while ((node = walker.nextNode())) {
      if (/^(SCRIPT|STYLE|TEXTAREA)$/i.test(node.parentNode.nodeName)) continue;
      var tied = tieShort(node.nodeValue);
      if (tied !== node.nodeValue) node.nodeValue = tied;
    }
  }
  function render() {
    current = routeFor(state.style, state.choice, state.saigon, state.gentle);
    applyStatic();
    renderSwaps(current);
    renderExtra(current);
    renderNight(current);
    renderFacts(current);
    renderShape(current);
    renderMap(current);
    renderStops(current);
    renderWeather(current);
    renderLogistics(current);
    renderCardStats();
    $('#copy-status').textContent = '';
    $('#copy-fallback').hidden = true;
    tieShortWords(document.body);
  }

  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.name === 'style') {
      // the parents' style switches the gentle version on; other styles keep the current setting
      state = { style: t.value, choice: {}, saigon: state.saigon, gentle: ROUTES[t.value].gentle || state.gentle };
      save(); render();
    } else if (t.name === 'extra-saigon' || t.name === 'extra-gentle') {
      state[t.name.slice(6)] = t.checked;
      save(); render();
      var box = document.getElementById(t.id);
      if (box) box.focus({ preventScroll: true });
    } else if (t.name === 'night') {
      state.choice.night = t.value;
      save(); render();
    } else if (t.name && t.name.indexOf('swap-') === 0) {
      state.choice[t.name.slice(5)] = t.value;
      save(); render();
    }
  });

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = T('doc.title');
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
    renderStyles(); renderStatic(); render();
  }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  renderStyles();
  renderStatic();
  bindLightbox();
  bindMapZoom();
  bindCopy();
  /* back-to-top button: shown once the photo opener has scrolled away */
  var totop = $('#totop'), hero = $('.hero');
  if (totop && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { totop.hidden = es[0].isIntersecting; }).observe(hero);
  }

  render();

  /* expose for testing */
  window.__trip = { buildRoute: routeFor, ROUTES: ROUTES, SWAPS: SWAPS, setLang: setLang };
})();
