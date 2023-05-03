//// FUNCTION IMPLEMENTATION
//const assertEqual = function(actual, expected) {
//  if (actual === expected) {
//    let green = '\u{1F7E2}';
//    return console.log(`${green}${green}${green} Assertion Passed: ${actual}===${expected}`);
//  }
//  let red = '\u{1F534}';
//  return console.log(`${red}${red}${red} Assertion Failed: ${actual}===${expected}`);
//};

const eqArrays = function(firstArray,SecondArray) {
  if (firstArray.length !== SecondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== SecondArray[i]) {
      return false;
    }
  }
  return true;
};

//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false
//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true)
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const assertArraysEqual = function(first,second) {
  if (eqArrays(first,second)) {
    let green = '\u{1F7E2}';
    return console.log(`${green}${green}${green} Assertion Passed: ${JSON.stringify(first)}===${JSON.stringify(second)}`);
  }
  let red = '\u{1F534}';
  return console.log(`${red}${red}${red} Assertion Failed: ${JSON.stringify(first)}===${JSON.stringify(second)}`);
};


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true)
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false