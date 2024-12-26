# Practicing custom hooks

This repository is a practice project for learning custom hooks in React.

## How to run the project

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the development server
4. Open your browser and navigate to `http://localhost:3000`

## What is a custom hook?

A custom hook is a function that you can use to add custom functionality to your components. It allows you to reuse code and share it between components.

## What are the benefits of using custom hooks?

Custom hooks can help you:

- Reuse code across multiple components
- Keep your components clean and focused
- Improve code organization and readability
- Make your components more reusable and easier to maintain

## How to create a custom hook?

To create a custom hook, you need to define a function that returns a value or a function. The function can take in parameters and return a value or a function.

Here's an example of a custom hook that returns a value:

```javascript
const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return count;
};
```

In this example, the `useCounter` hook returns the `count` value. The `increment` function is used to increment the `count` value.

You can use the custom hook in your components like this:

```javascript
import useCounter from "./useCounter";

const MyComponent = () => {
  const count = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

In this example, the `useCounter` hook is used to get the `count` value from the custom hook. The `increment` function is used to increment the `count` value.

## all this is my first time practicing custom hooks

thanks for checking out my custom hooks practice!
