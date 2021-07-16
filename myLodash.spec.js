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