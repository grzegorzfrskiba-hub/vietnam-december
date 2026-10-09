# Planer „Vietnam in December” — instrukcja dla Claude

Trójjęzyczna (EN/DE/PL) strona do zaplanowania wycieczki po Wietnamie 11–25.12.2026. Odbiorcy: Grzegorz (organizator), jego kolega z Niemiec i rodzice kolegi (50–60 lat, czytają po niemiecku na telefonie). Mają w 10 minut zrozumieć trasę i razem wybrać wariant. Model jest celowo prosty: 5 gotowych tras i kilka zamian, bez suwaków i bez silnika planowania.

Co jest do zrobienia i w jakiej kolejności: [notes/backlog.md](notes/backlog.md). Ostatni audyt: [notes/audyt-2026-10-09.md](notes/audyt-2026-10-09.md).

## Gdzie co jest

| Co | Gdzie |
|---|---|
| Źródła strony | `site2/src/`: `data.js` (trasy, dni, czasy przejazdów, pogoda, ceny, treść EN), `i18n.js` (UI EN i DE + treść DE), `i18n.pl.js` (UI i treść PL), `app.js` (logika i render), `plan.js` (czyste funkcje testowane w jsc: składanie trasy i przejazdów, statystyki, budżet, daty), `template.html` (HTML i CSS), `basemap.js` (kontury mapy) |
| Build | `python3 site2/build.py` → `site2/out/web/` (fragment + `img/`, do artifactu), `site2/out/pages/` (pełny dokument z viewport + `img/`, do `docs/`), `site2/out/offline/Vietnam-in-December.html` (jeden plik ze zdjęciami) |
| Strona publiczna | `docs/` (kopia `site2/out/pages/` + `.nojekyll`) → https://grzegorzfrskiba-hub.github.io/vietnam-december/ (GitHub Pages z `/docs` na `main`, repo publiczne: github.com/grzegorzfrskiba-hub/vietnam-december) |
| Artifact (prywatny) | https://claude.ai/artifact/V3ZVLCQNnvWDHre3F4GaPU |
| Plik offline dla grupy | `~/Desktop/CLAUDE roboczy plik/Vietnam-in-December.html` (poza repo) |
| Zdjęcia | `photos/` (oryginały + `meta.json`; w `.gitignore`, tylko na tym Macu) |
| Testy | `tests/` |
| Źródła faktów i cen | `research/` (każda notatka z URL i datą) |
| Notatki projektu | `notes/`: `backlog.md` (kolejka prac), `audyt-*.md` (audyty), `plans/` (plany wdrożenia), `design-research/` (badanie, jak dobre strony pokazują trasy podróży — dlaczego gotowe trasy zamiast suwaków) |
| Logi pracy subagentów | `.superpowers/sdd/` (lokalnie, w `.gitignore`) |

## Ustalenia — nie zmieniać bez pytania

- Przylot pt 11.12.2026 06:35 do Hồ Chí Minh City (VN30). Wylot pt 25.12.2026 04:30 z Hà Nội (CA884, przesiadka na CA931). 14 nocy, dzień 15 to wylot.
- Ostatnia noc (Wigilia) w hotelu w Starym Mieście Hà Nội, kolacja wigilijna, taxi ok. 1:30 na lotnisko Nội Bài.
- 5 stylów: Easy classics (domyślny, „z rodzicami”), Balanced, Nature & hiking, Culture & food, Slow & beach. Do tego zamiany either/or i wybór „gdzie idzie dodatkowa noc”.
- Przełączniki, oba domyślnie włączone: „3 dni w HCMC na start” (wliczone w 14 nocy) i „Travelling with older parents”, czyli wersja łagodna.
- Cát Bà zawsze ma co najmniej 3 noce. Przy skracaniu tnie się Hà Nội.
- Hội An i Huế w porze deszczowej to świadomy wybór; każdy dzień ma tam plan na deszcz.
- Tà Năng tylko z licencjonowanym przewodnikiem.
- Klucze localStorage `vn16-plan-v3` i `vn16-lang` zostają, żeby odbiorcy nie stracili wyborów.

