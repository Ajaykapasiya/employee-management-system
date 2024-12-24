import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = () => {
  //console.log("TaskList component is rendering");
  return (
    <div
      id="tasklist"
      className=" h-[55%] flex overflow-x-auto items-center justify-start w-full py-5 flex-nowrap mt-10 rounded-xl"
    >
      <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask />
    </div>
  );
};

export default TaskList;
