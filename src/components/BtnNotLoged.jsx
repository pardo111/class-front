import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

export default function BtnNotLoged() {
    return (<>
        <ul className="flex flex-row gap-6" >
        <li className="hover:scale-110 transition duration-300  active:scale-100">
        <NavLink
                    to="/information"
                    className="text-white text-lg active:bg-[#00796B] hover:bg-[#486086] p-2 hover:rounded-lg">
                    <i className="fa-solid fa-circle-info text-xl pr-2  "> </i>
                    Information
                </NavLink>
            </li>
            <li className="hover:scale-110 transition duration-300  active:scale-100">
                <NavLink
                    to="/AboutUs"
                    className="text-white text-lg active:bg-[#00796b] hover:bg-[#486086] p-2 hover:rounded-lg">
                    <i class="fa-solid fa-address-card text-xl pr-2 "></i>
                    About Us
                </NavLink>
            </li>
            <li className="hover:scale-110 transition duration-300  active:scale-100">
                <NavLink
                    to="/login"
                    className="text-white text-lg active:bg-[#00796b]  hover:bg-[#486086] p-2 hover:rounded-lg"

                >
                    <i class="fa-solid fa-right-to-bracket text-xl pr-2"></i>
                    Iniciar Sesión
                </NavLink>
            </li>
            <li className="hover:scale-110 transition duration-300  active:scale-100">
                <NavLink
                    to="/signup"
                    className="text-white text-lg active:bg-[#00796b]  hover:bg-[#486086] p-2 hover:rounded-lg">
<i class="fa-solid fa-user-plus text-xl pr-2"></i>
                    Registrarse
                </NavLink>
            </li>



        </ul>
    </>)
}