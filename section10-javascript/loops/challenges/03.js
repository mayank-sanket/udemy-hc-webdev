// use a `for-of` loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number 4 is found. Store the numbers before 4 in an array named smallNumbers.

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (elem of numbers){
    if(elem == 4) break;
    smallNumbers.push(elem)
}
console.log(smallNumbers)


// or 


// for(elem of numbers){
//     if(elem<4){
//         smallNumbers.push(elem)
//     }
// }

