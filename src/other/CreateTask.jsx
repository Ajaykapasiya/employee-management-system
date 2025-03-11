import React, { useState } from "react";

const CreateTask = () => {
  const [taskTittle, setTaskTittle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskdate, setTaskDate] = useState("");
  const [assignTO, setAssignTO] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log("Task created");

    setNewTask({
      taskTittle,
      taskDescription,
      taskdate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: true,
    });

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach(function (elem) {
      if (assignTO === elem.firstname) {
        elem.tasks.push(newTask)

      elem.taskNumbers.newTask = elem.taskNumbers.newTask+1; 
      }
    })

   localStorage.setItem('employee' ,JSON.stringify("data"))
    //setTaskTittle('')
    //setCategory('')
    //setAssignTO('')
    //setTaskDate('')
    //setTaskDescription('')
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
            <input
              value={taskTittle}
              onChange={(e) => setTaskTittle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskdate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="Date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTO}
              onChange={(e) => setAssignTO(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
