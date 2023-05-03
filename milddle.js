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

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length<3){
    return "error";
  }
  if (array.length%2===0){
    let index=array.length/2
    let arr=array.slice(index-1,index+1);
    return arr;
  }
  if (array.length%2===1){
    let index=Math.floor(array.length/2);
     let arr=array.slice(index,index+1);
    return arr;
  }
};

// TEST CODE
console.log(middle([1,2,3,4,5,6,7]));
console.log(assertArraysEqual (middle([1,2,3,4,5,6,7]),[4]));

console.log(middle([1,2,3,4,5,6]));
console.log(assertArraysEqual (middle([1,2,3,4,5,6]),[3,4]));

console.log(middle([1,2]));
console.log(assertArraysEqual (middle([1,2]),"error"));