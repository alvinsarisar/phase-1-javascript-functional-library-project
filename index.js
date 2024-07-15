// 1.Implementing myEach(collection,callback)
function myEach(collection, callback) {
    const isArray = Array.isArray(collection);
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // Implementing myMap
  function myMap(collection, callback) {
    const result = [];
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key]));
      }
    }
    return result;
  }
  
  // Implementing myReduce
  function myReduce(collection, callback, acc) {
    const keys = Array.isArray(collection) ? collection : Object.values(collection);
    let start = 0;
  
    if (acc === undefined) {
      acc = keys[0];
      start = 1;
    }
  
    for (let i = start; i < keys.length; i++) {
      acc = callback(acc, keys[i], collection);
    }
  
    return acc;
  }
  
  // Implementing myFind
  function myFind(collection, predicate) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (predicate(collection[key])) return collection[key];
      }
    }
    return undefined;
  }
  
  // Implementing myFilter
  function myFilter(collection, predicate) {
    const result = [];
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
    return result;
  }
  
  // Implementing mySize
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Implementing myFirst
  function myFirst(array, n) {
    if (n === undefined) return array[0];
    return array.slice(0, n);
  }
  
  // Implementing myLast
  function myLast(array, n) {
    if (n === undefined) return array[array.length - 1];
    return array.slice(-n);
  }
  
  // Implementing myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Implementing myValues
  function myValues(object) {
    return Object.values(object);
  }
  
