// function Hoisting
// calling the function before declaration
console.log(sayHello());

function sayHello(){
    return "Hello";
}

// moved the declaration at the top
function sayHello(){
    return "World!!"
}

console.log(sayHello());