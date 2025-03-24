import React, { useState } from "react";
import { useAuth } from "../AuthProvider";

export default function Login() {
    const { user } = useAuth();
    const [touchedPassword, setTouchedPassword] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);

    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);


    const handleValidationEmail=(e)=>{
        setTouchedEmail(true);
        setIsInvalidEmail(e.target.validity.valid === false)
    }
    const handleValidation = (e) => {
        setTouchedPassword(true);
        setIsInvalidPassword(e.target.validity.valid === false);
    };

    return (
        <div className="h-[90vh] w-screen bg-black/80 md:bg-[#41454f] overflow-x-hidden flex items-center justify-center">
            <form className="w-sm mx-auto bg-transparent md:bg-black/50 p-12 rounded">
                <div className="mb-5">
                    <label htmlFor="email" className={`block mb-2 text-sm font-medium  ${touchedEmail && isInvalidEmail ? "text-red-500": "text-gray-900 dark:text-white"}`}>
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  ${touchedEmail && isInvalidEmail ? "invalid:border-red-600 invalid:border-2": ""} dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="your email"
                        onBlur={handleValidationEmail}
                        required
                        autoComplete="email"
                    />
                </div>
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
                        placeholder="password"
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            ${touchedPassword && isInvalidPassword ? "invalid:border-red-600 invalid:border-2" : ""}`}
                        onBlur={handleValidation}
                        required
                        autoComplete="current-password"
                    />
                </div>
             
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
