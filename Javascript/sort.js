let array = [10,6,3,7,19,45,8]

//let sorting = [...new Float64Array(array).sort()];
//console.log(sorting);

array.sort((a,b) =>{
    if (a<b){
        return -1;
    }
    if (a>b){
        return 1;
    }
    return 0;
});
console.log(array)