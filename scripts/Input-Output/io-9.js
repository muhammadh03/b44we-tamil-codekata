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

    let string = userInput[0];

    for (let i = 0; i < string.length; i++){
        console.log(string[i]);
    }

    // for (let char of string) {
    //     console.log(char);
    // }

    // for (let index in string) {
    //     console.log(string[index]);
    // }
    // let i = 0;
    // while ( i < string.length){
    //     console.log(string[i]);
    //     i++;
    // }

    // let i = 0;
    // do {
    //     console.log(string[i]);
    //     i++;
    // } while (i < string.length);

  //end-here
});