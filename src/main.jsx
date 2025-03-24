import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from './AuthProvider.jsx'
import Login from './views/Login.jsx'
import Footer from './components/Footer.jsx';
import SignUp from './views/SignUp1.jsx';


createRoot(document.getElementById('root')).render(
  <AuthProvider>

    <BrowserRouter>
      <Navbar />

      <HelmetProvider>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/signup-1' element={<SignUp />}></Route>
        </Routes>
      </HelmetProvider>
      <Footer></Footer>

    </BrowserRouter>
  </AuthProvider>

)
