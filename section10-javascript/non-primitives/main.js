// non-primitives : Objects (objects, arrays, functions)

let user = {};
console.log(typeof user); // object
console.log(user); // {}

user = {
    firstName: "Mayank",
    lastName: "Sanket",
    isLoggedIn: true,
    placesVisited: ['New Delhi', 'Noida', 'Gurugram', 'Indore', 'Bhopal', 'Patna']

}

console.log(user.firstName); // Mayank
console.log(user.lastName); // Sanket
console.log(user.placesVisited[2]); // Gurutram


// console.log(user[lastName]); // error : LastName is not defined
console.log(user["lastName"]); // Sanket


console.log(user); // prints the entire object

// the memory reserved for non-primitives is larger than that for primitives



// AN INTERESTING EXAMPLE:

const firstName = "Mayank";
// firstName = "Sanket"; // error | TypeError: Assignment to constant variable


const userDetails = {
    username: "mayanksanket",
    isLoggedIn: true
};

userDetails.username = "priyanksanket";

console.log(userDetails.username); //priyank sanket



// the const makes sure that the memory block for userDetails is fixed but inside that block, the memory for the inner primitives can change

// the values inside the object (even though it is a const data type), are mutable


// adding more values to objects: 
userDetails.password = "1234";

console.log(userDetails); // prints the entire object with the password key:value pair also


const userTwo = {
    "first name": "Mayank",
    "last name": "Sanket",
    "age": 23
}

console.log(userTwo['first name']); // Mayank

