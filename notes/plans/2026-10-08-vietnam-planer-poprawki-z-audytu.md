# Planer „Vietnam in December”: poprawki z audytu — plan wdrożenia

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wprowadzić do strony-planera wszystkie poprawki z audytu z 8.10.2026: strona działa u kolegi na telefonie, pokazuje budżet i daty, lepiej pomaga wybrać styl trasy i nie ma błędów w wersji niemieckiej.

**Architecture:** Strona jest generowana przez `build.py` ze źródeł `src/` (data.js, i18n.js, app.js, template.html, basemap.js) do dwóch wyjść: `out/web/` (artifact claude.ai i ewentualnie GitHub Pages) oraz `out/offline/` (jeden plik HTML ze zdjęciami w środku). Nowa logika bez DOM (statystyki trasy, budżet, daty) trafia do nowego pliku `src/plan.js`, żeby dało się ją testować w JavaScriptCore (`jsc`). Wszystko, co dotyka DOM, zostaje w `app.js` i sprawdzamy to zrzutami ekranu z Chrome headless.

**Tech Stack:** czysty JS (ES5, bez frameworków), Python 3 + Pillow (build), JavaScriptCore `jsc` (testy), Chrome headless `--screenshot` (kontrola wizualna), `gh` CLI (GitHub Pages).

**Spec:** wymagania pochodzą z audytu w rozmowie z 8.10.2026 i są streszczone w sekcji „Wymagania z audytu” niżej. Wykonawca czyta tę sekcję zamiast rozmowy.

## Wymagania z audytu

| # | Wymaganie | Zadanie |
|---|---|---|
| A1 | Strona musi działać u odbiorcy na telefonie. Plik HTML wysłany przez WhatsApp na iPhonie może się otworzyć bez JavaScriptu, czyli pusty. Trzeba to sprawdzić, a docelowo dać zwykły link (GitHub Pages). | 10, 11 |
| A2 | Orientacyjny budżet na osobę dla każdej trasy | 5 |
| A3 | Daty zamiast samego „December 2026”, gdy termin będzie znany | 6 |
| A4 | Tà Năng–Phan Dũng: sprawdzić aktualny status szlaku, mocniejsze ostrzeżenie albo plan B | 4 |
| A5 | Wersja DE: na zaznaczonej karcie jest „✓ Selected” wpisane na sztywno w CSS | 1 |
| A6 | Pasek liczb pod zdjęciem nie mówi, której trasy dotyczy | 2 |
| A7 | Liczby (loty, dni wędrówek, najdłuższy przejazd, budżet) od razu na kartach stylów, żeby dało się porównać | 3 (+5) |
| A8 | „Book ahead”: konkretne linki, nie tylko co zarezerwować | 7 |
| A9 | Strona jest długa: małe menu sekcji i przycisk „do góry” | 8 |
| A10 | (znalezione przy planowaniu) w trybie „gentle” / z rodzicami lista pakowania nadal każe brać buty trekkingowe | 9 |

**Poza zakresem (świadomie):** suwaki, kalkulatory, logowanie, wersja „finalna” z jedną trasą (osobny plan po podjęciu decyzji).

## Global Constraints

- **Każda zmiana treści w obu językach:** EN w `data.js` / `UI.en`, DE w `I18N_DE` / `UI.de`. Test parzystości kluczy (Task 0) musi przechodzić.
- **Bez zewnętrznych zależności JS.** Kod w stylu istniejącego: ES5, `var`, `function`, `esc()` dla każdego tekstu wstawianego do HTML.
- **Kolory tylko przez zmienne CSS** z `:root` (jasny i ciemny motyw już zdefiniowane).
- **Nie zmieniać kluczy localStorage** (`vn16-plan-v3`, `vn16-lang`), żeby nie skasować wyborów odbiorców.
- **Artifact aktualizujemy w tym samym URL:** https://claude.ai/artifact/V3ZVLCQNnvWDHre3F4GaPU. Przed publikacją najpierw `Artifact read`.
- **Plik offline zawsze kopiujemy na** `~/Desktop/CLAUDE roboczy plik/Vietnam-in-16-days.html`.
- **Publiczne opublikowanie (GitHub Pages) tylko po wyraźnym „tak” użytkownika** w czacie.
- **Ceny i fakty z researchu mają źródło i datę** zapisane w `research/`.

## ⚠️ Koordynacja z drugą sesją (przeczytać przed startem)

8.10.2026 o 15:15 sesja **„Vietnam 16-day itinerary”** (`local_8098713d…`) aktywnie edytowała te same źródła w `/private/tmp/claude-502/-Users-gregfr35-Desktop-CLAUDE-roboczy-plik/5943c872-0c38-4995-a3e7-208205d791cf/scratchpad/vn/site2/`. Dodała styl „Easy classics” (z rodzicami), opcję +3 noce w Sajgonie i tryb „gentle”. Opublikowany artifact był wtedy jeszcze starszą wersją (`vn16-plan-v1`, styl „Balanced”).

Zasady:
1. **Nie startować, dopóki tamta sesja pracuje.** Sprawdzić `list_sessions`: tamta sesja ma `isRunning: false`, albo użytkownik potwierdza, że skończył.
2. Ten plan opisuje kod **w wersji v3** (style: classic, balanced, nature, culture, slow; `buildRoute(styleId, choice, saigon, gentle)`; `route.days`, `route.gentle`). Jeśli przed startem `grep -n "vn16-plan-v" src/app.js` pokazuje inny numer, najpierw porównać różnice i dopasować kroki.
3. Po Task 0 źródła mieszkają w stałym miejscu (`vietnam-planner/`). Trzeba to zapisać w pamięci, żeby kolejne sesje nie wracały do scratchpada.

---

## Struktura plików (po Task 0)

