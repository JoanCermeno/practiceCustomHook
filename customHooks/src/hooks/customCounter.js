import { useState, useEffect } from "react";

const useCounter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  // Función para cambiar el contador directamente
  const updateCount = (newCount) => {
    if (typeof newCount === "number") {
      setCount(newCount);
    } else {
      console.warn("El nuevo valor debe ser un número");
    }
  };
  return { count, increment, decrement, updateCount };
};

export default useCounter;
