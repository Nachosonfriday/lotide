const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

console.log("Assert Arrays Equal test")
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [1, 2, 4])
assertArraysEqual([1, 2, 3], [1, 2, "4"])