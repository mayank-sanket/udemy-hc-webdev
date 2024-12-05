// write a 'do while' loop that prompts a user to enter their favorite tea type until they enter stop. Store each tea type in an array named 'teaCollection'


// run this code on the browser (does not work in Node RTE)

let teaCollection = [];

do {
input = prompt("Enter your favourite tea: type \"stop\" if you want to  stop giving prompts");
teaCollection.push(input);
}


while(input!== "stop")

teaCollection.pop(); // to remove the last element (named stop) 