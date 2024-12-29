import { useState } from "react";

const useFormWithValidation = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errores, setErrores] = useState({});

  //funcion para setear los valores del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({ ...values, [name]: value }));
    // console.log(name, "=>", value);
  };

  const validarData = (e) => {
    e.preventDefault();
    const { nombre, email } = values;

    const errores = {};

    if (!nombre.trim()) {
      errores.nombre = "El nombre es requerido";
    }

    if (!email.trim()) {
      errores.email = "El email es requerido";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex básico para emails
      if (!emailRegex.test(email)) {
        errores.email = "El email no es válido";
      }
    }

    if (Object.keys(errores).length > 0) {
      console.warn("Errores encontrados:", errores);
      setErrores(errores);
    } else {
      console.log("Datos enviados correctamente:", values);
      setErrores({});
    }
  };

  return { values, handleChange, validarData, errores };
};

export default useFormWithValidation;
