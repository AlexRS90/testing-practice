const stringLength = require('./stringLength');

test ('Return number of characters', () => {
   expect(stringLength('microverse')).toBe(10);
 });

test ('Empty value is not expected', () => {
  expect(() => stringLength('')).toThrow(Error);
});

test ('10 characters is maximum allowed', () => {
    expect(() => stringLength('This is big string')).toThrow(Error);
});