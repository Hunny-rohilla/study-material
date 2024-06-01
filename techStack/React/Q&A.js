// ### React Overview:

// React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It's commonly used for building single-page applications where UI updates are dynamic and need to respond to user interactions. React follows a component-based architecture, making it easy to manage and reuse UI elements.
// **React** is a declarative, efficient, and flexible JavaScript library for building user interfaces. It allows developers to create UIs in a modular and reusable way through components.

// #### Important Concepts:
// 1. **Components:**
//    - **Theory:** Components are the building blocks of a React application. They are reusable and encapsulate a part of the user interface.
//    - **Code:**
//      ```jsx
//      class MyComponent extends React.Component {
//        render() {
//          return <div>Hello, React!</div>;
//        }
//      }
//      ```

// 2. **Props:**
//    - **Theory:** Props (short for properties) are inputs to a React component. They allow the passing of data from a parent component to a child component.
//    - **Code:**
//      ```jsx
//      function Greeting(props) {
//        return <div>Hello, {props.name}!</div>;
//      }

//      // Usage
//      <Greeting name="John" />
//      ```

// 3. **State:**
//    - **Theory:** State represents the local state of a component. It is used to manage dynamic data and trigger re-rendering when the state changes.
//    - **Code:**
//      ```jsx
//      class Counter extends React.Component {
//        constructor() {
//          super();
//          this.state = { count: 0 };
//        }

//        render() {
//          return <div>{this.state.count}</div>;
//        }
//      }
//      ```

// 4. **Lifecycle Methods:**
//    - **Theory:** React components have lifecycle methods that allow developers to execute code at different points in a component's lifecycle, such as when it's mounted or updated.
//    - **Code:**
//      ```jsx
//      class MyComponent extends React.Component {
//        componentDidMount() {
//          // Code to run after component is mounted
//        }

//        render() {
//          // Component rendering logic
//        }
//      }
//      ```

// 5. **Hooks:**
//    - **Theory:** Introduced in React 16.8, hooks allow functional components to use state and lifecycle features without writing a class.
//    - **Code:**
//      ```jsx
//      import React, { useState, useEffect } from 'react';

//      function MyComponent() {
//        const [count, setCount] = useState(0);

//        useEffect(() => {
//          document.title = `Count: ${count}`;
//        }, [count]);

//        return <div>{count}</div>;
//      }
//      ```

// 6. **Virtual DOM:**
//    - **Theory:** The Virtual DOM is a lightweight copy of the real DOM. React uses it to improve efficiency by minimizing direct manipulation of the actual DOM, updating only the necessary parts when state changes.

// 7. **JSX (JavaScript XML):**
//    - **Theory:** JSX is a syntax extension for JavaScript recommended by React. It enables writing HTML-like code in JavaScript files, making it easier to describe the UI structure.
//    - **Code:**
//      ```jsx
//      const element = <h1>Hello, JSX!</h1>;
//      ```

// 8. **Conditional Rendering:**
//    - **Theory:** Conditional rendering allows components to display different content based on certain conditions, enhancing the flexibility of UI components.
//    - **Code:**
//      ```jsx
//      function Greeting({ isLoggedIn }) {
//        return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
//      }
//      ```

// 9. **Lists and Keys:**
//    - **Theory:** React provides a map function to iterate through lists of data and a `key` attribute to help React identify which items have changed, added, or removed.
//    - **Code:**
//      ```jsx
//      function NumberList({ numbers }) {
//        return (
//          <ul>
//            {numbers.map((number) => (
//              <li key={number.toString()}>{number}</li>
//            ))}
//          </ul>
//        );
//      }
//      ```

// 10. **Forms:**
//     - **Theory:** React handles form elements with a controlled approach, where form data is controlled by React and not the DOM. This allows for easier manipulation and validation.
//     - **Code:**
//       ```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
        />
      </form>
    );
  }
}
//   ```

// ### Interview Questions:

// #### Easy:
// 1. **Explain the purpose of JSX in React:**
//    - **Answer:**
//      JSX is a syntax extension for JavaScript recommended by React. It allows you to write HTML-like code in JavaScript files, making it easier to describe the UI structure.

//    - **Code:**
//      ```jsx
//      const element = <h1>Hello, JSX!</h1>;
//      ```

