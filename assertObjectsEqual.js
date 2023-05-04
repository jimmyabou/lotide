
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let green = '\u{1F7E2}';
    return console.log(`${green}${green}${green} Assertion Passed: ${actual}===${expected}`);
  }
  let red = '\u{1F534}';
  return console.log(`${red}${red}${red} Assertion Failed: ${actual}===${expected}`);
};

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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (let element of array1) {
    //if(typeof object1[element]==='object'){
    if (Array.isArray(object1[element])) {
      eqArrays(object1[element],object2[element]);
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  //console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected) === false) {
    let red = '\u{1F534}';
    console.log(`${red}${red}${red} Assertion Failed: ${inspect(actual)}===${inspect(expected)}`);
  } else {
    let green = '\u{1F7E2}';
    console.log(`${green}${green}${green} Assertion Passed: ${inspect(actual)}===${inspect(actual)}`);
  }

};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1'});