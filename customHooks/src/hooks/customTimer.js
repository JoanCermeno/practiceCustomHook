import { useState, useEffect } from "react";

const useTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  // funcion para comenzar el temporizador
  const start = () => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  // funcion para detener el timer
  const pause = () => {
    clearInterval(interval);
  };

  return { time, start, pause };
};

export default useTimer;
