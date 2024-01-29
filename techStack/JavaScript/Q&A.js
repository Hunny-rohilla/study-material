// Q1: What is Closure in Javascript?
// Ans: A function along with reference to its outer environment together forms a closure. Or in other words, A
// Closure is a combination of a function and its lexical scope bundled together. eg:
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  } // inner forms a closure with outer
  return inner;
}
outer()(); // 10 // over here first `()` will return inner function and then using secong `()` to call inner function

// ----------------------------------------------

// Q2: Will inner function have the access to outer function argument?
function outer(str) {
  let a = 10;
  function inner() {
    console.log(a, str);
  }
  return inner;
}
outer("Hello There")(); // 10 "Hello There"
// Ans: Inner function will now form closure and will have access to both a and str.

// ************************************************************************************************************

// **JavaScript Overview:**

// JavaScript is a high-level, interpreted programming language primarily known for its use in web development. It enables dynamic, client-side behavior in web applications and is an essential component of modern web development alongside HTML and CSS.

// **Interview Questions:**

// **Easy:**
// 1. What is the difference between `let`, `const`, and `var` in JavaScript?
// 2. Explain the concept of hoisting in JavaScript.
// 3. What is the purpose of the `typeof` operator in JavaScript?
// 4. How do you declare a function in JavaScript?
// 5. What is an arrow function? Provide an example.
// 6. Explain the event delegation in JavaScript.
// 7. What is the purpose of the `this` keyword in JavaScript?
// 8. What is a closure? Provide an example.
// 9. How do you check if a variable is an array in JavaScript?
Array.isArray(arr);
// 10. Explain the difference between `==` and `===` operators in JavaScript.

// **Medium:**
// 11. Describe the differences between `null` and `undefined` in JavaScript.
// Explanation: Both null and undefined represent the absence of a value, but they are used in different contexts. undefined is typically the default value of uninitialized variables, function parameters that were not provided, or properties that do not exist in an object. On the other hand, null is a value that represents the intentional absence of any object value.
let a; // 'a' is undefined by default
let b = null; // 'b' is explicitly set to null

// 12. What is the event loop in JavaScript and how does it work?
// Explanation: The event loop is a crucial part of JavaScript's concurrency model. It allows JavaScript to handle asynchronous operations by continuously checking the message queue and executing tasks. The event loop has phases such as the callback queue, microtask queue, and rendering. It ensures that synchronous tasks are executed first and then handles asynchronous tasks without blocking the main thread.

// 13. Explain the concept of promises in JavaScript.
// Explanation: Promises are a way to handle asynchronous operations in a more readable and manageable manner. They represent a value that might be available now, or in the future, or never. Promises have states (pending, fulfilled, or rejected) and can be chained together using .then() and .catch() to handle successful or failed outcomes.
const fetchData = new Promise((resolve, reject) => {
  let temp;
  // Asynchronous operation
  if (/* operation successful */ temp) {
    resolve("Data fetched successfully");
  } else {
    reject("Error fetching data");
  }
});

fetchData
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// 14. What is a callback function? Provide an example.
// Explanation: A callback function is a function passed as an argument to another function, which is then invoked inside the outer function. Callbacks are commonly used in asynchronous programming, event handling, and functional programming.

// 15. How does the "async/await" pattern work in JavaScript?
// 16. Describe the differences between shallow and deep copying of objects.
// 17. What is the purpose of the `bind` method in JavaScript?
// 18. How does the prototype chain work in JavaScript?
// 19. Explain the concept of debouncing in JavaScript.
// 20. What is the purpose of the `map` function in JavaScript?

// **Hard:**
// 21. Describe the differences between the `let`, `const`, and `class` declarations in terms of hoisting.
// 22. Explain the concept of memoization in JavaScript.
// 23. How does the "this" keyword behave in arrow functions compared to regular functions?
// 24. What is the difference between `null`, `undefined`, and `undeclared` in JavaScript?
// 25. Describe the process of event bubbling in the context of the DOM.
// 26. How does JavaScript handle asynchronous code execution using the event loop?
// 27. Explain the concept of currying in JavaScript.
// 28. What is the difference between prototypal inheritance and classical inheritance?
// 29. Discuss the benefits and drawbacks of using closures in JavaScript.
// 30. Describe the differences between the "spread" and "rest" operators in JavaScript.
// 31. How does the "WeakMap" differ from the "Map" object in JavaScript?
// 32. Explain the concept of tail call optimization in JavaScript.
// 33. Discuss the use cases and benefits of using the "Proxy" object in JavaScript.
// 34. What is the purpose of the "Generator" function in JavaScript?
// 35. Explain the differences between the "for...in" and "for...of" loops in JavaScript.
