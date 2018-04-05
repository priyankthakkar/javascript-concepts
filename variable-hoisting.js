"use strict";
// variable hoisting

// before i explain anything, i'd say chrome console is behaving strangely
// to get the accurate result, install node js on your system
// save the following code in example.js file and from commandline say, node example.js


// as the strict mode is enabled, we would expect following line of code with throw an error
// because we are trying to access the variable a even before it is defined
// yet surprisingly the code doesn't throw any error and prints undefined on the console
// because the code is restructed as 

/*

var a;
console.log(a);
a = 25

*/

// this restructred code shows that, the declration of variable is pushed at the top of the scope
// this phenomenon is know as variable hoisting, which pushes the declration to the top of the scope
console.log(a);
var a = 25;

// now to explain the scope let's see how hoisting takes place for function and withing a function with helpf of mehtod foo()

foo();
function foo() {
    console.log(b);
    var b = 32;
}

// the code above should expect to throw an error that function foo() is not defined
// but the restructred code shows a different picture altogether

/*
    function foo() {
        var b;
        console.log(b);
        b = 32;
    }
    foo();
*/

// so we can see, function is hoisted too and pushed to the top of the scope
// also, variable b is hoisted, but as it was part of mehtod foo() it was pushed to the top of the scope within method foo() only

// now we will see, if we want to ensure that a method is not called before it is defined
// to achieve so we need to declare methods in a different way

moo();
var moo =function () {
    console.log('test');
}

// now this will throw an error that moo is not function, because we are first creating a variable 
// and assigning an anonymous function to the variable moo
// the restructred code is

/*
    var moo;
    moo();
    moo = function () {
        console.log('test);
    }

*/

// it is evident from restructred code, moo is hoisted and it is just a variable, undefined
// and we cannot call undefined as a function, which is the reason behind the error
