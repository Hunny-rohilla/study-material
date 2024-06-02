// ### Redux Overview
// Redux is a state management library commonly used with JavaScript frameworks like React. It helps manage the state of your application in a predictable way, making it easier to understand and debug.

// ### Key Concepts
// **Store**: 
// The single source of truth for the application's state. The store holds the entire state tree of the application.
// **Actions**: 
// Plain JavaScript objects that describe a change in the state. Actions must have a `type` property that indicates the type of action being performed.
// **Reducers**: 
// Pure functions that take the current state and an action as arguments and return a new state. Reducers specify how the application's state changes in response to actions.
// **Dispatch**: 
// A method that sends an action to the Redux store. This is the only way to trigger a state change.
// **Selectors**: 
// Functions that retrieve specific pieces of data from the state.

// ### Redux Workflow
//- Action: An action is dispatched.
//- Reducer: The action is passed to the reducer.
//- Store: The reducer updates the store with the new state.
//- Components: Components subscribe to the store and re-render when the state changes.

// ### Example Code
// Here is an example of how Redux works with a simple counter application.
// * 1. Install Redux and React-Redux
// First, you need to install Redux and React-Redux (a binding library for integrating Redux with React).
```sh
npm install redux react-redux
```

// * 2. Create Actions
// Create actions to define the changes in state.
```javascript
// actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
```

// * 3. Create Reducer
// Create a reducer to specify how the state changes in response to actions.
```javascript
// reducer.js
import { INCREMENT, DECREMENT } from './actions';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
```

//* 4. Create Store
// Create a store to hold the state of your application.
```javascript
// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;
```

// * 5. Provide Store to React Application
// Wrap your main application component with the `Provider` component to make the Redux store available to all components.
```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

// * 6. Connect React Components to Redux
// Connect your React components to the Redux store using the `connect` function from React-Redux.

```javascript
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
```

// * 7. Use the Counter Component
// Use the `Counter` component in your main application.
```javascript
// App.js
import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Redux Counter</h1>
      <Counter />
    </div>
  );
};

export default App;
```

// ### Summary
// - **Store**: Holds the state.
// - **Actions**: Describe state changes.
// - **Reducers**: Handle actions and update state.
// - **Dispatch**: Sends actions to the store.
// - **Selectors**: Retrieve state data.

// ===============================================================================================
// # important questions related to Redux along with their answers 
// ===============================================================================================

// ### 1. What is Redux?
// Redux is a state management library for JavaScript applications. It helps manage the state of an application in a predictable way, making it easier to debug and test. Redux is often used with libraries like React to build complex user interfaces.

// ### 2. Explain the core principles of Redux.
// Redux is based on three core principles:
// - 1. Single Source of Truth: 
// The state of the entire application is stored in a single store.
// - 2. State is Read-Only: 
// The only way to change the state is to emit an action, an object describing what happened.
// - 3. Changes are Made with Pure Functions: 
// To specify how the state tree is transformed by actions, you write pure reducers.

// ### 3. What are actions in Redux?
// Actions are plain JavaScript objects that represent an intention to change the state. Actions must have a `type` property that indicates the type of action being performed. They can also contain additional data.
```javascript
const incrementAction = {
  type: 'INCREMENT',
  payload: 1
};
```

// ### 4. What are reducers in Redux?
// Reducers are pure functions that take the current state and an action as arguments and return a new state. Reducers specify how the application's state changes in response to actions.
```javascript
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
```

// ### 5. What is the Redux store?
// The store is an object that holds the application's state. It provides a few methods:
// - `getState()`: Returns the current state.
// - `dispatch(action)`: Sends an action to the store.
// - `subscribe(listener)`: Registers a callback that the store will call whenever an action has been dispatched.
```javascript
import { createStore } from 'redux';
const store = createStore(counterReducer);
```

// ### 6. What is the purpose of middleware in Redux?
// Middleware in Redux provides a way to extend Redux with custom functionality. It allows you to intercept actions before they reach the reducer and can be used for logging, crash reporting, performing asynchronous operations, etc.
```javascript
const loggerMiddleware = store => next => action => {
  console.log('Dispatching:', action);
  let result = next(action);
  console.log('Next state:', store.getState());
  return result;
};
```

// ### 7. Explain the `connect` function from `react-redux`.
// The `connect` function connects a React component to the Redux store. It provides the component with pieces of the state and action creators as props.
```javascript
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

const Counter = ({ count, increment, decrement }) => (
  <div>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

// ### 8. What is the difference between `mapStateToProps` and `mapDispatchToProps`?
// **`mapStateToProps`**: 
// This function is used to select the part of the data from the store that the connected component needs. It receives the entire store state and should return an object of the data the component needs.

// **`mapDispatchToProps`**: 
// This function receives the `dispatch` function and should return an object where the keys are prop names and the values are callback functions that dispatch actions.

// ### 9. How do you handle asynchronous actions in Redux?
// Asynchronous actions in Redux are typically handled using middleware like `redux-thunk` or `redux-saga`.
// **Redux Thunk**: 
// Allows you to write action creators that return a function instead of an action. This function can then perform asynchronous operations and dispatch actions.
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const fetchData = () => {
  return async dispatch => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error });
    }
  };
};

const store = createStore(counterReducer, applyMiddleware(thunk));
```
// **Redux Saga**: 
// Uses generator functions to handle side effects in Redux applications.
```javascript
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchData() {
  try {
    const data = yield call(fetch, 'https://api.example.com/data');
    yield put({ type: 'FETCH_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', error });
  }
}

function* mySaga() {
  yield takeEvery('FETCH_REQUESTED', fetchData);
}
```

// ### 10. What is the purpose of the `Provider` component in `react-redux`?
// The `Provider` component makes the Redux store available to any nested components that need to access the Redux store. It should be used to wrap the root component of the application.
```javascript
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <MyComponent />
  </Provider>
);
```