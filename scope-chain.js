"use strict";
// scope chain in JavaScript

// In JavaScript, scope chain means, if a function tries to access the variable
// and if it is not found in current scope, it will keep on looking in the outer scope
// until it finds the variable or reachs to top most level


// for method moo(), though it is being called from method foo() which has variable myVar declared
// it won't find the variable because, for JavaScript, scope is lexical scope
// this means, method moo() is define before the declaration of variable myVar
// that's why myVar is not in the lexical scope of method moo()
// and the console.log statement within moo should throw an error
function moo() {
    //un-comment the line below to see the actual error

    //console.log('moo()', myVar);
}

function foo() {
    var myVar = 1;
    moo();

    // method goo() here is defined after variable myVar's declaration
    // when method goo() executes, it won't find myVar within the scope of method goo()
    // so it will go out side and try to find myVar in the outer scope
    // based on the lexical scope, it will find the myVar and print value as 1
    function goo() {
        console.log('goo(): ',myVar);
    }
    goo();
}

foo();
