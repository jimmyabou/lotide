// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let green = '\u{1F7E2}';
    return console.log(`${green}${green}${green} Assertion Passed: ${actual}===${expected}`);
  }
  let red = '\u{1F534}';
  return console.log(`${red}${red}${red} Assertion Failed: ${actual}===${expected}`);
};
/////////////////////////////////////////////////////

//Implement the function findKey which takes in an object and a callback.
// It should scan the object and return the first key for which the callback
//  returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(object,callback) {
  for (let obj in object) {
    if (callback(object[obj])) {
      return obj;
    }
  }
  return;
};
let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2},
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 0 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
//console.log(result);

//assertEqual(result,"noma");
module.exports=findKey;