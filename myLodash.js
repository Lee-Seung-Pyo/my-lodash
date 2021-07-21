module.exports = {
  identity(value) {
    return value;
  },
  hasLength(collection) {
    const length = collection.length;

    return Number.isInteger(length) && length >= 0;
  },
  getKeys(collection) {
    return this.hasLength(collection)
      ? [...Array(collection.length).keys()]
      : Object.keys(collection);
  },
  forEach(collection, iteratee = this.identity) {
    const keys = this.getKeys(collection);
    const length = keys.length;

    for (let i = 0; i < length; i++) {
      const result = iteratee(collection[keys[i]], keys[i], collection);

      if (result === false) {
        break;
      }
    }

    return collection;
  },
  map(collection, iteratee = this.identity) {
    const keys = this.getKeys(collection);
    const length = keys.length;
    const mappedArray = [];

    for (let i = 0; i < length; i++) {
      const result = iteratee(collection[keys[i]], keys[i], collection);
      mappedArray.push(result);
    }

    return mappedArray;
  },
  filter(collection, predicate = this.identity) {
    const keys = this.getKeys(collection);
    const length = keys.length;
    const filteredArray = [];

    for (let i = 0; i < length; i++) {
      const result = predicate(collection[keys[i]], keys[i], collection);

      if (result) {
        filteredArray.push(collection[keys[i]]);
      }
    }

    return filteredArray;
  },
  reduce(collection, iteratee = this.identity, accumulator) {
    const keys = this.getKeys(collection);
    const length = keys.length;
    let i = 0;

    if (accumulator === undefined) {
      accumulator = collection[keys[0]];
      i = 1;
    }

    for (; i < length; i++) {
      accumulator = iteratee(
        accumulator,
        collection[keys[i]],
        keys[i],
        collection
      );
    }

    return accumulator;
  },
};
