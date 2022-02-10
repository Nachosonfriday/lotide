const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑Assertion Passed: ${actual} !==  ${expected}`);
  } else {
    console.log(`👹👹Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// takes a sentence as a string
// returns a count of each letter in that string

const countLetters = function(sentence) {
  const results = {}

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1
      } else {
        results[letter] = 1
      }
    }
  } 
  return results
}

const test = countLetters("how many letters in here")
console.log(test)