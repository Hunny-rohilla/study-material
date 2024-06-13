// **reference: https://www.interviewbit.com/typescript-interview-questions/

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

// =======================================================================================
// #Typescript Interview Questions for Experienced
// =======================================================================================

// ? 1. How to enforce strict null checks in TypeScript?
// Null pointers often cause unexpected errors in programs. TypeScript helps avoid these errors by enforcing strict null checks. You can enable strict null checks in two ways:
// - 1. Use the `--strictNullChecks` flag with the TypeScript compiler (`tsc`).
// - 2. Set the `strictNullChecks` property to `true` in the `tsconfig.json` file.

// ? 2. Does TypeScript support static classes? If not, why?
// TypeScript doesn’t support static classes, unlike the popular object-oriented programming languages like C# and Java.
// These languages need static classes because all code, i.e., data and functions, need to be inside a class and cannot exist independently. Static classes provide a way to allow these functions without associating them with any objects.
// In TypeScript, you can create any data and functions as simple objects without creating a containing class. Hence TypeScript doesn’t need static classes. A singleton class is just a simple object in TypeScript.

// ? 3. What are type assertions in TypeScript?
// In TypeScript, you might know the type of a variable better than the TypeScript compiler. To tell TypeScript about this specific type, you can use type assertions. This helps TypeScript understand the correct type without guessing.
// * There are two ways to do type assertions in TypeScript:
// - 1. Using `as` syntax:
   ```typescript
   let value: unknown = "Foo";
   let len: number = (value as string).length;
   ```
// - 2. Using `<type>` syntax:
   ```typescript
   let value: unknown = "Foo";
   let len: number = (<string>value).length;
   ```
// Type assertions in TypeScript are similar to typecasting in other programming languages like C# or Java but without any runtime performance cost.

// ? 4. Explain how tuple destructuring works in TypeScript.
// You can destructure tuple elements by using the assignment operator (=). The destructuring variables get the types of the corresponding tuple elements.  
```
let employeeRecord: [string, number] = ["John Doe", 50000];
let [emp_name, emp_salary] = employeeRecord;
console.log(``Name: ${emp_name}``);  // "Name: John Doe"
console.log(``Salary: ${emp_salary}``);  // "Salary: 50000"
```
// After destructuring, you can’t assign a value of a different type to the destructured variable. For example,

// ? 5. Explain the tuple types in TypeScript.
// Tuples are a special type in TypeScript. They are similar to arrays with a fixed number of elements with a known type. However, the types need not be the same.
// Declare a tuple type and initialize it
`let values: [string, number] = ["Foo", 15];`
// Type 'boolean' is not assignable to type 'string'.(2322)
// Type 'string' is not assignable to type 'number'.(2322)
`let wrongValues: [string, number] = [true, "hello"];` // Error
// Since TypeScript 3.0, a tuple can specify one or more optional types using the ? as shown below.
`let values: [string, number, boolean?] = ["Foo", 15]`

// ? 6. What are type aliases? How do you create one?
// Type aliases give a new, meaningful name for a type. They don’t create new types but create new names that refer to that type.
// For example, you can alias a union type to avoid typing all the types everywhere that value is being used.
`type alphanumeric = string | number;
let value: alphanumeric = "";
value = 10;`

// ? 7. What are intersection types?
// Intersection types let you combine the members of two or more types by using the ‘&’ operator. This allows you to combine existing types to get a single type with all the features you need.
// The following example creates a new type Supervisor that has the members of types Employee and Manager.
```
interface Employee {
work: () => string;
}

interface Manager {
manage: () => string;
}

type Supervisor = Employee & Manager;

// john can both work and manage
let john: Supervisor
```

// ? 8. What are union types in TypeScript?
// A union type is a special construct in TypeScript that indicates that a value can be one of several types. A vertical bar (|) separates these types.
// Consider the following example where the variable value belongs to a union type consisting of strings and numbers. The value is initialized to string “Foo”. Because it can only be a string or a number, we can change it to a number later, and the TypeScript compiler doesn’t complain. 
```
let value: string | number = "Foo";
value = 10;  // Okay
```
// However, if we try to set the value to a type not included in the union types, we get the following error.
`value = true;`  // Type 'boolean' is not assignable to type 'string | number'.(2322)
// Union types allow you to create new types out of existing types. This removes a lot of boilerplate code as you don’t have to create new classes and type hierarchies.

