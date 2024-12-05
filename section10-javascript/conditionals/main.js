
// check if an array is empty or not

let arr = [];



// if(arr.at(0) === null) {
//     console.log("array is empty")
// } // this code does not work

if(arr.at(0) == null){
    console.log("array is empty")
} // this code works


// or

if(arr.length === 0){
    console.log("empty")
}
else{
    console.log("not empty");
    
}


// if(arr.length == 0){console.log("empty")}