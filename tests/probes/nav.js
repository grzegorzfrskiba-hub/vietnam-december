// With the section menu stuck at the top, is any visible link covered by the language switch? (EN, DE, PL; start and end of the strip)
// Run at phone widths: tests/probe.sh tests/probes/nav.js 390   → every line should end in "covered: none"
setTimeout(function () {
  document.documentElement.style.scrollBehavior = 'auto';
  var nav = document.querySelector('.secnav'), wrap = nav.querySelector('.wrap');
  ['en', 'de', 'pl'].forEach(function (lang) {
    document.querySelector('.lang button[data-lang="' + lang + '"]').click();
    window.scrollTo(0, document.querySelector('#styles').offsetTop + 300);
    [0, 9999].forEach(function (sl) {
      wrap.scrollLeft = sl;
      var bad = [], wr = wrap.getBoundingClientRect();
      wrap.querySelectorAll('a').forEach(function (a) {
        var r = a.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
        if (x < wr.left || x > wr.right) return;   // scrolled out of the strip
        var hit = document.elementFromPoint(x, y);
        if (hit !== a) bad.push(a.textContent + '→' + (hit && hit.closest('.lang') ? 'language switch' : hit && hit.tagName));
      });
      console.log('P:' + innerWidth + ' px ' + lang + ' scroll ' + wrap.scrollLeft + ' covered: ' + (bad.join(', ') || 'none'));
    });
  });
}, 1500);