// ? 9. What are anonymous functions? Provide their syntax in TypeScript.
// An anonymous function is a function without a name. Anonymous functions are typically used as callback functions, i.e., they are passed around to other functions, only to be invoked by the other function at a later point in time. For example,
```
setTimeout(function () {
  console.log('Run after 2 seconds')
}, 2000);
```
// You can invoke an anonymous function as soon as it’s created. It’s called ‘immediately invoked function execution (IIFE)’, For example:
```
(function() {
  console.log('Invoked immediately after creation');
})();
```

// ? 10. What are abstract classes? When should you use one?
// An abstract class is like a blueprint for other classes. You can't create an object directly from an abstract class. Instead, it sets rules that other classes (which extend it) must follow. Unlike interfaces, an abstract class can have some methods with actual code.
// In the example, there is an abstract class `Writer` with two methods: 
// - `write()`, which is abstract and has no code.
// - `greet()`, which is not abstract and has code that prints a greeting.

// Two classes, `FictionWriter` and `RomanceWriter`, extend `Writer` and provide their own versions of the `write()` method.
```
abstract class Writer {
  abstract write(): void;

  greet(): void {
    console.log("Hello, there. I am a writer.");
  }
}

class FictionWriter extends Writer {
  write(): void {
    console.log("Writing a fiction.");
  }
}

class RomanceWriter extends Writer {
  write(): void {
    console.log("Writing a romance novel.");
  }
}

const john = new FictionWriter();
john.greet();  // "Hello, there. I am a writer."
john.write();  // "Writing a fiction."

const mary = new RomanceWriter();
mary.greet();  // "Hello, there. I am a writer."
mary.write();  // "Writing a romance novel."
```
// ### Explanation
// 1. **Abstract Class `Writer`**:
//    - `write()` method is abstract (no code).
//    - `greet()` method has code to print "Hello, there. I am a writer."
// 2. **Classes Extending `Writer`**:
//    - `FictionWriter` provides code for `write()` to print "Writing a fiction."
//    - `RomanceWriter` provides code for `write()` to print "Writing a romance novel."
// 3. **Creating Objects**:
//    - `john` is an instance of `FictionWriter`, calls `greet()` and `write()`.
//    - `mary` is an instance of `RomanceWriter`, calls `greet()` and `write()`.

// ? 11. How to make object properties immutable in TypeScript? (hint: readonly)
// You can make object properties unchangeable (immutable) by using the `readonly` keyword before the property name in TypeScript. This means you can set the property when you create the object, but you cannot change it afterward.
```
interface Coordinate {
  readonly x: number;
  readonly y: number;
}

let c: Coordinate = { x: 5, y: 15 };
c.x = 20; // Error: Cannot assign to 'x' because it is a read-only property.
```
// In this example:
// - The `x` and `y` properties of the `Coordinate` object are marked as `readonly`.
// - You can set `x` and `y` when you create the object `c`.
// - After creating the object, trying to change `x` or `y` will result in an error.

// ? 12. What is a type declaration file?
// When you're working on a TypeScript project, you might use other TypeScript libraries like JQuery to help with common tasks. To make coding easier, these libraries come with files that describe the types and methods they use. These files help your code editor provide suggestions and check for errors.
// A type declaration file is a special text file with a .d.ts extension. It tells TypeScript about the types and values in the library but doesn't include the actual code. These files don't turn into .js files when you compile your project.

// ? 13. What are triple-slash directives?
// Triple-slash directives are special single-line comments in TypeScript that use XML tags to give instructions to the compiler.
// - **Location**: They must be at the top of the file. Only regular comments can come before them.
// - **Usage**: They help include other files in the compilation or order output files when using certain commands.
```
/// <reference path="..." />
```

// ? 14. Explain the purpose of the ‘in’ operator.
// The in operator is used to find if a property is in the specified object. It returns true if the property belongs to the object. Otherwise, it returns false.
```
const car = { make: 'Hyundai', model: 'Elantra', year: 2017 };
console.log('model' in car);  // true
console.log('test' in car);  // false
```