```
~/Desktop/CLAUDE roboczy plik/vietnam-planner/      ← repo git
├── photos/                 ← oryginały zdjęć + meta.json (niecommitowane, .gitignore)
├── site2/
│   ├── build.py            ← MODYFIKACJA: dołącza src/plan.js
│   ├── src/
│   │   ├── data.js         ← MODYFIKACJA: COSTS, TRIP, BOOK_LINKS, treść Tà Năng
│   │   ├── i18n.js         ← MODYFIKACJA: nowe klucze UI en/de, DE treść Tà Năng
│   │   ├── plan.js         ← NOWY: routeStats, budgetFor, tripDate (bez DOM)
│   │   ├── app.js          ← MODYFIKACJA: render kart, faktów, dat, linków, nawigacji
│   │   ├── template.html   ← MODYFIKACJA: CSS + nawigacja + etykieta faktów
│   │   └── basemap.js      ← bez zmian
│   └── out/                ← wynik builda (.gitignore)
├── docs/                   ← kopia out/web dla GitHub Pages (Task 11)
├── research/               ← notatki ze źródłami (Tà Năng, ceny, linki)
└── tests/
    ├── run.sh              ← uruchamia wszystkie testy jsc + lint CSS
    ├── assert.js           ← eq() / ok()
    ├── i18n.test.js
    ├── plan.test.js
    ├── data.test.js
    ├── links.sh            ← sprawdza, czy linki z BOOK_LINKS odpowiadają (sieć)
    └── shot.sh             ← zrzut ekranu strony z Chrome headless
```

Ścieżki w zadaniach są względne do `~/Desktop/CLAUDE roboczy plik/vietnam-planner/`, oznaczanego dalej jako `$P`.

---

### Task 0: Przeniesienie źródeł w stałe miejsce + szkielet testów

**Files:**
- Create: `$P/` (kopia `vn/site2` i `vn/photos`), `$P/.gitignore`, `$P/tests/run.sh`, `$P/tests/assert.js`, `$P/tests/i18n.test.js`, `$P/tests/shot.sh`, `$P/site2/src/plan.js`
- Modify: `$P/site2/build.py` (dołączenie plan.js)
- Modify: pamięć `wycieczka-wietnam-grudzien-2026.md` (nowa lokalizacja źródeł)

**Interfaces:**
- Produces: `tests/run.sh` (exit 0 = wszystko przeszło), `tests/shot.sh <hash> <szerokość> <plik.png>`, pusty `src/plan.js` wklejany przez build między i18n a PHOTOS

- [ ] **Step 1: Potwierdzić, że druga sesja skończyła** (`list_sessions` → „Vietnam 16-day itinerary” `isRunning: false`) i sprawdzić wersję kodu:

```bash
grep -n "vn16-plan-v" /private/tmp/claude-502/-Users-gregfr35-Desktop-CLAUDE-roboczy-plik/5943c872-0c38-4995-a3e7-208205d791cf/scratchpad/vn/site2/src/app.js
```
Expected: `var KEY = 'vn16-plan-v3';`

- [ ] **Step 2: Skopiować źródła (bez plików kopii zapasowych `*.before-*`)**

```bash
SRC=/private/tmp/claude-502/-Users-gregfr35-Desktop-CLAUDE-roboczy-plik/5943c872-0c38-4995-a3e7-208205d791cf/scratchpad/vn
P="$HOME/Desktop/CLAUDE roboczy plik/vietnam-planner"
mkdir -p "$P/tests" "$P/research"
rsync -a --exclude '*.before-*' --exclude 'out/' "$SRC/site2/" "$P/site2/"
rsync -a --exclude '*.before-*' "$SRC/photos/" "$P/photos/"
ls "$P/site2/src" "$P/photos" | head
```
Expected: `app.js basemap.js data.js i18n.js template.html` oraz zdjęcia + `meta.json`.

- [ ] **Step 3: `.gitignore` i git init**

```bash
cd "$HOME/Desktop/CLAUDE roboczy plik/vietnam-planner"
printf 'photos/\nsite2/out/\n.DS_Store\n' > .gitignore
git init -q && git add -A && git commit -qm "Import Vietnam planner sources (v3) from scratchpad" && git log --oneline
```

- [ ] **Step 4: Utworzyć pusty `site2/src/plan.js`**

```js
/* Pure helpers shared by the page and the tests: route statistics, budget, dates. No DOM here. */
```

- [ ] **Step 5: Dołączyć plan.js w `build.py`.** W `main()` po wczytaniu `i18n_js` dodać wczytanie i wstawić do skryptu:

```python
    plan_js = open(os.path.join(ROOT, "src", "plan.js"), encoding="utf-8").read()
```
oraz w `page()` zamienić linię składającą `script` na:
```python
        script = (data_js + "\n" + basemap_js + "\n" + i18n_js + "\n" + plan_js + "\nconst PHOTOS = " + json.dumps(photos, ensure_ascii=False) + ";\nconst HERO = " + json.dumps(HERO) + ";\n" + app_js)
```

- [ ] **Step 6: Testy: `tests/assert.js`**

```js
function eq(a, b, msg) {
  if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error((msg || 'eq') + ': got ' + JSON.stringify(a) + ', want ' + JSON.stringify(b));
}
function ok(c, msg) { if (!c) throw new Error(msg || 'not ok'); }
```

- [ ] **Step 7: `tests/i18n.test.js`** (parzystość EN/DE, brak pustych tekstów)

```js
var en = Object.keys(UI.en), de = Object.keys(UI.de);
eq(en.filter(function (k) { return !(k in UI.de); }), [], 'keys missing in UI.de');
eq(de.filter(function (k) { return !(k in UI.en); }), [], 'keys missing in UI.en');
en.forEach(function (k) { ok(String(UI.en[k]).trim() && String(UI.de[k]).trim(), 'empty text for ' + k); });
print('i18n ok: ' + en.length + ' keys');
```

- [ ] **Step 8: `tests/run.sh`** (+ `chmod +x`)

```bash
#!/bin/bash
# Runs the data/logic tests in JavaScriptCore and a CSS lint. Exit 0 = all pass.
set -euo pipefail
cd "$(dirname "$0")/.."
J=/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc
S=site2/src
for t in tests/*.test.js; do
  echo "== $t"
  "$J" "$S/data.js" "$S/i18n.js" "$S/plan.js" tests/assert.js "$t"
done
echo "== lint: no hard-coded words in CSS content"
if grep -nE "content: *\"[^\"]*[A-Za-z]{3,}" "$S/template.html"; then echo "FAIL: translate this text via UI keys"; exit 1; fi
echo "ALL PASS"
```

- [ ] **Step 9: `tests/shot.sh`** (+ `chmod +x`). Uwaga: w tym środowisku `--dump-dom` w Chrome się wiesza, a `--screenshot` działa, dlatego kontrola wizualna idzie przez zrzuty.

```bash
#!/bin/bash
# Usage: tests/shot.sh <hash> <width> <out.png>   e.g. tests/shot.sh de 390 /tmp/de-mobile.png
# Hash: a style id (classic, balanced, nature, culture, slow) or a language (en, de).
set -euo pipefail
cd "$(dirname "$0")/.."
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP=$(mktemp -d)
"$C" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$TMP" \
  --window-size="$2,2600" --virtual-time-budget=8000 --screenshot="$3" \
  "file://$PWD/site2/out/web/index.html#$1" >/dev/null 2>&1 || true
rm -rf "$TMP"
ls -la "$3"
```

