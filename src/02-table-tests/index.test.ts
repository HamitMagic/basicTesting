// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 15, b: 3, action: Action.Divide, expected: 5 },
  { a: 15, b: 5, action: Action.Divide, expected: 3 },
  { a: 15, b: 15, action: Action.Divide, expected: 1 },
  { a: 3, b: 1, action: Action.Subtract, expected: 2 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 3, b: 3, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)(
    '$a $action $b = $expected',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
  // Consider to use Jest table tests API to test all cases above
});
