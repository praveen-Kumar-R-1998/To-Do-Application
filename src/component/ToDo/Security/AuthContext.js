// 3. share the created context with other components

import { createContext, useState } from "react";
// 1. Create a context
export const AuthContext = createContext();

// 2. put some state in the context
export default function AuthProvider({ children }) {
  // put some state in the context
  const [number, setNumber] = useState(10);

  return (
    <AuthContext.Provider value={{ number }}>{children}</AuthContext.Provider>
  );
}