// 2. **What is the key advantage of using a Virtual DOM?**
//    - **Answer:**
//      The Virtual DOM improves efficiency by minimizing direct manipulation of the actual DOM. It creates a lightweight copy of the real DOM, updating only the necessary parts when state changes.

// 3. **How does React handle events?**
//    - **Answer:**
//      React handles events using camelCase naming conventions and provides synthetic events that wrap native browser events. For example, `onClick` instead of `onclick`.

//    - **Code:**
```jsx
     class MyButton extends React.Component {
       handleClick = () => {
         console.log('Button clicked!');
       };

       render() {
         return <button onClick={this.handleClick}>Click me</button>;
       }
     }
     ```
// 5. **What is the significance of the `setState` method?** 
//    - **Answer:** 
//      Keys help React identify which items have changed, been added, or been removed in a list. This aids in efficient updates to the Virtual DOM. 

// 4. **Why are keys important when rendering lists in React?**
//    - **Answer:**
//      The `setState` method is used to update the state of a React component. It triggers a re-render and ensures that the updated state is reflected in the UI.

// 6. **What is JSX in React?**
//    - **Answer:**
//      JSX stands for JavaScript XML. It is a syntax extension for JavaScript recommended by React to write UI elements in a more readable way.

// 7. **Explain the difference between state and props.**
//    - **Answer:**
//      State is internal to a component and can be changed by the component itself. Props are external and passed down from a parent component to a child component.

// 8. **How does React handle data binding?**
//    - **Answer:**
//      React uses a one-way data binding approach. Data flows from parent to child components through props, and if the child needs to communicate with the parent, it can do so through callback functions.

// ### Medium:

// 1. **Describe the virtual DOM and its role in React:**
//    - **Answer:** The virtual DOM is a lightweight copy of the actual DOM. React uses it to improve efficiency by minimizing direct manipulation of the real DOM. When state changes, React creates a new virtual DOM, compares it with the old one, and updates only the parts that have changed.

// 2. **What are controlled and uncontrolled components in React forms?**
//    - **Answer:** Controlled components are React components where form data is controlled by the state. Uncontrolled components, on the other hand, allow the form data to be handled by the DOM itself.

```jsx
   // Controlled Component
   class ControlledForm extends React.Component {
     constructor(props) {
       super(props);
       this.state = { value: '' };
     }

     handleChange = (event) => {
       this.setState({ value: event.target.value });
     };

     render() {
       return (
         <input
           type="text"
           value={this.state.value}
           onChange={this.handleChange}
         />
       );
     }
   }

   // Uncontrolled Component
   function UncontrolledForm() {
     return <input type="text" />;
   }
   ``` 
// 3. **Explain the concept of higher-order components (HOCs) in React:**
//    - **Answer:** Higher-order components (HOCs) are functions that take a component and return a new component with additional props or behavior. They are used for code reuse, logic abstraction, and enhancing component functionality. 
```jsx
   const withLogger = (WrappedComponent) => {
     return class extends React.Component {
       componentDidMount() {
         console.log('Component is mounted');
       }

       render() {
         return <WrappedComponent {...this.props} />;
       }
     };
   };

   const EnhancedComponent = withLogger(MyComponent);
   ```
// 4. **What is the significance of the `shouldComponentUpdate` method?**
//    - **Answer:** `shouldComponentUpdate` is a lifecycle method that allows the developer to control whether a component should re-render or not. It is used for performance optimization by preventing unnecessary re-renders. 
```jsx
   class MyComponent extends React.Component {
     shouldComponentUpdate(nextProps, nextState) {
       // Custom logic to determine if re-render is necessary
       return this.props.data !== nextProps.data;
     }

     render() {
       return <div>{this.props.data}</div>;
     }
   }
   ```;

// 5. **Differentiate between `useState` and `useEffect` hooks:**
//    - **Answer:**
//      - `useState`: Used for adding state to functional components.
//      - `useEffect`: Used for side effects in functional components, like data fetching, subscriptions, or manually changing the DOM.

//    ```jsx
//    import React, { useState, useEffect } from 'react';

//    function ExampleComponent() {
//      // useState
//      const [count, setCount] = useState(0);

//      // useEffect
//      useEffect(() => {
//        document.title = `Count: ${count}`;
//      }, [count]);

