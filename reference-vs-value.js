// pass by value and pass by reference
// when passing parameters to methods, primitive datatypes like string, boolean and number are passed by value
// while object, array are passed by reference

// 1. pass by value

// What we mean when we say pass by value?
// Pass by value means, when we pass parameters to metho, in this case a to method foo()
// it is the copy of variable a being passed to method foo()
// that is the reason, any operation carried out on parameter a, doesn't reflect outside method foo()
var a = 1;

function foo(a) {
    a = 5;
    console.log('Inside foo: ', a);
}

foo(a);
console.log("Outside foo: ", a);

// 2. pass by reference

// as variable b here is an object, it is being passed by reference as a parameter to method moo()
// that means parameter b to method moo() here is a reference to the same object to which variable b is pointing to
// that is the reason, when we add property too on parameter b inside moo() method, even when we try to access b,
// it shows property too is added there too

var b = {};

function moo(b) {
    b.too = 'test string';
    console.log(b);
}

moo(b);
console.log(b);
