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

    // input handling
    let [n, k] = userInput[0].split(' ').map((item) => parseInt(item));
    let numbers = userInput[1].split(' ').map((item) => parseInt(item));

    // // linear search
    // let answer = 'no';

    // for (let i = 0; i < numbers.length; i++){
    //     if (numbers[i] == k) {
    //         answer = 'yes';
    //     }
    // }

    // console.log(answer);

    // boolean flags
    // let isFound = false;

    // for (let i = 0; i < numbers.length; i++){
    //     if (numbers[i] == k) {
    //         isFound = true;
    //         break;
    //     }
    // }

    // if (isFound) {
    //     console.log('yes');
    // } else {
    //     console.log('no');
    // }

    // numbers.filter((item) => {
    //     return item == k;
    // }).length>0 ? console.log('yes'): console.log('no');

    if (numbers.indexOf(k)!=-1) {
        console.log('yes');
    } else {
        console.log('no');
    }



  //end-here
});