// TypeScript is an open-source language developed by Anders Hejlsberg at Microsoft. It’s a statically typed superset of JavaScript that compiles to plain JavaScript. It runs on any browser, host, and operating system. That means all valid JavaScript code is also TypeScript code. It offers advanced features such as IntelliSense, code completion, safe refactorings, etc. 

//# Why TypeScript?
// As JavaScript projects grow in size, they become difficult to maintain. There are a few reasons for this. First, JavaScript was never designed to build large-scale applications. Its original purpose was to provide small scripting functionality for a web page. Until recently, it didn’t provide tools and constructs for structuring large projects, such as classes, modules, and interfaces. Also, JavaScript is dynamically typed. It doesn’t support features such as IntelliSense.
// TypeScript files use a .ts extension, in contrast to the .js extension used by the JavaScript files. Since TypeScript is a superset of JavaScript, all valid JavaScript code is a valid TypeScript code, and renaming a .js file to .ts won’t change anything. Here is an example of a standard TypeScript program that adds two numbers and returns the result. Notice how the arguments and the return types are annotated with their type.
`function add(a: number, b: number): number {
  const sum = a + b;
  return sum;
}`
// When you compile a TypeScript file using the tsc command, the Typescript compiler generates vanilla JavaScript that gets executed. For example, this is what the compiler will produce for the above snippet of code.
`function add(a, b) {
  const sum = a + b;
  return sum;
}`
// TypeScript adds optional static typing and language features such as classes and modules. It’s important to know that all these advanced features add zero cost to JavaScript. A typeScript is purely a compile-time tool. Once you compile, you are left with plain, idiomatic JavaScript. TypeScript is a language for application scale JavaScript development.

// =======================================================================================
// #Typescript Interview Questions for Freshers
// =======================================================================================


// ? 1. What are the primitive types in TypeScript?
// In TypeScript, there are three main types of basic values you can use:
// - 1. **string**: For text values like "hello" or "typescript".
// - 2. **number**: For numeric values like 1, 42, or 3.14.
// - 3. **boolean**: For true or false values.
// ### Built-in Types
// In TypeScript, built-in types are pre-defined and available out of the box. These types are the basic building blocks and are similar to those in JavaScript. Here are some common built-in types:
// **1. string**: Represents text values.
   ```typescript
   let name: string = "John";
   ```
// **2.  number**: Represents numeric values.
   ```typescript
   let age: number = 30;
   ```
// **3. boolean**: Represents true or false values.
   ```typescript
   let isStudent: boolean = true;
   ```
// **4. any**: A variable of type `any` can hold any type of value. This type is useful when you don't know the type of a value in advance.
   ```typescript
   let value: any = "Hello";
   value = 42;  // This is allowed
   ```
// **5. void**: Usually used as the return type of functions that do not return a value.
   ```typescript
   function logMessage(message: string): void {
       console.log(message);
   }
   ```
// **6. null** and **undefined**: Represent the absence of value.
   ```typescript
   let nullValue: null = null;
   let undefinedValue: undefined = undefined;
   ```

// ### User-Defined Types
// User-defined types allow you to create your own types to better model the data in your application. There are several ways to define custom types in TypeScript:
// **Interfaces**: Define the shape of an object.
   ```typescript
   interface Person {
       name: string;
       age: number;
       isStudent: boolean;
   }

   let person: Person = {
       name: "Alice",
       age: 25,
       isStudent: true
   };
   ```
// **Type Aliases**: Create a new name for an existing type.
   ```typescript
   type ID = string | number;

   let userId: ID = "abc123";
   userId = 12345;
   ```
// **Enums**: Define a set of named constants.
   ```typescript
   enum Color {
       Red,
       Green,
       Blue
   }

   let color: Color = Color.Green;
   ```
// **Classes**: Create complex data structures and encapsulate behavior.
   ```typescript
   class Car {
       make: string;
       model: string;
       year: number;

       constructor(make: string, model: string, year: number) {
           this.make = make;
           this.model = model;
           this.year = year;
       }

       displayInfo(): void {
           console.log(``${this.make} ${this.model} (${this.year})``);
       }
   }

   let myCar = new Car("Toyota", "Corolla", 2020);
   myCar.displayInfo(); // Output: Toyota Corolla (2020)
   ```

