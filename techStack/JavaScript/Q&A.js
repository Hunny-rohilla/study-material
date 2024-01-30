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
// Explanation: The async/await pattern is a syntactic sugar for working with promises. The async keyword is used to define a function that returns a promise, and await is used to pause the execution of the function until the promise is resolved. It makes asynchronous code more readable and resembles synchronous code.

// 16. Describe the differences between shallow and deep copying of objects.
// Explanation: Shallow copying creates a new object and copies the values of the original object's properties. Deep copying creates a completely independent copy of the object along with copies of all nested objects.
// Shallow copy
let originalObject = { a: 1, b: { c: 2 } };
let shallowCopy = { ...originalObject };

// Deep copy
let deepCopy = JSON.parse(JSON.stringify(originalObject));

// 17. What is the purpose of the `bind` method in JavaScript?
// Explanation: The bind method is used to create a new function with a specified this value and initial arguments. It's commonly used to ensure that a function is called with a specific context, especially when dealing with event handlers or callbacks.
const obj = { value: 42 };

function getValue() {
  console.log(this.value);
}

const boundFunction = getValue.bind(obj);
boundFunction(); // Outputs 42

// 18. How does the prototype chain work in JavaScript?
// Explanation: The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects through their prototypes. Every object in JavaScript is linked to a prototype object, forming a chain until the chain reaches an object with a null prototype.
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal('Dog');
dog.speak(); // Outputs "Dog makes a sound"

// 19. Explain the concept of debouncing in JavaScript.
// Explanation: Debouncing is a technique used to ensure that time-consuming tasks do not fire so often, making them more efficient. It involves delaying the execution of a function until after a certain period of inactivity.
function debounce(func, delay) {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, arguments), delay);
  };
}

// Usage example
const debouncedFunction = debounce(() => console.log('Debounced'), 2000);

// 20. What is the purpose of the `map` function in JavaScript?
// Explanation: The map function is used to create a new array by applying a provided function to each element of an existing array. It does not modify the original array and is commonly used for transforming data.
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Outputs [2, 4, 6, 8]

// **Hard:**
// 21. Describe the differences between the `let`, `const`, and `class` declarations in terms of hoisting.
// Explanation: let and const are hoisted but not initialized, which means you cannot access them before the declaration. class declarations are also hoisted but unlike let and const, they are initialized with undefined. This means you can use class declarations before they are declared in the code.
console.log(x); // Throws ReferenceError
let x = 5;

console.log(y); // Throws ReferenceError
const y = 10;

// Class declarations are hoisted
let obj2 = new MyClass(); // Valid
class MyClass {}

// 22. Explain the concept of memoization in JavaScript.
// Explanation: Memoization is a technique where the results of expensive function calls are cached to avoid redundant calculations.
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}

const memoizedAdd = memoize((a, b) => {
  console.log('Calculating sum...');
  return a + b;
});

console.log(memoizedAdd(3, 4)); // Calculates sum... 7
console.log(memoizedAdd(3, 4)); // Uses cached result 7

// 23. How does the "this" keyword behave in arrow functions compared to regular functions?
// Arrow functions capture the this value from their surrounding scope, while regular functions have their own this value.
function regularFunction() {
  console.log(this); // Refers to the calling context
}

const arrowFunction = () => {
  console.log(this); // Refers to the enclosing scope's this
};

regularFunction.call({ name: 'John' }); // { name: 'John' }
arrowFunction.call({ name: 'John' }); // Refers to the surrounding scope

// 24. What is the difference between `null`, `undefined`, and `undeclared` in JavaScript?
// null: Represents the intentional absence of any object value.
// undefined: Represents the uninitialized or undefined value.
// undeclared: Represents a variable that has not been declared.
let x1; // x is undefined
let y1 = null; // y is explicitly set to null
console.log(z); // Throws ReferenceError - z is undeclared

// 25. Describe the process of event bubbling in the context of the DOM.
// Event bubbling is the order in which events are handled from the target element to the root of the DOM tree.
{/* <div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
  });

  document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
  });
</script> */}
// Clicking the button triggers both the child and parent click events in a bubbling fashion.

