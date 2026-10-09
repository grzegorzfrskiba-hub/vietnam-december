# Co dalej — planer „Vietnam in December”

Stan na 9.10.2026: opublikowane są wszystkie paczki z audytu (a)–(e), ostatnio mapki na kartach stylów (strona, artifact v29, plik offline). Zostały decyzje użytkownika i sprawdzenia poza kodem (niżej). Szczegóły każdego punktu: [audyt-2026-10-09.md](audyt-2026-10-09.md).

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

### (b) Teksty i fakty — zrobione i opublikowane 9.10.2026
- [x] Opisy, które obiecują coś, czego wariant nie ma:
  - Đà Lạt i Tà Năng w wersji łagodnej;
  - Balanced: „two hiking days”, a pasek pokazuje 3, w wersji łagodnej 0;
  - Hội An & Huế na 2 noce, bez grobowców;
  - wersja łagodna w Hội An idzie na stare miasto o zmroku, a ramka „Skip” odradza je o 19;
  - easy rider (motocykl) w wersji łagodnej;
  - „the bay” na trasach bez Cát Bà;
  - `x.p2`;
  - „mapa podąża za przewijaniem”, choć na telefonie stoi;
  - lista miejsc na karcie nie nadąża za zamianami.
- [x] Teksty, które zdezaktualizowała paczka (a):
  - Easy classics i Culture bez wersji łagodnej mają teraz 1 i 0 dni wędrówek (dzień Ngự Lâm na Cát Bà jest tylko przy 4 nocach); Balanced ma 2 (bez HCMC) albo 1 (z HCMC), więc „two hiking days” w `why` pasuje tylko bez HCMC;
  - przy 3 nocach na Cát Bà Việt Hải jest tylko w ramach rejsu: `gem` Cát Bà, `swaps.pts.catba` („a car-free village”) i `b.cruise` powinny mówić, żeby wybrać rejs, który tam zawija (Full Moon tak; Cat Ba Ventures do sprawdzenia);
  - Nature: „two long travel days” i „fewest towns” sprawdzić od nowa, bo zamiana „zatoka czy doliny” nie jest już oferowana;
  - `home.d`: dopisać, że 24.12 przyjeżdżacie z Cát Bà ok. 12:00–13:00 (wyjazd po śniadaniu, 4 h).
- [x] Fakty do poprawienia (źródła: `research/facts-2026-10.md`):
  - Świątynia Literatury od 8:00;
  - Bản Giốc zimą ok. 7:30, a „weekend” nie pasuje do 22/23.12;
  - słoneczniki i różowa trawa w grudniu;
  - morze ok. 22 °C;
  - Phong Nha od końca stycznia;
  - świątynie w Hoa Lư;
  - katedra 24.12: ulice zamknięte dla aut w godz. 18–24;
  - lot Đà Lạt–Đà Nẵng w stopce.
- [x] „Nature & hiking” pokazuje 0 dni wędrówek, gdy wersja łagodna jest włączona. Dodać dopisek na karcie, np. „0 (3 bez wersji łagodnej)”.
- [x] Budżet trybu z rodzicami: doliczyć auta z kierowcą na wycieczki, przejazd przez Hải Vân, Cần Giờ, kurs gotowania i bilety w Huế.
- [x] „1 h 5” i „1 Std. 5” zmienić na „1 h 5 min” i „1 Std. 5 Min.”.

### (c) Telefon, wydruk, dostępność, wydajność — zrobione i opublikowane 9.10.2026
- [x] Przełącznik języka zasłania menu sekcji: przy 390 i 430 px stuknięcie w „Weather” trafia w przełącznik, a z PL zasłonięte jest też „Day by day”.
- [x] Wydruk:
  - tytuł czarny na ciemnym tle nagłówka;
  - wybór dodatkowej nocy ściśnięty do wąskiej kolumny;
  - ok. 5 prawie pustych stron.
- [x] Dostępność:
  - na telefonie mapa jest „przyciskiem” bez działania;
  - powiększona mapa nie ma roli okna dialogowego;
  - ok. 74 przystanki klawiatury w samych galeriach.
- [x] Mniejsze wersje zdjęć (`srcset`). Dziś przed pierwszym przewinięciem ładuje się ok. 2,2 MB.
- [ ] Zauważone przy okazji, poza zakresem: przyciski języka mają 40 × 32 px, mniej niż zalecane 44 px do stuknięcia.

### (d) Niemiecki — zrobione i opublikowane 9.10.2026
- [x] Lista ok. 35 poprawek: Aneks A w [audyt-2026-10-09.md](audyt-2026-10-09.md). Przy okazji paczki (b) weszły już, bo te zdania i tak były przepisywane:
  - nr 9 (`fmt.hm`) i nr 10 (Phong Nha);
  - nr 12 tylko w `b.cruise` („Bootstour mit Übernachtung”); „Kreuzfahrt” zostaje w `instead` Cát Bà i w dniu z rejsem;
  - nr 19 tylko „Gebaut für” w `why` Sanfte Klassiker;
  - nr 32 tylko w `home.d`; `b.xmas` nadal ma „Weihnachtsessen”.
