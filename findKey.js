const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * a function that takes in an object and a callback, and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
 * @param {object} object
 * @param {function} callback
 * @returns {key in object} key in the object
 */
// no need for a variable to catch. just needs to return a key
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) { 
      return key;
           
    }   
  }
};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

// assertEqual(findKey, "noma")