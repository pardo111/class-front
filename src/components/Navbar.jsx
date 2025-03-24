import React, { useState, useRef } from "react";
import { useAuth } from "../AuthProvider";
import '@fortawesome/fontawesome-free/css/all.css';
import BtnNotLoged from "./BtnNotLoged";
import BtnLoged from "./BtnLoged";

export default function Navbar() {


    const { user } = useAuth();
    return (
        <nav className="bg-gray-800 shadow-sm sticky top-0 w-screen ">
            <div className="max-w-screen-xl flex items-center justify-center lg:justify-between p-4 mx-auto">
                {/* Logo */}


                {user && <div className="hidden lg:block w-1/5">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full p-2 text-sm  border rounded-lg bg-white focus:ring-2 focus:ring-[#45ff45]"
                    />
                </div>}

                {/* Campo de búsqueda (solo en pantallas medianas en adelante) */}
                {
                    user ?
                        <BtnLoged></BtnLoged>
                        :
                        <BtnNotLoged></BtnNotLoged>
                }
               {/* <div
                    className="text-white text-lg active:bg-[#00796B] hover:bg-[#486086] p-2   inline  hover:rounded-lg">
                    <i className=" fa-solid fa-globe text-xl pr-2"></i>
                    <select
                        id="language"
                        name="lenguaje"
                        className="  border-none bg-transparent text-white active:border-none hover:border-none  py-1 px-2  w-30 shadow-lg"
                    >
                        <option value="esp" className="text-black">Español</option>
                        <option value="eng" className="text-black">Inglés</option>
                    </select>
                </div> */}
            </div>
        </nav>

    );
}