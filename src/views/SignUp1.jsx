import React, { useState } from "react";
import api from "../api";
import In from "../components/In";
import Swal from 'sweetalert2';

export default function SignUp() {
    const [data, setData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation:"",   
        born_date: "",
        rol: "student",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const sendData = async (e) => {
        e.preventDefault();

        if (data['password'] !== data['password_confirmation']) {
            console.log("error");
            Swal.fire({
               title: 'Error!',
               text: 'the passwords dont match',
               icon: 'error',
               confirmButtonText: 'Cool'
             });
             return;

        }else if (condition) {
            
        }else
        {
            console.log("Enviando datos:", data);
            try {
                
                const response = await api.post("/register", data);
                console.log("Respuesta del servidor:", response);
            } catch (error) {
                console.error("Error enviando formulario:", error);
            }

        }
  
    };

    return (
        <div className="pb-12 min-h-[90vh] h-full w-screen bg-black/90 md:bg-[#41454f] overflow-x-hidden flex items-center justify-center">
            <form className="w-lg x-auto bg-transparent md:bg-black/50 px-12 py-0 md:py-12 rounded mt-16 lg:mt-2 flex flex-col justify-center" onSubmit={sendData}>

                {/* Input Email */}
                <In
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your email"
                    label="Email"
                    rules={"Not empty"}
                    value={data.email}  // <-- Pasamos el valor
                    onChange={handleChange} // <-- Pasamos `handleChange`
                />

                {/* Input Name and Lastname */}
                <div className="mb-5 flex flex-col md:flex-row justify-between m-0 p-0">
                    <div className="w-full md:w-auto">
                        <In
                            name="name"
                            type="text"
                            autoComplete="none"
                            placeholder="your name"
                            label="Name"
                            rules={"Not empty"}
                            value={data.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <In
                            name="lastname"
                            type="text"
                            autoComplete="none"
                            placeholder="your lastname"
                            label="Lastname"
                            rules={"Not empty"}
                            value={data.lastname}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Input Password */}
                <In
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Password"
                    label="Password"
                    rules={"Your password should have letters and numbers and be at least 8 characters long"}
                    value={data.password}
                    onChange={handleChange}
                />
                <In
                    name="password_confirmation"
                    type="password"
                    autoComplete="new-password"
                    placeholder="password confirmation"
                    label="Password Confirmation"
                    rules={"Your password should have letters and numbers and be at least 8 characters long"}
                    value={data.password_confirmation}
                    onChange={handleChange}
                />
                {/* Input de Fecha de Nacimiento */}
                <div className="mb-5">
                    <In
                        name="born_date"
                        type="date"
                        autoComplete=""
                        placeholder=""
                        label="Born Date"
                        rules={"Not empty"}
                        value={data.born_date}
                        onChange={handleChange}
                    />
                </div>

                {/* Rol */}
                <div className="mb-5">
                    <label
                        htmlFor="rol"
                        className="block mb-2 text-sm font-medium text-black dark:text-white"
                    >
                        Rol
                    </label>
                    <select
                        name="rol"
                        id="rol"
                        className="w-full bg-white px-3 py-2 dark:bg-gray-700 border rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={data.rol}
                        onChange={handleChange}
                    >
                        <option value="student">Student</option>
                        <option value="profesor">Professor</option>
                        <option value="both">Both</option>
                    </select>
                </div>

                {/* Botón de envío */}
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-[40%] sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