- [ ] **Step 10: Uruchomić testy i build**

```bash
cd "$HOME/Desktop/CLAUDE roboczy plik/vietnam-planner" && tests/run.sh && python3 site2/build.py
```
Expected: `i18n ok: 161 keys` (lub więcej), a potem lint **zgłasza** `template.html:121: … content: "✓ Selected · "` i kończy się `FAIL`. To oczekiwany czerwony stan, naprawia go Task 1. Build uruchomić osobno (`python3 site2/build.py`) → `web page … MB`, `offline file … MB`.

- [ ] **Step 11: Zaktualizować pamięć.** W `wycieczka-wietnam-grudzien-2026.md` zamienić akapit „Źródła buildu” na: źródła są w `~/Desktop/CLAUDE roboczy plik/vietnam-planner/` (repo git), testy `tests/run.sh`, zrzuty `tests/shot.sh`, build `python3 site2/build.py`.

- [ ] **Step 12: Commit**

```bash
git add -A && git commit -qm "Add jsc test harness, screenshot script and plan.js slot"
```

---

### Task 1: Tłumaczenie „✓ Selected” na karcie stylu (A5)

**Files:**
- Modify: `site2/src/template.html:119-121` (CSS `.style-tag`)
- Modify: `site2/src/app.js` `renderStyles()` (ok. linii 200–214)
- Modify: `site2/src/i18n.js` (`UI.en`, `UI.de`)

**Interfaces:**
- Produces: klucz UI `styles.sel`; element `.style-sel` w każdej karcie

- [ ] **Step 1: Test czerwony.** `tests/run.sh` → lint pokazuje `template.html:121 … content: "✓ Selected · "` i `FAIL`.

- [ ] **Step 2: CSS.** Zamienić linię 121 na:

```css
.style-sel { display: none; }
.style-card:has(input:checked) .style-sel { display: inline; }
```

- [ ] **Step 3: app.js, `renderStyles()`.** Zamienić fragment z tagiem:

```js
        '<span class="style-body"><span class="style-tag"><span class="style-sel">✓ ' + esc(T('styles.sel')) + ' · </span>' + esc(r.tag) + '</span>' +
```

- [ ] **Step 4: i18n.** W `UI.en` obok `'styles.legend'` dodać `'styles.sel': 'Selected',`, a w `UI.de` dodać `'styles.sel': 'Ausgewählt',`.

- [ ] **Step 5: Test zielony + build + zrzut DE**

```bash
tests/run.sh && python3 site2/build.py && tests/shot.sh de 1440 /tmp/t1-de.png
```
Expected: `ALL PASS`. Na zrzucie zaznaczona karta ma tag „✓ AUSGEWÄHLT · UNSER TIPP: MIT ELTERN”.

- [ ] **Step 6: Commit** `git commit -am "Translate the selected-style label"`

---

### Task 2: Etykieta „Twoja trasa: …” nad paskiem liczb (A6)

**Files:**
- Modify: `site2/src/template.html` (linia `<div class="facts">` ok. 422; CSS `.facts` ok. 95–100)
- Modify: `site2/src/app.js` `renderFacts()`
- Modify: `site2/src/i18n.js`

**Interfaces:**
- Produces: element `#facts-for`, klucz `f.for` z `{name}`

- [ ] **Step 1: Klucze (test parzystości łapie brak jednego z nich).** `UI.en`: `'f.for': 'Your route: {name}',` · `UI.de`: `'f.for': 'Eure Route: {name}',`

- [ ] **Step 2: template.html.** Zamienić `<div class="facts"><ul class="wrap" id="facts"></ul></div>` na:

```html
<div class="facts"><div class="wrap"><p class="facts-for" id="facts-for"></p><ul id="facts"></ul></div></div>
```
i dodać CSS pod `.facts span`:
```css
.facts-for { padding-top: 14px; font: 500 11px var(--mono); letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); }
```

- [ ] **Step 3: app.js, na początku `renderFacts(route)`** dodać:

```js
    $('#facts-for').textContent = T('f.for', { name: RT(route.style).name });
```

- [ ] **Step 4: Test + build + zrzut**

```bash
tests/run.sh && python3 site2/build.py && tests/shot.sh balanced 1440 /tmp/t2.png && tests/shot.sh balanced 390 /tmp/t2m.png
```
Expected: nad liczbami „YOUR ROUTE: BALANCED”. Na 390 px etykieta mieści się w jednej linii, a siatka 3+2 się nie rozjeżdża.

- [ ] **Step 5: Commit** `git commit -am "Label the facts bar with the chosen route"`

---

### Task 3: Statystyki na kartach stylów (A7)

**Files:**
- Modify: `site2/src/plan.js` (`routeStats`)
- Create: `tests/plan.test.js`
- Modify: `site2/src/app.js` (`renderStyles`, `renderFacts`)
- Modify: `site2/src/template.html` (CSS `.style-stats`)
- Modify: `site2/src/i18n.js`

**Interfaces:**
- Produces: `routeStats(route) → { flights: number, hikes: number, longest: number /*h*/, bases: number }`, gdzie `route` to wynik `buildRoute()` (`stops[].leg.segs[].mode`, `stops[].leg.total`, `stops[].days[].pace`, `stops[].id`)
- Consumes: `buildRoute(styleId, choice, saigon, gentle)` i `approx(h)` z app.js

- [ ] **Step 1: Test czerwony, `tests/plan.test.js`**

```js
var fake = { days: 3, gentle: false, stops: [
  { id: 'dalat', n: 2, leg: { total: 3.2, segs: [{ mode: 'fly', h: 1 }, { mode: 'road', h: 0.5 }] },
    days: [{ pace: 'travel' }, { pace: 'hike' }] },
  { id: 'hanoiStop', n: 1, leg: { total: 2, segs: [{ mode: 'road', h: 2 }] }, days: [{ pace: 'hike' }] },
  { id: 'saigon', n: 0, leg: null, days: [] }
] };
eq(routeStats(fake), { flights: 1, hikes: 2, longest: 3.2, bases: 2 }, 'routeStats');
print('routeStats ok');
```
Run: `tests/run.sh` → Expected: FAIL `Can't find variable: routeStats`.

