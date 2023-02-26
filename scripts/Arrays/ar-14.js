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

    let n = parseInt(userInput[0]);

    let numbers = userInput[1].split(' ').map(item => parseInt(item));

    let k = parseInt(userInput[2]);

    let result = [];

    // generate the windows
    for (let i = 0; i <= numbers.length-k; i++){
        let window = numbers.slice(i, i + k);

        let positive = true;
        
        // find the first negative number in the window
        for (let j = 0; j < window.length; j++){
            if (window[j] < 0) {
                result.push(window[j]);
                positive = false;
                break;
            }
        }
        if (positive) {
            result.push(0);
        }
    }

    console.log(result.join(' '));

  //end-here
});