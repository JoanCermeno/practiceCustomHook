import { useState, useEffect, useRef } from "react";

const useTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false);
  let interval = useRef(null);

  const sumarSegundos = () => {
    setTime((time) => time + 1);
  };

  // funcion para comenzar el temporizador
  const start = () => {
    if (interval.current === null) {
      console.log("iniciando el timer");
      interval.current = setInterval(sumarSegundos, 1000);
    }
  };

  // funcion para detener el timer
  const pause = () => {
    clearInterval(interval.current);
    console.log("pausando el timer");
    setIsPaused(true);
  };
  // funcion para reanudar el timer
  const resume = () => {
    clearInterval(interval.current);
    interval.current = setInterval(sumarSegundos, 1000);
    console.log("reanudando el timer");
  };
  // funcion para reiniciar el timer
  const reset = () => {
    setTime(0);
  };

  const pauseAndResume = () => {
    if (isPaused) {
      setIsPaused(false);
      resume();
    } else {
      setIsPaused(true);
      pause();
    }
  };

  useEffect(() => {
    return () => clearInterval(interval.current); // Limpieza al desmontar
  }, []);

  return { time, isPaused, start, pauseAndResume, reset };
};

export default useTimer;
