# Co dalej — planer „Vietnam in December”

Stan na 9.10.2026: opublikowana jest paczka (a), `c77916b` (strona, artifact, plik offline). Szczegóły każdego punktu: [audyt-2026-10-09.md](audyt-2026-10-09.md).

Zasada: pracuje jedna sesja naraz. Po skończonej paczce odhacz punkty i dopisz ją w sekcji „Zrobione”.

## Kolejka

### (a) Logika tras — zrobione i opublikowane 9.10.2026
- [x] Cát Bà ≥ 3 noce w każdej kombinacji. Dziś reguła jest łamana w 28 ze 138 kombinacji:
  - Balanced + dni w HCMC + dodatkowa noc „Ninh Bình”;
  - Nature & hiking + zamiana „zatoka zamiast dolin”, bo Cát Bà dziedziczy 2 noce Pù Luông.
- [x] Rejs po Lan Hạ na drugą noc na Cát Bà. Dziś jest zawsze ostatnią nocą, więc w domyślnej trasie wypada w noc 23/24.12, a łódź wraca ok. 12:00. Notka `n.cruise`: zmienić „ok. 11” na „ok. 12:00”.
- [x] Dojazd z noclegu na lotnisko wylotu w `buildLeg`: Đà Lạt, Phú Quốc, Huế i hotel w HCMC (ten ostatni tylko po dniach w HCMC).
- [x] Poprawić `ROAD`:
  - Ninh Bình–Cát Bà: 4 h;
  - Hà Nội–Cát Bà: 4 h;
  - Pù Luông–Ninh Bình: 3 h.
- [x] Zaznaczona karta stylu ma pokazywać to samo co pasek liczb (Easy classics po wyłączeniu wersji łagodnej).
- [x] Plany jednonocne a następny przejazd:
  - Ninh Bình na 1 noc → 8 h do Cao Bằng;
  - Mekong na 1 noc → notka „morning flight”.
- [x] Test, który przechodzi wszystkie kombinacje (14 nocy, ciągłe dni, Cát Bà ≥ 3, wersja łagodna bez wędrówek, rejs nie ostatniej nocy).

### (b) Teksty i fakty
- [ ] Opisy, które obiecują coś, czego wariant nie ma:
  - Đà Lạt i Tà Năng w wersji łagodnej;
  - Balanced: „two hiking days”, a pasek pokazuje 3, w wersji łagodnej 0;
  - Hội An & Huế na 2 noce, bez grobowców;
  - wersja łagodna w Hội An idzie na stare miasto o zmroku, a ramka „Skip” odradza je o 19;
  - easy rider (motocykl) w wersji łagodnej;
  - „the bay” na trasach bez Cát Bà;
  - `x.p2`;
  - „mapa podąża za przewijaniem”, choć na telefonie stoi;
  - lista miejsc na karcie nie nadąża za zamianami.
- [ ] Teksty, które zdezaktualizowała paczka (a):
  - Easy classics i Culture bez wersji łagodnej mają teraz 1 i 0 dni wędrówek (dzień Ngự Lâm na Cát Bà jest tylko przy 4 nocach); Balanced ma 2 (bez HCMC) albo 1 (z HCMC), więc „two hiking days” w `why` pasuje tylko bez HCMC;
  - przy 3 nocach na Cát Bà Việt Hải jest tylko w ramach rejsu: `gem` Cát Bà, `swaps.pts.catba` („a car-free village”) i `b.cruise` powinny mówić, żeby wybrać rejs, który tam zawija (Full Moon tak; Cat Ba Ventures do sprawdzenia);
  - Nature: „two long travel days” i „fewest towns” sprawdzić od nowa, bo zamiana „zatoka czy doliny” nie jest już oferowana;
  - `home.d`: dopisać, że 24.12 przyjeżdżacie z Cát Bà ok. 12:00–13:00 (wyjazd po śniadaniu, 4 h).
- [ ] Fakty do poprawienia:
  - Świątynia Literatury od 8:00;
  - Bản Giốc zimą ok. 7:30, a „weekend” nie pasuje do 22/23.12;
  - słoneczniki i różowa trawa w grudniu;
  - morze ok. 22 °C;
  - Phong Nha od końca stycznia;
  - świątynie w Hoa Lư;
  - katedra 24.12: ulice zamknięte dla aut w godz. 18–24;
  - lot Đà Lạt–Đà Nẵng w stopce.
