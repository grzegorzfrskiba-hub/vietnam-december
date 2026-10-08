/* Polish interface text and Polish versions of the trip content. Loaded right after i18n.js.
   Same shape as I18N_DE, but complete: every text in data.js and every photo caption has a Polish version.
   Two keys exist for Polish grammar: 'nights.many' is the plural for 0 and 5+ nights (also 12–14, 22–24…),
   'fmt.hm' formats a duration in hours and minutes. */

UI.pl = {
  'lang.aria': 'Język',
  'nav.aria': 'Sekcje', 'nav.styles': 'Style podróży', 'nav.shape': 'W skrócie', 'nav.days': 'Dzień po dniu', 'nav.weather': 'Pogoda', 'nav.logistics': 'Przed wyjazdem', 'nav.top': 'Na górę',
  'hero.alt': 'Kobieta wiosłuje małą łodzią po rzece u stóp wapiennych skał w Tràng An, Ninh Bình',
  'hero.eyebrow': '{days} dni · 11–25 grudnia 2026 · Hồ Chí Minh City → Hà Nội',
  'hero.h1': 'Wietnam, z południa <em>na</em> północ',
  'hero.lede': 'Pięć kompletnych tras dla przyjaciół i rodziny: przyroda, wędrówki, kultura, leniwe dni i jedna łatwa – na podróż z rodzicami. Każda jest dopasowana do grudniowej pogody, ma uczciwie policzone czasy przejazdów, a zamiast zatłoczonych miejsc proponuje spokojniejsze w pobliżu.',
  'hero.cta1': 'Wybierzcie styl podróży', 'hero.cta2': 'Zobaczcie plan na {days} dni',
  'styles.eyebrow': 'Krok 1', 'styles.h2': 'Wybierzcie styl podróży', 'styles.legend': 'Styl podróży', 'styles.sel': 'Wybrany',
  'styles.stats': 'Loty {f} · Dni z wędrówką {h} · Najdłuższy dzień w drodze {l} · {b}/os.',
  'styles.p': 'Każdy styl to kompletna trasa na {days} dni, zaplanowana i sprawdzona ręcznie. Zacznijcie od naszej propozycji albo wybierzcie ten, który najbardziej pasuje do waszej grupy. Wszystko poniżej zmieni się razem z wyborem.',
  'swaps.eyebrow': 'Krok 2', 'swaps.h3': 'Zdecydujcie razem',
  'swaps.p': 'W miejscach, gdzie trasa naprawdę wymaga wyboru, pokazujemy obie możliwości. Zamiana dotyczy jednego przystanku, a reszta podróży zostaje bez zmian.',
  'e.q': 'Jedziecie ze starszymi rodzicami?', 'e.name': 'Łagodna wersja', 'e.tag': 'Do każdego stylu', 'e.on': 'Włączona', 'e.off': 'Wyłączona',
  'e.p1': 'Wędrówki zmieniają się w łatwe spacery, wycieczki łodzią albo widokowe przejazdy', 'e.p2': 'Samochody z kierowcą zamiast rowerów i motocykli',
  'e.p3': 'Długie trasy samochodem zostają bez zmian (do Cao Bằng jedzie się 6–8 godz.); najkrótsze przejazdy ma „Klasyka na spokojnie”',
  'e.badge': 'Łagodna wersja', 't.rain': 'Gdy leje: ', 'why.gentle': ' Łagodna wersja jest włączona: bez wędrówek i bez rowerów.',
  'x.q': 'Zacząć od 3 dni w Hồ Chí Minh City?', 'x.name': 'Pierwsze 3 dni w Hồ Chí Minh City', 'x.tag': 'W ramach {days} dni', 'x.add': 'Dodajcie', 'x.added': 'Dodane',
  'x.p1': 'Dzień 1 na przylot i prawie nic więcej', 'x.p2': 'Dzień 2 w namorzynach Cần Giờ, dzień 3 w Chợ Lớn i na rzece',
  'n.q': 'Dodatkowa noc: {a} czy {b}?', 'n.p': 'Po dodaniu dni w mieście jeden przystanek ma o noc mniej. Wybierzcie, który ją zatrzyma.',
  'x.cut': 'W zamian: {x}', 'x.less': '{s} {a} → {b} noce', 'x.less1': '{s} {a} → 1 noc', 'x.drop': '{s} wypada z trasy', 'x.same': 'Poza tym nic się nie zmienia',
  'why.saigon': ' Na początek trzy dni w Hồ Chí Minh City.',
  'swaps.none': 'Na tej trasie nie ma zamian. Opiera się na kilku długich pobytach, a każda inna opcja oznaczałaby więcej czasu w drodze.',
  'swaps.inroute': 'Na tej trasie', 'swaps.or': 'albo',
  'shape.eyebrow': 'W skrócie', 'shape.h2': 'Wszystkie {days} dni',
  'shape.p': 'Jeden kwadrat to jeden dzień, w kolorze miejsca noclegu. Mała kropka oznacza dzień w drodze. Kliknijcie dzień, żeby do niego przejść.',
  'copy.btn': 'Skopiujcie plan do WhatsAppa', 'copy.aria': 'Plan jako tekst',
  'copy.ok': 'Skopiowano. Wklejcie go do czatu.', 'copy.fail': 'Skopiujcie zaznaczony tekst poniżej.',
  'days.eyebrow': 'Dzień po dniu', 'days.h2': 'Trasa', 'map.aria': 'Mapa trasy',
  'days.p': 'Każdy przystanek ze zdjęciami, planem na każdy dzień i opisem dojazdu. Mapa jest narysowana w skali i podąża za wami przy przewijaniu.',
  'wx.eyebrow': 'Pogoda', 'wx.h2': 'Grudzień, przystanek po przystanku',
  'wx.p': 'W grudniu na południu i na północy jest sucho, a w górach noce są zimne. Wyjątkiem jest środkowe wybrzeże: tam trwa pora deszczowa.',
  'wx.col1': 'Przystanek', 'wx.col2': 'Od nocy do dnia', 'wx.col3': 'Opady w grudniu',
  'wx.src': 'Wieloletnie średnie dla grudnia. Paski temperatury obejmują zakres od 5 do 35 °C, paski opadów sięgają 360 mm. Źródła: tabele klimatyczne z Wikipedii oparte na normach klimatycznych Vietnam Institute for Building Science and Technology; Cao Bằng według World Climate Guide.',
  'wx.wet': 'dni z deszczem', 'wx.station': 'Stacja: ',
  'lo.eyebrow': 'Poza trasami', 'lo.h2': 'Celowo pominięte', 'lo.p': 'Słynne miejsca, z których w tej podróży rezygnujemy – i dlaczego.',
  'lg.eyebrow': 'Przed wyjazdem', 'lg.h2': 'Loty, rezerwacje i pakowanie',
  'lg.flights': 'Loty', 'lg.book': 'Zarezerwujcie wcześniej', 'lg.pack': 'Spakujcie',
  'lg.home': 'Hà Nội → do domu: CA884, potem CA931, o 4:30', 'lg.arrive': 'VN30 ląduje w Hồ Chí Minh City o 6:35', 'lg.intl': 'Międzynarodowy',
  'ft.photos': 'Zdjęcia · Wikimedia Commons', 'ft.notes': 'Uwagi',
  'ft.budget': 'Budżet: orientacyjne widełki na osobę przy wspólnym pokoju dwuosobowym, z lotami krajowymi, przejazdami, jedzeniem i głównymi atrakcjami, bez lotów międzynarodowych. Ceny sprawdzone w październiku 2026.',
  'ft.notes.p': 'Czasy podróży to szacunki od drzwi do drzwi i obejmują ok. 1½ godz. na lotnisku przy każdym locie. Połączenia bezpośrednie sprawdzone w październiku 2026 (Cần Thơ–Đà Nẵng, Đà Lạt–Hà Nội, Phú Quốc–Hà Nội); rozkłady potwierdźcie przy rezerwacji. Godziny otwarcia, zasady na szlakach i warunki na morzu sprawdzajcie na miejscu.',
  'lb.aria': 'Przeglądarka zdjęć', 'lb.close': 'Zamknijcie przeglądarkę zdjęć', 'lb.photo': 'Fot. ',
  'min': 'min', 'h': 'godz.', 'fmt.hm': '{h} godz. {m} min', 'day': 'Dzień', 'days': 'Dni', 'night': 'noc', 'nights': 'noce', 'nights.many': 'nocy',
  'fly': 'Lot', 'door': 'od drzwi do drzwi', 'longday': 'Długi dzień w drodze', 'maps': 'Trasa w Mapach Google',
  'r.van_ferry': 'Minibus typu limousine i krótki prom', 'r.van_car': 'Minibus typu limousine albo prywatny samochód',
  'r.back_sgn': 'Powrót drogą na lotnisko w Hồ Chí Minh City', 'r.taxi_city': 'Taksówka do miasta',
  'r.taxi_vca': 'Taksówka na lotnisko w Cần Thơ', 'r.taxi_hoian': 'Taksówka do Hội An',
  'r.bus_mekong': 'Autobus albo prywatny samochód do Phong Điền', 'r.car_cattien': 'Prywatny samochód albo autobus, potem prom przez rzekę',
  'r.taxi_dalat': 'Taksówka w górę, do Đà Lạt', 'r.taxi_pq': 'Taksówka na północne wybrzeże', 'r.car_baoloc': 'Prywatny samochód w górę, przez Bảo Lộc',
  'n.cruise': 'Statek przybija do brzegu ok. 11:00.',
  'n.bangioc': 'Bản Giốc obejrzyjcie zaraz po otwarciu o 7:00, przed weekendowym tłumem, a potem w drogę.',
  'n.long': 'Jazda zajmie cały dzień: wyruszcie wcześnie.', 'n.morning': 'Wybierzcie poranny lot.',
  'f.for': 'Wasza trasa: {name}', 'f.days': 'dni, {nights} nocy', 'f.bases': 'bazy wypadowe', 'f.flights': 'loty krajowe', 'f.hikes': 'dni z wędrówką', 'f.longest': 'najdłuższy dzień w drodze', 'f.budget': 'na osobę, orientacyjnie',
  'flyhome': 'Lot do domu', 'flyhome.aria': 'Dzień {days}: lot do domu z Hà Nội',
  'why.swaps': ' Wasze zamiany: ', 'why.instead': ' w zamian za ', 'why.rain': ' W Hội An i Huế będzie deszczowo.',
  'm.start': 'Start', 'm.north': 'Północ', 'm.whole': 'Cała trasa', 'm.panel': 'Mapa północy', 'm.china': 'Chiny', 'm.laos': 'Laos', 'm.cambodia': 'Kambodża', 'm.sea': 'Morze Południowochińskie', 'm.tonkin': 'Zatoka Tonkińska',
  'm.road': 'Droga', 'm.flight': 'Lot', 'm.scale': 'Obie mapy w skali', 'm.zoom': 'Kliknijcie mapę, żeby ją powiększyć', 'm.close': 'Zamknijcie dużą mapę', 'm.title': 'Mapa trasy: ',
  'g.open': 'Zdjęcie {i} z {n} na pełnym ekranie', 'g.show': 'Zdjęcie {i}', 'g.photos': 'Zdjęcia: {x}',
  'g.prev': 'Poprzednie zdjęcie', 'g.next': 'Następne zdjęcie', 'g.full': 'Pełny ekran',
  'reg.South': 'Wietnam Południowy', 'reg.Central': 'Wietnam Środkowy', 'reg.North': 'Wietnam Północny',
  't.dec': 'Grudzień', 't.gem': 'Ukryta perełka', 't.skip': 'Do pominięcia', 't.instead': 'Zamiast tego: ',
  'home.h3': 'Lot do domu z Hà Nội', 'home.t': 'Wigilia, a potem nocny lot',
  'home.d': 'W ostatni wieczór, 24 grudnia: kolacja wigilijna na Starym Mieście (stolik zarezerwujcie wcześniej) i katedra św. Józefa, rozświetlona i pełna ludzi. Potem kilka godzin snu w hotelu na Starym Mieście. Taksówka ok. 1:30 w nocy: o tej porze jazda do Nội Bài trwa ok. 40 min, więc na odprawę przed CA884 o 4:30 zostają dwie godziny.',
  'b.xmas': 'Podróż kończy się w Wigilię, w szczycie sezonu: loty krajowe i najlepsze pokoje zarezerwujcie do początku listopada, a w Hà Nội pamiętajcie o rezerwacji kolacji wigilijnej.',
  'b.cruise': 'Rejs po Zatoce Lan Hạ, który zaczyna się na Cát Bà, z bezpłatną zmianą terminu w razie mgły albo sztormu.',
  'b.dalat_bidoup': 'Przewodnika po Bidoup–Núi Bà – rezerwuje się go w centrum dla zwiedzających w parku.',
  'b.dalat': 'Licencjonowanego lokalnego przewodnika na wzgórza Tà Năng i przewodnika po Bidoup–Núi Bà.',
  'b.cattien': 'Wędrówkę nad Jezioro Krokodyli i pozwolenie – dzień wcześniej w siedzibie parku Cát Tiên.',
  'b.caobang': 'Samochód z kierowcą albo przewodnika na motocyklu (easy rider) na dni w Cao Bằng.',
  'b.transfer': 'Minibusy typu limousine i autobusy między miastami – dzień lub dwa wcześniej.',
  'b.homestay': 'Kwatery u gospodarzy ({x}) – kilka tygodni wcześniej: te dobre są małe.',
  'b.lastnight': 'Na ostatnią noc: hotel na Starym Mieście. Poproście recepcję o zamówienie taksówki do Nội Bài na 1:30.',
  'p.warm': 'Ciepłą warstwę i czapkę: na północy i w Đà Lạt temperatura w nocy spada do 11–14 °C.',
  'p.rain_central': 'Lekką kurtkę przeciwdeszczową, a na Hội An i Huế porządny sprzęt na deszcz.',
  'p.rain': 'Lekką kurtkę przeciwdeszczową. Pada rzadko, ale nad zatoką często jest mgliście i wilgotno.',
  'p.hike': 'Buty trekkingowe z dobrą przyczepnością i szybkoschnące ubrania.',
  'p.walk': 'Wygodne buty do chodzenia z dobrą przyczepnością: na starówkach i pomostach bywa ślisko.',
  'p.sun_pq': 'Stroje kąpielowe i ochronę przeciwsłoneczną na południe i na Phú Quốc.',
  'p.sun': 'Stroje kąpielowe i ochronę przeciwsłoneczną na południe.',
  'p.cash': 'Gotówkę w drobnych nominałach: kwatery u gospodarzy i łodzie rzadko przyjmują karty.',
  'p.apps': 'W telefonach: Grab i mapy Google offline.',
  'pt.title': 'Wietnam, {days} dni w grudniu: ', 'pt.home': 'Dzień {days}: lot do domu z Hà Nội (CA884 + CA931, 4:30)', 'pt.arrive': 'Dzień 1: przylot do Hồ Chí Minh City (VN30, 6:35)', 'pt.flights': 'Loty: '
};

