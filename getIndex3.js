const prompt = require('prompt-sync')({sigint: true});

userArray = JSON.parse(prompt("Enter an array: "));
console.log(userArray);


if(userArray >= 3){
    console.log(`The Third item in the array is ${userArray[3]} `)
}else {
    console.log(`The last item in the array is ${userArray[userArray.length - 1] - 1}`)
}









