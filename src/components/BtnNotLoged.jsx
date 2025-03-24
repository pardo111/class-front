import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

export default function BtnNotLoged() {
    const location = useLocation();
    console.log(location.pathname)
    return (<>
        <ul className="flex flex-row gap-6" >
        <li className="hover:scale-105 transition duration-300  active:scale-100">
        <NavLink
                    to="/information"
                    className="text-white text-lg active:bg-[#00796B] hover:bg-[#486086] p-2 hover:rounded-lg">
                    <i className="fa-solid fa-circle-info text-xl pr-2  "> </i>
                    <p className=" hidden md:inline">                    Information
                    </p>
                </NavLink>
            </li>
            <li className="hover:scale-105 transition duration-300  active:scale-100">
                <NavLink
                    to="/AboutUs"
                    className="text-white text-lg active:bg-[#00796b] hover:bg-[#486086] p-2 hover:rounded-lg">
                    <i className="fa-solid fa-address-card text-xl pr-2 "></i>
                    <p className=" hidden md:inline">                    About Us
                    </p>
                </NavLink>
            </li>
            <li className="hover:scale-105 transition duration-300  active:scale-100">
                { location.pathname != '/login' && <NavLink
                    to="/login"
                    className="text-white text-lg active:bg-[#00796b]  hover:bg-[#486086] p-2 hover:rounded-lg"

                >
                    <i className="fa-solid fa-right-to-bracket text-xl pr-2"></i>
                    <p className=" hidden md:inline">                                      Iniciar Sesión

                    </p>
                </NavLink>}
            </li>
            <li className="hover:scale-105 transition duration-300  active:scale-100">
                {
                    location.pathname != "/signup-1" && 
                    <NavLink
                    to="/signup-1"
                    className="text-white text-lg active:bg-[#00796b]  hover:bg-[#486086] p-2 hover:rounded-lg">
<i className="fa-solid fa-user-plus text-xl pr-2"></i>
<p className=" hidden md:inline">                                  Registrarse

</p>
                    
                </NavLink>
                }
            </li>



        </ul>
    </>)
}