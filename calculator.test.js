const calculator = require('./calculator');
//Arrange
describe('calculator', () => {
//Act
  test('Units', () => {
//Assert
    expect(calculator.add(5, 5)).toBe(10);
  });
//Act
  test('Tens', () => {
//Assert
    expect(calculator.add(44, 55)).toBe(99);
  });
//Act
  test('Hundreds', () => {
//Assert
    expect(calculator.add(150, 150)).toBe(300);
  });
});

//Arrange
describe('calculator', () => {
    //Act
  test('Positive numbers', () => {
      //Assert
    expect(calculator.subtract(10, 5)).toBe(5);
  });
  //Act
  test('Second number is bigger', () => {
      //Assert
    expect(calculator.subtract(10, 25)).toBe(-15);
  });
  //Act
  test('Negative numbers', () => {
      //Assert
    expect(calculator.subtract(-10, -5)).toBe(-5);
  });
});

//Arrange
describe('calculator', () => {
    //Act
  test('Positive numbers', () => {
      //Assert
    expect(calculator.multiply(5, 5)).toBe(25);
  });
  //Act
  test('Posive times negative', () => {
      //Assert
    expect(calculator.multiply(-5, 5)).toBe(-25);
  });
  //Act
  test('Negative numbers', () => {
      //Assert
    expect(calculator.multiply(-5, -5)).toBe(25);
  });
});

//Arrange
describe('calculator', () => {
    //Act
  test('Even number', () => {
      //Assert
    expect(calculator.divide(4, 2)).toBe(2);
  });
  //Act
  test('Odd number', () => {
      //Assert
    expect(calculator.divide(5, 2)).toBe(2.5);
  });
  //Act
  test('Regular numbers', () => {
      //Assert
    expect(calculator.divide(21, 3)).toBe(7);
  });
});