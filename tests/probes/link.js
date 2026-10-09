// What a variant link opens and what the copied plan links to.
// tests/probe.sh tests/probes/link.js 1400 'nature&south=mekong&hcmc=0&gentle=0&lang=de'
setTimeout(function () {
  var q = function (s) { var e = document.querySelector(s); return e ? e.textContent.replace(/\s+/g, ' ').trim() : '-'; };
  console.log('P:lang ' + document.documentElement.lang + ' · ' + q('#facts-for') + ' · hcmc ' + document.getElementById('extra-saigon').checked +
    ' · gentle ' + document.getElementById('extra-gentle').checked + ' · swaps ' +
    Array.prototype.map.call(document.querySelectorAll('#swaps input:checked'), function (i) { return i.name.slice(5) + '=' + i.value; }).join(','));
  try { navigator.clipboard.writeText = function (t) { console.log('P:copied link line: ' + t.split('\n').pop()); return Promise.resolve(); }; } catch (e) { /* read the fallback box below */ }
  document.getElementById('copy-plan').click();
  setTimeout(function () { var b = document.getElementById('copy-fallback'); if (!b.hidden) console.log('P:copied link line: ' + b.value.split('\n').pop()); }, 300);
}, 1500);
