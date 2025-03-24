import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

export default function BtnLoged() {



 
    return (<>
        <ul className="flex flex-row gap-6" >
            <li className="hover:scale-105 transition duration-300  active:scale-100">

                <NavLink
                    to="/profile"
                    className="text-white text-lg active:bg-[#00796B] hover:bg-[#486086] p-2 hover:rounded-lg">
                    <i className="fa-solid fa-user text-xl pr-2"></i><p className="hidden md:inline">Perfil</p>
                </NavLink>
            </li>
            <li className="hover:scale-105 transition duration-300  active:scale-100">

                <NavLink
                    to="/home"
                    className="text-white text-lg active:bg-[#00796B] hover:bg-[#486086] p-2 hover:rounded-lg">
                    <i className="fa-solid fa-house text-xl pr-2"></i>
                    <p className="hidden  md:inline">Home</p>
                </NavLink>
            </li>
            <li className="hover:scale-105 transition duration-300  active:scale-100">

                <NavLink
                    to="/mySubjects"
                    className="text-white text-lg active:bg-[#00796B] hover:bg-[#486086] p-2 hover:rounded-lg">
                    <i className="fa-solid fa-book-open-reader text-xl pr-2"></i>
                    <p className="hidden  md:inline">My Class</p>
                </NavLink>
            </li>
            <li className="hover:scale-105 transition duration-300  active:scale-100">

                <NavLink
                    to="/Settings"
                    className="text-white text-lg active:bg-[#00796B] hover:bg-[#486086] p-2 hover:rounded-lg">

                    <i className="fa-solid fa-gear  text-xl pr-2"></i>
                    <p className="hidden  md:inline"> Settings</p>
                </NavLink>
            </li>
            <li >

 
            </li>
        </ul>
    </>)
}