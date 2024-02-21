// Node js coevolution Link:
// https://www.youtube.com/watch?v=LAUi8pPlcUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY

// node command to run js file in node enviorment on file save
// **node --watch file_name**

// path module
const path = require("path");
path.basename(__dirname);
path.extname(__filename);
path.parse(__filename);
path.format(path.parse(__filename));
path.isAbsolute(__filename);
path.join("folder1", "folder2", "app.js"); //output = folder1/folder2/app.js
path.resolve("folder1", "folder2", "app.js"); //output = ../../../folder1/folder2/app.js

// ------------------------------------------------------------------------------------

// ### Node.js Overview:

// **Node.js** is a JavaScript runtime built on the V8 JavaScript engine. It allows developers to run JavaScript code server-side, enabling the development of scalable and high-performance network applications. Key features include non-blocking I/O and an event-driven architecture.

// ### Important Concepts:

// 1. **Event Loop:**
//    - **Theory:** Node.js operates on a single-threaded event loop, efficiently handling asynchronous tasks. It uses callback functions to process events and continue executing code without blocking.
//    - **Code:**
//  javascript
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 2. **Modules:**
//    - **Theory:** Node.js uses a modular system for organizing code. Modules encapsulate code, and `require` is used to include modules. Core modules, third-party modules, and user-defined modules are common.
//    - **Code:**
javascript;
// Importing a core module
const fs = require("fs");

// Importing a user-defined module
const myModule = require("./myModule");

// 3. **npm (Node Package Manager):**
//    - **Theory:** npm is the package manager for Node.js, facilitating the installation, sharing, and management of dependencies. It is a vast ecosystem of open-source libraries and tools.
//    - **Code:**
//  bash
//  # Installing a package
//  npm install packageName

// 4. **Express.js:**
//    - **Theory:** Express is a popular web application framework for Node.js. It simplifies the creation of APIs and web applications with features like routing, middleware, and templating.
//    - **Code:**
//      javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 5. **Asynchronous Programming:**
//    - **Theory:** Node.js excels at handling asynchronous operations. Callbacks, Promises, and async/await are common patterns for managing asynchronous code.
//    - **Code:**
//      ```javascript
//      // Using Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// ### Interview Questions:

// #### Easy:
// 1. What is Node.js?
// 2. Explain the event loop in Node.js.
// 3. How do you include external modules in Node.js?
// 4. What is npm? How is it used in Node.js?
// 5. What is the purpose of the `fs` module in Node.js?

// #### Medium:
// 6. Describe the concept of middleware in Express.js.
// 7. What is the purpose of the `process` object in Node.js?
// 8. How does error handling work in Node.js asynchronous code?
// 9. Explain the role of the `require` function in Node.js.
// 10. What is the difference between `process.nextTick` and `setImmediate`?

// #### Hard:
// 11. Discuss the differences between child_process.spawn and child_process.fork.
// 12. Explain the concept of the Node.js event emitter.
// 13. How does clustering work in Node.js? When is it beneficial?
// 14. Discuss the role of the `Buffer` class in Node.js.
// 15. Explain the purpose of the `cluster` module in Node.js.
