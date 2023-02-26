// template literals - used to easily create strings with dynamic content
// embed: variables, values, experssions, function calls

function calcAge(yearOfBirth) {
    return new Date().getFullYear() - yearOfBirth;
}

let name = 'sathish';
let yearOfBirth = 1995;

let message = `Hi, my name is ${name} and I'm ${calcAge(yearOfBirth)} years old!`;

console.log(message);