import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorge";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: [],
    admin: [], 


  });

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData({
      employees: employees || [],
     // admin: admin || [],
    });
  }, [])


  return (
    <div>
      <AuthContext.Provider value={[userData ,setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