- [ ] **Step 2: Implementacja w `plan.js`**

```js
/* Counts for one built route: domestic flights, hiking days, the longest travel day (hours) and bases (the Hà Nội stopover is not a base). */
function routeStats(route) {
  var flights = 0, hikes = 0, longest = 0;
  route.stops.forEach(function (s) {
    if (s.leg) {
      s.leg.segs.forEach(function (g) { if (g.mode === 'fly') flights++; });
      longest = Math.max(longest, s.leg.total);
    }
    s.days.forEach(function (d) { if (d.pace === 'hike') hikes++; });
  });
  var bases = route.stops.filter(function (s) { return s.id !== 'hanoiStop'; }).length;
  return { flights: flights, hikes: hikes, longest: longest, bases: bases };
}
```
Uwaga: w teście `saigon` z `n: 0` liczy się jako baza, więc 2 bazy = dalat + saigon. To zgodne z obecnym `renderFacts`, które liczy każdy przystanek poza `hanoiStop`.

- [ ] **Step 3: `tests/run.sh`** → `routeStats ok`.

- [ ] **Step 4: `renderFacts` korzysta z `routeStats` (DRY).** Zastąpić liczenie `flights/hikes/longest/bases` w `renderFacts`:

```js
  function renderFacts(route) {
    var st = routeStats(route);
    $('#facts-for').textContent = T('f.for', { name: RT(route.style).name });
    $('#facts').innerHTML =
      '<li><b>' + route.days + '</b><span>' + T('f.days') + '</span></li>' +
      '<li><b>' + st.bases + '</b><span>' + T('f.bases') + '</span></li>' +
      '<li><b>' + st.flights + '</b><span>' + T('f.flights') + '</span></li>' +
      '<li><b>' + st.hikes + '</b><span>' + T('f.hikes') + '</span></li>' +
      '<li><b>' + approx(st.longest).replace('≈ ', '') + '</b><span>' + T('f.longest') + '</span></li>';
  }
```
(Pierwszy `<li>` przepisać 1:1 z obecnego kodu. Jeśli wywołanie `T('f.days', …)` ma tam argumenty, np. `{ nights: … }`, zostawić je bez zmian.)

- [ ] **Step 5: Linia statystyk na kartach, w `renderStyles()`** wewnątrz `map` przed `return`:

```js
      // card stats use each style's own base trip: no Saigon add-on, gentle only where the style is gentle
      var st = routeStats(buildRoute(id, {}, false, !!ROUTES[id].gentle));
      var stats = T('styles.stats', { f: st.flights, h: st.hikes, l: approx(st.longest).replace('≈ ', '') });
```
i po `style-places` dodać `'<span class="style-stats">' + esc(stats) + '</span>'`.

- [ ] **Step 6: Klucze i CSS.** `UI.en`: `'styles.stats': 'Flights {f} · Hiking days {h} · Longest leg {l}',` · `UI.de`: `'styles.stats': 'Flüge {f} · Wandertage {h} · Längste Etappe {l}',`

```css
.style-stats { font: 12px var(--mono); color: var(--muted); }
```

- [ ] **Step 7: Test + build + zrzuty**

```bash
tests/run.sh && python3 site2/build.py && tests/shot.sh balanced 1440 /tmp/t3.png && tests/shot.sh de 390 /tmp/t3m.png
```
Expected: każda z 5 kart ma linię statystyk. Liczby karty „Balanced” zgadzają się z paskiem faktów przy `#balanced` (bez Sajgonu). Na telefonie karta (zdjęcie obok tekstu) się nie przepełnia.

- [ ] **Step 8: Commit** `git commit -am "Show flights, hiking days and longest leg on each style card"`

---

### Task 4: Tà Năng: weryfikacja statusu i plan B (A4)

**Files:**
- Create: `research/ta-nang-status-2026-10.md`
- Modify: `site2/src/data.js` (`STOPS.dalat`, ewentualnie `ROUTES.nature.cover`)
- Modify: `site2/src/i18n.js` (`I18N_DE.stops.dalat`, `b.dalat` en/de)

- [ ] **Step 1: Research (WebSearch, mode "extended").** Zapytania: „Tà Năng Phan Dũng trekking ban 2025”, „cung đường Tà Năng Phan Dũng cấm 2025 2026”, „Lâm Đồng Tà Năng trekking quy định”. Zapisać do `research/ta-nang-status-2026-10.md`: status (otwarty / tylko z licencjonowanym przewodnikiem i pozwoleniem / zamknięty), datę decyzji i 2–3 źródła z URL i datą. Ustalenie: **wariant A** = legalnie z licencjonowanym przewodnikiem, **wariant B** = zamknięty albo niejasny.

- [ ] **Step 2a (wariant A).** W `STOPS.dalat.days[2].d` (EN) ostatnie zdanie zamienić na:
`Only go with a licensed local guide, who arranges the permit: the route has been closed after accidents, and walking it alone is not allowed.`
DE (`I18N_DE.stops.dalat.days[2][1]`, ostatnie zdanie):
`Nur mit einem lizenzierten lokalen Guide, der die Genehmigung besorgt: Die Route war nach Unfällen gesperrt, allein ist sie nicht erlaubt.`

- [ ] **Step 2b (wariant B).** Dzień `p: 3` w `STOPS.dalat.days` zamienić na Lang Biang (pace `hike` zostaje):

```js
      { p: 3, o: 3, pace: 'hike', t: 'Lang Biang on foot', d: 'A guided hike from the K’Ho village of Lát up through pine forest to the summit ridge of Lang Biang (2,167 m), with the whole plateau below. The Tà Năng–Phan Dũng trail is closed to visitors, so this is the big hike instead.' },
```
DE w `I18N_DE.stops.dalat.days[2]`:
```js
        ['Lang Biang zu Fuß', 'Geführte Wanderung vom K’Ho-Dorf Lát durch Kiefernwald hinauf zum Gipfelgrat des Lang Biang (2.167 m), mit der ganzen Hochebene unter euch. Der Tà-Năng–Phan-Dũng-Trail ist für Besucher gesperrt, deshalb ist das hier die große Wanderung.'],
```
Dalsze zmiany dla B:
- `STOPS.dalat.sub`: EN `'Bidoup–Núi Bà forest and Lang Biang'`, DE `'Der Wald von Bidoup–Núi Bà und der Lang Biang'`.
- `STOPS.dalat.instead`: EN `'The national park and Lang Biang.'`, DE `'Der Nationalpark und der Lang Biang.'`.
- `STOPS.dalat.photos`: `['dalat_4', 'dalat_1', 'dalat_2']` (bez zdjęć Tà Năng `dalat_0`, `dalat_3`).
- `ROUTES.nature.cover`: `'dalat_2'`.
- `UI.en['b.dalat']`: `'A guide for Lang Biang and for Bidoup–Núi Bà.'` · `UI.de['b.dalat']`: `'Einen Guide für den Lang Biang und für Bidoup–Núi Bà.'`
- Jeśli wersja „gentle” dnia (`e:`) wspomina Tà Năng: `grep -n "Tà Năng\|Ta Nang" site2/src/*.js` i poprawić każde trafienie w obu językach.