// ? 15. What are the ‘implements’ clauses in TypeScript?
// An implements clause is used to check that a class satisfies the contract specified by an interface. If a class implements an interface and doesn’t implement that interface, the TypeScript compiler issues an error.
`interface Runnable {
run(): void;
}

class Job implements Runnable {
run() {
  console.log("running the scheduled job!");
}
}

// Class 'Task' incorrectly implements interface 'Runnable'.
// Property 'run' is missing in type 'Task' but required in type 'Runnable'.(2420)
class Task implements Runnable {
perform() {
  console.log("pong!");
}
}`
// A class can implement more than one interface. In this case, the class has to specify all the contracts of those interfaces.

// ? 16. What are string literal types?
// In TypeScript, you can refer to specific strings and numbers as types, which helps in defining stricter type constraints for variables.
```
let foo: "bar" = "bar"; // 'foo' can only be "bar"

// OK
foo = "bar"; // This is fine

// Error: Type '"baz"' is not assignable to type '"bar"'.
foo = "baz"; // This will give an error because 'foo' can only be "bar"
```
// ### Combining String Literal Types into Unions:
// String literal types can be combined into unions to specify multiple possible string values for a variable, similar to enums. This is especially useful for function parameters.
```
function greet(name: string, greeting: "hi" | "hello" | "hola") {
  console.log(``${greeting}, ${name}!``);
}

greet("John", "hello"); // This is fine

// Error: Argument of type '"Howdy?"' is not assignable to parameter of type '"hi" | "hello" | "hola"'.
greet("Mary", "Howdy?"); // This will give an error because "Howdy?" is not an allowed greeting
```
// ### Benefits:
// - **Type Safety:** Ensures variables and function parameters have specific and expected values.
// - **Spell-Check:** Helps avoid typos in string values by restricting the possible values.

// ? 17. What are template literal types?
// Template literal types in TypeScript are similar to string literal types, but more flexible. They let you combine literal types to create new string literal types. For example, if you have a type `Point` defined as `"GraphPoint"`, you can create a new type `Shape` by combining `Point` with another string.
```
type Point = "GraphPoint";

// Creates a new type "Grid GraphPoint"
type Shape = ``Grid ${Point}``;
```
// Template literal types can also generate multiple strings using unions. This helps create a set of all possible string literals that each union member can represent.
```
type Color = "green" | "yellow";
type Quantity = "five" | "six";

// Creates a new type "five item" | "six item" | "green item" | "yellow item"
type ItemOne = ``${Quantity | Color} item``;
```
// In simple terms, template literal types let you mix and match string literal types to make new ones, and they can also handle multiple options using unions.

// ? 18. Explain the concept of inheritance in TypeScript.
// Inheritance allows a class to use and change the behavior of another class. The class that inherits is called the derived class, and the class being inherited from is called the base class.
// In TypeScript, a class can extend only one other class using the `extends` keyword.
```
class Rectangle {
  length: number;
  breadth: number;

  constructor(length: number, breadth: number) {
    this.length = length;
    this.breadth = breadth;
  }

  area(): number {
    return this.length * this.breadth;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  volume() {
    return "Square doesn't have a volume!";
  }
}

const sq = new Square(10);

console.log(sq.area());  // Output: 100
console.log(sq.volume());  // Output: "Square doesn't have a volume!"
```
// ### Explanation of the Code
// - 1. **Rectangle Class**: Defines a rectangle with properties `length` and `breadth` and a method `area()` that calculates the area.
// - 2. **Square Class**: Extends the `Rectangle` class. It uses the `super()` function to call the `Rectangle` constructor with equal length and breadth (side).
// - 3. **Usage**: Creates an instance of `Square` with a side length of 10, then calls the `area()` method (inherited from `Rectangle`) and the `volume()` method (specific to `Square`).

// ? 19. What are conditional types? How do you create them?
// A conditional type allows you to dynamically select one of two possible types based on a condition. The condition is expressed as a type relationship test.
`C extends B ? TypeX : TypeY`
// Here, if type C extends B, the value of the above type is TypeX. Otherwise, it is TypeY.

