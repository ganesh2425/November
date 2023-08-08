// function sayHi(){
//     console.log(name);
//     console.log(age);
//     var name="ganesh";
//     let age=25;


// }
// sayHi();

// let a = [1,2,3,4];
// let z = { name: "Ganesh"};

// console.log(...a);

// console.log(typeof NaN)

// let data = 10 - - 10

// console.log(data)

// const set = new Set([1,1,2,3,4,4]);

// console.log(set);

// let data = { name: "Amith" };

// console.log(delete data.name);
// console.log(data);

// const data = { name: "Hello" };
// console.log(delete data);
// console.log(data);

// const data = ["anil", "ramesh", "mahesh"];
// const [y] = data;

// console.log(y);

// const data = {name:"robert", age: 25}

// const {age} = data;
// console.log(age)

// const data = {name:"thapa", age:26};
// const info = {city:"bangalore", mail:"thapa23@gmail.com"};

// datas = {...data,...info};
// console.log(datas);

// let data ={name: "anil", age:30};
// let info ={city:"delhi"};

// datas = {data,...info}
// console.log(datas)

// let data ={name: "anil", age:30, skill: "node"};
// let info ={city:"noida", skill:"react"};

// datas = {...data,...info}
// console.log(datas)

// const name = "Kullai";
// console.log(name());

// const result = false || {} || null;
// console.log(result);

// const result = null || "" || false;
// console.log(result)

// const result = null || false || "";
// console.log(result);

// const result = [] || 0 || true;
// console.log(result);

// console.log(Promise.resolve(5));

// console.log("heart" === "heart");

// JSON.parse();

// let name = "siddu";
// function getName() {
//     console.log(name);
//     let name = "anil"
// }
// getName();

// let name = "siddu";

// function getName(){
//     console.log(name)
// }
// getName();

// console.log(`${(x =>x) ('I Love')} Programming!!`)

// function sumVlues (x,y,z){
//     return x+y+z;
// }
// console.log(sumVlues(...[2,3,4]));

// const name = "code step by step!!";
// console.log(!typeof name === "string");
// console.log(!typeof name === "object");
// console.log(!typeof name === false);

// const name = "James";
// const age = 67;
// console.log(isNaN(name));
// console.log(isNaN(age));

// const person = {name: "Siddu"};

// Object.seal(person);
// person.name = "Ganesh"
// console.log(person);

// let data = [2,5,9,3];
// remove first element
// data.shift();
// console.log(data);

// remove last element
// let data = [4,9,5,7];
// data.pop();
// console.log(data);

//check any value is odd or even
// let a = 32
// console.log(a%2);

// let data ={
//     name: "John"
// };
// delete data.name;
// console.log(data)

//convet data to boolean false value
// let data = "true";
// console.log(!data)

// difference between map and foreach
// map function will retun new function 
// foreach function will return undefined

// let data =["anil","peter","bruse"];
// delete data[1];
// console.log(data.length);

// Value replace 
// let str = "Hello world Good morning!";
// console.log(str.replace('H', "G"));

//get subString() from string
// let str = "Hello How are you";
// let temp = str.substring(1, str.length);

// console.log(temp)

// let str = 'Hello How are you';
// let temp = str.split('e');

// console.log(temp);

// convert total string into reverse
// let str = "Hello How are you";
// let temp = str.split("").reverse().join("");

// console.log(temp);

//remove extra space from both side
// let str = "    Hello    ";

// console.log(str.trim()); 

// let data = ["anil","ramana","mahesh"];
// delete data[1];

// console.log(data.length);

// merging two arrays
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,0];
// let arr3 = [...arr1,...arr2];

// console.log(arr3)

// let a = [1,2,3,4];
// let b = [4,5,6];
// let c = [...a, ...b];

// console.log(c);

// let c = 5 ** 3
// console.log(c)

// let a = 10;

// setTimeout(()=>{
//     console.log(a)
// },0);
// a = 100;

// let a = 10;
// let A = 80;
// console.log(a);

// let A10 = "okay";
// let 5B = "THEN";

// console.log(A10);

// let a = "like";
// let b = `like`;

// console.log(a === b);

// let a = 2;
// let c = 3;

// console.log(--c)
// console.log(--c === a);

// let a = 1;
// let b = 1;
// let c = 2;

// console.log(a === b);
// console.log(a === b === --c);

// console.log(3*3);
// console.log(3**3)
// console.log(3***3)

// console.log(a);
// var a;

// console.log(b);

// console.log([[[[]]]]);

// function fruit (){
//     console.log(name);
//     console.log(price);

//     var name = "mango";
//     let price = 36
// }
// fruit();

// for(let i =0; i< 3; i++){
//     setTimeout(() => {
//         console.log(i)
//     },1);
// }

// console.log(+true)
// console.log(typeof +true)

// console.log(!"anil");
// console.log(typeof ("anil"));

// let data = "size";
// const bird = {
//     size: "small",
// };

// console.log(bird[data]);
// console.log(bird['size']);
// console.log(bird.size);
// console.log(bird.data);

// let c ={name: "Rathnam"};
// let d;

// d = c
// c.name = "Ashish";
// console.log(d.name);

// var x;
// var x = 10;
// console.log(x);

// var x;
// let x = 20;
// console.log(x);

// let a = 3;
// let b = new Number(3);

// console.log(a == b);
// console.log(a === b);
// console.log(typeof b)

// function fruit(){
//     console.log('!Woof')
// }

// fruit.name = "Amith";
// fruit();

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(3,"6"));

// let number = 0;

// console.log(number++);
// console.log(++number);
// console.log(number);

// function getArg(...args){
//     console.log(typeof args)
// }

// getArg(32);

// function getAge(){
//     'use strict';
//      age = 23;
//     console.log(age)
// }
// getAge();

// const sum = eval('10*10+55');
// console.log(sum);

// let obj = {a:"one", b:"two", a:"repeat"};
// console.log(obj);

// for (let i = 1; i < 5; i++){
//     if(i === 3) continue;
//     console.log(i);
// }

// const foo = ()=> console.log('First');
// const bar = ()=> setTimeout(()=> console.log('Second'));
// const coz = ()=> console.log('Third');

// foo();
// bar();
// coz();

// const person = {name: "Anil"};

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,21));
// console.log(sayHi.bind(person,23)());

let student = {
    name: "Anil",
    lastName: "Siddu",
    getFullName: function(){
        return this.name+ "" + this.lastName
    }
}
console.log(student.getFullName());


