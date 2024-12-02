/*
String
Number
Boolean
BigInt

undefined
null

Object
Symbol


*/

var score = 10; // var is problematic

let points = 10; // prefer let over var

let isLoggedIn = true;
let name = "mayanksanket"

// object
let teaTypes = ["ice", "lemon", "ginger"]; // an array is also an object

let user = {firstName: "Mayank", lastName: "Sanket"};


// objects can also borrow values from other variables
let playerName = "Mayank";
let playerAge = 23;

let player = {
    name: playerName,
    age: playerAge
}

console.log(player.age) // 23