- [ ] **Step 3: Test danych, `tests/data.test.js`** (pilnuje, żeby każdy przystanek miał zdjęcia z podpisami w obu językach)

```js
Object.keys(STOPS).forEach(function (id) {
  STOPS[id].photos.forEach(function (p) { ok(I18N_DE.cap[p], 'DE caption missing for ' + p); });
  var de = I18N_DE.stops[id];
  if (de && de.days) eq(de.days.length, STOPS[id].days.length, 'DE day count for ' + id);
});
print('data ok');
```
Run: `tests/run.sh` → `data ok`. (Jeśli `I18N_DE.cap` nie istnieje w tej formie, sprawdzić `grep -n "cap:" site2/src/i18n.js` i dostosować nazwę.)

- [ ] **Step 4: Build + zrzut** trasy `nature` i sprawdzenie dnia 3 w Đà Lạt w obu językach.

- [ ] **Step 5: Commit** `git commit -am "Đà Lạt: current Tà Năng status (see research/)"`

---

### Task 5: Budżet na osobę (A2, A7)

**Files:**
- Create: `research/budget-2026-10.md`
- Modify: `site2/src/data.js` (`COSTS`)
- Modify: `site2/src/plan.js` (`budgetFor`)
- Modify: `tests/plan.test.js`, `tests/data.test.js`
- Modify: `site2/src/app.js` (`renderFacts`, `renderStyles`, nowa `fmtMoney`)
- Modify: `site2/src/template.html` (siatka faktów 6 kolumn, przypis w stopce)
- Modify: `site2/src/i18n.js`

**Interfaces:**
- Produces: `COSTS = { currency, checked, nightPP: {stopId: [lo, hi]}, extrasPP: {stopId: [lo, hi]}, flightPP: [lo, hi], roadHourPP: [lo, hi], carHourPP: [lo, hi], dayPP: [lo, hi] }`; `budgetFor(route, costs) → [lo, hi]` (EUR na osobę, zaokrąglone do 10)

- [ ] **Step 1: Test czerwony.** Dopisać do `tests/plan.test.js`:

```js
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
print('budgetFor ok');
```
Run: `tests/run.sh` → FAIL `Can't find variable: budgetFor`.

- [ ] **Step 2: Implementacja w `plan.js`**

```js
/* Per-person estimate [low, high], rounded to 10: sharing a double room, no international flights.
   The gentle version travels by private car instead of vans and buses. */
function budgetFor(route, costs) {
  var lo = 0, hi = 0;
  function add(r, k) { lo += r[0] * k; hi += r[1] * k; }
  var road = route.gentle ? costs.carHourPP : costs.roadHourPP;
  route.stops.forEach(function (s) {
    var id = s.id === 'hanoiStop' ? 'hanoi' : s.id;
    add(costs.nightPP[id], s.n);
    if (costs.extrasPP[id]) add(costs.extrasPP[id], 1);
    if (s.leg) s.leg.segs.forEach(function (g) { if (g.mode === 'fly') add(costs.flightPP, 1); else add(road, g.h); });
  });
  add(costs.dayPP, route.days);
  return [Math.round(lo / 10) * 10, Math.round(hi / 10) * 10];
}
```
Run: `tests/run.sh` → `budgetFor ok`.

- [ ] **Step 3: Research cen (WebSearch, mode "extended"), zapis do `research/budget-2026-10.md`.** Dla każdej pozycji: przedział niski–wysoki w EUR na osobę, źródło (URL) i datę:
  - nocleg na osobę przy pokoju dwuosobowym, średnia półka (homestay/lodge/hotel 3*), grudzień: `saigon, dalat, cattien, mekong, phuquoc, central, puluong, ninhbinh, catba, caobang, babe, hanoi`;
  - jednorazowe atrakcje (`extrasPP`): rejs Lan Hạ 2D1N ze startem z Cát Bà (catba), przewodnicy Bidoup + Tà Năng/Lang Biang (dalat), trek i pozwolenie w Cát Tiên (cattien), łódź Tràng An (ninhbinh), auto z kierowcą na 2 dni (caobang, połowa ceny na osobę), łódź na jeziorze (babe), łódź na rynek (mekong);
  - lot krajowy w jedną stronę z bagażem rejestrowanym (`flightPP`), godzina limuzyny/busa (`roadHourPP`) i auta z kierowcą (`carHourPP`) na osobę przy dwóch osobach, jedzenie + Grab + wstępy dziennie (`dayPP`).
  Kurs: 1 EUR ≈ X VND z dnia researchu (zapisać).

- [ ] **Step 4: `COSTS` w `data.js`** (pod `WEATHER`). Wartości z kroku 3; wszystkie klucze muszą istnieć:

```js
/* Rough per-person prices in euros, [low, high]. Sources and exchange rate in research/budget-2026-10.md. */
const COSTS = {
  currency: 'EUR', checked: 'October 2026',
  nightPP: { saigon: [], dalat: [], cattien: [], mekong: [], phuquoc: [], central: [], puluong: [], ninhbinh: [], catba: [], caobang: [], babe: [], hanoi: [] },
  extrasPP: { catba: [], dalat: [], cattien: [], ninhbinh: [], caobang: [], babe: [], mekong: [] },
  flightPP: [], roadHourPP: [], carHourPP: [], dayPP: []
};
```
(Puste nawiasy wypełnić liczbami z researchu. Test z kroku 5 nie przejdzie, dopóki któryś zostanie pusty.)

- [ ] **Step 5: Test kompletności, do `tests/data.test.js`**

