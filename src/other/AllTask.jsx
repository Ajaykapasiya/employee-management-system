import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-40 overflow-auto ">
        <div className="bg-red-400 py-2 px-4 mb-3 flex justify-between rounded">
          <h2 className="w-1/5 bg-red-600">Employee Name </h2>
          <h3 className="w-1/5 bg-red-600 ">New Task </h3>
          <h5 className="w-1/5 bg-red-600 ">Active Task</h5>
          <h5 className="w-1/5 bg-red-600 ">Completed</h5>
        </div>
      {authData.employees.map(function (elem) {
        return <div className="bg-red-400 py-2 px-4 mb-3 flex justify-between rounded">
          <h2 className="w-1/5 bg-red-600">{elem.firstname}</h2>
          <h3 className="w-1/5 bg-red-600 ">Make a UI design </h3>
          <h5 className="w-1/5 bg-red-600 ">Status</h5>
          <h5 className="w-1/5 bg-red-600 ">Status</h5>
        </div>
      })}
      
    </div>
  )
}

export default AllTask;
