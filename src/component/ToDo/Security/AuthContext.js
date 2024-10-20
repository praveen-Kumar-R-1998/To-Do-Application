import { createContext, useContext, useState } from "react";
// 1. Create a context
export const AuthContext = createContext();

export const useAuth = ()=>useContext(AuthContext)


// 2. put some state in the context
export default function AuthProvider({ children }) {
  // put some state in the context
  const [number, setNumber] = useState(10);

  setInterval(
    ()=>setNumber(number+1)
    ,
    5000
  )
  return (
    <AuthContext.Provider value={{ number }}>{children}</AuthContext.Provider>
  );
}
