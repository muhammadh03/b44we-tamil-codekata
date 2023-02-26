// // check whether the number is positive or negative or zero

// function checkNumber(number) {
//     if (number > 0) {
//         return "positive number";
//     } else if (number < 0) {
//         return "negative number";
//     } else {
//         return "zero";
//     }
// }

// let number = 0;
// console.log(checkNumber(number));
// function createPerson(name) {
//     return {
//         name: name,
//         about: function () {
//             console.log(`hi ${this.name}`);
//         }
//     }
// }


// let person = createPerson('sathish');

// person.about();

// let calc = {
//     add: function (x, y) {
//         return x + y;
//     },
//     sub: function (x, y) {
//         return x - y;
//     }
// }

// console.log(calc.sub(5, 6));

// let votes = 0;

// function addVote() {
//     votes = votes + 1;
// }

// addVote();
// addVote();
// addVote();
// addVote();
// console.log(votes);

function countVowels(sentence) {
    let vowels = 0;

    for (let alphabet of sentence) {
        switch (alphabet) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels++;
                break;
        }
    }
    return vowels;
}

function countSpaces(sentence){
    let spaces = 0;

    for (let char of sentence) {
        if (char == ' ') {
            spaces++;
        }
    }
    return spaces;
}

function countConsonants(sentence) {
    return sentence.length - countVowels(sentence) - countSpaces(sentence);
}


function printVowels(sentence) {
    let vowels = [];
    for (let alphabet of sentence) {
        switch (alphabet) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels.push(alphabet);
                break;
        }
    }
    return vowels;
}

let sentence = "this is an example sentence with alphabets";

// write a function to count the number of vowels.

console.log(`sentence: ${sentence}`);
console.log(`number of vowels: ${countVowels(sentence)}`);

// write a function to find number of consonants in a sentence

console.log(`number of consonants: ${countConsonants(sentence)}`);

console.log(`number of chars in the sentence: ${sentence.length}`);
console.log(`number of spaces: ${countSpaces(sentence)}`);

console.log(`vowels in the sentence: ${printVowels(sentence).join('').slice(5,)} ${printVowels(sentence).join('').slice(0,5)}`);