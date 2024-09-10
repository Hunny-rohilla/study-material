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
// ->  Since a is not accessible on global, its not accessible in window/this also. window.b or this.b 
//     But window.a or this.a ->undefined, just like window.x->undefined (x isn't declared anywhere)

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
//  * Thus we say, *let* and *const* are BLOCK SCOPED. They are stored in a separate memory.
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
// Note: Call stack will execute any execution context which enters it. Time, tide and JS waits for none.
// TLDR; Call stack has no timer

// Event Loops and Callback Queue:

// Behavior of fetch (Microtask Queue?)
// Let's observe the code below and try to understand
console.log("Start"); // this calls the console web api (through window) which in turn actually modifies values in console.
setTimeout(function cbT() {
  console.log("CB Timeout");
}, 5000);
fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
}); // take 2 seconds to bring response
// millions lines of code
console.log("End");
// Code Explanation:
// * Same steps for everything before fetch() in above code.
// * fetch registers cbF into webApi environment along with existing cbT.
// * cbT is waiting for 5000ms to end so that it can be put inside callback queue. cbF is
// waiting for data to be returned from Netflix servers gonna take 2 seconds.
// * After this millions of lines of code is running, by the time millions line of code will
// execute, 5 seconds has finished and now the timer has expired and response from Netflix
// server is ready.
// * Data back from cbF ready to be executed gets stored into something called a Microtask
// Queue.
// * Also after expiration of timer, cbT is ready to execute in Callback Queue.
// * Microtask Queue is exactly same as Callback Queue, but it has higher priority. Functions
// in Microtask Queue are executed earlier than Callback Queue.
// * In console, first Start and End are printed in console. First cbF goes in callStack and
// "CB Netflix" is printed. cbF popped from callStack. Next cbT is removed from callback
// Queue, put in Call Stack, "CB Timeout" is printed, and cbT removed from callStack.

// Are only asynchronous web api callbacks are registered in web api environment? - YES, the
// synchronous callback functions like what we pass inside map, filter and reduce aren't registered in the
// Web API environment. It's just those async callback functions which go through all this.

// ********************************************************************************

// JS is a synchronous single threaded language. With just 1 thread it runs all pieces of code. It becomes
// kind of an interpreter language, and runs code very fast inside browser (no need to wait for code to be
// compiled) (JIT - Just in time compilation). And there are still ways to do async operations as well.

// ********************************************************************************

// Episode 18 : Higher-Order Functions ft. Functional Programming

// Q: What is Higher Order Function?
// Ans: A Higher-order functions are regular functions that take other functions as arguments or return
// functions as their results

const radiusArr = [1, 2, 3, 4];
// logic to calculate area
const area = function (radius) {
  return Math.PI * radius * radius;
};
// logic to calculate circumference
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const calculate = function (radiusArr, operation) {
  const output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(operation(radiusArr[i]));
  }
  return output;
};
console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, circumference));

// Over here calculate is HOF
// Over here we have extracted logic into separate functions. This is the beauty of functional programming.
// Polyfill of map
// Over here calculate is nothing but polyfill of map function
// console.log(radiusArr.map(area)) == console.log(calculate(radiusArr, area));
// ------------------------------------------------------------------------------
// Lets convert above calculate function as map function and try to use. So,
Array.prototype.calculate = function (operation) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(operation(this[i]));
  }
  return output;
};
console.log(radiusArr.calculate(area));
// ------------------------------------------------------------------------------

// ********************************************************************************

// Episode 19 : map, filter & reduce
// Map function
// It is basically used to transform a array. The map() method creates a new array with the results of calling a function for every array element.

// Convert array elements to binary
const arr = [5, 1, 3, 2, 6];
// Transformation logic:
function binary(x) {
  return x.toString(2);
}
const binaryArr = arr.map(binary);
// The above code can be rewritten as :
const binaryArr2 = arr.map(function binary(x) {
  return x.toString(2);
});
// OR -> Arrow function
const binaryArr3 = arr.map((x) => x.toString(2));

// ----------------------------------------

// Filter function
// Filter function is basically used to filter the value inside an array. The arr.filter() method is used to create a
// new array from a given array consisting of only those elements from the given array which satisfy a condition
// set by the argument method.
const array = [5, 1, 3, 2, 6];
// filter odd values
function isOdd(x) {
  return x % 2;
}
const oddArr = array.filter(isOdd); // [5,1,3]
// Other way of writing the above:
const oddArr2 = arr.filter((x) => x % 2);

