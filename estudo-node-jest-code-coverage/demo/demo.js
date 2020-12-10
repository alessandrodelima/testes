/* eslint-disable prettier/prettier */
const lib = require("../src");

const sum = lib.sum(3, 5);
const subtract = lib.subtract(3, 5);
const multiply = lib.multiply(3, 5);
const divide = lib.divide(3, 5);

console.log(sum);
console.log("Esse é o subtract "+ subtract);
console.log(multiply);
console.log(divide);
