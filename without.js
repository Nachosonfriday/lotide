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

const without = function(source, itemsToRemove) {
  let result = []
  for (let i = 0; i < source.length; i++) {
    let isRepeat = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isRepeat = true;
        break;
      }
    } 
    if (!isRepeat) {
      result.push(source[i]);
    }
  }
  return result;
}

//console.log(without([1, 2, 3, 4, 5], [1, 2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);