// rest parameter
const [one, two, ...rest] = ["tomato","carrot","apple","mushroom","sweetcon","brinjals"];

console.log(one);
console.log(two);
console.log(rest);

// spread operator
const emp = ["gani","sam","ravi","rose","lakshman"];
const Newemp = [...emp];

console.log(Newemp);
console.log(emp === Newemp);

// swap values with destructuring
let first = "kummara";
let last = "ganesh";
[first, last] = [last, first]

console.log(first);
console.log(last);

//merge  arrays
let fruits = ["mango","kivi","orange","grapes"];
let veggies = ["samosa","chips","pufs","bujji"];

let fruitVeggies = [...fruits, ...veggies];
console.log(fruitVeggies);