```js
function pair(r, what) { ok(r && r.length === 2 && r[0] > 0 && r[1] >= r[0], 'bad range for ' + what + ': ' + JSON.stringify(r)); }
Object.keys(STOPS).filter(function (id) { return id !== 'hanoiStop'; }).forEach(function (id) { pair(COSTS.nightPP[id], 'nightPP.' + id); });
Object.keys(COSTS.extrasPP).forEach(function (id) { pair(COSTS.extrasPP[id], 'extrasPP.' + id); });
['flightPP', 'roadHourPP', 'carHourPP', 'dayPP'].forEach(function (k) { pair(COSTS[k], k); });
print('costs ok');
```

- [ ] **Step 6: Wyświetlanie, w `app.js`** (obok `approx`):

```js
  function fmtMoney(r) {
    var loc = lang === 'de' ? 'de-DE' : 'en-GB';
    var n = function (v) { return v.toLocaleString(loc); };
    return lang === 'de' ? n(r[0]) + '–' + n(r[1]) + ' €' : '€' + n(r[0]) + '–' + n(r[1]);
  }
```
W `renderFacts` dopisać szósty element: na końcu łańcucha `$('#facts').innerHTML = …` zamienić końcowy `;` na:
```js
      +
      '<li><b class="money">' + fmtMoney(budgetFor(route, COSTS)) + '</b><span>' + T('f.budget') + '</span></li>';
```
W `renderStyles` po obliczeniu `st` doliczyć budżet do linii kart:
```js
      var built = buildRoute(id, {}, false, !!ROUTES[id].gentle);
      var st = routeStats(built);
      var stats = T('styles.stats', { f: st.flights, h: st.hikes, l: approx(st.longest).replace('≈ ', '') }) + ' · ' + fmtMoney(budgetFor(built, COSTS));
```
(zastępuje dwie linie z Task 3, Step 5).

- [ ] **Step 7: CSS i stopka.** W template: `.facts ul { grid-template-columns: repeat(6, minmax(0, 1fr)); }`, dodać `.facts b.money { font-size: clamp(18px, 2vw, 26px); }`. Reguły mobilne (`nth-child(4)`, `nth-child(n+4)`) zostają, bo przy 6 elementach dają układ 3+3. W stopce po `ft.notes.p` dodać `<p data-i18n="ft.budget"></p>`.
Klucze:
  - `UI.en`: `'f.budget': 'per person, rough',` · `'ft.budget': 'Budget: rough per-person ranges for two people sharing a double room, with domestic flights, transfers, food and the main activities, without international flights. Prices checked in October 2026.',`
  - `UI.de`: `'f.budget': 'pro Person, grob',` · `'ft.budget': 'Budget: grobe Spannen pro Person, zu zweit im Doppelzimmer, mit Inlandsflügen, Transfers, Essen und den wichtigsten Aktivitäten, ohne internationale Flüge. Preise im Oktober 2026 geprüft.',`

- [ ] **Step 8: Test + build + zrzuty** (`balanced` 1440 i 390, `de` 390). Kwota w faktach i na kartach jest identyczna dla tej samej trasy bez Sajgonu, a włączenie Sajgonu podnosi kwotę w faktach.

- [ ] **Step 9: Commit** `git commit -am "Add rough per-person budget per route"`

---

### Task 6: Daty podróży (A3). Wymaga daty od użytkownika

**Files:**
- Modify: `site2/src/data.js` (`TRIP`), `site2/src/plan.js` (`tripDate`), `tests/plan.test.js`
- Modify: `site2/src/app.js` (nagłówki dni ok. linii 485 i 504, `aria-label` komórek paska, `planText`)
- Modify: `site2/src/template.html` (CSS `.day-date`)

**Interfaces:**
- Produces: `TRIP = { start: 'YYYY-MM-DD' | null }`; `tripDate(startISO, day) → 'YYYY-MM-DD' | null`; w app `dateLabel(day) → string` (pusty, gdy brak daty)

- [ ] **Step 1: Test czerwony**

```js
eq(tripDate(null, 3), null, 'no start date');
eq(tripDate('2026-12-05', 1), '2026-12-05', 'day 1');
eq(tripDate('2026-12-05', 27), '2026-12-31', 'end of year');
eq(tripDate('2026-12-05', 28), '2027-01-01', 'new year');
print('tripDate ok');
```

- [ ] **Step 2: `plan.js`**

```js
/* Calendar date of trip day n (1-based) as YYYY-MM-DD, or null while no start date is set. UTC avoids time-zone shifts. */
function tripDate(startISO, day) {
  if (!startISO) return null;
  var p = startISO.split('-').map(Number);
  return new Date(Date.UTC(p[0], p[1] - 1, p[2] + day - 1)).toISOString().slice(0, 10);
}
```
oraz w `data.js`: `const TRIP = { start: null }; // Day 1, e.g. '2026-12-05'; null hides all dates`. Run: `tests/run.sh` → `tripDate ok`.

- [ ] **Step 3: `app.js`**

```js
  function dateLabel(day) {
    var iso = tripDate(TRIP.start, day);
    if (!iso) return '';
    var p = iso.split('-').map(Number);
    return new Date(Date.UTC(p[0], p[1] - 1, p[2])).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB',
      { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' });
  }
```
- W obu miejscach budujących `<div class="day-n mono">` (linie ok. 485 i 504) po `</b>` dodać `+ (dateLabel(N) ? '<span class="day-date">' + esc(dateLabel(N)) + '</span>' : '')`, gdzie `N` to odpowiednio `d.day` i `route.days`.
- W `renderShape` do `aria-label` komórki dopisać `(dateLabel(d.day) ? ' (' + dateLabel(d.day) + ')' : '')`.
- W `planText` po pierwszej linii: `if (TRIP.start) lines.push(dateLabel(1) + ' – ' + dateLabel(route.days));`
- CSS: `.day-date { display: block; font: 12px var(--mono); color: var(--muted); text-transform: none; letter-spacing: 0; margin-top: 4px; }` oraz w `@media (max-width: 640px)`: `.day-date { display: inline; margin: 0; }`.

- [ ] **Step 4: Sprawdzenie bez daty.** Build + zrzut `balanced`: strona wygląda identycznie jak przed zadaniem (brak dat).

- [ ] **Step 5: Zapytać użytkownika o datę dnia 1.** Gdy ją poda, ustawić `TRIP.start`, zrobić build i zrzut: nagłówki dni mają np. „Sat 5 Dec” / „Sa., 5. Dez.”, a skopiowany plan ma zakres dat.

- [ ] **Step 6: Commit** `git commit -am "Optional trip dates on days, strip and copied plan"`

---

### Task 7: Linki do rezerwacji w „Book ahead” (A8)

