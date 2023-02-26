/*

operator is a symbol which operates on the operands - variables / values

Arithmetic:

+ addition
- subtraction
/ division
% modulo division
** exponent
* multiplication


*/

// console.log(6/3); // 2 - quotient '/'s
// console.log(6%5);
// console.log(25 ** 0.5);

// console.log(2 ** 3);

// console.log(100 ** 0.5);

// console.log(1 / 3);

// console.log(9 ** 0.3333333333333333);

/*

Relational Operators:

< less than
> greater than
<= less than or equal to
>= greater than or equal to
== comparison operator (double equal to)
!= not equal to
===

*/

// let a = 5;
// let b = 6;

// console.log(a < b);

// console.log(5 > 6);

// console.log(5 >= 6);

// console.log(5 != 6);

/*

declaration keywords:

- let - variable
- var - variable
- const - constant

JSON - JavaScript Object Notation

*/

/*

Logical Operators:

&& logical AND
|| logical OR
! logical NOT

*/

// let age = 18;
// let hasAadhar = false;
// let hasVoterID = true;

// to check if the person is eligible to vote or not
// eligibility criteria:
// - age should be greater than or equal to 18
// - should have either one of the following ID's - aadhar or voterID

// console.log(age >= 18 && (hasAadhar || hasVoterID));

// console.log(!hasAadhar);

// let number = 6;

// console.log(!(number % 2 == 0));

/*

Memory - memory structure, heap | stack
Binary, Denary, Hexadecimals
1's complement, 2's complement
binary addition, subtraction

Bitwise Operators:

& bitwise AND
| bitwise OR
^ bitwise EX-OR
<< bitwise left shift
>> bitwise right shift
~ bitwise complement or negation

*/

// console.log(5 << 6);

// assignment operators

/*

= assignment operator


short-hand operators:

+= addition assignment
-= subtraction assignment
/=
%=
**=
*= 

&=
|=
^=
<<=
>>=

&&=
||=


*/

// let a = 10;

// a += 5; // a = a + 5

// console.log(a);

// a **= 2; // a = a ** 2;

// console.log(a);

// a &&= (a < 2); // a = a && (a<2); => a = 225 && false => a = true && false => a = false

// console.log(a);

let a = 5;
let b = 5;

// a < b ? console.log(a) : (a == b ? console.log('equal') : console.log(b));

// if (a < b) {
//     console.log(a);
// } else {
//     if (a == b) {
//         console.log('equal');
//     } else {
//         console.log(b);
//     }
// }

// switch (a < b) {
//     case true:
//         console.log(a);
//         break;
//     case false:
//         switch (a == b) {
//             case true:
//                 console.log('equal');
//                 break;
//             case false:
//                 console.log(b);
//                 break;
//         }
// }