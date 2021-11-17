const Fruits = ["kivi","banana","mango","apple","grapes"];

for(let i=0; i<Fruits.length; i++){
  console.log(`Element at index ${i} is ${Fruits[i]}`);
}

// Note that the push() method adds an element to the end of the array.
const salad = ["orange","guava","potato","tomato","mirchi"];
salad.push("peanut");
console.log(salad)

//Every time you call the pop() method, it removes an element from the end of the array.
const movie = ["bahu","saaho","eega","dill","bujji"]
movie.pop()
console.log(movie)

// If you want to add an element to the beginning of the array, you'll need to use the unshift() method.
const emp =["ganesh","raja","sam","prakash"];
emp.unshift("priya");
console.log(emp);

//Use the shift() method to remove an element from the beginning of an array.
const states = ["andhra","karnataka","goa","kerala","orissa"];
states.shift()
console.log(states);

/*  You can copy and clone an array to a new array using the slice() method. 
    Note that the slice() method doesn't change the original array. 
    Instead, it creates a new shallow copy of the original array. */
const sallad = ["jack","kivi","pomo","beans","chaps"];
const salladCopy = sallad.slice();
console.log(salladCopy);
console.log(sallad === salladCopy);

// Using the concat() method we can merge more than two arrays. 
const first = [1,2,3,4];
const second = [5,6,7,8];

const merge = first.concat(second);
console.log(merge);

//The join() method joins all the elements of the array using a separator and returns a string.
const emotions = ["sad","fear","feeling","crying"];
const join = emotions.join('+');
console.log(join);

/*  The fill() method fills an array with a static value. You can change all the elements to a static value or change a few selected items. 
    Note that the fill() method changes the original array. */
const colors = ["yellow","red","green","blue"];
//colors.fill("pink");
colors.fill("pink", 1,3)
console.log(colors);

/*  You can determine the presence on an element in an array using the includes() method. 
    If the element is found, the method returns true, and false otherwise. */
const names =["james","williams","david","miller"];
console.log(names.includes("james"));
console.log(names.includes("ganesh"));

/*  You may want to know the index position of an element in array. You can use the indexOf() method to get that.
    If an element is not found, the indexOf() method returns -1. 
    There is another method lastIndexOf() that helps you find the index of the last occurrence of an element in the array.
    */
const Names = ["ganesh","rajesh","siva","param"];
console.log(Names.indexOf("rajesh"));
console.log(Names.indexOf("ramu"));
console.log(Names.lastIndexOf("param"));

/* As the name suggests, the reverse() method reverses the elements' positions in the array so that the last element goes into the first position and the first one to the last.
The reverse() method modifies the original array. */
const fruits = ["orange","grapes","banana","apple"];
console.log(fruits.reverse());

// splice 
const NAMES = ["ram","gani","sam","priya"];
NAMES.splice(1,0, "zack");
console.log(NAMES);