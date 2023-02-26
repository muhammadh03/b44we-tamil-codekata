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
    let m = parseInt(userInput[2]);
    let questions = userInput[3].split(' ').map(item => parseInt(item));

    let result = [];

    for (let i = 0; i < m; i++){
        // find the count of questions[i] in numbers array
        let count = 0;
        for (let j = 0; j < n; j++){
            if (questions[i] == numbers[j]) {
                count++;
            }
        }
        if (count != 0) {
            result.push(count);
        } else {
            result.push('Not Present');
        }
    }

    console.log(result.join(' '));

  //end-here
});