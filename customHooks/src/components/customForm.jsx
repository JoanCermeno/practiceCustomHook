import useForm from "../hooks/customFormValidator";

const CustomForm = () => {
    const { values, handleChange, validarData, errores } = useForm({ nombre: '', email: '' });


    return (
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" value={values.nombre} onChange={(e) => handleChange(e)} />
            <small style={{ color: "red" }}>
                {errores.nombre}
            </small>
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={values.email} onChange={(e) => handleChange(e)} />
            <small style={{ color: "red" }}>
                {errores.email}
            </small>
            <button type="submit" onClick={validarData}>Enviar</button>
        </form>
    )
}

export default CustomForm