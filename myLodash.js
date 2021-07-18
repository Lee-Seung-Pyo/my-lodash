module.exports = {
  identity(value) {
    return value;
  },
  forEach(collection, iteratee = this.identity) {
    const keys = Object.keys(collection);
    const length = keys.length;

    for (let i = 0; i < length; i++) {
      const result = iteratee(collection[keys[i]], keys[i], collection);

      if(result === false) {
        break;
      }
    }

    return collection;
  },
  map(collection, iteratee = this.identity) {
    const keys = Object.keys(collection);
    const length = keys.length;
    const mappedArray = [];

    for(let i = 0; i < length; i++) {
      const result = iteratee(collection[keys[i]], keys[i], collection);
      mappedArray.push(result);
    }

    return mappedArray;
  },
  filter() {},
  reduce() {}
};