## Zasady pracy

- **Jedna sesja naraz w tym repo.** Na starcie: `git status -sb` i `git log --oneline -5`. Jeśli coś zmienia się w tle albo inna sesja pracuje (lista sesji), zatrzymaj się i zapytaj.
- **Bez zgody użytkownika nie rób:** `git push`, publikacji artifactu, nadpisania pliku offline na Pulpicie ani przebudowy `docs/`. Commituj, gdy użytkownik o to prosi.
- **Repo jest publiczne.** Wszystko, co trafia do commita (także `notes/` i ten plik), widać na GitHubie. Nie dopisuj danych osobowych.
- **Każdy tekst w trzech językach:**
  - EN w `data.js` albo `UI.en`;
  - DE w `I18N_DE` albo `UI.de`;
  - PL w `I18N_PL` albo `UI.pl`.

  Testy pilnują kompletności kluczy.
- **Styl tekstów:**
  - DE: forma „ihr/euch”.
  - PL: 2. osoba liczby mnogiej do grupy, przyciski i etykiety w liczbie pojedynczej. Wietnamskie nazwy z diakrytykami i bez odmiany. Pisz „miejsce”, nie „przystanek”, i „u gospodarzy” zamiast „homestay”.
  - Liczebniki przez `countWord(key, n)` / `nightForm` (klucze `.one/.few/.many`). Jednoliterowe polskie wyrazy wiąże `tieShortWords`.
- **Kod:** ES5 (`var`, `function`), bez zewnętrznych zależności, każdy tekst wstawiany do HTML przez `esc()`, kolory tylko przez zmienne CSS z `:root`.
- **Fakty i ceny** zapisuj w `research/` ze źródłem i datą.
- **Plany, audyty i notatki** zapisuj w `notes/`, nie w `~/Desktop/CLAUDE roboczy plik/docs/`. Po skończonej pracy zaktualizuj `notes/backlog.md`.

## Jak sprawdzać

- `bash tests/run.sh` → `ALL PASS`. Testy działają w JavaScriptCore, bo node nie ma. `tests/routes.test.js` buduje każdą kombinację wyborów i sprawdza 14 nocy, ciągłe dni, przejazdy, Cát Bà ≥ 3 z rejsem na drugą noc i wersję łagodną bez wędrówek.
- `python3 site2/build.py`.
- `tests/shot.sh <classic|balanced|nature|culture|slow|en|de|pl> <szerokość> <plik.png>` robi zrzut przez Chrome headless. Nie używaj `--dump-dom`, bo się zawiesza.
- `bash tests/links.sh` sprawdza kody HTTP linków rezerwacji.
- **Pułapki:**
  - Wbudowana przeglądarka Claude nie otwiera `file://`, więc stronę na żywo testuj pod adresem GitHub.
  - `shot.sh` renderuje stronę w ramce (iframe), więc nie wykryje braku viewport. Po buildzie sprawdź, że `docs/index.html` zaczyna się od `<!doctype html>` i ma `<meta name="viewport">`.
  - W nowym worktree nie ma `photos/`. Przed buildem podlinkuj ten katalog z głównej kopii.

## Publikacja (tylko po „tak” użytkownika)

1. `bash tests/run.sh && python3 site2/build.py`
2. **Artifact:** najpierw `Artifact read` na URL artifactu. Potem publish z `url` = ten link, `file_path` = `site2/out/web/index.html` i `files` = zmienione `img/*.jpg` z `site2/out/web/img/`.
3. **Plik offline:** `cp site2/out/offline/Vietnam-in-December.html ~/Desktop/"CLAUDE roboczy plik"/`
4. **Pages:** `cp -R site2/out/pages/. docs/`, potem commit i `git push`. Kopiuj z `out/pages`, nie z `out/web`: bez viewport telefony dostają pomniejszony układ komputerowy.
