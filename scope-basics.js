"use strict";

// scope in JavaScript
// whenever a variable is declared in JavaScript outside any function, it is added to global scope implicitly
// for example,  the declartion below adds a to global scope implicitly

var a = 5;
console.log('a: ', a);

// there is an explicit way to add a variable to global scope and the way is to add to window object
// for example, in the statement below, c is explicitly added to global scope c with value 10

window.c = 10;

console.log("c: ", c);

// here inside method foo() a varible is declare with name b
// this variable b is scoped within method foo() and will not be accessible outside foo()
// this means scope in JavaScript is available at function level

function foo() {
    var b = 3;
}

// consoel.log(b);


// in the following loop, we can see variable i and j are part of a loop, in another word, block of code
// yet the variable i and j are accessible outside the scope of that block
// this means in JavaScript either it is global scope or function level scope, but there is no block level scope, which differs 
// from statically typed languages such as Java

for (var i = 0; i < 5; i++) {
    var j = 10;
}

console.log("i: ", i);
console.log("j: ", j);
