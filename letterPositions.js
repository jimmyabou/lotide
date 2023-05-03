
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

const letterPositions = function(sentence) {
  let results = {};
  let array=[];
  
  for(let i = 0; i < sentence.length; i++){
    let letter =sentence[i];
    console.log(letter);
    if (results[letter]===undefined){
        results[letter]=[];
    }
   results[letter].push(i);
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);