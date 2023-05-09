// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let green = '\u{1F7E2}';
    return console.log(`${green}${green}${green} Assertion Passed: ${actual}===${expected}`);
  }
  let red = '\u{1F534}';
  return console.log(`${red}${red}${red} Assertion Failed: ${actual}===${expected}`);
};


//const findKeyByValue=function(genre,value){
//  for (key in genre){
//    if(genre[key]===value){
//    return key;
//  }
//}
//};
//const bestTVShowsByGenre = {
//  sci_fi: "The Expanse",
//  comedy: "Brooklyn Nine-Nine",
//  drama:  "The Wire",
//};
//
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sci_fi");



const findKeyByValue = function(genre,value) {
  let array = [];
  array = Object.keys(genre);
  //console.log(array)
  for (let gen of array) {
    if (genre[gen] === value) {
      return gen;
    }
  }
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};

//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
module.exports = findKeyByValue;