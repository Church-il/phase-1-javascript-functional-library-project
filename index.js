// Collection Functions (Arrays or Objects)

// Iterates over the collection, passing each element to the callback
function myEach(collection, callback) {
  const isArray = Array.isArray(collection);
  const values = isArray ? collection : Object.values(collection);

  values.forEach((value, index) => {
      const key = isArray ? index : Object.keys(collection)[index];
      callback(value, key, collection);
  });

  return collection;
}

// Produces a new array of values by mapping each value through the callback
function myMap(collection, callback) {
  const isArray = Array.isArray(collection);
  const values = isArray ? collection : Object.values(collection);

  return values.map((value, index) => {
      const key = isArray ? index : Object.keys(collection)[index];
      return callback(value, key, collection);
  });
}

// Reduces the collection to a single value based on the callback
function myReduce(collection, callback, acc) {
  const isArray = Array.isArray(collection);
  const values = isArray ? collection : Object.values(collection);

  let startIndex = 0;

  if (acc === undefined) {
      acc = values[0];
      startIndex = 1;
  }

  for (let i = startIndex; i < values.length; i++) {
      const key = isArray ? i : Object.keys(collection)[i];
      acc = callback(acc, values[i], collection);
  }

  return acc;
}

// Finds the first value that passes the predicate test
function myFind(collection, predicate) {
  const isArray = Array.isArray(collection);
  const values = isArray ? collection : Object.values(collection);

  for (let i = 0; i < values.length; i++) {
      const key = isArray ? i : Object.keys(collection)[i];
      if (predicate(values[i], key, collection)) {
          return values[i];
      }
  }

  return undefined;
}

// Filters the collection based on the predicate
function myFilter(collection, predicate) {
  const isArray = Array.isArray(collection);
  const values = isArray ? collection : Object.values(collection);

  return values.filter((value, index) => {
      const key = isArray ? index : Object.keys(collection)[index];
      return predicate(value, key, collection);
  });
}

// Returns the number of values in the collection
function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions

// Returns the first element or first n elements of an array
function myFirst(array, n) {
  if (n === undefined) {
      return array[0];
  }
  return array.slice(0, n);
}

// Returns the last element or last n elements of an array
function myLast(array, n) {
  if (n === undefined) {
      return array[array.length - 1];
  }
  return array.slice(-n);
}

// BONUS: Sorts an array based on the callback
function mySortBy(array, callback) {
  return [...array].sort((a, b) => {
      const aVal = callback(a);
      const bVal = callback(b);

      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
      return 0;
  });
}

// BONUS: Flattens a nested array
function myFlatten(array, shallow = false, newArr = []) {
  array.forEach(value => {
      if (Array.isArray(value)) {
          if (shallow) {
              newArr.push(...value);
          } else {
              myFlatten(value, shallow, newArr);
          }
      } else {
          newArr.push(value);
      }
  });

  return newArr;
}

// Object Functions

// Returns an array of the object's keys
function myKeys(object) {
  return Object.keys(object);
}

// Returns an array of the object's values
function myValues(object) {
  return Object.values(object);
}
