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




const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["This", "is", "an", "example", "sentence."];
const takeUntil = function(array, callback) {
  let result = [];
  for (let ele of array) {
    if (callback(ele)) {
      return result;
    }
    result.push(ele);
  } return results;
};
const results = takeUntil(data2, x => x === ',');
console.log(results);

assertArraysEqual(results, [ "I've", 'been', 'to', 'Hollywood' ]);
assertArraysEqual(takeUntil(data3, x => x === 'an'), ["This","is"]);

//const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
//
//console.log('---');
//
//const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);
//
//[ 1, 2, 5, 7, 2 ]
//--
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]