// Primitives: String, Boolean, Number, null, undefined, Symbol


// Non-primitives/Functional/Objects: Objects  [ objects and  arrays (subset of objects) and functions (subset of objects) ]


// ------------

// Number
let balance = 120;
console.log(typeof balance); // number
console.log(balance) // 120

let anotherBalance = new Number (120)
console.log(typeof anotherBalance) // object
console.log(anotherBalance)// [Number: 120]


console.log(anotherBalance.valueOf()); // 120

// => every primitive can be converted to advanced data type (non-primitive)
//  => in JS, everything is an object



// boolean
let isLoggedIn = true;
console.log(isLoggedIn); // true
console.log(typeof isLoggedIn); // boolean

let newIsLoggedIn = new Boolean(false);  // not recommended though
console.log(typeof newIsLoggedIn); // object
console.log(newIsLoggedIn.valueOf()); // false



// null and undefined 

let firstName;
console.log(firstName); // undefined
console.log(typeof firstName); // undefined

let fullName = undefined;
console.log(fullName); // undefined
console.log(typeof fullName); // undefind


let temperature = null;
console.log(temperature); // null
console.log(typeof temperature) // OBJECT


// NOT DEFINED (not a data type but type of error)

// console.log(lastName); // error | ReferenceError: lastName is not defined



// String

let userName = "mayanksanket";
let password = '123abc'

let greetMessage = `hello user!`


console.log(`hello ${userName}! your temporary password is ${password + 2 + "def"}`) // string interpolation



// Symbol : unique value (guaranteed to be unique)

let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1) // Symbol()

console.log(sm1 == sm2) // false


let sm3 = Symbol("mayank")
console.log(sm3); // Symbol(mayank)

let sm4 = Symbol("sanket")
let sm5 = Symbol("sanket")
console.log(sm4 == sm5); // false

console.log(sm4) // Symbol(sanket)
console.log(sm5) // Symbol(sanket)

