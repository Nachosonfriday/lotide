const assertEqual = require('../assertEqual');
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log("Middle Test");
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3] );
assertArraysEqual(middle([]), [])
assertArraysEqual(middle([1, 2, 3]), [2])