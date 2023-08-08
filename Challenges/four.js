//Push(): Adding an elements to the end of an array

let cities = ["Bangalore","Pune","Kerala","Mumbai","Delhi"];
cities.push("Noida");
console.log(cities)

//Unshift(): Adding an elements to the beginning of an array

let citys = ["Bangalore","Pune","Kerala","Mumbai","Delhi"];
citys.unshift("Kolkata");
console.log(citys);

//Pop(): Removing an element from the end of an array

let fruits = ["Banana","Mango","Oarange","Grapes","Lichi"];
const poppedElements = fruits.pop()
console.log(poppedElements);

//Shift(): Removing ana elements from the beginning of an array

let fruit = ["Banana","Mango","Oarange","Grapes","Lichi"];
const shiftedElements = fruit.shift();
console.log(shiftedElements);

//indexOf(): Finding an indexOf an element in the array

let distics = ["Chittoor","Nellore","Tirupati","Rayachoti"];
let index = distics.indexOf('Tirupati');
console.log(index);