- [ ] Z Aneksu A świadomie niezrobione (do decyzji albo zbyt ogólne):
  - „Hồ Chí Minh City” czy „Ho-Chi-Minh-Stadt” (nr 33): zostaje „Hồ Chí Minh City”, tak samo jak na mapie i w EN/PL;
  - liczby raz cyfrą, raz słownie, i wielkość liter w nazwach dań (nr 34): bez jednej reguły, nie ruszałem;
  - „nachts kühl” zamiast „kalte Nächte” w pogodzie (nr 33, opcjonalne).

### (e) Ulepszenia — zrobione i opublikowane 9.10.2026
Decyzje użytkownika (9.10.2026): link zawsze do strony na GitHubie, podgląd po niemiecku, do godzin w drodze także pobudki przed 6:00, lista rezerwacji bez dat, tylko od najpilniejszego.
- [x] Link do konkretnego wariantu, dołączany też do tekstu „Kopiuj plan na WhatsApp”. Format: `#nature&south=mekong&night=…&hcmc=1&gentle=0&lang=de`; stare linki `#classic` i `#de` działają dalej. Pasek adresu się nie zmienia (kotwice menu i dni nadal z niego korzystają).
- [x] Podgląd linku w WhatsAppie (tytuł, opis, zdjęcie, ikonka) i tytuł karty w języku strony. Znaczniki og tylko na stronie GitHuba (`site2/build.py`, `PREVIEW`), zdjęcie `img/og.jpg` 1200 × 630.
- [x] Lista „Zarezerwuj do…”: bez dat, od najpilniejszego. Doszły dwie pozycje: hotel w HCMC od nocy 10/11.12 (przy dniach w HCMC) i lot Đà Lạt–Đà Nẵng (gdy jest na trasie).
- [x] Łączne godziny w drodze przy każdym stylu i liczba pobudek przed 6:00 (dni z `early: true` w `data.js`, na dniu plakietka „Up before 6”). Nocna taksówka 15. dnia nie jest liczona, bo jest w każdej trasie.

## Decyzje użytkownika (z paczki (b)): wszystkie cztery zostają bez zmian (9.10.2026)
- [x] Zostaje jak jest. Việt Hải w wersji łagodnej: rejs Full Moon dojeżdża tam tylko rowerem (5 km po płaskim), a wersja łagodna obiecuje „bez rowerów”. Pominąć, dopytać operatora o melex czy zostawić? Dziś `b.cruise` mówi uczciwie „rowerem”.
- [x] Zostaje jak jest. Link Cat Ba Ventures w `b.cruise` (drugi): jego rejs 2D1N to wyprawa kajakowa bez Việt Hải. Zostawić czy usunąć?
- [x] Zostaje jak jest. Dopisek „0 (3 bez wersji łagodnej)” jest na wszystkich kartach stylów, gdzie liczby się różnią. Zostawić czy tylko przy Nature?
- [x] Zostaje jak jest. Ceny bez źródła, przyjęte jako szacunki (`research/budget-2026-10.md`): auto na dzień w Pù Luông, auto Tam Cốc–Hoa Lư, jednodniowy Tà Năng.

## Do sprawdzenia poza kodem (organizator)
- [ ] Godzina CA884 na bilecie. Zimowy rozkład Air China podaje 04:00, nie 04:30 (AeroRoutes, 4.08.2026). Jeśli to prawda, taxi powinno jechać ok. 0:30–0:45.
- [ ] VN30: czy na bilecie jest SGN (Tân Sơn Nhất), a nie Long Thành, które ma ruszyć 1.12.2026.
- [ ] Lot Đà Lạt–Đà Nẵng (Easy classics) zarezerwować w pierwszej kolejności. Vietnam Airlines lata ok. 1× dziennie, Vietjet ok. 3× w tygodniu.
- [ ] Hotel w HCMC od nocy 10/11.12 albo gwarantowane wczesne zameldowanie, bo przylot jest o 6:35.
- [ ] Stolik na kolację wigilijną blisko katedry. Ulice wokół są zamknięte dla aut w godz. 18–24.
- [ ] Czy plik offline wysłany przez WhatsApp otwiera się na iPhonie z JavaScriptem. Podgląd może pokazać pustą stronę.

