import React from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskLists from '../Tasklist/TaskLists'


const EmployeeDashboard = () => {

  return (
    <div className='p-10 bg-[#1C1C1C] '>
      
     <Header/>
     <TaskListNumber/>
     <TaskLists/>
     
    
    </div>
  )
}

export default EmployeeDashboard
