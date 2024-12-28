import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
 
    const authData = useContext(AuthContext)
    console.log(authData); 

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-40 overflow-auto '>

        <div className='bg-red-400 py-2 px-4 mb-3 flex justify-between rounded'>
            <h2>Ajay</h2>
            <h3>Make a UI design </h3>
            <h5>Status</h5>
        </div>

        <div className='bg-green-400 py-2 px-4 mb-3 flex justify-between rounded'>
            <h2>Ajay</h2>
            <h3>Make a UI design </h3>
            <h5>Status</h5> 
        </div>

        <div className='bg-yellow-400 py-2 px-4 mb-3 flex justify-between rounded'>
            <h2>Ajay</h2>
            <h3>Make a UI design </h3>
            <h5>Status</h5>
        </div>

        <div className='bg-blue-400 py-2 px-4 mb-3 flex justify-between rounded'>
            <h2>Ajay</h2>
            <h3>Make a UI design </h3>
            <h5>Status</h5>
        </div>

        <div className='bg-pink-400 py-2 px-4 mb-3 flex justify-between rounded'>
            <h2>Ajay</h2>
            <h3>Make a UI design </h3>
            <h5>Status</h5>
        </div>

        <div className='bg-red-900 py-2 px-4 mb-3 flex justify-between rounded'>
            <h2>Ajay</h2>
            <h3>Make a UI design </h3>
            <h5>Status</h5>
        </div>
      
    </div>
  )
}

export default AllTask
