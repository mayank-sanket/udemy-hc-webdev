/*
Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]. Stop the loop when "chai" is found, and store all previous tea types in an array named availableTeas
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

teaCollection.forEach((tea) => {

    if(tea === "chai"){
        return; // can't use 'break' here | think why
    }

    availableTeas.push(tea)
})


// or 

// teaCollection.forEach(function(tea){
//     if(tea === "chai"){
//         return;
//     }
//     availableTeas.push(tea);
// })


// another syntax of forEach loop: element as well as the index
teaCollection.forEach( (tea, index) =>{
    console.log(tea); 
    console.log(index);

})



// forEach loops don't work like other other ordinary loops. here you have a function inside: therefore you cannot use the term break or continue directly (you have to use return keyword)