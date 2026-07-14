### Introduction to React

**React** is a popular JavaScript library developed by **Jordan Walke** in **2013** at **Meta**.

It is primarily used for :

* Building **user interfaces ( UIs )**.
* Developing **Single Page Applications ( SPAs )** with a seamless and responsive user experience.

React allows developers to :

* Create dynamic and interactive web applications.
* Efficiently update and render the UI in response to data changes.

### Key Features of React

#### 1. Component-Based Architecture

React divides the UI into **reusable components**, making it easier to manage and reuse code.

* Each component has its own logic and controls its own rendering.
* Promotes **code reusability**.
* Makes large applications easier to maintain.

#### 2. Virtual DOM

React uses a **Virtual DOM**, which is a lightweight copy of the actual DOM.

* When changes occur, React updates the Virtual DOM first.
* It compares the updated Virtual DOM with the previous version.
* Only the necessary changes are applied to the actual DOM.

This process improves performance, especially in applications with frequent updates.

#### 3. JSX ( JavaScript XML )

React uses **JSX**, a syntax that allows HTML-like code to be written directly within JavaScript.

* Simplifies the process of writing components.
* Makes code more readable because it resembles HTML.
* Allows JavaScript expressions and functions to be embedded within the UI.

#### 4. Unidirectional Data Flow

In React, data flows in a **single direction** from parent components to child components.

* Simplifies debugging and state management.
* Makes the application structure more predictable and easier to understand.

#### 5. Declarative UI

React allows developers to describe **how the UI should look** for a given state.

* React automatically updates the UI when the data changes.
* Reduces the complexity of manual UI updates.
* Makes the code more predictable and easier to maintain.

#### 6. State and Lifecycle Management

React components have **state**, which stores component-specific data.

React also provides **lifecycle methods** ( for class components ) that allow developers to perform actions during different stages of a component, such as :

* Mounting
* Updating
* Unmounting

#### 7. React Hooks

React introduced **Hooks**, such as `useState` and `useEffect`, to allow functional components to manage state and side effects without using class components.

* Simplifies state management.
* Improves code reuse and readability.

#### 8. Ecosystem and Community Support

React has a large **ecosystem** of libraries, tools, and community support.

* Integrates well with libraries such as **Redux** and **React Router**.
* Extends React's functionality for building complex applications.

### Applications of React

#### 1. Single Page Application ( SPA ) Development

React is ideal for building **Single Page Applications ( SPAs )**, where content updates dynamically without reloading the page, providing a smooth and responsive user experience.

**Examples :**

* Admin dashboards
* Social media platforms
* Productivity tools

#### 2. Progressive Web Apps ( PWAs )

React is commonly used to build **Progressive Web Apps ( PWAs )** that provide a fast, responsive experience similar to native mobile applications while running in a web browser.

#### 3. E-commerce Websites

React is well-suited for **e-commerce applications** that require high interactivity.

**Examples :**

* Product filtering
* Shopping carts
* Real-time updates

It can efficiently handle complex user interfaces while maintaining smooth performance.

#### 4. Social Media Applications

Platforms like **Facebook** and **Instagram** use React to handle :

* Real-time updates
* Notifications
* Dynamic content rendering

This provides users with a responsive and interactive experience.

#### 5. Content Management Systems ( CMS )

React can be used to build **custom Content Management Systems ( CMS )** with user-friendly interfaces.

It enables users to :

* Manage content efficiently.
* Edit and publish content without delays.

### Components

A **Component** is a reusable piece of UI that has its own logic and rendering system.

* Each component manages its own behavior and rendering.
* When a component's **local state** changes, it re-renders to reflect the updated data.

### ES Modules

**ES Modules** are JavaScript files that export code such as functions, classes, variables, objects, or other values, which can be imported and used in other files.

* Promote a modular code structure.
* Help break large applications into **smaller, reusable modules**.
* Improve code organization and maintainability.

### `useState()`

* `useState()` is a **React Hook** used to add **state** to functional components.
* It returns an **array** containing the current state value and a state updater function.
* Updating the state causes the component to **re-render** with the new value.
* The initial state is passed as an argument to `useState()`.

#### Syntax

```
const [state, setState] = useState(initialValue);
```

**Common use cases :**

* Managing form inputs.
* Toggling UI elements.
* Updating counters.
* Storing user data or component-specific state.

### `useEffect()`

* `useEffect()` is a **React Hook** used to perform **side effects** in functional components.
* Common use cases include :
  * Fetching data from an API.
  * Updating the DOM.
  * Setting up timers.
  * Subscribing to external services or events.
* The setup function runs **after the component renders**.
* The **return value** of `useEffect()` is `undefined`.
* The function returned from the setup function is called the **cleanup function**, which runs :
  * Before the effect runs again ( if dependencies change ).
  * When the component unmounts.
* In **React Strict Mode** ( development only ), `useEffect()` runs **twice on the initial render** to help detect unexpected side effects. This behavior does **not** occur in production.

### `useMemo()`

* `useMemo()` is a **React Hook** used to **memoize** the result of an expensive calculation.
* It recalculates the value **only when one of its dependencies changes**.
* Helps improve performance by **avoiding unnecessary recalculations**.
* Returns the **memoized value**.
* If the dependencies do not change, React returns the **cached value** instead of running the calculation again.

**Common use cases :**
* Expensive calculations.
* Filtering or sorting large arrays.
* Preventing unnecessary recomputations during re-renders.

> * `useEffect()` → **Dependency array is optional.**
> * `useMemo()` → **Dependency array is mandatory.**

### `useCallback()`

* `useCallback()` is a **React Hook** used to **memoize a function**.
* It returns the **same function reference** unless one of its dependencies changes.
* Helps prevent **unnecessary re-renders** of child components.
* The **dependency array is mandatory**.
* If the dependencies do not change, React returns the **cached function** instead of creating a new one.

**Common use cases :**

* Passing callbacks to memoized child components.
* Preventing unnecessary function recreation.
* Optimizing performance in large applications.

### `useRef()`

* `useRef()` is a **React Hook** used to **store a value** or **access a DOM element**.
* It returns a **ref object** with a `current` property.
* The value stored in `current` **persists between re-renders**.
* Changing `current` **does not** re-render the component.

#### Syntax

```
const ref = useRef(initialValue);
```

**Common use cases :**

* Accessing DOM elements.
* Focusing an input field.
* Storing values without causing a re-render.
* Keeping the previous value of a variable.

### Props Drilling

**Props Drilling** is the process of passing props from a parent component to a deeply nested child component through intermediate components.

#### Why is Props Drilling Problematic?

* Makes the code harder to read and maintain.
* Intermediate components receive props they don't use.
* Adding or updating props requires changes in multiple components.
* Becomes difficult to manage in large applications.

#### How to Avoid Props Drilling

* Use the **Context API** to share data without passing props through every component.
* Use state management libraries like **Redux**, **Zustand**, or **Recoil** for managing global state.
* Keep state as close as possible to the components that use it to reduce unnecessary prop passing.

### Context API

The **Context API** is a React feature used to **share data between components** without passing props through every level of the component tree.

#### Benefits

* Avoids **props drilling**.
* Makes data sharing easier.
* Keeps the code cleaner and easier to maintain.
* Allows multiple components to access the same data.

#### Common Use Cases

* User authentication.
* Theme ( Light / Dark mode ).
* Language preferences.
* User profile information.
* Global application settings.
