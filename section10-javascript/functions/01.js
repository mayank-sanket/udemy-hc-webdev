/*
write a function named makeTea that takes one parameter, `typeOfTea` and returns  a string like "making green tea" when called with "green tea". 
Store the result in a variable called `teaOrder`.
*/

function makeTea(typeOfTea){
    return `making ${typeOfTea}`;
}

let teaOrder = makeTea;

console.log(teaOrder); // [Function: makeTea]
console.log(teaOrder('lemon tea')) // making lemon tea