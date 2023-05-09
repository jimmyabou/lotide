
//const assertArraysEqual=require('../assertArraysEqual');
//const middle = require('../middle');
//console.log(middle([1,2,3,4,5,6,7]));
//console.log(assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]));
//
//console.log(middle([1,2,3,4,5,6]));
//console.log(assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]));
//
//console.log(middle([1,2]));
//console.log(assertArraysEqual(middle([1,2]),[]));

const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 4 for [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]),[4]);
  });
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]); 
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]); 
  });
});