// ----------------------------------------
// Reduce function
// It is a function which take all the values of array and gives a single output of it. It reduces the array to give a single output

// find max inside array: Non functional programming way:
const array2 = [5, 1, 3, 2, 6];
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(array2)); // 6
// using reduce
const output = arr.reduce((acc, current) => {
  if (current > acc) {
    acc = current;
  }
  return acc;
}, 0);
console.log(output); // 6
// acc is just a label which represent the accumulated value till now,
// so we can also label it as max in this case
const output2 = arr.reduce((max, current) => {
  if (current > max) {
    max = current;
  }
  return max;
}, 0);
console.log(output); // 6

// -----------------------------------------------------

// Get the count/report of how many unique people with unique age are there
// like: {29 : 2, 75 : 1, 50 : 1}
// We should use reduce, why? we want to deduce some information from the array. Basically
// we want to get a single object as output
const report = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc; //to every time return update object
}, {});
console.log(report); // {29 : 2, 75 : 1, 50 : 1}
// -----------------------------------------------------

// Function Chaining
// First name of all people whose age is less than 30
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];
// function chaining
const output11 = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);
console.log(output); // ["Alok", "Ashish", "Ankit"]
// Homework challenge: Implement the same logic using reduce
const output22 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output); // ["Alok", "Ashish", "Ankit"]

// ********************************************************************************

// Episode 20 : Callback

//  💡 JavaScript is synchronous, single threaded language. It can Just do one thing at a time, it has just
// one call-stack and it can execute one thing at a time. Whatever code we give to Javascript will be
// quickly executed by Javascript engine, it does not wait.

// When we have a large codebase and multiple apis and have dependency on each other, then we fall into
// callback hell. These codes are tough to maintain. These callback hell structure is also known as Pyramid of
// Doom.

// 💡 Inversion of control is like that you lose the control of code when we are using callback.

// 💡 When we pass a function as a callback, basically we are dependant on our parent
// function that it is his responsibility to run that function. This is called `inversion of
// control` because we are dependant on that function. What if parent function stopped
// working, what if it was developed by another programmer or callback runs two times or never
// run at all.
// http://callbackhell.com/

// ********************************************************************************

// Episode 21 : Promises
// Promises are used to handle async operations in JavaScript.

const URL = "https://api.github.com/users/alok722";
const user = fetch(URL);
user.then(function (data) {
  console.log(data);
});
// And this is how Promise is used.
// It guarantees that it could be resolved only once, either it could be `success` or `failure`
/**
 A Promise is in one of these states:
 pending: initial state, neither fulfilled nor rejected.
 fulfilled: meaning that the operation was completed successfully.
 rejected: meaning that the operation failed.
 */
//  💡What is Promise?
//  -> Promise object is a placeholder for certain period of time until we receive value from asynchronous operation.
// -> A container for a future value.
// -> A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// Callback Hell Example
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInf) {
    showOrderSummary(paymentInf, function (balance) {
      updateWalletBalance(balance);
    });
  });
});
// And now above code is expanding horizontally and this is called pyramid of doom.
// Callback hell is ugly and hard to maintain.
// 💡 Promise fixes this issue too using `Promise Chaining`
// Example Below is a Promise Chaining
createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    updateWalletBalance(balance);
  });
// ⚠️ Common PitFall
// We forget to return promise in Promise Chaining
// The idea is promise/data returned from one .then become data for next .then
// So,
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    return showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });
// To improve readability you can use arrow function instead of regular function

// ********************************************************************************

// Episode 23 : async await

//🤓 Let's brainstorm more around async-await
async function handlePromise() {
  console.log("Hi");
  const val = await p;
  console.log("Hello There!");
  console.log(val);
  const val2 = await p;
  console.log("Hello There! 2");
  console.log(val2);
}
handlePromise();
// In above code example, will our program wait for 2 time or will it execute parallel.
//📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises
//  will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise
//  resolved value!!') will get printed immediately.

// Let's create one promise and then resolve two different promise.
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value by p2!!");
  }, 2000);
});
async function handlePromise() {
  console.log("Hi");
  const val = await p;
  console.log("Hello There!");
  console.log(val);
  const val2 = await p2;
  console.log("Hello There! 2");
  console.log(val2);
}
handlePromise();
// 📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises
//  will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise
//  resolved value by p2!!') will get printed immediately. So even though `p2` was resolved
//  after 2 secs it had to wait for `p` to get resolved

