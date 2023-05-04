
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject),true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject),false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject),false); // => false