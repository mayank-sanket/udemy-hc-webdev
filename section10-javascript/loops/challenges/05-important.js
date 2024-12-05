/*
Use a `for-in` loop to iterate through an object containing city populations. Stop the loop when the population of "Berlin" is found. Store all the previous cities' populations in a new object named cityPopulations.

let citiesPop = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000}
*/



let citiesPop = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}

let citiesPopulation = {}


for( const city in citiesPop){
    if(city.toLowerCase() === "berlin") break;

    citiesPopulation[city] = citiesPop[city];
    
}

console.log(citiesPopulation); // { London: 8900000, 'New York': 8400000, Paris: 2200000 }