- [ ] „Nature & hiking” pokazuje 0 dni wędrówek, gdy wersja łagodna jest włączona. Dodać dopisek na karcie, np. „0 (3 bez wersji łagodnej)”.
- [ ] Budżet trybu z rodzicami: doliczyć auta z kierowcą na wycieczki, przejazd przez Hải Vân, Cần Giờ, kurs gotowania i bilety w Huế.
- [ ] „1 h 5” i „1 Std. 5” zmienić na „1 h 5 min” i „1 Std. 5 Min.”.

### (c) Telefon, wydruk, dostępność, wydajność
- [ ] Przełącznik języka zasłania menu sekcji: przy 390 i 430 px stuknięcie w „Weather” trafia w przełącznik, a z PL zasłonięte jest też „Day by day”.
- [ ] Wydruk:
  - tytuł czarny na ciemnym tle nagłówka;
  - wybór dodatkowej nocy ściśnięty do wąskiej kolumny;
  - ok. 5 prawie pustych stron.
- [ ] Dostępność:
  - na telefonie mapa jest „przyciskiem” bez działania;
  - powiększona mapa nie ma roli okna dialogowego;
  - ok. 74 przystanki klawiatury w samych galeriach.
- [ ] Mniejsze wersje zdjęć (`srcset`). Dziś przed pierwszym przewinięciem ładuje się ok. 2,2 MB.

### (d) Niemiecki
- [ ] Lista ok. 35 poprawek: Aneks A w [audyt-2026-10-09.md](audyt-2026-10-09.md).

### (e) Ulepszenia (do decyzji)
- [ ] Link do konkretnego wariantu, dołączany też do tekstu „Kopiuj plan na WhatsApp”.
- [ ] Podgląd linku w WhatsAppie (tytuł, opis, zdjęcie, ikonka) i tytuł karty w języku strony.
- [ ] Lista „Zarezerwuj do…” z datami.
- [ ] Łączne godziny w drodze przy każdym stylu.

## Do sprawdzenia poza kodem (organizator)
- [ ] Godzina CA884 na bilecie. Zimowy rozkład Air China podaje 04:00, nie 04:30 (AeroRoutes, 4.08.2026). Jeśli to prawda, taxi powinno jechać ok. 0:30–0:45.
- [ ] VN30: czy na bilecie jest SGN (Tân Sơn Nhất), a nie Long Thành, które ma ruszyć 1.12.2026.
- [ ] Lot Đà Lạt–Đà Nẵng (Easy classics) zarezerwować w pierwszej kolejności. Vietnam Airlines lata ok. 1× dziennie, Vietjet ok. 3× w tygodniu.
- [ ] Hotel w HCMC od nocy 10/11.12 albo gwarantowane wczesne zameldowanie, bo przylot jest o 6:35.
- [ ] Stolik na kolację wigilijną blisko katedry. Ulice wokół są zamknięte dla aut w godz. 18–24.
- [ ] Czy plik offline wysłany przez WhatsApp otwiera się na iPhonie z JavaScriptem. Podgląd może pokazać pustą stronę.

## Zrobione
- **9.10.2026:** paczka (a) „Logika tras”: składanie trasy w `plan.js`, test wszystkich kombinacji (`tests/routes.test.js`, dziś 106), Cát Bà ≥ 3 noce (bez nocy „Ninh Bình” w Balanced, bez zamiany zatoki w Nature), rejs na drugą noc, dojazdy na lotniska, czasy w `ROAD` (`research/road-times-2026-10.md`), notki po planach jednonocnych, karta stylu = pasek liczb. Commity `36d4712`…`700ed9c`, opublikowane w `c77916b` (strona, artifact, plik offline).
- **9.10.2026:** wersja polska (EN/DE/PL), odmiana liczebników, pełny dokument HTML z viewport dla GitHub Pages. Opublikowane (`f07930b`).
- **9.10.2026:** audyt całej strony: [audyt-2026-10-09.md](audyt-2026-10-09.md).
- **8.10.2026:** poprawki z pierwszego audytu: statystyki na kartach, budżet, daty, linki rezerwacji, menu sekcji, Tà Năng tylko z przewodnikiem. Plan: [plans/2026-10-08-vietnam-planer-poprawki-z-audytu.md](plans/2026-10-08-vietnam-planer-poprawki-z-audytu.md).
- **8.10.2026:** badanie, jak dobre strony pokazują trasy podróży, które uzasadniło prosty model (gotowe trasy zamiast suwaków): [design-research/itinerary-benchmarks.md](design-research/itinerary-benchmarks.md).
- **8.10.2026:** realne daty (14 nocy, Wigilia w Hà Nội) i styl Easy classics z wersją łagodną.
