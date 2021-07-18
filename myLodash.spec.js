const { test, expect } = require('@jest/globals');
const _ = require('./myLodash');

describe('forEach', () => {
  test('Array를 순회하며 메서드를 수행한다.', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    let i = 0;

    const fn = jest.fn((value, index, collection) => {
      expect(index).toBe(i + '');
      expect(value).toBe(arr[i]);
      expect(collection).toBe(arr);
      i += 1;
    });

    _.forEach(arr, fn);

    expect(fn.mock.calls.length).toBe(5);
  });

  test('Object를 순회하며 메서드를 수행한다.', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    };
    const keys = ['a', 'b', 'c', 'd', 'e'];
    let i = 0;

    const fn = jest.fn((value, key, collection) => {
      expect(key).toBe(keys[i]);
      expect(value).toBe(obj[keys[i]]);
      expect(collection).toBe(obj);
      i += 1;
    });

    _.forEach(obj, fn);

    expect(fn.mock.calls.length).toBe(5);
  });

  test('String을 순회하며 메서드를 수행한다.', () => {
    const str = 'hello world';
    let i = 0;

    const fn = jest.fn((value, index, collection) => {
      expect(index).toBe(i + '');
      expect(value).toBe(str[i]);
      expect(collection).toBe(str);
      i += 1;
    });

    _.forEach(str, fn);

    expect(fn.mock.calls.length).toBe(11);
  });
});

describe('map', () => {
  const square = jest.fn((n) => n * n);

  test('배열을 순회하며 나온 결과 값의 배열을 반환한다.', () => {
    const result = _.map([4, 8], square);

    expect(result[0]).toBe(16);
    expect(result[1]).toBe(64);
  });

  test('객체를 순회하며 나온 결과 값의 배열을 반환한다.', () => {
    const result = _.map({ 'a': 4, 'b': 8 }, square);

    expect(result[0]).toBe(16);
    expect(result[1]).toBe(64);
  });

  test('문자열을 순회하며 나온 결과 값의 배열을 반환한다.', () => {
    const fn = jest.fn((n) => n + 1);

    const result = _.map('abc', fn);

    expect(result[0]).toBe('a1');
    expect(result[1]).toBe('b1');
    expect(result[2]).toBe('c1');
  });
});