//      return (
//        <div>
//          <p>You clicked {count} times</p>
//          <button onClick={() => setCount(count + 1)}>Click me</button>
//        </div>
//      );
//    }
//    ```

// 6. **Discuss the differences between state and props in React:**
//    - **Answer:**
//    - `State`: Managed within a component and can be modified using `setState`. Used for dynamic data that may change during the component's lifecycle.
//    - `Props`: External inputs to a component that are passed down from a parent. Props are immutable and are used for data that does not change within the component.

// 7. **How does React support code reusability through components?**
//    - **Answer:** React promotes code reusability through components by allowing developers to create modular and self-contained units. Components can be reused across different parts of an application or even in different projects.

// 8. **Explain the concept of lifting state up in React:**
//    - **Answer:** Lifting state up involves moving the state from a child component to its parent. This is done to share state among sibling components or to allow a parent component to control the state of its children.

// Parent Component
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return <Child count={this.state.count} onIncrement={this.incrementCount} />;
  }
}

// Child Component
function Child({ count, onIncrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

// 9. **What are the lifecycle methods in a React component?**
//    - **Answer:**
//      - `componentDidMount`: Called after the component is rendered for the first time.
//      - `componentDidUpdate`: Called when the component is updated.
//      - `componentWillUnmount`: Called before the component is removed from the DOM.

class LifecycleComponent extends React.Component {
  componentDidMount() {
    console.log("Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component is updated");
  }

  componentWillUnmount() {
    console.log("Component is about to unmount");
  }

  render() {
    return <div>Lifecycle Example</div>;
  }
}

// 10. **How does React handle forms, and what is controlled input?**
//     - **Answer:** React handles forms through controlled components, where the form elements' values are controlled by React state. This allows React to handle the data flow and make the form inputs controlled.
class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", this.state.inputText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// #### Hard:

// #### 11. Dive into the concept of React Hooks and their use cases:

// **Theory:**
// React Hooks are functions that enable the use of state and lifecycle features in functional components. They were introduced in React 16.8 to allow developers to use state and other React features without writing a class. Key hooks include `useState` for managing state, `useEffect` for handling side effects, and more.

import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// #### 12. Explain the concept of reconciliation in React:

// **Theory:**
// Reconciliation is the process by which React updates the Virtual DOM and efficiently renders changes to the actual DOM. When state or props change, React compares the new Virtual DOM with the previous one, identifies the differences (referred to as the "diffing" process), and updates only the necessary parts in the real DOM.

// #### 13. Discuss the benefits and drawbacks of server-side rendering (SSR) in React:

// **Theory:**
// - **Benefits:** Improved performance, better SEO, and faster initial page loads as the server sends pre-rendered HTML to the client.
// - **Drawbacks:** Increased server load, potential for more complex setups, and limitations in handling client-side-only functionalities.

// #### 14. What is the purpose of the `useEffect` hook in functional components?

// **Theory:**
// The `useEffect` hook in React functional components is used for handling side effects. It allows you to perform operations after the component is rendered, such as data fetching, subscriptions, or manually changing the DOM. The second argument to `useEffect` is an array of dependencies, ensuring it only runs when the specified dependencies change.

// #### 15. Explain the concept of lazy loading and its application in React:

// **Theory:**
// Lazy loading is a technique where components or assets are loaded only when they are needed, improving the initial loading time of a web page. In React, this can be achieved using the `React.lazy()` function for dynamic imports, and the `Suspense` component to handle loading states.

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
    </div>
  );
}

// #### 16. Dive into the concept of React Fiber and its purpose:

// **Theory:**
// React Fiber is a reimplementation of the React core algorithm. It introduces a new way of handling the rendering pipeline, allowing React to perform work in smaller, interruptible units called fibers. This helps in prioritizing and scheduling updates, improving the overall performance and responsiveness of React applications.

// #### 17. Explain the use of React context and when it's beneficial:

// **Theory:**
// React context provides a way to pass data through the component tree without having to pass props manually at every level. It's beneficial when certain data needs to be accessible by many components at different nesting levels.

// Create a context
const MyContext = React.createContext();

// Provide a value at the top of the component tree
function MyProvider({ children }) {
  const sharedValue = "Shared Data";
  return (
    <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>
  );
}

