//Arrange
const stringLength = require('./stringLength');
//Act
test ('Return number of characters', () => {
    //Assert
   expect(stringLength('microverse')).toBe(10);
 });

test ('Empty value is not expected', () => {
    //Assert
  expect(() => stringLength('')).toThrow(Error);
});

test ('10 characters is maximum allowed', () => {
    //Assert
    expect(() => stringLength('This is big string')).toThrow(Error);
});