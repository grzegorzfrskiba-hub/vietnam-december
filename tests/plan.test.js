var fake = { days: 3, gentle: false, stops: [
  { id: 'dalat', n: 2, leg: { total: 3.2, segs: [{ mode: 'fly', h: 1 }, { mode: 'road', h: 0.5 }] },
    days: [{ pace: 'travel' }, { pace: 'hike' }] },
  { id: 'hanoiStop', n: 1, leg: { total: 2, segs: [{ mode: 'road', h: 2 }] }, days: [{ pace: 'hike' }] },
  { id: 'saigon', n: 0, leg: null, days: [] }
] };
eq(routeStats(fake), { flights: 1, hikes: 2, longest: 3.2, bases: 2 }, 'routeStats');
print('routeStats ok');
var costs = { nightPP: { dalat: [10, 20], hanoi: [15, 30] }, extrasPP: { dalat: [5, 5] },
  flightPP: [40, 80], roadHourPP: [2, 4], carHourPP: [10, 20], dayPP: [20, 30] };
var r2 = { days: 3, gentle: false, stops: [
  { id: 'dalat', n: 2, leg: { segs: [{ mode: 'fly', h: 1 }, { mode: 'road', h: 0.5 }] }, days: [] },
  { id: 'hanoiStop', n: 1, leg: { segs: [{ mode: 'road', h: 2 }] }, days: [] }
] };
// lo: 2*10 + 5 + 40 + 0.5*2 + 1*15 + 2*2 + 3*20 = 145 → 150; hi: 40+5+80+2+30+8+90 = 255 → 260
eq(budgetFor(r2, costs), [150, 260], 'budget, public transport');
r2.gentle = true;
// road by private car: lo 145 - 5 + 25 = 165 → 170; hi 255 - 10 + 50 = 295 → 300
eq(budgetFor(r2, costs), [170, 300], 'budget, gentle uses private car');
r2.stops[0].days = [{ pace: 'travel' }, { pace: 'nature', pp: [12, 21] }];
// a day trip adds its own cost: lo 165 + 12 = 177 → 180; hi 295 + 21 = 316 → 320
eq(budgetFor(r2, costs), [180, 320], 'budget, day trips');
print('budgetFor ok');
eq(tripDate(null, 3), null, 'no start date');
eq(tripDate('2026-12-05', 1), '2026-12-05', 'day 1');
eq(tripDate('2026-12-05', 27), '2026-12-31', 'end of year');
eq(tripDate('2026-12-05', 28), '2027-01-01', 'new year');
print('tripDate ok');
// Polish: noce for 2–4 (also 22–24, 32–34…), nocy for the rest, including 11–14 and 21
[[1, 'one'], [2, 'few'], [3, 'few'], [4, 'few'], [0, 'many'], [5, 'many'], [11, 'many'], [12, 'many'], [13, 'many'], [14, 'many'],
 [21, 'many'], [22, 'few'], [24, 'few'], [25, 'many'], [112, 'many'], [122, 'few']].forEach(function (c) {
  eq(nightForm(c[0]), c[1], 'nightForm(' + c[0] + ')');
});
print('nightForm ok');
// page language: a #hash that names a language wins, then a stored language, then the browser's primary language subtag, else the first language
function pick(stored, browser, hash) { return pickLang(stored, browser, hash, ['en', 'de', 'pl']); }
eq(pick('en', 'pl-PL', ''), 'en', 'stored en beats a Polish browser');
eq(pick('de', 'pl-PL', ''), 'de', 'stored de beats a Polish browser');
eq(pick('', 'pl-PL', ''), 'pl', 'nothing stored, Polish browser');
eq(pick('', 'de-AT', ''), 'de', 'nothing stored, Austrian German browser');
eq(pick('', 'en-US', ''), 'en', 'nothing stored, English browser');
eq(pick('', 'fr-FR', ''), 'en', 'a browser language we do not offer');
eq(pick('', 'deu', ''), 'en', 'deu is a different language code, not de');
eq(pick('', 'plt', ''), 'en', 'plt is a different language code, not pl');
eq(pick('', 'pl_PL', ''), 'pl', 'underscore tag');
eq(pick('', 'DE', ''), 'de', 'upper-case tag');
eq(pick('', '', ''), 'en', 'no browser language');
eq(pick(null, undefined, undefined), 'en', 'missing values');
eq(pick('xx', 'pl-PL', ''), 'pl', 'a stored value that is no language: browser rule');
eq(pick('de', 'en-US', '#pl'), 'pl', 'hash pl overrides stored de');
eq(pick('de', 'en-US', 'pl'), 'pl', 'hash given without the #');
eq(pick('pl', 'de-DE', '#en'), 'en', 'hash en overrides stored pl');
eq(pick('de', 'pl-PL', '#nature'), 'de', 'a trip-style hash leaves the language alone');
eq(pick('en', 'en-GB', '#nature&hcmc=1&lang=pl'), 'pl', 'a variant link sets the language');
eq(pick('de', 'en-GB', '#nature&hcmc=1'), 'de', 'a variant link without a language leaves it alone');
// variant links: old style-only links still work, stale values are dropped
eq(parseVariant('#de'), null, 'a language hash is no variant');
eq(parseVariant('#day-5'), null, 'a day anchor is no variant');
eq(JSON.stringify(parseVariant('#classic')), JSON.stringify({ style: 'classic', choice: {} }), 'a style-only link keeps the switches as they are');
var pv = parseVariant('#balanced&night=hanoi&water=puluong&south=nowhere&hcmc=1&gentle=0&x=1');
eq(pv.saigon, true, 'hcmc=1'); eq(pv.gentle, false, 'gentle=0');
eq(JSON.stringify(pv.choice), JSON.stringify({ water: 'puluong' }), 'unknown night and stop names are dropped');
print('variant links ok');
print('pickLang ok');
// Polish typography: one-letter words are tied to the next word with a no-break space
var NB = '\u00a0';
eq(tieShort('Wietnam, z południa na północ'), 'Wietnam, z' + NB + 'południa na północ', 'z mid-text');
eq(tieShort('W domu'), 'W' + NB + 'domu', 'capital at the start');
eq(tieShort('i w domu'), 'i' + NB + 'w' + NB + 'domu', 'a run of one-letter words');
eq(tieShort('Hà Nội, a potem Huế i Hội An'), 'Hà Nội, a' + NB + 'potem Huế i' + NB + 'Hội An', 'a and i');
eq(tieShort('(w domu) i „o tym” oraz x–u nas'), '(w' + NB + 'domu) i' + NB + '„o' + NB + 'tym” oraz x–u' + NB + 'nas', 'after ( „ and –');
eq(tieShort('Cần Giờ o 6:00, z lampionami i u gospodarzy'), 'Cần Giờ o' + NB + '6:00, z' + NB + 'lampionami i' + NB + 'u' + NB + 'gospodarzy', 'o u z i');
// no change: letters inside words, a one-letter word with nothing after it, letters that are not Polish one-letter words, ties already made
['dla przyjaciół', 'Đà Lạt i', 'ok. 5 km', 'XVIII wieku', 'ma uczciwie', 'e-mail a', 'C w', 'z' + NB + 'południa'].forEach(function (s) {
  eq(tieShort(s), s, 'unchanged: ' + s);
});
eq(tieShort(tieShort('i w domu')), tieShort('i w domu'), 'idempotent');
print('tieShort ok');
