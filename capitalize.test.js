//Arange
const capFirst = require('./capitalize');
//Act
test('Return first letter as capital', () => {
//Assert    
  expect(capFirst('hello')).toBe('Hello');
});