// ? 20. What is the Function type in TypeScript?
// Function is a global type in TypeScript. It has properties like bind, call, and apply, along with the other properties present on all function values.
`function perform(fn: Function) {
fn(10);
}`
// You can always call a value of the Function type, and it returns a value of ‘any’ type

// ? 21. List some of the utility types provided by TypeScript and explain their usage.
// In TypeScript, utility types are pre-built types that help you transform other types in common ways. They are globally available. Here are some key utility types:

// - 1. **Partial<Type>**: This makes all properties of a given type optional.
// - 2. **Required<Type>**: This makes all properties of a given type required.
// - 3. **Readonly<Type>**: This makes all properties of a given type read-only (they cannot be changed after being set).
// - 4. **Record<Keys, Type>**: This constructs an object type where the keys are of a specific type, and the values are of another specific type.
```
interface User {
  id: number;
  name: string;
  age: number;
}

// Partial: all properties are optional
const partialUser: Partial<User> = {
  name: "Alice"
};

// Required: all properties are required
const requiredUser: Required<Partial<User>> = {
  id: 1,
  name: "Alice",
  age: 25
};

// Readonly: all properties are readonly
const readonlyUser: Readonly<User> = {
  id: 1,
  name: "Alice",
  age: 25
};

// This will give an error because readonly properties cannot be modified
// readonlyUser.name = "Bob"; 

// Record: constructs an object type with specific keys and values
const userRoles: Record<string, User> = {
  admin: { id: 1, name: "Alice", age: 25 },
  guest: { id: 2, name: "Bob", age: 22 }
};
```
// - **Partial**: Useful when you want to create an object where some properties might not be present.
// - **Required**: Useful when you need to ensure that all properties of an object are provided.
// - **Readonly**: Useful when you want to prevent modification of an object's properties.
// - **Record**: Useful when you want to create an object type with a specific structure for keys and values.

// ? 22. Explain the various ways to control member visibility in TypeScript.
// TypeScript provides three keywords to control the visibility of class members, such as properties or methods.
// - public: You can access a public member anywhere outside the class. All class members are public by default. 
// - protected: A protected member is visible only to the subclasses of the class containing that member. Outside code that doesn’t extend the container class can’t access a protected member. 
// - private: A private member is only visible inside the class. No outside code can access the private members of a class.

// ? 23. Explain the different variants of the for loop in TypeScript.
// TypeScript provides the following three ways to loop over collections.
// ‘for’ loop
// let values = [10, "foo", true];
`for(let i=0; i<values.length; i++) {
  console.log(values[i]);  // 10, "foo", true
}`
// ‘forEach’ function
`let values = [10, "foo", true];
values.forEach(val => {
    console.log(val);  // 10, "foo", true
})`
// ‘for..of’ statement
`let values = [10, "foo", true];
for (let val of values) {
console.log(val); // 10, "foo", true
}`

// ? 24. Explain the symbol type in TypeScript.
// Symbols were introduced in ES6 and are supported by TypeScript. Similar to numbers and strings, symbols are primitive types. You can use Symbols to create unique properties for objects.
// You can create symbol values by calling the Symbol() constructor, optionally providing a string key.
`let foo = Symbol();
let bar = Symbol("bar"); // optional string key`
// A key characteristic of symbols is that they are unique and immutable.
`let foo = Symbol("foo");
let newFoo = Symbol("foo");
let areEqual = foo === newFoo;
console.log(areEqual);  // false, symbols are unique`

// ? 25. Explain how optional chaining works in TypeScript.
// Optional chaining allows you to access properties and call methods on them in a chain-like fashion. You can do this using the ‘?.’ operator.
// TypeScript immediately stops running some expression if it runs into a ‘null’ or ‘undefined’ value and returns ‘undefined’ for the entire expression chain.
// Using optional chaining, the following expression
`let x = foo === null || foo === undefined ? undefined : foo.bar.baz();`
// can be expressed as:
`let x = foo?.bar.baz();`

