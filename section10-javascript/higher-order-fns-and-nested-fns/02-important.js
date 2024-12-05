/*
Write a function named `createTeaMaker` that returns another function. The returned fucntion should take one parameter, `teaType` and return a message like: "Making green tea". 

Store the returned function in a variable named 'teaMaker' and call it with "green tea"
*/

function createTeaMaker(){

    return function(teaType){
        return `making ${teaType}`
    }
    
}

let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"))


// explore more about this behaviour in JS
