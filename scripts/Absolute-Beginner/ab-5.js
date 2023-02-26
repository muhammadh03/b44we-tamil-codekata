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

    let number = parseInt(userInput[0]);
    
    // while (number>1) {
    //     f = f * number;
    //     number = number - 1;
    // }

    // for (; number > 1;) {
    //     f = f * number;
    //     number = number - 1;
    // }

    for (var f = 1; number > 1;number--) {
        f = f * number;
    }

    console.log(f);

  //end-here
});