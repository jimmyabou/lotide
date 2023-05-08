// FUNCTION IMPLEMENTATION
//const assertEqual = function(actual, expected) {
//  if (actual === expected) {
//    let green = '\u{1F7E2}';
//    return console.log(`${green}${green}${green} Assertion Passed: ${actual}===${expected}`);
//  }
//  let red = '\u{1F534}';
//  return console.log(`${red}${red}${red} Assertion failed: ${actual}===${expected}`);
//};
//const assertEqual = require('./assertEqual');
const head = function(array) {
  return array[0];
};
module.exports=head;
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hell");
// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);