**Files:**
- Create: `research/booking-links-2026-10.md`, `tests/links.sh`
- Modify: `site2/src/data.js` (`BOOK_LINKS`), `site2/src/app.js` (`renderLogistics`), `site2/src/i18n.js` (`b.transfer`), `site2/src/template.html` (CSS `.book-links`)

**Interfaces:**
- Produces: `BOOK_LINKS = { '<klucz b.*>': [{ label: string, url: 'https://…' }] }`; `bookItem(key, vars) → HTML`

- [ ] **Step 1: Research.** Ustalić i zapisać w `research/booking-links-2026-10.md` (URL + dlaczego):
  - loty krajowe: `https://www.vietnamairlines.com/`, `https://www.vietjetair.com/`, `https://www.google.com/travel/flights`;
  - busy i limuzyny: `https://12go.asia/en/travel/vietnam`;
  - rejs z Cát Bà po Lan Hạ: 2 operatorów z dobrymi opiniami, którzy startują z Cát Bà, a nie z Tuần Châu;
  - Bidoup–Núi Bà: oficjalna strona parku lub kontakt, jeśli istnieje.

- [ ] **Step 2: `BOOK_LINKS` w `data.js`**, np.:

```js
/* Where to book; checked in October 2026 (research/booking-links-2026-10.md). Keys match the lines in "Book ahead". */
const BOOK_LINKS = {
  'b.xmas': [{ label: 'Vietnam Airlines', url: 'https://www.vietnamairlines.com/' }, { label: 'Vietjet', url: 'https://www.vietjetair.com/' }, { label: 'Google Flights', url: 'https://www.google.com/travel/flights' }],
  'b.transfer': [{ label: '12Go', url: 'https://12go.asia/en/travel/vietnam' }],
  'b.cruise': [ /* 2 operators from research, { label, url } */ ]
};
```

- [ ] **Step 3: Test, do `tests/data.test.js`**

```js
Object.keys(BOOK_LINKS).forEach(function (k) {
  ok(k in UI.en, 'BOOK_LINKS key without text: ' + k);
  BOOK_LINKS[k].forEach(function (l) { ok(/^https:\/\//.test(l.url) && l.label, 'bad link in ' + k); });
});
print('links data ok');
```

- [ ] **Step 4: `tests/links.sh`** (sieć, uruchamiany ręcznie, + `chmod +x`)

```bash
#!/bin/bash
# Checks that every URL in BOOK_LINKS answers with a status below 400.
cd "$(dirname "$0")/.."
grep -oE "https://[^']+" site2/src/data.js | grep -v "google.com/maps" | sort -u | while read -r u; do
  c=$(curl -s -o /dev/null -L -m 15 -A "Mozilla/5.0" -w "%{http_code}" "$u"); echo "$c $u"
done
```
Expected: same `2xx`/`3xx`. Strony linii lotniczych mogą odpowiadać 403 dla curla: wtedy sprawdzić ręcznie w przeglądarce i zapisać wynik w notatce.

- [ ] **Step 5: `renderLogistics` w `app.js`.** Nad funkcją dodać:

```js
  function bookItem(k, vars) {
    var links = (BOOK_LINKS[k] || []).map(function (l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    });
    return esc(T(k, vars)) + (links.length ? ' <span class="book-links">' + links.join(' · ') + '</span>' : '');
  }
```
W `renderLogistics` każde `book.push(T(...))` zamienić na `book.push(bookItem(...))` z tymi samymi argumentami. Po `b.caobang` dodać `book.push(bookItem('b.transfer'));`. Render listy bez podwójnego escapowania: `$('#book-list').innerHTML = book.map(function (t) { return '<li>' + t + '</li>'; }).join('');`

- [ ] **Step 6: Klucze i CSS.** `UI.en['b.transfer'] = 'Limousine vans and buses between towns, a day or two ahead.'` · `UI.de['b.transfer'] = 'Limousinen-Vans und Busse zwischen den Orten, ein bis zwei Tage vorher.'`. CSS: `.book-links { display: block; font-size: 13px; margin-top: 2px; }`.

- [ ] **Step 7: Test + build + zrzut sekcji logistyki. Commit** `git commit -am "Booking links in Book ahead"`

---

### Task 8: Menu sekcji i przycisk „do góry” (A9)

**Files:**
- Modify: `site2/src/template.html` (HTML po `.facts`, `id="top"` na `<header class="hero">`, CSS, print)
- Modify: `site2/src/app.js` (obserwator hero, przed końcowym `render()`)
- Modify: `site2/src/i18n.js`

- [ ] **Step 1: HTML** po `<div class="facts">…</div>`:

```html
<nav class="secnav" aria-label="Sections" data-i18n-aria="nav.aria"><div class="wrap">
  <a href="#styles" data-i18n="nav.styles">Trip styles</a>
  <a href="#shape" data-i18n="nav.shape">At a glance</a>
  <a href="#days" data-i18n="nav.days">Day by day</a>
  <a href="#weather" data-i18n="nav.weather">Weather</a>
  <a href="#logistics" data-i18n="nav.logistics">Before you go</a>
</div></nav>
<a class="totop" id="totop" href="#top" aria-label="Back to top" data-i18n-aria="nav.top" hidden><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg></a>
```
oraz `<header class="hero" id="top">`.

- [ ] **Step 2: CSS**

```css
html { scroll-padding-top: calc(env(safe-area-inset-top, 0px) + 56px); }
.secnav { position: sticky; top: 0; z-index: 30; background: var(--surface); border-bottom: 1px solid var(--line); }
.secnav .wrap { display: flex; gap: 18px; overflow-x: auto; scrollbar-width: none; padding-right: 112px; }
.secnav .wrap::-webkit-scrollbar { display: none; }
.secnav a { flex: none; padding: 12px 0; font-size: 14px; font-weight: 500; color: var(--muted); text-decoration: none; }
.secnav a:hover { color: var(--ink); }
.totop { position: fixed; z-index: 35; right: 16px; bottom: calc(env(safe-area-inset-bottom, 0px) + 16px); width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: var(--surface); color: var(--ink); border: 1px solid var(--line); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18); }
```
Zmienić `.map-col { … top: calc(env(safe-area-inset-top, 0px) + 64px); }`, bo mapa nie może wchodzić pod menu. W `@media print` dopisać `.secnav, .totop` do listy ukrywanych.

- [ ] **Step 3: app.js** przed końcowym `render();`:

