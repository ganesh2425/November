//promise = 
//-resolve
//-reject
//-pending

function fun1(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            const error = true;
            if (!error){
                console.log("your promise has been resolved")
                resolve();
            } 
            else {
                console.log("your promise has been rejected")
                reject("sorry not fullfilled")
            }
        },2000)
    })
}
fun1().then(() =>{
    console.log("thanks for resolving")
}).catch(() =>{
    console.log("very bad bro!!")
})