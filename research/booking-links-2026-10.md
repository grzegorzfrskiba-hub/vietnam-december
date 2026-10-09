# Linki do rezerwacji w „Book ahead” (sprawdzone 8.10.2026)

Metoda: WebSearch (standard i extended), WebFetch stron operatorów, `curl -L` z user-agentem przeglądarki.
Kod statusu = wynik `tests/links.sh` / curl z 8.10.2026. Linki bez parametrów afiliacyjnych i śledzących.

## Loty krajowe i bilet na święta (`b.xmas`)

| Link | Po co | Status curl |
|---|---|---|
| https://www.vietnamairlines.com/ | Narodowy przewoźnik, własny system rezerwacji, loty SGN/VCA/DAD/HAN/DLI/PQC/HUI. | 200 (po redirekcie na /vn/vi/) |
| https://www.vietjetair.com/ | Największy tani przewoźnik krajowy, własny system rezerwacji. | 200 |
| https://www.google.com/travel/flights | Porównywarka wszystkich przewoźników naraz, żeby zobaczyć ceny i godziny. | curl dostaje stronę „unsupported” (Google odrzuca klienta bez przeglądarki), ale to oficjalny adres Google Flights; w przeglądarce działa. Zostawiony świadomie. |

## Busy i limuzyny (`b.transfer`)

- https://12go.asia/en/vietnam/transport: 12Go, agent sprzedający bilety na autobusy, vany/limuzyny, pociągi i promy w Wietnamie; porównanie operatorów i ocen, płatność online, voucher mailem. Status 200.
- Uwaga: z briefu wyszło `https://12go.asia/en/travel/vietnam`. Ten adres odpowiada kodem 202 z wyzwaniem WAF Amazona (`x-amzn-waf-action: challenge`) i dla curla/WebFetch jest pusty, więc nie dało się potwierdzić, że działa. Użyty został adres „Travel in Vietnam” z wyników wyszukiwania, który odpowiada 200.

## Rejs po Lan Hạ startujący z Cát Bà (`b.cruise`)

Kryteria: firma ma siedzibę w Cát Bà, rejs rusza z portu na wyspie (nie z Tuần Châu), własna strona z rezerwacją/kontaktem, świeże dobre opinie.

1. **Cat Ba Ventures** — https://catbaventures.com/tours/cat-ba/sailing-expeditions-kayaking.html (200)
   - Biuro: 223 Một Tháng Tư, Cát Bà Town; blisko 20 lat na wyspie; odbiór z hotelu w Cát Bà lub z przystanku, wypłynięcie ok. 11:00–11:30, łodzie do ok. 16 osób.
   - Opinie: odznaka TripAdvisor Travellers' Choice 2025; według wyników wyszukiwania ok. 3,7 tys. opinii na TripAdvisorze, z czego ok. 3,6 tys. pięciogwiazdkowych, wpisy z maja 2026 (przewodnicy, jedzenie, kajaki).
   - Rezerwacja: kontakt przez e-mail i WhatsApp (+84 971 254 486), bez koszyka online na stronie.
2. **Full Moon Travel Asia** — https://fullmoontravelasia.com/cat-ba-overnight-cruise-lan-ha-bay-viet-hai-village/ (200)
   - Biuro w Cát Bà (213 Street 1/4); wariant z odbiorem 11:30 z biura w Cát Bà (jest też z Hanoi i Ninh Bình, trzeba wybrać Cát Bà); 2 dni/1 noc lub 3 dni/2 noce, wioska Việt Hải.
   - Opinie: ok. 1269 opinii na TripAdvisorze i wyróżnienie Travellers' Choice, na stronie oceny 5,0 (7 ocen).
   - Rezerwacja: formularz z wyborem kabiny, czasu trwania i miejsca odbioru, na samej stronie.

Odrzucone: Cat Ba Du Ky (catbaduky.com; Beo Port, ale na stronie tylko 3 opinie i 145 USD), GetYourGuide/Viator (pośrednicy, nie operatorzy), Cat Ba Panorama (tylko jednodniowa wycieczka).
Przypomnienie dla użytkownika: wybierając wariant, zapytać o bezpłatną zmianę terminu przy mgle lub sztormie (tekst `b.cruise`).

**Việt Hải (sprawdzone 9.10.2026).** Po paczce (a) rejs jest drugą nocą, a przy 3 nocach na Cát Bà dnia w Việt Hải nie ma, więc wioskę widać tylko z rejsu.
- Full Moon 2D1N zawija do Việt Hải drugiego dnia o 8:00: 5 km rowerem, powrót ok. 9:30. Strona nie wspomina o meleksach. Cena 130 USD (wcześniej 155), z busem, wstępami, przewodnikiem i posiłkami.
- Cat Ba Ventures 2D1N (link wyżej, kajaki) do Việt Hải nie zawija: drugi dzień to wyspa Đầu Bê i laguny. Việt Hải ma dopiero wariant 3D2N.

Dlatego od 9.10.2026 Full Moon jest pierwszym linkiem, a tekst `b.cruise` mówi, że to ten rejs zawija do Việt Hải.

## Bidoup–Núi Bà (`b.dalat`)

- https://bidoupnuiba.gov.vn/ — oficjalna strona parku narodowego (Ban Quản lý Vườn quốc gia Bidoup Núi Bà, Lâm Đồng); trasy (Langbiang 1 dzień, Bidoup 17 km), kamping, noclegi i cennik usług, kontakt (tel. 0263 3502005, vqgbdnb@lamdong.gov.vn, Zalo/Messenger); przełącznik VN/EN (treść głównie po wietnamsku). Status 200. Etykieta w planerze: „Bidoup–Núi Bà park”.
- Jest też angielski serwis https://en.nbca.gov.vn/ (portal Cục Bảo tồn, ogólny, nie do rezerwacji), więc go nie dodano.
- Dla Tà Năng: bez linku. Szlak jest legalny tylko z organizatorem, patrz `research/ta-nang-status-2026-10.md`.

## Uwagi do testu sieciowego

`tests/links.sh` używa `curl -L -A "Mozilla/5.0"`. Przebieg z 8.10.2026: wszystkie 7 adresów 200 (linie lotnicze nie dały 403). Google Flights daje 200 dopiero po przekierowaniu na stronę „unsupported” (curl nie jest przeglądarką), więc ten wynik nie dowodzi, że wyszukiwarka działa; w przeglądarce otwiera się normalnie.
