const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

// param {array} array
// function {function} callback
// returns {array} results

const takeUntil = function(array, callback) {
  const results = []; //captures the sliced result
    for (const item of array) {
      if (!callback(item)) {
        results.push(item); //keeps checking that the item is not satisfying condition, so pushes it to results
      } else {
        return results
      }
    } 
  }
  
  // takes in the callback function

  // the callback function will RETURN a slice of the array with the elements from the beginning
  //it keeps slicing till it hits a truthy value



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2] )
assertArraysEqual(results2, [ 1, 2, 5, 7, 2] )
assertArraysEqual(results2, [] )