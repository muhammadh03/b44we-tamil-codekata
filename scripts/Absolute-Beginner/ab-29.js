// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let digits = userInput[0].split('').map((item) => parseInt(item));

    let odds = [];
    let evens = [];

    for (let i = 0; i < digits.length; i++){
        if (digits[i] % 2 == 0) {
            evens.push(digits[i]);
        } else {
            odds.push(digits[i]);
        }
    }

    evens.sort((a, b) => a - b);
    odds.sort((a, b) => a - b);


    console.log(evens.join(' '));
    console.log(odds.join(' '));

  //end-here
});