// ? 2. Explain how the arrays work in TypeScript.
// We use arrays to store values of the same type. Arrays are ordered and indexed collections of values. The indexing starts at 0, i.e., the first element has index 0, the second has index 1, and so on.
// Here is the syntax to declare and initialize an array in TypeScript.
`let values: number[] = [];
values[0] = 10;
values[1] = 20;
values[2] = 30;`
// You can also create an array using the short-hand syntax as follows:
`let values: number[] = [15, 20, 25, 30];`
// TypeScript provides an alternate syntax to specify the Array type.
`let values: Array<number> = [15, 20, 25, 30];`

// ? 3. What is any type, and when to use it?
// There are times when you want to store a value in a variable but don’t know the type of that variable in advance. For example, the value is coming from an API call or the user input. The ‘any’ type allows you to assign a value of any type to the variable of type any.
`let person: any = "Foo";`
// TypeScript assumes a variable is of type any when you don’t explicitly provide the type, and the compiler cannot infer the type from the surrounding context. 

// ? 4. What is void, and when to use the void type?
// The void indicates the absence of type on a variable. It acts as the opposite type to any. It is especially useful in functions that don’t return a value.
`function notify(): void {
  alert("The user has been notified.");
}`
// If a variable is of type void, you can only assign the null or undefined values to that variable

// ? 5. What is an unknown type, and when to use it in TypeScript?
// The unknown type is the type-safe counterpart of any type. You can assign anything to the unknown, but the unknown isn’t assignable to anything but itself and any, without performing a type assertion of a control-flow-based narrowing. You cannot perform any operations on a variable of an unknown type without first asserting or narrowing it to a more specific type.
// Consider the following example. We create the foo variable of unknown type and assign a string value to it. If we try to assign that unknown variable to a string variable bar, the compiler gives an error.
`let foo: unknown = "Akshay";
let bar: string = foo; // Type 'unknown' is not assignable to type 'string'.(2322)`

// ? 6. What are the different keywords to declare variables in TypeScript?
// - var: 
// Declares a function-scoped or global variable. You can optionally set its value during the declaration. Its behavior and scoping rules are similar to the var keyword in JavaScript. For example,
`var foo = "bar";`
// - let: 
// Declares a block-scoped local variable. Similar to var, you can optionally set the value of a variable during the declaration. For example,
`let a = 5;

if (true) {
  let a = 10;
  console.log(a);  // 10
}
console.log(a);  // 5`
// - const: 
// Declares a block-scoped constant value that cannot be changed after it’s initialized.  For example,
`const a = 5;

if (true) {
  a = 10; // Error: Cannot assign to 'a' because it is a constant.(2588)
}`

// ? 7. Provide the syntax of a function with the type annotations.
// Functions are blocks of code to perform a specific code. Functions can optionally take one or more arguments, process them, and optionally return a value.
// Here’s the TypeScript syntax to create and call a function.
`function greet(name: string): string {
  return ``Hello, ${name}``;
}

let greeting = greet("Anders");
console.log(greeting);  // "Hello, Anders"`

// ? 8. How to create objects in TypeScript?
// Objects are dictionary-like collections of keys and values. The keys have to be unique.
`let pt: { x: number; y: number } = {
    x: 10,
    y: 20
  };`

//  ? 9. How to specify optional properties in TypeScript?
// An object type can have zero or more optional properties by adding a ‘?’ after the property name. 
`let pt: { x: number; y: number; z?: number } = {
    x: 10,
    y: 20
};
console.log(pt);`
// In the example above, because the property ‘z’ is marked as optional, the compiler won’t complain if we don’t provide it during the initialization.

// ? 10. Explain the concept of null and its use in TypeScript.
// In programming, a null value indicates an absence of value. A null variable doesn’t point to any object. Hence you cannot access any properties on the variable or call a method on it.
// In TypeScript, the null value is indicated by the ‘null’ keyword. You can check if a value is null as follows:
`function greet(name: string | null) {
if (name === null) {
  console.log("Name is not provided");
} else {
  console.log("Good morning, " + name.toUpperCase());
}
}

var foo = null;
greet(foo); // "Name is not provided"

foo = "Anders";
greet(foo);  // "Good morning, ANDERS"`

