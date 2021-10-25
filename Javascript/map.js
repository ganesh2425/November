let user = [
    {name: "Ganesh", email: "saaho@gmail.com"},
    {name: "Karthi", email: "karthi@gmail.com"}
]
let userNames = user.map(function(element){
    return `${element.name}  ${element.email}`
})
console.log(userNames)