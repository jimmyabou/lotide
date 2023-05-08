
const words = ["Yo Yo", "Lighthouse", "Labs"];

const tail = function(array) {
  let tailArr = array.slice(1);
  return tailArr;
};
module.exports=tail;
//tail(words); // no need to capture the return value since we are not checking it

//
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");