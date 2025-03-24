import React, { useState } from "react";

export default function In({
    name,
    type,
    autoComplete,
    placeholder,
    label,
    rules,
    value,
    onChange // <-- Recibe la función para actualizar `data`
}) {
    const [isValid, setIsValid] = useState(true);
    const [touched, setTouched] = useState(false);
    const passwordPattern = "^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$";

    const changeTouched = () => {
        setTouched(true);
    };

    const handleValidation = (e) => {
        setIsValid(e.target.validity.valid);
    };

    const handleChange = (e) => {
        handleValidation(e);
        onChange(e); // <-- Llama a `onChange` que actualiza `data`
    };

    return (
        <div className="mb-5">
            {touched && !isValid && (
                <h1 className="text-md text-red-500">
                    <i className="fa-solid fa-circle-exclamation pr-2 text-md text-red-500"></i>
                    {rules}
                </h1>
            )}

            <label
                htmlFor={name}
                className={`block mb-2 text-sm font-medium ${touched && !isValid ? "text-red-500" : "text-gray-900 dark:text-white"}`}
            >
                {label}
            </label>

            <input
                type={type}
                id={name}
                name={name}
                className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ${touched && !isValid ? "border-red-600 border-2" : "border-gray-300 dark:border-gray-600"}`}
                placeholder={placeholder}
                onBlur={changeTouched}
                onChange={handleChange}
                value={value} // <-- Asegura que el valor venga de `data`
                required
                autoComplete={autoComplete}
                pattern={type === 'password' ? passwordPattern : undefined}
            />

        </div>
    );
}
