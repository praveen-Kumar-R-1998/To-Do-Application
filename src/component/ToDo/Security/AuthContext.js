import { createContext, useContext, useState } from "react";
// 1. Create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 2. put some state in the context
export default function AuthProvider({ children }) {

  // put some state in the context

  const [isAuthenticated, setAuthenticated] = useState(false);

  function login(userName, password) {
    if (userName === "Praveen" && password === "abcd") {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
