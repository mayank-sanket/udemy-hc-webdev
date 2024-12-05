
// add an element at the end of an array: 

let citiesVisited = ['Indore', 'Bhopal'];
citiesVisited.push('Gurugram');
// console.log(citiesVisited)


// hard way of pushing elements: (not recommended):

citiesVisited[citiesVisited.length] = 'Noida'; // places the item at the end index (earlier lastIndex + 1)


// remove an element from the end of an array

let somevalues = ['a', 'b', 'c', 'd'];
somevalues.pop(); // removes 'd'
somevalues.pop(); // removes 'c'


// note: pop method not only removes the value but it returns the value also (you can store the returned value somewhere)

let arr2 = ['abc', 'def', 'hi'];
let removedElem = arr2.pop();
console.log(removedElem); // hi


// Q: you are given an array. create a SOFT COPY of the array: 

let names = ['mayank', 'sanket', 'priyank'];
let names2 = names

names2.pop();

console.log(names); // ['mayank', 'sanket'] // the last element of the original array is also removed [SOFT COPY]


// ANOTHER METHOD 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumbers = Array.from(numbers)

newNumbers.pop(); 

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // the initial arr is unaffected



// Q: create a HARD COPY of an array: 

let ages = [22, 23, 24];
let newAges = [...ages];  // spread operator

ages.pop();
console.log(newAges); // [22, 23, 24]


newAges[1] = 99;
console.log(ages); // [22, 23]


// another method to create a hard copy (without using the spread operator) : not used much

let somenos = [1, 2, 3, 4];
let newsomenos = somenos.slice();

somenos.pop();
console.log(newsomenos); // [1, 2, 3, 4]




// Q: given two arrays, merge them into a single array

let biharCities = ['Patna', 'Saharsa'];
let mpCities = ['indore', 'bhopal'];

let IndiaCities = [...biharCities, ...mpCities]
console.log(IndiaCities); 


// or you could also do this:

let allCities = biharCities.concat(mpCities); 
console.log(allCities)


// note: some results (failed attempts)
// console.log(biharCities + mpCities);  // Patna,Saharsaindore,bhopal
// console.log(biharCities, mpCities); // [ 'Patna', 'Saharsa' ] [ 'indore', 'bhopal' ]



// --------------------------------

// Q: find if an element exists in an array or not

let worldCities = ['mumbai', 'london', 'california', 'new york'];

let isLondonInList = worldCities.includes(("LONDON").toLowerCase());
console.log(isLondonInList); // true