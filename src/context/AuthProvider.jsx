import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorge";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: [],
    admin: [],
  });

  useEffect(() => {
    // Ensure that local storage is set with initial data if not already present
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData({
      employees: employees || [],
      // admin: admin || [],
    });
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;