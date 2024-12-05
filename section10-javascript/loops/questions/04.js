// write a for loop that lists all the cities in the array ['paris', 'gurugram', 'indore', 'bhopal'] and stores each city in a new array named cityList

let cityList = [];

let cities = ['paris', 'gurugram', 'indore', 'bhopal'];

for(let i=0; i<cities.length; i++){
    cityList.push(cities[i]);
}

console.log(cityList)