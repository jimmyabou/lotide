//const assertEqual=require('../assertEqual');
//const tail=require('../tail');
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//assertEqual(tail(words).length, 2); 
//assertEqual(words.length, 3);
const assert = require('chai').assert;
const tail=require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  //it("returns '5' for ['5']", () => {
  //  assert.strictEqual(tail(['5']), '5'); 
  //});
});