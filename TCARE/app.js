// (function(){
//     console.log("Marco");
//     setTimeout(function() {console.log("Tony")}, 1000);
//     setTimeout(function() {console.log("Stark")}, 0);
//     console.log("Polo");
//   }),{};

//   var Person = function(firstName, lastName, dateOfBirth, measurements){
//     this.firstName=firstName;
//     this.lastName= lastName;
//     this.dateOfBirth= dateOfBirth;
//     this.measurements= measurements;
//   }

//   person = new Person("Wonder", "Woman", new Date(2017, 4, 15), {
//     weight: "58kg"
//   });

//   personClone = JSON.parse(JSON.stringify(person));

//   person.firstName === personClone.firstName
//   person.measurements['weight'] === personClone.measurements['weight']
//   person === personClone
//   person.dateOfBirth.toDateString() === personClone.dateOfBirth.toDateString()

  // function task(state){
  //   return new Promise(function(resolve, reject){
  //       if (state){
  //           resolve('success');
  //       }
  //           reject('error');
  //   });
  // }

  const numbers = [4, 4, 3, 3, 2, 3,5, 10, 20,3];

const duplicates = numbers.filter((element,index, array) => array.indexOf(element) !==index);

console.log(duplicates)

