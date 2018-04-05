// Datatypes in JavaScript

// Primitive Datatypes
// string - represented by "" or ''
// number - represented by 1 or 3.25
// boolean - represented by true or false
// undefined - value is undefined
// null

// apart from the primitive datatypes, other available datatype is, object
// object can be created using new keyword or with the help of object literals

// object creation with new keyword
var newObj = new Object();

// object creation with object literals
var obj = {};

// list type of various data
console.log(typeof(1));
console.log(typeof('string data'));
console.log(typeof(true));
console.log(typeof(undefined));

// the strange phenomenon typeof(null) is, the type returned is object
// some experts claim that as a bug, and a bug not fixed due to backward compatibility issue
// I am little skeptical of believing that
console.log(typeof(null));

console.log(typeof(obj));

var arr = [1, 2, 3];
// as we can see here, typeof array arr is object, not array!!
// in JavaScript, arrays are special typeof objects
// they have an extra property called length, depeicting number of elements in an array
// and extra methods like push() and pop()
console.log('typeof array arr is: ', typeof(arr));

// last important thing to remember about JavaScript in this section is
// an uninitialized variable in JavaScript is assgined undefined
// if value of a variable is null, it means it is explicitly assigned by developer