// ? 13. Explain how enums work in TypeScript?
// Enums in TypeScript allow you to create named constants, which are more readable than plain numeric values. They help in giving meaningful names to a set of related values.
// Here’s a basic example:
```typescript
enum Team {
  Alpha,  // 0
  Beta,   // 1
  Gamma,  // 2
  Delta   // 3
}

let t: Team = Team.Delta;
```
// By default, the first member is assigned 0, and the subsequent members are incremented by 1.
// You can also assign custom numeric values to the enum members:
```typescript
enum Team {
  Alpha = 1,
  Beta = 2,
  Gamma = 3,
  Delta = 4
}
```
// TypeScript also supports string enums:
```typescript
enum Author {
  Anders = "Anders",
  Hejlsberg = "Hejlsberg"
}
```
// String enums allow you to assign string values to the members, making the code even more readable.

// ? 14. What is the typeof operator? How is it used in TypeScript?
// Similar to JavaScript, the typeof operator in TypeScript returns the type of the operand as a string.
`console.log(typeof 10);  // "number"
console.log(typeof 'foo');  // "string"
console.log(typeof false);  // "boolean"
console.log(typeof bar);  // "undefined"`
// In TypeScript, you can use the typeof operator in a type context to refer to the type of a property or a variable.
`let greeting = "hello";
let typeOfGreeting: typeof greeting;  // similar to let typeOfGreeting: string`


// ? 15. What are the rest parameters and arguments in TypeScript?
// A rest parameter allows a function to accept an indefinite number of arguments as an array. It is denoted by the ‘…’ syntax and indicates that the function can accept one or more arguments.
`function add(...values: number[]) {
let sum = 0;
values.forEach(val => sum += val);
return sum;
}
const sum = add(5, 10, 15, 20);
console.log(sum);  // 50`

// ? 16. What is parameter destructuring?
// Parameter destructing allows a function to unpack the object provided as an argument into one or more local variables.
`function multiply({ a, b, c }: { a: number; b: number; c: number }) {
console.log(a * b * c);
}
multiply({ a: 1, b: 2, c: 3 });`

// You can simplify the above code by using an interface or a named type, as follows:
`type ABC = { a: number; b: number; c: number };
function multiply({ a, b, c }: ABC) {
console.log(a * b * c);
}
multiply({ a: 1, b: 2, c: 3 });`

// ? 17. Explain the TypeScript class syntax.
// TypeScript fully supports classes. The TypeScript syntax for class declaration is similar to that of JavaScript, with the added type support for the member declarations.
// Here is a simple class that defines an Employee type.
`class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  promote() : void {
    this.salary += 10000;
  }
}`
// You can create an instance (or object) of a class by using the new keyword. 
// Create a new employee
`let john = new Employee("John", 60000);
console.log(john.salary);  // 60000
john.promote();
console.log(john.salary);  // 70000`

// ? 18. Explain the arrow function syntax in TypeScript.
// Arrow functions provide a short and convenient syntax to declare functions. They are also called lambdas in other programming languages.
// Consider a regular function that adds two numbers and returns a number.
`function add(x: number, y: number): number {
let sum = x + y;
return sum;
}`
// Using arrow functions syntax, the same function can be defined as:
`let add = (x: number, y: number): number => {
    let sum = x + y;
    return sum;
}`

// ? 19. Provide the syntax for optional parameters in TypeScript.
// A function can mark one or more of its parameters as optional by suffixing its name with ‘?’. In the example below, the parameter greeting is marked optional.
`function greet(name: string, greeting?: string) {
if (!greeting)
  greeting = "Hello";

console.log(``${greeting}, ${name}``);
}

greet("John", "Hi");  // Hi, John
greet("Mary", "Hola");  // Hola, Mary
greet("Jane");  // Hello, Jane`

// ? 20. What is the purpose of the tsconfig.json file?
// A tsconfig.json file in a directory marks that directory as the root of a TypeScript project. It provides the compiler options to compile the project.
// Here is a sample tsconfig.json file:
`{
 "compilerOptions": {
   "module": "system",
   "noImplicitAny": true,
   "removeComments": true,
   "outFile": "../../built/local/tsc.js",
   "sourceMap": true
 },
 "include": ["src/**/*"],
 "exclude": ["node_modules", "**/*.spec.ts"]
}`