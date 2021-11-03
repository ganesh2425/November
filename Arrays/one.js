let students =[
    {
        name:"ganesh",
        id:12345,
        f_name:"kummara",
        l_name:"ganesh",
        gender:"M",
        age:23,
        paid = 100
    },
    {
        name:"samantha",
        id:56789,
        f_name:"sam",
        l_name:"ruth",
        gender:"F",
        age:30,
        paid:199
    },
    {
        name:"ramesh",
        id:90123,
        f_name:"ram",
        l_name:"gupta",
        gender:"M",
        age:24,
        paid:250
    },
    {
        name:"sangeetha",
        id:34567,
        f_name:"sangeetha",
        l_name:"king",
        gender:"F",
        age:18,
        paid:159
    }
];
//The filter() method creates a new array with all the elements that satisfies the condition mentioned in the function. 
const femaleStudents = students.filter((element,index) =>{
    return element.gender ==="F";
});
console.log(femaleStudents);

//The map() method creates a new array by iterating through the elements and applying logic we provided in the function as an argument.
const fullName = students.map((element, index) =>{
    return {'fullName': element['f_name'] + ' ' + element['l_name']}
});
console.log(fullName)

