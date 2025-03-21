import { createContext, useContext, useState, useEffect } from "react";
import api from "./api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/user")
      .then(response => setUser(response.data))
      .catch(() => setUser(null));
  }, []);

  const login = async (credentials) => {
    try {
      await api.get("/sanctum/csrf-cookie");
      const response = await api.post("/login", credentials);
      setUser(response.data.user);
      return response;
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post("/logout");
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