// 26. How does JavaScript handle asynchronous code execution using the event loop?
// JavaScript uses an event loop to handle asynchronous operations. Callbacks, promises, and async/await syntax all leverage the event loop.

// 27. Explain the concept of currying in JavaScript.
// Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.
const add = (a) => (b) => a + b;

const add5 = add(5);
console.log(add5(3)); // 8
// 'add' is a curried function, allowing for partial application.

// 28. What is the difference between prototypal inheritance and classical inheritance?
// Prototypal inheritance: Objects inherit directly from other objects through a prototype chain.
// Classical inheritance: Objects are instances of classes, which define blueprints for objects.
// Prototypal Inheritance
const parent = { name: 'Parent' };
const child = Object.create(parent);
console.log(child.name); // Inherited from the parent

// Classical Inheritance (ES6 class syntax)
class Parent {
  constructor() {
    this.name = 'Parent';
  }
}

class Child extends Parent {}
const childObj = new Child();
console.log(childObj.name); // Inherited from the Parent class

// 29. Discuss the benefits and drawbacks of using closures in JavaScript.
// Benefits: Encapsulation, data privacy, and the ability to create private variables.
// Drawbacks: Memory consumption, potential for unintended closures in loops, and challenges in debugging.

// 30. Describe the differences between the "spread" and "rest" operators in JavaScript.
// Spread: Used to expand elements, objects, or arrays.
// Rest: Used to collect remaining elements into an array.
// Spread Operator
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

// Rest Operator
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4, 5)); // 15

// 31. How does the "WeakMap" differ from the "Map" object in JavaScript?
// Map holds strong references to its keys, while WeakMap holds weak references, allowing keys to be garbage collected if there are no other references.
// Map
const map = new Map();
const key = { name: 'John' };
map.set(key, 'Value');
console.log(map.get(key)); // Value

// WeakMap
const weakMap = new WeakMap();
const weakKey = { name: 'John' };
weakMap.set(weakKey, 'Value');
console.log(weakMap.get(weakKey)); // Value

// 32. Explain the concept of tail call optimization in JavaScript.
// Tail call optimization (TCO) is a feature in some JavaScript engines where recursive calls in a function's tail position do not consume additional stack space. 
// Without TCO
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// With TCO (not supported in all environments)
function factorialTCO(n, acc = 1) {
  if (n === 0) return acc;
  return factorialTCO(n - 1, n * acc);
}

// 33. Discuss the use cases and benefits of using the "Proxy" object in JavaScript.
// Proxy allows for the creation of custom behaviors for fundamental operations on objects. It's useful for tasks like logging, validation, and interception.

const handler = {
  get(target, prop) {
    console.log(`Getting property ${prop}`);
    return target[prop];
  },
};
const obj3 = { name: 'John' };
const proxyObj = new Proxy(obj3, handler);

console.log(proxyObj.name); // Logs: Getting property name

// 34. What is the purpose of the "Generator" function in JavaScript?
// Generators provide a way to pause and resume the execution of a function, allowing for more readable asynchronous code.
function* countGenerator() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

const counter = countGenerator();
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1

// 35. Explain the differences between the "for...in" and "for...of" loops in JavaScript.
// for...in iterates over enumerable properties of an object, including inherited ones.
// for...of iterates over iterable objects like arrays and strings, providing access to their values.
const arr2 = [1, 2, 3];

// for...in
for (const index in arr2) {
  console.log(index); // Logs: 0, 1, 2
}

// for...of
for (const value of arr2) {
  console.log(value); // Logs: 1, 2, 3
}

const tempObj = { a: 1, b: 2, c: 3 };

for (const key in tempObj) {
  console.log(key); // Logs: a, b, c
}

const tempArr = [1, 2, 3];

for (const value of tempArr) {
  console.log(value); // Logs: 1, 2, 3
}

// "for...in" is used for iterating over object properties (keys), including inherited ones.
// "for...of" is used for iterating over iterable objects, providing access to their values.