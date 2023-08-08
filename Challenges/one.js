//find min and max value in given array

const numbers = [23,34,56,11,9,78,49,63,28];

const min = Math.min(...numbers);
console.log(min);

const max = Math.max(...numbers);
console.log(max);


//finding min and max without using methods

const number = [23,34,56,11,9,78,49,63,28,99,3];

var minimum = number[0];
var maximum = number[0];

for(var i =1; i < number.length; i++){
    if(number[i] < minimum){
        minimum = number[i]
    }
    if(number[i] > maximum){
        maximum = number[i];
    }
}

console.log(minimum);
console.log(maximum);
