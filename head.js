const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length === 0) {
    return undefined
  }
  return array[0]
  
}



module.exports = head;
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);