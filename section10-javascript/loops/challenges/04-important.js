// use a `for-of` loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea". Store the other teas in an array named preferredTeas

let preferredTeas = [];
let tea = ["chai", "green tea", "herbal tea", "black tea"];

for(elem of tea){
    if(elem.toLowerCase() === "herbal tea") continue;
    preferredTeas.push(elem)
}

