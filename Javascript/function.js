// function currying

let multiply = function (x,y) {
    console.log (x * y)
}

/* 
let multiplyByTwo = function(y){
    let x = 2
    console.log(x * y)
}
*/
let multiplyByTwo = multiply.bind(this, 5)
multiplyByTwo(10);

let multiplyByThree = multiply.bind(this, 3, 4)
multiplyByThree()