// Now let's reverse the order execution of promise and observe response.
async function handlePromise() {
  console.log("Hi");
  const val = await p2;
  console.log("Hello There!");
  console.log(val);
  const val2 = await p;
  console.log("Hello There! 2");
  console.log(val2);
}
handlePromise();
// 📌 `Hi` printed instantly -> now code will wait for 2 secs -> After 2 secs ('Hello
//  There!' 'Promise resolved value by p2!!') will get printed and in the subsequent second
//  i.e. after 3 secs ('Hello There! 2' 'Promise resolved value!!') will get printed
// ----------------------------------------------------------
// Q: Question is Is program actually waiting or what is happening behind the scene?
// A: As we know, Time, Tide and JS wait for none. And it's true. Over here it appears that JS engine is waiting
// but JS engine is not waiting over here. It has not occupied the call stack if that would have been the case our
// page may have got frozen. So JS engine is not waiting. So if it is not waiting then what it is doing behind the
// scene? Let's understand with below code snippet.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value by p1!!");
  }, 5000);
});
const p22 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value by p2!!");
  }, 10000);
});
async function handlePromise() {
  console.log("Hi");
  debugger;
  const val = await p1;
  console.log("Hello There!");
  debugger;
  console.log(val);
  const val2 = await p22;
  console.log("Hello There! 2");
  debugger;
  console.log(val2);
}
handlePromise();
// When this function is executed, it will go line by line as JS is synchronous single
// threaded language. Lets observe what is happening under call-stack. Above you can see we
// have set the break-points.
// call stack flow -> handlePromise() is pushed -> It will log `Hi` to console -> Next it
// sees we have await where promise is suppose to be resolved -> So will it wait for promise
// to resolve and block call stack? No -> thus handlePromise() execution get suspended and
// moved out of call stack -> So when JS sees await keyword it suspend the execution of
// function till promise is resolved -> So `p` will get resolved after 5 secs so
// handlePromise() will be pushed to call-stack again after 5 secs. -> But this time it will
// start executing from where it had left. -> Now it will log 'Hello There!' and 'Promise
// resolved value!!' -> then it will check whether `p2` is resolved or not -> It will find
// since `p2` will take 10 secs to resolve so the same above process will repeat -> execution
// will be suspended until promise is resolved.

// 📌 Thus JS is not waiting, call stack is not getting blocked.
// Moreover in above scenario what if p1 would be taking 10 secs and p2 5 secs -> even
// though p2 got resolved earlier but JS is sy nchronous single threaded language so it will
// first wait for p1 to be resolved and then will immediately execute all.

