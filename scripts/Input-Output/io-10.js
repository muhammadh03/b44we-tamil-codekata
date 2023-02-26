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

//   console.log(userInput[0].split('').join(','));
    
    let string = userInput[0];
    let result = '';

    // for (let index = 0; index < string.length; index++){
    //     if (index < string.length - 1) {
    //         result = result + string[index] + ',';
    //     } else {
    //         result = result + string[index];
    //     }
    // }

    for (let index = 0; index < string.length; index++){
        result = result + string[index] + ',';
    }


    console.log(result.slice(0, result.length-1));

  //end-here
});