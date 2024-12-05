/*
Write a function named `processTeaOrder` that takes another function `makeTea` as parameter and calls it with the argument `earl grey`. 
Return the result of calling `makeTea`.
*/


function makeTea(typeofTea){
    return `making ${typeofTea}`

}



function processTeaOrder(makeChaai){

return makeChaai('earl grey');

}




console.log(processTeaOrder(makeTea))