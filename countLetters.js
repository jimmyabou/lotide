// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let green = '\u{1F7E2}';
    return console.log(`${green}${green}${green} Assertion Passed: ${actual}===${expected}`);
  }
  let red = '\u{1F534}';
  return console.log(`${red}${red}${red} Assertion Failed: ${actual}===${expected}`);
};
let result = {};
const countLetters = function(string) {
  for (let letter of string) {
    if (letter !== " ") {
      
    
      if (result[letter] === undefined) {
        result[letter] = 1;
      } else {
        result[letter]++;
      }
    }
  } return result;
};
//console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;