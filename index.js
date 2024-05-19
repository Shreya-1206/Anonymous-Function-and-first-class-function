// function statement

//major difff btw function statement , function expressions is hoisting

sayHello(); // runs
// a(); // reference error

function sayHello() {  
    console.log("Hello, world!");
 }

/// function expressions

var a = function sayHello() {  
    console.log("Hello, world! 2");
};

sayHello();
a();

/// Function Declaration  is same as function statement

//  Named  functions expression

var b = function xy() {
    console.log("Hello, world! 3");
    return xy;
}

b();