// Consume the context in a nested component
function MyConsumer() {
  return (
    <MyContext.Consumer>{(value) => <div>{value}</div>}</MyContext.Consumer>
  );
}

// #### 18. What are the limitations of using arrow functions in React components?

// **Theory:**
// Arrow functions in React components have limitations when it comes to handling the `this` keyword. Arrow functions do not bind their own `this`, leading to potential issues when using lifecycle methods or accessing instance properties.

class MyComponent extends React.Component {
  handleClick = () => {
    // 'this' refers to the component instance
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

// #### 19. Describe the process of code splitting in a React application:

// **Theory:**
// Code splitting involves breaking down a large JavaScript bundle into smaller chunks, loading only the necessary code for the current view. In React, code splitting can be achieved using dynamic imports and tools like Webpack.

// Using dynamic import for code splitting
const MyComponent = React.lazy(() => import("./MyComponent"));

// In a component
function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </React.Suspense>
  );
}

// #### 20. How does React achieve server-side rendering (SSR), and why is it important?

// **Theory:**
// Server-side rendering in React involves rendering the initial HTML on the server before sending it to the client. This improves SEO, provides faster initial page loads, and ensures that users with disabled JavaScript can still access content. React provides tools like `ReactDOMServer` for server-side rendering.

// Server-side rendering with ReactDOMServer
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("./App");

const server = express();

server.get("/", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// ***********************************************************************************

// Reference: https://arc.dev/developer-blog/reactjs-interview-questions/

// **Basic React Interview Questions**

// 1. How to create components in React?
// React provides two ways to create a component – function components and class components.

// Function Components: is the simplest way to create a component. It uses pure JavaScript functions that accept props and returns a React element.
function Welcome({ message }) {
  return <h1>{`Hello, ${message}`}</h1>;
}

// Class Components: on the other hand, uses ES6 class to define a component. The same function component can be rewritten as the following class component.
class Welcome extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
}

// 2. What are props in React?
// Props are the component’s inputs. They can be in the form of a single value or an object containing a set of values that are passed from a parent component to a child component.
<Welcome name={"Hello"} />;

// 3. What are states in React?
// State is an object that contains information local to the component that may change over the lifetime of the component.

// 4. What is context in React?
// Context is an alternate way to pass data through the component tree without passing props manually at every level. Context is designed to share data that is considered “global” within a tree of components.

// 5. How do you conditionally render components?
// JSX doesn’t render false or undefined. This behavior lets us use conditional short-circuiting to render parts of your component using the && notation.
{
  props.name && <p>{props.name}</p>;
}

// A ternary operator can also be used to create an if-else condition.
{
  props.name ? <p>{props.name}</p> : <p>Name not available</p>;
}

// 6. How to bind methods or event handlers in JSX callbacks?
// Callback with arrow functions – Bind the event to an arrow function that calls the desired function.
class Greeting extends React.Component {
  handleClick() {
    console.log("Clicked");
  }

  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}

// Bind in constructor – Event handlers defined as class methods in React aren’t bound by default. We could manually bind them in the constructor to allow them to be called from the template.
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Clicked");
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

// Public class fields syntax – We can avoid the manual binding of the method defining the method using the arrow function. Arrow functions don’t have their own this keyword causing the this keyword to be bound lexically.
class Greeting extends React.Component {
  handleClick = () => {
    console.log("Clicked");
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

// 7. What is a SyntheticEvent in React?
// SyntheticEvent is a cross-browser wrapper around the browser’s native event. It has the same API as its browser’s native counterpart, including methods like stopPropagation() and preventDefault(). However, unlike the browser’s native events, SyntheticEvent works identically across all browsers.

// 8. How to conditionally apply class attributes?
// The snippet below uses a ternary operator to add the disabled class when the disabled prop is true and the default class if it’s false.
<div
  className={"btn-panel " + (this.props.disabled ? "disabled" : "default")}
></div>;

// 9. What are refs in React?
// Refs provide a way to access DOM nodes or React elements created in the render method.

// Refs act as an escape hatch to the regular React dataflow of passing props down a component tree. They are used to update the child component (including both React components and DOM elements) without passing in new props.

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Access the textInput using "current"
    // and set the focus using the input's DOM API
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="Focus" onClick={this.focusTextInput} />
      </div>
    );
  }
}

