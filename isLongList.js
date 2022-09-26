const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
console.log(userArray);

if(userArray.length >= 10){
    console.log("the array is at least 10 characters: " + userArray.length)
} else if(userArray.length < 10){
    console.log("the array is not 10 characters: " + userArray.length);
}