// Error Handling:
// ---------------
// While we were using normal Promise we were using .catch to handle error, now in async-await we would be
// using try-catch block to handle error.
async function handlePromise() {
  try {
    const data = await fetch("https://api.github.com/users/alok722");
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
handlePromise();
// In above whenever any error will occur the execution will move to catch block. One could
// try above with bad url which will result in error.
// Other way of handling error:
handlePromise().catch((err) => console.log(err)); // this will work as handlePromise will
// return error promise in case of failure.

// ********************************************************************************

// Episode 24 : Promise APIs (all, allSettled, race, any) +
// Interview Questions �

// 4 Promise APIs which are majorly used:
// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()
// --------------------------

// Promise.all()
// A promise is a placeholder for a value that's going to be available sometime later. The promise helps
// handle asynchronous operations. JavaScript provides a helper function
// Promise.all(promisesArrayOrIterable) to handle multiple promises at once, in parallel, and get the
// results in a single aggregate array.

// 💡 To conclude, the Promise.all() waits for all the input promises to resolve and returns a new promise that
// resolves to an array containing the results of the input promises. If one of the input promises is rejected, the
// Promise.all() method immediately returns a promise that is rejected with an error of the first rejected
// promise.
// --------------------------

// Promise.allSettled()
// Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves
// after all the input promises have settled, either resolved or rejected.

// 💡 Promise.all() -> Fail Fast
// 💡 Promise.allSettled() -> Will wait and provide accumulative result
// --------------------------

// Promise.race()
// The Promise.race() static method accepts a list of promises as an iterable object and returns a new
// promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or
// reason from that promise. The name of Promise.race() implies that all the promises race against each
// other with a single winner, either resolved or rejected.
// Promise.race([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume p1 takes 3
// seconds, p2 takes 1 second, p3 takes 2 seconds. So as soon as first promise will resolve or reject, it will
// give the output.

// So in Happy scenario, Promise.race will give (val2) as output after 1sec as p2 got resolved at the earliest.
// Whereas if it would have been failed Promise.race would have still given output after 1 sec but this time with
// error.
// --------------------------

Promise.any();

// The Promise.any() method accepts a list of Promise objects as an iterable object. If one of the
// promises in the iterable object is fulfilled, the Promise.any() returns a single promise that resolves to a
// value which is the result of the fulfilled promise.
// Promise.any([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume p1 takes 3
// seconds, p2 takes 1 second, p3 takes 2 seconds. So as soon as first promise will be successful, it will give
// the output.

// If in above situation what if p2 got rejected, nothing will happen as Promise.any seek for success, so the
// moment first success will happen that will become the result.

// ❓ But what if all promises got failed, so the returned result will be aggregated error i.e. [err1, err2, err3].

// ------------------------------------------------------------

// Summary
// There are 6 static methods of Promise class:

// 1.) Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of
// the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.

// 2.)Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns
// their results as an array of objects with: status: "fulfilled" or "rejected" value (if fulfilled) or reason (if
// rejected).

// 3.)Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the
// outcome.

// 4.)Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result
// becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of
// Promise.any.

// 5.)Promise.resolve(value) – makes a resolved promise with the given value.

// 6.)Promise.reject(error) – makes a rejected promise with the given error. Of all these, Promise.all is
// probably the most common in practice.

// ********************************************************************************

// Episode 25 : this keyword in JavaScript

// In JavaScript, the this keyword refers to an object, which object depends on how this is being invoked
// (used or called).

// 💡 global object differs based on runtime environment,
// this inside a function
function x() {
  // the below value depends on strict/non-strict mode
  console.log(this);
  // in strict mode - refers to global window object
  // in non-strict mode - undefined
}
x();
// 💡 Notes:
// On the first go feels like `this` keyword in global space and inside function behaves same but in reality it's different.
// The moment you make JS run in strict mode by using: "use strict" at the top, `this` keyword inside function returns `undefined` whereas global space will still refers to
// global window object this substitution -> According to this substitution, if the value of this keyword is null/undefined, it will
// be replaced by globalObject only in non-strict mode. This is the reason why this refers to global window
// object inside function in non-strict mode.
// 💡 So to summarize, the value of this keyword inside function is undefined, but because of this
// substitution in non-strict mode this keyword refers to globalWindowObject and in strict mode it will still be
// undefined
// this keyword value depends on how the function is called. For eg:

// In strict mode:
x(); // undefined
window.x(); // global window object
// this inside a object's method
// `x` key below is a method as per terminology
const obj5 = {
  a: 10,
  x: function () {
    console.log(this); // {a: 10, x: f()}
    console.log(this.a); // 10
  },
};
obj.x(); // value of `this` is referring to current object i.e. `obj`

//****************************************************** */

// call, apply & bind methods
// For detail around call, apply and bind method. Refer here.
const student = {
  name: "Alok",
  printName: function () {
    console.log(this.name);
  },
};
student.printName(); // Alok
const student2 = {
  name: "Kajal",
};

student2.printName(); // throw error
// ❓ how to re-use printName method from `student` object
student.printName.call(student2); // Kajal
// Above `call` method is taking the value of `this` keyword
// So, Inside `printName` method value of `this` is now `student2` object
// So, call, bind and apply is used to set the value of this keyword.
// this inside arrow function
// Arrow function doesn't have their own this value, they take the value from enclosing lexical context.
const obj = {
  a: 10,
  x: () => {
    console.log(this); // window object
    // Above the value of `this` won't be obj anymore instead it will be enclosing
    // lexical context i.e. window object in current scenario.
  },
};
obj.x();
const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
      // Above the value of `this` will be obj2 as function y's enclosing lexical
      // context is function `x`.
    };
    y();
  },
};
obj2.x();

// this inside DOM
// It refers to HTML element.
// <button onclick="alert(this)">Click Me</button>
// <!-- [object HTMLButtonElement] Button element -->
