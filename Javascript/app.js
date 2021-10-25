//Examples of call, apply, bind methods

let emp = {
    firstName: "Kummara",
    lastName: "Ganesh"
}

let printFullname = function(email){
    console.log(this.firstName +" " +this.lastName+ " ," + email)
};
printFullname.call(emp, "saaho@gmail.com");

let emp2 = {
    firstName: "Seena",
    lastName: "Kummara"
};
// call. apply
printFullname.call(emp2, "seena@gmail.com")
printFullname.apply(emp2, ["seena@gmail.com"])

// bind method
let printMyname = printFullname.bind(emp2, "kummara@gmail.com")
console.log(printMyname)
printMyname();