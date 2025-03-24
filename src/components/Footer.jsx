import React, { useState, useRef } from "react";
import { useAuth } from "../AuthProvider";
import '@fortawesome/fontawesome-free/css/all.css';
import BtnNotLoged from "./BtnNotLoged";
import BtnLoged from "./BtnLoged";

export default function Footer() {

    const userLenguage = navigator.language || navigator.userLanguage;
    console.log("lenguage:",userLenguage);


    return (
<footer className="bg-white w-screen  fixed bottom-0 p-6 shadow-sm m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="hover:underline">PardInc</a>. No Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
    );
}