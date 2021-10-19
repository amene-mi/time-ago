const isToday = require('./today');

test('Test is today function', () => {
   expect(isToday(new Date(), new Date())).toBe(true);
});
