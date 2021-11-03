const calculator = require('./calculator');

describe('calculator', () => {
  test('Units', () => {
    expect(calculator.add(5, 5)).toBe(10);
  });
  test('Tens', () => {
    expect(calculator.add(44, 55)).toBe(99);
  });
  test('Hundreds', () => {
    expect(calculator.add(150, 150)).toBe(300);
  });
});

describe('calculator', () => {
  test('Positive numbers', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
  });
  test('Second number is bigger', () => {
    expect(calculator.subtract(10, 25)).toBe(-15);
  });
  test('Negative numbers', () => {
    expect(calculator.subtract(-10, -5)).toBe(-5);
  });
});

describe('calculator', () => {
  test('Positive numbers', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });
  test('Posive times negative', () => {
    expect(calculator.multiply(-5, 5)).toBe(-25);
  });
  test('Negative numbers', () => {
    expect(calculator.multiply(-5, -5)).toBe(25);
  });
});

describe('calculator', () => {
  test('Even number', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test('Odd number', () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
  });
  test('Regular numbers', () => {
    expect(calculator.divide(21, 3)).toBe(7);
  });
});