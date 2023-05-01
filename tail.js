// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let green = '\u{1F7E2}';
    return console.log(`${green}${green}${green} Assertion Passed: ${actual}===${expected}`);
  }
  let red = '\u{1F534}';
  return console.log(`${red}${red}${red} Assertion failed: ${actual}===${expected}`);
};
const head= function(array){
  return array[0];
}
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
//const words = ["2"];
const tail=function(array){
  let tailArr=array.slice(1);
  return tailArr;
}
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words).length, 2); // original array should still have 3 elements!
assertEqual(words.length, 3);
//
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");