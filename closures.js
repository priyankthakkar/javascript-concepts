
// Closure in JavaScript


// sayHello() is a method, which takes name as a parameter
// it constructs a text with the help of name variable and finally prints it on the screen
// a very simple scenario
function sayHello(name) {
    let text = `Hello ${name}`;
    console.log(text);
}

sayHello('Priyank');


// sayHelloClosure() method here is doign the same task as sayHello() method
// but slightly in a different manner, we can see that
// sayHelloClosure() method, takes parameter name as input and returns a function as output
// also, it is trying to print a variable with help of console.log() statement
// variable text, which was constructed in the scope of sayHelloClosure() method
// We'd expect that, when the function is returned as an out from sayHelloClosure() method
// variable text will go out of the scope and the call to sayHelloToSam() must yeild 'Hello undefined' to the terminal
// but strangely it yields 'Hello Sam', how did this happen?
// Well, in JavaScript, apart from global and local there is scope known closure
// closure scope comes into the picture when a function is returning a function
// when sayHelloClosure() returns a function as output, JavaScript notices that it is referring a text variable
// which is in the scope of sayHelloClosure(), this variable text is storeed in the closure scope now
// and will be available for the use when sayHelloToSam() is executed

function sayHelloClosure(name) {
    let text = `Hello ${name}`;
    return function() {
        // to varify its existence in the closure scope
        // executre this program in the chrome console
        // put a debug point here and if you see in the panel
        // along with global and local, you will see one more section closure
        // with text varialble having value 'Sam' in the closure scope
        console.log(text);
    };
}

let sayHelloToSam = sayHelloClosure('Sam');
sayHelloToSam();

// let's look at the scenario below, and try to understand closure in the litter bit more detail

let f = [];
for(var i = 0; i < 5; i++) {
    f[i] = function() { return i; }
}

// in this scenario, look at the code above and try to guess the output for following console.log(statements)
// in the code above we can see, we have an array named f
// inside the for loop, we are returning a function with each iteration, and it is store in array f
// the function being returned is simple, it returns the value i
// when the following console.log() statements are executed, we will expect the output to be 0, 1, 2 respectively
// but the actual output is 5, 5, 5. What does this mean? How is this possible
// This means that, closure doesn't cache the value of i which exist in the outer scope
// it just returns final value of i in the scope
// it stores the actual value of variable i, it doesn't store the copy of i

console.log(f[0]()); // expected output: 0, actual output: 5
console.log(f[1]()); // expected output: 1, actual output: 5
console.log(f[2]()); // expected output: 2, actual output: 5

// now how do we achieve the expected behaviour?
// Solution 1: store the value of i in a location variable within function (being returned) scope
console.log('Solution 1');

f = [];
for(i = 0; i < 5; i++) {
    (function() {
        var y = i;
        f[i] = function() {
            return y;
        }
    })();
}

// What is the above solution doing?
// Well, it is taking advantage of IIFE: immediately invoked function expression
// As we know, in JavaScript the function will have its own scope
//  in the for loop above, with each loop, the function will be invoked immediately
// the value of y will be determined based on each iteration
// and it will return a function with value of y in that iteration
// the value of y in the solution above is being snappedshot in the IIFE

console.log(f[0]()); // expected output: 0, actual output: 0
console.log(f[1]()); // expected output: 1, actual output: 1
console.log(f[2]()); // expected output: 2, actual output: 2

console.log('Solution 2');

// a much cleaner solution to the problem above exist and it is
// pass a paramer to IIFE. Well, how does it help?
// We can see, we are passing variable i as a parameter to IIFE
// this parameter is of primitive type and will be passed value
// and when we pass by value of copy of  variable i will be passed to IIFE
// when the IIFE is invoked, it is the y that will hold value of that exectuion time

f = []
for(i = 0; i < 5; i++) {
    (function(y) {
        f[y] = function() {
            return y;
        };
    })(i);
}

console.log(f[0]()); // expected output: 0, actual output: 0
console.log(f[1]()); // expected output: 1, actual output: 1
console.log(f[2]()); // expected output: 2, actual output: 2