```js
  /* back-to-top button: shown once the photo opener has scrolled away */
  var totop = $('#totop'), hero = $('.hero');
  if (totop && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { totop.hidden = es[0].isIntersecting; }).observe(hero);
  }
```

- [ ] **Step 4: Klucze.** EN: `'nav.aria': 'Sections', 'nav.styles': 'Trip styles', 'nav.shape': 'At a glance', 'nav.days': 'Day by day', 'nav.weather': 'Weather', 'nav.logistics': 'Before you go', 'nav.top': 'Back to top',` · DE: `'nav.aria': 'Abschnitte', 'nav.styles': 'Reisestile', 'nav.shape': 'Auf einen Blick', 'nav.days': 'Tag für Tag', 'nav.weather': 'Wetter', 'nav.logistics': 'Vor der Reise', 'nav.top': 'Nach oben',`

- [ ] **Step 5: Test + build + zrzuty** 1440 i 390 (EN, DE). Menu nie nachodzi na przełącznik EN/DE, na 390 px przewija się w poziomie bez poziomego scrolla całej strony, a mapa na desktopie zaczyna się pod menu.

- [ ] **Step 6: Commit** `git commit -am "Section menu and back-to-top button"`

---

### Task 9: Lista pakowania w wersji „gentle” (A10)

**Files:** Modify: `site2/src/app.js` (`renderLogistics`, linia z `T('p.hike')`), `site2/src/i18n.js`

- [ ] **Step 1:** W tablicy `pack` zamienić `T('p.hike')` na `T(route.gentle ? 'p.walk' : 'p.hike')`.
- [ ] **Step 2: Klucze.** EN `'p.walk': 'Comfortable walking shoes with grip: old towns and boat piers can be slippery.'` · DE `'p.walk': 'Bequeme Schuhe mit gutem Profil: Altstädte und Bootsstege können rutschig sein.'`
- [ ] **Step 3: Test + build + zrzut `classic`** (lista „Pack” bez butów trekkingowych). **Commit** `git commit -am "Gentle trips: walking shoes instead of hiking shoes"`

---

### Task 10: Publikacja artifactu, plik offline i test na iPhonie (A1, część 1)

- [ ] **Step 1: Pełny przegląd.** `tests/run.sh` (ALL PASS), `python3 site2/build.py`, zrzuty: `classic`/`balanced`/`nature`/`culture`/`slow` na 1440 oraz `en`/`de` na 390. Obejrzeć każdy zrzut.
- [ ] **Step 2: Artifact.** `Artifact read` na https://claude.ai/artifact/V3ZVLCQNnvWDHre3F4GaPU, potem publish z `url` = ten link, `file_path` = `$P/site2/out/web/index.html` i `files` = wszystkie `img/*.jpg` (mapa `"img/x.jpg": "site2/out/web/img/x.jpg"`). Bez `icon`.
- [ ] **Step 3: Plik offline:** `cp "$P/site2/out/offline/Vietnam-in-16-days.html" "$HOME/Desktop/CLAUDE roboczy plik/"`
- [ ] **Step 4: Test na iPhonie (robi użytkownik).** Wysłać plik offline do siebie na WhatsAppie, otworzyć na iPhonie i sprawdzić, czy widać karty stylów i plan dni. Wynik zapisać w pamięci. Jeśli strona jest pusta albo ma tylko nagłówek, to potwierdza A1 i Task 11 staje się konieczny.
- [ ] **Step 5: Commit + pamięć.** `git commit -am "Release: audit fixes"`; w `wycieczka-wietnam-grudzien-2026.md` dopisać wersję 5 i co się zmieniło.

---

### Task 11: GitHub Pages: zwykły link dla kolegi (A1, część 2). Tylko po „tak” użytkownika

Przed startem użyć skilla `github-na-macbooku` (konto `grzegorzfrskiba-hub`, `gh` w `~/.local/bin`).

- [ ] **Step 1: Zapytać użytkownika** o zgodę na **publiczne** repo i stronę `https://grzegorzfrskiba-hub.github.io/vietnam-december/`. Darmowe Pages wymaga publicznego repo. Strona nie ma nazwisk ani danych osobowych, ale będzie dostępna dla każdego, kto zna link. Bez zgody: koniec zadania.
- [ ] **Step 2: Kopia builda do `docs/`**

```bash
cd "$HOME/Desktop/CLAUDE roboczy plik/vietnam-planner" && rm -rf docs && cp -R site2/out/web docs && touch docs/.nojekyll && git add docs && git commit -qm "Publish build to docs/ for GitHub Pages"
```

- [ ] **Step 3: Repo i Pages**

```bash
~/.local/bin/gh repo create grzegorzfrskiba-hub/vietnam-december --public --source=. --remote=origin --push
~/.local/bin/gh api -X POST repos/grzegorzfrskiba-hub/vietnam-december/pages -f "source[branch]=main" -f "source[path]=/docs"
```
(Jeśli gałąź nazywa się `master`, użyć `master`.)

- [ ] **Step 4: Weryfikacja:** po 1–3 min `curl -s -o /dev/null -w "%{http_code}" https://grzegorzfrskiba-hub.github.io/vietnam-december/` → `200`. Otworzyć link w przeglądarce wbudowanej i sprawdzić karty, mapę i zdjęcia.
- [ ] **Step 5: Kolejne aktualizacje:** po każdym buildzie `rm -rf docs && cp -R site2/out/web docs && touch docs/.nojekyll && git add -A && git commit -m "…" && git push`. Zapisać to w pamięci razem z URL strony.

---

## Kolejność i zależności

```
Task 0 ─┬─ 1 ─ 2 ─ 3 ─ 5 ─┐
        ├─ 4 (research) ──┤
        ├─ 6 (czeka na datę, można zrobić kod z TRIP.start = null)
        ├─ 7 ─ 8 ─ 9 ─────┴─ 10 ─ 11 (po zgodzie)
```
Task 3 musi być przed 5, bo budżet dopisuje się do linii statystyk na kartach. Task 2 musi być przed 3, bo `renderFacts` w Task 3 zawiera już etykietę z Task 2.

## Decyzje, które musi podjąć użytkownik

1. **Data dnia 1** (Task 6). Do tego czasu daty są ukryte.
2. **Zgoda na publiczne GitHub Pages** (Task 11).
3. **Test na iPhonie** (Task 10, Step 4): tylko użytkownik może go wykonać.
4. **Waluta budżetu:** w planie EUR, wspólna dla Ciebie i kolegi. Jeśli wolisz PLN, zmienić `COSTS.currency` i `fmtMoney`.
