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
      return groups[key].map(function (v) { return dayRange(v.start, v.id === 'hanoi' ? 16 : v.end); }).join(', ');
    }
    function pill(p, key, big) {
      var nums = groups[key].map(function (v) { return v.num; }).join('·');
      var h = big ? 20 : 15, w = Math.max(h, (big ? 10 : 8) + nums.length * (big ? 6.5 : 5));
      return '<rect x="' + r(p[0] - w / 2) + '" y="' + r(p[1] - h / 2) + '" width="' + r(w) + '" height="' + h + '" rx="' + h / 2 + '"/>' +
        '<text class="pin-num' + (big ? '' : ' pin-num-s') + '" x="' + r(p[0]) + '" y="' + r(p[1] + (big ? 4 : 3.2)) + '" text-anchor="middle">' + nums + '</text>';
    }

    /* North panel */
    n.push('<rect class="m-frame" x="0" y="0" width="' + NF.w + '" height="' + NF.h + '" rx="8"/>');
    [21, 22].forEach(function (lat) {
      var y = r((NF.lat0 - lat) * NF.s);
      n.push('<line class="m-grid" x1="0" x2="' + NF.w + '" y1="' + y + '" y2="' + y + '"/><text class="m-gridlabel" x="' + (NF.w - 6) + '" y="' + (y - 4) + '" text-anchor="end">' + lat + '°N</text>');
    });
    [105, 106, 107].forEach(function (lon) {
      var x = r((lon - NF.lon0) * NF.s);
      n.push('<line class="m-grid m-grid-v" x1="' + x + '" x2="' + x + '" y1="0" y2="' + NF.h + '"/><text class="m-gridlabel" x="' + (+x + 4) + '" y="' + (NF.h - 6) + '">' + lon + '°E</text>');
    });
    ['puluong', 'ninhbinh', 'catba', 'caobang', 'babe', 'hanoi'].forEach(function (id) {
      if (inRoute[id]) return;
      var p = proj(NF, PT[id]);
      n.push('<circle class="m-faint" cx="' + r(p[0]) + '" cy="' + r(p[1]) + '" r="4"/>');
    });
    route.stops.forEach(function (s) { s.leg.segs.forEach(function (g) { n.push(seg(NF, g, '')); }); });
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
        '<text class="m-label" x="' + r(p[0] + L[0]) + '" y="' + r(p[1] + L[1]) + '" text-anchor="' + L[2] + '">' + esc(STOPS[key].short) + '</text>' +
        '<text class="m-sub" x="' + r(p[0] + L[0]) + '" y="' + r(p[1] + L[1] + 12) + '" text-anchor="' + L[2] + '">' + subsFor(key) + '</text></g>');
    });
    n.push('<text class="m-title" x="10" y="18">North</text>');

    /* Whole-country panel */
    c.push('<rect class="m-frame" x="0" y="' + CF.y + '" width="' + CF.w + '" height="' + CF.h + '" rx="8"/>');
    [10, 15, 20].forEach(function (lat) {
      var y = r(CF.y + (CF.lat0 - lat) * CF.s);
      c.push('<line class="m-grid" x1="0" x2="' + CF.w + '" y1="' + y + '" y2="' + y + '"/><text class="m-gridlabel" x="' + (CF.w - 6) + '" y="' + (y - 4) + '" text-anchor="end">' + lat + '°N</text>');
    });
    var i0 = proj(CF, [NF.lat0, NF.lon0]), i1 = proj(CF, [NF.lat0 - NF.h / NF.s, NF.lon0 + NF.w / NF.s]);
    c.push('<rect class="m-inset" x="' + r(i0[0]) + '" y="' + r(i0[1]) + '" width="' + r(i1[0] - i0[0]) + '" height="' + r(i1[1] - i0[1]) + '"/>' +
      '<text class="m-sub" x="' + r(i1[0] + 6) + '" y="' + r(i0[1] + 12) + '">North panel</text>');
    route.stops.forEach(function (s) { s.leg.segs.forEach(function (g) { c.push(seg(CF, g, 'm-thin')); }); });
    Object.keys(groups).forEach(function (key) {
      var p = proj(CF, PT[key]);
      if (NLAB[key]) { c.push('<circle class="m-dot" cx="' + r(p[0]) + '" cy="' + r(p[1]) + '" r="2.6" style="--c:' + stopColor(key) + '"/>'); return; }
      var L = CLAB[key];
      c.push('<g class="pin" data-pin="' + key + '" style="--c:' + stopColor(key) + '">' + pill(p, key, false) +
        '<text class="m-label m-label-s" x="' + r(p[0] + L[0]) + '" y="' + r(p[1] + L[1]) + '" text-anchor="' + L[2] + '">' + esc(STOPS[key].short) +
        ' <tspan class="m-sub">' + subsFor(key) + '</tspan></text></g>');
    });
    var st = proj(CF, PT.start), SL = CLAB.start;
    c.push('<g class="m-start"><rect x="' + r(st[0] - 5) + '" y="' + r(st[1] - 5) + '" width="10" height="10" rx="2"/>' +
      '<text class="m-label m-label-s" x="' + r(st[0] + SL[0]) + '" y="' + r(st[1] + SL[1]) + '">Hồ Chí Minh City <tspan class="m-sub">Start</tspan></text></g>');
    c.push('<text class="m-title" x="10" y="' + (CF.y + 18) + '">Whole route</text>');

    $('#map').innerHTML = '<svg viewBox="-6 -6 282 670" role="img" aria-labelledby="map-title"><title id="map-title">Route map: ' +
      esc(route.stops.map(function (s) { return STOPS[s.id].short; }).join(', ')) + '</title>' +
      '<defs><clipPath id="clip-north"><rect x="0" y="0" width="' + NF.w + '" height="' + NF.h + '" rx="8"/></clipPath></defs>' +
      '<g clip-path="url(#clip-north)">' + n.join('') + '</g>' + c.join('') + '</svg>' +
      '<p class="map-legend"><span><svg width="24" height="6" aria-hidden="true"><line class="m-road" x1="0" x2="24" y1="3" y2="3"/></svg>Road</span>' +
      '<span><svg width="24" height="6" aria-hidden="true"><line class="m-fly" x1="0" x2="24" y1="3" y2="3"/></svg>Flight</span>' +
      '<span class="map-note">Both panels drawn to scale</span></p>';
  }
