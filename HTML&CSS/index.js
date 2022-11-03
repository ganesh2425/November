const someArray = ["a","b","a","c","d","c"];

const uniqueValues = [...new Set(someArray)];
console.log(uniqueValues);



const textValues = ["11","20","30","45","37"];
const tax = textValues.some(checkTax);

function checkTax(val){
    return val >=60;
}
console.log(tax);


const isTrue = !0
console.log(isTrue);


// conditional statement
const user = {
    name: "Ganesh",
    mail: "kummara0304"
}
const conditionalStatement = user.name || "";
console.log(conditionalStatement)

// convert number to string
const numValue = 10+ "";
console.log(typeof numValue);

// conver string to number
let salery = "30";
salery = +30;
console.log(salery);
console.log(typeof salery)

// find duplicate arrays
const duplicateArrays = [10,27,6,18,27,10,6];

const duplicates = duplicateArrays.filter((element, index, array) => array.indexOf(element) !== index);
console.log(duplicates);

// find count of duplicates
const month = ["november","may","june","may","july","november","june","may"];
const countofDuplicates = month.reduce((obj, month) =>{
        if(obj[month] == undefined){
            obj[month] = 1;
            return obj;
        } else {
            obj[month]++;
            return obj;
        }
},{});
console.log(countofDuplicates);

// how to find it's number or not?
const validateValue = 467.9
console.log(isNaN(validateValue));

// object.freeze()
let person = {
    name: "kummara",
    mail: "saahoganesh"
}

Object.freeze(person);
person.name = "Hello world";

console.log(person)

// number sorting in array
const sortedNumber = [10,3,8,100,48,28,87,65];
const unsortedNumber = sortedNumber.sort((a,b)=>{
    return a-b;
});
console.log(unsortedNumber);

// array sorting in array
const months = ["june","january","december","august","may","july","march","october"]

console.log(months.sort())

// unique values with sorting
const numberIds = [30, 27, 28, 19, 27, 30, 48, 19, 79, 28 ];

const sortedArray = numberIds.filter((element, index, array) => indexOf(element) == index);
sortedArray.sort((a,b) => {
    return a-b
});
console.log(sortedArray);


