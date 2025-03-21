import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData , setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-60  ">
        
    
        <div className="bg-red-400 py-3 px-2 mb-5 flex justify-between rounded">
          <h2 className="text-lg font-medium w-1/5 ">Employee Name </h2>
          <h3 className="text-lg font-medium w-1/5 ">New Task </h3>
          <h5 className="text-lg font-medium w-1/5 ">Active Task</h5>
          <h5 className="text-lg font-medium w-1/5 ">Completed</h5>
          <h5 className="text-lg font-medium w-1/5 ">Failed</h5>

        </div>
      <div className=" h-[90%] overflow-auto ">
      {userData.employees.map(function (elem , idx) {
        return <div key={idx} className="border-2 bg-emerald-500 py-2 px-3 mb-3 flex justify-between rounded">
          <h2 className="text-lg font-medium w-1/5">{elem.firstname}</h2>
          <h3 className="text-lg font-medium w-1/5 text-white ">{elem.taskNumbers.newTask}</h3>
          <h5 className="text-lg font-medium w-1/5 text-white ">{elem.taskNumbers.active}</h5>
          <h5 className="text-lg font-medium w-1/5 text-white ">{elem.taskNumbers.completed}</h5>
          <h5 className="text-lg font-medium w-1/5 text-white ">{elem.taskNumbers.failed}</h5>
          
          
        </div>
      })}
      
      </div>
    </div>
  )
}

export default AllTask;