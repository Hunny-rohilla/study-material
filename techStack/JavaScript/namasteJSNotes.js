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

