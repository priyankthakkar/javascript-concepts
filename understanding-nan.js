"use strict";

var answer = 4/2;

console.log("4/2 is: ", answer);

// so we can see, the answer is NaN
// outcome of an operation wheer we are tying to divide string with number
// and due to incompatiable type output is NaN
answer = "abc"/4;
console.log("\"abc\"/4 is: ", answer);

// NaN is strage
// why? when you compare NaN with itself, the outcome is false!!!!!!
// wherelse, if you compare any other value in JavaScript with itself, the outcome will be true

console.log(NaN == NaN);
console.log(NaN == false);

// JavaScript has an inbuilt method to check whether something is number or not
// but that method is slightly buggy too. Why so?
// because isNaN() method too use type coercion

console.log('NaN: ', isNaN(NaN));

// when we pass string
console.log('string: ',isNaN('abc'));

// when we pass number
console.log('number: ', isNaN(20));

// strange behavior starts here, when number is passed a string to isNaN()
// it will convert the that string to number and returns false
console.log('numbers inside string', isNaN('25'));

// there is a solid workaround to this
// store any outcome from the expression to a variable
// if the comparison of that variable to itself is false, it means the outcome was NaN because only for NaN
// NaN == NaN is false
// e.g.

answer = 'string'/50;

if (answer == answer) {
    console.log('The outcome was ', answer);
} else {
    console.log('Outcome was ', answer);
}
