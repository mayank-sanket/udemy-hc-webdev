/*
Write an arrow function named `calculateTotal` that takes two parameters: price and quantity. The function should return the total cost by multiplying the price and quantity. Store the result in a varialbe named totalCost
*/

let calculateTotal = (price, quantity) =>{
   return price*quantity;
}

let totalCost = calculateTotal(499 * 10);




// same can be written like this; 

/*

let calculateTotal = (price, quantity) => price*quantity; // (implicit return)
   


let totalCost = calculateTotal(499 * 10);
*/


