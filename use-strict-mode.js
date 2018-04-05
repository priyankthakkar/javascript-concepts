"use strict";

// 1. prevents accident globals

// 2. prevents the use of reserved keywords for future e.g. let

// 3. Cannot delete functions, variables
/*
    var foo = 1;
    delete foo;

    var moo = function() {

    }

    delete moo;

*/

var theVal = 0;

theVal = 1;

if (theVal > 0) {
    console.log('Hello!!')
}

// 4. It prevents scope leaking for eval statemens

eval("var a = 1");

// if strict mode is not enabled, a will be added to global scope with value 1
console.log(a);
