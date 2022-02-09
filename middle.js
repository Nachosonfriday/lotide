// test assert functions
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    } 
  } 
  return true
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

const middle = function(array) {
  if (array.length <= 2) {
    return []
  } else if (array.length % 2 === 0) { //returns for even arrays
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
}

const test = [1, 2, 3, 4];
middle(test);
assertArraysEqual(test, [1, 2, 3, 4]);
// returns the middle function as an array
// return 1 middle item with odd numbered array
// return 2 middle items with even numbered array

//edge cases
// for arrays with 1 or 2 items, return an empty array

