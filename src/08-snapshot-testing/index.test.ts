// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  const input = [1, 2, 3, 4];
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    // Write your test here
    const result = generateLinkedList(input);
    const expected = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: null,
              next: null,
            },
          },
        },
      },
    };
    expect(result).toStrictEqual(expected);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const result = generateLinkedList(input);
    expect(result).toMatchSnapshot();
  });
});
