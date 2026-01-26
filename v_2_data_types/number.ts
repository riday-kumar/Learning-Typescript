let num1: number = 10;
let num2: number = 30;
let num3 = 50;
const total: number = num1 + num2;
const test: number = num1 + num3;
console.log(test);

const item1: number = 100;
const item2 = "50";
const item3 = "90";
const item2Converted = Number(item2);
console.log(typeof item2Converted);
console.log(item1 + item2Converted);
console.log(item1 + +item3); // using Unary plus

let data: number | string = 90;
data = "hridoy saha";
console.log(data);