## Zrobione
- **9.10.2026:** mała mapka trasy na każdej karcie stylu (cały kraj i północ, miejsca spoza trasy jako blade kropki; zaznaczona karta nadąża za zamianami; na telefonie pionowo pod krótszym zdjęciem; w wydruku ukryta). Commit `1215a90`, artifact v29.
- **9.10.2026:** notka w karcie „Loty”: godziny lotów i przejazdów mogą się zmienić, sprawdzić na bilecie i u przewoźnika (EN/DE/PL). Do tego `tests/probe.sh` z sondami `nav.js` i `link.js`. Opublikowane w `e8417d7` (strona, artifact v28, plik offline).
- **9.10.2026:** paczka (e) „Ulepszenia”: link do wariantu w kopiowanym planie, podgląd linku po niemiecku z ikonką i tytułem karty w języku strony, „Vorab buchen” od najpilniejszego z hotelem na 10/11.12 i lotem Đà Lạt–Đà Nẵng, godziny w drodze i wczesne pobudki na kartach stylów. Commity `230e171`…`0910ac3`, opublikowane w `08d24ee` (strona, artifact v27, plik offline).
- **9.10.2026:** paczka (d) „Niemiecki”: punkty 1–34 z Aneksu A poza trzema wymienionymi w sekcji (d). Typy dni („Wandertag”, „Naturtag”, „Kulturtag”), „Kleinbus” i „Auto mit Fahrer”, pytanie o dodatkową noc, „Bootstour” zamiast „Kreuzfahrt”, „Parkverwaltung”, „Messstation”, „Motorrad-Guide („Easy Rider“)”, objaśnione „Homestay”, „Kammwanderungen”, nazwy tras („Strand & Ruhe”, „Die meisten Wandertage”, „Die wenigsten Ortswechsel”), forma „ihr” w interfejsie, „Zentralvietnam”, „Langstrecke”, twarde spacje przed Uhr, °C, Std., Min. i w „p. P.”. Tylko `i18n.js` (część DE); EN i PL bez zmian. Commity `a35e580`…`80b8e4c`, opublikowane w `2077a41` (strona, artifact v26, plik offline).
- **9.10.2026:** paczka (c) „Telefon, wydruk, dostępność, wydajność”:
  - menu sekcji na telefonie kończy się przed przełącznikiem języka (sprawdzone przy 320, 390 i 430 px w EN/DE/PL);
  - wydruk: ciemny tytuł na białym, tylko wybrana dodatkowa noc na całą szerokość, miejsca mogą przechodzić przez stronę, mniejsza mapa i zdjęcia, autorzy zdjęć w 3 kolumnach. Classic 21 → 16 stron, w żadnym stylu nie ma strony zapełnionej poniżej 45% (poza ostatnią). Kolory ciemnego motywu działają tylko na ekranie, więc wydruk jest zawsze jasny. Nowy `tests/print.sh`;
  - mapa: prawdziwy przycisk „powiększ” tylko na szerokim ekranie, na telefonie mapa nie udaje przycisku; powiększona mapa ma `role="dialog"`;
  - galerie poza kolejnością Tab: 173 → 115 przystanków klawiatury (w galeriach 76 → 18);
  - zdjęcia 480 i 960 px z `srcset`: miniatury stylów 1,3 MB → 140 KB; zdjęcie otwierające na telefonie zostaje w pełnej wielkości, bo jest kadrowane do ok. 2× szerokości ekranu.
  Commity `8aeb5b5`…`52ca597`, opublikowane w `ff63c30` (strona, artifact v25, plik offline).
- **9.10.2026:** paczka (b) „Teksty i fakty”: opisy prawdziwe w każdym wariancie (Đà Lạt, Pù Luông, Huế na 2 noce, Hội An o zmroku, easy rider, zatoka, `x.p1`/`x.p2`, mapa na telefonie), uzasadnienia stylów, karta stylu z listą miejsc po zamianach i dopiskiem „0 (3 bez wersji łagodnej)”, 8 faktów (`research/facts-2026-10.md`), Việt Hải przez rejs Full Moon, budżet z kosztami dnia `pp` (`research/budget-2026-10.md`), „1 h 5 min”. Commity `0aff17d`…`59d4848`, opublikowane w `4c17238` (strona, artifact, plik offline).
- **9.10.2026:** paczka (a) „Logika tras”: składanie trasy w `plan.js`, test wszystkich kombinacji (`tests/routes.test.js`, dziś 106), Cát Bà ≥ 3 noce (bez nocy „Ninh Bình” w Balanced, bez zamiany zatoki w Nature), rejs na drugą noc, dojazdy na lotniska, czasy w `ROAD` (`research/road-times-2026-10.md`), notki po planach jednonocnych, karta stylu = pasek liczb. Commity `36d4712`…`700ed9c`, opublikowane w `c77916b` (strona, artifact, plik offline).
- **9.10.2026:** wersja polska (EN/DE/PL), odmiana liczebników, pełny dokument HTML z viewport dla GitHub Pages. Opublikowane (`f07930b`).
- **9.10.2026:** audyt całej strony: [audyt-2026-10-09.md](audyt-2026-10-09.md).
- **8.10.2026:** poprawki z pierwszego audytu: statystyki na kartach, budżet, daty, linki rezerwacji, menu sekcji, Tà Năng tylko z przewodnikiem. Plan: [plans/2026-10-08-vietnam-planer-poprawki-z-audytu.md](plans/2026-10-08-vietnam-planer-poprawki-z-audytu.md).
- **8.10.2026:** badanie, jak dobre strony pokazują trasy podróży, które uzasadniło prosty model (gotowe trasy zamiast suwaków): [design-research/itinerary-benchmarks.md](design-research/itinerary-benchmarks.md).
- **8.10.2026:** realne daty (14 nocy, Wigilia w Hà Nội) i styl Easy classics z wersją łagodną.
