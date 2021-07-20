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

    expect(result).toEqual([16, 64]);
  });

  test('객체를 순회하며 나온 결과 값의 배열을 반환한다.', () => {
    const result = _.map({ 'a': 4, 'b': 8 }, square);

    expect(result).toEqual([16, 64]);
  });

  test('문자열을 순회하며 나온 결과 값의 배열을 반환한다.', () => {
    const fn = jest.fn((n) => n + 1);

    const result = _.map('abc', fn);

    expect(result).toEqual(['a1', 'b1', 'c1']);
  });
});

describe('filter', () => {
  const isPositive = jest.fn((n) => n > 0);

  test('배열을 순회하며 조건을 통과한 값의 배열을 반환한다.', () => {
    const result = _.filter([1, -1, 2, 0], isPositive);

    expect(result).toEqual([1, 2]);
  });

  test('객체를 순회하며 조건을 통과한 값의 배열을 반환한다.', () => {
    const result = _.filter({ a: 1, b: -1, c: 2, d: 0 }, isPositive);

    expect(result).toEqual([1, 2]);
  });

  test('문자열을 순회하며 조건을 통과한 값의 배열을 반환한다.', () => {
    const isOdd = jest.fn((n) => parseInt(n) % 2);

    const result = _.filter('123456789', isOdd);

    expect(result).toEqual(['1', '3', '5', '7', '9']);
  });
});

describe('reduce', () => {
  describe('배열', () => {
    const arr = [1, 2, 3, 4];
    const reducer = (acc, cur) => acc + cur;

    test('배열을 순회하며 리듀서를 실행한 값을 반환한다. (초기값 있음)', () => {
      const result = _.reduce(arr, reducer, 1);
      expect(result).toBe(11);
    });

    test('배열을 순회하며 리듀서를 실행한 값을 반환한다. (초기값 없음)', () => {
      const result = _.reduce(arr, reducer);
      expect(result).toBe(10);
    });

    test('빈 배열이고 초기값 있을 경우 초기값을 반환한다.', () => {
      const result = _.reduce([], reducer, 1);
      expect(result).toBe(1);
    });

    test('빈 배열이고 초기값 없을 경우 undefined를 반환한다.', () => {
      const result = _.reduce([], reducer);
      expect(result).toBeUndefined();
    });
  });

  describe('객체', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const reducer = (acc, cur) => acc + cur;

    test('객체를 순회하며 리듀서를 실행한 값을 반환한다. (초기값 있음)', () => {
      const result = _.reduce(obj, reducer, 1);
      expect(result).toBe(11);
    });

    test('객체를 순회하며 리듀서를 실행한 값을 반환한다. (초기값 없음)', () => {
      const result = _.reduce(obj, reducer);
      expect(result).toBe(10);
    });

    test('빈 객체이고 초기값 있을 경우 초기값을 반환한다.', () => {
      const result = _.reduce({}, reducer, 1);
      expect(result).toBe(1);
    });

    test('빈 객체이고 초기값 없을 경우 undefined를 반환한다.', () => {
      const result = _.reduce({}, reducer);
      expect(result).toBeUndefined();
    });
  });

  describe('문자열', () => {
    const str = '1234';
    const reducer = (acc, cur) => parseInt(acc) + parseInt(cur);

    test('문자열을 순회하며 리듀서를 실행한 값을 반환한다. (초기값 있음)', () => {
      const result = _.reduce(str, reducer, 1);
      expect(result).toBe(11);
    });

    test('문자열을 순회하며 리듀서를 실행한 값을 반환한다. (초기값 없음)', () => {
      const result = _.reduce(str, reducer);
      expect(result).toBe(10);
    });

    test('빈 문자열이고 초기값 있을 경우 초기값을 반환한다.', () => {
      const result = _.reduce('', reducer, 1);
      expect(result).toBe(1);
    });

    test('빈 문자열이고 초기값 없을 경우 undefined를 반환한다.', () => {
      const result = _.reduce('', reducer);
      expect(result).toBeUndefined();
    });
  });
});