const I18N_PL = {
  pace: { travel: 'Dzień w drodze', hike: 'Aktywna wędrówka', nature: 'Przyroda bez wysiłku', boat: 'Dzień na wodzie', culture: 'Zwiedzanie bez wysiłku', rest: 'Dzień odpoczynku' },
  stops: {
    saigon: {
      name: 'Hồ Chí Minh City', sub: 'Spokojny start, namorzyny Cần Giờ i Sajgon od kuchni', short: 'Hồ Chí Minh City',
      days: [
        ['Przylot i chwila oddechu', 'Celowo bez planu. Odeśpijcie lot, potem kawa w pobliskiej kawiarni, masaż i basen. O zachodzie słońca tramwaj wodny Saigon Waterbus (jeśli akurat kursuje) z przystani Bạch Đằng w górę rzeki do Thảo Điền i kolacja nad wodą.'],
        ['Namorzyny Cần Giờ', 'Jednodniowa wycieczka na południe – ok. 2 godz. samochodem, z krótką przeprawą promową w Bình Khánh – do lasu namorzynowego Cần Giờ, rezerwatu biosfery UNESCO. Łodzią przez kanały Vàm Sát, na wieżę do obserwacji ptaków, a potem owoce morza na plaży w Cần Thạnh i powrót.'],
        ['Sajgon od kuchni', 'Rano Chợ Lớn: targ Bình Tây, spirale kadzideł w świątyni Thiên Hậu i dim sum na ulicy Hà Tôn Quyền. Po południu kawiarnie w starych blokach mieszkalnych, a wieczorem kolacja przy straganach ze ślimakami i owocami morza na ulicy Vĩnh Khánh w Dystrykcie 4.']
      ],
      gem: 'Cần Giờ: prawdziwy las namorzynowy w granicach miasta, prawie bez zagranicznych turystów.',
      skip: 'Tunele Củ Chi z dużą wycieczką grupową i targ Bến Thành.',
      instead: 'Cần Giờ i targ Bình Tây w Chợ Lớn.'
    },
    dalat: {
      name: 'Wyżyna wokół Đà Lạt', sub: 'Las Bidoup–Núi Bà i trawiaste wzgórza Tà Năng', short: 'Đà Lạt',
      days: [
        ['W górę, na wyżynę', 'Ominijcie centrum i jedźcie na zachód, na grzbiety nad doliną Tà Nung, by o zmierzchu patrzeć na sosnowe wzgórza i plantacje kawy. Nocleg w pensjonacie za miastem, gdzie noce są ciche i rozgwieżdżone.'],
        ['Las mglisty Bidoup–Núi Bà', 'Wędrówka z przewodnikiem wśród starych sosen, omszałego lasu i dzikich storczyków w stronę Hòn Giao. Grudzień to pora sucha, więc szlaki są pewne pod nogami. Przewodnika zarezerwujcie w centrum dla zwiedzających w parku.'],
        ['Trawiaste wzgórza Tà Năng', 'Jednodniowa wędrówka pierwszym odcinkiem szlaku Tà Năng–Phan Dũng, często nazywanego najpiękniejszą trasą trekkingową Wietnamu. W porze suchej wzgórza złocieją. Idźcie tylko z licencjonowanym lokalnym przewodnikiem, który załatwia pozwolenie: po wypadkach szlak zamknięto dla wędrowców bez przewodnika i na własną rękę nadal nie wolno nim iść. Aktualne zasady potwierdźcie u organizatora przy rezerwacji.'],
        ['Herbaciane wzgórza i plantacja kawy', 'Wschód słońca nad herbacianymi wzgórzami Cầu Đất, potem rodzinna plantacja kawy ludu K’Ho u stóp góry Lang Biang. W grudniu na zboczach kwitną dzikie słoneczniki i różowa trawa.']
      ],
      gem: 'Bidoup–Núi Bà. Większość odwiedzających Đà Lạt w ogóle nie wyjeżdża poza miasto.',
      skip: 'Crazy House, parki kwiatowe i letni tor saneczkowy Datanla.',
      instead: 'park narodowy i wzgórza Tà Năng.'
    },
    cattien: {
      name: 'Park Narodowy Cát Tiên', sub: 'Nizinna dżungla, gibony i nocne safari', short: 'Cát Tiên',
      days: [
        ['W głąb dżungli', 'Przeprawcie się małym promem przez rzekę Đồng Nai do siedziby parku i nocujcie na jego terenie. Po zmroku nocna przejażdżka w poszukiwaniu jeleni i cywet.'],
        ['Gibony i Jezioro Krokodyli', 'Przed świtem wyjście ze strażnikiem parku, żeby posłuchać nawoływania gibonów, potem leśnym szlakiem do Bàu Sấu, czyli Jeziora Krokodyli. Wędrówkę i pozwolenie zarezerwujcie dzień wcześniej w siedzibie parku.']
      ],
      gem: 'Jeden z ostatnich dużych lasów nizinnych na południu, cztery godziny od Hồ Chí Minh City.'
    },
    mekong: {
      name: 'Delta Mekongu', sub: 'Kanały, sady i pływający targ z pokładu małej łodzi', short: 'Mekong',
      days: [
        ['W dół, do delty', 'Zameldujcie się w kwaterze u gospodarzy nad kanałem w Phong Điền, tuż za Cần Thơ. Późnym popołudniem małym sampanem przez kanały wśród sadów owocowych.'],
        ['Pływający targ o świcie', 'Wypłyńcie małą łodzią o 5:30, żeby dotrzeć do Cái Răng przed łodziami wycieczkowymi, potem boczne kanały i manufaktura makaronu ryżowego. Po południu rowerami po wysepce Cồn Sơn.']
      ],
      gem: 'Cồn Sơn, wysepka prowadzona przez miejscową społeczność, kawałek łodzią od Cần Thơ.',
      skip: 'Jednodniowe wycieczki z Mỹ Tho i Cái Bè: grupy z autokarów na tych samych postojach z cukierkami kokosowymi.',
      instead: 'noc w kwaterze u gospodarzy w Phong Điền i targ o wschodzie słońca.'
    },
    phuquoc: {
      name: 'Cicha północ Phú Quốc', sub: 'Spokojne morze, płycizny z rozgwiazdami i park narodowy', short: 'Phú Quốc',
      days: [
        ['Wyspiarskie tempo', 'Nocleg na północnym wybrzeżu koło Gành Dầu, z dala od pasa resortów na południu. Zachód słońca nad Zatoką Tajlandzką.'],
        ['Rozgwiazdy na płyciźnie i las', 'Rano Rạch Vẹm, gdzie na płyciźnie leżą rozgwiazdy (patrzcie, nie podnoście). Po południu leśne drogi Parku Narodowego Phú Quốc, który zajmuje większą część północy.'],
        ['Dzień wolny', 'Nic w planie: pływanie, masaż, długi obiad. Podróż jest długa, a to dobre miejsce, żeby zwolnić.'],
        ['Wioski rybackie i pusta plaża', 'Wschodnie wybrzeże: obiad z krabami na molo w Hàm Ninh, plantacja pieprzu, potem zachód słońca na plaży Vũng Bầu.']
      ],
      gem: 'Płycizny z rozgwiazdami w Rạch Vẹm na północnym wybrzeżu.',
      skip: 'Sunset Town, kolejka linowa na Hòn Thơm i VinWonders na południu.',
      instead: 'północne wybrzeże i park narodowy.'
    },
    central: {
      name: 'Hội An & Huế', sub: 'Spokojna strona Hội An, przełęcz Hải Vân i cesarskie grobowce', short: 'Hội An & Huế',
      days: [
        ['Bocznymi drogami Hội An', 'Z lotniska w Đà Nẵng do Hội An jedzie się 45 min. Rowerami do warzywnej wioski Trà Quế i nad kanały wśród wodnych palm kokosowych w Cẩm Thanh.'],
        ['Stare miasto o 6:00, potem przełęcz Hải Vân', 'Zobaczcie stare miasto w Hội An, zanim zjadą się jednodniowi turyści. Potem samochodem albo motocyklem z przewodnikiem przez przełęcz Hải Vân do Huế, z postojem nad laguną Lăng Cô.'],
        ['Huế na rowerze', 'Rowerami wzdłuż Rzeki Perfumowej do grobowców Minh Mạng i Tự Đức, a późnym popołudniem do pagody Thiên Mụ.'],
        ['Okolice Huế', 'Kryty dachówką most w Thanh Toàn wśród pól ryżowych, potem laguna Tam Giang o zachodzie słońca.']
      ],
      gem: 'Thanh Toàn, kryty most z lat 70. XVIII wieku wśród pól ryżowych na wschód od Huế.',
      skip: 'Stare miasto w Hội An o 19:00, gdy tłumy wśród lampionów są największe.',
      instead: 'stare miasto o 6:00 i okoliczne wioski.',
      warn: 'W grudniu trwa tu pora deszczowa: w Huế ok. 20 dni z deszczem. Spakujcie kurtkę przeciwdeszczową i planujcie elastycznie.'
    },
    puluong: {
      name: 'Pù Luông', sub: 'Bambusowe kwatery u gospodarzy, ryżowe doliny i wędrówki grzbietami', short: 'Pù Luông',
      days: [
        ['W głąb dolin', 'Zameldujcie się w bambusowej kwaterze u gospodarzy nad tarasami w Bản Đôn albo Kho Mường. Wieczorem spacer po wiosce.'],
        ['Grzbiety, wioski i wodospad', 'Całodniowa wędrówka z przewodnikiem: turkusowe baseny wodospadu Hiêu, wioska Kho Mường z jaskinią i grzbiety między dolinami.'],
        ['Spokojny dzień w dolinie', 'Bambusowe koła wodne, bambusowa tratwa na rzece, tkanie w domu na palach i długi obiad u gospodarzy. W grudniu ryż jest już zebrany, więc poranki są mgliste i ciche.']
      ],
      gem: 'Turkusowe baseny wodospadu Hiêu.',
      skip: 'Mai Châu: urocze, ale dziś otoczone kwaterami nastawionymi na wycieczki autokarowe.',
      instead: 'Pù Luông, ok. dwóch godzin drogi dalej.'
    },
    ninhbinh: {
      name: 'Ninh Bình', sub: 'Łodzie wiosłowe wśród wapiennych turni', short: 'Ninh Bình',
      days: [
        ['Przyjazd wśród krasowych wzgórz', 'Nocleg w uliczkach za Tam Cốc. Jeśli dotrzecie najpóźniej w połowie popołudnia, wybierzcie się o złotej godzinie na przejażdżkę łodzią wiosłową po mokradłach Vân Long.'],
        ['Tràng An o 7:00', 'Bądźcie na przystani na otwarcie i wybierzcie najdłuższą trasę przez jaskinie, zanim przyjadą autokary. Potem rowerami po wiejskich uliczkach albo do świątyń z X wieku w Hoa Lư.']
      ],
      gem: 'Langury Delacoura na skałach Vân Long – jedne z najrzadszych naczelnych na świecie.',
      skip: 'Punkt widokowy Hang Múa o zachodzie słońca: 500 schodów i tłum ramię w ramię.',
      instead: 'Vân Long o złotej godzinie.'
    },
    catba: {
      name: 'Cát Bà & Zatoka Lan Hạ', sub: 'Wyspa porośnięta dżunglą po spokojnej stronie Hạ Long', short: 'Cát Bà',
      days: [
        ['Na wyspę', 'Minibus typu limousine i krótki prom. Zachód słońca z Cannon Fort, potem owoce morza przy porcie.'],
        ['Việt Hải i park narodowy', 'Wędrówka na szczyt Ngự Lâm w Parku Narodowym Cát Bà, potem rowerami dalej do Việt Hải, wioski bez samochodów otoczonej skalnymi ścianami.'],
        ['Spokojny dzień na wyspie', 'Małe plaże Cát Cò, masaż i długi obiad z owocami morza. W grudniu morze jest rześkie, ok. 20 °C.'],
        ['Noc na Zatoce Lan Hạ', 'Wejdźcie na pokład dwudniowego rejsu z jednym noclegiem, który zaczyna się na Cát Bà i płynie przez Zatokę Lan Hạ aż po spokojny południowy skraj Zatoki Hạ Long. Kajaki, wizyta w pływającej wiosce i noc na statku.']
      ],
      gem: 'Việt Hải, wioska bez samochodów na terenie parku narodowego.',
      skip: 'Rejsy po Hạ Long z Tuần Châu i zatłoczone postoje przy jaskini Sửng Sốt i na wyspie Ti Tốp.',
      instead: 'rejs, który zaczyna się na Cát Bà.'
    },
    caobang: {
      name: 'Cao Bằng', sub: 'Wodospad Bản Giốc i krasowe pogranicze', short: 'Cao Bằng',
      days: [
        ['Na północ, pod granicę', 'Długa, ale malownicza jazda. Nocleg w mieście Cao Bằng; na kolejne dni załatwcie samochód z kierowcą albo przewodnika na motocyklu (easy rider).'],
        ['Oko Anioła i Pác Bó', 'Núi Mắt Thần – góra z otworem na wylot w szczycie, wznosząca się nad trawiastą doliną – i czysty, zielony strumień w Pác Bó przy granicy.'],
        ['Jeziora, przełęcz, jaskinia i wodospad', 'Łańcuch krasowych jezior Thang Hen, serpentyny przełęczy Mã Phục, jaskinia Ngườm Ngao, a potem wodospad Bản Giốc w świetle późnego popołudnia. Grudzień to pora niskiej wody: węższe kaskady i czyste, turkusowe baseny. Nocleg w Khuổi Ky, wiosce ludu Tày z kamiennymi domami.']
      ],
      gem: 'Kamienne domy Khuổi Ky i jeziora Thang Hen.',
      skip: 'Sapa i pętla Hà Giang: tłumy wycieczek grupowych i imprezowe hostele.',
      instead: 'Cao Bằng i Ba Bể.'
    },
    babe: {
      name: 'Ba Bể', sub: 'Górskie jezioro otoczone wioskami ludu Tày', short: 'Ba Bể',
      days: [
        ['Przyjazd nad jezioro', 'Zameldujcie się w domu na palach ludu Tày w Pác Ngòi, a o zmierzchu przejdźcie się brzegiem jeziora.'],
        ['Na wodzie', 'Łodzią albo kajakiem do jaskini Puông, wodospadu Đầu Đẳng i na wyspę Ba Góa. Po południu rowerami przez wioski.'],
        ['Wioski wysoko nad jeziorem', 'Półdniowa wędrówka z lokalnym przewodnikiem do wiosek Tày i Dao na zboczach nad jeziorem. Wieczorem zapytajcie gospodarzy o śpiew Then.']
      ],
      gem: 'Noc w domu na palach ludu Tày nad brzegiem jeziora.'
    },
    hanoiStop: {
      name: 'Noc w Hà Nội', sub: 'Przerwa w drodze na północ', short: 'Hà Nội',
      days: [
        ['Uliczne jedzenie i wcześnie do łóżka', 'Wieczorem z powrotem w mieście. Uliczne jedzenie na Starym Mieście (bún chả, bánh cuốn, kawa z jajkiem), a potem wcześnie spać przed jazdą na północ.']
      ]
    },
    hanoi: {
      name: 'Hà Nội', sub: 'Stolica i lot do domu', short: 'Hà Nội',
      days: [
        ['Z powrotem w Hà Nội', 'Spacer wokół jeziora Hoàn Kiếm i uliczkami Starego Miasta.'],
        ['Świątynia Literatury i Muzeum Etnologii', 'Świątynia Literatury o 7:30, zanim przyjdą grupy. Potem Muzeum Etnologii z wiejskimi domami naturalnej wielkości w ogrodzie.'],
        ['Wioska Đường Lâm', 'Jednodniowa wycieczka do Đường Lâm, ok. 1½ godz. w każdą stronę: uliczki z laterytu, XVII-wieczny dom wspólnoty i obiad u miejscowej rodziny.'],
        ['Ceramika i rzeka', 'Wioska garncarzy Bát Tràng nad Rzeką Czerwoną, a o zachodzie słońca spacer z powrotem przez most Long Biên.']
      ],
      gem: 'Đường Lâm, stara laterytowa wioska na zachód od miasta.',
      skip: 'Train Street: raz po raz zamykana dla turystów, a gdy jest otwarta – zatłoczona.',
      instead: 'most Long Biên o świcie.'
    }
  },
  routes: {
    balanced: { name: 'Złoty środek', tag: 'Wszystkiego po trochu',
      blurb: 'Wszystkiego po trochu, z przewagą przyrody: las na wyżynie, krasowe rzeki, zatoka i daleka północ.',
      why: 'Z myślą o przyrodzie z odrobiną kultury: na całej trasie sucho, dwa dni z wędrówką, jedna noc na statku i dwa krótkie loty.',
      whyCity: 'Z myślą o przyrodzie z odrobiną kultury: na całej trasie sucho, dzień w lesie mglistym, jedna noc na statku i dwa krótkie loty.' },
    nature: { name: 'Przyroda i wędrówki', tag: 'Najwięcej czasu na szlaku',
      blurb: 'Na początek dżungla, potem wyżyna wokół Đà Lạt, grzbiety Pù Luông i krasowe pogranicze.',
      why: 'Z myślą o wędrówkach: najwięcej dni na szlaku i najmniej miast, kosztem dwóch długich dni w drodze.' },
    culture: { name: 'Kultura i kuchnia', tag: 'Najwięcej do zobaczenia',
      blurb: 'Targi w delcie, Hội An i cesarskie grobowce Huế, dawna stolica w Ninh Bình, zatoka i Hà Nội.',
      why: 'Z myślą o kulturze i kuchni, z zatoką jako przerwą. Haczyk: w Hội An i Huế trwa pora deszczowa.' },
    slow: { name: 'Wolne tempo i plaża', tag: 'Najmniej zmian noclegu',
      blurb: 'Dni plażowe na cichej północy Phú Quốc, potem doliny, krasowe wzgórza i zatoka w spokojnym tempie.',
      why: 'Z myślą o spokojnym tempie: pięć baz, długie pobyty, trzy dni odpoczynku i tylko dwa loty.',
      whyCity: 'Z myślą o spokojnym tempie: długie pobyty, leniwe dni i tylko dwa loty.' },
    classic: {
      name: 'Klasyka na spokojnie', tag: 'Polecamy: z rodzicami',
      blurb: 'Słynne miejsca w łagodnym wydaniu: chłodne wzgórza Đà Lạt, Hội An w blasku lampionów i cesarskie Huế, Ninh Bình z łodzi wiosłowej, wygodna noc na Zatoce Lan Hạ i Hà Nội.',
      why: 'Z myślą o podróży z rodzicami: bez wędrówek i bez motocykli, samochody z kierowcą, krótkie przejazdy i tylko krótkie loty. Haczyk: w Hội An i Huế trwa pora deszczowa, dlatego każdy dzień ma tam plan na deszcz.'
    }
  },
  swaps: {
    coast: { q: 'Sucha wyżyna czy deszczowe środkowe wybrzeże?',
      pts: { dalat: ['Suche, słoneczne dni i zimne noce (ok. 13 °C)', 'Las sosnowy i najlepsze tereny do wędrówek na całej trasie', 'Przede wszystkim przyroda, niewiele atrakcji do odhaczenia'],
        central: ['Hội An, przełęcz Hải Vân i grobowce Huế', 'Pora deszczowa: ok. 20 dni z deszczem w grudniu', 'Przede wszystkim kultura, mniej przyrody'] } },
    water: { q: 'Zatoka czy doliny?',
      pts: { catba: ['Noc na statku wśród krasowych wysp', 'Kajaki, wioska bez samochodów, owoce morza', 'Chłodno i często mgliście; morze ma ok. 20 °C'],
        puluong: ['Bambusowe kwatery u gospodarzy i całodniowa wędrówka', 'Ryżowe doliny, koła wodne i wioski ludu Thái', 'W grudniu ryż jest już zebrany; mgliste poranki'] } },
    south: { q: 'Delta czy dżungla?',
      pts: { mekong: ['Pływający targ, sady i życie u gospodarzy', 'Płasko, łatwo i bardzo towarzysko', 'W grudniu ciepło i sucho'],
        cattien: ['Gibony o świcie i nocne safari', 'Leśne spacery ze strażnikiem parku', 'Początek pory suchej: mniej pijawek'] } }
  },
  weather: {
    saigon: { verdict: 'Gorąco i sucho', station: 'Hồ Chí Minh City' },
    dalat: { verdict: 'Sucho, zimne noce', station: 'Đà Lạt' },
    cattien: { verdict: 'Ciepło, coraz suszej', station: 'Hồ Chí Minh City, najbliższa stacja z wieloletnimi pomiarami' },
    mekong: { verdict: 'Ciepło i sucho', station: 'Cần Thơ' },
    phuquoc: { verdict: 'Spokojne morze, słonecznie', station: 'Phú Quốc' },
    central: { verdict: 'Pora deszczowa', station: 'Huế; w Đà Nẵng koło Hội An spada 218 mm w ciągu 19 dni' },
    puluong: { verdict: 'Sucho, zimne noce', station: 'Hòa Bình; Pù Luông leży wyżej i jest tam o kilka stopni chłodniej' },
    ninhbinh: { verdict: 'Sucho i łagodnie', station: 'Thanh Hóa, najbliższa stacja z wieloletnimi pomiarami' },
    catba: { verdict: 'Chłodno, często mgliście', station: 'Hải Phòng' },
    caobang: { verdict: 'Sucho, zimne noce', station: 'Cao Bằng' },
    babe: { verdict: 'Sucho, zimne noce', station: 'Bắc Kạn' },
    hanoi: { verdict: 'Sucho i łagodnie', station: 'Hà Nội' }
  },
  leftOut: [
    { name: 'Sapa', why: 'W grudniu zimno i mglisto, nocami przymrozki, a do tego to najbardziej oblegane miasteczko trekkingowe na północy. Cao Bằng i Ba Bể dają góry bez tłumów.' },
    { name: 'Pętla Hà Giang', why: 'Spektakularna, ale dziś to taśmociąg grupowych wycieczek motocyklowych z przewodnikami easy rider. Lepiej przy okazji dłuższej podróży, poza szczytem sezonu.' },
    { name: 'Zatoka Hạ Long z miasta Hạ Long', why: 'Setki statków na tej samej pętli. Zatoka Lan Hạ z Cát Bà ma ten sam krasowy krajobraz i dużo mniej statków.' },
    { name: 'Phong Nha', why: 'W grudniu na środkowym wybrzeżu trwa pora deszczowa, a wielkie wyprawy jaskiniowe ruszają ponownie dopiero ok. lutego.' },
    { name: 'Côn Đảo i Sơn Trà', why: 'W grudniu wzburzone morze i deszcz. Oba miejsca to łatwy wiosenny weekend z Hồ Chí Minh City.' }
  ],
  cap: {
    saigon_0: 'Rzeka Sajgon o niebieskiej godzinie',
    saigon_1: 'Samotne drzewo namorzynowe u wybrzeża Cần Giờ',
    saigon_2: 'Kładka przez namorzyny Rừng Sác, Cần Giờ',
    saigon_3: 'Kadzidła w świątyni Thiên Hậu, Chợ Lớn',
    saigon_4: 'Suszone produkty na targu Bình Tây',
    dalat_0: 'Na szlaku Tà Năng w porze suchej',
    dalat_1: 'Potok i rozlewisko przy Hòn Giao, Park Narodowy Bidoup–Núi Bà',
    dalat_2: 'Stare sosny w Bidoup–Núi Bà po deszczu',
    dalat_4: 'Widok z góry Lang Biang',
    dalat_3: 'Namioty na trawiastych wzgórzach Tà Năng',
    cattien_0: 'Łódź rybacka na jeziorze wśród mokradeł Cát Tiên',
    cattien_1: 'Zachód słońca nad mokradłami Cát Tiên',
    cattien_3: 'Korzenie deskowe olbrzyma z nizinnego lasu',
    cattien_4: 'Mokradła widziane ze skraju lasu',
    mekong_0: 'Wioślarz na Mekongu tuż przed wschodem słońca',
    mekong_2: 'Pływający targ Cái Răng, Cần Thơ',
    mekong_3: 'Handel z łodzi w Phong Điền',
    mekong_1: 'Kanał wśród palm nipa w delcie',
    phuquoc_0: 'Granitowe głazy na jednej z plaż Phú Quốc',
    phuquoc_1: 'Rozgwiazdy na płyciźnie, Phú Quốc',
    phuquoc_2: 'Zachód słońca nad Zatoką Tajlandzką',
    phuquoc_5: 'Cicha plaża koło Hàm Ninh',
    hoian_0: 'Nabrzeże Hội An nad rzeką Thu Bồn',
    hoian_1: 'Łódka-kosz wśród wodnych palm kokosowych',
    hue_0: 'Grobowiec cesarza Minh Mạng w Huế we mgle',
    hue_4: 'Przełęcz Hải Vân nad morzem',
    hoian_2: 'Kryty dachówką most Thanh Toàn koło Huế',
    puluong_1: 'Zachód słońca nad doliną Pù Luông w listopadzie',
    puluong_2: 'Wioska wśród pól ryżowych, Pù Luông',
    puluong_3: 'Bambusowa tratwa pchana tyczką po rzece',
    puluong_0: 'Tarasy Pù Luông w porze zbiorów (wrzesień)',
    puluong_5: 'Tkanie na drewnianym krośnie w domu',
    ninhbinh_1: 'Łódź wiosłowa pod skałami Tràng An',
    ninhbinh_0: 'Wapienne turnie w Tràng An',
    ninhbinh_3: 'Mokradła Vân Long o złotej godzinie',
    ninhbinh_4: 'Langur Delacoura na wapiennej skale',
    ninhbinh_5: 'Przez jaskinię na wodnej trasie Tràng An',
    ninhbinh_6: 'Hoa Lư, królewska stolica z X wieku',
    catba_0: 'Dżonki na Zatoce Lan Hạ',
    catba_3: 'Poranna mgiełka nad wyspami u brzegów Cát Bà',
    catba_1: 'Mała plaża nad Zatoką Lan Hạ',
    catba_2: 'Pływająca hodowla ryb u brzegów Cát Bà',
    catba_6: 'Wioska Việt Hải, Park Narodowy Cát Bà',
    caobang_0: 'Wodospad Bản Giốc z przystani bambusowych tratw',
    caobang_6: 'Núi Mắt Thần, czyli góra Oko Anioła',
    caobang_1: 'Bản Giốc nad polami ryżowymi',
    caobang_2: 'We wnętrzu jaskini Ngườm Ngao',
    caobang_3: 'Krasowe wzgórza odbite w polu ryżowym koło Bản Giốc',
    babe_0: 'Łódź na jeziorze Ba Bể',
    babe_1: 'Gładka tafla jeziora Ba Bể',
    babe_2: 'Dom na palach ludu Tày nad jeziorem',
    babe_3: 'Pola Pác Ngòi między jeziorem a wzgórzami',
    babe_5: 'Śpiew Then przy dźwiękach lutni tính',
    hanoi_0: 'Pociąg na moście Long Biên',
    hanoi_1: 'Główna brama Świątyni Literatury',
    hanoi_3: 'Laterytowa uliczka w wiosce Đường Lâm',
    hanoi_5: 'Dom na palach w ogrodzie Muzeum Etnologii'
  },
  night: {
    dalat: { pro: ['Trzeci dzień na wyżynie – na trawiaste wzgórza Tà Năng', 'Suche, słoneczne dni i chłodne noce'],
      con: ['Z Ninh Bình zostaje jeden wieczór i wczesna łódź w Tràng An przed wyjazdem'] },
    central: { pro: ['Jeszcze jeden dzień na Huế i okolice', 'Zapas w planie, gdyby deszcz zepsuł któryś dzień'],
      con: ['Z Ninh Bình zostaje jeden wieczór i wczesna łódź w Tràng An przed wyjazdem'] },
    catba: { pro: ['Cały dzień w Việt Hải, a do tego noc na statku', 'Więcej czasu na zatoce, największej atrakcji północy'],
      con: ['Z Ninh Bình zostaje jeden wieczór i wczesna łódź w Tràng An przed wyjazdem'] },
    puluong: { pro: ['Spokojny dzień w dolinie po wędrówce', 'Jeszcze jedna noc w bambusowej kwaterze u gospodarzy'],
      con: ['Z Ninh Bình zostaje jeden wieczór i wczesna łódź w Tràng An przed wyjazdem'] },
    ninhbinh: { pro: ['Cały dzień bez pośpiechu wśród krasowych wzgórz: Tràng An, Hoa Lư i Vân Long', 'Bez wczesnego wstawania w dniu dalszej podróży'],
      con: { catba: 'Cát Bà to już tylko przyjazd i rejs, bez dnia na wyspie', puluong: 'Pù Luông to już tylko przyjazd i wędrówka, bez spokojnego dnia',
      dalat: 'Đà Lạt traci trzeci dzień i trawiaste wzgórza Tà Năng', central: 'Hội An & Huế ma dzień mniej i mniejszy zapas na deszcz' } }
  },
  /* gentle versions [title, text], one-night versions (solo) and rain plans, by index into each stop's days in data.js */
  dayExtra: {
    dalat: { easy: {
      1: ['Las sosnowy i klasztor nad jeziorem', 'Kolejka linowa z Robin Hill sunie nad lasem sosnowym do Trúc Lâm, cichego klasztoru zen nad jeziorem Tuyền Lâm. Spacer po klasztornych ogrodach, potem niespieszny rejs łódką po jeziorze albo długi obiad nad brzegiem.'],
      2: ['Stara kolej i kwiatowe wioski', 'Zabytkowy pociąg z dworca w Đà Lạt, pamiętającego lata 30. XX wieku, do Trại Mát i pagody Linh Phước wyłożonej mozaiką, a potem szklarnie kwiatowej wioski Vạn Thành.'] } },
    cattien: { solo: {
      0: ['Dżungla nocą i o świcie', 'Dotrzyjcie najpóźniej w połowie popołudnia i nocujcie w parku; spacer o świcie zarezerwujcie w siedzibie parku przy zameldowaniu. Po zmroku nocna przejażdżka w poszukiwaniu jeleni i cywet. Następnego dnia przed świtem wyjście ze strażnikiem parku, żeby posłuchać nawoływania gibonów, potem śniadanie i dalej w drogę.'] }, easy: {
      1: ['Cát Tiên na spokojnie', 'Krótki spacer z przewodnikiem do olbrzymich drzew niedaleko siedziby parku, potem łodzią przez rzekę Đồng Nai do ośrodka ratowania naczelnych Dao Tiến, gdzie uratowane gibony i langury przygotowuje się do powrotu na wolność.'] } },
    mekong: { solo: {
      0: ['Delta o zmierzchu i o świcie', 'Najpóźniej w połowie popołudnia dotrzyjcie do kwatery u gospodarzy nad kanałem w Phong Điền, tuż za Cần Thơ, i popłyńcie sampanem przez kanały wśród sadów. Następnego ranka o 5:30 małą łodzią na pływający targ Cái Răng, a do 9:00 z powrotem, w porę na dalszą drogę.'] }, easy: {
      1: ['Pływający targ o świcie', 'Wypłyńcie małą łodzią o 5:30, żeby dotrzeć do Cái Răng przed łodziami wycieczkowymi, potem boczne kanały i manufaktura makaronu ryżowego. Po południu niespiesznie łodzią na wysepkę Cồn Sơn – sady owocowe i domowy obiad.'] } },
    central: {
      easy: {
        0: ['Hội An bez pośpiechu', 'Z lotniska w Đà Nẵng do Hội An jedzie się 45 min. Lekcja gotowania w warzywnej wiosce Trà Quế (dojazd taksówką), potem stare miasto o zmierzchu, gdy zapalają się lampiony, i rejs sampanem po rzece Thu Bồn. Turystycznie, a mimo to pięknie.'],
        1: ['Stare miasto o 6:00, potem samochodem przez przełęcz Hải Vân', 'Zobaczcie stare miasto w Hội An, zanim zjadą się jednodniowi turyści. Potem samochodem z kierowcą przez przełęcz Hải Vân do Huế, z postojem nad laguną Lăng Cô.'],
        2: ['Huế łodzią i samochodem', 'Smoczą łodzią w górę Rzeki Perfumowej do pagody Thiên Mụ, potem samochodem do grobowców Minh Mạng i Tự Đức. Cesarskie Miasto jest płaskie i łatwo je obejść pieszo.'] },
      rain: {
        0: 'lekcja gotowania albo warsztaty robienia lampionów i kryty targ.',
        1: 'jeśli przełęcz tonie w chmurach, jedźcie tunelem, a czas spędźcie w domach zgromadzeń w Hội An albo u krawca.',
        2: 'kryte galerie Cesarskiego Miasta i Muzeum Królewskich Antyków, a potem długi obiad z bún bò Huế.',
        3: 'lekcja gotowania w Huế albo samochodem do starych domów z ogrodami w Kim Long.' } },
    puluong: { easy: {
      1: ['Doliny widziane z drogi', 'Samochodem z kierowcą drogą wzdłuż dolin, do dolnych basenów wodospadu Hiêu (krótki, łatwy spacer), potem wioska Kho Mường i długi obiad w domu na palach.'] } },
    ninhbinh: { solo: {
      0: ['Krasowe wzgórza o zmierzchu i o świcie', 'Nocleg w uliczkach za Tam Cốc; dotrzyjcie najpóźniej w połowie popołudnia, żeby o złotej godzinie popłynąć łodzią wiosłową po mokradłach Vân Long. Następnego ranka bądźcie o 7:00 na przystani w Tràng An, gdy ją otwierają, popłyńcie trasą przez jaskinie, a potem jedźcie dalej.'] }, easy: {
      1: ['Tràng An o 7:00', 'Bądźcie na przystani na otwarcie i wybierzcie najdłuższą trasę przez jaskinie, zanim przyjadą autokary; wiosłować nie musicie. Potem samochodem do świątyń z X wieku w Hoa Lư.'] } },
    catba: { easy: {
      0: ['Na wyspę', 'Minibus typu limousine i krótki prom. Spokojny wieczór przy porcie i owoce morza nad wodą.'],
      1: ['Việt Hải bez wspinaczki', 'Łodzią z miasteczka Cát Bà do przystani Việt Hải, potem ok. 5 km płaską drogą do wioski – meleksem albo rowerem – i obiad wśród skał.'],
      3: ['Noc na Zatoce Lan Hạ', 'Dwudniowy rejs z jednym noclegiem po Zatoce Lan Hạ i spokojnym południowym skraju Zatoki Hạ Long. Wybierzcie większy, stabilniejszy statek, na którym każda kabina ma łazienkę, zamiast kajaka popłyńcie bambusową łodzią, którą wiosłują miejscowi, a zachód słońca oglądajcie z pokładu.'] } },
    caobang: { easy: {
      0: ['Na północ, pod granicę', 'Długa, ale malownicza jazda – najlepiej z przerwą na obiad. Nocleg w mieście Cao Bằng; na kolejne dni zarezerwujcie wygodny samochód z kierowcą.'] } },
    babe: { solo: {
      0: ['Jezioro w jedno popołudnie', 'Dotrzyjcie najpóźniej wczesnym popołudniem, zameldujcie się w domu na palach ludu Tày w Pác Ngòi i, póki jest jasno, popłyńcie łodzią do jaskini Puông i na wyspę Ba Góa. Zmierzch na brzegu jeziora.'] }, easy: {
      1: ['Na wodzie', 'Łodzią do jaskini Puông, wodospadu Đầu Đẳng i na wyspę Ba Góa; wysiłek zostawcie przewoźnikowi. Po południu niespieszny spacer brzegiem jeziora.'],
      2: ['Spokojny poranek nad jeziorem', 'Krótka przejażdżka łodzią do sąsiedniej wioski Tày i lekcja gotowania z gospodarzami. Wieczorem zapytajcie o śpiew Then.'] } }
  }
};
