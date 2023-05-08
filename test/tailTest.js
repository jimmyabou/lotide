const assertEqual=require('../assertEqual');
const tail=require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2); 
assertEqual(words.length, 3);