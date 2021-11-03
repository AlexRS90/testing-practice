//Arrange
const reverseString = require('./reverseString');
//Act
it ('Return reverse string', () => {
  //Assert
  expect(reverseString('hello')).toBe('olleh');
});

test ('Empty String', () => {
  //Assert
  expect(() => reverseString('')).toThrow(Error);
});