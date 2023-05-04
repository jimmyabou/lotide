
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

const assertArraysEqual = function(first,second) {
  if (eqArrays(first,second)) {
    let green = '\u{1F7E2}';
    return console.log(`${green}${green}${green} Assertion Passed: ${JSON.stringify(first)}===${JSON.stringify(second)}`);
  }
  let red = '\u{1F534}';
  return console.log(`${red}${red}${red} Assertion Failed: ${JSON.stringify(first)}===${JSON.stringify(second)}`);
};



const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
//console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word.length), [6,7,2,5,3]);
//assertArraysEqual(map(words, word => word.), [6,7,2,5,3]);