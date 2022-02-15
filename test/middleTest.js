const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    const arr = [1, 2, 3, 4];
    assert.deepEqual(middle(arr), [2, 3]);
  });

  it('returns [] for []', () => {
    const arr = [];
    assert.deepEqual(middle(arr), []);
  });

  it('returns [2] for [1, 2, 3]', () => {
    const arr = [1, 2, 3];
    assert.deepEqual(middle(arr), [2]);
  });
});