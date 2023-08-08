//remove duplicate elements from an array

const array = [1,4,6,10,"banana",10,4,8,67,98,"banana","kivi"];

const uniqueElements = array.filter((element, index)=>{
    return array.indexOf(element) === index
});

console.log(uniqueElements);

//reverse string using inbuilt methods

let string = "javascript";

let reversed = string.split('').reverse().join('');
console.log(reversed);

//swap the values of two variables

let x = 10;
let y = 23;

[x,y] = [y,x];

console.log(x);
console.log(y);