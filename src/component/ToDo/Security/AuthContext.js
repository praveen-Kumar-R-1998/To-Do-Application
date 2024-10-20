import { createContext, useContext, useState } from "react";
// 1. Create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 2. put some state in the context
export default function AuthProvider({ children }) {
  // put some state in the context
  const [number, setNumber] = useState(10);

  const [isAuthenticated, setAuthenticated] = useState(false);

//   setInterval(() => setNumber(number + 1), 5000);

/**
 * 
 * this is {{ number, isAuthenticated, setAuthenticated }}
 * 
 * similar to 
 * 
 * const valueToBeShared = { number, isAuthenticated, setAuthenticated }
 * value={valueToBeShared}
 */
  return (
    <AuthContext.Provider value={{ number, isAuthenticated, setAuthenticated }}>{children}</AuthContext.Provider>
  );
}
