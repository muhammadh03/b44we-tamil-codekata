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

    let array = userInput[0].split(' ').map((item) => parseInt(item));
    
    // for (let i = 0; i < array.length; i++){
    //     array[i] = parseInt(array[i]);
    // }

    // a = parseInt(a);
    // b = parseInt(b);

    // [a, b] = [parseInt(a), parseInt(b)];

    // console.log(a, b);


    // console.log(array[1]);

    // array.sort((a, b) => a-b);

    // console.log(array[0]);

    array.sort((a, b) => a-b);
    
    // console.log(array);

    // array = [7, 6, 5, 4, 3]

    let numbers = array.reduce((accumulator, current) => {
        if (!accumulator.includes(current)) {
            return [...accumulator, current];
        }
        return accumulator;
    }, []);

    let n = 1;

    console.log(numbers);
    if (n <= numbers.length) {
        console.log(numbers[n - 1]);
    } else {
        console.log(-1);
    }

  //end-here
});