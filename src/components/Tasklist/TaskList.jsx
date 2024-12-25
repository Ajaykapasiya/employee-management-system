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

        {data.tasks.map((elem , idx)=>{
         
         if (elem.active) {
          return<AcceptTask key={idx}/>
         }

         if (elem.NewTask) {
          return <NewTask key={idx}/>
         }

         if (elem.completed) {
          return <CompleteTask key={idx}/>
         }

        if (elem.failed) {
          return <FailedTask key={idx}/>
        }
          
        })}
      
    </div>
  );
};

export default TaskList;
