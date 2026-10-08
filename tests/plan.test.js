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
print('budgetFor ok');
