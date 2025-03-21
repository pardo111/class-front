import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useAuth();

    function toggleSelect() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="bg-[#003062] shadow-sm fixed top w-screen">
            <div className="max-w-screen-xl flex items-center justify-center md:justify-between p-4 mx-auto">
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
                    !user ?
                        <ul className="flex flex-row gap-8 justify-end" >
                            <li>
                                <NavLink
                                    to="/information"
                                    className="py-2 px-3 text-white  mx-3 text-center font-bold  hover:bg-[#486086] hover:rounded-lg p-2 "
                                >
                                    Information
                                </NavLink>
                            </li>
                            <li>
                                 <NavLink
                                    to="/AboutUs"
                                    className="py-2 px-3 text-white  font-bold  hover:bg-[#486086] hover:rounded-lg p-2"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <NavLink
                                to="/login"
                                className="text-white bg-[#FF7300] hover:bg-[#8D3D99] hover:scale-110 transition duration-150 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                            >
                                Iniciar Sesión
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="text-white bg-[#21c80d] hover:bg-[#492db8] hover:scale-110 transition duration-150 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                            >
                                Registrarse
                            </NavLink>

                        </ul> 
                        
                        :

                        <ul className="flex flex-row gap-6" >
                            <li>
                                <NavLink
                                    to="/profile"
                                    className="text-white text-lg  hover:bg-[#486086] p-2 hover:rounded-lg">
                                    <i class="fa-solid fa-user text-xl pr-2"></i><p className="hidden md:inline">Perfil</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/home"
                                    className="text-white text-lg  hover:bg-[#486086] p-2 hover:rounded-lg">
                                    <i class="fa-solid fa-house text-xl pr-2"></i>
                                    <p className="hidden  md:inline">Home</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/mySubjects"
                                    className="text-white text-lg  hover:bg-[#486086]  p-2 hover:rounded-lg">
                                    <i class="fa-solid fa-book-open-reader text-xl pr-2"></i>
                                    <p className="hidden  md:inline">my Subjects</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Settings"
                                    className="text-white text-lg  hover:bg-[#486086]  p-2 hover:rounded-lg"
                                >
                                    <i class="fa-solid fa-gear  text-xl pr-2"></i>
                                    <p className="hidden  md:inline"> Settings</p>
                                </NavLink>                            </li>
                            <li className=" ">

                                <label
                                    htmlFor="lenguage"
                                    onClick={toggleSelect}
                                    className="text-white text-lg  hover:bg-[#486086]   p-2 hover:rounded-lg">
                                    <i className="fa-solid fa-globe text-xl pr-2"></i>
                            

                             

                             
                                    <select
                                        id="lenguaje"
                                        name="lenguaje"
                                        className="   bg-transparent text-white border-none  py-1 px-2  w-30 shadow-lg"
                                        onChange={() => setMenuOpen(false)} // Cierra el menú al seleccionar
                                    >    
                                        <option value="esp" className="text-black">Español</option>
                                        <option value="eng" className="text-black">Inglés</option>
                                    </select>
                                    </label>

                            </li>
                        </ul>
                }

            </div>


        </nav>

    );
}