// -------------------------

import React, { useRef, useEffect } from "react";

const MyFunctionalComponent = () => {
  // Create a ref using the useRef hook
  const myRef = useRef();

  useEffect(() => {
    // You can access the current property of the ref to get the DOM element or component instance
    if (myRef.current) {
      console.log("Ref value:", myRef.current);
    }
  }, []);

  return (
    <div>
      {/* Attach the ref to a DOM element or another component */}
      <input ref={myRef} type="text" />
    </div>
  );
};

export default MyFunctionalComponent;

// A few use cases for refs include:
// - managing focus and text selection
// - triggering imperative animations
// - integrating with third-party DOM libraries

// 10. What are the four stages a React component goes through?
// Each React component has its own lifecycle. Each stage of the lifecycle invokes a series of methods allowing us to perform specific tasks at a specific stage of the component’s lifecycle. Understanding the different stages within a component’s lifecycle enables us to use them effectively. The candidate should be able to iterate what the four stages are and what happens in each stage.

// A React Component goes through the following four stages:

// - Initialization – the component is constructed with the given props and default state
// - Mounting – rendering the JSX returned by the render method
// - Updating – when the state of a component is updated and the application is repainted
// - Unmounting – the final stage of the component lifecycle where the component is removed from the DOM

// 11. What is React? How is it different from other JS frameworks?
// What is React?
// React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.

// How is React different?
// Because React is a small library focused on building UI components, it is necessarily different from many other JavaScript frameworks.

// For example, AngularJS (1.x) approaches building an application by extending HTML markup and injecting various constructs (e.g. Directives, Controllers, Services) at runtime. As a result, AngularJS is very opinionated about the greater architecture of your application — these abstractions are certainly useful in some cases, but in many situations, they come at the cost of flexibility.

// 12. What can you tell me about JSX?
// When Facebook first released React to the world, they also introduced a new dialect of JavaScript called JSX that embeds raw HTML templates inside JavaScript code. JSX code by itself cannot be read by the browser; it must be transpiled into traditional JavaScript using tools like Babel and webpack.

// 13. What are stateless components?
// Stateless components (a flavor of “reusable” components) are nothing more than pure functions that render DOM-based solely on the properties provided to them.

const StatelessCmp = (props) => {
  return (
    <div className="my-stateless-component">
      {props.name}: {props.birthday}
    </div>
  );
};

// ---
ReactDOM.render(
  <StatelessCmp name="Art" birthday="10/01/1980" />,
  document.getElementById("main")
);

// More Beginner React Interview Questions to Practice:
// - When should you use a class component over a function component?
// - What are the differences between stateless and stateful components?
// - What are the differences between controlled and uncontrolled components?
// - How to apply validation on props in React?
// - How to listen to state changes?
// - How do you lift state up in React?
// - How to set the focus of an input element on page load?
// - What are forward refs?
// - What is the difference between HTML and React event handling?
// - What are the lifecycle methods in React?

// ---------------------------------------------------------------

// **Intermediate React Interview Questions and Answers**

// 1. How to create elements in a loop in React?
// React lets us use JavaScript’s map function to loop through an array or object – rendering the returned template for each entry.
<div>
  {items.map((item) => (
    <ItemComponent key={item.id} item={item} />
  ))}
</div>;

// 2. How do you update the state object in React?
// React provides utility functions to manage your component’s local state. The setState function is the recommended approach to update the state object as React does the heavy lifting for you.

// HOC is a function that accepts a component and returns a new component. These components are also referred to as pure components as they accept dynamic child component but doesn’t modify or copy any of the child components.

// Use cases of HOCs include:
// - Code reuse and logic abstraction
// - State abstraction and manipulation
// - Props manipulation
// - Render hijacking

// 4. What is the purpose of the useMemo hook?
// Memoization is an optimization technique that speeds up your code by storing the results of expensive function calls and reusing the stored result when the same input occurs again.

// Functional components use the useMemo hook to memoize expensive functions. As a result, these functions are only called when the input changes instead of on every render.

