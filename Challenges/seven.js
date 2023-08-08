//functions inside object
//In javascript functions can be defined inside objects, just like any other property

const person = {
    fName : "Kummara",
    lName : "Ganesh",
    age   : 25,
    mail  : "kummara0304@gmail.com",
    fullName: function(){
        return this.fName + "" + this.lName
    }
};

person.fullName();