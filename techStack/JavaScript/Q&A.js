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