// The following code shows a memoized function using the useMemo hook. useMemo will only recompute the memoized value when one of the dependencies (a or b) has changed.
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// 5. What are Render Props?
// Render prop is a technique to share code between components by passing a function (the function should return an element) as the component’s props. The component with the render prop can then use the element from the passed-in function in its render function to compose a new component.
<DataProvider render={(data) => <h1>Hello {data.target}</h1>} />;

// The concept of a "render prop" in React refers to a technique where a component receives a function as a prop and calls it to render some part of its content. This pattern is particularly useful for sharing code or state logic between components.
const RenderPropComponent = ({ render }) => {
  const data = "Hello, Render Prop!";

  // Call the render function and pass data as an argument
  return <div>{render(data)}</div>;
};

const App = () => {
  // Define a function to be used as a render prop
  const renderFunction = (data) => <p>{data}</p>;

  return (
    <div>
      <h1>Render Prop Example</h1>
      {/* Pass the render function as a prop */}
      <RenderPropComponent render={renderFunction} />
    </div>
  );
};

// 6. Are you familiar with Flux (Redux)?
// Flux is an architectural pattern that was introduced by Facebook to handle the flow of data in a React-based web application. It provides a unidirectional data flow, which helps manage the state of the application and makes it easier to reason about how data changes over time. Flux is not a library or a framework but rather a design philosophy that influenced the development of various state management solutions in the React ecosystem.

// Key concepts of the Flux architecture include:

// 1. **Unidirectional Data Flow:**
//    - Data flows in a single direction, making it easier to understand how changes in the application state occur.

// 2. **Actions:**
//    - Actions represent the intention to change the state. They are plain JavaScript objects with a `type` property that describes the action and additional data.

// 3. **Dispatcher:**
//    - The Dispatcher is a central hub that manages the flow of data and ensures that actions are dispatched to the appropriate stores.

// 4. **Stores:**
//    - Stores are responsible for managing the state of the application and handling the logic related to the actions they receive. Each store represents a specific domain of the application.

// 5. **Views (React Components):**
//    - Views subscribe to changes in the stores and update their presentation when the stores' state changes. In React, these views are typically React components.

// The unidirectional data flow in Flux can be summarized as follows:

// 1. An action is triggered by user interactions or other events.
// 2. The action is dispatched to the Dispatcher.
// 3. The Dispatcher notifies all registered stores about the action.
// 4. Stores update their state based on the action and emit a change event.
// 5. Views (React components) listen to the change events from stores and re-render when the state changes.

// While the original Flux pattern provided a conceptual foundation, several libraries and frameworks have been developed to implement Flux-like architectures. Notably, Redux has gained popularity in the React community as a state management solution inspired by the Flux pattern. Additionally, Flux implementations often include libraries like Redux, MobX, or Fluxible to handle the practical aspects of implementing the Flux architecture.

// More React Intermediate Interview Questions to Practice:
// - What are pure components?
// - What is the difference between setState and replaceState methods?
// - How do you update the state with values that depend on the current state?
// - How do you force a component to re-render without calling setState?
// - How do you set dynamic key names in the state object?
// - How to re-render the view when the viewport size changes?
// - What is the purpose of the useEffect hook?
// - What is the purpose of the useRefs hook?
// - Does React Hook work with static typing?
// - How do you build a custom hook?

// -----------------------------------------------------------------------------

// Advanced React Interview Questions

// 1. What are portals in React?
// Portal is React’s recommended way to render children components into a DOM node that exists outside the DOM hierarchy of the parent component.

// A portal is created by calling ReactDom‘s createPortal function.

ReactDOM.createPortal(content, containerElement);

// Example:
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root") // This is the target DOM element outside the main React app
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {/* The Modal component is rendered using a portal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the main React tree.</p>
      </Modal>

      {/* The target portal-root element */}
      <div id="portal-root"></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// 2. What are error boundaries?
// Error boundaries are React components that catch JavaScript errors anywhere in its child component tree. The Error boundary component can then log those errors and display fallback UI instead of crashing the entire component tree. You can think of error boundaries as a catch block for components.

import React, { useState } from "react";

const ErrorFallback = ({ error }) => (
  <div>
    <h2>Something went wrong</h2>
    <p>{error.message}</p>
  </div>
);

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  const componentDidCatch = (error, errorInfo) => {
    // Log the error to an error reporting service
    console.error("Error caught by error boundary:", error, errorInfo);
    // Set the error state to trigger the rendering of the fallback UI
    setError(error);
  };

  // If there is an error, render the fallback UI
  if (error) {
    return <ErrorFallback error={error} />;
  }

  // If there is no error, render the children
  return children;
};

