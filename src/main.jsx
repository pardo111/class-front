import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from './AuthProvider.jsx'
import Login from './views/Login.jsx'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    
    <BrowserRouter>

      <HelmetProvider>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
      </HelmetProvider>
   

    </BrowserRouter>
  </AuthProvider>

)
