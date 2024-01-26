// Episode 3 : Hoisting in JavaScript (variables & functions)

getName(); // Namaste Javascript
console.log(x); // undefined
var x = 7;
function getName() {
  console.log("Namaste Javascript");
}

// -----------------------------------------------------------------------

getName(); // Namaste JavaScript
console.log(x); // Uncaught Reference: x is not defined.
console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
function getName() {
  console.log("Namaste JavaScript");
}

// -----------------------------------------------------------------------

getName(); // Uncaught TypeError: getName is not a function
console.log(getName);
var getName = function () {
  console.log("Namaste JavaScript");
};
// The code won't execute as the first line itself throws an TypeError.

// ********************************************************************************

// Episode 4 : Functions and Variable Environments

var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.
console.log(x);
function a() {
  var x = 10; // local scope because of separate execution context
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}

// ********************************************************************************

// Episode 6 : undefined vs not defined in JS

// When variable is declared but not assigned value, its current value is undefined. But when the variable
// itself is not declared but called in code, then it is not defined.

console.log(x); // undefined
var x = 25;
console.log(x); // 25
console.log(a); // Uncaught ReferenceError: a is not defined

// ********************************************************************************

// Episode 7 : The Scope Chain, Scope & Lexical Environment

// CASE 1
function a() {
  console.log(b); // 10
  // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope.
}
var b = 10;
a();

// CASE 2
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();

// CASE 3
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
a();

// CASE 4
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b); // Error, Not Defined

// In case 4: A function can access a global variable, but the global execution context can't access
// any local variable.

// Lexical Environment = local memory + lexical env of its parent. Hence, Lexical Environement is
// the local memory along with the lexical environment of its parent

function a() {
  function c() {
    // logic here
  }
  c(); // c is lexically inside a
} // a is lexically inside global execution

// ********************************************************************************

// Episode 8 : let & const in JS, Temporal Dead Zone

console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15

// Both a and b are actually initialized as undefined in hoisting stage. But var b is inside the storage space
// of GLOBAL, and a is in a separate memory object called script, where it can be accessed only after
// assigning some value to it first ie. one can access 'a' only if it is assigned. Thus, it throws error.

// Temporal Dead Zone : Time since when the let variable was hoisted until it is initialized some value.
// -------------------
// ->  So any line till before "let a = 10" is the TDZ for a
// ->  Since a is not accessible on global, its not accessible in window/this also. window.b or this.b ->
//     15; But window.a or this.a ->undefined, just like window.x->undefined (x isn't declared anywhere)

// ********************************************************************************

// Episode 9 : Block Scope & Shadowing in JS

// Block Scope and its accessibility example
{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10
console.log(b); // Uncaught ReferenceError: b is not defined
// * Reason?
//  * In the BLOCK SCOPE; we get b and c inside it initialized as *undefined* as a part of
// hoisting (in a seperate memory space called **block**)
//  * While, a is stored inside a GLOBAL scope.
//  * Thus we say, *let* and *const* are BLOCK SCOPED. They are stored in a separate mem
// space which is reserved for this block. Also, they can't be accessed outside this block.
// But var a can be accessed anywhere as it is in global scope. Thus, we can't access them outside the Block.

// Shadowing:
// ----------
// So, If one has same named variable outside the block, the variable inside the block shadows the outside
// variable. This happens only for var

// ********************************************************************************

// Episode 10 : Closures in JS

// Function bundled along with it's lexical scope is closure.
// Over here function y along with its lexical scope i.e. (function x) would be called a closure.

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z(); // 7 900
// *A closure is a function that has access to its outer function scope even after the function has
// returned. Meaning, A closure can remember and access variables and arguments reference of its
// outer function even after the function has returned.*

// Advantages of Closure:
// - Module Design Pattern
// - Currying
// - Memoize
// - Data hiding and encapsulation
// - setTimeouts etc.

// Disadvantages of Closure:
// - Over consumption of memory
// - Memory Leak
// - Freeze browser

// -----------------------------
// Q: Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question
// We assume this has a simple approach as below
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste Javascript");
}
x();
// Output:
// Namaste Javascript
// 6
// 6
// 6
// 6
// 6

//    Reason?
//    -------
//    -> This happens because of closures. When setTimeout stores the function somewhere and
//    attaches timer to it, the function remembers its reference to i, not value of i. All 5 copies of
//    function point to same reference of i. JS stores these 5 functions, prints string and then
//    comes back to the functions. By then the timer has run fully. And due to looping, the i value
//    became 6. And when the callback fun runs the variable i = 6. So same 6 is printed in each
//    log
//    -> To avoid this, we can use let instead of var as let has Block scope. For each iteration, the i
//    is a new variable altogether(new copy of i). Everytime setTimeout is run, the inside function
//    forms closure with new variable i.

// But what if interviewer ask us to implement using var?
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
      // put the setT function inside new function close()
    }
    close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
  }
  console.log("Namaste Javascript");
}

x();

// ********************************************************************************

// Episode 13 : First Class Functions ft. Anonymous Functions

// Q: Difference between function statement and expression The major difference between these two lies in Hoisting.
a(); // "Hello A"
b(); // TypeError
// function statement:
function a() {
  console.log("Hello A");
}
// function expression:
var b = function () {
  console.log("Hello B");
};
// Why? During mem creation phase a is created in memory and function assigned to a. But b
// is created like a variable (b:undefined) and until code reaches the function() part, it is
// still undefined. So it cannot be called.
// ---------------------------------------------------------------------------
// Q: What is Named Function Expression?
// Same as Function Expression but function has a name instead of being anonymous.
var b = function xyz() {
  console.log("b called");
};
b(); // "b called"
xyz(); // Throws ReferenceError:xyz is not defined.
// xyz function is not created in global scope. So it can't be called.
// ----------------------------------------------------------------------------
// Q: What is First Class Function aka First Class Citizens?
// We can pass functions inside a function as arguments and /or return a function(HOF). These ability are
// altogether known as First class function. It is programming concept available in some other languages too.

// ********************************************************************************

// Episode 14 : Callback Functions in JS ft. Event Listeners

// Callback Functions
// ------------------
// Functions are first class citizens ie. take a function A and pass it to another function B. Here, A is a
// callback function. So basically I am giving access to function B to call function A. This callback function
// gives us the access to whole Asynchronous world in Synchronous world.

// -> ***JS is a synchronous and single threaded language. But due to callbacks, we can do async things in JS.***
setTimeout(function () {
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
// x y timer

// ********************************************************************************

// Episode 15 : Asynchronous JavaScript & EVENT LOOP from scratch
// Note: Call stack will execeute any execeution context which enters it. Time, tide and JS waits for none.
// TLDR; Call stack has no timer
