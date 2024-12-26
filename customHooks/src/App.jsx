import useCounter from "./hooks/customCounter";
import useTimer from "./hooks/customTimer";
const App = () => {
    const { count, increment, decrement, updateCount } = useCounter({ initialValue: 0 });
    const { time, start, pause } = useTimer({ initialTime: 1 })



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

            <section>
                <h2>Segundo EJERCICIO</h2>
                <small>Crear un temporizador personalizado</small>
                <span>
                    {time}
                </span>
                <br />
                <button onClick={start}>Comenzar</button>
                <button onClick={pause}>Pausar</button>
            </section>

        </div>
    )
}

export default App