// ? 26. Provide the TypeScript syntax to create function overloads.
// Function overloading allows us to define multiple functions with the same name, as long as their number or types of parameters are different.
// Here’s an example of function overloading in TypeScript:
// 1. We define two versions (overloads) of the function `buildDate`.
//     - One version takes a single number as a parameter (a timestamp).
//     - The other version takes three numbers as parameters (month, day, and year).
// 2. The actual function implementation combines these two overloads. Inside this implementation:
//     - If three numbers are provided, it creates a `Date` object using the month, day, and year.
//     - If only one number is provided, it creates a `Date` object using that number as a timestamp.
```
function buildDate(timestamp: number): Date;
function buildDate(m: number, d: number, y: number): Date;
function buildDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

// Usage examples:
const d1 = buildDate(87654321);  // Calls the overload with a single number (timestamp)
const d2 = buildDate(2, 2, 2);    // Calls the overload with three numbers (month, day, year)
```
// - `buildDate(87654321)` creates a date from the given timestamp.
// - `buildDate(2, 2, 2)` creates a date for February 2, 0002.

// ? 27. What is meant by type inference?
// TypeScript can infer the type of a variable when you don’t provide an explicit type. This is known as type inference. This is usually done when the variables or parameters are initialized during the declaration.
// For example, TypeScript knows that the variable foo is a string, even though we don’t mention string as a type.
`let foo = "this is a string";
console.log(typeof foo);`  // "string"

// ? 28. What is meant by contextual typing?
// When the TypeScript compiler figures out the type of a variable based on where it is used, it's called contextual typing.
// In the example below, TypeScript uses the type information of the `Window.onmousedown` function to understand what type the `e` parameter should be. This allows TypeScript to know that `e` has a `button` property, but not a `foo` property.
```
window.onmousedown = function (e) {
  console.log(e.button); // This is OK because e.button exists
  console.log(e.foo);    // This will cause an error because e.foo does not exist
};
```
// ### Explanation
// - `window.onmousedown` expects a function with an event parameter `e`.
// - TypeScript knows the type of `e` because `window.onmousedown` is a well-defined browser event handler.
// - The `e` parameter has properties like `button`, which are part of the event object.
// - If you try to access `e.foo`, TypeScript throws an error because `foo` is not a known property of the event object.


// ? 29. What is the purpose of noImplicitAny?
// Usually, when we don’t provide any type on a variable, TypeScript assumes ‘any’ type. For example, TypeScript compiles the following code, assuming the parameter ‘s’ is of any type. It works as long as the caller passes a string.
`function parse(s) {
console.log(s.split(' '));
}
parse("Hello world");`  // ["Hello", "world"]
// However, the code breaks down as soon as we pass a number or other type than a string that doesn’t have a split() method on it. For example,
`function parse(s) {
console.log(s.split(' '));  // [ERR]: s.split is not a function
}
parse(10);` 
// noImplicitAny is a compiler option that you set in the tsconfig.json file. It forces the TypeScript compiler to raise an error whenever it infers a variable is of any type. This prevents us from accidentally causing similar errors.
// Parameter 's' implicitly has an 'any' type.(7006)
`function parse(s) {
console.log(s.split(' '));  // [ERR]: s.split is not a function
}`

// ? 30. What is an interface?
// An interface in TypeScript defines a contract for the structure of an object, specifying what properties it should have and what types those properties should be. This is also known as "duck typing," meaning if an object looks like a certain type and behaves like that type, it is considered that type.
// *Here's how you create and use an interface in TypeScript:
// - 1. **Define an Interface**: Describe the structure of an object.
// - 2. **Implement the Interface**: Create an object that adheres to this structure.
// - 3. **Use the Interface**: Use the object in a function that expects this structure.
```
// Define the interface
interface Employee {
    name: string;
    salary: number;
}

// Function that uses the interface
function process(employee: Employee) {
    console.log(``${employee.name}'s salary = ${employee.salary}``);
}

// Create an object that adheres to the interface
let john: Employee = {
    name: "John Doe",
    salary: 150000
}

// Call the function with the object
process(john);  // Output: "John Doe's salary = 150000"
```
// **Summary**: An interface in TypeScript ensures that objects have a specific shape. You define the interface, create objects that match this shape, and use these objects in your functions.