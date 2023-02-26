// function to find the nth even number
// 2, 4, 6, 8, 10, 12, ....
// input: n 
// output: n * 2
function nEvenNumber(n) {
    // return n * 2;
    // n = 5
    // number = 1

    // even = number * 2 = 2
    // number++ 2
    
    // even = number * 2 = 4
    // number++ 3

    // even = number * 2 = 6
    // number++ 4

    // even = number * 2 = 8
    // number++ 5

    // even = number * 2 = 10
    // number++ 6

    for (let number = 1; number <= n; number++){
        var even = number * 2;
    }

    return even;
}

console.log(nEvenNumber(30));

// function to find the nth odd number
// 1, 3, 5, 7, 9, 11, ...
// input: n 
// output: n * 2 - 1

// function to find the nth prime number
// 2, 3, 5, 7, 11, 13, 17, 19, ...

// function to find the nth fibonacci number