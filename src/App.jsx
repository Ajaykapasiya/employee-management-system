import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorge";
import { AuthContext } from "./context/AuthProvider";


const handleLogin = (email, password) => {
  if (email == "admin@me.com" && password == "123") {
    setUser('admin')
    
    
  } else if (email == "user@me.com" && password == "123") {
    setUser('employees')
   
f
  } else {
    alert("Invalid Credentails");
  }
};


return (
  <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/> }
  </>
);
};

export default App;
