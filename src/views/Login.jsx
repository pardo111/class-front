import React, { useState } from "react";
import { useAuth } from "../AuthProvider";
import In from "../components/In";

export default function Login() {
    const { user } = useAuth();
    const [touchedPassword, setTouchedPassword] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);

    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);


    const handleValidationEmail = (e) => {
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


                <In
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your email"
                    label="Email"
                    rules={"Not empty"}
                    value={data.email}
                    onChange={handleChange}
                />
                <In
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    label="Password"
                    rules={"Your password is Incorrect"}
                    value={data.password}
                    onChange={handleChange}
                />
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
