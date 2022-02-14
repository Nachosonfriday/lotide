const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

console.log("Assert Equal Test")
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Tonks", "Tonks");
assertEqual(4,10);

console.log("Head Test")
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);