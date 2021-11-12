let array = ['a','b','d','a','c','d'];

let uniquearray = [...new Set(array)];
console.log(uniquearray);

let fruits = ["mango","kivi","banana","grapes","kivi","mango","banana"];

let uniquefruits = fruits.filter((grapes, index) =>{
    return fruits.indexOf(grapes) === index;
});
console.log(uniquefruits);

let dupfruits = fruits.filter((grapes, index) =>{
    return fruits.indexOf(grapes) !== index;
});
console.log(dupfruits);