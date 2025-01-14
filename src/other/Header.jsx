import React, { useState ,useEffect} from 'react'

function Header({data,handleLogout}) {
 // console.log(data);
 const [ userName , setUserName] = useState('')
 
 useEffect(() => {
  if (!data) {
    setUserName('Admin')
  }
  else {
    setUserName(data.firstname)
  }
  
}, [data]);
 

export default Header
