const assertArraysEqual = function(first,second) {
  if (eqArrays(first,second)) {
    let green = '\u{1F7E2}';
    return console.log(`${green}${green}${green} Assertion Passed: ${JSON.stringify(first)}===${JSON.stringify(second)}`);
  }
  let red = '\u{1F534}';
  return console.log(`${red}${red}${red} Assertion Failed: ${JSON.stringify(first)}===${JSON.stringify(second)}`);
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

const without = function(one,two) {
  let finalArray = one.slice();
  for (let i = 0; i < two.length; i++) {
    for (let y = 0; y < finalArray.length; y++) {
      if (finalArray[y] === two[i]) {
        finalArray.splice(y,1);
      }
    }
  } return finalArray;
};
//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"]))
//
//console.log(without([1, 2, 3], [3, 2, 1]))
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse","world"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);