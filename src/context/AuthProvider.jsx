import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorge";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: [],
    admin: null, 

  });

  useEffect(() => {
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
  }, [])


  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
