"use strict";

// equality of values in JavaScript
// we have two operators available, == && ===
// we will see here how they different

// 1. operator ==
// when we use == operator for the equality check, the type coercion in JavaScript takes place
// How this will impact?
// Well, this means, in case of == thogh the values on both sides might be of different type
// JavaScript will try to coerce the both the values to single type and do the comparison for e.g.

// now this was pretty straight forward
console.log(true == true);
console.log(true == false);

// let us look at some tricky scenarios
// all the values on the right-hand side of the == of different type, yet we were able to evaluate the equality
// all thanks to type coercion, the rules are pretty tricky in JavaScript and hard to state all of the here
console.log(true == 1);
console.log(false == 0);
console.log(false == '');
console.log(false == '0');

// === operator represent the value equality
// that means it is a strick comparison and it doesn't permit the type coercion
// for equality to pass with === operator, type as well as the value should be equal
// let us try above four statemens with === operator, and we will see the outcome will be false for all the four scenarios
// this result contractdicts all the result with == operator
console.log(true === 1);
console.log(false === 0);
console.log(false === '');
console.log(false === '0');
