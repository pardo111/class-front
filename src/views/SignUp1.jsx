import React, { useState } from "react";
import api from "../api";

export default function SignUp() {
    // Estados para validar inputs
    const [touchedPassword, setTouchedPassword] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);

    // Estado para los datos del formulario
    const [data, setData] = useState({
        name: "juan",
        lastname: "pacheco",
        email: "",
        password: "",
        born_date: "2000-12-12",
        rol: "student",
    });

    // Estado para el mensaje de respuesta
    const [mensaje, setMensaje] = useState("");

    // Validación de email
    const handleValidationEmail = (e) => {
        setTouchedEmail(true);
        setIsInvalidEmail(!e.target.validity.valid);
    };

    // Validación de password
    const handleValidation = (e) => {
        setTouchedPassword(true);
        setIsInvalidPassword(!e.target.validity.valid);
    };

    // Manejo de cambios en los inputs
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value, // Actualiza el estado con el valor del input
        });
    };

    // Enviar datos al backend
    const sendData = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/register", data);
            setMensaje(response.data.message); // Guarda el mensaje del backend
            console.log(response.data);
        } catch (error) {
            console.error("Error enviando formulario:", error);
            setMensaje("Hubo un error al enviar el formulario.");
        }
    };

    return (
        <div className="h-[90vh] w-screen bg-black/80 md:bg-[#41454f] overflow-x-hidden flex items-center justify-center">
            <form className="w-sm mx-auto bg-transparent md:bg-black/50 p-12 rounded" onSubmit={sendData}>
                {/* Mensaje de respuesta */}
                {mensaje && <p className="text-white">{mensaje}</p>}

                {/* Input Email */}
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className={`block mb-2 text-sm font-medium ${touchedEmail && isInvalidEmail ? "text-red-500" : "text-gray-900 dark:text-white"}`}
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ${
                            touchedEmail && isInvalidEmail ? "border-red-600 border-2" : ""
                        } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="your email"
                        value={data.email} // Se enlaza al estado
                        onChange={handleChange}
                        onBlur={handleValidationEmail}
                        required
                        autoComplete="email"
                    />
                </div>

                {/* Input Password */}
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className={`block mb-2 text-sm font-medium ${touchedPassword && isInvalidPassword ? "text-red-500 dark:text-red-900" : "text-gray-900 dark:text-white"}`}
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                            touchedPassword && isInvalidPassword ? "border-red-600 border-2" : ""
                        } dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        value={data.password} // Se enlaza al estado
                        onChange={handleChange}
                        onBlur={handleValidation}
                        autoComplete="new-password"
                        required
                    />
                </div>

                {/* Botón de envío */}
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