const MyComponent = () => {
  // Simulating an error for demonstration purposes
  if (Math.random() > 0.5) {
    throw new Error("Random error occurred!");
  }

  return (
    <div>
      <h1>Functional Component</h1>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
};

// 3. What is React Profiler and what is it used for?
// React Profiler is a means to measure the cost of rendering in a React application. The purpose of this component is to help developers identify parts of the application that are slow and may benefit from further optimizations.

// The Profiler can be added anywhere in the component tree to measure its rendering cost. For example, the code below shows how the Profiler component is used to measure the rendering cost of the Navigation component and its descendants:
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Main {...props} />
  </App>
);

//   4. What is StrictMode in React?
// StrictMode is a tool to highlight potential problems in an application. Although StrictMode is used as a component, it doesn’t create a visible UI in the DOM. It only enables additional checks for its descendants.

// You can enable strict mode for any part of your application by wrapping the components inside the React.StrictMode component. The following code shows how strict mode checks are run on the BlogContent component and its descendants. The Header component won’t be checked as it is outside of the React.StrictMode component.
function Application() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <BlogContent />
        </div>
      </React.StrictMode>
    </div>
  );
}

// Benefits of using StrictMode include:
// - Identifying components with unsafe lifecycles
// - Warning about legacy string ref API usage
// - Warning about deprecated findDOMNode usage
// - Detecting unexpected side effects
// - Detecting legacy context API
// - Ensuring reusable state

// 5. What are React Fragments used for?
// React fragments are special features that allow creating a group of children elements or components without creating an actual node in the template. Fragments are denoted by an open empty tag (<>) and a closed empty tag (</>).
function Columns() {
  return (
    <>
      <td>Column 1</td>
      <td>Column 2</td>
    </>
  );
}

// More React Advanced Interview Questions to Practice:
// - How to prevent re-renders in React?
// - How do you modularize code in a React project?
// - What is React Router?
// - How does the React Router differ from conventional routing?
// - How do you access query parameters using React Router?
// - What is Redux?
// - How does data flow in a React-Redux application?
// - When do you use React Context vs Redux?
// - How do you pass data from a child component to its parent?
// - How do you use decorators in React?

// ---------------------------------------------------------------------

// How may type of hooks present in React? elaborate and also explain with example?

// React has several built-in hooks that allow functional components to use state, lifecycle methods, and other React features. Below are some of the key React hooks:

// 1. **`useState`:**
//    - **Purpose:** Enables the use of state in functional components.
//    - **Example:**
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// 2. **`useEffect`:**
//    - **Purpose:** Handles side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulations.
//    - **Example:**
import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));

    // Cleanup function (optional) - runs when the component unmounts
    return () => {
      // Cleanup logic, e.g., cancelling subscriptions
    };
  }, []); // Empty dependency array means the effect runs once on mount

  return <div>{data ? <p>Data: {data}</p> : <p>Loading...</p>}</div>;
};

// 3. **`useContext`:**
//    - **Purpose:** Accesses the value of a context within a functional component.
//    - **Example:**

import React, { createContext, useContext } from "react";

const MyContext2 = createContext();

const ContextConsumer = () => {
  const contextValue = useContext(MyContext2);

  return <p>Context Value: {contextValue}</p>;
};

const App = () => (
  <MyContext.Provider value="Hello from Context!">
    <ContextConsumer />
  </MyContext.Provider>
);

// 4. **`useReducer`:**
//    - **Purpose:** Manages complex state logic using a reducer function.
//    - **Example:**
import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

// 5. **`useCallback` and `useMemo`:**
//    - **`useCallback` Purpose:** Memoizes a callback function, preventing unnecessary re-creation on each render.
//    - **`useMemo` Purpose:** Memoizes a computed value, preventing unnecessary recomputation on each render.
//    - **Example:**

import React, { useState, useCallback, useMemo } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const squaredCount = useMemo(() => {
    console.log("Computing squared count...");
    return count ** 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared Count: {squaredCount}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
