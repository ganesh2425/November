//Arrow functions: arrow functions in javascript gives you a shorter syntax compared to the function expression

// function expression
let add = function(x,y){
    return x+y
}

//arrow function syntax
let adds = (x,y) => x + y;

//multiline Arrow functions
//If a function body has multiple statements, you need to put them inside curly brackets{}
let sum =(a,b) => {
    let result = a + b;
    return result;
}

console.log(sum(5,10));