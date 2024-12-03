import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorge";


const App = () => {

  const [ user , setUser] = useState(null)

const handleLogin = (email , password) =>{
if (email == 'admin@me.com' && password == '123'){
  console.log("This is admin");
}
else{
  alert("Invalid Credentails")
}

}

handleLogin('admin@me.com' , 123)
  return (
  
      <>
       {!user ? <Login/> : ''}
      {/* <EmployeeDashboard/> */}
     {/*<AdminDashboard/> */}
      </>
    
  )
}

export default App;