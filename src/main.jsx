import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from './AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    
    <BrowserRouter>

      <HelmetProvider>
      <Navbar />
      </HelmetProvider>
   

    </BrowserRouter>
  </AuthProvider>

)
