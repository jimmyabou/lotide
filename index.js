const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey= require("./findKey");
const findKeybyValue= require("./findKeybyValue");
const letterPositions= require("./letterPositions");
const map= require("./map");
const takeUtil= require("./takeUtil");
const without= require("./without");

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual:  assertArraysEqual,
  assertEqual:  assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly:  countOnly,
  eqArrays: eqArrays,
  findKey:  findKey,
  findKeybyValue: findKeybyValue,
  letterPositions:  letterPositions,
  map:  map,
  takeUtil: takeUtil,
  without:  without
};