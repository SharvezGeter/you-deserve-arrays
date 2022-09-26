const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
console.log(userArray);


let lastString = userArray[2];
console.log(lastString)
