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

    let digits = userInput[0].split('').map(item => parseInt(item));

    let result = [];

    for (let i = 0; i < digits.length;){
        if (digits[i] != digits[i + 1]) {
            result.push(digits[i]);
            i++;
        } else {
            // let j = i + 1;
            // while (digits[i] == digits[j]) {
            //     j++;
            // }
            // i = j;
            let digit = digits[i];
            while (digit == digits[i]) {
                i++;
            }
        }
    }

    console.log(result.join(''));

  //end-here
});