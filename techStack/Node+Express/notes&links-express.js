// ExpressJs notes handbook pdf
// https://lcc.lt/assets/pdf_files/express-handbook.pdf

// Express interview questions:
// Part 1: https://www.youtube.com/watch?v=dm1KKSOrA54
// Part 2: https://www.youtube.com/watch?v=mljhoW4qlEE

// ==========================================================================================

// ### Express.js Overview:

// **Express.js** is a minimal and flexible web application framework for Node.js. It simplifies the development of web and mobile applications by providing a robust set of features for building web servers and APIs. Express is known for its simplicity, flexibility, and scalability.

// ### Important Concepts:

// 1. **Routing:**
//    - **Theory:** Routing in Express defines how an application responds to client requests. It involves matching the URL pattern of a request to a specific route handler.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/api/users", (req, res) => {
  // Handle POST request to /api/users
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 2. **Middleware:**
//    - **Theory:** Middleware functions in Express are functions that have access to the request, response, and the next middleware function in the application's request-response cycle.

const express = require("express");
const app = express();

// Middleware function
const logMiddleware = (req, res, next) => {
  console.log("Request received at:", new Date());
  next();
};

app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 3. **Router:**
//    - **Theory:** Routers in Express allow developers to group route handlers in a modular way. This helps organize the application structure.

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router Example");
});

module.exports = router;

// 4. **Middleware Execution Order:**
//    - **Theory:** The order in which middleware functions are executed is crucial. The sequence matters, as each middleware can modify the request or response before passing them to the next middleware.

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 5. **Error Handling:**
//    - **Theory:** Express has a built-in error handling mechanism. Middleware functions with four parameters (err, req, res, next) are treated as error-handling middleware.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Simulating an error
  throw new Error("Something went wrong!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// ### Interview Questions:

// #### Easy:
// 1. What is Express.js?
// 2. Explain the concept of routing in Express.
// 3. How do you handle HTTP GET requests in Express?
// 4. What is middleware in Express.js?
// 5. How do you install Express.js in a Node.js project?

// #### Medium:
// 6. What is the purpose of the `express.Router` class in Express.js?
// 7. How does Express handle static files and assets?
// 8. Explain the significance of the `app.use` method in Express.
// 9. Differentiate between `app.get` and `app.use` in Express routing.
// 10. How does Express handle middleware execution order?

// 6. **What is the purpose of the `express.Router` class in Express.js?**
//    - **Theory:** The `express.Router` class in Express.js allows the creation of modular, mountable route handlers. It provides an isolated instance of middleware and routes and can be used to group related routes together.

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router Home Page");
});

module.exports = router;

// 7. **How does Express handle static files and assets?**
//    - **Theory:** Express serves static files and assets using the `express.static` middleware. It is typically used to serve images, CSS files, and client-side JavaScript files. The middleware takes a root directory parameter, and any files in that directory are made accessible via the specified route.

// Serve static files from the 'public' directory
app.use("/static", express.static("public"));

// 8. **Explain the significance of the `app.use` method in Express.**
//    - **Theory:** The `app.use` method in Express is used to mount middleware functions at a specified path. It can be used to set up middleware that runs for every request or to mount routers at specific paths.

// Middleware that runs for every request
app.use((req, res, next) => {
  console.log("Middleware for every request");
  next();
});

// 9. **Differentiate between `app.get` and `app.use` in Express routing.**
//    - **Theory:** `app.get` is used to handle HTTP GET requests for a specific route, while `app.use` is more generic and can be used to apply middleware or mount routers for various HTTP methods at a specified path.

// Using app.get for a specific route
app.get("/specific-route", (req, res) => {
  res.send("Handling GET request for a specific route");
});

// Using app.use for middleware or mounting routers
app.use("/api", apiRouter);

// 10. **How does Express handle middleware execution order?**
//     - **Theory:** Middleware in Express is executed in the order in which it is defined. Middleware functions added using `app.use` or specific HTTP method functions (`app.get`, `app.post`, etc.) are executed sequentially in the order they are defined in the code.

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

// #### Hard:
// 11. Discuss the role of the `next` function in Express middleware.
// 12. Explain the concept of route parameters in Express.js.
// 13. How does Express.js handle HTTP POST requests?
// 14. Discuss the differences between app-level and router-level middleware.
// 15. Explain the mechanism of error handling in Express.js.

// 11. **Discuss the role of the `next` function in Express middleware.**
//    - **Theory:** The `next` function in Express middleware is used to pass control to the next middleware function in the stack. When called, it moves to the next middleware in the order. If `next` is not called, the request-response cycle is halted, and further middleware or route handlers won't be executed.

app.use((req, res, next) => {
  console.log("Middleware 1");
  next(); // Move to the next middleware
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  // No next() call, halting the cycle
  res.send("Response from Middleware 2");
});

// 12. **Explain the concept of route parameters in Express.js.**
//     - **Theory:** Route parameters in Express allow dynamic values to be part of the URL. They are defined with a colon (`:`) followed by the parameter name in the route path. The parameter values are then available in the `req.params` object.

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

// 13. **How does Express.js handle HTTP POST requests?**
//     - **Theory:** Express handles HTTP POST requests using middleware such as `express.json()` for parsing JSON bodies and `express.urlencoded()` for parsing URL-encoded bodies. The request payload is made available in the `req.body` object.

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const data = req.body;
  res.send(`Received POST data: ${JSON.stringify(data)}`);
});

// 14. **Discuss the differences between app-level and router-level middleware.**
//     - **Theory:** App-level middleware is applied to the entire application using `app.use`, while router-level middleware is specific to a particular router using `router.use`. App-level middleware runs for every request, whereas router-level middleware is limited to routes defined within the router.

// App-level middleware
app.use((req, res, next) => {
  console.log("App-level middleware");
  next();
});

// Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log("Router-level middleware");
  next();
});

// 15. **Explain the mechanism of error handling in Express.js.**
// - **Theory:** Error handling in Express involves using middleware functions with four parameters (err, req, res, next). If an error occurs, control is passed to the error-handling middleware. It's defined with `app.use` and has an additional parameter for error handling.

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
