
// ### Interview Questions:

// #### Easy:
// 1. **What is Node.js?**
//    Node.js is a JavaScript runtime built on the V8 JavaScript engine. It allows developers to run JavaScript code on the server side, enabling server-side scripting and providing a platform for building scalable network applications. Node.js is event-driven and non-blocking, making it well-suited for handling concurrent operations.

// 2. **Explain the event loop in Node.js.**
//    The event loop is a crucial concept in Node.js that enables asynchronous operations. In Node.js, most I/O operations are non-blocking, and the event loop manages these operations efficiently. It constantly checks the message queue for tasks and executes them asynchronously. This allows Node.js to handle multiple operations concurrently without waiting for each one to complete before moving on to the next, making it highly scalable.

// 3. **How do you include external modules in Node.js?**
//    In Node.js, external modules can be included using the `require` function. For example:
//    ```javascript
//    const myModule = require('my-module');
//    ```
//    This statement imports the 'my-module' module, and you can then use the functionalities provided by that module in your code.

// 4. **What is npm? How is it used in Node.js?**
//    npm (Node Package Manager) is the default package manager for Node.js, allowing developers to discover, share, and use packages of code. It comes with the Node.js installation. Developers can use npm to install and manage third-party packages (libraries, tools, etc.) in their Node.js projects. Common npm commands include `npm install` to install packages and `npm init` to initialize a new project.

// 5. **What is the purpose of the `fs` module in Node.js?**
//    The `fs` module in Node.js stands for File System. It provides an API for interacting with the file system, allowing you to perform various operations on files and directories. It includes methods for reading from and writing to files, as well as functions for managing directories. The `fs` module is crucial for handling file-related tasks in Node.js applications.

// #### Medium:
// ### 6. **Describe the concept of middleware in Express.js:**
// Middleware in Express.js are functions that have access to the request, response, and the next middleware function in the application's request-response cycle. They can modify the request and response objects, end the request-response cycle, and call the next middleware function in the stack. Middleware functions play a crucial role in handling tasks such as authentication, logging, parsing data, and more. They enhance the functionality of the Express application by allowing developers to modularize and organize the code effectively.

// Example:
// javascript
// const express = require('express');
// const app = express();

// Middleware example
// app.use((req, res, next) => {
//     console.log('Middleware executed.');
//     next(); // Call the next middleware in the stack
// });

// Route handler
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// ### 7. **What is the purpose of the `process` object in Node.js?**
// The `process` object in Node.js provides information about, and control over, the Node.js process. It allows access to environment variables, command-line arguments, and various methods for interacting with the current Node.js process. Developers can use the `process` object to perform tasks like terminating the process, changing the current working directory, and listening for events related to the process lifecycle.

// Example:
// javascript
// Accessing command line arguments
console.log(process.argv);

// Checking Node.js version
console.log(process.version);

// Terminating the process
// process.exit();

// ### 8. **How does error handling work in Node.js asynchronous code?**
// In Node.js, errors in asynchronous code are typically handled using callbacks, promises, or the `async/await` syntax. Callbacks usually have an error parameter as the first argument, while promises use the `catch` method to handle errors. For `async/await`, the `try/catch` block is employed. Additionally, the `EventEmitter` class is used to handle errors in event-driven architectures.

// Example using callbacks:
// javascript
fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

// ### 9. **Explain the role of the `require` function in Node.js:**
// The `require` function in Node.js is used to include external modules in a script. It takes the name of the module or the path to the module file as an argument and returns the module's exports. This allows code modularization and reuse, as modules encapsulate functionality that can be used across different parts of an application.

// Example:
// javascript
const myModule = require("./my-module"); // Assuming my-module.js is in the same directory
myModule.myFunction();

// ### 10. **What is the difference between `process.nextTick` and `setImmediate`?**
// `process.nextTick` and `setImmediate` are both used to schedule a callback to be invoked in the next iteration of the event loop. However, there is a subtle difference. `process.nextTick` executes the callback at the beginning of the current event loop cycle, before I/O events, timers, or other scheduled events. On the other hand, `setImmediate` executes the callback in the next event loop cycle but after I/O events.

