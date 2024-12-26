import { useState, useEffect, useRef } from "react";

const useTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  let interval = useRef();
  // funcion para comenzar el temporizador
  const start = () => {
    const sumarSegundos = () => {
      setTime((time) => time + 1);
    };
    interval.current = setInterval(sumarSegundos, 1000);
  };

  // funcion para detener el timer
  const pause = () => {
    clearInterval(interval.current);
  };
  // funcion para reiniciar el timer
  const reset = () => {
    clearInterval(interval.current);
    setTime(0);
  };

  return { time, start, pause, reset };
};

export default useTimer;
