import {
  change,
  greet,
  maxParams,
  check,
  switchTest,
  foo,
} from './index';

describe('Partial coverage tests (~80%)', () => {
  test('change() increments number', () => {
    expect(change(9)).toBe(10);
  });

  test('greet() returns proper greeting', () => {
    expect(greet('Hello', 'Sanjida')).toBe('Hello, Sanjida');
  });

  test('maxParams() adds correctly', () => {
    expect(maxParams(1, 2, 3, 4, 5)).toBe(15);
  });

  test('check() returns positive or non-positive', () => {
    expect(check(5)).toBe('positive');
    expect(check(-2)).toBe('non-positive');
  });

  test('switchTest() handles valid and invalid values', () => {
    expect(switchTest(2)).toBe('two');
    expect(() => switchTest(9)).toThrow('Invalid value');
  });

  test('foo() executes safely', () => {
    expect(() => foo()).not.toThrow();
  });
});
