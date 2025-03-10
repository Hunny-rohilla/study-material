// Refrence:
// https://www.youtube.com/watch?v=aAMci0xQIg0&list=PLinedj3B30sCoHBdM-S7Ang7WERCCuftE&index=2


// ### **Object-Oriented Programming (OOP) Concepts Explained with Examples**

// Object-Oriented Programming (OOP) is a programming paradigm that revolves around objects rather than functions and logic. It provides a clear modular structure for programs, making them easier to maintain, scale, and reuse.

// ---

// ## **1. Four Pillars of OOP**
// The core principles of OOP are **Encapsulation, Inheritance, Polymorphism, and Abstraction**.

// ### **1.1 Encapsulation**  
// Encapsulation is the mechanism of **hiding data** and only allowing controlled access. This is achieved using **private**, **protected**, and **public** access specifiers.

// **Example (Python):**
// ```python
// class BankAccount:
//     def __init__(self, account_number, balance):
//         self.__account_number = account_number  # Private variable
//         self.__balance = balance  # Private variable

//     def deposit(self, amount):
//         self.__balance += amount

//     def withdraw(self, amount):
//         if self.__balance >= amount:
//             self.__balance -= amount
//         else:
//             print("Insufficient balance")

//     def get_balance(self):
//         return self.__balance  # Controlled access to private variable

// # Usage
// account = BankAccount(12345, 5000)
// account.deposit(2000)
// print(account.get_balance())  # 7000
// ```
// 🔹 **Why use encapsulation?**  
// - Prevents accidental modification of sensitive data.  
// - Ensures controlled data access using getter and setter methods.

// ---

// ### **1.2 Inheritance**  
// Inheritance allows one class (**child**) to derive properties and behaviors from another class (**parent**), enabling **code reuse**.

// **Example (Python):**
// ```python
// class Vehicle:
//     def __init__(self, brand, speed):
//         self.brand = brand
//         self.speed = speed

//     def drive(self):
//         print(f"{self.brand} is moving at {self.speed} km/h")

// # Child Class (inherits from Vehicle)
// class Car(Vehicle):
//     def __init__(self, brand, speed, wheels):
//         super().__init__(brand, speed)  # Call parent constructor
//         self.wheels = wheels

// # Usage
// car = Car("Toyota", 120, 4)
// car.drive()  # Toyota is moving at 120 km/h
// ```
// 🔹 **Why use inheritance?**  
// - Eliminates code duplication.  
// - Allows hierarchical classification (e.g., Vehicle → Car, Truck, Bike).  

// ---

// ### **1.3 Polymorphism**  
// Polymorphism means **"many forms"**. It allows methods to have the same name but behave differently in different classes.

// **Example (Python - Method Overriding):**
// ```python
// class Animal:
//     def make_sound(self):
//         print("Animal makes a sound")

// class Dog(Animal):
//     def make_sound(self):
//         print("Dog barks")

// class Cat(Animal):
//     def make_sound(self):
//         print("Cat meows")

// # Usage
// animals = [Dog(), Cat()]
// for animal in animals:
//     animal.make_sound()
// ```
// 🔹 **Why use polymorphism?**  
// - Simplifies code readability and maintainability.  
// - Promotes flexibility and scalability.

// ---

// ### **1.4 Abstraction**  
// Abstraction hides implementation details and only **shows relevant information** to the user.

// **Example (Python - Abstract Class):**
// ```python
// from abc import ABC, abstractmethod

// class Shape(ABC):  # Abstract class
//     @abstractmethod
//     def area(self):
//         pass  # Abstract method

// class Circle(Shape):
//     def __init__(self, radius):
//         self.radius = radius

//     def area(self):
//         return 3.14 * self.radius * self.radius

// # Usage
// circle = Circle(5)
// print(circle.area())  # 78.5
// ```
// 🔹 **Why use abstraction?**  
// - Hides unnecessary details.  
// - Reduces complexity for end users.  

// ---

// ## **2. Additional OOP Topics**
// Apart from the four pillars, here are other essential OOP topics:

// ### **2.1 Classes and Objects**
// A **class** is a blueprint for creating **objects**.

// **Example (Python):**
// ```python
// class Person:
//     def __init__(self, name, age):
//         self.name = name
//         self.age = age

//     def introduce(self):
//         print(f"Hi, I'm {self.name} and I'm {self.age} years old.")

// # Object creation
// person1 = Person("Alice", 25)
// person1.introduce()
// ```

// ---

// ### **2.2 Constructor and Destructor**
// A **constructor (`__init__`)** initializes objects, and a **destructor (`__del__`)** is called when an object is deleted.

// **Example:**
// ```python
// class Demo:
//     def __init__(self):
//         print("Constructor is called!")

//     def __del__(self):
//         print("Destructor is called!")

// obj = Demo()  
// del obj  # Triggers destructor
// ```

// ---

// ### **2.3 Method Overloading and Overriding**
// - **Method Overloading:** Same method name, different parameters. (Not natively supported in Python but can be mimicked with default arguments.)
// - **Method Overriding:** Redefining a method in a child class.

// **Example:**
// ```python
// class Math:
//     def add(self, a, b, c=0):
//         return a + b + c

// obj = Math()
// print(obj.add(2, 3))    # 5
// print(obj.add(2, 3, 4)) # 9
// ```

// ---

// ### **2.4 Multiple Inheritance**
// A class can inherit from multiple parent classes.

// **Example:**
// ```python
// class A:
//     def method_a(self):
//         print("Method from A")

// class B:
//     def method_b(self):
//         print("Method from B")

// class C(A, B):
//     pass

// obj = C()
// obj.method_a()
// obj.method_b()
// ```

// ---

// ### **2.5 Association, Aggregation & Composition**
// - **Association**: Relationship between two independent classes.
// - **Aggregation**: Weak relationship (child can exist without parent).
// - **Composition**: Strong relationship (child cannot exist without parent).

// **Example (Composition - Car and Engine):**
// ```python
// class Engine:
//     def start(self):
//         print("Engine started")

// class Car:
//     def __init__(self):
//         self.engine = Engine()  # Composition

//     def drive(self):
//         self.engine.start()
//         print("Car is moving")

// car = Car()
// car.drive()
// ```

// ---

// ## **Conclusion**
// OOP is a powerful paradigm that makes **code reusable, maintainable, and scalable**. Mastering **encapsulation, inheritance, polymorphism, and abstraction** will help you write efficient and structured code.

// Would you like a real-world project example implementing OOP? 🚀