const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const arr = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(arr), ["Lighthouse", "Labs"]);
  });

  it('returns [1,2,3,4,5] for [0,1,2,3,4,5]', () => {
    const arr = [0,1,2,3,4,5]
    assert.deepEqual(tail(arr), [1,2,3,4,5]);
  });
});