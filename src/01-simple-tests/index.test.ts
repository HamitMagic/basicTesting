// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 7, b: 3, action: Action.Add });
    expect(result).toBe(10);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 7, b: 3, action: Action.Subtract });
    expect(result).toBe(4);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 7, b: 3, action: Action.Multiply });
    expect(result).toBe(21);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 18, b: 3, action: Action.Divide });
    expect(result).toBe(6);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ a: 18, b: 3, action: 'any' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({ a: 'null', b: 3, action: Action.Add });
    expect(result).toBeNull();
  });
});
