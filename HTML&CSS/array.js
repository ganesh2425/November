// find maximum value in numbered array
const numberArr = [3, 25,7,18,199,2009,368,19];
function findMaxValue(arr){
    return arr.reduce(function(prev, curr){
        return prev > curr ? prev : curr;
    })
}
console.log(findMaxValue(numberArr));

// find minimun value in numbered array
const arrayNumber = [3, 25,7,18,199,2009,368,19];
function findMinValue(arr){
    return arr.reduce(function(prev, curr){
        return prev < curr ? prev : curr;
    })
}
console.log(findMinValue(arrayNumber));

// find average of numbers in numbers array
const students = [10,30,79,236,87,265];

const totalCount = students.reduce((a,b)=> a+b, 0);
const arrLength = students.length

console.log(totalCount/arrLength);

// convert uppercase tp first element in an array
const  days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

let updateDays = [];
for (let day of days){
    day = day.charAt(0).toUpperCase() + day.substring(1);
    updateDays.push(day)
}

console.log(updateDays);

//make sentence of an array

const Name = ["Hello", "world", "Good", "morning", "have", "a", "nice", "day"];

const validName = Name.join(" ");
console.log(validName)

//...rest operator
const player = {
    name: "gani",
    age: 24,
    mail:"kummara0304@"
}

const {name, ...rest} = player
console.log(name);
console.log(rest)

//...spread operator
 const A = [10,5,29];
 const B = [98,17,76];

 const combo = [...A,...B];
 console.log(combo)

 ///////
 function sum(x,y,z){
    return x+y+z
 }
 const nubers = [18,99,28];
 console.log(sum(...nubers));