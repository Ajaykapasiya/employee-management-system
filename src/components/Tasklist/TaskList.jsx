import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import { data } from "autoprefixer";

const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div
      id="tasklist"
      className=" h-[55%] flex overflow-x-auto items-center justify-start w-full py-5 flex-nowrap mt-10 rounded-xl">

        {data.tasks.map((elem)=>{
         
         if (elem.active) {
          return<AcceptTask/>
         }

         if (elem.NewTask) {
          return <NewTask/>
         }

         if (elem.completed) {
          return <CompleteTask/>
         }

        if (elem.failed) {
          return <FailedTask/>
        }
          
        })}
      
    </div>
  );
};

export default TaskList;
