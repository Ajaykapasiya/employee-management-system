import React from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../Tasklist/TaskList';



const EmployeeDashboard = ({data,handleLogout}) => {
  //console.log(data);
  

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
      
      

     <Header data={data} handleLogout={handleLogout}/>
     <TaskListNumber data={data}/>
     <TaskList data={data}/>
     
    
    </div>
  )
}

export default EmployeeDashboard
