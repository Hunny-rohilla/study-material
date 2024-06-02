// ### TypeScript Overview
// TypeScript is a statically typed superset of JavaScript that adds optional static typing, classes, interfaces, and other features to the language. Developed by Microsoft, it is designed to make it easier to write and maintain large-scale JavaScript applications.

// ### Key Concepts of TypeScript
// -1. Static Typing
// -2. Interfaces
// -3. Classes and Inheritance
// -4. Generics
// -5. Modules and Namespaces
// -6. Type Inference
// -7. Type Aliases and Unions
// -8. Decorators

// #### 1. Static Typing
// TypeScript allows you to specify types for variables, function parameters, and return values. This helps catch errors during development.
```typescript
let isDone: boolean = false;
let age: number = 25;
let userName: string = "John";

function greet(name: string): string {
  return ``Hello, ${name}!``;
}
```

// #### 2. Interfaces
// Interfaces define the structure of an object. They are used for type-checking and can describe the shape of an object, including property types and methods.
```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}

const user: Person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log("Hello!");
  }
};
```

// #### 3. Classes and Inheritance
// TypeScript provides class-based object-oriented programming with features like inheritance, access modifiers (public, private, protected), and more.
```typescript
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log(``${this.name} moved ${distance} meters.``);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.bark();
dog.move(10);
```

// #### 4. Generics
// Generics provide a way to create reusable components that work with multiple types instead of a single one.
```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
```

// #### 5. Modules and Namespaces
// Modules are used to organize code into reusable pieces. They use `export` and `import` keywords.
```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// app.ts
import { add } from './math';

console.log(add(5, 3)); // Output: 8
```

// Namespaces provide a way to group related code, avoiding global scope pollution.
```typescript
namespace Geometry {
  export class Square {
    constructor(public sideLength: number) {}

    area() {
      return this.sideLength * this.sideLength;
    }
  }
}

const square = new Geometry.Square(5);
console.log(square.area()); // Output: 25
```

// #### 6. Type Inference
// TypeScript can infer types when they are not explicitly provided. This reduces the need for redundant type declarations.
```typescript
let inferredString = "Hello, World!"; // TypeScript infers the type as string
let inferredNumber = 10; // TypeScript infers the type as number
```

// #### 7. Type Aliases and Unions
// Type aliases allow you to create new names for existing types, making code more readable and manageable. Union types enable a variable to hold more than one type.
```typescript
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "Hello";
value = 42;

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Alice",
  age: 25,
};
```

// #### 8. Decorators
// Decorators are a special kind of declaration that can be attached to classes, methods, or properties. They are a way to modify the behavior of a class or a method.
```typescript
function readonly(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
}

class Person {
  @readonly
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("John");
person.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
```

// ### Benefits of Using TypeScript
// **Static Type Checking**: 
// Helps catch errors early in the development process.
// **Improved IDE Support**: 
// Provides better autocompletion, navigation, and refactoring capabilities.
// **Enhanced Readability and Maintainability**: 
// Makes it easier to understand and maintain large codebases.
// **Compatibility**: 
// Works with existing JavaScript code and libraries.
// **Advanced Features**: 
// Supports modern JavaScript features and adds additional features like interfaces and decorators.

// ### Example Project
// Here’s a simple TypeScript project example that uses some of these key concepts:
```typescript
// models/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

// services/UserService.ts
import { User } from "../models/User";

export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}

// app.ts
import { UserService } from "./services/UserService";
import { User } from "./models/User";

const userService = new UserService();

const user1: User = { id: 1, name: "Alice", email: "alice@example.com" };
const user2: User = { id: 2, name: "Bob", email: "bob@example.com" };

userService.addUser(user1);
userService.addUser(user2);

console.log(userService.getUserById(1));
console.log(userService.getUserById(2));
```