// Example:
// javascript
process.nextTick(() => {
  console.log("Next Tick callback");
});

setImmediate(() => {
  console.log("Set Immediate callback");
});

// In this example, the `Next Tick callback` will be logged before the `Set Immediate callback`.

// #### Hard:
// ### 11. **Discuss the differences between child_process.spawn and child_process.fork.**

// In Node.js, the `child_process` module is used to spawn child processes. The main differences between `spawn` and `fork` lie in their intended use cases and the communication mechanism.

// - **`spawn`:**
//   - It is a general-purpose method to spawn a new process.
//   - It does not create a new V8 instance, making it more lightweight.
//   - Communication with the child process is done using streams (stdin, stdout, stderr).
//   - Suitable for scenarios where you need to run a command in a separate process, like running system commands.

const { spawn } = require("child_process");
const ls = spawn("ls", ["-l", "/"]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

// - **`fork`:**
// - It is a special case of `spawn` specifically designed for creating child processes running Node.js scripts.
// - It creates a new V8 instance, allowing for better isolation.
// - Communication is achieved through an inter-process communication (IPC) channel, built on top of `process.send()`.
// - Useful when you need to execute separate Node.js scripts as child processes.

const { fork } = require("child_process");
const child = fork("child.js");

child.on("message", (message) => {
  console.log(`Message from child: ${message}`);
});

child.send({ hello: "world" });

// ### 12. **Explain the concept of the Node.js event emitter.**

// The Node.js event emitter is a core concept that allows objects to emit and listen for events. It is implemented through the `events` module and provides an event-driven architecture. Objects that emit events are instances of the `EventEmitter` class.

// - **Example:**
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => {
  console.log("Event triggered!");
});

// Event emitter
myEmitter.emit("event");

// In this example, the `MyEmitter` class is a custom event emitter. The `on` method is used to register an event listener for the 'event' event, and `emit` is used to trigger that event. This pattern is widely used in Node.js for handling asynchronous operations.

// ### 13. **How does clustering work in Node.js? When is it beneficial?**

// Clustering in Node.js involves creating multiple instances (workers) of the application to distribute the load across multiple CPU cores. The `cluster` module facilitates this.

// - **Benefits:**
//   - **Improved Performance:** Utilizes multiple CPU cores, improving application performance.
//   - **High Availability:** If one worker fails, others can continue processing requests.
//   - **Scalability:** Allows horizontal scaling by adding more machines.

// - **Example:**
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  // Fork workers
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  // Handle worker events
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Worker code
  console.log(`Worker ${process.pid} started`);
}

// In this example, the master process forks multiple workers, each running a separate instance of the application.

// ### 14. **Discuss the role of the `Buffer` class in Node.js.**

// The `Buffer` class in Node.js is designed to handle binary data directly. It provides a way to work with raw binary data without the need for encoding or decoding.

// - **Example:**
const buffer = Buffer.from("Hello, Node.js!", "utf-8");

console.log(buffer); // <Buffer 48 65 6c 6c 6f 2c 20 4e 6f 64 65 2e 6a 73 21>
console.log(buffer.toString("utf-8")); // Hello, Node.js!

// Here, a `Buffer` is created from a string, and it can be converted back to a string using the `toString` method. Buffers are particularly useful when working with binary data, such as reading from or writing to files or handling network protocols.

// ### 15. **Explain the purpose of the `cluster` module in Node.js.**

// The `cluster` module in Node.js is used to enable the creation of child processes (workers) to distribute the load across multiple CPU cores. It simplifies the implementation of a multi-process architecture for improved performance and scalability.

// - **Example:**
// (Example provided in the clustering explanation above.)

// The `cluster` module is used to fork multiple workers, each running its instance of the application. It helps manage the communication between the master and worker processes, allowing them to share the workload effectively.
