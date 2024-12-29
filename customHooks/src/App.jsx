import useCounter from "./hooks/customCounter";
import useTimer from "./hooks/customTimer";
import CustomForm from "./components/customForm";

const App = () => {
    const { count, increment, decrement, updateCount } = useCounter({ initialValue: 0 });
    const { time, isPaused, start, pauseAndResume, reset } = useTimer({ initialTime: 0 })



    return (
        <div>
            <h1>Practicas de hooks personalizados</h1>

            <section>
                Problema 1: Crear un contador personalizado
                <section className="counter-container">

                    <input type="number" value={count} onChange={(e) => updateCount(Number(e.target.value))} />
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <h2>EJERCICIO COMPELTADO! 🎉</h2>

                </section>
                <hr />
            </section>

            <section className="counter-container">
                <h2>Segundo EJERCICIO</h2>
                <small>Crear un temporizador personalizado</small>
                <span>
                    {time}
                </span>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <button onClick={start}>Comenzar</button>
                    <button onClick={pauseAndResume}>
                        {isPaused ? "Reanudar" : "Pausar"}
                    </button>
                    <button onClick={reset}>Reiniciar</button>
                </div>

            </section>

            <hr />

            <section>
                <h2>Ejercicio 3: Vaidar formularios</h2>
                <small>Crear un formulario personalizado</small>
                <CustomForm />
            </section>

        </div>
    )
}

export default App
