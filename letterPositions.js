const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑Assertion Passed: ${actual} !==  ${expected}`);
  } else {
    console.log(`👹👹Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i) //push(i) with() adds to the array
      } else {
        results[sentence[i]] = [i] //[i] creates an array with the index
      }
    }
  }
  return results;
};


console.log(letterPositions('lighthouse labs'));

