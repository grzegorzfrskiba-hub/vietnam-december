var fake = { days: 3, gentle: false, stops: [
  { id: 'dalat', n: 2, leg: { total: 3.2, segs: [{ mode: 'fly', h: 1 }, { mode: 'road', h: 0.5 }] },
    days: [{ pace: 'travel' }, { pace: 'hike' }] },
  { id: 'hanoiStop', n: 1, leg: { total: 2, segs: [{ mode: 'road', h: 2 }] }, days: [{ pace: 'hike' }] },
  { id: 'saigon', n: 0, leg: null, days: [] }
] };
eq(routeStats(fake), { flights: 1, hikes: 2, longest: 3.2, bases: 2 }, 'routeStats');
print('routeStats ok');
