const assertArraysEqual=function(first,second){
  if(eqArrays(first,second)===true){
    let green = '\u{1F7E2}';
    return console.log(`${green}${green}${green} Assertion Passed: ${JSON.stringify(first)}===${JSON.stringify(second)}`);
  }
    let red = '\u{1F534}';
    return console.log(`${red}${red}${red} Assertion Failed: ${JSON.stringify(first)}===${JSON.stringify(second)}`);
};

const eqArrays=function(firstArray,SecondArray){
  if (firstArray.length!==SecondArray.length){
    return false;
  }
  for (var i=0;i<firstArray.length;i++){
    if(firstArray[i]!==SecondArray[i]){
      return false;
    }
  }
  return true;
}